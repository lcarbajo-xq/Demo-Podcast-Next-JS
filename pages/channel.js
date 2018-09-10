import { Component } from 'react';

import Head from 'next/head';
import { Link } from '../routes';
import Error from './_error';
import slug from '../helpers/slug';
import ChannelGrid from '../src/components/channel-grid';
import PodcastListWithClick from '../src/components/PodcastListWithClick';
import PodcastPlayer from '../src/components/podcast-player';

export default class extends Component {

    constructor(props){
        super(props);
        this.state = { openPodcast: null }
    }

    static async getInitialProps({ query, res }) {
        const idChannel = query.id;
        try { 
            const [ requestChannel , requestChild, requestAudio ] = await Promise.all([
                fetch (`https://api.audioboom.com/channels/${ idChannel }`),
                fetch (`https://api.audioboom.com/channels/${ idChannel }/child_channels`),
                fetch (`https://api.audioboom.com/channels/${ idChannel }/audio_clips`)
            ])

            if (requestChannel.status >= 400) {
                res.statusCode = requestChannel.status;
                return { channel: null , audio_clips: null, channels: null, statusCode:  requestChannel.status};
            }

            const { body : { channel } } = await requestChannel.json(); 
            const { body : { audio_clips } } = await requestAudio.json();
            const { body : { channels } } = await requestChild.json();

            return { channel , audio_clips, channels, statusCode: 200 };
        } catch(e) {
            res.statusCode = 503;
            return { channel: null , audio_clips: null, channels: null, statusCode: 503 };
        }
    }

    openPodcast = (event, infoPodcast) => {
        event.preventDefault();
        this.setState({
            openPodcast: infoPodcast,
        })
    }

    closePodcast = () => {
        event.preventDefault();
        this.setState({
            openPodcast: null,
        })
    }

    render() {

        const { channel, audio_clips, channels, statusCode } = this.props
        const { openPodcast } = this.state

        if (statusCode !== 200 ) {
            return <Error statusCode={ statusCode }/>
        }
        return (

            <div>
                <Head> 
                    <title>{ `${channel.title} | Channel` }</title> 
                </Head>
                <header>{ channel.title }</header>
                <h1>{ channel.title }</h1>

                 <div className="banner" style={{ backgroundImage: `url(${channel.urls.banner_image.original})` }} />
                { openPodcast && <div className="modal">
                                    <PodcastPlayer 
                                        clip={ openPodcast }
                                        onClose= {this.closePodcast }
                                    />
                                </div>}
                {/* <Layout title={ `${channel.title} | Channel` }>
                    <ChannelGrid channels={ audio_clips } />
                </Layout> */}
                {/* { audio_clips.map( (clip) => (
                    <Link route='podcast' params={{ slugChannel: slug(channel.title), idChannel: channel.id, slug: slug(clip.title), id: clip.id }} >
                        <div className="clip">
                            <h2> { clip.title } </h2>
                        </div>
                    </Link>
                )) } */}
                { channels.length > 0 && 
                    <div>
                        <header> {`${ channel.title } > Series `} </header>
                        <ChannelGrid channels={ channels } />
                    {/* // <Link route='channel' params={{ slug: slug(channel.title), id: channel.id }} >
                    //     <a className="channel">
                    //         <img src={ channel.urls.logo_image.original } alt="cover"/>
                    //         <h2> { channel.title } </h2>
                    //     </a>
                    // </Link> */}
                    </div>
                }
                <h2>Últimos Podcasts</h2>
                <PodcastListWithClick 
                    podcasts={ audio_clips }
                    onClickPodcast={ this.openPodcast }
                />
                <style jsx>{`
                    header {
                        color: #fff;
                        background: #55E6C1;
                        padding: 15px;
                        text-align: center;
                        font-weight: bold;
                    }
                    .banner {
                        width: 100%;
                        padding-bottom: 25%;
                        background-position: 50% 50%;
                        background-size: cover;
                        background-color: #aaa;
                    }
                    .channels {
                        display: grid;
                        grid-gap: 15px;
                        padding: 15px;
                        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                    }
                    .channel img {
                        border-radius: 3px;
                        box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                        width: 100%;
                    }
                    h1 {
                        padding: 15px;
                        font-weight: 600;
                    }
                    h2 {
                        padding: 5px;
                        font-size: 0.9em;
                        font-weight: 600;
                        margin: 0;
                        text-align: absolute;
                    }
                    .modal {
                        position: fixed;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        z-index: 99999;
                    }
                `}</style>
                <style jsx global>{`
                    body {
                        margin: 0;
                        background: white;
                        font-family: system-ui;
                    }
                `}</style>
             </div> 
        )
    }
}
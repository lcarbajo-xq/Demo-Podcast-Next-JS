import { Component } from 'react';

import Link from 'next/link';
import Error from './_error';

export default class extends Component {

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

    render() {

        const { channel, audio_clips, channels, statusCode } = this.props
        if (statusCode !== 200 ) {
            return <Error statusCode={ statusCode }/>
        }
        return (
            <div>
                <header>Podcasts</header>
                <h1>{ channel.title }</h1>
                { audio_clips.map( (clip) => (
                    <Link href={ `/podcast?id=${ clip.id }` }>
                        <div className="clip">
                            <h2> { clip.title } </h2>
                        </div>
                    </Link>
                )) }

                { channels.map( (serie) => (
                    <h3>{ serie.title }</h3>
                )) }

                <style jsx>{`
                    header {
                        color: #fff;
                        background: #55E6C1;
                        padding: 15px;
                        text-align: center;
                        font-weight: bold;
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
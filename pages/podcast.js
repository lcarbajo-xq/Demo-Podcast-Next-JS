import 'isomorphic-fetch';

import Link from 'next/link';
import { Component } from 'react';

export default class extends Component {

    static async getInitialProps({ query }) {
        const idAudio = query.id;
        console.log(query.id);
        
        const requestClip = await fetch (`https://api.audioboom.com/audio_clips/${ idAudio }.mp3`);
        
        const { body : { audio_clip } } = await requestClip.json();
        console.log(audio_clip.title);
        return { audio_clip };
    }
    render(){
        const { audio_clip } = this.props
        return (
            <div>
                <header>Podcasts</header>
                <div className="modal">
                    <div className="cover">
                            <nav>
                                <Link href={`/channel?id=${audio_clip.channel.id}`}>
                                    <a className='close'>&lt; Volver</a>
                                </Link>
                            </nav>
                            <picture>
                                <div style={{ backgroundImage: `url(${audio_clip.urls.image || audio_clip.channel.urls.logo_image.original})` }} />
                            </picture>
                        <div className="audioContainer">
                            <h2>{ audio_clip.title }</h2>
                            <h1>{ audio_clip.channel.title }</h1>
                            <audio src={ audio_clip.urls.high_mp3 } controls/>
                        </div>
                    </div>
                </div>
                    <style jsx>{`
                        .cover {
                            display: flex;
                            height: 100%;
                            flex-direction: column;
                            background: #55efc4;
                            color: white;
                          }
                        nav {
                            background: none;
                        }
                        nav a {
                            display: inline-block;
                            padding: 15px;
                            color: #00b894;
                            cursor: pointer;
                            text-decoration: none;
                        }
                        .modal{
                            position: fixed;
                            top: 0;
                            left: 0;
                            bottom: 0;
                            right: 0;
                            z-index: 99999;
                        }
                        picture {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            flex: 1 1;
                            flex-direction: column;
                            width: auto;
                            padding: 10%;
                        }
                        picture div {
                            width: 100%;
                            height: 100%;
                            background-position: 50% 50%;
                            background-size: contain;
                            background-repeat: no-repeat;
                        }
                        .audioContainer {
                            background: #218c74;
                            padding: 30px;
                            text-align: center;
                        }
                        h1 {
                            text-align: center;
                            font-weight: 100;
                            margin: 3 auto;
                            color: #f7f1e3;
                        }
                        h2 {
                            padding: 5px;
                            font-size: 25px;
                            font-weight: 600;
                            text-align: center;
                            color: #7efff5;
                        }
                    `}</style>
                    <style jsx global>{`
                        body {
                            margin: 0;
                            background: #218c74;
                            font-family: system-ui
                        }
                    `}</style>
                </div>
        )
    }
}

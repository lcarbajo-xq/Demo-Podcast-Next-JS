import 'isomorphic-fetch';

import { Component } from 'react';
export default class extends Component {
    static async getInitialProps() {
        const request = await fetch ('https://api.audioboom.com/channels/recommended')
        const { body : channels } = await request.json();
        return { channels };
    }
    render() {
        const { channels } = this.props

        return <div>
                <header>Podcasts</header>
                <div className="channels">
                { channels.map((channel) => (
                    <div className="channel">
                        <img src={ channel.urls.logo_image.original} alt="cover"/>
                        <h2> {channel.title} </h2>
                    </div>
                )) }

                </div>
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
                    h2 {
                        padding: 5px;
                        font-size: 0.9em;
                        font-weight: 600;
                        margin: 0;
                        text-align: center;
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
    }
}
import 'isomorphic-fetch';

import Layout from '../src/components/layout';
import ChannelGrid from "../src/components/channel-grid";
import Error from './_error';
import { Component } from 'react';

export default class extends Component {
    static async getInitialProps({ res }) {
        try{
            const request = await fetch ('https://api.audioboom.com/channels/recommended')
            const { body : channels } = await request.json();
            return { channels, statusCode: 200 };
        } catch(e){
            res.statusCode = 503
            return { channels: null, statusCode: 503 }
        }
    }

    render() {
        const { channels, statusCode } = this.props

        if (statusCode !== 200 ) {
            return <Error statusCode={ statusCode }/>
        }
        return (
                <Layout title="Podcasts | Inicio">
                    <ChannelGrid channels={ channels } />
                </Layout>
        )
    }   
}
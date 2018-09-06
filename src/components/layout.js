import { Component } from 'react';
import Link from 'next/link';

import Head from 'next/head';

export default class Layout extends Component {
    render() {
        const { children, title } = this.props
        return (
            <div>
                <Head>
                    <title>{ title }</title>
                </Head>
                <header>
                    <Link href="/">
                        <a>Podcasts</a>
                    </Link>
                </header>
                
                { children }

                <style jsx>{`
                    header {
                            color: #fff;
                            background: #55E6C1;
                            padding: 15px;
                            text-align: center;
                            font-weight: bold;
                        }
                    header a {
                        color: #fff;
                        text-decoration: none;
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
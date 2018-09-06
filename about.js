import { Component } from 'react';
export default class extends Component {
    render() {
        return <div>
        <img src="/static/logo.png" alt="logo"></img>
        <h1>Creado por Luis Carbajo</h1>
        <p>Proyecto con Next JS</p>
        <style jsx>{`
            h1 {
                font-size: 20px;
                color: white;
                position: relative;
                font-family: Helvetica;
                text-align: center;
            }
            p {
                color: white;
                text-align: center;
                font-family: Helvetica;
            }
            img {
                margin-top: 25%;
                margin-left: 37%;
                max-width: 25%;
            }
        `
        }</style>
        <style jsx global>{`
            body {
                background: #34495e
            }
         `}</style>
        </div>
    }
}



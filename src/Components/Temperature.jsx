import React, { Component } from 'react'

export default class Temperature extends Component {
    state = {
        temperature: ""
    }
    setTemperature = (evt) => {
        this.setState({temperature: evt.target.value})
    }

    render() {
        const {temperature} = this.state;
        return (
            <div>
                <input onChange={this.setTemperature} type="number" value={temperature} placeholder="Temperature in C°"/>
                {temperature && temperature <10 && <p style={{color: "blue"}}>It's cold ❄️</p>}
                {(temperature >=10 && temperature <=30) && <p style={{color: "black"}}>It's nice 🌼</p>}
                {temperature >30 && <p style={{color: "red"}}>It's warm ☀️</p>}
            </div>
        )
    }
}

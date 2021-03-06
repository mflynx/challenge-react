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
                <input onChange={this.setTemperature} type="number" value={temperature} placeholder="Temperature in CÂ°"/>
                {temperature && temperature <10 && <p style={{color: "blue"}}>It's cold âï¸</p>}
                {(temperature >=10 && temperature <=30) && <p style={{color: "black"}}>It's nice ð¼</p>}
                {temperature >30 && <p style={{color: "red"}}>It's warm âï¸</p>}
            </div>
        )
    }
}

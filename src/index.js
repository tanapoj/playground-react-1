import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Card extends Component {

    constructor(){
        super()
        this.handleOnClick = this.handleOnClick.bind(this)
    }

    state = {
        counter: 1
    }

    handleOnClick(e){
        console.log("click!", e)
        this.setState({counter: this.state.counter + 1})
    }

    render() {
        const style = {
            margin: 20,
            padding: 20,
            color: 'white',
            backgroundColor: this.props.color,
        }

        return (
            <div style={style}>
                <button onClick={this.handleOnClick}>
                    {this.props.children}
                </button>
                : {this.state.counter}
            </div>
        )
    }
}

const node = document.querySelector('#react-root')
let element = (
    <div>
        <Card color={'skyblue'}>Card 1</Card>
        <Card color={'steelblue'}>Card 2</Card>
    </div>
)

//element = <div>test</div>

ReactDOM.render(element, node)

let f = fetch('data/info.json')
f
    .then( (res) => res.json() )
    .then( (res) => {
    console.log('res', res.list)
})
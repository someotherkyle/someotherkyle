import React, {Component} from 'react'

export default class TileContainer extends Component {
    constructor(){
        super()
        this.state = {
            index: -1,
            value: -1
        }
    }

    initializeIndex = () => {
        //TODO: verify index availability 
        //set index to randomly generated, available index
        let availableIndex = -1 //change that <--
        this.setState({
            ...this.state,
            index: availableIndex
        })
    }

    initializeValue = () => {
        let val = Math.random();
        val < .9 ? val = 2 : val = 4
        this.setState({
            ...this.state,
            value: val
        })
    }

    initializeValue()
    initializeIndex()

    
}
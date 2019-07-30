import React, {Component} from 'react'
import TileContainer from './TileContainer'

export default class BoardContainer extends Component {
    constructor(){
        super()
        this.state = {
            occupied: []
        }
    }

    render(){
        return(
            <div className='gameBoard'>
                <div className='row-0'>
                    <div className='col-0'></div>
                    <div className='col-1'></div>
                    <div className='col-2'></div>
                    <div className='col-3'></div>
                </div>
                <div className='row-1'>
                    <div className='col-0'></div>
                    <div className='col-1'></div>
                    <div className='col-2'></div>
                    <div className='col-3'></div>
                </div>
                <div className='row-2'>
                    <div className='col-0'></div>
                    <div className='col-1'></div>
                    <div className='col-2'></div>
                    <div className='col-3'></div>
                </div>
                <div className='row-3'>
                    <div className='col-0'></div>
                    <div className='col-1'></div>
                    <div className='col-2'></div>
                    <div className='col-3'></div>
                </div>
            </div>
        )
    }
}
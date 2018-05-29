import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {increase, setCapsInput} from '../ducks/reducer'


function Header(props) {
    return (
        <div className='header'>
            <h3>This Header</h3>
            <Link to='/'><h3 className='homeRoute'>Home</h3></Link>
            <button onClick={() => props.increase(5)}>+5</button>
            <br/>
            <input placeholder='CAPS text' onChange={props.setCapsInput}/>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps, {increase, setCapsInput})(Header)
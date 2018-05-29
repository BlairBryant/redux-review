import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {increase} from '../ducks/reducer'


function Counter(props) {
    console.log(props)
    return (
        <div className='counter'>
            <p className='countDisplay'>{props.count}</p>
            <button onClick={() => props.increase(1)}>+1</button>
            <br/><br/><br/>
            <Link to='/textchange'>TextChange</Link>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps, {increase})(Counter)
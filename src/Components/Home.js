import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function Home() {
    return (
        <div className='home'>
            <h2>This is Home.js, a boring landing page. Try the other pages.</h2>
            <Link to='/counter'><h1>Counter Page</h1></Link>
            <Link to='/textchange'><h1>TextChange Page</h1></Link>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        
    }
}

export default connect(mapStateToProps)(Home)
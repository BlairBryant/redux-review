import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {setReverseText} from '../ducks/reducer'

class TextChange extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: ''
        }
    }

    reverseText() {
        let reversed = this.state.input.split('').reverse().join('')
        console.log(reversed)
        this.props.setReverseText(reversed)
        this.setState({input: ''})
    }

    render() {
        console.log(this.props)
        return (
            <div className='textChange'>
                <h1>TextChange View</h1>
                <h2>CAPS Text</h2>
                <h3 className='capsText'>{this.props.capsText}</h3>
                <h2>Reverse Text</h2>
                <input value={this.state.input} placeholder='reverse text' onChange={e => this.setState({input: e.target.value})}/>
                <button onClick={() => this.reverseText()}>Submit</button>
                <h4>{this.props.reverseText}</h4>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        capsText: state.capsText,
        reverseText: state.reverseText
    }
}

export default connect(mapStateToProps, {setReverseText})(TextChange)
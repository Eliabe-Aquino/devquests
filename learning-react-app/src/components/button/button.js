import React, {Component} from 'react'
import './button.css'


const btnAlert = () => {
    let btnCv = document.querySelector('.btn')
    return alert(`A label desse Botão é ${btnCv.innerHTML}`)
}

class Button extends Component {
    render(){
        return <button className='btn' onClick={btnAlert}>{this.props.label}</button>
    }
}
Button.defaultProps = {
    label: 'clique Aqui'
}

export default Button
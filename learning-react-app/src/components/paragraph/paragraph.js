import React from 'react'
import './paragraph.css'
import generateColor from './generateColor';

const getColor = () => {
    let paragrafo = document.getElementById('paragraph')
     paragrafo.style.color = generateColor();
    
}
let paraStyle = {
    color: generateColor(),
    textTransform: 'uppercase'
}

const Paragraph = () => {
    return (
        <div>
            <p id="paragraph" style={paraStyle} onClick={()=> {
                getColor()
            }}>
                Clique em no texto e veja uma magica acontecer ou recarregue a pagina.
            </p>
        </div>
    )
}

Paragraph.defaultProps = {
    color: 'black'
}
export default Paragraph


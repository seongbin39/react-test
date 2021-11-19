import dummy from './dummyData'
import './Card.css'

function Card({word_picked}) {
    return (
        <div className={Card}>
            <h1 style={{borderBottom: '1px solid lightgrey'}}>Flash Card</h1>
            <h2>{word_picked.word}</h2>
            <h2>{word_picked.meaning}</h2>
        </div>
    )
}

export default Card
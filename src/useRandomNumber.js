import { useState, useEffect } from 'react';

function useRandomNumber(minNum, maxNum) {
    const [number, setNumber] = useState(0)
    const pickRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min+1)) + min
    }
    const showRandomNumber = () => {
        setNumber(pickRandomNumber(minNum, maxNum))
    }

    useEffect( () => {
        const countId = setInterval(showRandomNumber, 1000)
        return () => {
            clearInterval(countId)
        }
    })

    return number
}

export default useRandomNumber
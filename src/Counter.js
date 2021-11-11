import React from 'react';

class Counter extends React.Component {
    state = {
        count: 0
    }
    increase = () => {
        const {count} = this.state
        console.log(`before updating state: ${count}`)
        this.setState( (prevState) => {
            return {count: prevState.count + 1}
        })
        console.log(`after updating state: ${count}`)
    }
    decrease = () => {
        const {count} = this.state
        console.log(`before updating state: ${count}`)
        this.setState((prevState) => {
            return {count: prevState.count - 1}            
        })
        console.log(`after updating state: ${count}`)
    }
    increaseMultiple = () => {
        this.increase()
        this.increase()
        this.increase()

        console.log(`right after event: ${this.state.count}`)
    }
    decreaseMultiple = () => {
        this.decrease()
        this.decrease()
        this.decrease()

        console.log(`right after event: ${this.state.count}`)
    }
    initialize = () => {
        const {count} = this.state
        this.setState({count: count * 0})
        console.log(`after updating state: ${count}`)
    }
    render() {
        const {count} = this.state
        console.log(`state in render funcion: ${count}`)
        return (
            <>
                <h1>{count}</h1>
                <button type="button" onClick={this.increase}>Increase count</button>
                <button type="button" onClick={this.decrease}>Decrease count</button>
                <button type="button" onClick={this.increaseMultiple}>IncreaseMultiple count</button>
                <button type="button" onClick={this.decreaseMultiple}>DecreaseMultiple count</button>
                <button type="button" onClick={this.initialize}>Initialize count</button>
            </>
        )
    }
}
export default Counter;
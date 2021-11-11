import React from 'react';

class NameTag extends React.Component {
    state = {
        name: 'initial name'
    }
    // 이벤트 핸들러 함수
    changeName = () => {
        this.setState({ name: 'changed name' })
    }
    render() {
        console.log('NameTag')
        const { name } = this.state
        return (
            <>
                <h1>{name}</h1>
                <button type="button" onClick={this.changeName}>Change Name</button>
            </>
        )
    }
}

export default NameTag;
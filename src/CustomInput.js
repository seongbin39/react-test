import React from 'react';

// class CustomInput extends React.Component {
//     constructor(props) {
//         super(props)
//         this.textInput = React.createRef(); // 1. ref 생성하기
//     }
//     focusInput = () => {
//         this.textInput.current.focus()
//         console.log(this.textInput.current) // 3. ref 사용
//     }
//     render() {
//         return (
//             <>
//                 {/* 2. ref 설정하기 */}
//                 <input type="text" ref={this.textInput}></input>
//                 <button onClick={this.focusInput}>Focus Input</button>
//             </>
//         )
//     }
// }

// class CustomInput extends React.Component {
//     constructor(props) {
//         super(props)
//         this.textInput = React.createRef(); // 1. ref 생성하기
//     }
//     focusInput = () => {
//         //this.textInput.current.focus()
//         this.textInput.current.click()
//         console.log(this.textInput.current) // 3. ref 사용
//     }
//     render() {
//         return (
//             <>
//                 {/* 2. ref 설정하기 */}
//                 <h1>File Upload</h1>
//                 <input type="file" style={{visibility: 'hidden'}} ref={this.textInput}></input>
//                 <button onClick={this.focusInput}>Focus Input</button>
//             </>
//         )
//     }
// }

function CustomInput(props){
    const fileInput = React.useRef(null)
    const focusInput = () => {
        fileInput.current.click()
    }
    return (
        <>
            <h1>File Upload</h1>
            <input type="file" style={{visibility: 'hidden'}} ref={fileInput}></input>
            <button onClick={focusInput}>Focus Input</button>
        </>
    )
}

export default CustomInput;
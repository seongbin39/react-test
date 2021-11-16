import './App.css';
import React from 'react';
// import YoutubeVideo from './YoutubeVideo';
// import dummyData from './generatedRandom';
// import Dictionary from './Dictionary';
// import Movie from './Movie';
// import dummy from './dummyData';
import Button from './Button';
// import Word from './Word';
// import Nav from './Nav';
// import Modal from './Modal';
// import Card from './Card';
// import CustomInput from './CustomInput'
// import images from './imgData'
// import Sidebar from './Sidebar'
// import youtubeVideos from './YoutubeVideos';

// import loginData from './loginData';

// class App extends React.Component {
//   state ={
//     index: 0,
//   }

//   increaseIndex = () => {
//     const nextIndex = this.state.index +1
//     this.setState({index: (nextIndex > youtubeVideos.length -1 ) ? 0 : nextIndex})
//   }

//   decreaseIndex = () => {
//     const prevIndex = this.state.index -1
//     this.setState({index: (prevIndex < 0) ? youtubeVideos.length -1 : prevIndex})
//   }

//   render() {
//     const {index} = this.state
//     const {increaseIndex, decreaseIndex} = this
//     const Path = youtubeVideos[index].src
//     const Title = youtubeVideos[index].title
//     return (
//       <div className="App">
//         <h1>{Title}</h1>
//         <iframe className="Video" width="560" height="315" src={Path} title={Title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        
//         <div className="control-btns">
//           <Button handleClick={decreaseIndex}>Prev</Button>
//           <Button handleClick={increaseIndex}>Next</Button>
//         </div>
//       </div>
//     )
//   }
// }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // fileName: '', 
      // imgSrc: '',
      files: []
    }
    this.fileInput = React.createRef()
  }

  openFileWindow = () => {
    this.fileInput.current.click()
  }

  isValid = (type) => {
    return type === 'image'
  }

  handleChange = (e) => {
    const files = e.target.files
    const uploadedFiles = [] // 빈 배열 생성

    for(let file of files) {
      if(this.isValid(file.type.split('/')[0])) {
        const name = file.name
        const imgPath = URL.createObjectURL(file)
        uploadedFiles.push({name, imgPath})
      }else{
        alert(`file [${file.name}] type is not valid`)
      }
    }
    this.setState({files:uploadedFiles})

    // console.log(e.target.files.length)
    // const file = e.target.files[0] // 배열이기 때문
    // const imgPath = URL.createObjectURL(file) // file 데이터 -> blob
    // console.log(imgPath)
    // const type = file.type.split('/')[0]  // ["image", "png"]

    // // 파일 유효성 검사
    // if(this.isValid(type)){
    //   this.setState({fileName: file.name, imgSrc: imgPath})
    // }else{
    //   this.setState({fileName: 'File is not valid type!', imgSrc: ''})
    // }
  }

  render() {
    // const {fileName, imgSrc} = this.state
    const {files} = this.state
    return (
      <div className="App">
        {files.length !== 0 && files.map( (file, id) => {
          return (
            <div key={id}>
            <h1>{file.name}</h1>
            <img src={file.imgPath} alt={file.name} width="70px" height="70px"></img>
            </div>
          )
        })}
        {/* {imgSrc !== '' &&<img src={imgSrc} alt="img" width="300px" height="400px"></img> } */}
        <input className="Upload" type="file" onChange={this.handleChange} ref={this.fileInput} accept="image/*" multiple></input>
        <Button handleClick={this.openFileWindow}>업로드</Button>
      </div>
    )
  }
}

// class App extends React.Component {
//   state={
//     id: '',
//     password: '',
//     toggle: false,
//     isLogin: false,
//     open: false,
//   }

//   toggleMenu = () => {
//     this.setState({toggle: !this.state.toggle})
//   }
//   handleChange = (e) => {
//     // console.log(e.target.name, e.target.value)
//     const {name, value} = e.target
//     this.setState({ [name]: value})
//   }
//   login = (e) => { 
//     e.preventDefault() // 새로고침 방지 
//     const id = loginData[0].USER_ID
//     const password = loginData[0].USER_PASSWORD
//     // const {id, password} = this.state

//     if(this.state.id !== id) {
//       //alert('you failed to login, check your ID')
//       this.openModal()
//     }else if(this.state.password !== password){
//       //alert('you failed to login, check your Password')
//       this.openModal()
//     }
//     else {
//       this.setState({isLogin: true})
//     }
//   }

//   openModal = () => {
//     this.setState({open: true})
//   }

//   closeModal = () => {
//     this.setState({open: false})
//   }

//   removeModal = () => {
//     this.setState({open:false})
//   }

//   closeModal = () => {
//     this.setState({open:false})
//   }

//   render() {
//     console.log(loginData[0].USER_ID, loginData[0].USER_PASSWORD)
//     const {id, password, isLogin, open} = this.state
//     const {removeModal, closeModal} = this
//     const loginForm = (
//       <form>
//         <label>ID <input name="id" value={id} type="text" placeholder="Enter your Id" onChange={this.handleChange}></input></label><br/>
//         <label>Password <input name="password" value={password} type="password" placeholder="Enter your Password" onChange={this.handleChange}></input></label>
//         <div className="login-btn"><Button handleClick={this.login}>Login</Button></div>
//         <Modal open={open}>
//           <div className="header">로그인 실패</div>
//           <div className="footer">
//             <Button handleClick={closeModal}>닫기</Button>
//           </div>
//         </Modal>
//       </form>
//     )
//     const homePage = (
//       <h1>홈페이지</h1>
//     )
//     return (
//       <div className="App">
//         {isLogin? homePage:loginForm}
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   state = {
//     index: 0,
//     toggle: false,
//     menus: [ 
//       { icon: '♜', title: 'HOME' }, 
//       { icon: '♞', title: 'ABOUT' }, 
//       { icon: '☻', title: 'SETTING' }, 
//       { icon: '♜', title: 'HOME' }, 
//       { icon: '♞', title: 'ABOUT' }, 
//       { icon: '☻', title: 'SETTING' } 
//     ]
//   }

//   // 토글 사이드바
//   toggleMenu = () => {
//     this.setState({toggle: !this.state.toggle})
//   }

//   increaseIndex = () => {
//     const nextIndex = this.state.index +1
//     this.setState({index: (nextIndex > images.length -1 ) ? 0 : nextIndex})
//   }

//   decreaseIndex = () => {
//     const prevIndex = this.state.index -1
//     this.setState({index: (prevIndex < 0) ? images.length -1 : prevIndex})
//   }

//   render() {
//     const {index, toggle, menus} = this.state
//     const {increaseIndex, decreaseIndex} = this
//     const path = images[index].src
//     const title = images[index].title

//     return (
//       <div className="App">
//         <Button handleClick={this.toggleMenu}>Open Sidebar</Button>
//         <Sidebar open={toggle}>
//           {menus.map( (menu, id) => {
//             return (
//               <div className="menu" key={id}>{menu.icon} {menu.title}</div>
//             )
//           })}
//         </Sidebar>

//         <div className="img-container">
//           <img src={path} alt={title}></img>
//         </div>

//         <div className="control-btns">
//           <Button handleClick={decreaseIndex}>Prev</Button>
//           <Button handleClick={increaseIndex}>Next</Button>
//         </div>

//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   state = {
//     words: dummy,
//     toggle: true
//   }
//   screenMode = () => {
//     this.setState({toggle: !this.state.toggle})
//   }
//   // 삭제하는 이벤트핸들러 함수
//   handleRemove = (id, e) => {
//     console.log(id)
//     console.log(e.target.previousSibling.innerText)
//     const word = e.target.previousSibling.innerText
//     alert(`You want delete word - ${word}?`)

//     // 단어 제거
//     const word_filtered = this.state.words.filter( (w, index) => index !== id)
//     this.setState({words: word_filtered})
//   }
//   render() {
//     const { words } = this.state
//     return (
//       <div>
//         <h1>영단어 목록</h1>
//         {words.map( (w, id) => {
//           return (
//             <Word key={id} w={w} handleRemove={(e) => this.handleRemove(id, e)}></Word>
//           )
//         })}
//       </div>
//     )
//   }
// }

// 다크 모드
// class App extends React.Component {
//   state = {
//     toggle: true
//   }
//   toggleScreenMode = () => {
//     this.setState({toggle: !this.state.toggle})
//   }
//   render() {
//     const {toggle} = this.state
//     return (
//       <div className={`normal ${toggle? "":"dark"}`}>
//         <h1>Change Screen Mode</h1>
//         <button type="button" onClick={this.toggleScreenMode}>{toggle? "DARK":"NORMAL"}</button>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.showAlert = this.showAlert.bind(this);
//   }

//   showAlert() {
//     console.log(this)
//     alert('this is alert message1')
//   }

//   // showAlert = () => {
//   //   console.log(this)
//   //   alert('this is alert message2')
//   // }

//   render() {
//     return (
//       <div className="App">
//         <h1>Show Alert</h1>
//         <button type="button" onClick={this.showAlert}>show</button>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>App</h1>
//         <button></button>
//         <input type="file" style={{visibility: 'hidden'}}></input>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <CustomInput></CustomInput>
//     )
//   }
// }

// class App extends React.Component {
//   state = {
//     open: false,
//     msg: false 
//   }
//   // openModal = () => {
//   //   this.setState({open: !this.state.open})
//   // }
//   openModal = () => {
//     this.setState({open: true})
//   }
//   closeModal = () => {
//     this.setState({open: false, msg: false})
//   }
//   removeModal = () => {
//     this.setState({msg: true, open: false})
//   }
//   render() {
//     const {open, msg} = this.state
//     const {openModal, closeModal, removeModal} = this
//     return (
//       <>
//         <Button handleClick={openModal}>할일 추가</Button>
//         <Modal open={open}>
//           <div className="header">할일을 추가 하시겠습니까?</div>
//           <div className="body">
//             <label>할일이름 :<input type="text"/></label><br/>
//             <label>할일설명 :<input type="text"/></label>       
//           </div>
//           <div className="footer">
//             <Button handleClick={removeModal}>Remove</Button>
//             <Button handleClick={closeModal}>닫기</Button>
//           </div>
//         </Modal>
//         <Modal open={msg}>remove successfully<Button handleClick={closeModal}>닫기</Button></Modal>
//       </>
//     )
//   }
// }

// class App extends React.Component{
//   state={
//     menus: [
//       {
//         siteTitle: 'Naver',
//         siteUrl:'https://www.naver.com'
//       },
//       { 
//         siteTitle: 'Google',
//         siteUrl:'https://www.google.com'
//       },
//       { 
//         siteTitle: '사전검색',
//         siteUrl:'https://seongbin39.github.io/front-end'
//       }
//     ]
//   }
//   handleClick = () => {
//     alert('Click')
//   }

//   render() {
//     const {menus} = this.state
//     return (
//       <div>
//         <Buttton size="large" color="blue" width="fullWidth">Add Todo</Buttton>
//         <Buttton size="medium" color="tomato">
//           <img src="http://simpleicon.com/wp-content/uploads/rocket.png" width="30px" height="30px"></img>Add Todo
//         </Buttton>
//         <Buttton size="small" color="gray" handleClick={this.handleClick}>Add Todo</Buttton>
//         <Nav menus={menus}></Nav>
//       </div>
//     )
//   }
// }


// function App() {
//   return (
//     <div className="App">
//       {dummyData.map(d => {
//         return (
//           <YoutubeVideo 
//             key = {d.videoId}
//             videoId = {d.videoId}
//             videoName = {d.videoName}
//             videoLength = {d.videoLength}
//             videoDescription = {d.videoDescription}
//             videoAuthor = {d.videoAuthor}
//           >
//             <iframe width="560" height="315" src="https://www.youtube.com/embed/sqgxcCjD04s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//           </YoutubeVideo>
//         )
//       })}
      
//     </div>
//   );
// }

// class App extends React.Component {
//   render() {
//     const person = {
//       name: "seongbin",
//       age: 28
//     }
//     const personPage = (
//       <>
//       <h1>{person.name}</h1>
//       <h2>{person.age}</h2>
//       </>
//     )
//     const notFoundPage = (
//       <>
//       <h1>Not Found!!!</h1>
//       </>
//     )
//     if(person.name) {
//       return personPage
//     }else {
//       return notFoundPage
//     }
//     return (
//       <div className="APP">
//         <div>{person.name? "your name is nice":"name dosen't exist"} - {person.age}</div>
//         <div>{person.name && "your name is  nice"}</div>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   state = {
//     count : 0
//   }

//   showUI = (cnt) => {
//     let ui = null;
//     switch(cnt) {
//       case 0:
//         ui = <h1>Home</h1>
//         break;
//       case 1:
//         ui = <h1>About</h1>
//         break;
//       case 2:
//         ui = <h1>Detail</h1>
//         break;
//       default:
//         ui = <h1>Not Found</h1>
//     }
//     return ui
//   }

//   increase = () => {
//     this.setState({count: this.state.count + 1})
//     console.log(this.state.count)
//   }

//   render() {
//     const {count} = this.state
//     return (
//       <>
//       {this.showUI(count)}
//       <button type="button" onClick={this.increase}>Increase</button>
//       </>
//     )
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     console.log('constructor')
//     super(props)
//     this.state = {
//       name: 'chalrie'
//     }
//   }
//   // 이벤트 핸들러 함수
//   changeName = () => {
//     console.log(this)
//     this.setState({name: 'name changed'})
//   }
//   // 컴포넌트가 생성되었을 때 호출됨
//   componentDidMount(){
//     console.log('mount')
//   }
//   // 컴포넌트가 업데이트 되었을 때 호출됨
//   componentDidUpdate(){
//     console.log('update')
//   }
//   componentWillUnmount(){
//     console.log('unmount')
//   }
//   render(){
//     console.log('render')
//     const {name} = this.state
//     return(
//       <div className="App">
//         <h1>{name}</h1>
//         <button type="button" onClick={this.changeName}>Change Name</button>
//       </div>
//     )
//   }
// }

// function App() {
//   return (
//     <div className="App">
//     {dict.map(d => {
//       return(
//         <Dictionary
//           r_word = {d.r_word}
//           r_seq = {d.r_seq}
//           r_hanja = {d.r_hanja}
//           r_pos = {d.r_pos}
//           r_des = {d.r_des}
//         >
//         </Dictionary>
//       )
//     })}
//     </div>
//   );
// }

// class App extends React.Component {
//   constructor(props) {
//     console.log('constructor')
//     super(props)
//     this.state = {
//       loading: true,
//       dicts: []
//     }
//   }
//   // 컴포넌트가 생성되었을 때 호출됨
//   componentDidMount(){
//     const BASE_URL = 'https://dict39.herokuapp.com/api/dicts'
//     console.log('mount')
//     // 서버에서 데이터 가져오기
//     fetch(BASE_URL).then(
//       res => res.json()
//     ).then(
//       result => {
//         console.log(result)
//         const {dicts} = result
//         this.setState({loading: false, dicts})
//       }
//     )
//   }
//   // 컴포넌트가 업데이트 되었을 때 호출됨
//   componentDidUpdate(){
//     console.log('update')
//   }
//   componentWillUnmount(){
//     console.log('unmount')
//   }
//   render(){
//     console.log('render')
//     const {loading, dicts} = this.state
//     if(loading){
//       return(
//         <div className="App">
//           <h1>Loading...</h1>
//         </div>
//       )
//     }else{
//       console.log(dicts)
//       return(
//         <div>
//           {dicts.map(d => {
//             return(
//               <Dictionary
//                 key = {d._id}
//                 r_word = {d.r_word}
//                 r_seq = {d.r_seq}
//                 r_hanja = {d.r_hanja}
//                 r_pos = {d.r_pos}
//                 r_des = {d.r_des}
//               >
//               </Dictionary>
//             )
//           })}
//         </div>
//       )
//     }
//   }
// }

// class App extends React.Component {
//   state = {
//     count: 0
//   }
//   increaseCount = () => {
//     this.setState({count: this.state.count + 1})
//   }
//   // 초기에 웹하면이 렌더링 되었을 때 타이머를 설정함
//   componentDidMount(){
//     this.countID = setInterval(this.pickRandomNumber(1, 45), 1000)
//   }
//   // 사용자가 웹하면을 벗어나면 타이머를 해제함
//   componentWillUnmount(){
//     clearInterval(this.countID)
//   }
//   pickRandomNumber = (min, max) => { 
//     return Math.floor( Math.random() * (max-min+1) ) + min 
//   }
//   render() {
//     const {count} = this.state
//     const animal = animals[count%animals.length]
//     console.log(animal)
//     return(
//       <div>
//         <h1>{count}</h1>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   state = {
//     number: 0,
//     numbers: ''
//   }
//   componentDidMount(){
//     this.countID = setInterval(this.showRandomNumber, 1000)
//   }
//   componentWillUnmount(){
//     clearInterval(this.countID)
//   }
//   pickRandomNumber = (min, max) =>{
//     return Math.floor(Math.random() * (max-min +1))+ min
//   }
//   setNumber = () => {
//   }
//   checkDuplication = (numbers, picked) => {
//     return numbers.find(num => num === picked)
//   }
//   showRandomNumber = () => {
//     // const numbers = [0, 0, 0, 0, 0, 0]
//     // const picks = numbers.map(n => this.pickRandomNumber(1 ,45))
//     const numbers = []
//     let cnt = 0
//     while (numbers.length > 6){
//       const picked = this.pickRandomNumber(1,45)
//       const isDuplicated = this.checkDuplication(numbers, picked)
//       if(isDuplicated){
//         console.log('duplicated...' + isDuplicated)
//         numbers.push(this.pickRandomNumber(1,45))
//       }else{
//         numbers.push(picked)
//       }
//       cnt++
//     }
//     this.setState({number: this.pickRandomNumber(1, 45), numbers: numbers.join(' ')})
//   }
//   render(){
//     const { number, numbers } = this.state
//     return (
//       <div>
//         <h1>{number}</h1>
//         <h1>{numbers}</h1>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   state = {
//     index: 0
//   }
//   componentDidMount(){
//     this.countID = setInterval(this.setNumber, 1000)
//   }
//   componentWillUnmount(){
//     clearInterval(this.countID)
//   }
//   pickRandomNumber = (min, max) =>{
//     return Math.floor(Math.random() * (max-min +1))+ min
//   }
//   setNumber = () => {
//     this.setState({index: this.pickRandomNumber(0, dummy.length-1)})
//   }
//   render(){
//     const { index } = this.state
//     const word_picked = dummy[index%dummy.length]
//     console.log(dummy.length, index)
//     return (
//       // <div style={cardStyle}>
//       //   <h1 style={{borderBottom: '1px solid lightgrey'}}>Flash Card</h1>
//       //   <h2>{word_picked.word}</h2>
//       //   <h2>{word_picked.meaning}</h2>
//       // </div>
//       <Card word_picked={word_picked}></Card>
//     )
//   }
// }

export default App;
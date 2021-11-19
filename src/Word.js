import Button from "./Button"

// function Word({ r_link, r_word, r_hanja, r_des, _id, test}){ 
//     console.log(_id)
//     console.log(test)
//     return ( 
//         <div className="item"> 
//             <div className="word"> 
//                 <a href={r_link}>{r_word} {r_hanja} </a> 
//             </div> 
//             <p className="description">{r_des}</p> 
//         </div> 
//     ) 
// } 
    
export default function Word ({...rest}) {
    // const onRemove = (e) =>{
    //     handleRemove(e)
    // }
    console.log(rest.test)
    const wordStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    return (
        <div style={wordStyle}>
            <h2>{rest.r_word} {rest.r_hanja}</h2>
            <h3>{rest.r_des}</h3>
            {/* <Button size="medium" type="button" handleClick={(e) => onRemove(e)}>DELETE</Button> */}
        </div>
    )
}
import Button from './Button' 
import './Nav.css'

// function Nav({ children, size, color, width, url}){
//     const navigation = (url) => {
//         window.location.href = url
//     }
//     return (
//     <div>
//         <Button size="small" handleClick={() => navigation("https://www.google.com")}>Google</Button>
//         <Button size="small" handleClick={() => navigation("https://www.naver.com")}>Naver</Button>
//         <Button size="small" handleClick={() => navigation("https://seongbin39.github.io/api/dict")}>사전 검색</Button>
//     </div>
//     )
   
// }

function Nav({menus}){
    const navigation = (url) => {
        window.location.href = url
    }
    return (
        <div className="nav-container">
            {menus.map(menu => {
                return(
                    <Button size="small" handleClick={() => navigation(menu.siteUrl)}>{menu.siteTitle}</Button>
                )
            })}
        </div>
    )
}

export default Nav;

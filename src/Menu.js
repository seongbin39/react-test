import React from 'react';
import { Link } from 'react-router-dom'
import './Menu.css'
import posts from './postData'

function Menu({menus}){
    return (
        <>
            {menus.map( (menu, id) => {
                return (
                    <Link key={id} to={menu.url} className='menu-item'>{menu.name}</Link>
                )
            })}
           
        </>
    )
}

export default Menu

{/* <Link to='/' className='menu-item'>HOME</Link><br/>
<Link to='/about' className='menu-item'>ABOUT</Link> */}

{/* Post 메뉴 */}
{/* <Link to='/posts' className='menu-item'/>
{posts.map( (post, id) => {
    return (
        <Link key={id} to={`/posts/${id}`} className='menu-item'>{post.title}</Link>
    )
})} */}
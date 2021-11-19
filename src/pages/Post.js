import React from 'react';
import { useParams, Link , NavLink, useSearchParams, useLocation } from 'react-router-dom'
import posts from '../postData'
import './Post.css'

function Post() {
    const params = useParams() // URL 파라미터 정보를 반환함
    
    const [searchParams, setSearchParams] = useSearchParams()
    const applyActiveColor = ({ isActive }) => (isActive? {color: 'orangered'} : {})

    // URL 쿼리스트링 값을 사용자가 입력한 키워드로 설정(변경)함
    const changeQueryString = (e) => {
        const filter = e.target.value // 사용자가 입력한 키워드
        if(filter){
            setSearchParams({ filter })
        }else{
            setSearchParams({})
        }
    }
    // props = {key, style, className}
    const QueryNavLink = ({ to, children, ...props}) => {
        const location = useLocation()
        // console.log(location)
        return <NavLink to={to+location.search} {...props}>{children}</NavLink>
    }

    const postsFilterd = posts
    .filter( post => {
        const filter = searchParams.get('filter')
        if(!filter) return true
        const title = post.title.toLowerCase()
        return title.includes(filter.toLowerCase()) // 키워드에서 대소문자 구분없이 검색이 됨
    })
    const post = postsFilterd[params.postId]
    return (
        <>
            {/* 쿼리스트링을 이용한 검색 */}
            <br/>
            <input className="filter-post" value={searchParams.get('filter')||""} onChange={changeQueryString} placeholder="Search Post..."></input>

            {/* 특정 블로그 포스트  */}
            {post ? 
                <div className="post-container">
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    <span>{post.created}</span>
                </div>
            :
                <h1>POST PAGE</h1>
            }
            {/* 블로그 전체목록 보여주거나 사용자가 입력한 키워드로 필터링 된 */}
            {postsFilterd
            .map( (post, id) => {
                return (
                    <QueryNavLink key={id} to={`/posts/${id}`} className="post-item" style={applyActiveColor}>{post.title}</QueryNavLink>
                )
            })}
        </>
    )
}

export default Post
import React from 'react'
import PostData from './PostData'
import PostCard from './PostCard'
import './styles.css'

function BlogPost() {
  return (
    <div className='box_container'>
        {PostData.map((item,index)=>{
            return(
                <div key={index} >
                    <PostCard data={item} />
                </div>
            )
        })}
    </div>
  )
}

export default BlogPost
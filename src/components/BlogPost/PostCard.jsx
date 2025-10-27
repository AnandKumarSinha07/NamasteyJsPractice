
    import './styles.css'

    function PostCard({data}) {
    console.log("data is",data.reactions); 
    const {title,body,views}=data; 
    return (
        <div>
            <div  className='card_container'>
                <h4>{title}</h4>
                <p>{body}</p>
                
                <div className='link_container'>
                    {data.tags.map((item,index)=>{
                        return(
                        <a href='#' key={index} className='link_box'>#{item}</a>
                        )
                        })}
                </div>   

                <div className='link_box'>
                        <p>👍{data.reactions.likes} |</p>
                        <p>👎{data.reactions.dislikes} | </p>
                        <div className='Views_container'> 👁️ {views} Views</div>
                </div>   
            </div>
        </div>
    )
    }

    export default PostCard
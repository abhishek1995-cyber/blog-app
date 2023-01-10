import React from "react";
import {NavLink, Link } from 'react-router-dom'

export default class Article extends React.Component {
    state = {
     
      
    } 

    




 render(){
    const {articles} = this.props
   const {activetag} = this.props;
    if(!articles){
        return <h2>Fetching Articles</h2>
    }
   
    return(
        <>
        <section className="articles">
        <div className="feed">
            <strong onClick={this.props.handleDeletetags} >Global feed</strong>
            <strong>{activetag}</strong>
            <hr/>
        </div>

        <section>
                    { articles.map((article,i) => 
                <article className="article-box">
                    <div className="flex article-box1">
                        <div className="flex">
                        <figure>
                            <img 
                            src={article.author.image}
                            />
                        </figure>
                        <div>
                        <Link className="username" to={`/${article.author.username}`}>
                        <h1 >{article.author.username}</h1>
                        </Link>
                        <time>{article.createdAt}</time>
                        </div>
                        </div>
                        <div>
                            <button key={i}
                           
                             onClick={()=>  this.props.handleLike(i)}
                            >{article.like}</button>
                        </div>
                    </div>
                    <Link to={`/article/${article.slug}`} className='article'>
                        <h2  
                        className="title">
                            {article.title}
                        </h2>
                        <p  
                        className="description">
                            {article.description}
                        </p>
                    <div className="flex">
                        <div>
                            <p className="read-more" >Read More...</p>
                        </div>
                        <div className="flex ">
                            { article.tagList.map(tag =>
                            <p 
                             className="tag-list">{tag}</p>
                                )}
                        </div>
                    </div>
                    </Link>
                    <hr/>
                </article>
                        )}
        </section>
        <section className="step">
          <button></button>
        </section>
        </section>
        </>
    )
 }
}
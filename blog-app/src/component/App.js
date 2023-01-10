import React from 'react';
import Article from './Article';
import Hero from './Hero';
import Tag from './Tag';


export default class App extends React.Component {
    state = {
        articles:null,
        newArticles:null,
        tags:null,
        activetag:null,
        likes:0,
        setLikes:[]
        
    }


    componentDidMount(){
        fetch('https://api.realworld.io/api/tags').
        then(res => res.json()).
        then(tags => this.setState({
            tags: tags.tags
        }))

        // fetching article
        fetch('https://api.realworld.io/api/articles').
        then(res => res.json()).
        then((articles ) => {
            console.log(articles.articles)
            const articlearray = articles.articles.map((article,i) => {
                return {...article,like:0 }
            })
            this.setState({
            articles: articlearray,
            newArticles: [...articlearray]
        })
        }
        )
    }


    handleLike= (i) =>{
        const {articles,newArticles} = this.state
        articles[i].like++;
        // newArticles[i].like++
        this.setState({
           articles 
        })
     }
    
       
      

    handleTags=(event)=>{
        const {articles,activetag,newArticles} = this.state
        const value = event.target.innerText;
       console.log(value)
     

      let filtered =  newArticles.filter(article => 
            article.tagList.includes(value)
            )
       console.log(filtered)
            this.setState({
                activetag: value,
                articles:filtered
            })
            
    }

    handleDeletetags=() =>{
        this.setState({
            activetag:null,
            articles: this.state.newArticles
        })
    }

    render(){
        return (
           <>
          <Hero/>
           <div className='container flex main'>
           <Article handleLike={this.handleLike}
            articles={this.state.articles}
           activetag={this.state.activetag}
            handleDeletetags={this.handleDeletetags}
           />
           <Tag tags={this.state.tags}
           handleTags={this.handleTags}
           />
           </div>
           </>
        )
    }
}
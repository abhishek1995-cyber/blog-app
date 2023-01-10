import React from "react";

export default class Tag extends React.Component {
 state = {
    
 }


 render(){
    const{tags} = this.props
    if(!tags){
        return <span>fething tags ...</span>
    }
    return(
        <>
        <section className="tag">
            <h1>Popular Tags</h1>
            { tags.map(tag => 
                 <button onClick={this.props.handleTags}
                  className="tag-btn">{tag}</button>
                )}
          
        </section>
        </>
    )
 }
}
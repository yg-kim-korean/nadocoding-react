import React, {Component} from 'react';

class CreateContent extends Component{
    render(){
      return(
        <article>
          <h2>create</h2>
          <form action="/create_process" method="post"
          onSubmit={function(e){ 
            e.preventDefault();//onSubmit하면 기본적으로 페이지가 바뀌기 때문에 
            this.props.onSubmit(e.target.title.value,e.target.desc.value);
          }.bind(this)}
          >
            <p><input type="text" name="title" placeholder="Title"></input></p>
            <p><textarea name="desc" placeholder="Description"></textarea></p>
            <p><input type="submit" value="Submit"></input></p>
          </form>
      </article>
      );
    }
  }

export default CreateContent
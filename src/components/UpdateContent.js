import React, {Component} from 'react';

class UpdateContent extends Component{
    constructor(props){
      super(props);
      this.state={
        id : this.props.data.id,
        title : this.props.data.title,
        desc : this.props.data.desc
      }
      this.inputFormHandler = this.inputFormHandler.bind(this);
    }
    inputFormHandler(e){
      this.setState({[e.target.name]:e.target.value})
    }
    render(){
      console.log(this.props.data);
      return(
        <article>
          <h2>Update</h2>
          <form action="/Update_process" method="post"
          onSubmit={function(e){ 
            e.preventDefault();//onSubmit하면 기본적으로 페이지가 바뀌기 때문에 
            this.props.onSubmit(
              this.state.id,
              this.state.title,
              this.state.desc
              );
          }.bind(this)}
          >
            <input type="hidden" name="id" value={this.state.id}></input>
            <p><input 
                  type="text" 
                  name="title" 
                  placeholder="Title"
                  value={this.state.title}
                  onChange={this.inputFormHandler}//this.inputFormHandler = this.inputFormHandler.bind(this);때문에 bind 필요없어짐.
               ></input></p>
            <p><textarea name="desc" placeholder="Description" value={this.state.desc} 
                  onChange={this.inputFormHandler}
                  ></textarea></p>
            <p><input type="submit" value="Submit"></input></p>
          </form>
      </article>
      );
    }
  }

export default UpdateContent
import React, {Component} from 'react';
class TOC extends Component{
    shouldComponentUpdate(newProps, newState){
      if (this.props.data === newProps.data){
        return false;
      }
      return true;
    }
    render(){
      
      var lists=[];
      var data = this.props.data
      var i = 0;
      while(i< data.length){
          lists.push(
          <li key={data[i].id}>
            <a href={"/content/"+ data[i].id}
            
            onClick={function(id, e){
              e.preventDefault();
              this.props.onChangePage(id);
            }.bind(this, data[i].id)} // bind 안에 두번째 인자를 넣으면 function의 변수 맨 앞에 인자로 들어간다. 만약 2개이 상이면 event인자인 e가 계속 뒤로 밀려남
            >
            {/* <a href={"/content/"+ data[i].id}
            data-id = {data[i].id} //target의 dataset의 id라는 접미사에 값을 넣어준다.
            onClick={function(e){
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)} 
            > //위에꺼랑 같은거임*/} 
              {data[i].title}
            </a>
          </li>
          );
          i++;
      }
      return(
        <nav>
          <ul>
              {lists}
          </ul>
      </nav>
      );
    }
}

export default TOC;
import { useState } from 'react';
import './App.css';

function App() {
  
  let [posts, changePosts] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
  let [count, changeCount] = useState(0);
  let [modal, modalChange] = useState(false);
  let [listNumber, listNumberChange] = useState(0);
  let [addTitle, addTitleChange] =useState('');

  function change(){
    changeCount(count+1)
  }

  function addPost(){
    let Array = [addTitle,...posts]
    changePosts(Array);
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 blog</div>
      </div>
      {
        posts.map(function(posts,i){
          return(
            <div className='list' key={i}>
              <h3 onClick={ ()=>{listNumberChange(i)} }>{posts} <span className='ddabong' onClick={change}>👍</span>{count}</h3>
              <p>2월 17일 발행</p>
              <hr />
            </div>
          )
        })
      }
    <div className='publish'>
      <input onChange={(e)=>{addTitleChange(e.target.value)}}></input>
      <button onClick={addPost}>저장</button>
    </div>


    <button onClick={()=>{modalChange(!modal)}}>열고닫기</button>
    {modal === true? <Modal posts={posts} listNumber={listNumber}/> : null}
    </div>
  );
}

function Modal(props){
  return(
    <div className='modal'>
      <h2>{ props.posts[props.listNumber] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    
  )
}


export default App;

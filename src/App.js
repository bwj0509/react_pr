import { useState } from 'react';
import './App.css';

function App() {
  
  let [posts, changePosts] = useState(['창원 맛집','서울 맛집','인천 맛집']);
  let [count, changeCount] = useState(0);
  
  function change(){
    changeCount(count+1)
  }

  function change_dosi(){
    let newArray = [...posts]
    newArray[0] = '대전 맛집'
    changePosts(newArray);
  }


  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 blog</div>
      </div>
      <div className='list'>
        <h3>{posts[0]} <span className='ddabong' onClick={change}>👍</span>{count}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className='list'>
        <h3>{posts[1]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className='list'>
        <h3>{posts[2]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <button onClick={change_dosi}>버튼</button>
    </div>
  );
}

export default App;

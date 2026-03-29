import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {


let [posts, setPosts] = useState([
  {
    id : 1,
    title: 'First post'
  },
  {
    id : 2,
    title: 'Second post'
  },
  {
    id : 3,
    title: 'Third post'
  }
]);

  

  return (
    <nav>
      <div className='container'>
        <h1>Logo</h1>
        <ul>
          <li>Home</li>
          <li>Posts</li>
        </ul>
      </div>
    </nav>    
  );
}

export default App;

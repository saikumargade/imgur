import React from 'react';
import '../App.css';
import Post from './Post'

const images =['description','123','abc','new'];
function App() {
  return (
    <div className="App">
      {/* <Post  />
      <Post />
      <Post /> */}

      {
        images.map(img => {return <Post title={img}/>})
      }
    </div>
  );
}

export default App;

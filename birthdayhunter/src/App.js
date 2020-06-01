import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const [speed, setSpeed]=useState(3)

  const myAlert = () => {
    alert("Happy Birthday Little Sister!!! I hope you have a wonderful little sister birthday!!! Thanks for buying me food all the time i really appreciate it. Maybe one day ill have a little money to get you something good that you like !!! LOVE Jorda :) <3 <3 <3")
  }
  return (
    <div className="App">
      <div className="ctx">
        <h1><span>💜💜</span>HAPPY BIRTHDAY HUNTER<span>💜💜</span></h1>
      </div>
      <div>
      {/* <img style={{animation: `spin ${this.state.speed}s linear infinite`}} src={SampleImg} alt="img"/> */}
      <iframe style= {{animation: `spin ${speed}s linear infinite`}} className= 'giffy' src="https://giphy.com/embed/pHXgcCMfC8XfjgoO4X" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/rainbow-happy-birthday-happybirthday-pHXgcCMfC8XfjgoO4X"></a></p>
      </div>
      <div className = 'spinner'>
      <div style= {{animation: `spin ${speed}s linear infinite`, fontSize: '100px'}}>💞</div>
      <div style= {{animation: `spin ${speed}s linear infinite`, fontSize: '100px'}}>💞</div>
      </div>
      <div>
        <button onClick= {() => myAlert()}>Click ME</button>
      </div>
    </div>
  );
}

export default App;

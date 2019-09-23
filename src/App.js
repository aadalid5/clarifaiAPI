import React from 'react';
import './App.css';
import Button from './components/Button';
import Clarifai from 'clarifai';


const app = new Clarifai.App({apiKey: 'ba4b3ec2aa494c40840f32c2b5a204d2'});


class App extends React.Component {
  /* constructor(){
    super();
  } */

  onButtonClick = (event) =>{
    /* console.log("onbuttonclick event"); */
    app.models.predict(
      {id: Clarifai.COLOR_MODEL},  
      "https://samples.clarifai.com/face-det.jpg"
      ).then((response) => {
        // do something with response
        console.log(response);
      }
    );
  }

  render(){
    return (
      <div>
        <h3>Open the JS console to see the API response</h3>
        <Button onButtonClick={this.onButtonClick} />
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.css';

const blob1Html =
`
  <div className='blobs-container'>      
      <div className='blob'>
          <h1>Just flex 1</h1>
      </div>
      <div className='blob'>
        <h1>Just flex 2</h1>
      </div>
   </div>
`
const blob2Html = 
`
<div className='blobs-stretch-container'>
    <div className='blob-stretch'>
        <h1>Just flex 1</h1>
    </div>
    <div className='blob-stretch'>
      <h1>Just flex 2</h1>
    </div>
</div>
`
const blob1Css =
`
  .blobs-container{
      background: orange;
      padding: 2vw;
      display: flex;
    }

    .blob{
      background:#fff;
      display: flex;
      border: 1px solid grey;
      padding:15px;
    }
  `
  const blob2Css =
  `
  .blobs-stretch-container{
    background: orange;
    padding: 2vw;
    display: flex;
    flex-direction: row;
  }
  .blob-stretch{
    background:#fff;
    display: flex;
    border: 1px solid grey;
    padding:15px;
    flex:1;
  }
  `
class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='header'>
            <h1> Flex Box Examples </h1>
            <br/>
        </div>
        <div className="lesson">
          <p>The following divs are just initialized with flex</p>
          <div className='example-container'>
            <div className='code'>
              <strong>CSS</strong>
              <pre className="prettyprint">
                <code>
                    {blob1Css}
                </code>
            </pre>
            </div>
            <div className='code'>
              <strong> Html </strong>
              <pre className="prettyprint">
                <code>
                  {blob1Html}
                </code>
            </pre>
            </div>
            <div className='example'>
              <div className='blobs-container'>
                  <div className='blob'>
                      <h1>Just flex 1</h1>
                  </div>
                  <div className='blob'>
                    <h1>Just flex 2</h1>
                  </div>
              </div>
            </div>
          </div>
        </div>
         <br />



        <div className="lesson">
        <p> The following divs are stretched to fill the container</p>
          <div className='example-container'>
            <div className='code'>
              <strong>CSS</strong>
              <pre className="prettyprint">
                <code>
                    {blob2Css}
                </code>
            </pre>
            </div>
            <div className='code'>
              <strong> Html </strong>
              <pre className="prettyprint">
                <code>
                  {blob2Html}
                </code>
            </pre>
            </div>
            <div className='example'>
            <div className='blobs-stretch-container'>
                  <div className='blob-stretch'>
                      <h1>Flex stretch 1</h1>
                  </div>
                  <div className='blob-stretch'>
                    <h1>Flex stretch 2</h1>
                  </div>
              </div>
            </div>
          </div>
        </div>
         <br />


          
          

         <br />
          <p> The following divs are stretched to fill the container</p>
          <div className='blobs-max-height-container'>
            <div className='blob-max-height'>
                <h1>Flex stretch 1</h1>
            </div>
            <div className='blob-max-height'>
              <h1>Flex stretch 2</h1>
            </div>
        </div>
      </div>
    );
  }
}

export default App;

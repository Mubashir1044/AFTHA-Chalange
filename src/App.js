import React, { useState } from 'react';

// used antd as design as you didn't mention any specific like boostrap, reactstrap, material 
import { message } from 'antd'
import './App.css';
import CompOne from './components/compOne'
import CompTwo from './components/compTwo'
function App() {


  //states
  const [valueOne, setValueOne] = useState('https://catfact.ninja/fact')
  const [valueTwo, setValueTwo] = useState('')
  const [compOne_disable, toggleOneEdit] = useState(true)
  const [compTwo_disable, toggleTwoEdit] = useState(true)
  const [data, setData] = useState(null)
  const [show, setShow] = useState(2)


  //Button one in C1 to send text from c1 to c2 text field and make it editable
  const sendToComp2 = () => {
    // console.log('called')
    setValueTwo(valueOne);
    setValueOne('')
    toggleTwoEdit(false)
    toggleOneEdit(false)

  }

  //check if url is valid or not
  const isURL = (str) => {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return pattern.test(str);
  }


  //fetch data if url is valid. this is only specific to end point you provide as CORS error occurs and 
  //i am using proxy and tokenization to get the end point
  //fetch api data in component one and showing in compo2 
  const getData = () => {
    if (isURL(valueOne)) {
      let url = valueOne;

      //using proxy because of CORS Error and will split the api to get the endpoint
      if (valueOne.includes('catfact.ninja')) {
        let temp = valueOne.split('catfact.ninja')
        url = temp[temp.length - 1]
      }
      fetch(url, {

        method: 'GET',
      })
        .then(response => response.json())
        .then(data => {
          setData(data)
        })
        .catch(error => {
          message.error('Something went Wrong. Please try again')
          console.error('error', error)
        })

    }
    else {
      message.error('Please enter a valid url')
    }


  }


  //send text data from component 2 to component one 
  //and clear text data and disable text field in comp2
  const send2Comp1 = () => {
    setShow(1);
    toggleTwoEdit(true)
  }


  // used to different componenets. although it can be easily done by a single component
  //but as you clearly mention to use 2 components so did i
  return (
    <div style={{ display: 'flex', flexDirection: 'row', padding: 20 }}>

      
      <div style={{ flex: 1 }}>
        <CompOne
          value={valueOne}
          disabled={compOne_disable}
          sendData={sendToComp2}
          fetchData={getData}
          handleChange={setValueOne}
          data={data}
          show={show}
        />
      </div>
      <div style={{ flex: 1 }}>
        <CompTwo
          value={valueTwo}
          disabled={compTwo_disable}
          handleChange={setValueTwo}
          data={data}
          show={show}
          handleButton={send2Comp1}
        />
      </div>
    </div>
  );
}

export default App;

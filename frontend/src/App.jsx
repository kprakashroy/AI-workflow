import React , {useState}from 'react';
import './App.css';
import GoogleDocumentNode from './component/GoogleDocumentNode';
import AskAINode from './component/AskAINode';
import axios from 'axios';

const App = () => {
  const [prompt,setPrompt] = useState('')
  const [result,setResult] = useState('')
  const handleRun = async() => {

    const res = await axios.post('http://localhost:7001/api/run', { docUrl : "", prompt :prompt, userToken : "" });
    
    setResult(res.data.response)


    
  };
  return (
    <div className="container">

      <div className="header-bar">
        <h2>Google Docs AI Tool</h2>
        <button className="run-button" onClick={handleRun}>▶ Run</button>
      </div>
      {/* Google Docs Reader Card */}
      <GoogleDocumentNode />

      {/* Connector Line */}
      <div className="connector-line"></div>

      {/* Ask AI Card */}
      <AskAINode prompt = {prompt}  setPrompt = {setPrompt} />

      <div className="result-box">
        <h3>📝 Result:</h3>
        <pre>{result}</pre>
      </div>
    </div>
  );
};

export default App;

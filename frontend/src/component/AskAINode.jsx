import React from 'react';

const AskAINode = ({prompt,setPrompt}) => {
  return(

    <div className="card">
        <div className="card-header">
          <div className="icon pink">🤖</div>
          <div>
            <p className="title">Using AI</p>
            <p className="subtitle">Ask AI</p>
          </div>
          <div className="loop-mode">Loop Mode <span className="badge">Off</span></div>
        </div>

        <p className="description">Prompt an AI language model. Provide all relevant context and use detailed prompts to get the best results.</p>

        <label className="label">Prompt</label>
        <input type="text" placeholder="Write your prompt" className="input" 
        value = {prompt}
        onChange={(e)=>setPrompt(e.target.value)}/>

        

        

        <div className="connector-badge top">1</div>
      </div>
    
  )
}

export default AskAINode;
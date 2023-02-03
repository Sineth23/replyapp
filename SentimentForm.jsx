import React, { useState } from "react";
import axios from "axios";

function SentimentForm() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    const result = await axios.post("http://localhost:5000/api/sentiment", {
      text: text
    });
    setResponse(result.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea value={text} onChange={e => setText(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <p>{response}</p>
    </div>
  );
}

export default SentimentForm;

import { useState } from 'react';
import Editor from "./component/Editor";
import Preview from "./component/Preview";

function App() {
  const [textContent, setTextContent] = useState('');

  const changeTextContent = (value) => {
    setTextContent(value);
  }

  return (
    <div className="app">
      <Editor changeTextContent={changeTextContent}/>
      <Preview textContent={textContent} />
    </div>
  );
}

export default App;

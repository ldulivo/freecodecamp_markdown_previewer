import { useState, useEffect } from 'react';


export default function Editor({ changeTextContent }) {
    const [valueMarkdown, setValueMarkdown] = useState('');
    const [value, setValue] = useState()
    
    const editChange = (event) => {
        setValue(event.target.value)
        changeTextContent(event.target.value)
    }

    const getMarkdown = async() => {
        await fetch('/markdown.md')
            .then(resp => resp.text() )
            .then(text => { setValueMarkdown(text)});
    }

    useEffect( () => {
        getMarkdown();
    }, [])

    useEffect( () => {
        setValue(valueMarkdown)
        changeTextContent(valueMarkdown);
    }, [valueMarkdown])

  return (
      <>
        <textarea 
            name="" 
            id="editor" 
            cols="30" 
            rows="10"
            onChange={ editChange }
            value={ value }
        >
        </textarea>
      </>
  )
}

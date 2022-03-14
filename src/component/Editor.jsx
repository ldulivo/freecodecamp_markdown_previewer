import { useState, useEffect } from 'react';
import TopBar from './topBar/TopBar';


export default function Editor({ changeTextContent }) {
    const [valueMarkdown, setValueMarkdown] = useState('');
    const [value, setValue] = useState()
    
    const editChange = (event) => {
        setValue(event.target.value)
        changeTextContent(event.target.value)
    }

    const getMarkdown = async() => {
        await fetch('https://ldulivo.github.io/freecodecamp_markdown_previewer/markdown.md')
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
      <section>
            <TopBar text={'Editor'} id={'editorNavBar'} >
                <textarea 
                    name="" 
                    id="editor"
                    onChange={ editChange }
                    value={ value }
                >
                </textarea>
            </TopBar>
      </section>
  )
}

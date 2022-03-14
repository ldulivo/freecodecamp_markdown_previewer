import ReactMarkdown from "react-markdown";

export default function Preview({ textContent }) {
  return (
    <div id="preview">
        <ReactMarkdown>
            { textContent }
        </ReactMarkdown>
    </div>
  )
}

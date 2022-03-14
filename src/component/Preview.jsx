import ReactMarkdown from "react-markdown";
import TopBar from "./topBar/TopBar";

export default function Preview({ textContent }) {
  return (
    <section>
        <TopBar text={'Preview'} id={'previewNavBar'}>
            <div id="preview">
                <ReactMarkdown>
                    { textContent }
                </ReactMarkdown>
            </div>
        </TopBar>
    </section>
  )
}

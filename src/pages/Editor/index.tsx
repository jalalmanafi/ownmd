import { useState } from "react";

import PreviewColumn from "@/components/PreviewColumn";
import MarkdownEditor from "@/components/MarkdownEditor";

import "./style.css";
import RawColumn from "@/components/RawColumn";

export default function Editor() {
  const [markdownText, setMarkdownText] = useState('');

  return (
    <div className="editor-container">
      <MarkdownEditor {...{ markdownText, setMarkdownText }} />
      {/* <PreviewColumn markdown={markdownText} /> */}
      <RawColumn markdown={markdownText}/>
    </div>
  );
}

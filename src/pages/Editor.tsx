import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { languages } from "@codemirror/language-data";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import EditorHeader from "../components/EditorHeader";

import "./Editor.css";

const markdownLangSetup = {
  base: markdownLanguage,
  codeLanguages: languages,
};

const Editor = () => {
  const [markdownContent, setMarkdownContent] = useState("");

  return (
    <div className="h-screen">
      <EditorHeader markdown={markdownContent} />
      <PanelGroup direction="horizontal">
        <Panel defaultSize={50} minSize={25}>
          <CodeMirror
            className="h-full"
            theme="dark"
            value={markdownContent}
            onChange={setMarkdownContent}
            extensions={[markdown(markdownLangSetup)]}
          />
        </Panel>
        <PanelResizeHandle className="w-1 bg-slate-600" />
        <Panel defaultSize={50} minSize={25}>
          <MarkdownPreview
            className="markdown-preview"
            source={markdownContent}
            skipHtml={false}
          />
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default Editor;

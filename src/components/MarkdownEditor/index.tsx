import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { bbedit } from "@uiw/codemirror-theme-bbedit";

import "./style.css";

interface Props {
  markdownText: string;
  setMarkdownText: (e: string) => void;
}

const MarkdownEditor = ({ markdownText, setMarkdownText }: Props) => {
  return (
    <CodeMirror
      className="cm-container"
      value={markdownText}
      onChange={(e) => setMarkdownText(e)}
      extensions={[
        markdown({ base: markdownLanguage, codeLanguages: languages }),
      ]}
      basicSetup={{
        lineNumbers: false,
        foldGutter: false,
      }}
      theme={bbedit}
    />
  );
};

export default MarkdownEditor;

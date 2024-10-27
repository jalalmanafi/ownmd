import { useEffect, useMemo, useState, useRef } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { useSearchParams } from "react-router-dom";
import { languages } from "@codemirror/language-data";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import { sections } from "../static/data";
import EditorHeader from "../components/EditorHeader";

import "./Editor.css";

const markdownLangSetup = {
  base: markdownLanguage,
  codeLanguages: languages,
};

const Editor = () => {
  const [markdownContent, setMarkdownContent] = useState("");
  const [searchParams] = useSearchParams();
  const previousSections = useRef<string[]>([]);

  const selectedSections = useMemo(
    () =>
      searchParams.get("selectedSections")?.split(",").filter(Boolean) || [],
    [searchParams]
  );

  const filteredMarkdown = useMemo(
    () =>
      sections
        .filter((item) => selectedSections.includes(item.value))
        .map((item) => item.markdown),
    [selectedSections]
  );

  useEffect(() => {
    if (!selectedSections.length) {
      previousSections.current = [];
      setMarkdownContent("");
      return;
    }

    const newSections = filteredMarkdown
      .filter((section) => !previousSections.current.includes(section))
      .join("\n\n");

    if (newSections.length > 0) {
      setMarkdownContent((prev) =>
        prev ? `${prev}\n\n${newSections}` : newSections
      );
    }

    previousSections.current = filteredMarkdown;
  }, [selectedSections, filteredMarkdown]);

  const handleContentChange = (value: string) => {
    setMarkdownContent(value);
  };

  return (
    <div className="h-screen">
      <EditorHeader markdown={markdownContent} />
      <PanelGroup direction="horizontal">
        <Panel defaultSize={50} minSize={25}>
          <CodeMirror
            className="h-full"
            theme="dark"
            value={markdownContent}
            onChange={handleContentChange}
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

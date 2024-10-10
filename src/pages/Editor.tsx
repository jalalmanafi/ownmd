import { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { languages } from "@codemirror/language-data";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import EditorHeader from "../components/EditorHeader";

import "./Editor.css";
import { SectionType } from "../ts/models";
import { useSearchParams } from "react-router-dom";

const markdownLangSetup = {
  base: markdownLanguage,
  codeLanguages: languages,
};

const Editor = () => {
  const [markdownContent, setMarkdownContent] = useState("");
  const [searchParams] = useSearchParams();
  const sectionFromURL = searchParams.get("section");

  const sections: SectionType[] = [
    {
      value: "title_and_description",
      label: "Title and Description",
      markdown: `
# Project Title

A brief description of what this project does and who it's for

`,
    },
    {
      value: "acknowledgements",
      label: "Acknowledgements",
      markdown: `
## Acknowledgements

- [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

`,
    },
    {
      value: "api_reference",
      label: "API Reference",
      markdown: `
## API Reference

#### Get all items

\`\`\`http
  GET /api/items
\`\`\`

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| \`api_key\` | \`string\` | **Required**. Your API key |

#### Get item

\`\`\`http
  GET /api/items/$\{id}
\`\`\`

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| \`id\`      | \`string\` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

`,
    },
    {
      value: "usage",
      label: "Usage",
      markdown: `
## Usage/Examples

\`\`\`javascript
import Component from 'my-project'

function App() {
  return <Component />
}
\`\`\`

`,
    },
    {
      value: "installation",
      label: "Installation",
      markdown: `
## Installation

Install my-project with npm

\`\`\`bash
  npm install my-project
  cd my-project
\`\`\`
`,
    },
    {
      value: "features",
      label: "Features",
      markdown: `
## Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform

`,
    },
    {
      value: "screenshots",
      label: "Screenshots",
      markdown: `
## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

`,
    },
    { value: "configuration", label: "Configuration", markdown: "" },
    {
      value: "contributing",
      label: "Contributing",
      markdown: `
## Contributing

Contributions are always welcome!

See \`contributing.md\` for ways to get started.

Please adhere to this project's \`code of conduct\`.

`,
    },
    {
      value: "roadmap",
      label: "Roadmap",
      markdown: `
## Roadmap

- Additional browser support

- Add more integrations

`,
    },
    {
      value: "license",
      label: "License",
      markdown: `
## License

[MIT](https://choosealicense.com/licenses/mit/)

`,
    },
  ];

  const selectedSection = sections.find(
    (section) => section.value === sectionFromURL
  );

  useEffect(() => {
    if (selectedSection) {
      setMarkdownContent(selectedSection?.markdown);
    }
  }, [sectionFromURL]);

  return (
    <div className="h-screen">
      <EditorHeader markdown={markdownContent} sections={sections} />
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

import MarkdownPreview from "@uiw/react-markdown-preview";

import './style.css'

interface Props {
  markdown: string;
}

const PreviewColumn = ({ markdown }: Props) => {
  return (
    <MarkdownPreview
      className="markdown-preview-container"
      wrapperElement={{
        "data-color-mode": "light",
      }}
      source={markdown}
    />
  );
};

export default PreviewColumn;

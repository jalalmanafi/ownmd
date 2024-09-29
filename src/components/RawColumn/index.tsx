import { marked } from "marked";

import { useEffect, useState } from "react";

import "./style.css";

interface Props {
  markdown: string;
}

const RawColumn = ({ markdown }: Props) => {
  const [rawMarkdown, setRawMarkdown] = useState<string>(
    marked(markdown).toString()
  );

  useEffect(() => {
    setRawMarkdown(marked(markdown).toString());
  }, [markdown]);

  return <pre>{rawMarkdown}</pre>;
};

export default RawColumn;

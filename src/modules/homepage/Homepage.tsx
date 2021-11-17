import { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

import { Button, Title } from "../common-ui";

import styles from "./styles.module.scss";

export const Homepage = () => {
  const s =
    '{\n  "width":"100px",\n  "height":"100px",\n  "background":"#000"\n}';

  const [code, setCode] = useState(s);

  const getStyle = () => {
    try {
      return JSON.parse(code);
    } catch {
      return null;
    }
  };

  return (
    <div>
      <Title>Accueil</Title>
      <div className={styles.main}>Contenu</div>

      <CodeEditor
        value={code}
        language="css"
        placeholder="Please enter CSS code."
        onChange={(evn) => setCode(evn.target.value)}
        padding={15}
        style={{
          fontSize: 16,
          backgroundColor: "#f5f5f5",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />

      {getStyle() ? <div style={getStyle()} /> : <div>Error</div>}
    </div>
  );
};

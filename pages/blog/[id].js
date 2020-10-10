import Header from "../../componet/pureHeader";
// import ReactQuill from "react-quill"; // ES6

import { Input, Button, Card } from "antd";
import { useState } from "react";
const { TextArea } = Input;

const Create = () => {
  const [text, setText] = useState("");
  var ReactQuill;
  if (typeof window !== "undefined") {
    ReactQuill = require("react-quill");
  }

  return (
    <>
      <Header />
      <main className="container">
        <div className="search-box">
          <Input
            style={{ width: 300 }}
            placeholder="https://example/image.png"
          />
          <Button type="primary" className="btn-save">
            Save
          </Button>
        </div>
        <TextArea
          rows={4}
          style={{ marginTop: 30 }}
          placeholder="Short Description . . ."
        />
        <Card
          style={{ marginTop: 20 }}
          title={
            <input
              className="input-title"
              placeholder="Write Blog title . . ."
            />
          }
        >
          {ReactQuill && (
            <ReactQuill
              theme="bubble"
              value={text}
              onChange={(value) => setText(value)}
            />
          )}
        </Card>
      </main>
    </>
  );
};
export default Create;

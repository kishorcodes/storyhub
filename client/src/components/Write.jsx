import { useState } from "react";
import MarkdownEditor from "./MarkdownEditor";
import WatchSpinner from "./WatchSpinner";
import Submitbar from "./Submitbar";
import Publish from "./Publish";
import Footer from "./Footer";
const Write = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [showDraftSaved, setShowDraftSaved] = useState(false);
  const [publishMode, setPublishMode] = useState(false);

  if (publishMode) {
    return <Publish setPublishMode={setPublishMode}></Publish>;
  } else {
    return (
      <>
        <Submitbar
          showDraftSaved={showDraftSaved}
          color={"transparent"}
          action='submit'
          bordered={false}
          setPublishMode={setPublishMode}
        >
          {" "}
        </Submitbar>
        <div className="px-5 py-4 lg:px-28">
          <MarkdownEditor
            setShowDraftSaved={setShowDraftSaved}
            setEditorLoaded={setEditorLoaded}
          ></MarkdownEditor>
        </div>
        <Footer></Footer>
      </>
    );
  }
};

export default Write;

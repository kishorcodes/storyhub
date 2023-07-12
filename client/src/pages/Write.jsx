import { useRef, useState } from "react";
import MarkdownEditor from "../components/MarkdownEditor";
import MoonLoader from "../components/MoonLoader";
import Publish from "../components/Publish";
import Submitbar from "../components/Submitbar";
const Write = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [showDraftSaved, setShowDraftSaved] = useState(false);
  const [publishMode, setPublishMode] = useState(false);
  const editorRef = useRef(null);

  if (publishMode) {
    return (
      <Publish
        content={editorRef.current ? editorRef.current.getContent() : ""}
        setPublishMode={setPublishMode}
      ></Publish>
    );
  } else {
    return (
      <>
        {!editorLoaded && <MoonLoader />}
        <Submitbar
          //SHIT
          showDraftSaved={
            editorRef?.current?.getContent().length > 0 ? true : false
          }
          color={"transparent"}
          action="submit"
          bordered={false}
          setPublishMode={setPublishMode}
        >
          {" "}
        </Submitbar>
        <div className="px-6 py-4 lg:px-28">
          <MarkdownEditor
            editorRef={editorRef}
            setShowDraftSaved={setShowDraftSaved}
            setEditorLoaded={setEditorLoaded}
          ></MarkdownEditor>
        </div>
      </>
    );
  }
};

export default Write;

import { Editor } from "@tinymce/tinymce-react";

const MarkdownEditor = ({ setEditorLoaded, setShowDraftSaved, editorRef }) => {
  const tinyMceAPIKey = process.env.REACT_APP_TINYMCE_API_KEY;
  const initialValue = localStorage.getItem("draftContent") || "";

  return (
    <>
      <Editor
        onEditorChange={(content) => {
          localStorage.setItem("draftContent", content);
        }}
        apiKey={tinyMceAPIKey}
        onInit={(evt, editor) => {
          editorRef.current = editor;
          setEditorLoaded(true);
        }}
        initialValue={initialValue}
        init={{
          placeholder:
            "Type your story here with heading images video links and many more...",
          height: 600,
          branding: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
        }}
      />
    </>
  );
};

export default MarkdownEditor;

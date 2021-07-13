import styled from "styled-components";
import dynamic from "next/dynamic";
import * as React from "react";
import { Editor as EditorType, EditorProps } from "@toast-ui/react-editor";
import { TuiEditorWithForwardedProps } from "@/components/toast/Editor";
import { useDispatch } from "react-redux";
import { addPost } from "@/actions/post";

const SubmitBtn = styled.button`
  width: 100px;
  height: 50px;
  margin: 50px;
  float: right;
`;

interface EditorPropsWithHandlers extends EditorProps {
  onChange?(value: string): void;
}

const Editor = dynamic<TuiEditorWithForwardedProps>(() => import("./Editor"), {
  ssr: false,
});
const EditorWithForwardedRef = React.forwardRef<
  EditorType | undefined,
  EditorPropsWithHandlers
>((props, ref) => (
  <Editor {...props} forwardedRef={ref as React.MutableRefObject<EditorType>} />
));

interface Props extends EditorProps {
  onChange(value: string): void;

  valueType?: "markdown" | "html";
}

const WysiwygEditor: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  const [content, setContent] = React.useState<any>();
  const {
    initialValue,
    previewStyle,
    height,
    initialEditType,
    useCommandShortcut,
  } = props;

  const editorRef = React.useRef<EditorType>();
  const handleChange = React.useCallback(() => {
    if (!editorRef.current) {
      return;
    }

    const instance = editorRef.current.getInstance();
    const valueType = props.valueType || "markdown";

    setContent(instance.getHtml());

    props.onChange(
      valueType === "markdown" ? instance.getMarkdown() : instance.getHtml()
    );
  }, [props, editorRef]);

  const handleEditor = React.useCallback(
    (e) => {
      e.preventDefault();
      console.log("ㅁㅇㄴㅁㅇㄴㅁㅇㄴ" + content);
      dispatch(
        addPost({
          title: "dummy title",
          content: content,
        })
      );
    },
    [dispatch, content]
  );

  return (
    <>
      <div>
        <EditorWithForwardedRef
          {...props}
          initialValue={initialValue}
          previewStyle={previewStyle || "vertical"}
          height={height || "600px"}
          initialEditType={initialEditType || "markdown"}
          useCommandShortcut={useCommandShortcut || true}
          ref={editorRef}
          onChange={handleChange}
        />
      </div>
      <SubmitBtn onClick={handleEditor}>제출</SubmitBtn>
    </>
  );
};

export default WysiwygEditor;

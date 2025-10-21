"use client";

import Highlight from "@tiptap/extension-highlight";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import { TaskItem, TaskList } from "@tiptap/extension-list";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import { Selection } from "@tiptap/extensions";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";

export default function TiptapRenderer({ content }: { content: string }) {
  // Parse the JSON string back to object
  const parsedContent = JSON.parse(content);

  const editor = useEditor({
    extensions: [
      StarterKit,
      // Add any other extensions you used when creating the content
    ],
    content: parsedContent,
    editable: false, // Make it read-only
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none",
      },
    },
  });

  return (
    <div className="tiptap-content">
      <EditorContent editor={editor} />
    </div>
  );
}

export function TiptapEditRenderer({
  content,
  onUpdate,
}: {
  content: string;
  //@ts-expect-errorno data type,
  onUpdate: (json) => void;
}) {
  const parsedContent = JSON.parse(content);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        horizontalRule: false,
        link: {
          openOnClick: false,
          enableClickSelection: true,
        },
      }),
      HorizontalRule,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TaskList,
      TaskItem.configure({ nested: true }),
      Highlight.configure({ multicolor: true }),
      Typography,
      Superscript,
      Subscript,
      Selection,
    ],
    content: parsedContent,
    editable: true,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      onUpdate(editor.getJSON());
    },
  });

  const handleEditorClick = () => {
    if (editor) editor.commands.focus();
  };

  return (
    <div className="h-full">
      <EditorContent
        role="presentation"
        editor={editor}
        onClick={handleEditorClick}
        className="p-6 h-full simple-editor"
      />
    </div>
  );
}

"use client";

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

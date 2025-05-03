import { Button } from "@/components/ui/button";
import type { Editor } from "@tiptap/react";
import { UploadIcon, XIcon } from "lucide-react";
import * as React from "react";
import { UploadsPreview } from "./uploads-preview";
interface ImageEditBlockProps {
  editor: Editor;
  close: () => void;
}

export const ImageEditBlock: React.FC<ImageEditBlockProps> = ({
  editor,
  close,
}) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = React.useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFile = React.useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (!files?.length) return;

      const insertImages = async () => {
        const contentBucket = [];
        const filesArray = Array.from(files);

        for (const file of filesArray) {
          contentBucket.push({ src: file });
        }

        editor.commands.setImages(contentBucket);
      };

      await insertImages();
      close();
    },
    [editor, close]
  );

  return (
    <div>
      <UploadsPreview />
      <div className="flex items-center justify-between gap-4 mt-4">
        <Button
          type="button"
          variant={"destructive"}
          className="w-full"
          onClick={handleClick}
        >
          <XIcon />
          Clear
        </Button>
        <Button type="button" className="w-full" onClick={handleClick}>
          <UploadIcon />
          Upload (More Files)
        </Button>
      </div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        multiple
        className="hidden"
        onChange={handleFile}
      />
    </div>
  );
};

import type { toggleVariants } from "@/components/ui/toggle";
import type { Editor } from "@tiptap/react";
import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { ImageEditDialog } from "../image/image-edit-dialog";
import { LinkEditPopover } from "../link/link-edit-popover";

interface SectionFiveProps extends VariantProps<typeof toggleVariants> {
  editor: Editor;
}

export const SectionFive: React.FC<SectionFiveProps> = ({
  editor,
  size,
  variant,
}) => {
  return (
    <>
      <LinkEditPopover editor={editor} size={size} variant={variant} />
      <ImageEditDialog editor={editor} size={size} variant={variant} />
    </>
  );
};

SectionFive.displayName = "SectionFive";

export default SectionFive;

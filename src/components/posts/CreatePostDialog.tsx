"use client";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { Content } from "@tiptap/react";
import { useState } from "react";
import { MinimalTiptapEditor } from "./minimal-tiptap";

export function CreatePostDialog() {
  const [value, setValue] = useState<Content>("");
  // const [selectedTags, setSelectedTags] = useState<string[]>([]);

  return (
    <DialogContent className="max-w-5xl">
      <DialogHeader>
        <DialogTitle>Write A Post</DialogTitle>
      </DialogHeader>
      <div className="flex flex-col gap-4">
        <Input type="text" placeholder="Title of Post" />
        <MinimalTiptapEditor
          value={value}
          onChange={setValue}
          className="w-full focus:outline-none focus:ring-0"
          editorContentClassName="p-5"
          output="html"
          placeholder="Enter your description..."
          autofocus={true}
          editable={true}
          editorClassName="focus:outline-hidden"
        />
        {/* <MultiSelect
          placeholder="Tags"
          options={[
            { label: "Full-time", value: "full-time" },
            { label: "Part-time", value: "part-time" },
            { label: "Contract", value: "contract" },
            { label: "Remote", value: "remote" },
          ]}
          selectedOptions={selectedTags}
          setSelectedOptions={setSelectedTags}
        /> */}
      </div>
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  );
}

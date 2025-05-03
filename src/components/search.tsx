"use client";
import { Input } from "@/components/ui/input";
interface Props {
  className?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

export function Search({ placeholder = "Search" }: Props) {
  return (
    <Input
      id="search"
      className={
        "w-full justify-start rounded-md bg-muted/25 text-sm font-normal text-muted-foreground shadow-none hover:bg-muted/50"
      }
      placeholder={placeholder}
      type="text"
      onClick={() => console.log("Search")}
    />
  );
}

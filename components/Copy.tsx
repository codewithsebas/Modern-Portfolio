import React, { useState } from "react";
import { RxCopy } from "react-icons/rx";
import { BsFileEarmarkCheckFill } from "react-icons/bs";
import { Copy } from "@/interfaces/Interface";

const Copy = ({ value }: Copy) => {
  const [textToCopy, setTextToCopy] = useState(value);
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button className="flex items-center gap-2 text-lg" onClick={handleClick}>
      {copied ? "Copied!" : value}
      {copied ? (
        <BsFileEarmarkCheckFill className="text-2xl" />
      ) : (
        <RxCopy className="text-xl" />
      )}
    </button>
  );
};

export default Copy;

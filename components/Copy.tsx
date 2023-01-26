import React, { useState } from "react";
import { RxCopy } from "react-icons/rx";
import { BsFileEarmarkCheckFill } from "react-icons/bs";

interface Values {
	value: string;
}

const Copy = ({ value }: Values) => {
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
		<button className="flex items-center gap-2" onClick={handleClick}>
			{copied ? "Copied!" : value}
			{copied ? <BsFileEarmarkCheckFill /> : <RxCopy className="animate-bounce" />}
		</button>
	);
};

export default Copy;

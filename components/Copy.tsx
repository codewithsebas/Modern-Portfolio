import React, { useState } from "react";

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
		<button onClick={handleClick}>
			{copied ? "Copied!" : value}
		</button>
	);
};

export default Copy;

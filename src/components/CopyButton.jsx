import React, { useState } from 'react';

const CopyButton = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000); // reset the copied state after 2 seconds
    });
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handleCopy}
        className="mt-2 border border-maroon rounded-2xl px-20 text-lg tracking-wide font-garamond text-maroon font-semibold hover:text-white hover:bg-maroon transition duration-200"
      >
        {isCopied ? 'Copied!' : 'COPY'}
      </button>
    </div>
  );
};

export default CopyButton;

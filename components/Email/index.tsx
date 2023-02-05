import { useCallback, useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

type EmailProps = {
  children: string;
  onCopyTooltip: string;
};

export function Email({ children, onCopyTooltip }: EmailProps) {
  const [copied, setCopied] = useState(false);
  const [id, setId] = useState("");

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(children);

    setCopied(true);
  }, [children]);

  useEffect(() => {
    if (!copied) return;

    const timeout = setTimeout(() => setCopied(false), 2000);

    return () => clearTimeout(timeout);
  }, [copied]);

  useEffect(() => {
    setId(Math.random().toString(36).substring(7));
  }, []);

  return (
    <button className="Email" onClick={handleCopy} id={id}>
      {children}

      <span className="Email__Icon">
        <FaRegCopy />
      </span>

      <Tooltip anchorId={id} isOpen={copied} place="bottom" className="Email__Tooltip">
        {onCopyTooltip}
      </Tooltip>
    </button>
  );
}

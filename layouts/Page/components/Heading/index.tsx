import React from "react";

export function Heading(props: Pick<JSX.IntrinsicElements["h2"], "children" | "id">) {
  return <h2 {...props} className="Page__Heading" />;
}

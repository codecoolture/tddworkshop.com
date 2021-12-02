export function Text(props: Pick<JSX.IntrinsicElements["p"], "children">) {
  return <p {...props} className="Page__Text" />;
}

export function TextField({ children, error }: { children: React.ReactNode; error?: string }) {
  const classes = ["TextField", undefined !== error && "TextField--With-Errors"].filter(Boolean).join(" ");

  return <label className={classes}>{children}</label>;
}

TextField.Label = function TextFieldLabel(props: { children: string }) {
  return <span className="TextField__Label">{props.children}</span>;
};

TextField.Hint = function TextFieldHint(props: { children: React.ReactNode }) {
  return <span className="TextField__Hint">{props.children}</span>;
};

type TextFieldInputProps = Pick<JSX.IntrinsicElements["input"], "name" | "onBlur" | "onChange" | "value">;

TextField.Input = function TextFieldInput({ name, onBlur, onChange, value }: TextFieldInputProps) {
  return (
    <input className="TextField__Input" type="text" name={name} onBlur={onBlur} onChange={onChange} value={value} />
  );
};

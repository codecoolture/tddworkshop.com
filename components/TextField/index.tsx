export function TextField({ children, error }: { children: React.ReactNode; error?: unknown }) {
  const classes = ["TextField", undefined !== error && "TextField--With-Errors"].filter(Boolean).join(" ");

  return (
    <div>
      <label className={classes}>{children}</label>
    </div>
  );
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

type TextFieldTextArea = Pick<JSX.IntrinsicElements["textarea"], "name" | "onBlur" | "onChange" | "value"> & {
  numberOfRows: number;
};

TextField.TextArea = function TextFieldTextArea({ name, numberOfRows, onBlur, onChange, value }: TextFieldTextArea) {
  return (
    <textarea
      className="TextField__Input"
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      rows={numberOfRows}
      value={value}
    />
  );
};

TextField.Error = function TextFieldError(props: { children: React.ReactNode }) {
  return <p className="TextField__Error">{props.children}</p>;
};

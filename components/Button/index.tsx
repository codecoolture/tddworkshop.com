type ButtonProps = {
  children: string;
  className?: string;
  href?: string;
  variant: "solid" | "outline";
  type?: JSX.IntrinsicElements["button"]["type"];
};

export function Button({ children, className, href, type = "button", variant }: ButtonProps) {
  const classes = ["Button", variant === "solid" && "Button--Solid", className].filter(Boolean).join(" ");

  if (undefined !== href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type}>
      {children}
    </button>
  );
}

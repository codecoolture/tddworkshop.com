type ButtonProps = {
  children: string;
  className?: string;
  href: string;
  variant: "solid" | "outline";
};

export function Button({ children, className, href, variant }: ButtonProps) {
  const classes = ["Button", variant === "solid" && "Button--Solid", className].filter(Boolean).join(" ");

  return (
    <a className={classes} href={href}>
      {children}
    </a>
  );
}

type LinkProps = Pick<React.HTMLProps<HTMLAnchorElement>, "href" | "target"> & {
  className?: string;
  children: React.ReactNode;
  decoration?: boolean;
};

export function Link({ children, className, decoration = true, href, target }: LinkProps) {
  const classes = ["Link", !decoration && "Link--Undecorated", className].filter(Boolean).join(" ");

  return (
    <a className={classes} href={href} target={target}>
      {children}
    </a>
  );
}

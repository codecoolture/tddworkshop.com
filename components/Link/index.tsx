export type LinkProps = Pick<React.HTMLProps<HTMLAnchorElement>, "href" | "rel" | "target"> & {
  className?: string;
  children: React.ReactNode;
  decoration?: boolean;
};

export function Link({ children, className, decoration = true, href, target, rel }: LinkProps) {
  const classes = ["Link", !decoration && "Link--Undecorated", className].filter(Boolean).join(" ");

  return (
    <a className={classes} href={href} target={target} rel={rel}>
      {children}
    </a>
  );
}

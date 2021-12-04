import { ReactNode } from "react";
import { Page } from "../..";
import { Code } from "../../../../components/Code";
import { Link, LinkProps } from "../../../../components/Link";
import { Underline } from "../../../../components/Underline";

export function Footer({ children }: { children: ReactNode }) {
  return (
    <footer className="Page__Footer">
      <Page.Row>{children}</Page.Row>
    </footer>
  );
}

Footer.Text = function FooterText({ children }: { children: ReactNode }) {
  return <p className="Page__Footer__Text">{children}</p>;
};

Footer.Links = function FooterLinks({ children }: { children: ReactNode }) {
  return <ul className="Page__Footer__Links">{children}</ul>;
};

Footer.Link = function FooterLink({ children, ...props }: Pick<LinkProps, "children" | "href" | "rel" | "target">) {
  return (
    <li className="Page__Footer__LinkWrapper">
      <Link {...props} target="_blank" className="Page__Footer__Link">
        <Underline>{children}</Underline>
      </Link>
    </li>
  );
};

Footer.Copy = function FooterCopy({ children }: { children: ReactNode }) {
  return <Code className="Page__Footer__Copy">{children}</Code>;
};

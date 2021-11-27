import { ReactNode } from "react";
import { Code } from "../../../../components/Code";
import { Link } from "../../../../components/Link";
import { Underline } from "../../../../components/Underline";

export function Footer({ children }: { children: ReactNode }) {
  return <footer className="Page__Footer">{children}</footer>;
}

Footer.Text = function FooterText({ children }: { children: ReactNode }) {
  return <p className="Page__Footer__Text">{children}</p>;
};

Footer.Links = function FooterLinks({ children }: { children: ReactNode }) {
  return <ul className="Page__Footer__Links">{children}</ul>;
};

Footer.Link = function FooterLink({ children, href }: { children: ReactNode; href: string }) {
  return (
    <li className="Page__Footer__LinkWrapper">
      <Link href={href} target="_blank" className="Page__Footer__Link">
        <Underline>{children}</Underline>
      </Link>
    </li>
  );
};

Footer.Copy = function FooterCopy({ children }: { children: ReactNode }) {
  return (
    <section className="Page__Footer__Copy">
      <Code className="Page__Footer__Code">{children}</Code>
    </section>
  );
};

import React, { ReactNode } from "react";
import { Page } from "../..";
import { Code } from "../../../../components/Code";
import { Link } from "../../../../components/Link";
import { Underline } from "../../../../components/Underline";

function Footer({ children }: { children: ReactNode }) {
  return (
    <footer className="Page__Footer">
      <Page.Row>{children}</Page.Row>
    </footer>
  );
}

function FooterText({ children }: { children: ReactNode }) {
  return <p className="Page__Footer__Text">{children}</p>;
}

function FooterCopy({ children }: { children: (year: string) => React.ReactNode }) {
  const year = new Date().getFullYear();

  return <Code className="Page__Footer__Copy">{children(year.toString())}</Code>;
}
function FooterLanguages({ children }: { children: React.ReactNode }) {
  return <div className="Page__Footer__Languages">{children}</div>;
}

function FooterLanguagesTitle({ children }: { children: React.ReactNode }) {
  return <p className="Page__Footer__Languages__Title">{children}</p>;
}

function FooterLanguagesList({ children }: { children: React.ReactNode }) {
  return <div className="Page__Footer__Languages__List">{children}</div>;
}

function FooterLanguagesLanguage({ children, href }: { children: React.ReactNode; href?: string }) {
  if (undefined === href) {
    return <p className="Page__Footer__Languages__Language">{children}</p>;
  }

  return (
    <p className="Page__Footer__Languages__Language">
      <Link href={href} decoration={false}>
        <Underline>{children}</Underline>
      </Link>
    </p>
  );
}

FooterLanguages.Title = FooterLanguagesTitle;
FooterLanguages.List = FooterLanguagesList;
FooterLanguages.Language = FooterLanguagesLanguage;
Footer.Text = FooterText;
Footer.Copy = FooterCopy;
Footer.Languages = FooterLanguages;

export { Footer };

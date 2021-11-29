import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { Seo } from "./components/Seo";

export interface PageProps {
  children: React.ReactNode;
}

export function Page({ children }: PageProps) {
  return <div className="Page">{children}</div>;
}

Page.ContactForm = ContactForm;

Page.Footer = Footer;

Page.Main = function Main({ children }: { children: React.ReactNode }) {
  return <main className="Page__Main">{children}</main>;
};

Page.Seo = Seo;

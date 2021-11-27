import { Footer } from "./components/Footer";

export interface PageProps {
  children: React.ReactNode;
}

export function Page({ children }: PageProps) {
  return <div className="Page">{children}</div>;
}

Page.Main = function Main({ children }: { children: React.ReactNode }) {
  return <main className="Page__Main">{children}</main>;
};

Page.Footer = Footer;

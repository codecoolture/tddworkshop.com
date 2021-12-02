import React from "react";
import { Button, ButtonProps } from "../../../../components/Button";

export function Header({ children }: { children: React.ReactNode }) {
  return <section className="Page__Header">{children}</section>;
}

Header.Buttons = function HeaderButtons({ children }: { children: React.ReactNode }) {
  return <div className="Page__Header__Buttons">{children}</div>;
};

Header.Button = function HeaderButton(props: Pick<ButtonProps, "children" | "href" | "variant">) {
  return <Button {...props} className="Page__Header__Button" />;
};

Header.Text = function HeaderText(props: { children: React.ReactNode }) {
  return <p className="Page__Header__Text">{props.children}</p>;
};

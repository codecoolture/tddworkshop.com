import { NextMiddleware, NextResponse } from "next/server";
import { getAcceptedLanguages } from "../lib/getAcceptedLanguages";

const middleware: NextMiddleware = (req) => {
  if (req.nextUrl.pathname === "/") {
    const locales = ["en", "es"];
    const defaultLocale = "en";

    const acceptedLanguages = getAcceptedLanguages(req.headers.get("accept-language"));
    const locale = acceptedLanguages.find((l) => locales.includes(l)) || defaultLocale;

    req.nextUrl.pathname = `/${locale}`;

    return NextResponse.redirect(req.nextUrl);
  }

  return NextResponse.next();
};

export default middleware;

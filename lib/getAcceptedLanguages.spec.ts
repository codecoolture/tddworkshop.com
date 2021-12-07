import { getAcceptedLanguages } from "./getAcceptedLanguages";

describe("getAcceptedLanguages", () => {
  it("returns an empty array if accept language is blank", () => {
    expect(getAcceptedLanguages(undefined)).toEqual([]);
    expect(getAcceptedLanguages(null)).toEqual([]);
    expect(getAcceptedLanguages("")).toEqual([]);
  });

  it("returns only language tags", async () => {
    expect(getAcceptedLanguages("en-US")).toEqual(["en"]);
    expect(getAcceptedLanguages("en,es-ES")).toEqual(["en", "es"]);
    expect(getAcceptedLanguages("en,es")).toEqual(["en", "es"]);
    expect(getAcceptedLanguages("en,es")).toEqual(["en", "es"]);
    expect(getAcceptedLanguages("en,es;q=0.8")).toEqual(["en", "es"]);
  });

  it("does not take quality into account", async () => {
    expect(getAcceptedLanguages("en;q=0.8,es;q=0.9")).toEqual(["en", "es"]);
  });

  it("works even if there are some whitespaces between locales", async () => {
    expect(getAcceptedLanguages("en;q=0.8,  es;q=0.9")).toEqual(["en", "es"]);
    expect(getAcceptedLanguages(" en-US ")).toEqual(["en"]);
    expect(getAcceptedLanguages("en,    es-ES")).toEqual(["en", "es"]);
    expect(getAcceptedLanguages("en, es   ")).toEqual(["en", "es"]);
  });
});

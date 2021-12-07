export function getAcceptedLanguages(acceptLanguage: undefined | null | string) {
  if (undefined === acceptLanguage || null === acceptLanguage || "" === acceptLanguage) {
    return [];
  }

  return acceptLanguage.split(",").map((lang) => {
    return lang.trim().split(";")[0].split("-")[0];
  });
}

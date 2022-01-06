context("Landing page", () => {
  specify("Load a localized version of the landing page", () => {
    cy.visit("/");

    cy.url().should("include", "/en");
  });

  specify("Change language to Spanish", () => {
    cy.visit("/");

    cy.findByText("Español").click();

    cy.url().should("include", "/es");
  });
});

/// <reference types="cypress" />

describe("Input form", () => {
  it("accepts inputs", () => {
    cy.visit("http://localhost:3000")
    cy.wait(500)
    cy.get("input")
      .type("olivierjm")
      .should("have.value", "olivierjm")
    cy.wait(500)
    cy.get("div").should("have.class", "card")
    cy.get(".App").screenshot()
  })
})

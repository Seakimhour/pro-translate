describe("Select text popup", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("show popup button when select text", () => {
    cy.contains("Contact").realClick({ position: "topLeft", clickCount: 2 });
    cy.get("#pro-translate").should("exist");
  });

  it("show translation panel when click popup button", async () => {
    cy.contains("Contact").realClick({ position: "topLeft", clickCount: 2 });
    cy.get("#pro-translate div img").realClick({ position: "center" });
    cy.get("#pro-traslate-translation-panel").should("exist");
  });

  it("can translate selected text", async () => {
    cy.contains("Contact").realClick({ position: "topLeft", clickCount: 2 });
    cy.get("#pro-translate div img").realClick({ position: "center" });
    cy.get("#pro-traslate-translation-panel")
      .should("exist")
      .and("contain", "コンタクト");
  });

  it("can change text format", () => {
    cy.contains("Privacy Policy")
      .realClick({ position: "topLeft", clickCount: 2 })
      .realPress([
        "Shift",
        "ArrowRight",
        "ArrowRight",
        "ArrowRight",
        "ArrowRight",
        "ArrowRight",
        "ArrowRight",
      ]);
    cy.contains("Privacy Policy").realMouseUp({ position: "center" });
    cy.get("#pro-translate div img").realClick({ position: "center" });
    cy.get(':nth-child(2) > .text-base').should("contain", "プライバシーポリシー");

    cy.contains("snake").realClick({ position: "center" });
    cy.get("input").should("have.value", "privacy_policy");

    cy.contains("param").realClick({ position: "center" });
    cy.get("input").should("have.value", "privacy-policy");
  });
});

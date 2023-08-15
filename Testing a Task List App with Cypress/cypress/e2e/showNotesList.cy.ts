describe("Example Suite", () => {
  it("makes a request to the backend and logs the values", () => {
    cy.request("GET", "http://localhost:3001/notes").then((response) => {
      // Log each object in the array separately
      response.body.forEach((obj, index) => {
        cy.log(`Object ${index + 1}:`, obj);
      });
    });
  });
});
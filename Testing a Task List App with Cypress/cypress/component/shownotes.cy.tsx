describe("Displaying Notes", () => {
  it("should display the notes correctly", () => {
    // cy.visit("http://localhost:3000/"); // Replace the URL with your application's URL

    // Get the list of notes from the Redux state
    // cy.window().its("store").invoke("getState").its("storedList.notes").as("notes");

    // // Check if the notes are displayed correctly
    // cy.get(".rounded-lg")
    //   .children()
    //   .should("have.length", "@notes") // Assert that the number of notes displayed matches the number of notes in the Redux state
    //   .each(($note, index) => {
    //     cy.wrap($note)
    //       .find("textarea")
    //       .should("have.value", "@notes[index].body"); // Assert that the note's body matches the corresponding note in the Redux state
    //   });
  });
});
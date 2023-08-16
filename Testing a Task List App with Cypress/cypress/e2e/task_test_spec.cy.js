//describe context
describe('Test adding task', () => {
  beforeEach('finds the content "type"', () => {

    cy.visit('/');
  })

  //test adding task
  it('adds task sucessfully', () => {
    cy.get('.task_input textarea').type("finish today's task");
    cy.get('.task_input button').click();
    cy.get('.task_list .single_task').should('have.length', 3);
    cy.get('.task_list span').last().should('have.text', "finish today's task");

    //check if the state is correct
    cy.window().its('store').invoke('getState').its('tasks').should('have.length', 3);
  });

  //test completing task
  it('completes task sucessfully', () => {
    cy.get('.task_list .single_task').first().get('svg').eq(1).click();
    cy.get('.task_list span').first().should('have.class', "line-through");
  });

  //test deleting task
  it('deletes task sucessfully', () => {
    cy.get('.task_list .single_task').first().get('svg').last().click();
    cy.get('.task_list .single_task').should('have.length', 1);
  });


  //test editing task
  it('edits task sucessfully', () => {
    cy.get('.task_list .single_task').first().get('svg').eq(0).click();
    cy.get('.task_list .single_task textarea').first().clear().type('edited task{enter}');
  });

  //test handling error 
  it('handles error if empty task entered successfully', () => {
    cy.get('.task_input button').click();
    cy.get('.task_list .single_task').should('have.length', 2);
  });  

  //test if state is correct initially
  it('has expected state on load', () => {
    cy.window().its('store').invoke('getState').should('deep.equal', {
      tasks: [
        { id: '1', content: "solve leetcode", isComplete: false},
        { id: '2', content: "complete daily tasks", isComplete: false},
      ]
    })
  })
})
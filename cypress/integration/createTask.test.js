before(() => {
  cy.visit("http://localhost:8080")
})

describe('Test task creation form', () => {
  it('creates a valid task', () => {
    cy.get('[data-test=title-input]').type("a new task")
    cy.get('[data-test=description-input]').type("a description for this new task")
    cy.contains('Salvar').click()
  })
  
})
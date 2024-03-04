describe('DemoQA Tests', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/')
  })

  it('Verifies the homepage title', () => {
    cy.title().should('eq', 'ToolsQA')
  })

  it('Navigates to the Elements section', () => {
    cy.contains('Elements').click()
    cy.url().should('include', '/elements')
    cy.contains('Text Box').should('be.visible')
  })

  it('Fills out the Text Box form', () => {
    cy.contains('Elements').click()
    cy.contains('Text Box').click()

    cy.get('#userName').type('John Doe')
    cy.get('#userEmail').type('john.doe@example.com')
    cy.get('#currentAddress').type('123 Main St')
    cy.get('#permanentAddress').type('456 Elm St')

    cy.contains('Submit').click()

    cy.get('#output').should('contain.text', 'John Doe')
    cy.get('#output').should('contain.text', 'john.doe@example.com')
    cy.get('#output').should('contain.text', '123 Main St')
    cy.get('#output').should('contain.text', '456 Elm St')
  })

  it('Verifies the Interactions section', () => {
    cy.contains('Interactions').click()
    cy.url().should('include', '/interactions')
    cy.contains('Sortable').should('be.visible')
  })
})

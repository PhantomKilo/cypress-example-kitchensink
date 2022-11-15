// const cypressConfig = require('../../../cypress.config');
// const navText = cypressConfig.e2e.env.navbarText

const token = 'abc123'

context('My First Test', () => {

  beforeEach(() => {
    cy.visit('/commands/actions')
    
  })  

//   it('triggers a popover on click', () => {
//     cy.get('.action-btn').click()
//     cy.findByText('This popover shows up on click').should('be.visible')
//   })

//   it('can click  different section of canvas', () => {
//     cy.get('#action-canvas').click('top')
//     cy.get('#action-canvas').click('bottomRight')
//     cy.get('#action-canvas').click(80, 100)
//   })

//   it('can double click to edit', () => {
//     cy.get('.action-div').dblclick().should('not.be.visible')
//     cy.get('.action-input-hidden').should('be.visible')
//   })

//   it('right click to edit', () => {
//     cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
//     cy.get('.rightclick-action-input-hidden').should('be.visible')
//   })

  it('shows the nav links on hover', () => {
    cy.get('.dropdown-toggle').trigger('mouseover')
    cy.get('.dropdown-menu').should('be.visible')
  })

//   it('sets and gets a token from local storage', () => {
//     cy.setLocalStorage('token', token)
//     cy.getLocalStorage('token').should('eq', token)
//   })

//   it('overwites type command using sensitive characters', () => {
//     cy.visit('/commands/actions')
//     cy.findByPlaceholderText('Email').type('test@gamil.com')
//     cy.findByPlaceholderText('Email').type('test@gamil.com', { sensitive: true })
//   })

//   it('uses fixture data in network request', function () {
//     cy.visit('/commands/network-requests')
//     cy.intercept('GET', '**/comments/*', this.data).as('getComment')
//     cy.get('.network-btn').click()
//     cy.wait('@getComment').then((res) => {
//         cy.log('response', res)
//     })
//   })

//   it('pulls data from a fixture', () => {
//     cy.fixture('example').then((data) => {
//       cy.log('DATA: ', data)
//     })
//   })

//   it('updates fixture data inline', () => {
//     cy.fixture('example').then((data) => {
//         data.email = 'updated@email.com'
//         cy.log('UPDATED: ', data)
//     })
//   })
  //   before(() => {
  //     cy.request('https://api.spacexdata.com/v3/missions')
  //       .its('body')
  //       .should('have.length', 10)
  //   })

  //   beforeEach(() => {
  //     cy.visit('/')
  //   })

  //   afterEach(() => {
  //     cy.log('After each hook')
  //   })

  //   after(() => {
  //     cy.log('Final log')
  //   })

  //   it('Visits home page', () => {
  //     cy.visit('/')
  //   })

  //   it('has an h1 on the page', () => {
  //     cy.get('h1').should('exist')
  //   })

  //   it('renders the correct h1 text', () => {
  //     cy.get('h1').should('contain.text', 'Kitchen Sink')
  //   })

  //   it('renders a paragraph under h1', () => {
  //     cy.get('.container').eq(1).find('p').should('exist')
  //   })

  //   it('renders a section with correct elements', () => {
  //     cy.get('.container').eq(2).within(() => {
  //       cy.get('h4').should('exist')
  //       cy.get('p').should('exist')
  //     })
  //   })

  //   it('correctly renders the cypress website link', () => {
  //     cy.findByText(navText).should('exist')
  //   })

  //   it('types into an email field', () => {
  //     cy.visit('/commands/actions')
  //     cy.findByPlaceholderText('Email').type('test@gamil.com')
  //     cy.wait(2000).then(() => {
  //         console.log('Test is finished')
  //         fetch('https://api.spacexdata.com/v3/missions')
  //             .then((res) => res.json())
  //             .then((data) => {
  //                 console.log(data)
  //             })
  //     })
  //   })

  //   it('Shows an active class for current page', () => {
  //     cy.visit('/commands/actions')
  //     cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active')
  //   })

  //   it('Should not have an active class on inactive page', () => {
  //     cy.visit('/commands/actions')
  //     cy.get('.dropdown-menu').find('li').first()
  //     .should('not.have.class', 'active')
  //     .find('a')
  //     .should('have.attr', 'href', '/commands/querying')
  //   })

  //   it('Links to actions page correctly', () => {
  //     cy.visit('/')
  //     cy.findAllByText('Actions').first().click({ force: true })
  //     cy.url().should('include', '/commands/actions')
  //     })

  //   it('Lets you type into input field', () => {
  //     cy.visit('/commands/actions')
  //     cy.findAllByPlaceholderText('Email').type('Test').should('have.value', 'Test')
  //   })

  //   it('Lets you clear an input field', () => {
  //     cy.visit('/commands/actions')
  //     cy.findByLabelText('Describe:').type('Test Description').should('have.value', 'Test Description')
  //       .clear().should('have.value', '')
  //   })

  //   it('Lets you check checkbox', () => {
  //     cy.visit('/commands/actions')
  //     cy.get('.action-checkboxes [type="checkbox"]').eq(1).check({ force: true }).should('be.checked')
  //   })
})

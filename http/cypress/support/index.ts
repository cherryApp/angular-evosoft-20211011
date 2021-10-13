// import './commands';

// declare namespace Cypress {
//   interface Chainable<E> {
//     byTestId<E extends Node = HTMLElement>(
//       id: string,
//       options?: Partial<
//         Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable & Cypress.Shadow
//         >,
//     ): Cypress.Chainable<JQuery<E>>;
//   }
// }

// Cypress.Commands.add(
//   'byTestId',
//   <E extends Node = HTMLElement>(
//     id: string,
//     options?: any,
//   ): Cypress.Chainable<JQuery<E>> => {
//     return cy.get(`[data-testid="${id}"]`, options)
//   }
// )

import React, { RefObject, createRef } from 'react'
import { Input } from './index'
import { TbMail } from 'react-icons/tb';

describe('<Input />', () => {
  it('should renders correctly', () => {
    cy.mount(<Input />);
  });

  it('should creates a input on dom', () => {
    cy.mount(<Input />);
    cy.get('input').should('exist');
  });

  it('should be empty by default', () => {
    cy.mount(<Input />);
    cy.get('input').should('be.empty');
  });

  it('should show given text on component', () => {
    cy.mount(<Input />);
    cy.get('input')
      .should('not.have.value', 'Hello world')
      .type('Hello world')
      .should('have.value', 'Hello world');
  });

  it('should focus to actual input when root wrapper clicked', () => {
    cy.mount(<Input />);
    cy.get('input').should('have.not.focus');
    cy.get('[data-test-id="input-root"]')
      .should('exist')
      .click();
    cy.get('input').should('have.focus');
    
  });

  it('should support outer ref for actual input', () => {
    const ref: RefObject<HTMLInputElement> = createRef();
    cy.mount(<Input ref={ref} />);
    cy.get('input').then((findedList) => {
      expect(ref.current).to.equal(findedList[0]);
    })
  });

  it('should renders error text when error given as prop', () => {
    cy.mount(<Input error="Can't be empty" />);
    cy.contains("Can't be empty");
  });

  it('should renders icon component when icon given as prop', () => {
    cy.mount(<Input icon={<TbMail data-test-id="rendered-icon" />} />);
    cy.get('[data-test-id="rendered-icon"]').should('exist');
  });
})
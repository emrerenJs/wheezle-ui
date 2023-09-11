import { Button } from ".";

describe('<Button />', () => {
    it('should render button', () => {
        cy.mount(<Button />);
        cy.get('button').should('exist');
    });
    it('should call onClick when clicked', () => {
        const onClickHandler = cy.stub();
        cy.mount(<Button onClick={onClickHandler} />);
        cy.wrap(onClickHandler).should('not.have.been.called');
        cy.get('button').click();
        cy.wrap(onClickHandler).should('have.been.calledOnce');
    });
    it('should render child text', () => {
        cy.mount(<Button> Hello world </Button>);
        cy.get('button').should('contain', 'Hello world');
    });
    it('should support disabled', () => {
        cy.mount(<Button disabled={true} />);
        cy.get('button').should('be.disabled');
    });
    it('should\'nt call onclick when disabled true', () => {
        const onClickHandler = cy.stub();
        cy.mount(<Button disabled onClick={onClickHandler} />);
        cy.get('button').click({ force: true });
        cy.wrap(onClickHandler).should('not.have.been.called');
    });
    it('should support loading', () => {
        cy.mount(<Button loading />);
        cy.get('[role="progressbar"]').should('exist');
    });
    it('should\'nt render children while loading true', () => {
        cy.mount(<Button loading>Hello World</Button>);
        cy.get('button').should('not.contain', 'Hello world');
    });
    it('should\'nt call onclick when loading true', () => {
        const onClickHandler = cy.stub();
        cy.mount(<Button loading onClick={onClickHandler} />);
        cy.get('button').click({ force: true });
        cy.wrap(onClickHandler).should('not.have.been.called');
    });
});
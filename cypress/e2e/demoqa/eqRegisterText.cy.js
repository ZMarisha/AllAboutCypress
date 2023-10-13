describe('equel register text', () => {

    cy.visit('https://demoqa.com/modal-dialogs');

    it('register of text', () => {
        cy.get('#showSmallModal').then($btn => {
            const btnText = $btn.text();

            $btn.click();
            cy.get('#example-modal-sizes-title-sm').contains(btnText, {matchCase: false})
        })
    });

    it('ALIAS and invoke', function () {
        cy.get('#showSmallModal').invoke('text').as('invokeText');

        cy.get('#showSmallModal').then($elBtn => {
            const textButton = $elBtn.text();
            cy.wrap(textButton).as('wrapText')
        })

    });

    it('use ALIAS', function () {
        cy.log(this.invokeText);
        cy.log(this.wrapText);
    })

})
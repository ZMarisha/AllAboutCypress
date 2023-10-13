describe('location Swag Labs', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    it('should have title tag with value Swag Labs', () => {
        cy.title().should('eq', 'Swag Labs');
    });

    it('URL should be https://www.saucedemo.com/', () => {
        cy.url().should('eq', 'https://www.saucedemo.com/')
    });

    it('should be protocol HTTPS', () => {
        cy.location('protocol').should('contains', 'https')
    });

    it('the hostname should be www.saucedemo.com', () => {
        cy.location('hostname').should('contains', 'www.saucedemo.com')
    })

    it('location variant 2', () => {
        cy.location().should((loc) => {
            expect(loc.origin).to.eq('https://www.saucedemo.com')
            expect(loc.pathname).to.eq('/')
            // expect(loc.port).to.eq('8000')
            expect(loc.protocol).to.eq('https:')
            // expect(loc.search).to.eq('?q=dan')
            expect(loc.href).to.eq(
                'https://www.saucedemo.com/'
              )
          })
    })
})
describe('Apple Product Photo Album', () => {
    it('should display images in the photo album', () => {
        cy.intercept('GET', '/your-api-endpoint').as('getPhotoAlbum'); // Adjust to your API
        cy.visit('/your-page'); // Replace with your actual page
        cy.wait('@getPhotoAlbum'); // Wait for the network call

        // Assert that images exist and are visible
        cy.get('.photo-album li img').should('exist'); // Adjust selector as necessary
        cy.get('.photo-album li img').should('be.visible'); 
        cy.get('.photo-album li img').should('have.length.greaterThan', 0); // Ensure there are images
    });
});

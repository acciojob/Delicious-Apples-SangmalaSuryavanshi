describe('Apple Product Photo Album', () => {
    it('should display images in the photo album', () => {
        cy.visit('/your-page'); // Replace with your actual page

        // Wait for the images to load if they come from an API
        cy.intercept('GET', '/your-api-endpoint').as('getPhotoAlbum'); // Adjust the endpoint
        cy.wait('@getPhotoAlbum');

        // Assert that images exist in the photo album and are visible
        cy.get('.photo-album img').should('exist'); 
        cy.get('.photo-album img').should('be.visible'); 
        cy.get('.photo-album img').should('have.length.greaterThan', 0); // Ensure there are images
    });
});

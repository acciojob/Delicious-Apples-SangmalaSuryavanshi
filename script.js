//your code here
cy.get('.photo-main .photo-main-img');
cy.get('.photo-album li img');
cy.get('.price h2');
cy.get('.variant li img');

cy.get('body').then((body) => {
  if (body.find('.photo-album>ul>li>img').length > 0) {  
    cy.get('.photo-album>ul>li>img');
  }
});
cy.get('.photo-album>ul>li>img', { timeout: 10000 });
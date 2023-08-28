describe('assignment', () => {
    it('Sum the old and new price then display it and alert one message', () => {
      cy.visit("https://www.automationteststore.com/");
  
      cy.get('#special > .container-fluid').find('.pricenew').invoke('text').then((new_price) => {
        cy.log(new_price);
      });
  
      cy.get('#special > .container-fluid').find('.priceold').invoke('text').then((old_price) => {
        cy.log(old_price);
      });
    });
  });
 
      cy.get('#special > .container-fluid').find('.pricenew').then($newPrices => {
        const sumNewPrices = Array.from($newPrices).reduce((sum, el) => {
          const price = parseFloat(el.innerText.replace('$', ''));
          return sum + price;
        }, 0);
  
        
        cy.get('#special > .container-fluid').find('.priceold').then($oldPrices => {
          const sumOldPrices = Array.from($oldPrices).reduce((sum, el) => {
            const price = parseFloat(el.innerText.replace('$', ''));
            return sum + price;
          }, 0);
  
          cy.log(`Sum of old prices: ${sumOldPrices}`);
          cy.log(`Sum of new prices: ${sumNewPrices}`);

          alert(`Hey! The sum of the old prices is $${sumOldPrices.toFixed(2)}, and the sum of the new prices is $${sumNewPrices.toFixed(2)}.`);
  
         
          });
        });
    
      
import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js'
import { loadCart } from '../data/cart.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';


/*new Promise( (resolve) => {
    loadProducts( () => {
        resolve();
    })
}).then( () => {
        renderOrderSummary();
        renderPaymentSummary();
    }   
)*/
   


Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
        resolve();
        });
    })
]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});


/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1');
  });

}).then((value) => {
  console.log(value);

  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/

/*loadProducts( () => {
    renderOrderSummary();
    renderPaymentSummary();
})*/

function getMenu() {
    return fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
      .then(response => response.json())
      .then(data => {
        const menuList = document.querySelector('#menu ul');
        data.forEach(item => {
          const listItem = document.createElement('li');
          listItem.innerText = `${item.name} - $${item.price}`;
          menuList.appendChild(listItem);
        });
      })
      .catch(error => console.log(error));
  }
  
  
  function takeOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const order = {
          burgers: [
            {name: 'Cheeseburger', price: 8.99},
            {name: 'Bacon Burger', price: 9.99},
            {name: 'Mushroom Swiss Burger', price: 10.99}
          ]
        };
        resolve(order);
      }, 2500);
    });
  }
  
  
  function orderPrep() {
    return new Promise(resolve => {
      setTimeout(() => {
        const orderStatus = {order_status: true, paid: false};
        resolve(orderStatus);
      }, 1500);
    });
  }
  
  function thankyouFnc() {
    alert('Thank you for eating with us today!');
  }
  
  
  async function placeOrder() {
    try {
      await getMenu();
      const order = await takeOrder();
      console.log(`Order received: ${JSON.stringify(order)}`);
      const orderStatus = await orderPrep();
      console.log(`Order prepared: ${JSON.stringify(orderStatus)}`);
      const paymentStatus = await payOrder();
      console.log(`Order paid: ${JSON.stringify(paymentStatus)}`);
      thankyouFnc();
    } catch (error) {
      console.log(error);
    }
  }
  
 
  const orderBtn = document.querySelector('#order-btn');
  orderBtn.addEventListener('click', placeOrder);
  
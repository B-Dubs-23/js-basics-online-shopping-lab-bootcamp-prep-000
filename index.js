var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart
}

function addToCart(item){
  var price = Math.floor(Math.random() * (100 - 0)) + 0;
  var obj = {item: price};
  cart.push(obj);
  console.log(`${item} has been added to your cart.`)
  return cart
  }


  function viewCart(){
  var cartKeys = Object.keys(cart)
  if(cart.length == 0) {
    console.log('Your shopping cart is empty.')
  }
  else {
    var text = 'In your cart, you have'
    for(var i=0; i<cart.length; i++){
      var item = Object.keys(cart[i])
      if(i<cart.length-1) {
        text += ` ${item[0]} at $${cart[i][item[0]]},`
      }
      else {
        text += ` ${item[0]} at $${cart[i][item[0]]}.`
      }
    }
    console.log(text)
  }
}

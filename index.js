var cart = [];

function setCart(newCart) {
  cart = [];
}

function getCart(){
  return cart
}

function addToCart(item){
  var obj = {[item]: Math.floor(Math.random()*100)};
  cart.push(obj);
  console.log(item + " has been added to your cart.");
  return getCart();
};

/*
function viewCart(){
  if(cart.length < 1){
    console.log("Your shopping cart is empty.");
  } else {
    console.log("In your cart, you have");
    for(var i = 0; i<cart.length;i++){
      var itemNames = Object.keys(cart[i]);
        console.log(itemNames + " at $" + Object.values(cart[i]));
        }
      }
    }
*/

    function viewCart(){
      if(cart.length < 1){
        console.log("Your shopping cart is empty.");
      } else {
        var info = "In your cart, you have ";
          for (var i = 0; i < cart.length; i++) {
            for (var item in cart[i]) {
              info += item + " at $" + cart[i][item] + ", "
            }
          }
        var clean = info.slice(0, info.length-2)
        }

        console.log(clean + ".");
      }


function removeFromCart(item){
  for (var i = 0; i<cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
        cart.splice(i, 1);
        break
        }
      }
      console.log('That item is not in your cart.');
      getCart();
    }


  /*
  for(var i = 0; i<cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i, 1);
      getCart();
      }
    }
    console.log("That item is not in your cart.")
  }
*/

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function placeOrder(cardNumber){
  if(cardNumber == null){
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
  setCart();
}

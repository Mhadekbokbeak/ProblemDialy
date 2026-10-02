const couponList = {
          SAVE100:{
                    type:"fixed",
                    value:100,
                    minSpend:500,
                    expired:false,
          },
          DISC10:{
                    type:"percent",
                    value:10,
                    minSpend:200,
                    expired:false,
          }
};

let cartTotal = 600
let couponCode = "SAVE100";


function calculateDiscount(cartTotal,couponCode,couponList) {
          const clenCode = couponCode ? couponCode.trim().toUpperCase() : "";
          let coupon = couponList[clenCode]
          console .log(coupon)

          if (coupon && coupon.expired !== true && coupon.minSpend <= cartTotal){
                    if (coupon.type === 'fixed'){
                             cartTotal = cartTotal - coupon.value 
                    } else if (coupon.type == 'percent') {
                              let discount = (cartTotal * coupon.value) / 100
                              cartTotal = cartTotal - discount
                    } 
          } else {
                    return "error: 'Invalid coupon'"
          }

          // When CartTotal with -
          if (cartTotal < 0 ) {
                    return cartTotal = 0
          } else {
                    return cartTotal
          }

          
}

console.log(calculateDiscount(cartTotal,couponCode,couponList))
const cards = document.querySelectorAll('.card');
const list = document.getElementById('list');
let totalPrice = 0;
let discount = 0;
let totalTaka = 0;

for (const card of cards) {
  const tittle = card.querySelector('.card-title').innerText;

  card.addEventListener('click', function() {
    const li = document.createElement('li');
    li.innerText = tittle;
    list.appendChild(li);
    

    const value = card.querySelector('.taka').innerText;
    
        

        totalPrice = parseFloat(totalPrice) + parseFloat(value);
        
        document.getElementById('total-price').innerText = totalPrice.toFixed(2); 

        


      
        if( totalPrice.toFixed(2) != 0  ){
            document.getElementById('purchase-btn').disabled = false;
        }
        console.log(totalPrice)

        if( totalPrice.toFixed(2) >= 200  ){
            document.getElementById('apply-btn').disabled = false;
        }



    // discount-section here---

        document.getElementById('coupon-code').addEventListener('keyup',function(event){
            const text = event.target.value;
            const applyButton = document.getElementById('apply-btn');
            if(text ==='SELL200' ){

                // discount 

                document.getElementById('apply-btn').addEventListener('click',function(){

                    const discount = totalPrice.toFixed(2) * 0.2;
                    document.getElementById('discount-place').innerText = discount.toFixed(2);
                    

                    const totalTaka = totalPrice - discount;
                    document.getElementById('total').innerText = totalTaka.toFixed(2);;
                }) 
            }

        })

  });

}




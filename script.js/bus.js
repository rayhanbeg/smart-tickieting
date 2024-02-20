// function buttonId(){
//     hideElementId('header');
//     hideElementId('offer-section');
// }






// function selectBgButton(button){
//     var buttons = document.querySelectorAll('.btn');
//     buttons.forEach(function(btn){
//         btn.classList.add('selected')
//     });
//     button.classList.remove('selected')
// }

// Ticket select-------

let totalCost = 0;
let grandPrice = 0;



function selectButton(){


}







const allBtn = document.getElementsByClassName('btn');
let count = 0;
let left = 0;

for(const btn of allBtn){
    btn.addEventListener("click", function(e){
        count = count + 1;
        document.getElementById('seat-count').innerText = count;
        console.log(count);



        const button = event.target;
        const buttonText = button.innerText;
    
        totalCost += 550;
        console.log('Total cost', totalCost);
    
        // update cost---
        document.getElementById('total-price').innerText = totalCost;



    
        var buttons = button.parentElement.querySelectorAll('.btn');
        buttons.forEach(function(btn) {
        //   btn.classList.remove('bg-green-400');
        });
        button.classList.add('bg-green-400');




        left = 40 - count;
        // const seatLeft = document.getElementsByClassName('.btn')
        document.getElementById('left').innerText = left;
        console.log(left);


        
          if(totalCost > 2200){
        console.log('You cannot select More than 4 tickets',);
        alert("You cannot select More than 4 tickets")
        totalCost -= 550;
        return;
    }


        // const placeName = e.target.parentNode.childNodes[1].innerText;
        const placeName = e.target.innerText;


        // const price = e.target.parentNode.childNodes[1].innerText;
        const selectedContainer = document.getElementById('selected-place-container');
        const li = document.createElement("li");
        const p = document.createElement("p");
        const economy = document.createElement('p') 
        economy.innerText = 'Economy'
        const price = document.createElement('p')
        price.innerText = '550'
        // p2.innerText = price
        const p2 = document.createElement("p");
        p.innerText = placeName


        // li.appendChild(p)
        li.appendChild(p)
        li.appendChild(economy)
        li.appendChild(price)

        selectedContainer.appendChild(li)
        // console.log(grandTotal);

        // setInnerText('seat-count', count);







    });
}



        // coupon section------

 
        const grand = event.target;
        const grandText = grand.innerText;

        grandPrice += 550;
        console.log('grandCost', grandPrice);
    
        // update cost---
        document.getElementById('total-price-discount').innerText = grandPrice;

        function couponButton(){
            const couponCode = document.getElementById('coupon-code').value;
            if(couponCode === 'NEW15'){
                totalCost *= 0.85;
                console.log(couponCode);

            }
            else if( couponCode === 'COUPLE20'){
                totalCost *= 0.8;
                
            }
        }











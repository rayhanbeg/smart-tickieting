
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
        const totalCostConvert = parseInt(totalCost);
        console.log('Total cost', totalCostConvert);
    
        // update cost---
        document.getElementById('total-price').innerText = totalCostConvert;



    
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



        
        updateGrandTotal();
        checkInputs();

    });
}



        // coupon section------




        function updateGrandTotal(control) {
            const previousTotal = document.getElementById("total-price").innerText;
            const convertedTotal = parseInt(previousTotal);
            document.getElementById("total-price-discount").innerText = convertedTotal;
                   console.log('grand-total', convertedTotal);
            const couponCode = document.getElementById("coupon-code").value;
            let discount = 0;
            if (control) {
              if (couponCode == "NEW15") {
                discount = convertedTotal * 0.15;
              
              } else if (couponCode === "COUPLE20") {
                discount = convertedTotal * 0.20;
                
             } else {
                alert("Invalid Coupon Code No Discount");
                return;
              }

              document.getElementById("total-price-discount").innerText =
              convertedTotal - discount;

            } else {
              document.getElementById("total-price-discount").innerText = convertedTotal;
            }
          }







 // Get the input elements
 const nameInput = document.getElementById('nameInput');
 const numberInput = document.getElementById('numberInput')
 const emailInput = document.getElementById('emailInput');
 const nextButton = document.getElementById('nextButton');

 // Function to check if the input fields are filled
 function checkInputs() {
   const nameValue = nameInput.value.trim();
   const emailValue = emailInput.value.trim();
   const numberValue = numberInput.value.trim();

   // Enable the Next button only if name and email are not empty
   if (nameValue !== '' && emailValue !== '' && numberValue !== '') {
     nextButton.disabled = false;
   }
    else {
     nextButton.disabled = true;
   }
 }

 // Call the function whenever there's a change in the input fields
 nameInput.addEventListener('input', checkInputs);
 numberInput.addEventListener('input', checkInputs);    
 emailInput.addEventListener('input', checkInputs);    


 
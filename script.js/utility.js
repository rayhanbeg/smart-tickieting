function hideElementId(elementId){
   const element = document.getElementById(elementId);
   element.classList.add('hidden')
}


function showElementId(elementId){
   const element = document.getElementById(elementId)
   element.classList.add('visible')
}

function setInnerText(id, value) {
   document.getElementById(id).innerText = value;
 }





const mainDiv = document.getElementById('create-a-package');
const residentialButton = document.getElementById('residential-button');
const commercialButton = document.getElementById('commercial-button');
const xSmallButton = document.getElementById('x-small-button');
const smallButton = document.getElementById('small-button');
const mediumButton = document.getElementById('medium-button');
const largeButton = document.getElementById('large-button');
const xlButton = document.getElementById('xl-button');
const chemicalButton = document.getElementById('chemical-button');
const standardButton = document.getElementById('standard-button')
const premiumButton = document.getElementById('premium-button');
const poolType = document.querySelectorAll(".pool-type");
const poolSize = document.querySelectorAll(".pool-size");
const poolServices = document.querySelectorAll(".pool-services");
const userPrice = document.getElementById('userPrice');

// Set an event handler on the document so that when
// any element is clicked, the event will bubble up to it
document.addEventListener("click", function(evt){
  // Check to see if it was a button that was clicked
  if(evt.target.classList.contains("pool-type")){
    // Loop over all the buttons & remove the active class
    poolType.forEach(function(button){
      button.classList.remove("active");
      button.classList.remove("active-pool-type");
    });
    // Make the clicked button have the active class
    evt.target.classList.add("active");
    evt.target.classList.add("active-pool-type");
  }
});
document.addEventListener("click", function(evt){
  // Check to see if it was a button that was clicked
  if(evt.target.classList.contains("pool-size")){
    // Loop over all the buttons & remove the active class
    poolSize.forEach(function(button){
      button.classList.remove("active");
      button.classList.remove("active-pool-size");
    });
    // Make the clicked button have the active class
    evt.target.classList.add("active");
    evt.target.classList.add("active-pool-size");
  }
});
document.addEventListener("click", function(evt){
  // Check to see if it was a button that was clicked
  if(evt.target.classList.contains("pool-services")){
    // Loop over all the buttons & remove the active class
    poolServices.forEach(function(button){
      button.classList.remove("active");
      button.classList.remove("active-pool-services");
    });
    // Make the clicked button have the active class
    evt.target.classList.add("active");
    evt.target.classList.add("active-pool-services");
  }
});



const newfunction = () => {
    document.querySelectorAll('.card')[0].style.visibility = 'visible';
    document.querySelectorAll('.card')[1].style.visibility = 'visible';
    document.querySelectorAll('.card')[2].style.visibility = 'visible';
    document.querySelectorAll('.card')[3].style.visibility = 'visible';
    document.querySelectorAll('.card')[4].style.visibility = 'visible';
};
const nextfunction = () => {
    document.querySelectorAll('.card')[5].style.visibility = 'visible';
    document.querySelectorAll('.card')[6].style.visibility = 'visible';
    document.querySelectorAll('.card')[7].style.visibility = 'visible';
}
const secondfunction = () => {
  document.getElementById('submit-button').style.visibility = 'visible';
}
const submitfunction = () => {
  if (
    residentialButton.classList.contains('active-pool-type') && 
    xSmallButton.classList.contains('active-pool-size') && 
    chemicalButton.classList.contains('active-pool-services')) {
      userPrice.innerHTML = '$95'
  } else if (
    residentialButton.classList.contains('active-pool-type') && 
    xSmallButton.classList.contains('active-pool-size') && 
    standardButton.classList.contains('active-pool-services')) {
      userPrice.innerHTML = '$125'
  } else if (
    residentialButton.classList.contains('active-pool-type') && 
    xSmallButton.classList.contains('active-pool-size') && 
    premiumButton.classList.contains('active-pool-services')) {
      userPrice.innerHTML = '$145'
  } else if (
    residentialButton.classList.contains('active-pool-type') && 
    smallButton.classList.contains('active-pool-size') && 
    chemicalButton.classList.contains('active-pool-services')) {
      userPrice.innerHTML = '$105'
  } else if (
    residentialButton.classList.contains('active-pool-type') && 
    smallButton.classList.contains('active-pool-size') && 
    standardButton.classList.contains('active-pool-services')) {
      userPrice.innerHTML = '$135'
  } else if (
    residentialButton.classList.contains('active-pool-type') && 
    smallButton.classList.contains('active-pool-size') && 
    premiumButton.classList.contains('active-pool-services')) {
      userPrice.innerHTML = '$155'
  } else if (
    residentialButton.classList.contains('active-pool-type') && 
    mediumButton.classList.contains('active-pool-size') && 
    chemicalButton.classList.contains('active-pool-services')) {
      userPrice.innerHTML = '$125'
  } else if (
    residentialButton.classList.contains('active-pool-type') && 
    mediumButton.classList.contains('active-pool-size') && 
    standardButton.classList.contains('active-pool-services')) {
      userPrice.innerHTML = '$155'
  } else if (
    residentialButton.classList.contains('active-pool-type') && 
    mediumButton.classList.contains('active-pool-size') && 
    premiumButton.classList.contains('active-pool-services')) {
      userPrice.innerHTML = '$175'
  } else if (
    residentialButton.classList.contains('active-pool-type') && 
    largeButton.classList.contains('active-pool-size') && 
    chemicalButton.classList.contains('active-pool-services')) {
      userPrice.innerHTML = '$145'
  } else if (
    residentialButton.classList.contains('active-pool-type') && 
    largeButton.classList.contains('active-pool-size') && 
    standardButton.classList.contains('active-pool-services')) {
      userPrice.innerHTML = '$175'
  } else if (
    residentialButton.classList.contains('active-pool-type') && 
    largeButton.classList.contains('active-pool-size') && 
    premiumButton.classList.contains('active-pool-services')) {
      userPrice.innerHTML = '$205'
  } else if (
    residentialButton.classList.contains('active-pool-type') && 
    xlButton.classList.contains('active-pool-size') && 
    chemicalButton.classList.contains('active-pool-services')) {
      userPrice.innerHTML = '$165'
  } else if (
    residentialButton.classList.contains('active-pool-type') && 
    xlButton.classList.contains('active-pool-size') && 
    standardButton.classList.contains('active-pool-services')) {
      userPrice.innerHTML = '$195'
  } else if (
    residentialButton.classList.contains('active-pool-type') && 
    xlButton.classList.contains('active-pool-size') && 
    premiumButton.classList.contains('active-pool-services')) {
      userPrice.innerHTML = '$225'
  }
}


function sendUserInfo() {
  let params = {
    firstName: document.getElementById('user-first-name').value, 
    lastName: document.getElementById('user-last-name').value,
    email: document.getElementById('user-email').value,
    phoneNumber: document.getElementById('user-phone-number').value,
    price: document.getElementById('userPrice').innerText

  }
  
const serviceId = 'service_9unwrqa';
const emailTemplateId = 'template_svjzg3l';

emailjs.send(serviceId,emailTemplateId, params)
.then (
  res => {
    document.getElementById('user-first-name').value = '';
    document.getElementById('user-last-name').value = '';
    document.getElementById('user-email').value = '';
    document.getElementById('user-phone-number').value = '';
    console.log(res);
    alert('your message has been sent successfully')
  }
)
.catch((err) => console.log(err));
}

const test = () => {
  const al = () => {
    const alerts = document.createElement('div');
    let text = document.createTextNode('hello');
    alerts.appendChild(text);
  } 
  alert(al);

}




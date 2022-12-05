// Create Variables for the project

// Hide the 'Thank you' form until the submit button is clicked

// grab all of the values from the buttons

// listen for clicks on the buttons

// output the clicked value into the thanks form
const mainForm = document.querySelector('.main-form');
const thanks = document.querySelector('.thanks');
const buttons = document.querySelectorAll('.choice-button');
const submit = document.querySelector('.submit-button');
let selectedValue = document.querySelector('.selected-value');
const empty = document.querySelector('.empty');
const body = document.querySelector('body');
const attribution = document.querySelector('.attribution');
thanks.style.display = 'none';
let value;

buttons.forEach(function(i) {
  i.addEventListener('click', function() {
    value = this.value;
  })
})


submit.addEventListener('click', function(i) {
  mainForm.remove()
  
  attribution.remove();
  
  selectedValue.innerText = value;
  
  thanks.style.display = 'flex';
  document.body.append(attribution);
  
  
})



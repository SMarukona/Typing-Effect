//Getting all elements with class typing-effect
const elements = document.querySelectorAll('.typing-effect');

//Determine typing speed which you can chnage but mannually you have to change the data-delay value
const typingSpeed = 15;

//Cursor symbol, you can change it to any symbol
const cursor = '|';

//Getting last element
const lastElement = document.querySelector('#lastElement');

//Adding cursor to last element
lastElement.classList.add('cursor');

//Definisng function to select each element and type
function typeElement(index) {

  //Getting current element with index
  const element = elements[index];

  //Getting data-delay value
  const delay = element.getAttribute('data-delay');

  //Converting data-delay value to integer that base 10
  const delayTime = parseInt(delay, 10);

  //Getting text content of current element put it in a variable
  const text = element.textContent;

  //Clearing text content of current element
  element.textContent = '';

  //Defining variable to keep track of number of characters typed
  let i = 0;

  //Typing function for current element
  function type() {
    if (document.querySelector('#stop-button.clicked')) { // check if stop button has been clicked
      element.textContent = text; // display full text without cursor
    } else if (i < text.length) {
      //If i is less than number of characters in text, add 1 to i, and end adding cursor to element
      element.textContent = text.slice(0, ++i) + cursor;

      //Setting timeout for each character with typing speed as timeout delay
      setTimeout(type, typingSpeed);
    } else {
      //If i is equal to number of characters in text, remove cursor from element
      if (index === elements.length - 1) {
        //If current element is last element, remove cursor
        element.textContent = text.slice(0, ++i) + cursor;
      } else {
        //If current element is not last element, remove cursor
        element.textContent = text.slice(0, i);
      }
    }
  }
  //Calling type function for each element with delay time for window load
  window.addEventListener('load', () => {
    setTimeout(() => {
      type();
    }, delayTime); 
  });

  // Grab the stop button
  const stopButton = document.querySelector('#stop-button');

  // Add click event listener to stop button
  stopButton.addEventListener('click', () => {
    stopButton.classList.add('clicked'); // add clicked class
    //remove window addEventListener
    window.removeEventListener('load',type())}
    );
  };

// calling a elementType function for each element
for (let i = 0; i < elements.length; i++) {
  typeElement(i);
}
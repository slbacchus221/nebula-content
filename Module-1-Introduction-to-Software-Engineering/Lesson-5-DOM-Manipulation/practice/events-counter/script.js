// COUNTER EXERCISE

// Select the body element from index.html

// Set an attribute of 'style' to the body tag and add a background color of anything other than white

/* -------------------------------------------------------------------------- */

// Create an h1 element

// Append a new h1 element to the body element as a child

// Add text to the h1 element 

// Assign the background color of this element to something unique

// Set a new style attribute to the h1 element

// Add font size to the h1Element

// Set the default text to the number zero

/* -------------------------------------------------------------------------- */

// Create a button element to increment the h1 text

// Append the button element to the body element

// Add text to the boxButton

// Add a class attribute to boxButton

/* -------------------------------------------------------------------------- */

// Create another button element to decrement the h1 text

// Add the button element to the body element

// Add text to the button element

// Add a class attribute of style to the button element

/* -------------------------------------------------------------------------- */
// ADD BUTTON FUNcTION
// Create functionality that, when you click this button it increases the h1 value

// Create functionality that, when you click this button it decreases the h1 value


/* -------------------------------------------------------------------------- */
// DELETE BUTTON FUNCTION 


// Select the body element from index.html
const body = document.querySelector('body');

// Set an attribute of 'style' to the body tag and add a background color of anything other than white
body.style.backgroundColor = 'pink';

/* -------------------------------------------------------------------------- */

// Create an h1 element
const h1Element = document.createElement('h1');

// Append a new h1 element to the body element as a child
body.appendChild(h1Element);

// Add text to the h1 element 
h1Element.textContent = '0';

// Assign the background color of this element to something unique
h1Element.style.backgroundColor = 'green';

// Set a new style attribute to the h1 element
h1Element.style.fontSize = '30px'; // Add font size to the h1Element

// Set the default text to the number zero

/* -------------------------------------------------------------------------- */

// Create a button element to increment the h1 text
const incrementButton = document.createElement('button');

// Append the button element to the body element
body.appendChild(incrementButton);

// Add text to the incrementButton
incrementButton.textContent = 'Increment';

// Add a class attribute to incrementButton
incrementButton.classList.add('boxButton');

// Add event listener to increment the h1 text when the button is clicked
incrementButton.addEventListener('click', function() {
    let currentValue = parseInt(h1Element.textContent);
    h1Element.textContent = currentValue + 1;
});

/* -------------------------------------------------------------------------- */

// Create another button element to decrement the h1 text
const decrementButton = document.createElement('button');

// Append the button element to the body element
body.appendChild(decrementButton);

// Add text to the decrementButton
decrementButton.textContent = 'Decrement';

// Add a class attribute of style to the decrementButton
decrementButton.classList.add('boxButton');

// Add event listener to decrement the h1 text when the button is clicked
decrementButton.addEventListener('click', function() {
    let currentValue = parseInt(h1Element.textContent);
    h1Element.textContent = currentValue - 1;
});

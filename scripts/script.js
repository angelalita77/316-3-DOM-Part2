// Part 1 ----------------------------------------------------------------
// Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector('main');  //<main></main>
console.log(mainEl);

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = 'var(--main-bg)';
// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
const h1 = document.createElement('h1');
// Review: 
// mainEl.innerHTML = '<h1>DOM Manipulation</h>'
console.log(h1);
mainEl.appendChild(h1).textContent = "DOM Manipulation";
// Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");
console.log(mainEl);
// Hint: Use the Element.classList API.

// Part 2 ----------------------------------------------
// Part 2: Creating a Menu Bar
// Next, create a blank menu bar that we can use to later add some interactivity to the page:
// 1) Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.getElementById(`top-menu`);
// 2) Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = `100%`;
console.log(topMenuEl);
// 3) Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;
// 4) Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around');
console.log(topMenuEl);

// Part 3 --------------------------------------------------
// Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];

// Iterate over the entire menuLinks array and for each "link" object:
for (let link of menuLinks){
    // console.log(link) // shows that it iterates each object in the array.
    // Create an <a> element.
    let menuButton = document.createElement('a');
    console.log(menuButton);
    // On the new element, add an href attribute with its value set to the href property of the "link" object.
    menuButton.setAttribute("href", link.href);
    // console.log(menuButton);
    // Set the new element's content to the value of the text property of the "link" object.
    menuButton.textContent = link.text;

    // console.log(menuButton)
    // Append the new element to the topMenuEl element.
  
    topMenuEl.appendChild(menuButton);

}






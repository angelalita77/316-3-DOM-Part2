// Part 1: Getting Started --------------------------------------
// Step 1 
// Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");  //<main></main>
//console.log(mainEl);

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = 'var(--main-bg)';
// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
const h1 = document.createElement('h1');
// Review: 
// mainEl.innerHTML = '<h1>DOM Manipulation</h>'
//console.log(h1);
mainEl.appendChild(h1).textContent = "DOM Manipulation";
// Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");
//console.log(mainEl);
// Hint: Use the Element.classList API.


// Step 2: Creating a Menu Bar
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
//console.log(topMenuEl);

// Step 3 
// Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];


// Iterate over the entire menuLinks array and for each "link" object:
for (let link of menuLinks) {
  // console.log(link) // shows that it iterates each object in the array.
  // Create an <a> element.
  let menuButton = document.createElement('a');
  // console.log(menuButton); 
  // On the new element, add an href attribute with its value set to the href property of the "link" object.
  menuButton.setAttribute("href", link.href);
  console.log(menuButton);
  // Set the new element's content to the value of the text property of the "link" object.
  menuButton.textContent = link.text;

  //console.log(menuButton)
  // Append the new element to the topMenuEl element.

  topMenuEl.appendChild(menuButton);

}


// Part 3: Creating the SubMenu -------------------------------------------------
// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let subMenuEl = document.getElementById('sub-menu');
console.log(subMenuEl);
// Set the height subMenuEl element to be "100%".
subMenuEl.style.height = `100%`;
//console.log(subMenuEl);
// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around');
// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';
// Set the CSS top property of subMenuEl to the value of 0.

// Part 4: Adding Menu Interaction
let topMenuLinks = document.getElementsByTagName('a');
console.log(topMenuLinks);

topMenuEl.addEventListener('click', topMenuClick);


function topMenuClick(e) {
  e.preventDefault();

  if (e.target.tagName !== 'A') {
    return;
  }

  e.target.classList.add('active');

  for (let topLink of topMenuLinks) {

    if (topLink !== e.target) {
      topLink.classList.remove('active');

    } else {
      console.log(e.target.innerText)

      let obj = menuLinks.find(item => item.text === e.target.innerText.toLowerCase())
      console.log("object", obj)

      // Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
      // If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
      if (obj?.subLinks) {
        subMenuEl.style.top = subMenuEl.style.top === "0px" ? "100%": "0px";
      } 
      
    }


  }
  
  // Otherwise, set the CSS top property of subMenuEl to 0.
  // Hint: Caching the "link" object will come in handy for passing its subLinks array later.

}










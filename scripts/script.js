// Part 1: Getting Started --------------------------------------
// Step 1 
// Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");  
//console.log(mainEl); //<main></main>

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


// Step 2: Creating a Menu Bar - Top Menu Bar
// Next, create a blank menu bar that we can use to later add some interactivity to the page:
// 1) Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.getElementById(`top-menu`);
// 2) Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = `100%`;
// console.log(topMenuEl);
// 3) Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;
// 4) Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around');
//console.log(topMenuEl);


// ------------------------  Part 4: Adding Menu Interaction ------------------------
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


// Iterate over the entire menuLinks array and for each "link" object (in the first layer of the array):
for (let link of menuLinks) {
  //console.log(link) // shows that it iterates each object in the array.
  // Create an <a> element.
  let menuButton = document.createElement('a');
  // console.log(menuButton); 
  // On the new element, add an href attribute with its value set to the href property of the "link" object.
  menuButton.setAttribute("href", link.href);
  //console.log(menuButton);
  // Set the new element's content to the value of the text property of the "link" object.
  menuButton.textContent = link.text;
  //console.log(menuButton)
  // Append the new element to the topMenuEl element.
  topMenuEl.appendChild(menuButton);

}

// topMenuEl stores the <nav> and child <a> elements
// console.log(topMenuEl);
//<nav id="top-menu" 
// class="flex-around" 
// style="height: 100%; 
// background-color: var(--top-menu-bg);"
// >
// <a href="/about">about</a>
// <a href="#">catalog</a>
// <a href="#">orders</a>
// <a href="#">account</a>
// </nav>


// -----------------------  Part 3: Creating the SubMenu ---------------------------------
// Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let subMenuEl = document.getElementById('sub-menu');
//console.log(subMenuEl);
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

// ------------------------  Part 4: Adding Menu Interaction ------------------------
// Get the <a> elements and save them in topMenuLinks as an array of length 4
let topMenuLinks = document.getElementsByTagName('a');
// console.log(topMenuLinks); // [a,a,a,a]

//event listener initated by a mouse click and calls topMenuClick()
topMenuEl.addEventListener('click', topMenuClick);




/********************* Function Definitions ************************/

//topMenuClick function will pass the event object which will do the following:
function topMenuClick(e) {
  e.preventDefault();

  // If click on an area that is not an <a> tag name, then exit function
  if (e.target.tagName !== 'A') {
    console.log(e.target.tagName);
    return;
  }

  // Add "class = active" attribute to the <a> link clicked
  e.target.classList.add('active');

  // lopp each <a> element item in the topMenuLinks array 
  // save each <a> in topLink in each loop
  for (let topLink of topMenuLinks) {
    
    // check if the topLink is not the same as the active one pressed before
    // if so, remove the class "active" from the <a> clicked
    if (topLink !== e.target) {
      topLink.classList.remove('active');

    } else {
      // log to make sure the e.target is the one clicked (Noted: it's captialized)
      //console.log(e.target.innerText)
      //search through the menuLinks array to find the object that has the matching
      //text of the link clicked. 
      // e.target.innerText has to be converted to lowercase to match the text in e.target.innerText)
      let obj = menuLinks.find(item => item.text === e.target.innerText.toLowerCase())
      console.log("object", obj)

      //------------------------  Part 5: Adding SubMenu Interaction ------------------------
      // Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
      // If the clicked <a> element's "link" object within menuLinks has a subLinks property,  (all do, except for the "link" object for ABOUT)
      if (obj?.subLinks) { //
        // set the CSS top property of subMenuEl to 100%.
        // Otherwise, set the CSS top property of subMenuEl to 0.
        subMenuEl.style.top = subMenuEl.style.top === "0px" ? "100%" : "0px";

        //pass the obj.subLinks[] array in this function to build the submenu
        let subMenuLinks = buildSubmenu(obj.subLinks);
        //console.log(subMenuLinks);

        // Attach a delegated 'click' event listener to subMenuEl.
        // Pass the arguements e and topLink to subMenuClick function
        subMenuEl.addEventListener('click', (e) => ( subMenuClick(e, topLink) ));
      } else {
        // The ABOUT link is clicked, <h1>About</h1> should be displayed.
        // subMenu top is set to 0px so the sub menu go back behind top menu
        // An <h1></h1> child tag is created in <main> block with the innerText content of "about" <a>
        subMenuEl.style.top = "0px";
        mainEl.appendChild(h1).textContent = e.target.innerText;
      }

    }
  }

}



//-------------------------<Edit SubmenuClick Here>-------------------------
//subMenuClick function will pass the event object which will do the following:
function subMenuClick(e, topLink) {
  // The first line of code of the event listener function should 
  // call the event object's preventDefault() method.
  e.preventDefault();

  // The second line of code within the function should immediately 
  // return if the element clicked was not an <a> element.
  if (e.target.tagName !== 'A') {
    return;
  }
  // Log the content of the <a> to verify the handler is working.
  //console.log(e.target.innerHTML);

  // Next, the event listener should set the CSS top property of subMenuEl to 0.
  subMenuEl.style.top = '0';
  

  // Remove the active class from each <a> element in topMenuLinks.
  if (topLink !== e.target) {
    topLink.classList.remove('active')
  } 

  console.log(e);
// Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
  mainEl.appendChild(h1).textContent = e.target.innerText;

}


  /***************************** Helper Functions ********************************/
  // Create a helper function called buildSubmenu that does the following:
  // - Take the subLinks[] array as argument
  // - Clear the subMenuEl array
  // - Iterate through the subMenuEl[] array, 
  //   create <a> tags for each object.text and object.href value
  function buildSubmenu(subLinksArray) {
    // Clear the current contents of subMenuEl.
    subMenuEl.innerHTML = null;

    for (let link of subLinksArray) {
      // Iterate over the subLinks array, passed as an argument, and for each "link" object:
      //console.log(link) // shows that it iterates each object in the array.
      // Create an <a> element.
      let subMenuButton = document.createElement('a');
      //console.log(subMenuButton); 
      // // Add an href attribute to the <a>, with the value set by the href property of the "link" object.
      subMenuButton.setAttribute("href", link.href);
      // Set the new element's content to the value of the text property of the "link" object.
      subMenuButton.textContent = link.text;
      //console.log(subMenuButton);
      // Append the new element to the subMenuEl.
      subMenuEl.appendChild(subMenuButton);
    }
    //console.log(subMenuEl);
    return subMenuEl;

  }











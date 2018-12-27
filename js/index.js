// using this file is optional
// you can also load the code snippets in using your browser's console
//Demonstrate Listening to Events on a DOM Node with addEventListener()
const main=documnet.getElementById('main');
main.addEventListener('click',function(event) 
{
  alert('I was clicked!');
});
//Demonstrate Triggering Events Listeners on DOM Nodes
const input = document.querySelector('input');
 
input.addEventListener('keydown', function(e) {
  console.log(e.key);
});
//Demonstrate Preventing the Default Behavior for DOM Nodes
//.preventDefault() function or method is used for this
  const input1 = document.querySelector('input')
 
input1.addEventListener('keydown', function(e) {
  if (e.key === "g") {
    return e.preventDefault()
  } else {
    console.log(e.key)
  }
});
//------Explain the Difference Between Bubbling and Capturing Events
let divs = document.querySelectorAll('div');
 
function bubble(e) {
  // remember all of those fancy DOM node properties?
  // we're making use of them to get the number
  // in each div here!
 
  // if `this` is a bit confusing, don't worry —
  // for now, know that it refers to the div that
  // is triggering the current event handler.
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}
 
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
//-----
divs = document.querySelectorAll('div');
 
function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}
 
for (let i = 0; i < divs.length; i++) {
  // set the third argument to `true`!
  divs[i].addEventListener('click', capture, true);
}
//Demonstrate Stopping Propagated Behaviors with stopPropagation()
const divs1 = document.querySelectorAll('div');
 
function bubble(e) {
  // stop! that! propagation!
  e.stopPropagation();
 
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}
 
for (let i = 0; i < divs.length; i++) {
  divs1[i].addEventListener('click', bubble);
}

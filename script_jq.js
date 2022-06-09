$('#main').css({
    color: 'red',
    border: '1px solid blue'
});

let listItemS = $('li');
console.log(listItemS);


$ (document).ready(function () {
    console.log ('JQuery is ready!');
});


const idElem = $ ('#header'); // specify the element identifying 'header'
console.log('idElem', idElem);

const liElems = $ ('li'); // Select all menu items on the page
console.log('liElems', liElems);

const ulLiElems = $ ('ul li'); // Select all of the menu items in unordered lists
console.log('ulLiElems', ulLiElems);

const classElem = $ ('.person'); // select all elements of class 'person'
console.log('classElem', classElem);



// Create a jQuery object from the DOM element
const domChild0Elem = $ (document.body.children [0]);
console.log('domChild0Elem', domChild0Elem);

// Create a jQuery object from a list of DOM elements
const winDocElem = $ ([window, document]);
console.log('winDocElem', winDocElem);

// Select the DOM element context
// msv all li in elem
var firstBodyChild = document.body.children [0];
const liInfirstBodyChild = $ ('li', firstBodyChild);
console.log('liInfirstBodyChild',liInfirstBodyChild);

// Make the selection within a previous selection
// msv all A inside P
var paragraph = $ ('p');
const aInsidePElem = $ ('a', paragraph);
console.log('aInsidePElem', aInsidePElem);

if ($ ('#main').length) {
    console.log('element with ID main is on the page');
}


var listItems = $ ('li');
var rawListItem = listItems [0]; // or listItems.get (0)
rawListItem.innerHTML = '<b>!!!!!!!!</b>';

var listItems = $ ('li');
var secondListItem = listItems.eq (1);
secondListItem.remove ();


console.log('check IS', $ ('li') .eq (0) .is ('.special'));


// $ ('li') .html ('New LI HTML');

$('li').html (function (index, oldHtml) {
    return oldHtml + ` (added to ${index}-st LI on page)`;
});


$ ('li') .each (function (index, elem) {
    // this: the current raw DOM element
    // index: the directory of the current object in the selection
    // elem: the current raw DOM element (like this)
    // $ (elem) .prepend ('<b>' + index + ': </b>');
    $ (this) .prepend ('<b>' + index + ': </b>');
});


$ ('li').click (function () {
    $ (this) .addClass ('clicked');
})
.find ('span')
.attr ('title', 'Hover over me');


// The selection row contains only items of 'special'
var special = listItems.filter ('.special');
console.log('special', special);

// The selection row contains only non-special elements
var notSpecial = listItems.not ('.special');
console.log('notSpecial', notSpecial);

// The selection row contains only elements that include span
var hasSpans = listItems.has ('span');
console.log('hasSpans', hasSpans);


// Choose The first menu item on the page
var listItem = $ ('li') .last(); // Also: .last ()
listItem.css({color: 'blue'});

// Choose the siblings of the menu item
var siblings = listItem.siblings ();
siblings.css({color: 'green'});

// Choose the next brother for the menu item
var nextSibling = listItem.prev(); // Also: .prev ()
nextSibling.css({color: 'red'});

// Choose the parent of the menu item
var list = listItem.parent ();
list.css({border: 'solid 1px blue'});

// Select menu items that are directly from the list
var listItemsС = list.children ();
listItemsС.css({color: 'yellow'});

// Select all menu items within the list, including sub-items
var allListItems = list.find ('li');
allListItems.css({'text-decoration': 'underline'});

// Choose all ancestors of the "module" menu item
var modules = listItem.parents ('.module');
modules.css({'color': 'magenta'});

// Choose the closest ancestor to the menu item that has the class "module"
var module = listItem.closest ('.module');


var list1 = $('#my-unordered-list');
// Do something on the list, then ...
var listAndListItems = list1.add('#my-unordered-list li');
console.log('listAndListItems', listAndListItems);


$ ('#my-unordered-list')
.find('#ffff li')
// We are now working on the menu items
.addClass ('special')
.end()
// We are now back on the same list
.addClass('super-special');



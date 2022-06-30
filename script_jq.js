$('#main').css({
    color: 'red',
    border: '1px solid blue'
});

let listItemS = $('li');
console.log(listItemS);


$(document).ready(function() {
    console.log('JQuery is ready!');
});


const idElem = $('#header'); // specify the element identifying 'header'
console.log('idElem', idElem);

const liElems = $('li'); // Select all menu items on the page
console.log('liElems', liElems);

const ulLiElems = $('ul li'); // Select all of the menu items in unordered lists
console.log('ulLiElems', ulLiElems);

const classElem = $('.person'); // select all elements of class 'person'
console.log('classElem', classElem);



// Create a jQuery object from the DOM element
const domChild0Elem = $(document.body.children [0]);
console.log('domChild0Elem', domChild0Elem);

// Create a jQuery object from a list of DOM elements
const winDocElem = $([window, document]);
console.log('winDocElem', winDocElem);

// Select the DOM element context
// msv all li in elem
var firstBodyChild = document.body.children [0];
const liInfirstBodyChild = $('li', firstBodyChild);
console.log('liInfirstBodyChild',liInfirstBodyChild);

// Make the selection within a previous selection
// msv all A inside P
var paragraph = $('p');
const aInsidePElem = $('a', paragraph);
console.log('aInsidePElem', aInsidePElem);

if($('#main').length) {
    console.log('element with ID main is on the page');
}


var listItems = $('li');
var rawListItem = listItems [0]; // or listItems.get(0)
rawListItem.innerHTML = '<b>!!!!!!!!</b>';

var listItems = $('li');
var secondListItem = listItems.eq(1);
secondListItem.remove();


console.log('check IS', $('li').eq(0).is('.special'));


// $('li').html('New LI HTML');

$('li').html(function(index, oldHtml) {
    return oldHtml + `(added to ${index}-st LI on page)`;
});


$('li').each(function(index, elem) {
    // this: the current raw DOM element
    // index: the directory of the current object in the selection
    // elem: the current raw DOM element(like this)
    // $(elem).prepend('<b>' + index + ': </b>');
    $(this).prepend('<b>' + index + ': </b>');
});


$('li').click(function() {
    $('#info').html($(this).css('color'));
    $(this).addClass('clicked');
})
.find('span')
.attr('title', 'Hover over me');


// The selection row contains only items of 'special'
var special = listItems.filter('.special');
console.log('special', special);

// The selection row contains only non-special elements
var notSpecial = listItems.not('.special');
console.log('notSpecial', notSpecial);

// The selection row contains only elements that include span
var hasSpans = listItems.has('span');
console.log('hasSpans', hasSpans);


// Choose The first menu item on the page
var listItem = $('li').last(); // Also:.last()
listItem.css({color: 'blue'});

// Choose the siblings of the menu item
var siblings = listItem.siblings();
siblings.css({color: 'green'});

// Choose the next brother for the menu item
var nextSibling = listItem.prev(); // Also:.prev()
nextSibling.css({color: 'red'});

// Choose the parent of the menu item
var list = listItem.parent();
list.css({border: 'solid 1px blue'});

// Select menu items that are directly from the list
var listItemsС = list.children();
listItemsС.css({color: 'yellow'});

// Select all menu items within the list, including sub-items
var allListItems = list.find('li');
allListItems.css({'text-decoration': 'underline'});

// Choose all ancestors of the "module" menu item
var modules = listItem.parents('.module');
modules.css({'color': 'magenta'});

// Choose the closest ancestor to the menu item that has the class "module"
var module = listItem.closest('.module');


var list1 = $('#my-unordered-list');
// Do something on the list, then...
var listAndListItems = list1.add('#my-unordered-list li');
console.log('listAndListItems', listAndListItems);


// $('#my-unordered-list')
//.find('li#ffff')
// // We are now working on the menu items
//.addClass('special')
//.end()
// // We are now back on the same list
//.addClass('super-special');

var list = $('#my-unordered-list');
var listItems = list.find('li#ffff');
listItems.addClass('special');
// list.addClass('super-special');


listItems.addClass('super-special');
$('li.special')
.siblings()
 // We are now working on the siblings of the previous selection
//.removeClass('super-special')
.addBack()
// // Now we are working on the original menu items and its siblings ** together **
//.addClass('urgent');

var specialListItems = $('li.special');
var otherListItems = specialListItems.siblings();
otherListItems.removeClass('super-special');
specialListItems.add(otherListItems).addClass('urgent');


$('li').addClass('hidden');
$('li').eq(1).removeClass('hidden');
$('li').removeClass('hidden');

$('#header p').click((e) => {
    $('li').eq(0).toggleClass('hidden');
    $(this).toggleClass('super-special');
});


var list2 = $('#my-unordered-list');
var width = Math.floor(list2.width() * 0.1);
list.find('li').each(function(index, elem) {
    var padding = width * index;
    $(elem).css('padding-left', padding + 'px');
});


$('li').eq(1).css({
    'font-size': '20px',
    'padding-right': '20px'
});


$('input[type="text"]').val('new value');


$('input[type = "checkbox"]').first().prop('checked', 'checked');


$('a').attr('href', 'https://www.google.com/');


$('a').attr('href', function(index, value) {
    return value + '?special=true';
});


$('#header form button').first().click((e) => {
    const varT = $('input[type="text"]').first().val();
    $('#info').html(varT);
})


var listItem3 = $('#my-unordered-list li').first();
    // listItem3.each(function(index, elem) {
    //    $(this).text( `${index}  -  ${$(this).text()}` );
    // }); 
listItem3.css({'background-color': 'blue'});
// listItem3.appendTo('#my-unordered-list');    //this way the existed item moves to the new place
$('<li>...added by appendTo()...</li>').appendTo('#my-unordered-list');

// $('#my-unordered-list').append(listItem3);  //this way the existed item moves to the new place
$('#my-unordered-list').append('<li>...added by append()...</li>');

var listItems1 = $('#my-unordered-list li');
listItems1.first().insertAfter(listItems1.last());

listItems1 = $('#my-unordered-list li');
listItems1.last().after(listItems1.first());


var clones = $('li').clone();
clones.html(function(index, oldHtml) {
    return '_clone!__' + oldHtml;
});
$('#my-unordered-list').append(clones);


$('#my-unordered-list li').click(function() {
    // alert($(this).text());
});
var removedListItem = $('#my-unordered-list li').first().remove();
removedListItem.appendTo('#my-unordered-list');
removedListItem.trigger('click'); // No alert message!

var detachedListItem = $('#my-unordered-list li'
).first().detach();
// Do something complicated with the menu item
detachedListItem.appendTo('#my-unordered-list');
// detachedListItem.trigger('click'); //alert!

var replacedListItem = $('#my-unordered-list li').first()
.replaceWith('<li> new! </li>');
replacedListItem.trigger('click'); // No alert message!


$('li').click(function(event) {
    console.log('clicked', $(this).text());
});


$('li').on('click', function(event) {
    console.log('clicked via ON - ', $(this).text());
});


$('li').first().click();

$('li').last().off('click');


$('li').on('click.logging', function() {
    console.log('a list item was clicked');
});

$('li').off('click.logging');


$('input[type="text"]').on('focus blur', function() {
    console.log('The user focused or blurred the input');
});

$(window).on('resize.foo scroll.bar', function() {
    // console.log('The window has been resized or scrolled!');
});


var handleClick = function() {
    console.log('something was clicked');
};
$('li').on('click', handleClick);
$('h1').on('click', handleClick);


$('h1').on('click', function(event) {
    console.log('event.type', event.type); // event type, like: "click"
    console.log('event.which', event.which); // The button or key that was pressed
    console.log('event.target', event.target); // The element from which the event originated
    console.log('event.pageX', event.pageX); // Mouse position on X axis
    console.log('event.pageY', event.pageY); // Mouse position on Y axis
});


$('input').on('keydown', function(event) {
    // this: the raw element that triggered the event
    // event: the event object
    // Change the background color to red if you press the erase button, or to green, otherwise
    $(this).css('background', event.which === 8? 'red': 'green');
});


$('a').first().on('click', function(event) {
    // Prevent the initial event.
    event.preventDefault();
    // Record what happened.
    console.log('I am link, I was just clicked!');
});


// $('a #last1').
$('#last1 a').on('click', function(event) {
    event.preventDefault();
    console.log('LLLL ' + $(this).attr('href'));
    console.log('event', event);
});


$('#my-unordered-list').on('click', function(event) {
    console.log(event.target); // Record the item that triggered the event
});


$('#my-unordered-list').on('click', 'li', function(event) {
    console.log('delegated from ul to li', this); // Lists the menu item that triggered the event
});


$('#my-unordered-list').on('click', 'li', function(event) {
    console.log(this); // Registers the menu item that was clicked
    $('<p> add to the list item! </p>').appendTo(this);
});


$('#butt7').on('click',(e) => {
    // $('.hidden').show(300);
    $('.hidden').show('slow',() => {
       // $(e.target).text('hide');
    });
})

$('#butt9').on('click',(e) => {
    $('.hidden').hide(300);
})


$('#butt8').on('click',(e) => {
    $('p.old').fadeOut(300, function() {
       $(this).remove();
    });
})

$('#butt10').on('click',(e) => {
    var oldElements = $('p.old');
    var thingToAnimate = $('#nonexistent');
    // This function will be the back-up call for the 'show' function if there are elements that we want to show, if there are no elements, we call them directly by ourselves.
    var removeOldElements = function() {
       oldElements.remove();
    };
    if(thingToAnimate.length) {
       // Our job will be called up after the movement ends
       thingToAnimate.show('slow', removeOldElements);
    } else {
    removeOldElements();
    }
});


$('#butt11').on('click',() => {
    $('.funtimes').animate({
       left: '+=50', // Increase by 50
       opacity: 0.25,
       fontSize: '12px'
        },
       300,
       function() {
       // Executed when the movement ends
       $(this).text('DONE - ' + $(this).text());
       }
       );
});



// Create a callback function that will be executed when the AJAX request succeeds
var updatePage = function(resp) {
    $('#target').html(resp.items[0].login);
};
//And when it fails
var printError = function(req, status, err) {
    console.log('something went wrong', status, err);
};
// Create the Settings object that describes the request
var ajaxOptions = {
    url: 'https://api.github.com/search/users?q=ms',
    dataType: 'json',
    success: updatePage,
    error: printError
};

$('#butt12').on('click',() => {
    // send the request
    $.ajax(ajaxOptions);
});


$('#butt12').off('click');
$('#butt12').on('click',() => {
    // send the request
    $.ajax({
       url: 'https://api.github.com/search/userfffs?q=ms',
       dataType: 'json',
       success: function(resp) {
          $('#target').html(resp.items[0].login);
       },
       error: function(req, status, err) {
          console.log('something went wrong', status, err);
       }
    });
});


var getSomeData = function() {
    var data;
    $.ajax({
       url: 'https://api.github.com/search/users?q=ms',
       dataType: 'json',
       success: function(resp) {
          data = resp.people;
          }
       });
    return data;
}

$('#butt13').on('click',() => {
    $('#target').html(getSomeData().items[0].login); // msv! todo well
});

let token = "";
$.ajaxSetup({
    headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
    }
});
$.post('https://byte-tasks.herokuapp.com/api/auth/login', JSON.stringify({email: 'sergiy.matsiupa@gmail.com', password: 'sergiy.matsiupa'}), function(resp) {
    console.log('resp - ', resp);
    token = resp.token;
    $.ajaxSetup({
       headers: {
          'Authorization': `Bearer ${resp.token}`
       }
    });
    $.get('https://byte-tasks.herokuapp.com/api/auth/user/self', function(html) {
       console.log('html', html);
       });
    $.get('https://byte-tasks.herokuapp.com/api/task', function(html) {
       console.log('html', html);
       });
});


$('#tasks-form').submit(function(event) {
    event.preventDefault();
    var form = $(this);
    $.ajaxSetup({
       headers: {
          'Authorization': `Bearer ${token}`
       }
    });
    $.ajax({
       type: 'POST',
       url: 'https://byte-tasks.herokuapp.com/api/task',
       // data: form.serialize(),
       data: JSON.stringify( 
             form.serializeArray()
               .reduce(function(json, { name, value }) {
                    json[name] = value;
                    return json;
                }, {})
             ),
       dataType: 'json',
       success: function(resp) {
          console.log('item was created - ', resp);
       }
    });
});


var req = $.ajax({
    url: 'https://api.github.com/search/users?q=ms',
    dataType: 'json'
});
console.log('req', req);

var success = function(resp) {
    $('#target1').append(
        '<p> people:' + resp.items.length + '</p>'
    );
    console.log(resp.people);
};
var err = function(req, status, err) {
    $('#target1').append('<p> something went wrong </p>');
};
req.then(success, err);
req.then(function() {
    $('#target1').append('<p> it worked </p>');
});

req.always(function() {
    $('#target1')
   .append('<p> one way or another, it is done now </p>');  //msv? executed before the request
});


$.ajax({
     url: 'https://jsonplaceholder.typicode.com/users',
     data: {q: 'a'},
     dataType: 'jsonp',
     success: function(resp) {
         $('#target2').html('Results:' + resp.length);
     }
});


$.getJSON('https://jsonplaceholder.typicode.com/users?q=a&callback=?',
    function(resp) {
        $('#target2').html('Results:' + resp.length + '(' + resp[0].name);
    }
);


function doSomethingLater(fn, time) {
     var dfd = $.Deferred();
     setTimeout(function() {
        dfd.resolve(fn());
        }, time || 0);
     return dfd.promise();
}
var success = function(resp) {
    $('#target3').html('it worked');
    console.log('it worked');
};
var err = function(req, status, err) {
    console.log('errrrrror');
    $('#target3').html('it failed');
};

var dfd = doSomethingLater(function() {
    console.log('This function will be called in 5000ms');
    // throw new Error('Whoops!');
}, 5000);
dfd.then(success, err);

var dfd1 = doSomethingLater(function() {return 1;}, 100);
dfd1
.pipe(function(resp) {return resp + '' + resp;})
.done(function(upperCaseResp) {
    $('#target3').html(upperCaseResp);
});


function maybeAsync(num) {
    var dfd = $.Deferred();
    // Promise a hold back when num === 1
    if(num === 1) {
        setTimeout(function() {
            dfd.resolve(num);
        }, 5000);
     return dfd.promise();
    }
    // End immediately, returning num
    return num;
}

// This will be done asynchronously and promise to return 1
$.when(maybeAsync(1)).then(function(resp) {
    $('#target4').append('<p>' + resp + '</p>');
    });
// This will return 0 directly
$.when(maybeAsync(0)).then(function(resp) {
     $('#target4').append('<p>' + resp + '</p>');
});


$.when(maybeAsync(0), maybeAsync(1))
.then(function(resp1, resp2) {
    var target = $('#target5');
    target.append('<p>' + resp1 + '</p>');
    target.append('<p>' + resp2 + '</p>');
});


$.when(maybeAsync(0), $.get('https://jsonplaceholder.typicode.com/users'))
   .then(function(resp1, resp2) {
        console.log("Both operations are done", resp1, resp2);
});



// Back to top
$('a.top').click(function() {
    $(document.body).animate({scrollTop: 0}, 800);
    return false;
});

$('#img_huge').on('load', function() {
    console.log('image load successful');
        // console.log('this', this);
});
$('#img_huge').click(function(e) {
    $('#img_huge').trigger("load");
});


$('#imgbr').on( "error", function() {
    $(this).attr('src', 'images/broken.png');
});


$('#btn_hov').hover(function() {
        $(this).addClass('hover');
    }, function() {
        $(this).removeClass('hover');
    }
);


$('#inp-imp').attr("disabled", true);
$('#check-sure').on('click',() => {
    if( $('#check-sure').is(':checked')) {
        $('#inp-imp').removeAttr("disabled");
    } else {
        $('#inp-imp').attr("disabled", true);
    }
})


// Evanescence
$("#fad-slid-id").click(function() {
    $("#txt-fad-slid-id").fadeToggle("slow");
});
// Switch
$("#fad-slid-id").click(function() {
    $("#txt-fad-slid-id").slideToggle("slow");
});


// Close all panels
$('#accordion').find('.content').hide();
// The folding effect
$('#accordion').find('.accordion-header').click(function() {
    var next = $(this).next();
    next.slideToggle('fast');
     $('.content').not(next).slideUp('fast');
    return false;
});


$('.div').css('min-height', $('.main-div').height());


$('#ul-evenodd-id li:odd').css('background', '#E8E8E8');



// making table bigger
let strRow = "";
for ( let i=1; i < 255; i++) {
    strRow = "";
    for(let j=1; j <= 15; j++) {
        strRow += `<td>td${i}.${j}</td>`;
    }
    strRow = `<tr>${strRow}</tr>`;
    $('#table-st-id tbody').append(strRow);
}


$(function() {
    // Here we select all tables on the page
    // But you are free to specify the tables you want
    $('table').each(function() {
        if($(this).find('thead').length> 0 && $(this).find('th').length > 0) {
            // The rest of the script will be here
            // Define variables and some shortcuts 
            var $t = $(this),
                $w = $(window),
                $thead = $(this).find('thead').clone(),
                $col = $(this).find('thead, tbody').clone();
            // Contain table
            $t
           .addClass('sticky-enabled')
           .css({
                margin: 0,
                width: '100%'
            })
           .wrap('<div class = "sticky-wrap" />');
            // Check if we have specified that the table be scrolling along the horizontal axis
            if($t.hasClass('overflow-y')) $t.removeClass('overflow-y').parent().addClass('overflow-y');
            // Create a new table header with a.stiky-head class
            $t.after('<table class = "sticky-head" />');
            // If <tbody> contains <th> we create a new column so that the cell is above the table
            if($t.find('tbody th').length> 0) {
                $t.after('<table class = "sticky-col" /> <table class = "sticky-intersect" />');
            }
            // Shortcuts
            var $stickyHead = $(this).siblings('.sticky-thead'),
            $stickyCol = $(this).siblings('.sticky-col'),
            $stickyInsct = $(this).siblings('.sticky-intersect'),
            $stickyWrap = $(this).parent('.sticky-wrap');
                console.log('$stickyHead', $stickyHead);
            // StickyHead gets content from <thead>
            $stickyHead.append($thead);
            $stickyCol
            .append($col)
            .find('thead th:gt(0)').remove()
            .end()
            .find('tbody td').remove();
            // StickyIntersect gets content from <th> in <thead>
            $stickyInsct.html('<thead> <tr> <th>' + $t.find('thead th:first-child').html() + '</th> </tr> </thead>' );
            // Function 1: setWidths()
            // Purpose: To set width of individually cloned element
            var setWidths = function() {
                $t
                .find('thead th').each(function(i) {
                    $stickyHead.find('th').eq(i).width($(this).width());
                 })
                .end()
                .find('tr').each(function(i) {
                        $stickyCol.find('tr').eq(i).height($(this).height());
                        });
                // Set width of sticky table head
                $stickyHead.width($t.width());
                // Set width of sticky table col
                $stickyCol.find('th').add($stickyInsct.find('th')).width($t.find('thead th').width())
                },
            // Function 2: repositionStickyHead()
            // Purpose: To position the cloned sticky header(always present) appropriately
            repositionStickyHead = function() {
                // Return value of calculated allowance
                var allowance = calcAllowance();
                // Check if wrapper parent is overflowing along the y-axis
                if($t.height() > $stickyWrap.height()) {
                    // If it is overflowing
                    // Position sticky header based on wrapper's scrollTop()
                    if($stickyWrap.scrollTop() > 0) {
                        // When top of wrapping parent is out of view
                        $stickyHead.add($stickyInsct).css({
                                        opacity: 1,
                                        top: $stickyWrap.scrollTop()
                                    });
                    } else {
                    // When top of wrapping parent is in view
                    $stickyHead.add($stickyInsct).css({
                                            opacity: 0,
                                            top: 0
                        });
                    }
                } else {
                    // If it is not overflowing(basic layout)
                    // Position sticky header based on viewport scrollTop()
                    if($w.scrollTop() > $t.offset().top && $w.scrollTop() < $t.offset().top + $t.outerHeight() - allowance) {
                        // When top of viewport is within the table, and we set an allowance later
                        // Action: Show sticky header and intersect, and set top to the right value
                        $stickyHead.add($stickyInsct).css({
                                    opacity: 1,
                                    top: $w.scrollTop() - $t.offset().top
                        });
                    } else {
                        // When top of viewport is above or below table
                        // Action: Hide sticky header and intersect
                        $stickyHead.add($stickyInsct).css({
                            opacity: 0,
                            top: 0
                            });
                    }
                }
            },
            // Function 3: repositionStickyCol()
            // Purpose: To position the cloned sticky column(if present) appropriately
            repositionStickyCol = function() {
                if($stickyWrap.scrollLeft() > 0) {
                    // When left of wrapping parent is out of view
                    // Show sticky column and intersect
                    $stickyCol.add($stickyInsct).css({
                            opacity: 1,
                            left: $stickyWrap.scrollLeft()
                        });
                } else {
                    // When left of wrapping parent is in view
                    // Hide sticky column but not the intersect
                    // Reset left position
                    $stickyCol
                        .css({opacity: 0})
                        .add($stickyInsct).css({left: 0});
                }
            },
            // Function 4: calcAllowance()
            // Purpose: Return value of calculated allowance
            calcAllowance = function() {
                var a = 0;
                // Get sum of height of last three rows
                $t.find('tbody tr:lt(3)').each(function() {
                    a += $(this) .height();
                });
                // Set fail safe limit(last three row might be too tall)
                // Set arbitrary limit at 0.25 of viewport height, or you can use an arbitrary pixel value
                if(a > $w.height() * 0.25) {
                    a = $w.height() * 0.25;
                }
                // Add height of sticky header itself
                a +=  $stickyHead.height();
                return a;
            };
            // # 1: DOM when ready
            setWidths();
            // # 2: We monitor the container in the event of a pass in it
            $t.parent('.sticky-wrap').scroll($.throttle(250, function() {
                repositionStickyHead();
                repositionStickyCol();
            }));
            // Now we link what we made to the $(window) element
            $w
                // # 3: When all the contents are loaded
                .on('load', setWidths)
                // # 4: When the window is minimized
                // We have used throttle here so that the event does not fire more than once(by default the event is fired for each minimized part, here we wait until the reduction is complete and then we launch)
                .resize($.throttle(250, function() {
                    setWidths();
                    repositionStickyHead();
                    repositionStickyCol();
                }))
                // # 5: When going down in the window
                // We used throttle so the function doesn't launch much
                .scroll($.throttle(250, repositionStickyHead));
        }
     });
});
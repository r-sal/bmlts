/**
 * bmlt.gmail.unread.js
 * Filters current view in Gmail to show only unread messages. It adds 
 * 'label:unread' to the search box in Gmail and clicks search button.
 */
var input = $('div[role="navigation"]').find('input[type="text"]');
input.val(input.val() + " label:unread");
$('div[role="navigation"]').find('button').click();

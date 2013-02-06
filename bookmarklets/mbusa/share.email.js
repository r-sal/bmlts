/**
 * Autofills mbusa's email siteshare form and submits it.
 */
var email = 'ricksalaverria@gmail.com';
$('#recipientEmail').val(email);
$('#email').val(email);
$('.email-form').find('button[type="submit"]').click();



//--------------

$('#recipientEmail, #email').val('ricksalaverria@gmail.com');
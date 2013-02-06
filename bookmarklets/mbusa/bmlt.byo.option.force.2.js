$('.option').find('label').click(function(){
    var optionId = $(this).parent().find('input').attr('name');

    var byoClass = $('.pp-vehicle-class').html();
    var byoModel = $('.pp-vehicle-model').html();
    

    var url = window.location.href;
    url = url.replace(window.location.hash, '');
    url = url + '/pageType-BYO_OPTIONS/optionId-' + urlencode(optionId);
    console.log(url);
    //window.myoutput = window.open("", "mywindow", windowOptions);
});

function urlencode(str) {
  return escape(str).replace(/\+/g,'%2B').replace(/%20/g, '+').replace(/\*/g, '%2A').replace(/\//g, '%2F').replace(/@/g, '%40');
}


//http://mbusa-test-1.mbusa.com/mercedes/vehicles/build/option_detail/class-GLK/model-GLK350W2/pageType-BYO_OPTIONS/optionId-0%3a550
//http://mbusa-test-1.mbusa.com/mercedes/vehicles/build/              class-GLK/model-GLK350W2/pageType-BYO_OPTIONS/optionId-0%3a550
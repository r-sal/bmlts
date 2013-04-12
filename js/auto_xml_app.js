$.widget( "custom.catcomplete", $.ui.autocomplete, {
    _renderMenu: function( ul, items ) {
        var self = this,
            currentCategory = "";
        
        $.each( items, function( index, item ) {
            if ( item.category != currentCategory ) {
                currentCategory = item.category;
            }
            
            self._renderItem( ul, item );
        });
        
    }
});




var modelDetail = [
   {name: "C250 Sport Sedan", modelCode: "C250WZ", class: "C", bodystyle: "SDN"},
   {name: "C250 Luxury Sedan", modelCode: "C250W", class: "C", bodystyle: "SDN"},
   {name: "C300 4MATIC Sport Sedan", modelCode: "C300WZ4", class: "C", bodystyle: "SDN"},
   {name: "C300 4MATIC Luxury Sedan", modelCode: "C300W4", class: "C", bodystyle: "SDN"},
   {name: "C350 Sport Sedan", modelCode: "C350W", class: "C", bodystyle: "SDN"},
   {name: "C63 AMG Sedan", modelCode: "C63", class: "C", bodystyle: "SDN"},
   {name: "C250 Coupe", modelCode: "C250C", class: "C", bodystyle: "CPE"},
   {name: "C350 Coupe", modelCode: "C350C", class: "C", bodystyle: "CPE"},
   {name: "C63 AMG Coupe", modelCode: "C63C", class: "C", bodystyle: "CPE"},
   {name: "E350 Sedan", modelCode: "E350W", class: "E", bodystyle: "SDN"},
   {name: "E350 BlueTEC Sedan", modelCode: "E350BTC", class: "E", bodystyle: "SDN"},
   {name: "E400 Hybrid Sedan", modelCode: "E400H", class: "E", bodystyle: "SDN"},
   {name: "E550 4MATIC Sedan", modelCode: "E550W4", class: "E", bodystyle: "SDN"},
   {name: "E63 AMG Sedan", modelCode: "E63", class: "E", bodystyle: "SDN"},
   {name: "E350 Coupe", modelCode: "E350C", class: "E", bodystyle: "CPE"},
   {name: "E550 Coupe", modelCode: "E550C", class: "E", bodystyle: "CPE"},
   {name: "E350 Cabriolet", modelCode: "E350A", class: "E", bodystyle: "CAB"},
   {name: "E550 Cabriolet", modelCode: "E550A", class: "E", bodystyle: "CAB"},
   {name: "E350 4MATIC Wagon", modelCode: "E350S4", class: "E", bodystyle: "WGN"},
   {name: "E63 AMG Wagon", modelCode: "E63S", class: "E", bodystyle: "WGN"},
   {name: "S350 BlueTEC 4MATIC Sedan", modelCode: "S350BTC4", class: "S", bodystyle: "SDN"},
   {name: "S400 HYBRID Sedan", modelCode: "S400HV", class: "S", bodystyle: "SDN"},
   {name: "S550 Sedan", modelCode: "S550V", class: "S", bodystyle: "SDN"},
   {name: "S600 Sedan", modelCode: "S600V", class: "S", bodystyle: "SDN"},
   {name: "S63 AMG", modelCode: "S63", class: "S", bodystyle: "SDN"},
   {name: "S65 AMG", modelCode: "S65", class: "S", bodystyle: "SDN"},
   {name: "CL550 Coupe", modelCode: "CL550C4", class: "CL", bodystyle: "CPE"},
   {name: "CL600 Coupe", modelCode: "CL600C", class: "CL", bodystyle: "CPE"},
   {name: "CL63 AMG", modelCode: "CL63", class: "CL", bodystyle: "CPE"},
   {name: "CL65 AMG", modelCode: "CL65", class: "CL", bodystyle: "CPE"},
   {name: "CLS550 Coupe", modelCode: "CLS550C", class: "CLS", bodystyle: "CPE"},
   {name: "CLS63 AMG", modelCode: "CLS63", class: "CLS", bodystyle: "CPE"},
   {name: "GLK350 SUV", modelCode: "GLK350W2", class: "GLK", bodystyle: "SUV"},
   {name: "ML350 SUV", modelCode: "ML350W4", class: "M", bodystyle: "SUV"},
   {name: "ML350 BlueTEC SUV", modelCode: "ML350BTC", class: "M", bodystyle: "SUV"},
   {name: "ML550 SUV", modelCode: "ML550", class: "M", bodystyle: "SUV"},
   {name: "ML63 AMG", modelCode: "ML63", class: "M", bodystyle: "SUV"},
   {name: "GL350 BlueTEC SUV", modelCode: "GL350BTC", class: "GL", bodystyle: "SUV"},
   {name: "GL450 SUV", modelCode: "GL450", class: "GL", bodystyle: "SUV"},
   {name: "GL550 SUV", modelCode: "GL550", class: "GL", bodystyle: "SUV"},
   {name: "G550 SUV", modelCode: "G550", class: "G", bodystyle: "SUV"},
   {name: "R350 4MATIC Crossover", modelCode: "R350V4", class: "R", bodystyle: "GST"},
   {name: "R350 BlueTEC Crossover", modelCode: "R350BTC", class: "R", bodystyle: "GST"},
   {name: "SLK250 Roadster", modelCode: "SLK250", class: "SLK", bodystyle: "RDS"},
   {name: "SLK350 Roadster", modelCode: "SLK350", class: "SLK", bodystyle: "RDS"},
   {name: "SLK55 AMG", modelCode: "SLK55", class: "SLK", bodystyle: "RDS"},
   {name: "SL550 Roadster", modelCode: "SL550R", class: "SL", bodystyle: "RDS"},
   ];      
       
   var data = [
       "C250 Sport Sedan",
   "C250 Luxury Sedan",
   "C300 4MATIC Sport Sedan",
   "C300 4MATIC Luxury Sedan",
   "C350 Sport Sedan",
   "C63 AMG Sedan",
   "C250 Coupe",
   "C350 Coupe",
   "C63 AMG Coupe",
   "E350 Sedan",
   "E350 BlueTEC Sedan",
   "E550 4MATIC Sedan",
   "E63 AMG Sedan",
   "E350 Coupe",
   "E550 Coupe",
   "E350 Cabriolet",
   "E400 HYBRID Sedan",
   "E550 Cabriolet",
   "E350 4MATIC Wagon",
   "E63 AMG Wagon",
   "S350 BlueTEC 4MATIC Sedan",
   "S400 HYBRID Sedan",
   "S550 Sedan",
   "S600 Sedan",
   "S63 AMG",
   "S65 AMG",
   "CL550 Coupe",
   "CL600 Coupe",
   "CL63 AMG",
   "CL65 AMG",
   "CLS550 Coupe",
   "CLS63 AMG",
   "GLK350 SUV",
   "ML350 SUV",
   "ML350 BlueTEC SUV",
   "ML550 SUV",
   "ML63 AMG",
   "GL350 BlueTEC SUV",
   "GL450 SUV",
   "GL550 SUV",
   "G550 SUV",
   "R350 4MATIC Crossover",
   "R350 BlueTEC Crossover",
   "SLK250 Roadster",
   "SLK350 Roadster",
   "SLK55 AMG",
   "SL550 Roadster",
   "SLS AMG Roadster",
   "SLS AMG Coupe",
   ];

   pages = [{  title: 'UXP2', 
           items: [{name: 'Model Page', value:'Class_ModelView'},
                   {name: 'Compare Page', value:'Class_Compare'},
                   {name: 'Class Page', value:'Class_Page'},
                   {name: 'Faimly Page', value:'Class_Family'}]},

       {   title: 'Build Your Own', 
           items: [{name: 'BYO Options', value:'BYO_Options'},
                   {name: 'BYO Packages', value:'BYO_Packages'},
                   {name: 'BYO Appearance', value:'BYO_Appearance'},
                   {name: 'BYO Accessories', value:'BYO_Accessories'}]}
   ];
   
   
   
   
   
   
   
   
   
   
   
   
   Array.prototype.findObj = function(searchStr) {
       var returnArray = false;
       for (i=0; i<this.length; i++) {
           if (this[i].name.toLowerCase() === searchStr.toLowerCase()) {
               return this[i];
           }
       }
       return false;
   }
   
   Array.prototype.buildUrl = function(url) {
       var full = url + '?';
       var sss = [];
       for (i=0; i<this.length; i++) {
           var arr = this[i];
           //var tmp = '&' + arr.name + '=' + arr.value;
           //full = full + tmp;
           sss.push(arr.name + '=' + arr.value);
       }
       return url + sss.join('&');
       return full;
   }   
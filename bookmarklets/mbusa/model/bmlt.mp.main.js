;( function( $ ){
	$.fn.extend( {
		MPQA: function( options ) {
			this.defaults = {
				defaultOpenColor: 'red',
				disclaimer: {'color': '#009900','padding': '10px','border': '1px solid #336633','margin': '0 0 10px 0','width': '95%'},
				highlight: 'position: relative; padding: 10px 0; background-color: #FFDE00; box-shadow: 0 2px 2px #ccc; -moz-box-shadow: 0 2px 2px #ccc; -webkit-box-shadow: 0 2px 2px #ccc; border-radius: 5px; color:#000000; padding:5px 10px; margin-top:10px'
			};
			var settings = $.extend( {}, this.defaults, options );
			var i = 0;
			

			/**
			 * This funtion will extract the filename of an image from a URL.
			 */
			var getFilename = function(url){
				if (!url) { return ''; }			
				var temp = url.split('/');
				url = temp[temp.length - 1];
				temp = url.split('?');
				return temp[0];			
			};
			
			//--------------------------------
            /* Expand all sections, close all when run twice */
            if($(this).hasClass('alreadyRun')){
                $(this)
                    .removeClass('alreadyRun')
                    .addClass('alreadyRunTwice');
                $('.section-collapse-cta').click();
            }else{
                $(this).addClass('alreadyRun');
                $('.section-expand-cta').click();
            }
			
            /* Make exterior color options hoverable */
            $('.swatch-options').find('li a').hover(function(){
                $(this).click();
            });

            
			/**
			 * Where the magic happens.
			 */
			return this.each( function() {
				var $this = $( this );
				if($(this).hasClass('alreadyRunTwice')){ return $this; }
                
				$this.find('.tout').each( function() {					
					var defaultOpen = ($(this).is('.openme') && $(this).is('.open')) || false,
						optional = ($(this).is('.opt')) || false;
					
					
					$(this)
						/* Highlight default opens */
						.find('.accordion-title')
							.find('h4')
								.css('color', function() {
									return defaultOpen ? 'red' : '';
								})
							.end()
						.end()
						
						/* Images */
						.find('img').click(function () {
                            if($(this).hasClass('img-src')){
                                $(this)
                                    .removeClass('img-src')
                                        .parent()
                                            .find('p')
                                            .remove();
                            }else{                                
                                $('<p></p>')
                                    .html(getFilename($(this).attr('src')))
                                    .attr('style', settings.highlight)
                                    .appendTo($(this)
                                                .addClass('img-src')
                                                    .parent());
                            }
						})
						.end()
						
						/* Disclaimers */
						.find('.disclaimer-content')
							.show()
							.css(settings.disclaimer)
							.find('span.disclaimer-id')
								.hide();						
										
				}); /* end: each.tout */
			});/* end: return.each */
		}
	});
})( jQuery );


	
$('.spec-section').MPQA();
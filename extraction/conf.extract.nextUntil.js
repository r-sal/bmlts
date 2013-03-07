extract();
/**
 * Generic extraction algo using nextUntil
 */
function extract(){
	var groups = {};
	
	$('.wiki-content').find('h1').each(function(){
	    var pageName = $(this).text().trim();	// the title of the section
	    groups[pageName] = [];
	    console.log('-- ' + pageName + ' --------------');
	    
	    $(this).nextUntil('h1').each(function(){
	        if($(this).hasClass('table-wrap')){            
	            var data = extractTable($(this).find('table.confluenceTable'));
	            groups[pageName].push(data);
	        }
	    });
	});		
	
	console.log(groups);
	return groups;
}

/**
 * Generic table extraction
 */
function extractTable(table){
	var tableType = detectTableType(table),
		tableData = '';
		
	switch(tableType){
		case 0: // horizontal
			tableData = extractHorizontalTable(table);
			break;
		case 1: // vertical
			tableData = extractVerticalTable(table);
			break;
		default:
			break;
	}
	return tableData || 'not yet implemented';
}

// determine if table is horizontal or vertical
function detectTableType(table){ 
	var tr = table.find('tr'),
		xT = 0, yT = 0;
	
	$.each(tr, function(y, trEl) {
		$.each($(trEl).children(), function(x, tdEl) {
			$nohighlight = $(tdEl).hasClass('nohighlight');
			$highlight = $(tdEl).hasClass('highlight') || $(tdEl).hasClass('confluenceTh');

			if($highlight && !$nohighlight){
				xT = xT + x;
				yT = yT + y;
				$(tdEl).css({'background': 'red'});  //debug
			}else{
				$(tdEl).css({'background': 'blue'}); //debug
			}
		});
	});	
	
	tableType = (xT > yT) ? 'vertical' : 'horizontal';
	console.log(xT, yT, tableType);
	return 0; 
}

function extractHorizontalTable(table){}

function extractVerticalTable(table){}


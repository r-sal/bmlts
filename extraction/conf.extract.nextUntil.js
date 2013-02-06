/**
 * Generic extraction algo using nextUntil
 */
function extract(){
	var groups = {};
	
	$('.wiki-content').find('h1').each(function(){
	    var pageName = $(this).text().trim();	// the title of the section
	    groups[pageName] = [];
	    
	    $(this).nextUntil('h1').each(function(){
	        if($(this).hasClass('table-wrap')){            
	            var data = extractTable($(this).find('table.confluenceTable tbody'));
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
function detectTableType(table){ return 0; }

function extractHorizontalTable(table){}

function extractVerticalTable(table){}


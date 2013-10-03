
// directive for dnd between lists
app.directive('dndBetweenList', function($parse) {

    return function(scope, element, attrs) {
	$('#sourceList').sortable({
		connectWith: '#targetList'
	});
	$('#targetList').sortable({
		connectWith: '#sourceList,#targetList1'
	});
	
	$('#targetList1').sortable({
		connectWith: '#targetList,#targetList2'
	});

		$('#targetList2').sortable({
		connectWith: '#targetList1'
	});



    }
});
// directive for dnd between lists
app.directive('dndBetweenList', function($parse) {

	return function(scope, element, attrs) {
		$('#sourceList').sortable({
			connectWith : '#targetList'
		});
		$('#targetList').sortable({
			connectWith : '#sourceList,#targetList1'
		});

		$('#targetList1').sortable({
			connectWith : '#targetList,#targetList2'
		});

		$('#targetList2').sortable({
			connectWith : '#targetList1'
		});

		element.droppable({
			drop : function(event, ui) {
				// var uiItem = ui.draggable;
				// var dragIndex = uiItem.attr("item-index");
			//	var state = ui.draggable.attr("item-state");
				// var dragEl = angular.element(ui.draggable).parent();

				var dragId = ui.draggable.attr("item-id");
				var dragstate = ui.draggable.attr("item-state");
				var dropEl = angular.element(this);
				var dropState = dropEl.attr("state");

				var scope = ui.draggable.scope();
				var store = scope.taskStore;
				var index = -1;
				for ( var i = 0; i < store.length; i++) {
					if (dragId == store[i].id) {
						index = i;
						break;
					}
				}
				if (index != -1) {
				
				var start =Number(dragstate)+1;
				var end =Number(dragstate-1);
				alert(dropState +"----"+start+"----"+end);
				if(dropState == start || dropState == end){
					store[i].state = dropState;
					scope.$apply();
					}
					else{
					store[i].state = Number(dragstate)+1;
					}
				}
				console.log("dropped");
			}
		});
	};
});

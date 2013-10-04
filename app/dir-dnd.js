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

		var possibleToStates = new Array();
		possibleToStates[0] = [ 1 ];
		possibleToStates[1] = [ 0, 2 ];
		possibleToStates[2] = [ 1, 3 ];
		possibleToStates[3] = [ 2 ];

		element
				.droppable({
					drop : function(event, ui) {
						// var uiItem = ui.draggable;
						// var dragIndex = uiItem.attr("item-index");
						// var dragEl = angular.element(ui.draggable).parent();

						var currentState = parseInt(ui.draggable
								.attr("item-state"));
						var dragId = ui.draggable.attr("item-id");
						var dropEl = angular.element(this);
						var dropState = parseInt(dropEl.attr("state"));

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
							if (possibleToStates[currentState]
									.indexOf(dropState) != -1) {
								store[index].state = dropState;
							} else {
								// event.stopPropagation();
								// event.preventDefault();
								var states = possibleToStates[currentState];
								for ( var i = dropState; i >= 0; i--) {
									if (states.indexOf(i) != -1) {
										store[index].state = i;
										break;
									}
								}
								for ( var i = dropState; i <= 3; i++) {
									if (states.indexOf(i) != -1) {
										store[index].state = i;
										break;
									}
								}
							}
						}
						scope.$apply();
						console.log("dropped");
					}
				});
	};
});

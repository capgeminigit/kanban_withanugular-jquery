var maxId = 11;
function dndCtrl($scope) {

 
  $scope.increment = function(item){
            item.count += 1;
			console.info(item.count)
          }
   $scope.userStore = [
            { id: 1, name: 'Mats', img: 'resources/images/mats.jpeg' },
            { id: 2, name: 'Homer', img: 'resources/images/homer.jpg' },
            { id: 3, name: 'Brian', img: 'resources/images/brian.jpeg'}
        ];

   
        $scope.taskStore        = [
            { id : 1,        name : 'Fix IE7 bug', state : 0, nbrComments : 0, userId : 1, userName : 'Mats', userImg : 'resources/images/mats.jpeg'},
            { id : 2,        name : 'Sneak-install Chrome Frame', state : 0, nbrComments : 1, userId : 1, userName : 'Mats', userImg: 'resources/images/mats.jpeg'},
             { id : 81,        name : 'Sneak-install Chrome Frame1', state : 0, nbrComments : 1, userName : '', userImg: ''},
            { id : 12,       name : 'Add Windows Phone support', state : 1, nbrComments : 1, userId : 3, userName : 'Brian', userImg: 'resources/images/brian.jpeg'},
            { id : 122,      name : 'Make App', state : 1, nbrComments : 1, userName : '',  userImg :''},
            { id : 3,        name : 'Task 222 foo bar lots of text in this one eh? Fooooo', state : 2, nbrComments : 0, userName : '', userImg :'resources/images/homer.jpg'},
            { id : 4,        name : 'Find Unicorn', state : 2, nbrComments : 0, userName : 'Homer', userId : 2, userImg : 'resources/images/homer.jpg'},
            { id : 5,        name : 'IE6 support', state : 1, nbrComments : 0, userName : '', userImg :''},
            { id : 6,        name : 'Chrome development', state : 3, nbrComments : 0, userName : '', userImg :'resources/images/homer.jpg'},
            { id : 7,        name : 'Find holy grail', state : 3, nbrComments : 1, userName : '', userImg :''},
            { id : 8,        name : 'Dig hole', state : 3, nbrComments : 0, userName : '', userImg :''},
            { id : 9,        name : 'Eat raisins', state : 3, nbrComments : 3, userName : '', userImg :'resources/images/homer.jpg'}
        ];
		
		$scope.$watch("taskStore", function(name) {
		console.log("taskStore: " + name.map(function(e) {
			return e.id;
			
			}).join(','));
		}, true);
		
		 $scope.$watch('nstart', function (newValue) {
        if (angular.isArray(newValue)) {
		newValue.map(function(e){
				$(".control-label"+e.id).click(function(){
					var placeholder=$(this).html();
					$(this).hide();
					$(".input-medium"+e.id).show();
					$(".input-medium"+e.id).attr('placeholder', placeholder);
				});

				$(".input-medium"+e.id).blur(function() {
					var placeholder=$(this).val();
					$(this).hide();
					$(".control-label"+e.id).show();
					$(".control-label"+e.id).html(placeholder);
				});
			});
		
			  $scope.nstartCount=newValue.length;
        }
    }, true);
	
		 $scope.$watch('inProgress', function (newValue) {
        if (angular.isArray(newValue)) {
		newValue.map(function(e){
				$(".control-label"+e.id).click(function(){
					var placeholder=$(this).html();
					$(this).hide();
					$(".input-medium"+e.id).show();
					$(".input-medium"+e.id).attr('placeholder', placeholder);
				});

				$(".input-medium"+e.id).blur(function() {
					var placeholder=$(this).val();
					$(this).hide();
					$(".control-label"+e.id).show();
					$(".control-label"+e.id).html(placeholder);
				});
			});
		
			  $scope.inProgressCount=newValue.length;
        }
    }, true);
	
		 $scope.$watch('test', function (newValue) {
        if (angular.isArray(newValue)) {
			newValue.map(function(e){
				$(".control-label"+e.id).click(function(){
					var placeholder=$(this).html();
					$(this).hide();
					$(".input-medium"+e.id).show();
					$(".input-medium"+e.id).attr('placeholder', placeholder);
				});

				$(".input-medium"+e.id).blur(function() {
					var placeholder=$(this).val();
					$(this).hide();
					$(".control-label"+e.id).show();
					$(".control-label"+e.id).html(placeholder);
				});
			});
		
			  $scope.testCount=newValue.length;
        }
    }, true);
	
		 $scope.$watch('done', function (newValue) {
        if (angular.isArray(newValue)) {
		newValue.map(function(e){
				$(".control-label"+e.id).click(function(){
					var placeholder=$(this).html();
					$(this).hide();
					$(".input-medium"+e.id).show();
					$(".input-medium"+e.id).attr('placeholder', placeholder);
				});

				$(".input-medium"+e.id).blur(function() {
					var placeholder=$(this).val();
					$(this).hide();
					$(".control-label"+e.id).show();
					$(".control-label"+e.id).html(placeholder);
				});
			});
		
			  $scope.doneCount=newValue.length;
        }
    }, true);
	
	
		$scope.taskStoreEmpty = function() {
			return $scope.taskStore.length == 0;
		};
	
		$scope.addTaskStoreEntry = function(state) {
			$scope.addEntry($scope.taskStore, "changeUser",state);
		};
	
		$scope.addEntry = function(items, imgIdPrefix,state) {
			maxId = maxId + 1;
			var id = maxId;
			items.push({
				"id" : id,
				"name" : "New Task...",
				"state" :state,
				"nbrComments" : 0,
				"userId" : "", 
				"userName" : "", 
				"userImg" : ""         
		});
		registerUserMenu(imgIdPrefix + id);
	};

}
	var maxId = 11;
	function dndCtrl($scope) {

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
		
		
	
       
			var taskStore=   $scope.taskStore  ;
			$scope.dropListener = function (eDraggable, eDroppable) {
			
				var eSrc = eDraggable.parent();
				var sSrc = eSrc.data('stid');
				var sTarget = eDroppable.data('stid');
				var modelSrc ="taskStore | filter:{ state: "+sSrc+"}";
				var   modelTarget ="taskStore | filter:{ state: " +sTarget+" }";
			 
               $scope.$apply(function () {
			    var index = eDraggable.data('index');
			            var aSrc = $scope.$eval(modelSrc);
                        var aTarget = $scope.$eval(modelTarget);
						var item = aSrc[index];
					
						 var error = isDropForbidden(sSrc,sTarget);
                         if (sTarget == (Number(sSrc)+1) || sTarget == (Number(sSrc)-1)){
						  	item.state =sTarget;
						 }
						else {         }
			   })
 
            }
			
			 var isDropForbidden = function (sSrc,sTarget) {
			    if (sTarget == (Number(sSrc)+1) || sTarget == (Number(sSrc)-1)) {
                        return true;
                    } else {
                        return false;
                    }
                };
				
				
				
function afterApply(){
				
	$('.sch-task').hover(
		function () {
			$(this).css({"background-color":"#EEFFFF","color":"#888888"});
		//	console.info($(this).find(".Imgwrapper").css("display"));
			if($(this).find(".Imgwrapper").css("display") == 'none')
			$(this).find(".Imgwrapper").css("display","block");
		}, 
		function () {
			$(this).css({"background-color":"#FFFFFF","color":"#888888"});
			//	console.info($(this).find(".sch-user-avatar").attr("src").length);
				if($(this).find(".sch-user-avatar").attr("src").length == 0)
				$(this).find(".Imgwrapper").css("display","none");
			});
	 
		$('.sch-task').click(
			function () {
				$(this).css({"background-color":"#7b68ee","color":"#FFFFFF"});
			});
			registerUserMenuForAll();

		$('.sch-task').editables({ 
			beforeEdit: function(field){
			if(this.data('updatable')) field.val(this.text());
			},
			beforeFreeze: function(display){ 
			if(display.data('updatable')) display.text(this.val());
			}
		});
			
		$('.sch-user-avatar').each(function(i, obj) {
			var fileext=obj.src;
			var n=fileext.lastIndexOf(".");
			var fileType="";
			if(n != -1)
				fileType=fileext.substring(n+1);
				if(fileType.length !=0 && fileType == 'html'){
					$(obj.parentNode).css("display","none");
				}
			else
				$(obj.parentNode).css("display","block");
			});
				}
					$scope.$watch("taskStore", function(name) {
				}, true);
	
		
			$scope.$watch('nstart', function (newValue) {
				if (angular.isArray(newValue)) {
					newValue.map(function(e){
					afterApply();
					e.name=$("#input-medium"+e.id).html();
					});
					$scope.nstartCount=newValue.length;
				}
			}, true);
	
			$scope.$watch('inProgress', function (newValue) {
				if (angular.isArray(newValue)) {
					newValue.map(function(e){
						afterApply();
						e.name=$("#input-medium"+e.id).html();
					});
					$scope.inProgressCount=newValue.length;
				}
			}, true);
	
			$scope.$watch('test', function (newValue) {
				if (angular.isArray(newValue)) {
					newValue.map(function(e){
						afterApply();
						e.name=$("#input-medium"+e.id).html();
					});
					$scope.testCount=newValue.length;
				}
			}, true);
	
			$scope.$watch('done', function (newValue) {
				if (angular.isArray(newValue)) {
					newValue.map(function(e){
						afterApply();
						e.name=$("#input-medium"+e.id).html();
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
				var id = Date.now();
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

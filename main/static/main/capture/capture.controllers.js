'use string';

(function(){



	/*
	 * CaptureListCtrl
	 *
	 *
	 */

	function CaptureListCtrl($scope, CaptureFactory) {
		this.test = "SOCO!";

		this.active_jobs = CaptureFactory.getActiveJobs();

		this.archive = function(job) {
			console.log("archiving2 " + job.id);
		}		
	}
	CaptureListCtrl.$inject = ['$scope', 'CaptureFactory'];


	/*
	 * CaptureListItemCtrl
	 *
	 *
	 */

	function CaptureListItemCtrl($scope, CaptureFactory) {
		var self = this;

		console.log("capturelistitemctrl");
		console.dir(this);
		console.dir($scope);

		self.archive = function(job) {
			console.log("archiving " + job.id);

			CaptureFactory.archive(job);
		}


		self.onActionClicked = function(job, action) {
			console.log("action clicked: " + job.id );
		}
	}

	CaptureListItemCtrl.$inject = ['$scope', 'CaptureFactory'];



	/*
	 * CaptureRootCtrl
	 *
	 *
	 */

	function CaptureRootCtrl($stateParams, $scope, CaptureFactory) {
		$scope.test = "LKJ";
		$scope.model = CaptureFactory.get($stateParams.id);
	}

	CaptureRootCtrl.$inject = ['$stateParams', '$scope', 'CaptureFactory'];


	/*
	 * CaptureCreateTwitterCtrl
	 *
	 *
	 */

	function CaptureCreateTwitterCtrl($stateParams, $scope, CaptureFactory) {
		var vm = this;
		vm.test = "LKJ";
		vm.model = {"name": "", "terms": [], "georects": [], "selectedRectangle": null};
		vm.submit = function(){
			console.log("cookies")
		}
		$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
		$scope.drawingControlOptions = {
			position: google.maps.ControlPosition.TOP_CENTER,
			drawingModes: [
				google.maps.drawing.OverlayType.RECTANGLE
			],

		}

		vm.drawingOptions = {
			drawingMode: google.maps.drawing.OverlayType.RECTANGLE,
			rectangleOptions: { editable: true, draggable: true}
		}

		vm.rectangleClicked = function(rect, eventName, arguments, model){
			console.log("clicked")
			console.dir(rect)

		}
		vm.drawingManagerControl = {};

		$scope.$watch('$scope.drawingControlOptions.getDrawingManager', function(val) {
			if (!$scope.drawingControlOptions.getDrawingManager) {
				return;
			}

			google.maps.event.addListener($scope.drawingControlOptions.getDrawingManager(), 'circlecomplete', function (e) {
				console.log(e.getBounds());
			});
		});
	}

	CaptureCreateTwitterCtrl.$inject = ['$stateParams', '$scope', 'CaptureFactory'];


	/*
	 * CaptureCreateRedditCtrl
	 *
	 *
	 */

	function CaptureCreateRedditCtrl($stateParams, $scope, CaptureFactory) {
		var vm = this;
		vm.test = "LKJ";
		vm.model = {"name": "", "terms": [], "subreddits": [], "threads": [], "chainrxn": false};
		vm.submit = function(){
			console.log("cookies")
		}
	}

	CaptureCreateRedditCtrl.$inject = ['$stateParams', '$scope', 'CaptureFactory'];


	/*
	 * CaptureEditCtrl
	 *
	 *
	 */

	function CaptureEditCtrl($stateParams, $scope, CaptureFactory) {
		var vm = this;

		vm.step = $stateParams.step;
		console.log(vm.step);
	}

	CaptureEditCtrl.$inject = ['$stateParams', '$scope', 'CaptureFactory'];


	/*
	 * CaptureDetailsViewCtrl
	 *
	 *
	 */

	function CaptureDetailsViewCtrl($stateParams, $scope, CaptureFactory) {
		this.vm = this;

		this.model = CaptureFactory.get($stateParams.id);
	}

	CaptureDetailsViewCtrl.$inject = ['$stateParams', '$scope', 'CaptureFactory'];


	/*
	 * CaptureGraphsViewCtrl
	 *
	 *
	 */

	function CaptureGraphsViewCtrl($stateParams, $scope, CaptureFactory) {
		this.vm = this;

		this.model = CaptureFactory.get($stateParams.id);

	}

	CaptureGraphsViewCtrl.$inject = ['$stateParams', '$scope', 'CaptureFactory'];


	/*
	 * CaptureTweetsViewCtrl
	 *
	 *
	 */

	function CaptureTweetsViewCtrl($stateParams, $scope, CaptureFactory) {
		this.vm = this;

		this.model = CaptureFactory.get($stateParams.id);
	}

	CaptureTweetsViewCtrl.$inject = ['$stateParams', '$scope', 'CaptureFactory'];


	/*
	 * CaptureTermHistoryViewCtrl
	 *
	 *
	 */

	function CaptureTermHistoryViewCtrl($stateParams, $scope, CaptureFactory) {
		this.vm = this;

		this.model = CaptureFactory.get($stateParams.id);
	}

	CaptureTermHistoryViewCtrl.$inject = ['$stateParams', '$scope', 'CaptureFactory'];	

	//
	//
	//
	//
	//
	

	angular.module('main.home')
		.controller('CaptureListCtrl', CaptureListCtrl)
		.controller('CaptureListItemCtrl', CaptureListItemCtrl)
		.controller('CaptureEditCtrl', CaptureEditCtrl)
		.controller('CaptureDetailsViewCtrl', CaptureDetailsViewCtrl)
		.controller('CaptureGraphsViewCtrl', CaptureGraphsViewCtrl)
		.controller('CaptureTweetsViewCtrl', CaptureTweetsViewCtrl)
		.controller('CaptureRootCtrl', CaptureRootCtrl)
		.controller('CaptureTermHistoryViewCtrl', CaptureTermHistoryViewCtrl)
		.controller('CaptureCreateTwitterCtrl', CaptureCreateTwitterCtrl)
		.controller('CaptureCreateRedditCtrl', CaptureCreateRedditCtrl)

})();
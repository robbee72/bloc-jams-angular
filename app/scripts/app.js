myAppModule.config(function($stateProvider, $locationProvider) {

 	    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
     	});
     	
		$stateProvider
			.state('landing', {
		    	url: '/landing',
		    	controller: 'Landing.controller',
		    	templateUrl: '/templates/landing.html'
			})
			.state('', {
		        url: '/album',
		        controller: 'Album.controller',
		        templateUrl: '/templates/album.html'
      		})
      		.state('collection', {
          		url: '/collection',
          		controller: 'Collection.controller',
          		templateUrl: '/templates/collection.html'
      		});
 });
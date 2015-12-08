var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ui-notification', 'uiGmapgoogle-maps']);

//user test
var userTest = {
	  username : '',
      lname : 'Johnston',
      fname : 'Bob', 
      adress : '1 rue de la Joie',
      phone : "06 66 66 66 66",
      mail : "bobby@gmail.com",
      rib : "CECIESTUNRIB",
      droits : "1600€",
      family : {
      	1 : {
      		lname : 'Johnston',
      		fname : 'Bobette',
      		birth : new Date("1980-12-20"),
      		link : 'conjoint(e)',
      		droits : "1200€"
      	},
      	2 : {
      		lname : 'Johnston',
      		fname : 'Johnny',
      		birth : new Date('2010-01-30'),
      		link : 'enfant',
      		droits : '1200€'
      	}
      }
    }

//routes
app.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'pages/home.html',
		controller: 'homeController'
	})
	.when('/profile', {
		templateUrl: 'pages/profile.html',
		controller: 'profileController'
	})
	.otherwise({
        redirectTo: '/home'
      });
});

//gmaps
app.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyA2-ROtPhNdeqH4njk6EwiiYvQHaLf_Ox8',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
})
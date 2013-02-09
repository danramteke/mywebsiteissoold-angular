'use strict';

MyWebsiteIsSoOld.Display.controller('TweetController', function($rootScope, $scope, $log, TweetStore) {
	$log.log("running TweetController");
	$scope.tweets = TweetStore.tweets;


});

'use strict';

MyWebsiteIsSoOld.Display.controller('TweetController', function($rootScope, $scope, $log, TweetStore) {
	$scope.tweets = function() {
    return TweetStore.getTweets();
  }
});

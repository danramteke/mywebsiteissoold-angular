'use strict';

MyWebsiteIsSoOld.Display.controller('TweetController', function($rootScope, $scope, $log, TweetStore) {
  $scope.currentIndex = 0;
  $scope.currentTweet = function() {
    if(TweetStore.hasTweets()) {
      return TweetStore.getTweet($scope.currentIndex);
    } else {
      return {}
    }
  };
  
  $scope.nextTweet = function() {
    $scope.currentIndex += 1;
  }
});

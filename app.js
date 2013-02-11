'use strict';

var MyWebsiteIsSoOld = angular.module("mywebsiteissoold", ['ng', 'mywebsiteissoold.display', 'mywebsiteissoold.retrieve'])
MyWebsiteIsSoOld.Display = angular.module('mywebsiteissoold.display', []);
MyWebsiteIsSoOld.Retrieve = angular.module('mywebsiteissoold.retrieve', []);


MyWebsiteIsSoOld.run(function($rootScope, $log, FetchTweetsService, TweetStore){
	$log.log("running app");
  FetchTweetsService.loadTweets(TweetStore);
});



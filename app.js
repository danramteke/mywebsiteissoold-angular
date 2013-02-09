'use strict';

var MyWebsiteIsSoOld = MyWebsiteIsSoOld || {};

MyWebsiteIsSoOld.Display = angular.module('mywebsiteissoold.display', []);
MyWebsiteIsSoOld.Retrieve = angular.module('mywebsiteissoold.retrieve', []);

angular.module("mywebsiteissoold", ['ng', 'mywebsiteissoold.display', 'mywebsiteissoold.retrieve'])
.run(function($rootScope, $log, $injector, FetchTweetsService, TweetStore){
	$log.log("running run");
	var tweets = FetchTweetsService.loadTweets();
	TweetStore.updateTweets(tweets);
});



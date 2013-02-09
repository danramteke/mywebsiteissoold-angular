'use strict';

MyWebsiteIsSoOld.Display.factory('TweetStore', function($rootScope, $log){
	$log.log("running TweetStore");
	
	return {
		tweets: [],
		updateTweets: function(newTweets){
			this.tweets = newTweets;
		}
	}
	
});
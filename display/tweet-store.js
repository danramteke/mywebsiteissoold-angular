'use strict';

MyWebsiteIsSoOld.Display.factory('TweetStore', function($log){
	
	return {
		tweets: [],
		updateTweets: function(newTweets){
      $log.log("tweet store got new tweets");
			this.tweets = newTweets;
		}
	}
	
});
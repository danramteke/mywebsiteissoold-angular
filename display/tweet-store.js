'use strict';

MyWebsiteIsSoOld.Display.factory('TweetStore', function($log){
	
	return {
		tweets: [],
		updateTweets: function(newTweets){
      $log.log("tweet store got new tweets");
			this.tweets = newTweets;
		},
    getTweets: function(){
      return this.tweets;
    },
    hasTweets: function(){
      return this.tweets.length > 0;
    },
    getTweet: function(index){
      return this.tweets[index%this.tweets.length];
    }
	}
	
});
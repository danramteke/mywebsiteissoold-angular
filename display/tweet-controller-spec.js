'use strict';

describe("TweetController", function(){
	var controller, scope, tweetStore, tweets;
	
	beforeEach(module('mywebsiteissoold.display'));
	beforeEach(inject(function($controller){
    tweets = ["@aedison", "@kellyoxford", "@biorhythmist"];
		tweetStore = {tweets: tweets}
    scope = {};
    controller = $controller('TweetController', {TweetStore:tweetStore, $scope:scope})
	}))
	
	it("exposes tweets", function(){
		expect(tweets.length).toBe(scope.tweets.length);
    for(var i = 0; i < tweets.length; i++){
      	expect(scope.tweets[i]).toBe(tweets[i]);
    }
	});
	

});
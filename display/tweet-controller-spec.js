'use strict';

describe("TweetController", function(){
	var controller, scope, tweetStore, tweets;
	
	beforeEach(module('mywebsiteissoold.display'));
	beforeEach(inject(function($controller, TweetStore){
    TweetStore.updateTweets([
      {text:"a tweet"}, 
      {text:"a nother one"}
    ]);
    scope = {};
    controller = $controller('TweetController', {TweetStore:TweetStore, $scope:scope})
	}))
	
	it("exposes current tweet", function(){
		expect(scope.currentTweet().text).toBe("a tweet");
	});
	
	it("advances to second tweet", function(){
    scope.nextTweet();
		expect(scope.currentTweet().text).toBe("a nother one");
	});

});
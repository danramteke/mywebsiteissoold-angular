'use strict';

describe("TweetStore", function(){
	var tweetStore;
	
	beforeEach(module('mywebsiteissoold.display'));
	beforeEach(inject(function(TweetStore){
		tweetStore = TweetStore;
	}))
	
	it("initially is empty", function(){
		expect(tweetStore.tweets.length).toBe(0);
	});
	
	it("gets updated with tweets", function(){
		tweetStore.updateTweets(["","","",""])
		expect(tweetStore.tweets.length).toBe(4);		
	});
});
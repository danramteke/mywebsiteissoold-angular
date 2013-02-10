'use strict';

describe("TweetStore", function(){
	var tweetStore;
	
	beforeEach(module('mywebsiteissoold.display'));
	beforeEach(inject(function(TweetStore){
		tweetStore = TweetStore;
	}))
	
	it("initially is empty", function(){
		expect(tweetStore.hasTweets()).toBe(false);
	});
	
	it("gets updated with tweets", function(){
		tweetStore.updateTweets([{},{},{},{}])
		expect(tweetStore.hasTweets()).toBe(true);
		expect(tweetStore.getSize()).toBe(4);
	});
  
  it("gets a tweet by index", function(){
		tweetStore.updateTweets([{},{},{text:"this one!"},{}])
		expect(tweetStore.getTweet(2).text).toBe("this one!");
  });
  
  it("loops around if the index is too big", function(){
		tweetStore.updateTweets([{},{},{text:"this one!"},{}])
		expect(tweetStore.getTweet(6).text).toBe("this one!");
		expect(tweetStore.getTweet(10).text).toBe("this one!");
  });
});
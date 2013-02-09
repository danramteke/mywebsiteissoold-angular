'use strict';

describe("FetchTweetsService", function(){
	var service;
	
	beforeEach(module('mywebsiteissoold.retrieve'));
	beforeEach(inject(function(FetchTweetsService){
		service = FetchTweetsService;
	}))
	
	it("returns a constant", function(){
    var loadedTweets = service.loadTweets();
		expect(loadedTweets[0]).toBe("tweet 1");
		expect(loadedTweets[1]).toBe("tweet 2");
		expect(loadedTweets.length).toBe(2);
	});
	

});
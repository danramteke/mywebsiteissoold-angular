'use strict';

describe("FetchTweetsService", function(){
	var service, mockTweetStore;
	
	beforeEach(module('mywebsiteissoold.retrieve'));
	beforeEach(inject(function(FetchTweetsService){
		service = FetchTweetsService;
    mockTweetStore = {updateTweets: function() {}};
    spyOn(mockTweetStore, "updateTweets").andCallThrough();
	}))
	
	it("updates tweets on store", inject(function($httpBackend){
    $httpBackend.expectGET(service.url).respond({tweets:"some tweety stuff"});
    service.loadTweets(mockTweetStore);

    $httpBackend.flush();
    expect(mockTweetStore.updateTweets).toHaveBeenCalledWith("some tweety stuff");
	}));
	


});
'use strict';

MyWebsiteIsSoOld.Retrieve.factory('FetchTweetsService', function($rootScope, $log, $http){
	return {
    url: "tweets.json",
		loadTweets: function(store) {

        $http.get(this.url).then(function (successResponse) { 
          store.updateTweets(successResponse.data.tweets); 
        }, function () {
          $log.error("Error in AJAX"); 
        }); 
      }
    }
});
'use strict';

MyWebsiteIsSoOld.Retrieve.factory('FetchTweetsService', function($rootScope, $log, $http){
	return {
    url: "tweets.json",
		loadTweets: function(store) {

        $http.get(this.url).then(function (successResponse) { 
          store.updateTweets(successResponse.data.tweets); 
        }, function () {
          $log.error("\tError in AJAX"); 
          throw {type:"error", message:"Error in AJAX", fatal:false}; 
        }); 
      }
    }
});
'use strict';

MyWebsiteIsSoOld.Retrieve.factory('FetchTweetsService', function($rootScope, $log, $http){
  function shuffle(o){ 
      for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  };
	return {
    url: "tweets.json",
		loadTweets: function(store) {

        $http.get(this.url).then(function (successResponse) { 
          store.updateTweets(shuffle(successResponse.data.tweets));
        }, function () {
          $log.error("Error in AJAX"); 
        }); 
      }
    }
});
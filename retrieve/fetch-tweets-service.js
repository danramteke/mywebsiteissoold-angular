'use strict';

MyWebsiteIsSoOld.Retrieve.factory('FetchTweetsService', function($rootScope, $log){
	$log.log("running FetchTweets");
	var url = "https://raw.github.com/danramteke/mywebsiteissoold/master/data.yml";
	return {
		loadTweets: function() {
			$log.log("loading tweets");
			return ["tweet 1", "tweet 2"];
		}
	}
	
});
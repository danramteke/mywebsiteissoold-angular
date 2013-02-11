mywebsiteissoold-angular
========================

Sample app to show off angular and testing.


$ python -m SimpleHTTPServer

goto localhost:8000 in $BROWSER, or localhost:8000/jasmine.html for tests





I packaged things by feature instead of by layer, mostly to show off dependencies in Angular. There's two features: Loading shuffled tweets, and displaying them. When the app loads up, it asks the FetchTweetsService to load some shuffled tweets into the TweetStore.

Display
=======
I took the liberty of including the templating for the app directly in index.hml because it's so small. There's a controller that keeps track of an index. It's a thin wrapper around the TweetStore, which is itself a thin wrapper around an array of tweets.

Notice the spec for the Controller injects a real non-mock version of the TweetStore, but then uses mock tweets.

Retrieve
========

Usually, this would be hitting a real service and pass params and such. But a static file of JSON will do for this example. Notice how the Service is injected with $http but stubbing happens on the $httpBackend that Angular provides. 

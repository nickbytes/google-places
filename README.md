# Google Places API

Requirements
------------
* Create a web app (desktop or mobile)
* Provides query box and search button, then calls Google Places API
* Formats the results to give a good user experience

Explanation
------------
I created a web app that allows users to pick a type of place and location.

Results are displayed on a map and in a list. I think the Google Maps API is best experience in a desktop application – I find scrolling around or near Google Maps elements to be cumbersome. If users accidentally touch the map while scrolling, they could move the map center, rather than scroll on the page. For this reason, I left some padding on the sides in the mobile states.

The list demonstrates other possible information, in this case 'ratings', that can be pulled from the Google Places API. One could also pull pictures, open hours, street address, etc. I tried not to over think the UI, let users play with types of locations, and possible landmarks.

I really enjoy the tools used for this project.

* Sass with Bourbon + Neat + Bitters makes getting a project or prototype up and running quick and painless. They also provide some great mixins, though few are utilized here, and allow you to focus on your design rather than compatibility or CSS idiosyncrasies.
* I like HAML more and more each time I use it. Forget about closing tags. I like the Ruby feel to it.
* Concatenation and minification is essential for javascript and CSS, Gulp makes it easy.
* Browsersync + and external monitor feels like pure magic.
* Using Gulp for deploy tasks may be one of the most overlooked features – but adds so much happiness! Being able to say `gulp deploy` and send your project straight to Github Pages hosting is painless!


Includes
--------
* [Gulp](http://gulpjs.com): Converts files and task running
* [HAML](http://haml.info): Simple template markup
* *Javascript*
* [Sass](http://sass-lang.com):
  CSS with superpowers
* [Bourbon](http://bourbon.io):
  Sass mixin library
* [Neat](http://neat.bourbon.io):
  Semantic grid for Sass and Bourbon
* [Bitters](http://bitters.bourbon.io):
  Scaffold styles, variables and structure for Bourbon projects.
* [Express](http://expressjs.com): Lightweight Node web server

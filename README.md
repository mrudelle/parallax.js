parallax.js
===============

A light-weight though powerfull script to simply add a parallax effect to your webiste!

See live demo at http://mrudelle.github.io/parallax.js/

##The Curtain
**A good start for your show !**

The curtain fades upward when you start scrolling and will come back if you go to the top of the page. To call it from your code, just add `class="plx-curtain"` to your div.

##Floating div

Sometimes it's useful to make an information slightly appear when a particular element is close to the middle of the screen. Here comes the floating element. Just add `class="plx-float"` to your div and select the target element: `plx-ref="#item-2"`.

Plus you can chose to make the floating element fade when it goes away by adding: `plx-fade="true"` like on the [live demo](http://mrudelle.github.io/parallax.js/).

When specifiying the target you can put any correct element selector, for instance `#part-2`, `input:focus` or even `.class[attr$="value"]`

##Parallax Images

Finally, The most interesting bit! 
Thanks to the class `class="plx-img"`, just define the speed: `plx-speed="0.3"`. And you have a parallax background image! 

Don't forget to set the background image: `style="background-image: url('img/iceland.jpg')"` And you're done! 

You can add offset : `plx-offset="-100"` in px, and parallax.js will match the top of the image (plus offset) to the top of your div when it reaches the top!

##Install

You want to use it on your website? 

No Problem! you can find **parallax.min.js** in the build folder, also don't forget include the **parallax.css** file that sets few basic style in order to make the app work correctly. 

NOTE: This stylesheet will be hopefully removed as it's almost empty and annoying. Keep in touch for latest release! 

Don't forget to share your user-experience and suggest improvement [here](https://github.com/mrudelle/parallax.js/issues)

Or even contribute !

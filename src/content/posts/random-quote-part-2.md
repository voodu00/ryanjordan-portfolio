---
title: 'Random Quote Part II'
description: "In part II of this tutorial, we will get this random quote generator working with some jQuery. If you haven't read part I, I would suggest doing so now as I won't be covering any styling in this part of the tutorial."
image: '../assets/Random_Quote_Generator-5.png'
createdAt: 2015-11-30T12:56:00Z
tags:
  - flexbox
  - javascript
  - jquery
draft: false
---

In part II of this tutorial, we will get this random quote generator working with some jQuery. If you haven't read [part I](/post/random-quote-part-I/), I would suggest doing so now as I won't be covering any styling in this part of the tutorial.

<!--more-->

So the html looks like this:

```html
<div class="container">
	<h2>Random Quote Generator</h2>
	<a
		href="#"
		id="btn-quote"
		>Generate New Quote</a
	>
	<blockquote>
		<p id="quoteText"></p>
		<cite
			>&mdash; <span id="quoteAuthor"></span>
			<span id="btn-tweet">
				<i class="fa fa-twitter"></i>
			</span>
		</cite>
	</blockquote>
	<div class="load">
		<i class="fa fa-spinner fa-spin"></i>
	</div>
</div>
<footer>
	Powered by&nbsp; <a href="http://forismatic.com/en/">Forismatic</a>
</footer>
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="main.js"></script>
```

Notice how we have added the <code class="bash">script</code> tags at the end of the <code class="bash">body</code>. Also notice that in order to use jQuery, we have to reference it in our HTML. So, we add the following to our HTML:

```html
<script src="http://cdnjs.cloudflare.com/ajax/libs/jq<uery/2.1.3/jquery.min.js"></script>
```

## jQuery

It's time to add some jQuery. I've created a file called <code class="bash">main.js</code> in the root directory, to make things easier, and added:

```html
<script src="main.js"></script>
```

This tells the browser that we have an exterior JavaScript file it will need to look for.

Currently, if you followed along with the first tutorial, we have the following in our <code class="bash">main.js</code> file.

```javascript
$(document).ready(function () {
	// Hide the loading icon
	$('.load').hide()
})
```

This hides the loading icon once the page is loaded. The <code class="language-javascript">$('.load')</code> finds the elements with the class of <code class="bash">load</code> and hides them with jQuery's <code class="language-javascript">.hide()</code> method. For the time being, lets remove the <code class="language-javascript">$('.load').hide();</code> so that our file now looks like:

```javascript
$(document).ready(function () {})
```

Now we want to hide the <code class="bash">blockquote</code> element and show the loading icon as the quote is loading. So we will add the following code.

```javascript
$(document).ready(function () {
	$('blockquote').hide()
	$('.load').show()
})
```

Once again, when the page loads, the browser locates the <code class="bash">blockquote</code> element and hides it with the <code class="language-javascript">.hide()</code> jQuery method. Then it finds the elements with the <code class="bash">load</code> class and makes it visible with the <code class="language-javascript">.show()</code> method. Now the <code class="bash">blockquote</code> should be hidden and the loading icon should be displayed.

## Get the quote

Let's write the function that gets the quote from [forismatic](http://forismatic.com/en/).

```javascript
$(document).ready(function () {
	// Hide the empty blockquote and show the loading icon.
	$('blockquote').hide()
	$('.load').show()
})

// Get the quote
var getQuote = function () {}
```

Inside the <code class="language-javascript">getQuote()</code> function we want to do the following:

- Hide the loading icon
- Show the blockquote element

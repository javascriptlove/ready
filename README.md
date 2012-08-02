ready
=========

A cross-browser way of handling the document onReady event.

Provides a way to set a function that will run after DOM is ready.

# Examples

A common way to use:

```
ready(function() {
	// we are ready
	console.log('ready!');
});
```

`ready` returns itself, so you can add another function right away:

```
ready(function(){
   console.log('ready 1');     
})(function() {
   console.log('ready 2'); 
});
```
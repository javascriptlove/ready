var ready = function(f) {
	if (!ready.r) ready.r = [];
	if (!ready.t) ready.t = null;
	ready.r.push(f);
	var run = function() {
		clearTimeout(ready.t);
		while (ready.r.length)
			ready.r.splice(0,1)[0]();
	}
	var check = function() {
		if (document && document.getElementsByTagName && document.getElementById && document.body) {
			run();
		} else {
			ready.t = setTimeout(check, 13);
		}
	}
	if (ready.t == null)
		check();
	return ready;
};
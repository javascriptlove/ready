var ready = function(f) {
	if (!ready.r) ready.r = [];
	ready.r.push(f);
	var run = function() {
		clearTimeout(t);
		while (ready.r.length)
			ready.r.splice(0,1)[0]();
	}
	var t = null;
	var check = function() {
		if (document && document.getElementsByTagName && document.getElementById && document.body) {
			run();
		} else {
			t = setTimeout(check, 13);
		}
	}
	check();
	return ready;
};
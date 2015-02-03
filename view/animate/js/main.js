require.config({
	baseUrl: "../../",
	paths: {
		"animate": "core/animate",
		"tween": "core/tween"
	}
});
require(["animate", "tween"], function(animate, tween) {
	var htmlStr = '<div id="exampleBox"';
	for(var key in tween) {
		htmlStr += '<div class="' + key + '">' + key + '</div>'
	}
	htmlStr += '</div>'
	document.body.appendChild(htmlStr)

	var animElem = document.getElementById('item1');
	animate.start(animElem, 'left', '500px', 5000, 60, 'easeInQuad');
	var animElem = document.getElementById('item2');
	animate.start(animElem, 'left', '500px', 5000, 60, 'easeOutBounce');
	var animElem = document.getElementById('item3');
	animate.start(animElem, 'left', '500px', 5000, 60, 'easeInOutBack');
});
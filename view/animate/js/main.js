require.config({
	baseUrl: "../../",
	paths: {
		"animate": "core/animate"
	}
});
require(["animate"], function(animate) {
	var animElem = document.getElementById('item1');
	animate.start(animElem, 'left', '500px', 5000, 60);
	// var animElem = document.getElementById('item2');
	// animate.start(animElem, 'left', '500px', 5000, 30);
	// var animElem = document.getElementById('item3');
	// animate.start(animElem, 'left', '500px', 5000, 10);
});
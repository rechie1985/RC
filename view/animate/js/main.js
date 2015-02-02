require.config({
	baseUrl: "../../",
	paths: {
		"animate": "core/animate"
	}
});
require(["animate"], function(animate) {
	console.log(animate);
	var animElem = document.getElementById('item1');
	animate.run(animElem, 'left', '500px', 5000, 60);
	var animElem = document.getElementById('item2');
	animate.run(animElem, 'left', '500px', 5000, 30);
	var animElem = document.getElementById('item3');
	animate.run(animElem, 'left', '500px', 5000, 10);
});
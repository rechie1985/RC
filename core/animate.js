define(['RC'], functin(RC) {
	var Animate = function(elem, styleName, endValue, delay) {
		this.fps = 60;
		this._timeId = null;
		this.timeoutDelay = 1000 / fps;
		this.prevTime = +new Date();
		this.curTime = +new Date();
	}
	Animate.prototype.init = function() {
		var numReg = /[-]?\d+/ig;
		var originValue = elem[styleName]
	};

	Animate.prototype.run = function() {
		var that = this;
		if(that._timeId === null) {
			that._timeId = setInterval(function() {
				that.draw();
			}, timeoutDelay);
		}
	};
	Animate.prototype.draw = function() {
		this.curTime = +new Date();
		var dt = this.curTime - this.prevTime;
		prevTime = curTime;
		this.updateElem(dt);
	};

	Animate.prototype.updateElem = function(dt) {

	}

	Animate.prototype.stop = function() {

	};
});
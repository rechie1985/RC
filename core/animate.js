define(['util/GlobalUtil'], function(GlobalUtil) {
	var Animate = function(elem, styleName, endValue, delay, fps) {
		this.init(elem, styleName, endValue, delay, fps);
	}
	/**
	 * 初始化计算出需要的各种值
	 * @return {[type]} [description]
	 */
	Animate.prototype.init = function(elem, styleName, endValue, delay, fps) {
		this.fps = fps || 60;
		this._timeId = null;
		this.timeoutDelay = 1000 / this.fps;
		this.prevTime = +new Date();
		this.curTime = +new Date();
		this.delayTime = delay;
		this.styleName = styleName;
		this.elem = elem;
		this.startTime = +new Date();
		var originOffset = this.getNumber(elem.style[styleName]);
		var endOffset = this.getNumber(endValue);
		this.endOffset = endOffset;
		// 每毫秒的位移量
		this.pOffset = (endOffset - originOffset) / delay;
		this.curOffset = originOffset;
	};

	Animate.prototype.getNumber = function(str) {
		var num = 0;
		if(GlobalUtil.isString(str)) {
			var numReg = /[-]?\d+/ig;
			var numList = str.match(numReg);
			if(GlobalUtil.isArray(numList)) {
				try{
					num = parseInt(numList[0]);
				} catch(e) {
					num = 0;
				}
			}
		}
		return num;
	}

	/**
	 * 开始动画方法
	 * @return {[type]} [description]
	 */
	Animate.prototype.run = function() {
		var _this = this;
		function loop() {
            _this.curTime = +new Date;
            var dt = _this.curTime - _this.prevTime; // 计算时间差
            // 判断结束
           	if(_this.curTime - _this.startTime > this.delayTime) {
           		// 调整最终位置
           		_this.resetEndValue();
           		clearInterval(_this._timeId);
           		_this._timeId = null;
           		return;
           	}
            _this.prevTime = _this.curTime;
			_this.update(dt);
			_this.draw();
		}
		if(_this._timeId === null) {
			_this._timeId = setInterval(function() {
				loop.call(_this);
			}, _this.timeoutDelay);
		}
	};
	Animate.prototype.resetEndValue = function() {
		this.curOffset = this.endOffset;
		this.draw();
	}

	/**
	 * 更新当前位置
	 * @param  {Number} dt 毫秒
	 * @return {[type]}    [description]
	 */
	Animate.prototype.update = function(dt) {
		this.curOffset += this.pOffset * dt;
	}

	Animate.prototype.draw = function() {
		console.log('draw', this.curOffset)
		this.elem.style[this.styleName] = this.curOffset + 'px'
	};
	Animate.prototype.stop = function() {

	};

	return {
		run: function(elem, styleName, endValue, delay, fps) {
			new Animate(elem, styleName, endValue, delay, fps).run();
		}
	}
});
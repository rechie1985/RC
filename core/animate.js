define(['util/GlobalUtil'], function(GlobalUtil) {
	var Animate = function(elem, styleName, endValue, duration, fps) {
		this.elem = elem;
		this.styleName = styleName;
		this.endValue = endValue;
		this.duration = duration;
		this.fps = fps || 60;
	}
	/**
	 * 动画开始时，初始化计算出需要的各种值
	 * @return {[type]} [description]
	 */
	Animate.prototype.init = function() {
		this.startTime = this.prevTime = +new Date();
		// loop函数两次执行的时间间隔
		this.acc = 0;
		this._timeId = null;
		this.timeoutDelay = 1000 / this.fps;
		var originOffset = this.getNumber(this.elem.style[this.styleName]);
		this.endOffset = this.getNumber(this.endValue);
		// 每毫秒的位移量
		this.pOffset = (this.endOffset - originOffset) / this.duration;
		this.curOffset = originOffset;
	};

	/**
	 * 计算出当前字符串中的第一个数字
	 * @param  {String} str 
	 * @return {Number} 获取到的数字，默认为0    
	 */
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
	Animate.prototype.start = function() {
		var self = this;
		// 初始化相关公用参数
		self.init();
		if(self._timeId === null) {
			self._timeId = setInterval(function() {
				self.loop();
			}, self.timeoutDelay);
		}
	};

	/**
	 * 每帧的执行方法，基于分片时间实现
	 * @return {} 
	 */
	Animate.prototype.loop = function() {
        var curTime = +new Date;
        // 判断结束
       	if(curTime - this.startTime <  this.duration) {
           	 // 计算时间差
            var dt = curTime - this.prevTime;
            this.prevTime = curTime;
            // 累积过去的时间
            this.acc += dt; 
            // 当时间大于我们的固定的时间片的时候可以进行更新
            while(this.acc >= this.timeoutDelay) { 
				this.update(this.timeoutDelay);
                this.acc -= this.timeoutDelay;
           	}
			this.draw();
       	} else {
       		// 调整最终位置
       		this.setToEnd();
       		clearInterval(this._timeId);
       		this._timeId = null;
       	}
	}

	/**
	 * 直接跳到最后一帧
	 */
	Animate.prototype.setToEnd = function() {
		this.curOffset = this.endOffset;
		this.draw();
	}

	/**
	 * 更新当前位置
	 * @param  {Number} dt 毫秒
	 * @return {}    
	 */
	Animate.prototype.update = function(dt) {
		this.curOffset += this.pOffset * dt;
	}

	/**
	 * 更新页面
	 * @return {} 
	 */
	Animate.prototype.draw = function() {
		this.elem.style[this.styleName] = this.curOffset + 'px'
	};

	/**
	 * 停止动画
	 * @return {} 
	 */
	Animate.prototype.stop = function() {
   		clearInterval(this._timeId);
   		this._timeId = null;
	};


	

	return {
		start: function(elem, styleName, endValue, duration, fps) {
			new Animate(elem, styleName, endValue, duration, fps).start();
		}
	}
});
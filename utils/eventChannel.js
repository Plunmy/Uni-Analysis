class Channel {
	constructor(arg) {
		type: 'Test'
	}
	// 接收值事件
	eventOn(that, emitName, feedback) {
		// #ifdef APP-NVUE
		const eventChannel = that.$scope.eventChannel; // 兼容APP-NVUE
		// #endif
		// #ifndef APP-NVUE
		const eventChannel = that.getOpenerEventChannel();
		// #endif
		let result = null;
		console.log('that:', that);
		console.log('eventChannel:', eventChannel);
		eventChannel.on(emitName, res => {
			// console.log(res);
			result = res;
		})
		return feedback(result);
	}
	// 发送事件 不跳页面
	eventEmit(that, emitName, data) {
		// #ifdef APP-NVUE
		const eventChannel = that.$scope.eventChannel; // 兼容APP-NVUE
		// #endif
		// #ifndef APP-NVUE
		const eventChannel = that.getOpenerEventChannel();
		// #endif
		// console.log('emitName:', data);

		eventChannel.emit(emitName, data);
	}
	// 跳转页面并传参
	navigateEmit(url, emitName, data, eventName = '', callback = () => {}) {
		uni.navigateTo({
			url: url,
			animationDuration: 400,
			success(res) {
				res.eventChannel.emit(emitName, data);
			},
			events: {
				[eventName]: function(result) {
					// console.log('[eventName]', eventName, result);
					return callback(result);
				}
			}
		})
	}
}

export default Channel

import _this from "vue"


class Channel {
	constructor(arg) {
		type: 'uni-app'
	}
	eventOn(emitName, feedback = (res) => {}) {
		console.log(_this);
		// #ifdef APP-NVUE
		const eventChannel = _this.$scope.eventChannel; // 兼容APP-NVUE
		// #endif
		// #ifndef APP-NVUE
		const eventChannel = _this.getOpenerEventChannel();
		// #endif
		let result = null;
		eventChannel.on(emitName, res => {
			// console.log(res);
			// this.commonParam = res;
			result = res;
		})
		return feedback(result);
	}
}

export default Channel

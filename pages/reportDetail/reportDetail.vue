<template>
	<view>
		<view>
			{{commonParam.title}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				commonParam: {
					title: 'sss'
				}
			};
		},
		onInit() {},
		onLoad(result) {
		// let chel = new Channel();
		// console.log(chel);
		// chel.eventOn('other', (res) => {
		// 	console.log(res);
		// });
			// console.log(result?.id);
			// // #ifdef APP-NVUE
			// const eventChannel = this.$scope.eventChannel; // 兼容APP-NVUE
			// // #endif
			// // #ifndef APP-NVUE
			// const eventChannel = this.getOpenerEventChannel();
			// // #endif
			// const eventChannel = this.$scope.eventChannel;
			// const eventChannel = this.getOpenerEventChannel();
			// const eventChannel = this.getOpenerEventChannel();
			// eventChannel.on('tranferParam', res => {
			// 	// console.log(res);
			// 	this.commonParam = res;
			// })
			console.log('this:',this);
			this.$channel.eventOn('tranferParam',(res)=>{
				console.log(res);
			})
		},
		onReady() {
			// console.log('init');
		},
		mounted() {
			// uni.$once('tranferParam', res => {
			// 	this.commonParam = res;
			// 	console.log(this.commonParam);
			// })
		}
	}
</script>

<style lang="scss">

</style>

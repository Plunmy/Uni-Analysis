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
			// 取值方法
			this.$channel.eventOn(this, 'tranferParam', (res) => {
				// console.log(res);
				this.commonParam.title = res.title;
				console.log(res.title);
			})
			// 及向前页面再次通信的方法
			this.$channel.eventEmit(this, 'backData', {
				name: '1',
				type: 'backData'
			})
		},
		onReady() {
			// console.log('init');
		},
		mounted() {}
	}
</script>

<style lang="scss">

</style>

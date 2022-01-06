<template>
	<view class="toolPage">
		<u-grid :border="false" @click="gridEvent" col="3">
			<u-grid-item v-for="(item,i) in gridList" :key='i'>
				<u-icon :name="item.name" :size="22"></u-icon>
				<text class="grid-text">{{item.title}}</text>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gridList: [{
						name: 'photo',
						title: '图片'
					},
					{
						name: 'map-fill',
						title: '地图',
						router: 'map'
					}, {
						name: 'email',
						title: '邮箱'
					}, {
						name: 'bell-fill',
						title: '提醒'
					}, {
						name: 'server-fill',
						title: '客服'
					}, {
						name: 'camera-fill',
						title: '图表',
						router: 'charts'
					}
				]
			};
		},
		methods: {
			gridEvent(i) {
				// console.log(this.gridList[i]);
				// uni.navigateTo({
				// 	url: this.gridList[i].router
				// });
				this.$channel.navigateEmit(this.gridList[i].router,'transfer',this.gridList[i])
			},
		}
	}
</script>

<style lang="scss">
	.toolPage {
		height: 100vh;

		.u-grid {
			height: 100vh;
			width: 100vw;

			.u-grid-item {
				height: 32vh;
			}
		}
	}
</style>

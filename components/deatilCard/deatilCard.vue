<template>
	<view>
		<uni-card :title="'时间: '+detailItem.time" :sub-title="'群体: '+detailItem.person">
			<text>{{'主题: '+detailItem.title}}</text>
			<!-- <view style="height: 2px;width: 100%;background-color: #c1c1c1;opacity: .5; border-radius: 5px;"></view> -->
			<view style="display: flex; flex-wrap: nowrap;">
				<button class="cardBtn" @click="gotoModule()" type="default"
					style="background-color: #FFFFFF;color: #07C160;">查看模板</button>
				<button class="cardBtn" @click="gotoReport()" type="default"
					style="background-color: #16c174;color: #FFFFFF;">查看报告</button>
			</view>
		</uni-card>
	</view>
</template>

<script>
	export default {
		name: "deatilCard",
		props: {
			detailItem: {
				type: Object,
				default: {
					title: '',
					time: '',
					person: '',
				}
			}
		},
		data() {
			return {

			};
		},
		methods: {
			gotoReport() {
				uni.$emit('feedBack', this.detailItem, 'report')
			},
			gotoModule() {
				uni.$emit('feedBack', this.detailItem, 'module')
			}
		},
		onReady() {
			// console.log(this.detailItem);
		}
	}
</script>

<style lang="scss">
	.cardBtn {
		height: 30px;
		line-height: 30px;
		text-align: center;
		width: 65px;
		display: inline-block;
		font-size: 14px;
		padding: 0;
		margin-right: 5px;
		border-radius: 5px;
	}
</style>

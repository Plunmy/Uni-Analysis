<template>
	<view class="my">
		<view class="headerInfo">
			<u--image src="https://cdn.uviewui.com/uview/album/1.jpg" width="80px" height="80px" shape="circle">
			</u--image>
			<view class="headerName">
				<text>邹心安</text>
				<u-icon size="30" name="edit-pen-fill"></u-icon>
			</view>
		</view>
		<view class="contentInfo">
			<view class="contentTop">
				<text>分析天数 </text>
				<text class="contentCount">{{analasisDay}} </text>
				<text>|</text>
				<text>分析情况</text>
				<text class="contentCount">{{analasisNum}} </text>
			</view>
			<view class="contentBottom">
				<u-icon size="25" name="attach"></u-icon>
				<text>绑定账号</text>
			</view>
		</view>
		<view class="moreTool">
			<view class="toolContent">
				<text>更多应用</text>
				<!--  	@scrolltolower="lower" @scroll="scroll" @scrolltoupper="upper" -->
				<scroll-view :scroll-top="scrollTop" :scroll-y="true" :enable-flex='true' class="scroll-Y tool">
					<!-- 这里是实际排序 -->
					<view class="toolItem" v-for="(item,i) in scrollList" :key='i'>
						<text>{{item.text}}</text>
						<u-icon size="25" :name="item.icon"></u-icon>
					</view>
					<!-- 此处进行是否整除判断以及 计算剩余盒子 -->
					<template v-if="scrollList.length%3">
						<view class="toolItem" v-for="(item,i) in (3-(scrollList.length%3))" :key='i'>
						</view>
					</template>
				</scroll-view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				analasisDay: 0,
				analasisNum: 0,
				scrollTop: 0,
				scrollList: [{
						text: '删除',
						icon: 'trash-fill',
					},
					{
						text: '收藏',
						icon: 'star-fill',
					},
					{
						text: '定位',
						icon: 'map-fill',
					},
					{
						text: '护眼模式',
						icon: 'eye-fill',
					},
					{
						text: '物流',
						icon: 'car-fill',
					},
					{
						text: '警告',
						icon: 'error-circle-fill',
					},
					{
						text: '礼包',
						icon: 'coupon-fill',
					},
					{
						text: '置顶',
						icon: 'pushpin-fill',
					},
					{
						text: '礼品',
						icon: 'gift-fill',
					},
					{
						text: '安卓',
						icon: 'android-fill',
					},
					{
						text: '添加',
						icon: 'plus-square-fill',
					},
					{
						text: '相机',
						icon: 'camera-fill',
					},
					{
						text: '物流',
						icon: 'car-fill',
					},
					{
						text: '警告',
						icon: 'error-circle-fill',
					},
					{
						text: '礼包',
						icon: 'coupon-fill',
					},
					{
						text: '置顶',
						icon: 'pushpin-fill',
					},
					{
						text: '礼品',
						icon: 'gift-fill',
					},
					{
						text: '安卓',
						icon: 'android-fill',
					},
					{
						text: '添加',
						icon: 'plus-square-fill',
					}
				]
			};
		},
		onLoad() {}
	}
</script>

<style lang="scss">
	.my {
		.headerInfo {
			padding-top: 5vh;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			.headerName {
				display: flex;
				align-items: center;
				justify-content: center;
				margin-top: 10px;

				>text {
					font-size: 20px;
				}
			}
		}

		.contentInfo {
			margin-top: 3vh;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			>view {
				width: 70vw;
				display: flex;
				justify-content: space-between;
			}

			.contentTop {
				font-size: 18px;

				.contentCount {
					color: #1cbc9c;
					font-size: 20px;
				}
			}

			.contentBottom {
				margin-top: 2vh;
				padding-left: 1vw;
				width: 70vw;
				justify-content: flex-start;
				align-items: center;
				height: 8vh;
				background-color: #eeedf2;
				border-radius: 12px;
				font-size: 20px;

				>text {
					margin-left: 10px;
				}
			}
		}

		.moreTool {
			margin-top: 3vh;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.toolContent {
				width: 70vw;
				background-color: #eeedf2;
				border-radius: 15px;
				height: 45vh;
				display: flex;
				flex-direction: column;
				align-items: center;
				overflow: hidden;

				.tool {
					display: flex;
					flex-wrap: wrap;
					flex-direction: row;
					height: 87%;
					justify-content: space-around;

					.toolItem {
						height: 13vh;
						width: 12vh;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;

						text {
							margin: 5px 0;
						}
					}
				}

				>text {
					font-size: 20px;
					margin: 5px 0;
				}
			}
		}
	}
</style>

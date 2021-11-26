<template>
	<view class="infoCard">
		<view class="leftDiv">
			<image src="../../static/images/examType.png" mode="scaleToFill"></image>
		</view>
		<view class="centerDiv">
			<view class="centerTop">
				<text>{{cardItem.title}}</text>
				<image :src="'../../static/images/school_'+cardItem.school+'.png'" mode="scaleToFill"></image>
			</view>
			<view class="centerBottom">
				<text class="hiddenText" style="width: 34%;">
					{{cardItem.time}}
				</text>
				<text class="hiddenText" style="width: auto;">
					{{cardItem.grade}}
				</text>
				<text class="hiddenText" style="width: 110px;">
					{{cardItem.subject}}
				</text>
			</view>
		</view>
		<view class="rightDiv">
			<button type="default" class="btnColor" @click="checkDetail">查看分析</button>
		</view>
		<!-- <uni-popup ref="cardPopup" type="right" background-color="#fff">
			{{cardItem.title}}
			底部弹出 Popup
		</uni-popup> -->
		<uni-drawer ref="cradDrawer" class="infoDrawer" mode="right" :mask-click="true">
			<uni-title type="h2" color='#666666' title="请选择分析报表" align="center"></uni-title>
			<scroll-view scroll-y="true" style="height: 100%;">
				<view v-for="(item,index) in cardItem.detailItem" :key='index'>
					<!-- {{cardItem.title+item}} -->
					<deatilCard :detailItem="item"></deatilCard>
				</view>
			</scroll-view>
		</uni-drawer>
		<uni-popup ref="noMessagePopup" type="message">
			<popup-message type="error" message="暂无分析" :duration="2000"></popup-message>
		</uni-popup>
	</view>
</template>

<script>
	import PopupMessage from "@/uni_modules/uni-popup/components/uni-popup-message/uni-popup-message"
	export default {
		name: 'infoCard',
		data() {
			return {}
		},
		components: {
			PopupMessage
		},
		props: {
			cardItem: {
				type: Object,
				default: {
					title: '无',
					time: '2021-11-25',
					grade: '未知',
					subject: '未知',
					school:'single',
					detailItem: {
						titel: '无',
						time: '2020-11-15',
						person: '学生、体育生',
					},
				}
			}
		},
		methods: {
			// showMsg() {
			// 	// console.log('ss');
			// 	let params = {
			// 		type: 'success',
			// 		message: "success",
			// 	};
			// 	// uview UI
			// 	this.$refs.uToast.show({
			// 		...params
			// 	})
			// },
			checkDetail() {
				// console.log(this.cardItem);
				if (!this.cardItem.hasOwnProperty('detailItem')) {
					this.$refs.noMessagePopup.open('center');
					return
				}
				this.$refs.cradDrawer.open();
			}
		},
		onInit() {

		},
		onLoad() {

		},
		destroyed() {

		}
	}
</script>

<style lang="scss">
	.infoCard {
		height: 80px;
		width: 100%;
		background: #FFFFFF;
		margin: 15px 0;
		display: flex;
		justify-content: space-around;

		.leftDiv {
			display: flex;
			justify-content: center;
			align-items: center;
			flex: 10%;
			margin-left: 5px;

			image {
				height: 30px;
				width: 30px;
			}
		}

		.centerDiv {
			flex: 60%;
			padding-left: 5px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			overflow: hidden;

			.centerTop {
				display: flex;
				align-items: center;
				justify-content: flex-start;

				text {
					// font-size: 18px;
					// font-family: Microsoft YaHei;
					// font-weight: bold;
					// color: #333333;
					// display: block;
					font-weight: bold;
					width: 85%;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}

				image {
					height: 35px;
					width: 35px;
				}
			}

			.centerBottom {
				display: flex;
				flex-wrap: nowrap;

				text {
					font-size: 14px;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color: #666666;
				}
			}

		}

		.rightDiv {
			display: flex;
			justify-content: center;
			align-items: center;
			flex: 30%;

			.btnColor {
				background: #1CBC9C;
				padding: 0 10px;
				font-size: 14px;
				font-family: Microsoft YaHei;
				font-weight: 400;
				color: #FFFFFF;
				border-radius: 4px;
			}
		}

		.hiddenText {
			width: 70px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			display: inline-block;
			margin-left: 7px;
		}

		.infoDrawer {}
	}
</style>

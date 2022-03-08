<template>
	<view class="mapDiv">
		<view class="page-body">
			<u-notice-bar :text="scorllTitle" mode='closable'></u-notice-bar>
			<view class="page-section page-section-gap">
				<map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers">
				</map>
			</view>
		</view>
		<view class="buttonDiv">
			<view class="confirmDiv">
				打卡
			</view>
			<view class="stepDiv">
				<u-steps :current="stepNow">
					<u-steps-item title="上午卡" desc="09:00">
					</u-steps-item>
					<u-steps-item title="中午卡" desc="14:00">
					</u-steps-item>
					<u-steps-item title="下午卡" desc="18:00">
					</u-steps-item>
				</u-steps>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 28.68503,
				isShow: true,
				longitude: 115.89925,
				scorllTitle: '所有的打卡时间都改成了8.59,如果定位不准,请及时联系打卡考勤等相关工作人员!',
				// key: 'EUZBZ-XKA36-K4IST-EMTL3-DM6ZQ-XQBLU',
				stepNow: 1,
				covers: [{
					latitude: 28.68503,
					longitude: 115.89925,
					// iconPath: '../../static/images/local.png'
				}]
			};
		},
		onLoad() {
			this.$channel.eventOn(this, 'transfer', res => {
				console.log(res);
				uni.getLocation({
					type: 'gcj02' || 'wgs84',
					geocode: true,
					success: (res) => {
						console.log('Uni:', res);
						this.longitude = res.longitude;
						this.latitude = res.latitude;
					}
				})
			})

			// var geolocation = new qq.maps.Geolocation();
			// var options = {
			// 	timeout: 9000
			// };
			// geolocation.getLocation(showPosition, () => {}, options);

			// function showPosition(position) {
			// 	console.log(position);
			// };

		}
	}
</script>

<style lang="scss">
	.mapDiv {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background: #00C9FF;
		/* fallback for old browsers */
		background: -webkit-linear-gradient(to right, #1cbc9c, #00C9FF);
		/* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to right, #1cbc9c, #00C9FF);
		/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


		.page-body {
			width: 100vw;
			height: 50vh;
		}

		.buttonDiv {
			height: 45vh;
			justify-items: flex-end;
			background-color: white;
			// border-radius: 30px;
			border-top-left-radius: 35px;
			border-top-right-radius: 35px;
			position: relative;

			.confirmDiv {
				height: 15vh;
				width: 50vw;
				position: absolute;
				background: radial-gradient(#28ffd4f7 50%, white 50%);
				left: 50%;
				top: -8%;
				transform: translate(-50%, 0);
				border-top-left-radius: 30%;
				border-top-right-radius: 30%;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 23px;
				font-weight: 700;
				color: aliceblue;
			}

			.stepDiv {
				position: relative;
				top: 12vh;

			}
		}
	}
</style>

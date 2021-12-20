<template>
	<view class="mapDiv">
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers">
				</map>
			</view>
		</view>
	</view>
</template>
<script>
	// import amap from "../../utils/amap-wx.130.js"
	export default {
		data() {
			return {
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 28.68503,
				isShow: true,
				longitude: 115.89925,
				// key: 'EUZBZ-XKA36-K4IST-EMTL3-DM6ZQ-XQBLU',
				covers: [{
					latitude: 28.68503,
					longitude: 115.89925,
					// iconPath: '../../static/images/local.png'
				}]
			};
		},
		onLoad() {
			// this.$channel.eventOn(this, 'transfer', res => {
			// 	console.log(res);
			// 	uni.getLocation({
			// 		type: 'gcj02' || 'wgs84',
			// 		geocode: true,
			// 		success: (res) => {
			// 			console.log('Uni:', res);
			// 			this.longitude = res.longitude - 0.1;
			// 			this.latitude = res.latitude - 0.1;
			// 		}
			// 	})
			// })

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
	}
</style>

<template>
	<view class="photoDiv">

		<view>
			<image v-for="(img, i) in imgs" :key="i" :src="img" :data-src="img" mode="widthFix" @tap="openPreview">
			</image>
		</view>

		<imgPreview ref="previewImage" :opacity=".85" :circular="true" :imgs="imgs" :descs="descs"
			@longPress="longPress">
		</imgPreview>

	</view>
</template>

<script>
	var _this;
	import imgPreview from "@/components/imgPreview/imgPreview.vue"
	export default {
		data() {
			return {
				// imgs: ['../../static/images/imgPre1.jpg',
				// 	'../../static/images/imgPre2.jpg',
				// 	'../../static/images/imgPre3.jpg'
				// ],
				imgs: ['https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
					'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
					'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
				],
				descs: ['鹿的图片', '马的图片', '狮子的图片'],
			}
		},
		components: {
			imgPreview
		},
		methods: {
			longPress(e) {
				console.log(e);
			},
			openPreview(e) {
				var param = e.currentTarget.dataset.src;
				console.log(this.$refs);
				// this.$nextTick(function() {
				// 	console.log(this);
				// 	console.log(this.$refs);
				// })


				// this.$refs.previewImage.open(param); // 传入当前选中的图片地址或序号
				// return; //如需测试和uni原生预览差别可注释这两行

				//以下是效果对比相关
				var _this = this;
				uni.showModal({
					title: '请选择',
					content: '请选择使用uni原生图片预览或非原生自定义的图片预览。',
					cancelText: 'uni',
					confirmText: '自定义',
					success: function(res) {
						if (res.confirm) {
							_this.$refs.previewImage.open(param); // 传入当前选中的图片地址或序号
						} else if (res.cancel) {
							uni.previewImage({
								current: param,
								urls: _this.imgs,
								indicator: 'default',
								loop: true
							});
						}
					}
				});
			},
		}
	}
</script>

<style lang="scss">
	.photoDiv {}
</style>

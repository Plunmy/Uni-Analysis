<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.getSystemInfo({
				success: (res) => {
					console.log(res);
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>


<style lang="scss">
	@import "uview-ui/index.scss";
</style>

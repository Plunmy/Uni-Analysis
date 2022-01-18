<template>
	<view class="email">
		<view class="allCollDiv">
			<uni-collapse accordion>
				<uni-collapse-item :show-animation="true" title="打开面板">
					<text>折叠内容</text>
				</uni-collapse-item>
				<uni-collapse-item :show-animation="true" title="折叠内容">
					<template v-slot:title>
						<uni-list>
							<uni-list-item title="折叠内容" :show-extra-icon="true">
							</uni-list-item>
						</uni-list>
					</template>
					<view class="collapseDiv">
						<p>折叠内容1</p>
						<p>折叠内容2</p>
						<p>折叠内容3</p>
						<p>折叠内容4</p>
						<p>折叠内容5</p>
					</view>
				</uni-collapse-item>
				<uni-collapse-item :show-animation="true" title="其他">
					<text>折叠内容</text>
				</uni-collapse-item>
			</uni-collapse>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.email {
		background-color: #807a7f;

		.allCollDiv {
			display: flex;
			justify-content: center;

			.uni-collapse {
				width: 95vw;

				// .uni-collapse-item__wrap {
				// 	background-color: red;
				// }

				/deep/.uni-collapse-item__wrap-content {
					margin: 15px 0;
					border: 1px solid red;
					background-color: red;

					.collapseDiv {
						margin: 20px 0;
						padding: 15px;
						background-color: gray;
					}
				}
			}
		}
	}
</style>

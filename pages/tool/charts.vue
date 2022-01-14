<template>
	<view>
		<view class="charts-box">
			<qiun-data-charts type="line" :opts='options' :chartData="chartData" :canvas2d="true" background="#000"
				canvasId="tempCharts" />
		</view>
	</view>
</template>

<script>
	import opts from './config-ucharts.js'
	export default {
		data() {
			return {
				chartData: {
					"categories": [
						"2016",
						"2017",
						"2018",
						"2019",
						"2020",
						"2021"
					],
					"series": [{
						"name": "成交量C",
						"data": [
							100,
							80,
							95,
							150,
							112,
							132
						]
					}]
				},
				options: opts,
			}
		},
		methods: {},
		onLoad() {}
	}
</script>

<style>
	/* 请根据需求修改图表容器尺寸，如果父容器没有高度图表则会显示异常 */
	.charts-box {
		width: 100%;
		height: 300px;
	}
</style>

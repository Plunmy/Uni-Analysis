<template>
	<view id="reportDetail">
		<view class="tableAllDiv">
			<u-skeleton rows="8" :title="false" :loading='!tableShow'>
				<u-transition :show="tableShow" mode='fade-left'>
					<view class="u-content">
						<u-parse class='tableDiv' :content="content"></u-parse>
					</view>
				</u-transition>
			</u-skeleton>
		</view>

		<!-- {{commonParam.title}} -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				commonParam: {
					title: 'sss'
				},
				content: '',
				tableShow: false,
			};
		},
		onInit() {},
		onLoad(result) {
			// 取值方法
			this.$channel.eventOn(this, 'tranferParam', (res) => {
				uni.setNavigationBarTitle({
					title: res.title
				})
			})
			// 及向前页面再次通信的方法
			// this.$channel.eventEmit(this, 'backData', {
			// 	name: '1',
			// 	type: 'backData'
			// })
			this.renderTable();
		},
		methods: {
			renderTable() {
				let th = ``,
					td = ``,
					tableFont = '';
				let re = new Promise(resolve => {
					// 模拟接口取值
					setTimeout(function() {
						let thData = {
								className: '班名',
								type: '类型',
								avgScore: '平均分',
								highScore: '最高分',
								lineA: 'A线人数'
							},
							tdData = [{
									className: '高一九班',
									type: '本段',
									avgScore: '86.444412',
									highScore: '98.235',
									lineA: '20'
								},
								{
									className: '高一九班',
									type: '累计',
									avgScore: '76.115245',
									highScore: '99.254',
									lineA: '40'
								},
								{
									className: '高二三班',
									type: '本段',
									avgScore: '65.155882',
									highScore: '84.321',
									lineA: '32'
								},
								{
									className: '高二三班',
									type: '累计',
									avgScore: '68.285821',
									highScore: '86.564',
									lineA: '31'
								},
								{
									className: '高三七班',
									type: '本段',
									avgScore: '78.584858',
									highScore: '79.265',
									lineA: '21'
								},
								{
									className: '高三七班',
									type: '累计',
									avgScore: '74.421255',
									highScore: '90.484',
									lineA: '44'
								}
							];

						resolve({
							th: thData,
							td: tdData
						})
					}, 1000);
				})
				re.then(res => {
					// console.log(res);
					let temp1 = '',
						temp = '';
					for (let i in res.th) {
						temp +=
							`<th class='tableItem tableTh' style=''>${res.th[i]}</th>`
					}
					th = `<tr>${temp}</tr>`

					for (var i = 0; i < res.td.length; i++) {
						temp1 = ''
						for (let item in res.td[i]) {
							// console.log(res.td[i][item]);
							temp1 += `<td class='tableItem tableTd'>${res.td[i][item]}</td>`
						}
						td += `<tr>${temp1}</tr>`
					}
					this.content = `<table>${th}${td}</table>`;
					this.tableShow = true;
				})
			},
		},
		onReady() {
			// console.log('init');
		},
		mounted() {}
	}
</script>

<style lang="scss">
	#reportDetail {
		.tableAllDiv {
			margin-top: 5vh;
		}

		.tableDiv {
			display: flex;
			align-items: center;
			justify-content: center;

			.tableItem {
				text-align: center;
				border: 1px solid #e5e5e5;
			}

			.tableTh {
				background: #f2f2f2;
			}
		}
	}
</style>

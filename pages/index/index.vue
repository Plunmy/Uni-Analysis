<template>
	<view class="content" id="home">
		<!-- <image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view> -->

		<view class="cardDiv">
			<!-- @feedBack='feedBack()' -->
			<infoCard v-for="(item,i) in cardList" :key='i' :cardItem='item'></infoCard>
			<!-- <infoCard :cardItem='cardList[1]'></infoCard> -->
		</view>

		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				title: 'Uni-app',
				isNight: false,
				cardList: [{
						title: '江西联盟2019届高三十月月考',
						time: '2019-02-08',
						grade: '高三',
						subject: '语文、数学、英语',
						school: 'single',
						detailItem: [{
							title: '江西联盟2019届高三十月月考语文考试分析',
							time: '2020-10-15',
							person: '学生、体育生',
						}, {
							title: '江西2019届高三十月月考英语考试分析',
							time: '2020-12-15',
							person: '体育生、特长生',
						}]
					},
					{
						title: '南昌2019届高三中考',
						time: '2019-03-02',
						grade: '高三',
						subject: '语文、地理、政治',
						school: 'together',
						detailItem: [{
							title: '南昌2019届高三中考政治考试分析',
							time: '2020-11-15',
							person: '艺术生、体育生',
						}, {
							title: '南昌2019届高三艺术考试分析总结',
							time: '2020-11-15',
							person: '学生、美术生',
						}]
					},
					{
						title: '抚州2020届初二中考',
						time: '2020-02-01',
						grade: '初二',
						subject: '化学、生物',
						school: 'together',
						detailItem: [{
							title: '抚州2020届初二中考生物选择题分析',
							time: '2020-12-15',
							person: '学生、体育生',
						}, {
							title: '抚州2020届初二中考化学测试分析',
							time: '2020-10-15',
							person: '学生、体育生',
						}]
					},
					{
						title: '樟树2021届六年级期末考试',
						time: '2021-06-04',
						grade: '六年级',
						subject: '英语、语文',
						school: 'together',
						detailItem: [{
							title: '樟树2021届六年级期末考试与语文第二阶段第三单元中学考试详情',
							time: '2020-11-15',
							person: '学生、体育生',
						}, {
							title: '六年级特长生体育三项运动及语文综合考试分析详情(不包含作文)',
							time: '2020-11-17',
							person: '体育生、美术生',
						}]
					}, {
						title: '新城2021届六年级期末考试',
						time: '2021-06-04',
						grade: '六年级',
						school: 'single',
						subject: '英语、语文'
					},
					{
						title: '萍乡2021届六年级入学考试',
						time: '2021-06-04',
						grade: '六年级',
						school: 'together',
						subject: '英语、语文'
					}, {
						title: '樟树2021届七年级期中',
						time: '2021-06-04',
						grade: '六年级',
						school: 'single',
						subject: '英语、语文'
					}, {
						title: '樟树2021届八年级期末考试(复试)',
						time: '2021-06-04',
						grade: '六年级',
						school: 'single',
						subject: '英语、语文'
					}, {
						title: '樟树2021届八年级考试',
						time: '2021-06-04',
						school: 'together',
						grade: '六年级',
						subject: '英语、语文'
					}
				]
			}
		},
		onInit() {},
		onLoad() {
			// console.log(this.$path.user.getName);
			// console.log('sssss');
			// this.$path.exam.getAllGrade
			// 'http://localhost:8080/api/exam/getAllGrade'
			// console.log(this.$path.exam.getAllGrade);
			this.$api(this.$path.exam.getAllGrade, {
				_t: 1637732520
			}, 'get').then(res => {
				console.log(res);
			}).catch(res => {
				console.log(res);
			})
		},
		onReady() {
			let that = this;
			uni.$on('feedBack', (res, type) => {
				// uni.$emit('tranferParam', res);
				let url = '';
				if (type == 'module') {
					that.$refs.uToast.show({
						type: 'error',
						icon: false,
						message: "暂无该模块",
					})
					return
				}
				if (type == 'report') {
					url = '../reportDetail/reportDetail?id=1,other=done'
				}
				// 封装跳转并传值事件
				this.$channel.navigateEmit(url, 'tranferParam', res,'backData',(res)=>{
					console.log(res);
				})
				// console.log(uni);
				// uni.navigateTo({
				// 	url: url,
				// 	animationDuration: 500,
				// 	success(result) {
				// 		result.eventChannel.emit('tranferParam', res)
				// 	}
				// })
			})
		},
		methods: {}
	}
</script>

<style lang="scss">
	/* .content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	} */
	#home {
		/* height: 2000px; */
		display: flex;
		justify-content: center;
		align-items: center;
		background: #F2F2F2;

		.cardDiv {
			width: 80vh;
		}
	}
</style>

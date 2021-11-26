let baseUrl = 'api/';

function showToast() {
	uni.showToast({
		title: '错误,请重试!',
		icon: 'error',
		duration: 1500
	});
}
let request = (path, data, method) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + path, //接口地址。
			// methods:'GET'.toUpperCase(),
			method: method.toUpperCase(),
			data: data,
			timeout: 60000,
			header: {
				'content-type': 'application/json' //自定义请求头信息
			},
			success: (res) => {
				// console.log(res);
				switch (res.statusCode) {
					case 401:
					case 404:
						showToast();
						reject(res.data);
						break;
					case 200:
						resolve(res)
						break
				}
			},
			fail: (res) => {
				showToast();
				reject(res.data);
			}
		});
	})

}

export default request;

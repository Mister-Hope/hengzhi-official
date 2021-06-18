// 修改密码
function change() {
	layui.use('layer', function() {
		var $ = layui.jquery;
		var element = layui.element;
		var layer = layui.layer;
		var form = layui.form;
		layer.open({
			type: 1,
			title: '修改密码',
			area: ['350px', '250px'],
			shade: 0.4,
			content: $("#test1"),
			btn: ['提交', '取消'],
			scrollbar: false,
			yes: function(index) {
				// var studentId = $("#studentId").val();
				var password = $("#password").val();
				var newPassword = $("#newPassword").val();
				var data = {
					// "studentId": studentId,
					"password": password,
					"newPassword": newPassword,
				};
				var authorization = localStorage.getItem("authorization");
				console.log(data)
				console.log(authorization)
				$.ajax({
					type: 'post',
					url: 'http://123.56.29.67/hengzhi-official/user/updatePassword',
					dataType: 'json',
					contentType: 'application/json;charset=utf-8',
					headers: {
						'Authorization': authorization
					},
					data: JSON.stringify(data),
					success: function(data) {
						if (data.status == "success") {
							layer.close(index);
							layer.msg("修改成功");
							localStorage.setItem("authorization", "");
							setTimeout(function() {
								window.location.href = "../../login/login.html";
							}, 2000);
						} else {
							layer.msg("修改失败")
						}
					},
					error: function() {}
				});
			},
			btn2: function() {
				// layer.msg('bbb');
			}
		});
	});
}

// 退出登录
function logout() {
	localStorage.setItem("authorization", "");
	setTimeout(function() {
		window.location.href = "../../login/login.html";
	}, 2000);
}

// 未考试列表
$(document).ready(function() {
	var authorization = localStorage.getItem("authorization");
	var pageNo = 1;
	var data = {
		pageNo: pageNo,
		pageSize: 12
	}
	$.ajax({
		type: 'post',
		url: 'http://123.56.29.67/hengzhi-official/studentTest/getTestedPapers',
		dataType: 'json',
		contentType: 'application/json;charset=utf-8',
		data: JSON.stringify(data),
		headers: {
			'Authorization': authorization
		},
		success: function(data) {
			var box = ""
			for (var i = 0; i < data.list.length; i++) {
				var time = data.list[i].beginTime
				var time1 = time.slice(5, 7)
				var time2 = time.slice(8, 10)
				var time3 = time.slice(11, 16)
				var time4 = data.list[i].deadline
				var time5 = time4.slice(11, 16)
				console.log(time1)
				box += `
				<div class="paperBox" data-id="${data.list[i].paperId}">
					<div>${data.list[i].paperName}</div>
					<div>${time1}.${time2}</div>
					<div>${time3}-${time5}</div>
					<div>出卷人：${data.list[i].name}</div>
				</div>
				`
			}
			box += `<div class="clear"></div>`

			var str = `
			<div class="fenye1">
				<div class="zuiqian" onclick="firstPage()">
					<i class="fa fa-angle-double-left"></i>
				</div>
				<div class="qian" onclick="prePage()">
					<i class="fa fa-angle-left"></i>
				</div>
				<div class="tiaozhuan">
					<input type="" name="" id="shuruyeshu1" value="" />
				</div>
				<div class="tiaozhuan1" onclick="jump()">
					跳转
				</div>
				<div class="zongyeshu" data-total="${data.pages}" data-hasnextpage="${data.hasNextPage}" data-haspreviouspage="${data.hasPreviousPage}">
					共${data.pages}页
				</div>
				<div class="dangqianye" data-cur="${data.pageNum}">
					第${data.pageNum}页
				</div>
				<div class="hou" onclick="nextPage()">
					<i class="fa fa-angle-right"></i>
				</div>
				<div class="zuihou" onclick="lastPage()">
					<i class="fa fa-angle-double-right"></i>
				</div>
				<div class="clear">
				</div>
			</div>
			`
			var fenye = document.getElementsByClassName("fenye")[0]
			fenye.innerHTML = str;
			var divs = document.getElementById("divs")
			divs.innerHTML = box;
			console.log(data)
		},
		error: function() {}
	});
})

function firstPage() {
	var authorization = localStorage.getItem("authorization");
	var data = {
		pageNo: 1,
		pageSize: 12
	}
	$.ajax({
		type: 'post',
		url: 'http://123.56.29.67/hengzhi-official/studentTest/getTestedPapers',
		dataType: 'json',
		contentType: 'application/json;charset=utf-8',
		data: JSON.stringify(data),
		headers: {
			'Authorization': authorization
		},
		success: function(data) {
			var box = ""
			for (var i = 0; i < data.list.length; i++) {
				var time = data.list[i].beginTime
				var time1 = time.slice(5, 7)
				var time2 = time.slice(8, 10)
				var time3 = time.slice(11, 16)
				var time4 = data.list[i].deadline
				var time5 = time4.slice(11, 16)
				console.log(time1)
				box += `
				<div class="paperBox" data-id="${data.list[i].paperId}">
					<div>${data.list[i].paperName}</div>
					<div>${time1}.${time2}</div>
					<div>${time3}-${time5}</div>
					<div>出卷人：${data.list[i].name}</div>
				</div>
				`
			}
			box += `<div class="clear"></div>`

			var str = `
			<div class="fenye1">
				<div class="zuiqian" onclick="firstPage()">
					<i class="fa fa-angle-double-left"></i>
				</div>
				<div class="qian" onclick="prePage()">
					<i class="fa fa-angle-left"></i>
				</div>
				<div class="tiaozhuan">
					<input type="" name="" id="shuruyeshu1" value="" />
				</div>
				<div class="tiaozhuan1" onclick="jump()">
					跳转
				</div>
				<div class="zongyeshu" data-total="${data.pages}" data-hasnextpage="${data.hasNextPage}" data-haspreviouspage="${data.hasPreviousPage}">
					共${data.pages}页
				</div>
				<div class="dangqianye" data-cur="${data.pageNum}">
					第${data.pageNum}页
				</div>
				<div class="hou" onclick="nextPage()">
					<i class="fa fa-angle-right"></i>
				</div>
				<div class="zuihou" onclick="lastPage()">
					<i class="fa fa-angle-double-right"></i>
				</div>
				<div class="clear">
				</div>
			</div>
			`
			var fenye = document.getElementsByClassName("fenye")[0]
			fenye.innerHTML = str;
			var divs = document.getElementById("divs")
			divs.innerHTML = box;
			console.log(data)
		},
		error: function() {}
	});
}

function prePage() {
	var authorization = localStorage.getItem("authorization");
	var pre = document.getElementsByClassName("zongyeshu")[0]
	if (pre.dataset.haspreviouspage == "true") {
		var cur = document.getElementsByClassName("dangqianye")[0]
		var pageNo = cur.dataset.cur - 1
		var data = {
			pageNo: pageNo,
			pageSize: 12
		}
		$.ajax({
			type: 'post',
			url: 'http://123.56.29.67/hengzhi-official/studentTest/getTestedPapers',
			dataType: 'json',
			contentType: 'application/json;charset=utf-8',
			data: JSON.stringify(data),
			headers: {
				'Authorization': authorization
			},
			success: function(data) {
				var box = ""
				for (var i = 0; i < data.list.length; i++) {
					var time = data.list[i].beginTime
					var time1 = time.slice(5, 7)
					var time2 = time.slice(8, 10)
					var time3 = time.slice(11, 16)
					var time4 = data.list[i].deadline
					var time5 = time4.slice(11, 16)
					console.log(time1)
					box += `
					<div class="paperBox" data-id="${data.list[i].paperId}">
						<div>${data.list[i].paperName}</div>
						<div>${time1}.${time2}</div>
						<div>${time3}-${time5}</div>
						<div>出卷人：${data.list[i].name}</div>
					</div>
					`
				}
				box += `<div class="clear"></div>`

				var str = `
				<div class="fenye1">
					<div class="zuiqian" onclick="firstPage()">
						<i class="fa fa-angle-double-left"></i>
					</div>
					<div class="qian" onclick="prePage()">
						<i class="fa fa-angle-left"></i>
					</div>
					<div class="tiaozhuan">
						<input type="" name="" id="shuruyeshu1" value="" />
					</div>
					<div class="tiaozhuan1" onclick="jump()">
						跳转
					</div>
					<div class="zongyeshu" data-total="${data.pages}" data-hasnextpage="${data.hasNextPage}" data-haspreviouspage="${data.hasPreviousPage}">
						共${data.pages}页
					</div>
					<div class="dangqianye" data-cur="${data.pageNum}">
						第${data.pageNum}页
					</div>
					<div class="hou" onclick="nextPage()">
						<i class="fa fa-angle-right"></i>
					</div>
					<div class="zuihou" onclick="lastPage()">
						<i class="fa fa-angle-double-right"></i>
					</div>
					<div class="clear">
					</div>
				</div>
				`
				var fenye = document.getElementsByClassName("fenye")[0]
				fenye.innerHTML = str;
				var divs = document.getElementById("divs")
				divs.innerHTML = box;
				console.log(data)
			},
			error: function() {}
		});
	}

}

function nextPage() {
	var authorization = localStorage.getItem("authorization");
	var pre = document.getElementsByClassName("zongyeshu")[0]
	if (pre.dataset.hasnextpage == "true") {
		var cur = document.getElementsByClassName("dangqianye")[0]
		var pageNo = cur.dataset.cur + 1
		var data = {
			pageNo: pageNo,
			pageSize: 12
		}
		$.ajax({
			type: 'post',
			url: 'http://123.56.29.67/hengzhi-official/studentTest/getTestedPapers',
			dataType: 'json',
			contentType: 'application/json;charset=utf-8',
			data: JSON.stringify(data),
			headers: {
				'Authorization': authorization
			},
			success: function(data) {
				var box = ""
				for (var i = 0; i < data.list.length; i++) {
					var time = data.list[i].beginTime
					var time1 = time.slice(5, 7)
					var time2 = time.slice(8, 10)
					var time3 = time.slice(11, 16)
					var time4 = data.list[i].deadline
					var time5 = time4.slice(11, 16)
					console.log(time1)
					box += `
				<div class="paperBox" data-id="${data.list[i].paperId}">
					<div>${data.list[i].paperName}</div>
					<div>${time1}.${time2}</div>
					<div>${time3}-${time5}</div>
					<div>出卷人：${data.list[i].name}</div>
				</div>
				`
				}
				box += `<div class="clear"></div>`

				var str = `
			<div class="fenye1">
				<div class="zuiqian" onclick="firstPage()">
					<i class="fa fa-angle-double-left"></i>
				</div>
				<div class="qian" onclick="prePage()">
					<i class="fa fa-angle-left"></i>
				</div>
				<div class="tiaozhuan">
					<input type="" name="" id="shuruyeshu1" value="" />
				</div>
				<div class="tiaozhuan1" onclick="jump()">
					跳转
				</div>
				<div class="zongyeshu" data-total="${data.pages}" data-hasnextpage="${data.hasNextPage}" data-haspreviouspage="${data.hasPreviousPage}">
					共${data.pages}页
				</div>
				<div class="dangqianye" data-cur="${data.pageNum}">
					第${data.pageNum}页
				</div>
				<div class="hou" onclick="nextPage()">
					<i class="fa fa-angle-right"></i>
				</div>
				<div class="zuihou" onclick="lastPage()">
					<i class="fa fa-angle-double-right"></i>
				</div>
				<div class="clear">
				</div>
			</div>
			`
				var fenye = document.getElementsByClassName("fenye")[0]
				fenye.innerHTML = str;
				var divs = document.getElementById("divs")
				divs.innerHTML = box;
				console.log(data)
			},
			error: function() {}
		});

	}

}

function lastPage() {
	var total = document.getElementsByClassName("zongyeshu")[0]
	var pageNo = total.dataset.total
	var authorization = localStorage.getItem("authorization");
	var data = {
		pageNo: pageNo,
		pageSize: 12
	}
	$.ajax({
		type: 'post',
		url: 'http://123.56.29.67/hengzhi-official/studentTest/getTestedPapers',
		dataType: 'json',
		contentType: 'application/json;charset=utf-8',
		data: JSON.stringify(data),
		headers: {
			'Authorization': authorization
		},
		success: function(data) {
			var box = ""
			for (var i = 0; i < data.list.length; i++) {
				var time = data.list[i].beginTime
				var time1 = time.slice(5, 7)
				var time2 = time.slice(8, 10)
				var time3 = time.slice(11, 16)
				var time4 = data.list[i].deadline
				var time5 = time4.slice(11, 16)
				console.log(time1)
				box += `
				<div class="paperBox" data-id="${data.list[i].paperId}">
					<div>${data.list[i].paperName}</div>
					<div>${time1}.${time2}</div>
					<div>${time3}-${time5}</div>
					<div>出卷人：${data.list[i].name}</div>
				</div>
				`
			}
			box += `<div class="clear"></div>`

			var str = `
			<div class="fenye1">
				<div class="zuiqian" onclick="firstPage()">
					<i class="fa fa-angle-double-left"></i>
				</div>
				<div class="qian" onclick="prePage()">
					<i class="fa fa-angle-left"></i>
				</div>
				<div class="tiaozhuan">
					<input type="" name="" id="shuruyeshu1" value="" />
				</div>
				<div class="tiaozhuan1" onclick="jump()">
					跳转
				</div>
				<div class="zongyeshu" data-total="${data.pages}" data-hasnextpage="${data.hasNextPage}" data-haspreviouspage="${data.hasPreviousPage}">
					共${data.pages}页
				</div>
				<div class="dangqianye" data-cur="${data.pageNum}">
					第${data.pageNum}页
				</div>
				<div class="hou" onclick="nextPage()">
					<i class="fa fa-angle-right"></i>
				</div>
				<div class="zuihou" onclick="lastPage()">
					<i class="fa fa-angle-double-right"></i>
				</div>
				<div class="clear">
				</div>
			</div>
			`
			var fenye = document.getElementsByClassName("fenye")[0]
			fenye.innerHTML = str;
			var divs = document.getElementById("divs")
			divs.innerHTML = box;
			console.log(data)
		},
		error: function() {}
	});
}

function jump() {
	var pageNo = $("#shuruyeshu1").val();
	var pageNo1 = parseInt(pageNo)
	var total = document.getElementsByClassName("zongyeshu")[0]
	var total1 = total.dataset.total
	console.log(total1)
	if (pageNo1 <= total1 && pageNo1 >= 1) {
		var authorization = localStorage.getItem("authorization");
		var data = {
			pageNo: pageNo1,
			pageSize: 12
		}
		console.log("cesh", data)
		$.ajax({
			type: 'post',
			url: 'http://123.56.29.67/hengzhi-official/studentTest/getTestedPapers',
			dataType: 'json',
			contentType: 'application/json;charset=utf-8',
			data: JSON.stringify(data),
			headers: {
				'Authorization': authorization
			},
			success: function(data) {
				var box = ""
				for (var i = 0; i < data.list.length; i++) {
					var time = data.list[i].beginTime
					var time1 = time.slice(5, 7)
					var time2 = time.slice(8, 10)
					var time3 = time.slice(11, 16)
					var time4 = data.list[i].deadline
					var time5 = time4.slice(11, 16)
					console.log(time1)
					box += `
				<div class="paperBox" data-id="${data.list[i].paperId}">
					<div>${data.list[i].paperName}</div>
					<div>${time1}.${time2}</div>
					<div>${time3}-${time5}</div>
					<div>出卷人：${data.list[i].name}</div>
				</div>
				`
				}
				box += `<div class="clear"></div>`

				var str = `
			<div class="fenye1">
				<div class="zuiqian" onclick="firstPage()">
					<i class="fa fa-angle-double-left"></i>
				</div>
				<div class="qian" onclick="prePage()">
					<i class="fa fa-angle-left"></i>
				</div>
				<div class="tiaozhuan">
					<input type="" name="" id="shuruyeshu1" value="" />
				</div>
				<div class="tiaozhuan1" onclick="jump()">
					跳转
				</div>
				<div class="zongyeshu" data-total="${data.pages}" data-hasnextpage="${data.hasNextPage}" data-haspreviouspage="${data.hasPreviousPage}">
					共${data.pages}页
				</div>
				<div class="dangqianye" data-cur="${data.pageNum}">
					第${data.pageNum}页
				</div>
				<div class="hou" onclick="nextPage()">
					<i class="fa fa-angle-right"></i>
				</div>
				<div class="zuihou" onclick="lastPage()">
					<i class="fa fa-angle-double-right"></i>
				</div>
				<div class="clear">
				</div>
			</div>
			`
				var fenye = document.getElementsByClassName("fenye")[0]
				fenye.innerHTML = str;
				var divs = document.getElementById("divs")
				divs.innerHTML = box;
				console.log(data)
			},
			error: function() {}
		});
	} else {
		layer.msg("请输入合法数字")
	}
}
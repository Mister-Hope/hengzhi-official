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
// 修改头像
function change1() {
	layui.use('layer', function() {
		var $ = layui.jquery;
		var element = layui.element;
		var layer = layui.layer;
		var form = layui.form;
		layer.open({
			type: 1,
			title: '修改头像',
			area: ['350px', '250px'],
			shade: 0.4,
			content: $("#test2"),
			btn: ['提交', '取消'],
			scrollbar: false,
			yes: function(index) {
				layer.close(index);
				showToast();
			},
			btn2: function() {
				layer.msg('bbb');
			}
		});
	});
}
layui.use(['upload', 'element', 'layer'], function() {
	var $ = layui.jquery,
		upload = layui.upload,
		element = layui.element,
		layer = layui.layer;
	upload.render({
		elem: '#test8',
		url: 'http://123.56.29.67/hengzhi-official/user/updateHeadImg' //改成您自己的上传接口
			,
		auto: false
			//,multiple: true
			,
		bindAction: '#test9',
		done: function(res) {
			layer.msg('上传成功');
			console.log(res)
		}
	});

})
// 退出登录
function logout() {
	localStorage.setItem("authorization", "");
	setTimeout(function() {
		window.location.href = "../../login/login.html";
	}, 2000);
}
// 显示公告
$(document).ready(function() {
	var authorization = localStorage.getItem("authorization");
	// 个人信息
	$.ajax({
		type: 'post',
		url: 'http://123.56.29.67/hengzhi-official/user/getUserInfo',
		dataType: 'json',
		contentType: 'application/json;charset=utf-8',
		headers: {
			'Authorization': authorization
		},
		// data: JSON.stringify(data),
		success: function(data) {
			var msg1 = document.getElementById("head")
			var str1 = ""
			str1 = `
			<img class="headImgg" data-id="${data.userId}" src="http://123.56.29.67/hengzhi-official/headImage/newFileName${data.headImg}">
			`
			msg1.innerHTML = str1;
		},
		error: function() {}
	});
	$.ajax({
		type: 'post',
		url: 'http://123.56.29.67/hengzhi-official/show/showNotice',
		dataType: 'json',
		contentType: 'application/json;charset=utf-8',
		headers: {
			'Authorization': authorization
		},
		// data: JSON.stringify(data),
		success: function(data) {
			var msg1 = document.getElementById("notice")
			var str1 = ""
			var jsonLength = 0;
			for (var i in data) {
				jsonLength++;
			}
			for (var i = 0; i < jsonLength; i++) {
				str1 += `
				<li class="layui-timeline-item">
					<i class="layui-icon layui-timeline-axis">&#xe63f;</i>
					<div class="layui-timeline-content layui-text">
						<h3 class="layui-timeline-title">${data[i].time}</h3>
						<div class="contents">
							${data[i].content}
						</div>
						<div class="aa">—— ${data[i].userName}</div>
					</div>
				</li>
				`
			}
			msg1.innerHTML = str1;
		},
		error: function() {}
	});
})

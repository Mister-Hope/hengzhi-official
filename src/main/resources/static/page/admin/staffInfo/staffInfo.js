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
$(document).ready(function(){
  var authorization = localStorage.getItem("authorization");
	console.log(authorization);
  var data = {
		page: 1,
		size: 5
	}
  console.log(data);
  $.ajax({
		type: 'post',
		url: 'http://123.56.29.67/hengzhi-official/super/showAllUser',
		dataType: 'json',
		contentType: 'application/json;charset=utf-8',
		data: JSON.stringify(data),
		headers: {
			'Authorization': authorization
		},
		success: function(data) {
      console.log(data)
      var TotalNumber = data.TotalNumber;
      var pagesSize = data.pagesSize;
      var size1 = TotalNumber/pagesSize;
      var str = "";
      for(var i = 0; i < 5; i++){
        var headImg = data.list[i].headImg;
        var name = data.list[i].name;
        console.log(name);
        var userId = data.list[i].userId;
        var studentId = data.list[i].studentId;
        var power = data.list[i].power;
        str += `
          <tr>
            <td>${userId}</td>
            <td><img style="width: 45px;height: 45px;" src = "http://123.56.29.67/hengzhi-official/headImage/${headImg}"></td>
            <td>${name}</td>
            <td>${studentId}</td>
            <td>${power}</td>
          </tr>
        `
        console.log(str);
        var boxinfo = document.getElementById("boxinfo")
				boxinfo.innerHTML = str;
        // $(".boxinfo").innerHTML = str;
      }

		},
		error: function() {}
	})
})

$(document).ready(function(){
  var authorization = localStorage.getItem("authorization");
	console.log(authorization);
  var data = {
		page: 1,
		size: 5
	}
  console.log(data);
  $.ajax({
		type: 'post',
		url: 'http://123.56.29.67/hengzhi-official/super/showAllUser',
		dataType: 'json',
		contentType: 'application/json;charset=utf-8',
		data: JSON.stringify(data),
		headers: {
			'Authorization': authorization
		},
		success: function(data) {
      console.log(data)
      var TotalNumber = data.TotalNumber;
      var pagesSize = data.pagesSize;
      var size1 = TotalNumber/pagesSize;
      var str = "";
      for(var i = 0; i < 5; i++){
        var headImg = data.list[i].headImg;
        var name = data.list[i].name;
        console.log(name);
        var userId = data.list[i].userId;
        var studentId = data.list[i].studentId;
        var power = data.list[i].power;
        str += `
          <tr>
            <td>${userId}</td>
            <td><img style="width: 45px;height: 45px;" src = "http://123.56.29.67/hengzhi-official/headImage/${headImg}"></td>
            <td>${name}</td>
            <td>${studentId}</td>
            <td>${power}</td>
          </tr>
        `
        console.log(str);
        var boxinfo = document.getElementById("boxinfo")
				boxinfo.innerHTML = str;
        // $(".boxinfo").innerHTML = str;
      }

		},
		error: function() {}
	})
})
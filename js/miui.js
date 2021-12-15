//一、小米官网主页

//1、轮播图

var num = 0;

function autoChange(num) {
  //轮播图片
  setTimeout("change(num++)", 3500);
  //循环调用该方法
  setTimeout("autoChange(num=num%6)", 3500);
}

function change(i) {
  var trt = document.getElementsByClassName('bj');
  for (var j = 0; j < trt.length; j++) {
    trt[j].style.background = "gray";
  }

  switch (i) {
    case 0:
      document.getElementById("imgMove").style.backgroundImage = "url(img/gif/gif_0.jpg)";
      break;
    case 1:
      document.getElementById("imgMove").style.backgroundImage = "url(img/gif/gif_1.jpg)";
      break;
    case 2:
      document.getElementById("imgMove").style.backgroundImage = "url(img/gif/gif_2.jpg)";
      break;
    case 3:
      document.getElementById("imgMove").style.backgroundImage = "url(img/gif/gif_3.jpg)";
      break;
    case 4:
      document.getElementById("imgMove").style.backgroundImage = "url(img/gif/gif_4.jpg)";
      break;
    case 5:
      document.getElementById("imgMove").style.backgroundImage = "url(img/gif/gif_5.jpg)";
      break;

  }
  document.getElementById("ig" + i).style.background = "white";
}

var num = 0;

//2.设置左方向按钮点击事件
function zuo() {
  num--;
  if (num == -1) {
    num = 5;
  }
  change(num);
  this.style.background = "red";

}

//3.设置右方向按钮点击事件
function you() {
  num++;
  if (num == 6) {
    num = 0;
  }
  change(num);
}

//4、按钮的显示和隐藏事件
//通过ID获取左右按钮的元素
//	var aleft=document.getElementById("zuo");
//	var aright=document.getElementById("you");
//	//显示事件
////	function show(){
//		aleft.style.display="block";
//		aright.style.display="block";
//		
////	}

//	function hide(){
//		aleft.style.display="none";
//		aright.style.display="none";
//		
//	}
//	


//5、搜索框
//得到焦点时显示的内容
function soso() {
  var loat = document.getElementById("float");
  var rt = document.getElementById("qqq");
  var input = document.getElementById("wai");
  var determine = document.getElementById("determine");
  var tb = document.getElementById("zizi");

  determine.style.borderLeft = "1px solid orangered";
  input.style.border = "1px solid orangered";
  rt.style.display = "block";
  loat.style.display = "none";
}

//失去焦点时显示的内容
function sq() {
  var loat = document.getElementById("float");
  var rt = document.getElementById("qqq");
  var input = document.getElementById("wai");
  var determine = document.getElementById("determine");
  var tb = document.getElementById("zizi");

  determine.style.borderLeft = "";
  input.style.border = "";
  rt.style.display = "none";
  loat.style.display = "block";
}


//二.米聊
var time1 = 1;

function timeList(time1) {
  setTimeout("miui(time1++)", 2000);
  setTimeout("timeList(time1=time1%3)", 2000)
}

function miui(j) {
  //获取所需元素
  var roll = document.getElementById("roll");
  var totoList = document.getElementsByClassName('toto');
  //通过循环把前面点击的小圆点的颜色恢复
  for (t = 0; t < totoList.length; t++) {
    totoList[t].style.background = "darkgrey";
  }
  switch (j) {
    case 0:
      roll.style.backgroundImage = "url(img_michat/banner/banner_0.png)";
      break;
    case 1:
      roll.style.backgroundImage = "url(img_michat/banner/banner_1.png)";
      break;
    case 2:
      roll.style.backgroundImage = "url(img_michat/banner/banner_2.jpg)";
      break;
  }
  document.getElementById("roll_" + j).style.background = "white";
}

//time1=setTimeout(miui,10);

window.onload = function () {
  //一.小米官网登陆页面JS代码
  //通过ID获取文档中ID名叫做account的元素并赋给account
  var account = document.getElementById("account");
  //通过ID获取文档中ID名叫做password的元素并赋给password
  var password = document.getElementById("password");
  //通过ID获取文档中ID名叫做enter的元素并赋给enter
  var enter = document.getElementById("enter");
  //通过ID获取文档中ID名叫做tishi的元素并赋给hint
  var hint = document.getElementById("tishi");
  //给enter一个点击事件
  enter.onclick = function () {
    //1.用户名验证
    //判断用户名是否为空
    if (account.value == "") {
      hint.innerHTML = "<li style='color:red'>用户名不能为空！</li>";
      return;
    }
    //制定正则表达式
    var reg = /^[0-9a-zA-Z\u4e00-\u9fa5_]{3,16}$/;
    //判断用户名是否符合制定的正则表达式
    if (reg.test(account.value) == true) {
      hint.innerHTML = "<li style='color:lawngreen'>用户名输入正确！</li>";
    } else {
      hint.innerHTML = "<li style='color:red'>用户名输入错误，请重新输入！</li>"
    }

    //2.密码验证
    ////制定正则表达式
    var rgr = /^([a-zA-Z0-9]){8,16}$/;
    //判断密码是否符合制定的正则表达式
    if (rgr.test(password.value) == true) {

    } else {
      hint.innerHTML = "<li style='color:red'>密码输入错误，请重新输入！</li>"
    }

  }

  //一.小米官网注册页面JS代码


}



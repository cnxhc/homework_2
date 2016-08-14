window.onload=function(){ 
		/*
			获取页面元素
		*/
		var oNum1=document.getElementById('number1');
		var oNum2=document.getElementById('number2');
		var oTxt3=document.getElementById('text3');
		var oSele=document.getElementById("sele");
		var oBtn=document.getElementById('btn1');
		/*
			为oBtn按钮添加点击事件
		*/
		oBtn.onclick=function(){
		/*	var num1=parseInt(oNum1.value);
			var num2=parseInt(oNum2.value);
			if (isNaN(num1) ||isNaN(num2) ) {
				alert("当前输入格式不正确，请重新输入！");
				oNum1.value="";
				oNum2.value="";
				oTxt3.value="请重新输入!";
				return;
			};*/
			/*
				计算结果
			*/
			var result=calc(num1,num2,oSele.value);
			oTxt3.value=result;
			
		}
			/*
				定义一个函数opt()，接受一个数字x和数字y，
				以及运算符operator.
			*/
			function calc(x,y,operator){
				switch(operator){
					case '+':
					return x+y;
					case '-':
					return x-y;
					case '*':
					return x*y;
					case '/':
					if (y==0) {
						alert("除数不能为0");
						oNum1.value="";
						oNum2.value="";				
						return oTxt3.value="请重新输入!";	
					}else{
						return x/y;
					}
				}
			}
	}
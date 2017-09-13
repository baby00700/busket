$(document).ready(function(){
	  
    $("#con").click(function(){
    	var namex="bilibili";
    	 var stu= [{
				"name":namex,
				"street":"Fifth Avenue New York 666",
				"age":56,
				"phone":"555 1234567"},
				{
				"name":"aaa",
				"street":"ss",
				"age":226,
				"phone":"dsdfs7"},
				{
				"name":"bbb",
				"street":"3232242241",
				"age":52,
				"phone":"2dge7"}
    	 ];
    	console.log("ok");
    	$.ajax({
    		type:"post",
    		url:"gethint.php",
    		async:true,
 			data:{
 				"student" :stu
 			},
    		success:function(data){
    			console.log("success");
    			var tid= data;
    			console.log(tid);
    			var json = eval('(' + data + ')'); 
    			console.log(typeof json);
    			console.log(json.length);//3
    			
    				for (i = 0; i < json.length; i++) {
    					var nam=json[i]['name'];
    					console.log(nam);
						if (json[i]['phone']=="2dge7") {						
							console.log("在第"+(i+1)+'组数据中')
							var www="在第"+(i+1)+'组数据中';
							$('.writecon').html(www);
							
						}
					};
					
    			console.log(json);
    			
    		},
    		error:function(){
    			console.log("error");
    			
    		}
    	});
		console.log("end");
    });
});
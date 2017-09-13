<?php header("Content-type: text/html; charset=utf-8"); 
	
	$student = $_POST["student"];
		echo json_encode($student);
   
?>
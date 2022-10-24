<?php
	include '../../koneksi.php';
	session_start();

	if($_POST['type']==1){
		$id = substr(str_shuffle("0123456789"), 0, 5);

		date_default_timezone_set('Asia/Bangkok');
		$date = date('Y-m-d');

		$fullname=$_POST['fullname'];
		$username=$_POST['username'];
		$password=$_POST['password'];
		
		$duplicate=mysqli_query($conn,"select * from akun where username='$username'");
		if (mysqli_num_rows($duplicate)>0)
		{
			echo json_encode(array("statusCode"=>201));
		}
		else{
			$sql = "INSERT INTO `akun` (`id`, `fullname`, `username`, `password`, `created_at`) VALUES ('$id', '$fullname', '$username', '$password', '$date');";
			if (mysqli_query($conn, $sql)) {
				echo json_encode(array("statusCode"=>200));
			}
			else {
				echo json_encode(array("statusCode"=>201));
			}
		}
	}
	if($_POST['type']==2){
		$username=$_POST['username'];
		$password=$_POST['password'];
		$check=mysqli_query($conn,"select * from akun where username='$username' and password='$password'");
		if (mysqli_num_rows($check)>0)
		{
			$_SESSION['username']=$username;
			echo json_encode(array("statusCode"=>200));
		}
		else{
			echo json_encode(array("statusCode"=>201));
		}
		mysqli_close($conn);
	}
?>
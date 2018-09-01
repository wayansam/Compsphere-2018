<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cs";

$conn = new mysqli($servername, $username, $password, $dbname);

$errors = array();
$data = array();


echo '<script>console.log("'.$_POST['name1'].'");</script>';
echo '<script>console.log("'.$_POST['email1'].'");</script>';
echo '<script>console.log("'.$_POST['school1'].'");</script>';
$name1="";
$name2="";
$name3="";
$name4="";
$name5="";
$school1="";
$email1="";
$stdid1="";
$stdid2="";
$stdid3="";
$stdid4="";
$stdid5="";
$photo1="";
$photo2="";
$photo3="";
$photo4="";
$photo5="";
$cat="";

if(!empty($_POST['name1'])){
	$name1 = $_POST['name1'];
}
if(!empty($_POST['name2'])){
	$name2 = $_POST['name2'];
}
if(!empty($_POST['name3'])){
	$name3 = $_POST['name3'];
}
if(!empty($_POST['name4'])){
	$name4 = $_POST['name4'];
}
if(!empty($_POST['name5'])){
	$name5 = $_POST['name5'];
}
if(!empty($_POST['school1'])){
	$school1 = $_POST['school1'];
}
if(!empty($_POST['email1'])){
	$email1 = $_POST['email1'];
}
if(!empty($_POST['stdid1'])){
	$stdid1 = $_POST['stdid1'];
}
if(!empty($_POST['stdid2'])){
	$stdid2 = $_POST['stdid2'];
}
if(!empty($_POST['stdid3'])){
	$stdid3 = $_POST['stdid3'];
}
if(!empty($_POST['stdid4'])){
	$stdid4 = $_POST['stdid4'];
}
if(!empty($_POST['stdid5'])){
	$stdid5 = $_POST['stdid5'];
}
if(!empty($_POST['photo1'])){
	$photo1 = $_POST['photo1'];
}
if(!empty($_POST['photo2'])){
	$photo2 = $_POST['photo2'];
}
if(!empty($_POST['photo3'])){
	$photo3 = $_POST['photo3'];
}
if(!empty($_POST['photo4'])){
	$photo4 = $_POST['photo4'];
}
if(!empty($_POST['photo5'])){
	$photo5 = $_POST['photo5'];
}
if(!empty($_POST['cat'])){
	$cat = $_POST['cat'];
}

$sql = "INSERT INTO participant (name1,school1,email1,stdid1,photo1,name2,stdid2,photo2,name3,stdid3,photo3,name4,stdid4,photo4,name5,stdid5,photo5,note) VALUES ('$name1','$school1','$email1','$stdid1','$photo1','$name2','$stdid2','$photo2','$name3','$stdid3','$photo3','$name4','$stdid4','$photo4','$name5','$stdid5','$photo5','$cat')";

if (mysqli_query($conn, $sql)) {
    echo '<script>console.log("New record created successfully");</script>';
}// } else {
//     console.log(mysqli_error($conn));
// }
mysqli_close($conn); 
?>
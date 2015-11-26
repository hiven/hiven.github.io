<?php
	require('connect.php');
    // If the values are posted, insert them into the database.
    if (isset($_POST['username']) && isset($_POST['password'])){
        $username = $_POST['username'];
		$email = $_POST['email'];
        $password = $_POST['password'];
 
        $query = "INSERT INTO `user` (username, password, email) VALUES ('$username', '$password', '$email')";
        $result = mysql_query($query);
        if($result){
            $msg = "User Created Successfully.";
        }
    }
?>
<head>
    <link rel="stylesheet" type="text/css" href="reset.css">
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<div class="header">
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="features.html">Features</a></li>
        <li><a href="pricing.html">Pricing</a></li>
        <li class="active"><a href="register.html">Register</a></li>
        <li><a href="login.html">Login</a></li>
    </ul>
</div>
<div>
<form action="" method="POST">
    <input id="site" type="text" name="site" placeholder="site" />
    <input id="email" type="email" name="email" placeholder="email"/>
    <input id="password" type="password" name="password" placeholder="password" />
    <input type="submit" name="submit" value="Register" />
</form>
</div>
<div class="footer">
    <ul>
        <li><a href="#">Terms</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</div>

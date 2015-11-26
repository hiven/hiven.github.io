<?php 
    include_once("config.php");
?>

<?php if( !(isset( $_POST['register'] ) ) ) { ?>
    <form method="post">
        <input type="text" id="usn" maxlength="30" required autofocus name="username" />
        <input type="password" id="passwd" maxlength="30" required name="password" />
        <input type="password" id="conpasswd" maxlength="30" required name="conpassword" />
        <input type="submit" name="register" value="Register" />
    </form>

<?php 
} else {
    $usr = new Users;
    $usr->storeFormValues( $_POST );
	
    if( $_POST['password'] == $_POST['conpassword'] ) {
        echo $usr->register($_POST);	
    } else {
        echo "Password and Confirm password not match";	
    }
}
?>

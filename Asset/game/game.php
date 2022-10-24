<?php
include '../../koneksi.php';
 
session_start();
 
if (isset($_SESSION['username'])) {
    $username = $_SESSION['username'];
    
    $user = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM `akun` WHERE username = '$username';"));
}else{
    header("Location: index.php");
}  
 

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../native/game.css">
    <link rel="stylesheet" href="../native/style.css">
    <link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css">
</head>
<body>
    <div class="vh-100">
    <div class="kotak1" id="kotak1">
        <div class="judul">
            <h1>Miku Not a Robber</h1>
        </div>
        <!-- <div class="bg"></div> -->
        <div class="kotak2">
            <p class="username"><?php echo "PLAYER : " . $user['username'].'#'. $user['id']."" ?></p>

                <label class="pilih">Choose Color</label>
                <input type="color" id="color">
            
                <a href="../login/logout.php"><button class="btn btn-danger" id="logout">Logout</button></a>
                <button onclick="coba()" class="btn btn-info" id="start">Start</button>
        </div>
    </div>

    <div>
        <p class="username2 d-none" id="username2"><?php echo "PLAYER : " . $user['username'].'#'. $user['id']."" ?></p>
    </div>
    </div>
    

    <script src="game.js"></script>
    <?php
      include '../footer/footer.php'
    ?>
</body>
</html>
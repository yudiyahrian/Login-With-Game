<?php
require 'koneksi.php';
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Project</title>
    <link rel="stylesheet" href="Asset/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="Asset/native/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
</head>
<body>
<section class="vh-100">
  <div class="container-fluid">
    <div class="row">
    <div class="col-sm-6 px-0 d-none d-sm-block">
        <img src="Asset/img/240SR-Sonoda-Umi-I-ll-show-you-when-it-s-finished-Sore-wa-Bokutachi-no-Kise-KsubNZ.png"
          alt="Login image" class="w-100 vh-100" style="object-fit: cover; object-position: center;">
      </div>
      <div class="col-sm-6 text-black" id="login_form">
<div class="px-3 ms-xl-2" id="logo">
<img src="Asset/img/Love_Live!_Logo.png" class="me-3 pt-3 mb-5" width="230px">
</div>

<div class="d-flex align-items-center justify-content-center">

  <form style="width: 23rem;" method="post" id="form_reg" name="form1" class="mt-4">

    <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign in</h3>

    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="user_log" placeholder="Email" name="username" pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}">
        <label for="floatingInput">Username</label>
    </div>

    <div class="form-floating">
        <input type="password" class="form-control" id="password_log" placeholder="Password" name="password">
        <label for="floatingPassword">Password</label>
    </div>

    <div class="pt-1 mt-4 mb-4">
      <button class="btn btn-info btn-lg btn-block" type="button" value="Login" id="butlogin" name="save">Sign in</button>
    </div>
    <p>Doesn't have an account? <button type="button" class="btn btn-link mb-1" id="register" name="register">Sign up</button></p>


  </form>

</div>

</div>

      <div class="col-sm-6 text-black" id="register_form" style="display: none;">
<div class="px-3 ms-xl-2" id="logo">
  <img src="Asset/img/Love_Live!_Logo.png" class="me-3 pt-3 mb-5" width="230px">
</div>
        <div class="d-flex align-items-center justify-content-center">

          <form style="width: 23rem;" method="post" id="form_reg" autocomplete="off" name="form1" class="mt-4">

            <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign Up</h3>
            
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="fullname" placeholder="Fullname" name="fullname">
                <label for="floatingInput">Fullname</label>
            </div>

            <div class="form-floating mb-3">
               <input type="text" class="form-control" id="username" placeholder="Username" name="username">
                <label for="floatingInput">Username</label>
            </div>


            <div class="form-floating">
                <input type="password" class="form-control" id="password" placeholder="Password" name="password">
                <label for="floatingPassword">Password</label>
            </div>

                  <div class="pt-1 mt-4 mb-4">
                    <button class="btn btn-info btn-lg btn-block" type="submit" value="Register" id="butsave" name="save">Sign up</button>
                  </div>
                  <p>have an account? <button type="button" class="btn btn-link mb-1" id="login" name="login">Sign in</button></p>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
    <script type="text/javascript" src="Asset/ajax/jquery-3.6.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.6.0/dist/sweetalert2.all.min.js"></script>
    <script src="Asset/bootstrap/js/bootstrap.min.js"></script>
    <script src="Asset/login/index.js"></script>

    <?php
      include 'Asset/footer/footer.php'
    ?>
</body>

</html>
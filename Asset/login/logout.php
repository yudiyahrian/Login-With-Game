
<?php

include '../../koneksi.php';

unset($_SESSION);
session_destroy();

header("location:../../index.php");
?>
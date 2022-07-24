<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="../view/js/search.js"></script>
    <script src="https://kit.fontawesome.com/3dfa0d7dbe.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../view/css/nav.css">
    <title></title>
</head>
<body>
    <!--Heading Section-->
   <div class="heading">
      
           <h1 class="logoName">Nemesis</h1>
           <input class="search" id="search" type="text" placeholder="Search here" onkeyup="search()">
           <input class="login" type="button" value="login">

   </div>
    <!--Heading Section end-->
    <!--Menu bar section start-->
    <div class="task">
        <?php include 'task.html';?>
    </div>
    <!--Menu bar section close-->
    <!--Footer Section-->
    <div class="End">
          <?php include 'footer.php';?>
    </div>
    
</body>
</html>
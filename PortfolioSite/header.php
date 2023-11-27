<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SeungJoo | Portfolio</title>

  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/@kfonts/nanum-barun-pen/index.css">
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/font-applesdgothicneo@1.0/all.min.css">
  <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200">



  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/header.css">
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/about.css">
  <link rel="stylesheet" href="css/home.css">
  <link rel="stylesheet" href="css/work.css">
  <link rel="stylesheet" href="css/contact.css">
  <link rel="stylesheet" href="css/footer.css">

  <script src="https://kit.fontawesome.com/d1f97cbcf5.js" crossorigin="anonymous"></script>
  <script src="http://code.jquery.com/jquery-latest.js"></script>

  <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
  <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>

  <script src="js/jquery.mousewheel.js"></script>
  <script src="js/jquery-ui.min.js"></script>
  <script src="js/jquery.ui.touch-punch.min.js"></script>
  <script src="js/resCarrousel.js"></script>

  <script src="js/raindrops.js"></script>
  <script src="js/particles.js"></script>

  <script src="js/common.js"></script>
  <script src="js/header.js"></script>
  <script src="js/music-list.js"></script>

  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

  <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
  <script>
    $(function() {
      emailjs.init("4xF7r-b3Cql_PDfw3");
    });
  </script>

</head>

<body>
  <header id="header">
    <h1 id="logo">
      <a href="home">
        <img class="logo_w" src="./img/logo_w.png" alt="">
        <img class="logo_b" src="./img/logo_b.png" alt="">
      </a>
    </h1>

    <div id="nav">
      <nav class="gnb gnb_lg">
        <?php include "menu.php" ?>
      </nav>
    </div><!-- #nav -->

    <div id="mnav">
      <div class="center">
        <nav class="gnb gnb_sm">
          <?php include "menu.php" ?>
        </nav>
      </div>
    </div><!-- #mnnav -->

    <button class="mnav_btn">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </header><!-- #header -->
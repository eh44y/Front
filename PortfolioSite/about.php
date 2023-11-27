<script src="js/about.js"></script>

<section id="about" class="about">
  <div class="inner">

    <div class="aboutme">
      <h2 class="title1">About Me</h2>
      <div class="wraper">
        <div class="textbox">
          <h3 class="title2">
            "안녕하세요.<br>
            신입 웹 펴블리셔, 프론트엔드 개발자 양승주 입니다."
          </h3>
          <p>
            저는 사용자가 조금 더 편리하며 새로운 경험을 할 수 있는 웹사이트를 만드는 것을 목표로 합니다. <br>
            APPLE 사이트 처음으로 접하게 되었을 때 적재적소에 구현된 모션에 의해 제품이 더 부각되고 웹사이트가 고급스러워 보일 수 있다는 것을 느끼게 되었습니다.
            이 경험 이후로 스크롤 모션과 텍스트 모션을 만들어보며 제가 가진 기술들로 웹 사이트를 채워 나가기 위해 항상 새로운 기술들을 탐색하고 제 것으로 만들어 쌓아 올리기 위해 노력하는 개발자 양승주 입니다.
          </p>
          <p>
            "계획 없는 목표는 한낱 꿈에 불과하다."<small> - Saint Exupery</small> <br>
            라는 말처럼 저 또한 목적없는 배움에 그치지 않고 계속되는 공부와 자기 계발을 통해 도태되지 않고
            명확한 목표를 두고 성장하기 위해 노력하는 개발자가 되겠습니다.
          </p>
        </div><!-- textbox -->

        <div class="imgbox">
          <figure>
            <img src="img/about/profile.jpg" alt="">
          </figure>
        </div><!-- imgbox -->
      </div>
    </div><!-- aboutme -->

    <div class="skill_content">
      <div class="script">
        <h3 class="scriptTitle">JavaScript</h3>
        <div class="script1">
          <div id="game2048">
            <div class="wrap">
              <h2 id="title">2048</h2>
              <div class="box">
                <div class="score_box">
                  <span class="score_num">SCROE</span>
                  <span class="score">0</span>
                </div>
                <button class="back">되돌리기</button>
              </div>
            </div>

            <table id="board"></table>
          </div><!-- game2048 -->
          <div class="game_ex">
            <div class="wrap">
              <span></span>
              <h4>2048</h4>
              <p>JavaScript 및 jQuery를 이용하여 2차원 배열을 선언 후 table 내에서의 마우스 드래그 및 방향키를 이용해 셀을 움직이는 게임을 구현하였습니다.</p>
              <br>
              <p class="note">* 해당 기능을 위해 방향키의 스크롤을 제어했습니다.</p>
            </div>
          </div>
        </div><!-- script1 -->
        <div class="script2">
          <div class="music-wrapper">
            <div class="top-bar">
              <i class="material-symbols-outlined">expand_more</i>
              <span>Now Playing</span>
              <i class="material-symbols-outlined">more_horiz</i>
            </div><!-- top-bar -->

            <div class="img-area">
              <img src="/" alt="">
            </div><!-- img-area -->

            <div class="song-details">
              <p class="name"></p>
              <p class="artist"></p>
            </div><!-- song-details -->

            <div class="progress-area">
              <div class="progress-bar">
                <audio id="main-audio" src="/"></audio>
              </div>
              <div class="timer">
                <span class="current">0:00</span>
                <span class="duration">0:00</span>
              </div><!-- timer -->
            </div><!-- progress-area -->

            <div class="controls">
              <i id="repeat" class="material-symbols-outlined" title="Playlist looped">repeat</i>
              <i id="prev" class="material-symbols-outlined">skip_previous</i>
              <div class="play-pause">
                <i class="material-symbols-outlined">play_arrow</i>
              </div><!-- play-pause -->
              <i id="next" class="material-symbols-outlined">skip_next</i>
              <i id="more-music" class="material-symbols-outlined">queue_music</i>
            </div><!-- controls -->

            <div class="music-list">
              <div class="music-header">
                <div class="row">
                  <i class="material-symbols-outlined">queue_music</i>
                  <span>Music List</span>
                </div><!-- row -->
                <i id="close" class="material-symbols-outlined">close</i>
              </div><!-- header -->
              <ul>

              </ul><!-- ul -->
            </div><!-- music-list -->

          </div><!-- music-wrapper -->
          <div class="musicplayer_ex">
            <div class="wrap">
              <span></span>
              <h4>Music Player</h4>
              <p>JavaScript 및 jQuery를 이용하여 버튼을 누르면 음악이 재생되는 기능을 구현하였습니다.</p>
            </div>
          </div>
        </div><!-- script2 -->
      </div><!-- script -->
    </div><!-- skill_content -->

  </div><!-- inner -->
</section><!-- about -->
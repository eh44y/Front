$(function () {
  // game2048 start
  const board = $("#board")[0];
  const score = $("#game2048 .score")[0];
  const back = $("#game2048 .back")[0];
  let data = [];
  const history = [];

  $(back).on("click", () => {
    const prevData = history.pop();
    if (!prevData) {
      return; // 되돌릴 데이터가 없으면 종료
    } else {
      score.textContent = prevData.score;
      data = prevData.table;
      draw();
    }
  }); // back button click

  // table >> fragment >> tr >> td
  function gameStart() {
    const fragment = document.createDocumentFragment();
    $.each([1, 2, 3, 4], function () {
      const rowData = [];
      data.push(rowData);
      const tr = $("<tr></tr>")[0];
      $.each([1, 2, 3, 4], () => {
        rowData.push(0);
        const td = $("<td></td>")[0];
        tr.appendChild(td);
      });
      fragment.appendChild(tr);
    });
    board.appendChild(fragment);
    getRandomCell();
    draw();
  } // gameStart

  function getRandomCell() {
    const emptyCells = [];
    $.each(data, function (i, rowData) {
      $.each(rowData, function (j, cellData) {
        if (!cellData) {
          emptyCells.push([i, j]);
        }
      });
    });
    const randomCell =
      emptyCells[Math.floor(Math.random() * emptyCells.length)];
    data[randomCell[0]][randomCell[1]] = getNum();
  } // getRandomCell

  function getNum() {
    var randomNum = parseInt(Math.random() * 10);
    if ((randomNum == 0, randomNum == 1, randomNum == 2)) return 4;
    return 2;
  } // getNum

  function draw() {
    $.each(data, function (i, rowData) {
      $.each(rowData, function (j, cellData) {
        const target = board.children[i].children[j];
        if (cellData > 0) {
          target.textContent = cellData;
          target.className = "color-" + cellData;
        } else {
          target.textContent = "";
          target.className = "";
        }
      });
    });
  } // draw

  gameStart();

  /* data = [
    [32, 2, 4, 2],
    [64, 4, 8, 4],
    [2, 1024, 1024, 32],
    [32, 16, 64, 4],
  ]; */
  /* draw(); */

  function moveCells(direction) {
    history.push({
      table: JSON.parse(JSON.stringify(data)), // 참조관계를 끊어주지않으면 data값이 계속 들어가게 됨
      score: score.textContent,
    });
    switch (direction) {
      case "left": {
        const newData = [[], [], [], []];
        $.each(data, (i, rowData) => {
          $.each(rowData, (j, cellData) => {
            if (cellData) {
              const currentRow = newData[i]; // 현재 줄
              const prevData = currentRow[currentRow.length - 1];
              if (prevData === cellData) {
                // 직전의 값이 지금 값과 같을 경우
                // 점수 계산
                const scoreNum = parseInt(score.textContent);
                score.textContent =
                  scoreNum + currentRow[currentRow.length - 1] * 2;
                currentRow[currentRow.length - 1] *= -2;
              } else {
                newData[i].push(cellData); // 빈칸 제외 왼쪽부터 넣어줌
              }
            }
          });
        });
        console.log(newData);
        $.each([1, 2, 3, 4], (i, rowData) => {
          $.each([1, 2, 3, 4], (j, cellData) => {
            data[i][j] = Math.abs(newData[i][j]) || 0;
          });
        });
        break;
      }
      case "right": {
        const newData = [[], [], [], []];
        $.each(data, (i, rowData) => {
          $.each(rowData, (j, cellData) => {
            if (rowData[3 - j]) {
              const currentRow = newData[i]; // 현재 줄
              const prevData = currentRow[currentRow.length - 1];
              if (prevData === rowData[3 - j]) {
                // 직전의 값이 지금 값과 같을 경우
                // 점수 계산
                const scoreNum = parseInt(score.textContent);
                score.textContent =
                  scoreNum + currentRow[currentRow.length - 1] * 2;
                currentRow[currentRow.length - 1] *= -2;
              } else {
                newData[i].push(rowData[3 - j]); // 빈칸 제외 왼쪽부터 넣어줌
              }
            }
          });
        });
        console.log(newData);
        $.each([1, 2, 3, 4], (i, rowData) => {
          $.each([1, 2, 3, 4], (j, cellData) => {
            data[i][3 - j] = Math.abs(newData[i][j]) || 0;
          });
        });
        break;
      }
      case "up": {
        const newData = [[], [], [], []];
        $.each(data, (i, rowData) => {
          $.each(rowData, (j, cellData) => {
            if (cellData) {
              const currentRow = newData[j]; // 현재 줄
              const prevData = currentRow[currentRow.length - 1];
              if (prevData === cellData) {
                // 직전의 값이 지금 값과 같을 경우
                // 점수 계산
                const scoreNum = parseInt(score.textContent);
                score.textContent =
                  scoreNum + currentRow[currentRow.length - 1] * 2;
                currentRow[currentRow.length - 1] *= -2;
              } else {
                newData[j].push(cellData); // 빈칸 제외 왼쪽부터 넣어줌
              }
            }
          });
        });
        console.log(newData);
        $.each([1, 2, 3, 4], (i, cellData) => {
          $.each([1, 2, 3, 4], (j, rowData) => {
            data[j][i] = Math.abs(newData[i][j]) || 0;
          });
        });
        break;
      }
      case "down": {
        const newData = [[], [], [], []];
        $.each(data, (i, rowData) => {
          $.each(rowData, (j, cellData) => {
            if (data[3 - i][j]) {
              const currentRow = newData[j]; // 현재 줄
              const prevData = currentRow[currentRow.length - 1];
              if (prevData === data[3 - i][j]) {
                // 직전의 값이 지금 값과 같을 경우
                // 점수 계산
                const scoreNum = parseInt(score.textContent);
                score.textContent =
                  scoreNum + currentRow[currentRow.length - 1] * 2;
                currentRow[currentRow.length - 1] *= -2;
              } else {
                newData[j].push(data[3 - i][j]); // 빈칸 제외 왼쪽부터 넣어줌
              }
            }
          });
        });
        console.log(newData);
        $.each([1, 2, 3, 4], (i, cellData) => {
          $.each([1, 2, 3, 4], (j, rowData) => {
            data[3 - j][i] = Math.abs(newData[i][j]) || 0;
          });
        });
        break;
      }
    }
    if (data.flat().includes(2048)) {
      // 2048 셀이 있으면 승리
      draw();
      setTimeout(() => {
        alert('축하합니다. "2048"을 만들었습니다!');
      }, 0);
    } else if (!data.flat().includes(0)) {
      // 빈 칸이 없으면 패배
      alert(`패배했습니다 ... ${score.textContent}점`);
    } else {
      getRandomCell();
      draw();
    }
  } // moveCells

  $(window).on("keyup", (e) => {
    if (e.key === "ArrowUp") {
      moveCells("up");
    } else if (e.key === "ArrowDown") {
      moveCells("down");
    } else if (e.key === "ArrowLeft") {
      moveCells("left");
    } else if (e.key === "ArrowRight") {
      moveCells("right");
    }
  }); // keyup

  let startCoord;
  $("#game2048").on("mousedown", (e) => {
    startCoord = [e.clientX, e.clientY];
  }); // mousedown

  $("#game2048").on("mouseup", (e) => {
    const endCoord = [e.clientX, e.clientY];
    const dirX = endCoord[0] - startCoord[0];
    const dirY = endCoord[1] - startCoord[1];
    if (dirX < 0 && Math.abs(dirX) > Math.abs(dirY)) {
      moveCells("left");
    } else if (dirX > 0 && Math.abs(dirX) > Math.abs(dirY)) {
      moveCells("right");
    } else if (dirY < 0 && Math.abs(dirX) <= Math.abs(dirY)) {
      moveCells("up");
    } else if (dirY > 0 && Math.abs(dirX) <= Math.abs(dirY)) {
      moveCells("down");
    } // mouseup
  });
  // game2048 end

  // musicPlayer start
  const musicWrapper = $(".music-wrapper");
  const musicImg = musicWrapper.find(".img-area img");
  const musicName = musicWrapper.find(".song-details .name");
  const musicArtist = musicWrapper.find(".song-details .artist");
  /* const main_Audio = new Audio(); */
  const mainAudio = musicWrapper.find("#main-audio")[0];
  const playPauseBtn = musicWrapper.find(".play-pause");
  const prevBtn = musicWrapper.find("#prev");
  const nextBtn = musicWrapper.find("#next");
  const progressArea = musicWrapper.find(".progress-area");
  const progressBar = musicWrapper.find(".progress-bar");
  const musicList = musicWrapper.find(".music-list");
  const showMoreBtn = musicWrapper.find("#more-music");
  const hideMusicBtn = musicWrapper.find(musicList).find("#close");

  // 1
  let musicIndex = Math.floor(Math.random() * allMusic.length + 1);

  $(window).on("load", () => {
    loadMusic(musicIndex);
    pausedMusic();
  });

  function loadMusic(indexNumb) {
    musicName.text(allMusic[indexNumb - 1].name);
    musicArtist.text(allMusic[indexNumb - 1].artist);
    musicImg.attr("src", `img/music/${allMusic[indexNumb - 1].img}.jpg`);
    mainAudio.src = `musics/${allMusic[indexNumb - 1].src}.mp3`;
    /* mainAudio.src = `musics/${allMusic[indexNumb - 1].src}.mp3`; */
  } // fn loadMusic end

  function playMusic() {
    musicWrapper.addClass("paused");
    playPauseBtn.find("i").text("pause");
    playPauseBtn
      .find("i.material-symbols-outlined")
      .css("font-variation-settings", "'FILL' " + 0 + "");
    mainAudio.play();
    playingNow();
  } // fn playMusic end

  function pauseMusic() {
    musicWrapper.removeClass("paused");
    playPauseBtn.find("i").text("play_arrow");
    playPauseBtn
      .find("i.material-symbols-outlined")
      .css("font-variation-settings", "'FILL' " + 1 + "");
    mainAudio.pause();
    pausedMusic();
  } // fn pauseMusic end

  function prevMusic() {
    musicIndex--;
    musicIndex < 1 ? (musicIndex = allMusic.length) : (musicIndex = musicIndex);
    loadMusic(musicIndex);
    playMusic();
    playingNow();
  } // fn prevMusic end

  function nextMusic() {
    musicIndex++;
    musicIndex > allMusic.length ? (musicIndex = 1) : (musicIndex = musicIndex);
    loadMusic(musicIndex);
    playMusic();
    playingNow();
  } // fn nextMusic end

  playPauseBtn.on("click", () => {
    const isMusicPaused = musicWrapper.hasClass("paused");
    isMusicPaused ? pauseMusic() : playMusic();
  }); // click

  prevBtn.on("click", () => {
    prevMusic();
  }); // click

  nextBtn.on("click", () => {
    nextMusic();
  }); // click

  mainAudio.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime / duration) * 100;
    progressBar.css("width", `${progressWidth}%`);

    let musicCurrentTime = musicWrapper.find(".current");
    let musicDuration = musicWrapper.find(".duration");

    // duration time
    mainAudio.addEventListener("loadeddata", () => {
      let audioDuration = mainAudio.duration;
      let totalMin = Math.floor(audioDuration / 60);
      let totalSec = Math.floor(audioDuration % 60);
      if (totalSec < 10) {
        totalSec = `0${totalSec}`;
      }
      musicDuration.text(`${totalMin}:${totalSec}`);
    }); // loadeddata

    // current time
    let currentlMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
      currentSec = `0${currentSec}`;
    }
    musicCurrentTime.text(`${currentlMin}:${currentSec}`);
  }); // timeupdate

  progressArea.on("click", (e) => {
    let progressWidthval = $(".progress-area").width();
    let clickedOffsetX = e.offsetX;
    let songDuration = mainAudio.duration;

    mainAudio.currentTime = (clickedOffsetX / progressWidthval) * songDuration;
    playMusic();
    /* alert(progressWidthval); */
    /* alert(aaaa); */
  }); // click

  const repeatBtn = musicWrapper.find("#repeat");
  repeatBtn.on("click", () => {
    let getText = repeatBtn.text();
    switch (getText) {
      case "repeat":
        repeatBtn.text("repeat_one");
        repeatBtn.attr("title", "Song looped");
        break;
      case "repeat_one":
        repeatBtn.text("shuffle");
        repeatBtn.attr("title", "Playback shuffle");
        break;
      case "shuffle":
        repeatBtn.text("repeat");
        repeatBtn.attr("title", "Playlist looped");
        break;
    } // switch
  }); // click

  mainAudio.addEventListener("ended", () => {
    let getText = repeatBtn.text();
    switch (getText) {
      case "repeat":
        nextMusic();
        break;
      case "repeat_one":
        mainAudio.currentTime = 0;
        loadMusic(musicIndex);
        playMusic();
        break;
      case "shuffle":
        let randIndex = Math.floor(Math.random() * allMusic.length + 1);
        do {
          randIndex = Math.floor(Math.random() * allMusic.length + 1);
        } while (musicIndex == randIndex);
        musicIndex = randIndex;
        loadMusic(musicIndex);
        playMusic();
        playingNow();
        break;
    } // switch
  }); // ended

  showMoreBtn.on("click", () => {
    musicList.toggleClass("show");
  }); // click
  hideMusicBtn.on("click", () => {
    showMoreBtn.click();
  }); // click

  const ulTag = musicWrapper.find("ul");
  for (let i = 0; i < allMusic.length; i++) {
    let liTag = `
    <li li-index="${i + 1}">
      <div class="row">
        <span>${allMusic[i].name}</span>
        <p>${allMusic[i].artist}</p>
      </div>
      <audio class="${allMusic[i].src}" src="musics/${
      allMusic[i].src
    }.mp3"></audio>
      <span id="${allMusic[i].src}" class="audio-duration"></span>
    </li>
    `;
    ulTag.append(liTag);
    let liAudioDuration = ulTag.find(`#${allMusic[i].src}`); // span
    let liAudioTag = ulTag.find(`.${allMusic[i].src}`); // audio

    liAudioTag[0].addEventListener("loadeddata", () => {
      let audioDuration = liAudioTag[0].duration; // audio.duration
      let totalMin = Math.floor(audioDuration / 60);
      let totalSec = Math.floor(audioDuration % 60);
      if (totalSec < 10) {
        totalSec = `0${totalSec}`;
      }
      liAudioDuration.text(`${totalMin}:${totalSec}`);
      liAudioDuration.attr("liList-duration", `${totalMin}:${totalSec}`);
    }); // loadeddata
  } // for end

  const allLiTags = ulTag.find("li");
  function playingNow() {
    $.each(allLiTags, function (j) {
      let audioTag = $(this).find(".audio-duration");
      let liListDuration = audioTag.attr("liLIst-duration");
      $(this).removeClass("playing");
      audioTag.removeClass("material-symbols-outlined");
      audioTag.removeClass("active");
      $(this).find(audioTag).text(liListDuration);
      if ($(this).attr("li-index") == musicIndex) {
        $(this).addClass("playing");
        audioTag.addClass("material-symbols-outlined");
        audioTag.addClass("active");
        audioTag.text("music_note");
      } // if
      /* $(this).attr("onclick", "clicked()"); */
    }); // each
  } // fn playingNow end

  function pausedMusic() {
    $.each(allLiTags, function (j) {
      let audioTag = $(this).find(".audio-duration");
      let liListDuration = audioTag.attr("liLIst-duration");
      $(this).removeClass("playing");
      audioTag.removeClass("material-symbols-outlined");
      audioTag.removeClass("active");
      $(this).find(audioTag).text(liListDuration);
    }); // each
  } // fn pausedMusic end

  $.each(allLiTags, function () {
    $(this).on("click", function () {
      let getLiIndex = $(this).attr("li-index");
      musicIndex = getLiIndex;
      loadMusic(musicIndex);
      playMusic();
      playingNow();
    }); // click
  }); // each
  // musicPlayer end
}); //ready

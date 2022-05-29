import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  data = {
    duration: 61.857,
    percent: 0.049,
    seconds: 3.034,
  };
  getCurrentTime();
}

function getCurrentTime() {
  player.getCurrentTime().then(seconds => {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
  });
}

let time = Number(JSON.parse(localStorage.getItem('videoplayer-current-time')));

player.setCurrentTime(time);

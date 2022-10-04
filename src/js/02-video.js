import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function onCurrentTime(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

player.on('timeupdate', throttle(onCurrentTime, 1000));

function onPlayTime(data) {
  const stopedTime = localStorage.getItem('videoplayer-current-time');
  if (data.seconds !== stopedTime) {
    player.setCurrentTime(stopedTime);
  }
}

player.on('play', onPlayTime);

// console.log(player);

// player.on('timeupdate', _.throttle(player.getCurrentTime(), 1000));
// player.getCurrentTime().then(function (seconds) {
//   return;
// });

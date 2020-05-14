const close = document.getElementById('close');
const banner = document.getElementById('banner');
const video = document.getElementById('video');
const playButton = document.getElementById('play-button');

const closeSection = () => {
  banner.style.display = 'none';
};

close.addEventListener('click', closeSection, true);

const handleButton = () => {
  {
    video.style.display = 'block';
    playButton.style.display = 'block';
  }
};

watch.addEventListener('click', handleButton);

/* The footer dino: runs along its track only while the footer is on screen. The dino is a button that
   pauses and restarts it; hovering it also pauses it (styles.css). Under reduced motion it stands still. */
(function(){
  var dino=document.querySelector('.dino'), track=document.querySelector('.dino-track');
  if(!dino||!track) return;
  dino.addEventListener('click',function(){
    var paused=dino.getAttribute('aria-pressed')==='true';
    dino.setAttribute('aria-pressed',String(!paused));
    dino.setAttribute('aria-label',paused?'Pause the running dino':'Let the dino run');
  });
  if(!('IntersectionObserver' in window)){ track.classList.add('on'); return; }
  new IntersectionObserver(function(es){ track.classList.toggle('on',es[0].isIntersecting); }).observe(track);
})();

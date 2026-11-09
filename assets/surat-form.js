/* Surat interest form: the "Register interest" button opens a Tally form in a pop-up.
   Set data-tally on the button to your Tally form ID (the part after tally.so/r/); the button's href
   is the form's own page, used without script. Tally's script loads only when someone clicks, so a visitor
   who never opens the form loads nothing from Tally. */
(function(){
  var btn=document.getElementById('surat-interest');
  if(!btn) return;
  var id=(btn.getAttribute('data-tally')||'').trim();
  if(!id) return;
  btn.href='https://tally.so/r/'+encodeURIComponent(id);   // without script: the form's own page
  btn.target='_blank'; btn.rel='noopener';
  var loading=null;
  function load(){
    if(window.Tally) return Promise.resolve();
    if(!loading) loading=new Promise(function(res,rej){
      var s=document.createElement('script'); s.src='https://tally.so/widgets/embed.js'; s.async=true;
      s.onload=res; s.onerror=rej; document.head.appendChild(s);
    });
    return loading;
  }
  btn.addEventListener('click',function(e){
    e.preventDefault();
    load().then(function(){ window.Tally.openPopup(id,{layout:'modal',width:520,hideTitle:true,overlay:true}); })
          .catch(function(){ window.open(btn.href,'_blank','noopener'); });
  });
})();

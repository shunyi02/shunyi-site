/* Contact card: the email address never appears in the page. It is kept reversed in two parts
   (data-a, data-b) and joined only when someone clicks, so bots reading the HTML find no address.
   Send email opens the visitor's email app; Copy address puts it on the clipboard, or shows it in
   the card when the clipboard is blocked. */
(function(){
  function addr(b){
    var r=function(t){return t.split('').reverse().join('')};
    return r(b.getAttribute('data-a'))+'@'+r(b.getAttribute('data-b'));
  }
  [].forEach.call(document.querySelectorAll('.mail[data-a]'),function(b){
    b.addEventListener('click',function(){ location.href='mailto:'+addr(b); });
  });
  [].forEach.call(document.querySelectorAll('.copy[data-a]'),function(b){
    var label=b.textContent;
    b.addEventListener('click',function(){
      var a=addr(b);
      function done(){ b.textContent='Copied'; setTimeout(function(){ b.textContent=label; },1600); }
      function show(){ var v=b.closest('.link-card').querySelector('.v'); if(v) v.textContent=a; }
      try{ navigator.clipboard.writeText(a).then(done,show); }catch(e){ show(); }
    });
  });
})();

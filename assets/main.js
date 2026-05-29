
document.getElementById('hbg').addEventListener('click',function(){
  document.getElementById('nm').classList.toggle('open');
});
const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')});
},{threshold:0.1});
document.querySelectorAll('.up,.up2,.up3').forEach(el=>obs.observe(el));
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const t=document.querySelector(a.getAttribute('href'));
    if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});document.getElementById('nm').classList.remove('open');}
  });
});


function sendToWhatsApp(){
  const facility = document.getElementById('ff_facility').value.trim();
  const name = document.getElementById('ff_name').value.trim();
  const email = document.getElementById('ff_email').value.trim();
  const phone = document.getElementById('ff_phone').value.trim();
  const type = document.getElementById('ff_type').value;
  const msg = document.getElementById('ff_msg').value.trim();
  if(!name||!phone){alert('Please fill in your name and phone number.');return;}
  const text = encodeURIComponent(
    '🌿 *New ECO IDEA Lead*\n\n' +
    '🏫 Facility: ' + (facility||'—') + '\n' +
    '👤 Name: ' + name + '\n' +
    '📧 Email: ' + (email||'—') + '\n' +
    '📞 Phone: ' + phone + '\n' +
    '🏷️ Type: ' + (type||'—') + '\n' +
    '💬 Message: ' + (msg||'—')
  );
  window.open('https://wa.me/13235233175?text=' + text, '_blank');
}


function initBA(sliderId, beforeId, handleId) {
  var slider = document.getElementById(sliderId);
  var before = document.getElementById(beforeId);
  var handle = document.getElementById(handleId);
  var dragging = false;
  function setPos(x) {
    var rect = slider.getBoundingClientRect();
    var pct = Math.min(Math.max((x - rect.left) / rect.width, 0.02), 0.98);
    before.style.width = (pct * 100) + '%';
    handle.style.left = (pct * 100) + '%';
  }
  slider.addEventListener('mousedown', function(e){ dragging=true; setPos(e.clientX); e.preventDefault(); });
  slider.addEventListener('touchstart', function(e){ dragging=true; setPos(e.touches[0].clientX); },{passive:true});
  window.addEventListener('mousemove', function(e){ if(dragging) setPos(e.clientX); });
  window.addEventListener('touchmove', function(e){ if(dragging) setPos(e.touches[0].clientX); },{passive:true});
  window.addEventListener('mouseup', function(){ dragging=false; });
  window.addEventListener('touchend', function(){ dragging=false; });
}
document.addEventListener('DOMContentLoaded', function(){
  initBA('sl1','sl1b','sl1h');
  initBA('sl2','sl2b','sl2h');
});



document.getElementById('hbg').addEventListener('click',function(){
  document.getElementById('nm').classList.toggle('open');
});
const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')});
},{threshold:0.1});
document.querySelectorAll('.up,.up2,.up3').forEach(el=>obs.observe(el));
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const t=document.querySelector(a.getAttribute('href'));
    if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});document.getElementById('nm').classList.remove('open');}
  });
});


function sendToWhatsApp(){
  const facility = document.getElementById('ff_facility').value.trim();
  const name = document.getElementById('ff_name').value.trim();
  const email = document.getElementById('ff_email').value.trim();
  const phone = document.getElementById('ff_phone').value.trim();
  const type = document.getElementById('ff_type').value;
  const msg = document.getElementById('ff_msg').value.trim();
  if(!name||!phone){alert('Please fill in your name and phone number.');return;}
  const text = encodeURIComponent(
    '🌿 *New ECO IDEA Lead*\n\n' +
    '🏫 Facility: ' + (facility||'—') + '\n' +
    '👤 Name: ' + name + '\n' +
    '📧 Email: ' + (email||'—') + '\n' +
    '📞 Phone: ' + phone + '\n' +
    '🏷️ Type: ' + (type||'—') + '\n' +
    '💬 Message: ' + (msg||'—')
  );
  window.open('https://wa.me/13235233175?text=' + text, '_blank');
}


function initBA(sliderId, beforeId, handleId) {
  var slider = document.getElementById(sliderId);
  var before = document.getElementById(beforeId);
  var handle = document.getElementById(handleId);
  var dragging = false;
  function setPos(x) {
    var rect = slider.getBoundingClientRect();
    var pct = Math.min(Math.max((x - rect.left) / rect.width, 0.02), 0.98);
    before.style.width = (pct * 100) + '%';
    handle.style.left = (pct * 100) + '%';
  }
  slider.addEventListener('mousedown', function(e){ dragging=true; setPos(e.clientX); e.preventDefault(); });
  slider.addEventListener('touchstart', function(e){ dragging=true; setPos(e.touches[0].clientX); },{passive:true});
  window.addEventListener('mousemove', function(e){ if(dragging) setPos(e.clientX); });
  window.addEventListener('touchmove', function(e){ if(dragging) setPos(e.touches[0].clientX); },{passive:true});
  window.addEventListener('mouseup', function(){ dragging=false; });
  window.addEventListener('touchend', function(){ dragging=false; });
}
document.addEventListener('DOMContentLoaded', function(){
  initBA('sl1','sl1b','sl1h');
  initBA('sl2','sl2b','sl2h');
});


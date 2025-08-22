// Mobile nav (if needed later)
const $ = (q,ctx=document)=>ctx.querySelector(q);

// Toggle password visibility
document.querySelectorAll('[data-toggle="password"]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const target = document.getElementById(btn.getAttribute('data-target'));
    if(!target) return;
    const to = target.type === 'password' ? 'text' : 'password';
    target.type = to;
    btn.setAttribute('aria-pressed', to === 'text');
    btn.innerText = to === 'text' ? 'Hide' : 'Show';
  });
});

// Simple password strength meter on register
const pwd = $('#password');
const meter = $('#pwd-meter');
if(pwd && meter){
  const bar = meter.querySelector('span');
  const calc = (v)=>{
    let score = 0;
    if(v.length >= 8) score++;
    if(/[A-Z]/.test(v)) score++;
    if(/[a-z]/.test(v)) score++;
    if(/\d/.test(v)) score++;
    if(/[^A-Za-z0-9]/.test(v)) score++;
    return Math.min(score,5);
  };
  pwd.addEventListener('input',()=>{
    const s = calc(pwd.value);
    const pct = (s/5)*100;
    bar.style.width = pct + '%';
  });
}

// Basic confirm-password check
const form = $('#register-form');
if(form){
  form.addEventListener('submit',(e)=>{
    const p1 = $('#password').value;
    const p2 = $('#confirm').value;
    if(p1 !== p2){
      e.preventDefault();
      alert('Password dan konfirmasi tidak sama.');
    }
  });
}

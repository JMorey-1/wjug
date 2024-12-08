document.addEventListener('DOMContentLoaded',()=>{const loginForm=document.getElementById('loginForm');const joinForm=document.getElementById('joinForm');const rules={email:{validate:value=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),message:'Please enter a valid email address'},password:{validate:value=>{const hasLength=value.length>=8;const hasUpper=/[A-Z]/.test(value);const hasLower=/[a-z]/.test(value);const hasNumber=/\d/.test(value);if(loginForm){return value.length>=6}
return hasLength&&hasUpper&&hasLower&&hasNumber},message:'Password must include uppercase, lowercase, number and be at least 8 characters'},username:{validate:value=>/^[a-zA-Z][a-zA-Z0-9_]{2,14}$/.test(value),message:'Username must be 3-15 characters and start with a letter'},firstName:{validate:value=>value.trim().length>0,message:'Please enter your first name'},lastName:{validate:value=>value.trim().length>0,message:'Please enter your last name'},experience:{validate:value=>value!=='',message:'Please select your experience level'}};function validateField(input){const rule=rules[input.id];const errorElement=document.getElementById(`${input.id}Error`);const isValid=rule.validate(input.value);errorElement.classList.toggle('d-none',isValid);if(input.id==='password'&&input.form.id==='joinForm'){updatePasswordStrength(input.value)}
return isValid}
function updatePasswordStrength(password){const strengthBar=document.getElementById('passwordStrength');const progressContainer=strengthBar.parentElement;const errorElement=document.getElementById('passwordError');progressContainer.classList.toggle('d-none',password.length===0);let strength=0;let message=[];let strengthText='';if(password.length>=8)strength+=25;else message.push('length (8+ chars)');if(/[A-Z]/.test(password))strength+=25;else message.push('uppercase letter');if(/[a-z]/.test(password))strength+=25;else message.push('lowercase letter');if(/\d/.test(password))strength+=25;else message.push('number.');strengthBar.style.width=strength+'%';strengthBar.className='progress-bar';strengthBar.style.width=strength+'%';strengthBar.className='progress-bar';if(strength<=25){strengthBar.classList.add('bg-danger');strengthText='Weak password. '}else if(strength<=75){strengthBar.classList.add('bg-warning');strengthText='Moderate password. '}else if(strength<100){strengthBar.classList.add('bg-success');strengthText='Almost there. '}else{strengthBar.classList.add('bg-success')}
if(strength<100){errorElement.classList.remove('d-none');errorElement.textContent=strengthText+`Missing: ${message.join(', ')}`}else{errorElement.classList.add('d-none')}}
function attachValidation(form){const inputs=form.querySelectorAll('input, select');inputs.forEach(input=>{if(rules[input.id]){input.addEventListener('input',()=>validateField(input));input.addEventListener('blur',()=>validateField(input))}});form.addEventListener('submit',(e)=>{e.preventDefault();let isValid=!0;inputs.forEach(input=>{if(rules[input.id]&&!validateField(input)){isValid=!1}});if(isValid&&form.id==='joinForm'){document.getElementById('successMessage').classList.remove('d-none');form.reset();if(document.getElementById('passwordStrength')){document.getElementById('passwordStrength').style.width='0%';document.getElementById('passwordFeedback').textContent=''}}else if(isValid&&form.id==='loginForm'){document.getElementById('loginError').classList.remove('d-none')}})}
if(loginForm)attachValidation(loginForm);if(joinForm)attachValidation(joinForm);})
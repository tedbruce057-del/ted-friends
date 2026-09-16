// Supabase connection will be added next.
// Never put your database password or service_role key in this file.
const SUPABASE_URL = "PASTE_YOUR_SUPABASE_PROJECT_URL_HERE";
const SUPABASE_PUBLISHABLE_KEY = "PASTE_YOUR_SUPABASE_PUBLISHABLE_KEY_HERE";
const message=document.querySelector("#message");
function showMessage(t){if(message) message.textContent=t;}
document.querySelector("#signupForm")?.addEventListener("submit",e=>{e.preventDefault();showMessage("Next we'll connect Supabase sign-up.");});
document.querySelector("#loginForm")?.addEventListener("submit",e=>{e.preventDefault();showMessage("Next we'll connect Supabase login.");});
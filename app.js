// Supabase connection will be added next.
// Never put your database password or service_role key in this file.
const SUPABASE_URL = "https://iunteanqmiptspmtzrop.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_jNY_ugNtD6iEV6CVnouu3Q_paQCjuQb";
const message=document.querySelector("#message");
function showMessage(t){if(message) message.textContent=t;}
document.querySelector("#signupForm")?.addEventListener("submit",e=>{e.preventDefault();showMessage("Next we'll connect Supabase sign-up.");});
document.querySelector("#loginForm")?.addEventListener("submit",e=>{e.preventDefault();showMessage("Next we'll connect Supabase login.");});

const SUPABASE_URL = "https://iunteanqmiptspmtzrop.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_jNY_ugNtD6iEV6CVnouu3Q_paQCjuQb";

const { createClient } = window.supabase;
const client = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

const message = document.querySelector("#message");

function showMessage(text) {
  if (message) {
    message.textContent = text;
  }
}

// SIGN UP
document.querySelector("#signupForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  showMessage("Creating your account...");

  const { error } = await client.auth.signUp({
    email: email,
    password: password
  });

  if (error) {
    showMessage(error.message);
  } else {
    showMessage("Account created! Check your email to confirm it.");
  }
});

// LOG IN
document.querySelector("#loginForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  showMessage("Logging in...");

  const { error } = await client.auth.signInWithPassword({
    email: email,
    password: password
  });

  if (error) {
    showMessage(error.message);
  } else {
    showMessage("Login successful! 🎉");
  }
});

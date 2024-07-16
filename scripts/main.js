// scripts/main.js
import { auth } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

document.addEventListener('DOMContentLoaded', () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            if (window.location.pathname === '/index.html') {
                window.location.href = 'dashboard.html';
            }
        } else {
            if (window.location.pathname === '/dashboard.html') {
                window.location.href = 'login.html';
            }
        }
    });
});

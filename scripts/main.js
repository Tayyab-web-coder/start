// scripts/main.js
import { auth } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

document.addEventListener('DOMContentLoaded', () => {
    onAuthStateChanged(auth, (user) => {
        const path = window.location.pathname;
        if (user) {
            if (path === '/index.html' || path === '/') {
                window.location.href = 'dashboard.html';
            }
        } else {
            if (path === '/dashboard.html') {
                window.location.href = 'login.html';
            }
        }
    });
});

// scripts/auth.js
import { auth } from './firebase-config.js';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

document.addEventListener('DOMContentLoaded', () => {
    const signUpForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const forgotPasswordForm = document.getElementById('forgot-password-form');
    const logoutButton = document.getElementById('logout-button');

    if (signUpForm) {
        signUpForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = signUpForm['signup-email'].value;
            const password = signUpForm['signup-password'].value;

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    window.location.href = 'dashboard.html';
                })
                .catch((error) => {
                    alert(error.message);
                });
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = loginForm['login-email'].value;
            const password = loginForm['login-password'].value;

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    window.location.href = 'dashboard.html';
                })
                .catch((error) => {
                    alert('Invalid login credentials. Please sign up first.');
                    const signupLink = document.createElement('a');
                    signupLink.href = 'signup.html';
                    signupLink.innerText = 'Go to Sign Up';
                    document.body.appendChild(signupLink);
                });
        });
    }

    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = forgotPasswordForm['forgot-password-email'].value;

            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert('Password reset email sent.');
                })
                .catch((error) => {
                    alert(error.message);
                });
        });
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            signOut(auth).then(() => {
                window.location.href = 'index.html';
            }).catch((error) => {
                alert(error.message);
            });
        });
    }
});

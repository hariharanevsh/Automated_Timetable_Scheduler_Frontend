// ============================================
//   API HELPER - Connects frontend to Flask
// ============================================

const API = 'http://localhost:5000/api';

// Check if admin is logged in
function requireLogin() {
    if (!sessionStorage.getItem('loggedIn')) {
        window.location.href = 'index.html';
    }
}

// Generic fetch helper
async function apiFetch(endpoint, method = 'GET', body = null) {
    const opts = {
        method,
        headers: { 'Content-Type': 'application/json' }
    };
    if (body) opts.body = JSON.stringify(body);
    const res = await fetch(API + endpoint, opts);
    return res.json();
}

// Show a temporary alert message
function showAlert(message, type = 'success', containerId = 'alert-box') {
    const box = document.getElementById(containerId);
    if (!box) return;
    box.className = `alert alert-${type}`;
    box.textContent = message;
    box.classList.remove('hidden');
    setTimeout(() => box.classList.add('hidden'), 3000);
}

// Open a modal
function openModal(id) {
    document.getElementById(id).classList.add('open');
}

// Close a modal
function closeModal(id) {
    document.getElementById(id).classList.remove('open');
}

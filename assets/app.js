const q = document.getElementById('chapterSearch');

if (q) {
q.addEventListener('input', e => {
const t = e.target.value.toLowerCase().trim();
document.querySelectorAll('[data-title]').forEach(el => {
el.style.display = el.dataset.title.includes(t) ? '' : 'none';
});
});
}

document.querySelectorAll('[data-year]').forEach(el => {
el.textContent = new Date().getFullYear();
});

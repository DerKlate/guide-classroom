/**
 * Logique Applicative - Académie Virtuelle des Formateurs (Sénégal)
 * Gestion du Wizard, du lecteur vidéo synchronisé et de l'état d'avancement.
 */

const totalTasks = 14;
const taskKeys = [
  'm1-t1', 'm1-t2', 'm1-t3', 'm1-t4', 'm1-t5',
  'm2-t1', 'm2-t2', 'm2-t3', 'm2-t4', 'm2-t5',
  'm3-t1', 'm3-t2', 'm3-t3', 'm3-t4'
];

let currentModule = 1;

// Initialisation
window.addEventListener('DOMContentLoaded', () => {
  loadSavedTasks();
  updateProgressDisplay();
});

// Basculer entre les 3 modules
function switchModule(modNum) {
  currentModule = modNum;

  [1, 2, 3].forEach(m => {
    const container = document.getElementById(`module-container-${m}`);
    const tab = document.getElementById(`tab-module-${m}`);
    
    if (m === modNum) {
      container.classList.remove('hidden');
      container.classList.add('fade-in');
      if (m === 1) {
        tab.className = "group flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 p-2.5 rounded-xl border-2 transition-all font-semibold text-xs sm:text-sm bg-senegal-green text-white border-senegal-green shadow-md";
      } else if (m === 2) {
        tab.className = "group flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 p-2.5 rounded-xl border-2 transition-all font-semibold text-xs sm:text-sm bg-senegal-gold text-senegal-earth border-senegal-gold shadow-md";
      } else {
        tab.className = "group flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 p-2.5 rounded-xl border-2 transition-all font-semibold text-xs sm:text-sm bg-senegal-terra text-white border-senegal-terra shadow-md";
      }
    } else {
      container.classList.add('hidden');
      tab.className = "group flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 p-2.5 rounded-xl border-2 transition-all font-semibold text-xs sm:text-sm bg-white text-senegal-earth border-gray-200 hover:border-senegal-gold";
    }
  });

  window.scrollTo({ top: 120, behavior: 'smooth' });
}

// Aller directement à une étape
function jumpToStep(moduleNum, stepNum) {
  const maxSteps = (moduleNum === 3) ? 4 : 5;

  for (let s = 1; s <= maxSteps; s++) {
    const stepBlock = document.getElementById(`step-content-${moduleNum}-${s}`);
    const stepBtn = document.getElementById(`step-btn-${moduleNum}-${s}`);
    
    if (stepBlock) {
      if (s === stepNum) {
        stepBlock.classList.remove('hidden');
        stepBlock.classList.add('fade-in');
      } else {
        stepBlock.classList.add('hidden');
      }
    }

    if (stepBtn) {
      if (s === stepNum) {
        if (moduleNum === 1) stepBtn.className = "step-btn px-3 py-1.5 rounded-lg bg-senegal-green text-white font-bold whitespace-nowrap shadow-sm";
        if (moduleNum === 2) stepBtn.className = "step-btn px-3 py-1.5 rounded-lg bg-senegal-gold text-senegal-earth font-bold whitespace-nowrap shadow-sm";
        if (moduleNum === 3) stepBtn.className = "step-btn px-3 py-1.5 rounded-lg bg-senegal-terra text-white font-bold whitespace-nowrap shadow-sm";
      } else {
        stepBtn.className = "step-btn px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 whitespace-nowrap";
      }
    }
  }
}

// Contrôler la vidéo YouTube
function setVideoTime(moduleNum, videoId, seconds) {
  const iframe = document.getElementById(`video-frame-${moduleNum}`);
  if (iframe) {
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?start=${seconds}&autoplay=1&enablejsapi=1`;
    showToast("🎬 Vidéo calée au moment précis !", "⏱️");
  }
}

// Gestion des Checkboxes
function toggleTask(id) {
  const isChecked = document.getElementById(id).checked;
  try {
    localStorage.setItem('senegal_cls_' + id, isChecked ? 'true' : 'false');
  } catch (e) {}
  updateProgressDisplay();
  if (isChecked) showToast("Étape enregistrée avec succès !", "👏");
}

function loadSavedTasks() {
  taskKeys.forEach(key => {
    try {
      const val = localStorage.getItem('senegal_cls_' + key);
      const el = document.getElementById(key);
      if (el && val === 'true') el.checked = true;
    } catch (e) {}
  });
}

function resetAllTasks() {
  taskKeys.forEach(key => {
    const el = document.getElementById(key);
    if (el) el.checked = false;
    try {
      localStorage.removeItem('senegal_cls_' + key);
    } catch (e) {}
  });
  updateProgressDisplay();
  showToast("Progression réinitialisée.", "🔄");
}

function updateProgressDisplay() {
  let m1Count = 0;
  let m2Count = 0;
  let m3Count = 0;

  for (let i = 1; i <= 5; i++) {
    if (document.getElementById(`m1-t${i}`)?.checked) m1Count++;
    if (document.getElementById(`m2-t${i}`)?.checked) m2Count++;
  }
  for (let i = 1; i <= 4; i++) {
    if (document.getElementById(`m3-t${i}`)?.checked) m3Count++;
  }

  const totalChecked = m1Count + m2Count + m3Count;
  const percentage = Math.round((totalChecked / totalTasks) * 100);

  const bar = document.getElementById('overall-bar');
  const txt = document.getElementById('overall-percent');
  if (bar) bar.style.width = percentage + '%';
  if (txt) txt.textContent = percentage + '% complété';

  const b1 = document.getElementById('badge-m1');
  const b2 = document.getElementById('badge-m2');
  const b3 = document.getElementById('badge-m3');
  if (b1) b1.textContent = `${m1Count}/5`;
  if (b2) b2.textContent = `${m2Count}/5`;
  if (b3) b3.textContent = `${m3Count}/4`;

  const c1 = document.getElementById('col-count-m1');
  const c2 = document.getElementById('col-count-m2');
  const c3 = document.getElementById('col-count-m3');
  if (c1) c1.textContent = `${m1Count}/5`;
  if (c2) c2.textContent = `${m2Count}/5`;
  if (c3) c3.textContent = `${m3Count}/4`;
}

// Copie presse-papiers
function copyToClipboard(text) {
  const tempInput = document.createElement("input");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  showToast("Lien copié dans le presse-papier !", "📋");
}

// Message Toast
function showToast(msg, icon = "✅") {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toast-message');
  const iconEl = document.getElementById('toast-icon');

  if (!toast) return;

  msgEl.textContent = msg;
  iconEl.textContent = icon;

  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 3000);
}
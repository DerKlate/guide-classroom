// app.js - Riscritto per index.html (Opzione A)

// Mappa dei task per ogni modulo (basata sugli ID presenti nell'HTML)
const modulesConfig = {
  1: { steps: 5, tasks: ['m1-t1', 'm1-t2', 'm1-t3', 'm1-t4', 'm1-t5'] },
  2: { steps: 5, tasks: ['m2-t1', 'm2-t2', 'm2-t3', 'm2-t4', 'm2-t5'] },
  3: { steps: 4, tasks: ['m3-t1', 'm3-t2', 'm3-t3', 'm3-t4'] }
};

// Stato di avanzamento salvato nel browser
let tasksState = JSON.parse(localStorage.getItem("classroom_tasks_state") || "{}");

// Inizializzazione al caricamento della pagina
document.addEventListener("DOMContentLoaded", () => {
  // Mostra il modulo 1 di default
  switchModule(1);
  // Inizializza le spunte e la barra di progresso
  initCheckboxes();
  updateProgress();
});

// Cambia il modulo visibile
function switchModule(moduleId) {
  // Nascondi tutti i moduli
  [1, 2, 3].forEach(id => {
    const container = document.getElementById(`module-container-${id}`);
    const tab = document.getElementById(`tab-module-${id}`);
    
    if (container) {
      if (id === moduleId) {
        container.classList.remove('hidden');
        // Ripristina lo step 1 del modulo attivo
        jumpToStep(id, 1);
      } else {
        container.classList.add('hidden');
      }
    }
    
    // Aggiorna lo stile delle tab in alto
    if (tab) {
      if (id === moduleId) {
        // Stili per tab attiva (basato sulle classi Tailwind esistenti)
        tab.className = tab.className.replace('bg-white text-senegal-earth border-gray-200', 'bg-senegal-green text-white border-senegal-green');
      } else {
        // Stili per tab inattiva
        tab.className = tab.className.replace('bg-senegal-green text-white border-senegal-green', 'bg-white text-senegal-earth border-gray-200');
      }
    }
  });
}

// Naviga tra gli step di un modulo
function jumpToStep(moduleId, stepId) {
  const totalSteps = modulesConfig[moduleId].steps;
  
  for (let i = 1; i <= totalSteps; i++) {
    const stepContent = document.getElementById(`step-content-${moduleId}-${i}`);
    const stepBtn = document.getElementById(`step-btn-${moduleId}-${i}`);
    
    if (stepContent) {
      if (i === stepId) {
        stepContent.classList.remove('hidden');
      } else {
        stepContent.classList.add('hidden');
      }
    }
    
    // Aggiorna lo stile dei pulsanti step
    if (stepBtn) {
      if (i === stepId) {
        stepBtn.classList.add('text-white', 'shadow-sm');
        stepBtn.classList.remove('bg-gray-100', 'text-gray-700');
        
        // Colori specifici per modulo come da tuo design
        if(moduleId === 1) stepBtn.classList.add('bg-senegal-green');
        if(moduleId === 2) { stepBtn.classList.add('bg-senegal-gold', 'text-senegal-earth'); stepBtn.classList.remove('text-white'); }
        if(moduleId === 3) stepBtn.classList.add('bg-senegal-terra');
      } else {
        stepBtn.className = 'step-btn px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 whitespace-nowrap';
      }
    }
  }
}

// Salta a un momento specifico del video
function setVideoTime(moduleId, videoId, timeSeconds) {
  const iframe = document.getElementById(`video-frame-${moduleId}`);
  if (iframe) {
    // Aggiunto autoplay=1 per far partire subito il video al clic
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?start=${timeSeconds}&autoplay=1&enablejsapi=1`;
    showToast("Vidéo mise à jour", "▶️");
  }
}

// Gestione del completamento dei task
function toggleTask(taskId) {
  const checkbox = document.getElementById(taskId);
  if (checkbox) {
    tasksState[taskId] = checkbox.checked;
    localStorage.setItem("classroom_tasks_state", JSON.stringify(tasksState));
    updateProgress();
    
    if (checkbox.checked) {
      showToast("Étape validée !", "✅");
    }
  }
}

// Inizializza lo stato visivo delle checkbox al caricamento
function initCheckboxes() {
  Object.keys(tasksState).forEach(taskId => {
    const checkbox = document.getElementById(taskId);
    if (checkbox) {
      checkbox.checked = tasksState[taskId];
    }
  });
}

// Aggiorna la barra di progresso e i contatori
function updateProgress() {
  let totalTasks = 0;
  let completedTasks = 0;

  // Calcolo per singolo modulo
  [1, 2, 3].forEach(moduleId => {
    const tasks = modulesConfig[moduleId].tasks;
    let moduleCompleted = 0;
    
    tasks.forEach(taskId => {
      totalTasks++;
      if (tasksState[taskId]) {
        completedTasks++;
        moduleCompleted++;
      }
    });

    // Aggiorna i badge dei moduli (es: 3/5)
    const badge = document.getElementById(`badge-m${moduleId}`);
    const colCount = document.getElementById(`col-count-m${moduleId}`);
    const text = `${moduleCompleted}/${tasks.length}`;
    
    if (badge) badge.innerText = text;
    if (colCount) colCount.innerText = text;
  });

  // Aggiorna la percentuale globale
  const percentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
  const overallPercent = document.getElementById("overall-percent");
  const overallBar = document.getElementById("overall-bar");

  if (overallPercent) overallPercent.innerText = `${percentage}% complété`;
  if (overallBar) overallBar.style.width = `${percentage}%`;
}

// Copia negli appunti (URL Classroom)
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast("Lien copié !", "📋");
  }).catch(err => {
    console.error('Erreur de copie:', err);
  });
}

// Reset totale dei progressi
function resetAllTasks() {
  if (confirm("Voulez-vous vraiment réinitialiser toute votre progression ?")) {
    tasksState = {};
    localStorage.removeItem("classroom_tasks_state");
    
    // Deseleziona visivamente tutte le checkbox
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.checked = false;
    });
    
    updateProgress();
    showToast("Progression réinitialisée", "🔄");
  }
}

// Mostra le notifiche Toast (in basso a destra)
function showToast(message, icon) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-message");
  const toastIcon = document.getElementById("toast-icon");
  
  if (toast && toastMsg && toastIcon) {
    toastMsg.innerText = message;
    toastIcon.innerText = icon;
    
    // Mostra
    toast.classList.remove("translate-y-20", "opacity-0");
    
    // Nascondi dopo 3 secondi
    setTimeout(() => {
      toast.classList.add("translate-y-20", "opacity-0");
    }, 3000);
  }
}
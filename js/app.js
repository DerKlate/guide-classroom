// Data dei 3 Moduli con minutaggi esatti dei video YouTube e tappe didattiche
const modulesData = [
  {
    id: 1,
    title: "1. Configuration & Communication",
    subtitle: "Créer sa classe, sécuriser le Flux et inviter les élèves",
    videoId: "VnSfRqpFEYM",
    videoTimestamps: [
      { time: 15, label: "0:15 - Connexion à Classroom" },
      { time: 55, label: "0:55 - Créer un cours" },
      { time: 125, label: "2:05 - Inviter des élèves" },
      { time: 220, label: "3:40 - Sécuriser le Flux" },
      { time: 345, label: "5:45 - Google Calendar" }
    ],
    steps: [
      {
        title: "Étape 1 : Se connecter correctement 💻",
        content: "Pour éviter les conflits entre plusieurs comptes Google, utilisez l'adresse directe : <code>classroom.google.com/u/0/</code> avec votre compte <b>@gmail.com</b>."
      },
      {
        title: "Étape 2 : Créer un cours 🏫",
        content: "Cliquez sur le bouton <b>+</b> en haut à droite, puis sélectionnez <b>Créer un cours</b>. Indiquez le nom de la matière et validez."
      },
      {
        title: "Étape 3 : Inviter les élèves 👥",
        content: "Allez dans l'onglet <b>Personnes</b>. Partagez le <b>Code du cours</b> à vos élèves. <i>Attention :</i> ils doivent obligatoirement utiliser un compte personnel @gmail.com."
      },
      {
        title: "Étape 4 : Gérer la communication (Le Flux) ⚙️",
        content: "Dans les paramètres (icône roue dentée), modifiez les options du Flux pour que les élèves puissent seulement <b>commenter</b> et non publier des messages."
      },
      {
        title: "Étape 5 : L'Agenda (Calendar) 📅",
        content: "Toutes les dates limites définies dans vos devoirs s'affichent automatiquement dans le calendrier partagé du cours."
      }
    ],
    task: "<b>Défi de Réalité :</b> Créez votre cours, verrouillez les publications sur le Flux et invitez 2 collègues formateurs grâce à votre code de cours."
  },
  {
    id: 2,
    title: "2. Leçons et Documents",
    subtitle: "Organiser les contenus et créer des devoirs individuels",
    videoId: "gJfP5-_sdIw",
    videoTimestamps: [
      { time: 45, label: "0:45 - Onglet Travaux et devoirs" },
      { time: 90, label: "1:30 - Créer des Thèmes" },
      { time: 190, label: "3:10 - Publier une Documentation" },
      { time: 320, label: "5:20 - Créer un Devoir" },
      { time: 465, label: "7:45 - Copie par élève" }
    ],
    steps: [
      {
        title: "Étape 1 : Onglet Travaux et devoirs 📚",
        content: "Cet onglet est le cœur pédagogique de votre cours. C'est ici que vous structurez vos modules et leçons."
      },
      {
        title: "Étape 2 : Organiser avec les Thèmes 📂",
        content: "Cliquez sur <b>Créer</b> > <b>Thème</b>. Les thèmes servent de chapitres pour classer vos supports d'apprentissage."
      },
      {
        title: "Étape 3 : Partager des ressources 📎",
        content: "Sélectionnez <b>Créer</b> > <b>Documentation</b> pour publier des fiches de lecture, PDF ou liens vidéo que les élèves consultent."
      },
      {
        title: "Étape 4 : Créer un Devoir 📝",
        content: "Allez dans <b>Créer</b> > <b>Devoir</b>. Rédigez le titre, les instructions et joignez un fichier Google Docs d'exercice."
      },
      {
        title: "Étape 5 : La règle 'Faire une copie par élève' ✨",
        content: "À côté du fichier joint, cochez <b>Faire une copie par élève</b>. Chaque élève recevra son document individuel sans modifier celui des autres."
      }
    ],
    task: "<b>Défi de Réalité :</b> Créez un Thème, ajoutez une Documentation, puis publiez un Devoir avec un Google Doc configuré sur 'Faire une copie par élève'."
  },
  {
    id: 3,
    title: "3. Évaluation & Données",
    subtitle: "Quiz auto-corrigés, importation des notes et analyse Sheets",
    videoId: "EzyL0BNrgqA",
    videoTimestamps: [
      { time: 10, label: "0:10 - Devoir avec questionnaire" },
      { time: 30, label: "0:30 - Les 4 règles d'or" },
      { time: 58, label: "0:58 - Importer les notes" },
      { time: 78, label: "1:18 - Restituer les notes" },
      { time: 90, label: "1:30 - Exporter vers Sheets" }
    ],
    steps: [
      {
        title: "Étape 1 : Devoir avec questionnaire 📝",
        content: "Allez sur <b>Créer</b> > <b>Devoir avec questionnaire</b>. Un formulaire Google Forms s'associe automatiquement."
      },
      {
        title: "Étape 2 : Les 4 règles d'or 🔑",
        content: "1. Activer la collecte d'e-mails.<br>2. Limiter à 1 réponse.<br>3. Conserver le formulaire comme seul fichier joint.<br>4. Laisser l'option 'Importation des notes' activée dans Classroom."
      },
      {
        title: "Étape 3 : Importer les notes 📥",
        content: "Une fois le quiz complété par les élèves, cliquez sur le bouton <b>Importer les notes</b> dans la vue du devoir."
      },
      {
        title: "Étape 4 : Restituer les notes ✅",
        content: "Les notes importées apparaissent en 'Brouillon'. Cochez 'Tous les élèves' puis cliquez sur <b>Rendre</b> pour communiquer le résultat."
      },
      {
        title: "Étape 5 : Analyser avec Google Sheets 📊",
        content: "Dans le formulaire Google Forms (onglet Réponses), cliquez sur l'icône verte Sheets pour générer le tableau complet de suivi."
      }
    ],
    task: "<b>Défi de Réalité :</b> Créez un questionnaire Forms, vérifiez l'importation automatique des notes sur Classroom et ouvrez le tableau de synthèse Google Sheets."
  }
];

// Stato dell'applicazione
let currentModuleIndex = 0;
let currentStepIndex = 0;
let checklistState = JSON.parse(localStorage.getItem("classroom_checklist_state") || "{}");

// Inizializzazione al caricamento del DOM
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  renderModule();
});

// Inizializza le schede dei moduli
function initNavigation() {
  const navContainer = document.getElementById("moduleNav");
  if (!navContainer) return;

  navContainer.innerHTML = modulesData.map((m, idx) => `
    <button onclick="switchModule(${idx})" id="nav-btn-${idx}" class="px-4 py-2 rounded-lg font-medium transition-all text-sm sm:text-base ${idx === currentModuleIndex ? 'bg-emerald-700 text-white shadow-md' : 'bg-stone-200 text-stone-700 hover:bg-stone-300'}">
      Module ${m.id}
    </button>
  `).join("");
}

// Cambia modulo attivo
function switchModule(index) {
  currentModuleIndex = index;
  currentStepIndex = 0;

  // Aggiorna lo stile dei pulsanti
  modulesData.forEach((_, idx) => {
    const btn = document.getElementById(`nav-btn-${idx}`);
    if (btn) {
      if (idx === currentModuleIndex) {
        btn.className = "px-4 py-2 rounded-lg font-medium transition-all text-sm sm:text-base bg-emerald-700 text-white shadow-md";
      } else {
        btn.className = "px-4 py-2 rounded-lg font-medium transition-all text-sm sm:text-base bg-stone-200 text-stone-700 hover:bg-stone-300";
      }
    }
  });

  renderModule();
}

// Rendering del modulo corrente
function renderModule() {
  const module = modulesData[currentModuleIndex];

  // Aggiorna i titoli
  const titleEl = document.getElementById("moduleTitle");
  const subtitleEl = document.getElementById("moduleSubtitle");
  if (titleEl) titleEl.innerText = module.title;
  if (subtitleEl) subtitleEl.innerText = module.subtitle;

  // Renderizza video e timestamp
  renderVideo(module.videoId, 0);
  renderTimestamps(module.videoTimestamps, module.videoId);

  // Renderizza lo step del wizard
  renderStep();

  // Renderizza la sfida finale (task)
  renderTask(module);
}

// Carica il video YouTube nell'iframe
function renderVideo(videoId, startSeconds = 0) {
  const videoContainer = document.getElementById("videoContainer");
  if (!videoContainer) return;

  videoContainer.innerHTML = `
    <iframe
      class="w-full h-full rounded-xl shadow-inner"
      src="https://www.youtube.com/embed/${videoId}?autoplay=${startSeconds > 0 ? 1 : 0}&start=${startSeconds}&enablejsapi=1"
      title="Vidéo de formation"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  `;
}

// Renderizza i pulsanti con i minuti del video
function renderTimestamps(timestamps, videoId) {
  const container = document.getElementById("timestampContainer");
  if (!container) return;

  container.innerHTML = timestamps.map(ts => `
    <button onclick="playAtTimestamp('${videoId}', ${ts.time})" class="text-xs bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200 px-3 py-1.5 rounded-full font-medium transition-all flex items-center gap-1">
      <span>▶</span> ${ts.label}
    </button>
  `).join("");
}

// Salto al secondo esatto del video
function playAtTimestamp(videoId, seconds) {
  renderVideo(videoId, seconds);
  const videoSection = document.getElementById("videoContainer");
  if (videoSection) {
    videoSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// Renderizza il singolo passaggio (step) del Wizard
function renderStep() {
  const module = modulesData[currentModuleIndex];
  const step = module.steps[currentStepIndex];

  const stepContainer = document.getElementById("stepContentContainer");
  const indicator = document.getElementById("stepIndicator");
  const btnPrev = document.getElementById("btnPrevStep");
  const btnNext = document.getElementById("btnNextStep");

  if (indicator) {
    indicator.innerText = `Étape ${currentStepIndex + 1} sur ${module.steps.length}`;
  }

  if (stepContainer) {
    stepContainer.innerHTML = `
      <h3 class="text-xl font-bold text-emerald-900 mb-3">${step.title}</h3>
      <div class="text-stone-700 leading-relaxed space-y-2 text-base sm:text-lg">
        ${step.content}
      </div>
    `;
  }

  if (btnPrev) {
    btnPrev.disabled = currentStepIndex === 0;
    btnPrev.className = currentStepIndex === 0
      ? "px-4 py-2 rounded-lg bg-stone-200 text-stone-400 cursor-not-allowed text-sm font-medium"
      : "px-4 py-2 rounded-lg bg-stone-300 text-stone-800 hover:bg-stone-400 text-sm font-medium transition-all";
  }

  if (btnNext) {
    const isLast = currentStepIndex === module.steps.length - 1;
    btnNext.innerText = isLast ? "Terminer le module" : "Étape suivante →";
    btnNext.className = "px-4 py-2 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 text-sm font-medium transition-all shadow-sm";
  }
}

// Passaggio all'avanti nel Wizard
function nextStep() {
  const module = modulesData[currentModuleIndex];
  if (currentStepIndex < module.steps.length - 1) {
    currentStepIndex++;
    renderStep();
  } else {
    if (currentModuleIndex < modulesData.length - 1) {
      switchModule(currentModuleIndex + 1);
    } else {
      alert("Félicitations ! Vous avez parcouru tous les modules de formation.");
    }
  }
}

// Passaggio indietro nel Wizard
function prevStep() {
  if (currentStepIndex > 0) {
    currentStepIndex--;
    renderStep();
  }
}

// Renderizza il Défi de Réalité
function renderTask(module) {
  const taskContainer = document.getElementById("taskContainer");
  if (!taskContainer) return;

  const isChecked = !!checklistState[`module_${module.id}`];

  taskContainer.innerHTML = `
    <div class="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-xl shadow-sm">
      <h4 class="text-amber-900 font-bold mb-2 flex items-center gap-2">
        <span>🎯</span> Défi de Réalité
      </h4>
      <p class="text-amber-950 text-sm sm:text-base leading-relaxed mb-4">
        ${module.task}
      </p>
      <label class="inline-flex items-center gap-2 cursor-pointer bg-amber-100 hover:bg-amber-200 text-amber-900 px-3 py-2 rounded-lg transition-all text-sm font-medium">
        <input type="checkbox" onchange="toggleChecklist(${module.id}, this.checked)" ${isChecked ? 'checked' : ''} class="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500">
        <span>Marquer ce défi comme accompli</span>
      </label>
    </div>
  `;
}

// Salva lo stato della spunta sul browser
function toggleChecklist(moduleId, checked) {
  checklistState[`module_${moduleId}`] = checked;
  localStorage.setItem("classroom_checklist_state", JSON.stringify(checklistState));
}
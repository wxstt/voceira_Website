
document.addEventListener('DOMContentLoaded', () => {

  // ---- LISTA DE IDIOMAS (50+) ----
  const languagesList = [
    { code: 'es', name: 'Español' }, { code: 'en', name: 'Inglés' }, { code: 'fr', name: 'Francés' },
    { code: 'de', name: 'Alemán' }, { code: 'it', name: 'Italiano' }, { code: 'pt', name: 'Portugués' },
    { code: 'ru', name: 'Ruso' }, { code: 'zh', name: 'Chino' }, { code: 'ja', name: 'Japonés' },
    { code: 'ko', name: 'Coreano' }, { code: 'ar', name: 'Árabe' }, { code: 'hi', name: 'Hindi' },
    { code: 'nl', name: 'Holandés' }, { code: 'pl', name: 'Polaco' }, { code: 'tr', name: 'Turco' },
    { code: 'uk', name: 'Ucraniano' }, { code: 'vi', name: 'Vietnamita' }, { code: 'sv', name: 'Sueco' },
    { code: 'el', name: 'Griego' }, { code: 'cs', name: 'Checo' }, { code: 'da', name: 'Danés' },
    { code: 'fi', name: 'Finlandés' }, { code: 'hu', name: 'Húngaro' }, { code: 'id', name: 'Indonesio' },
    { code: 'ro', name: 'Rumano' }, { code: 'th', name: 'Tailandés' }, { code: 'no', name: 'Noruego' },
    { code: 'he', name: 'Hebreo' }, { code: 'ca', name: 'Catalán' }, { code: 'sk', name: 'Eslovaco' },
    { code: 'bn', name: 'Bengalí' }, { code: 'tl', name: 'Tagalo' }, { code: 'ms', name: 'Malayo' },
    { code: 'fa', name: 'Persa' }, { code: 'ur', name: 'Urdu' }, { code: 'sw', name: 'Suajili' },
    { code: 'ta', name: 'Tamil' }, { code: 'te', name: 'Telugu' }, { code: 'mr', name: 'Marathi' },
    { code: 'gu', name: 'Guyaratí' }, { code: 'pa', name: 'Punyabí' }, { code: 'hr', name: 'Croata' },
    { code: 'sr', name: 'Serbio' }, { code: 'bg', name: 'Búlgaro' }, { code: 'lt', name: 'Lituano' },
    { code: 'lv', name: 'Letón' }, { code: 'et', name: 'Estonio' }, { code: 'sl', name: 'Esloveno' },
    { code: 'eu', name: 'Euskera' }, { code: 'gl', name: 'Gallego' }, { code: 'eo', name: 'Esperanto' }
  ];

  const selectNative = document.getElementById('idioma-nativo');
  const selectSource = document.getElementById('source-lang');
  const selectTarget = document.getElementById('target-lang');

  const BASIC_LIMIT = 20;
let currentPlan = "profesional";

function populateSelects(limit = languagesList.length) {

    selectNative.innerHTML = "";
    selectSource.innerHTML = "";
    selectTarget.innerHTML = "";

    languagesList.slice(0, limit).forEach(lang => {

        const opt1 = new Option(lang.name, lang.code);
        if (lang.code === "es") opt1.selected = true;
        selectNative.add(opt1);

        const opt2 = new Option(lang.name, lang.code);
        if (lang.code === "es") opt2.selected = true;
        selectSource.add(opt2);

        const opt3 = new Option(lang.name, lang.code);
        if (lang.code === "en") opt3.selected = true;
        selectTarget.add(opt3);

    });

}
function updatePlan(plan) {

    currentPlan = plan;

    if (plan === "esencial") {

        populateSelects(BASIC_LIMIT);

    } else {

        populateSelects(languagesList.length);

    }

    // Mantener sincronizado el idioma predeterminado
    selectSource.value = selectNative.value;

    // Si el idioma destino ya no existe, volver a inglés
    if (![...selectTarget.options].some(o => o.value === selectTarget.value)) {
        selectTarget.value = "en";
    }

}

document.querySelectorAll('input[name="plan"]').forEach(radio => {

    radio.addEventListener("change", () => {

        updatePlan(radio.value);

    });

});

populateSelects();
// Mantener sincronizado el idioma predeterminado con el idioma de dictado
  selectNative.addEventListener('change', () => {
    selectSource.value = selectNative.value;
});
  document.getElementById('btn-swap-langs').addEventListener('click', () => {
    const temp = selectSource.value;
    selectSource.value = selectTarget.value;
    selectTarget.value = temp;
    
    const srcText = document.getElementById('source-text').value;
    const tgtText = document.getElementById('target-text').value;
    document.getElementById('source-text').value = tgtText;
    document.getElementById('target-text').value = srcText;
  });

  // ---- MODO CLARO / OSCURO & ACCESIBILIDAD ----
  const btnTheme = document.getElementById('btn-theme');
  btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
    btnTheme.innerHTML = document.body.classList.contains('light-mode') ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
  });

  document.getElementById('btn-a11y').addEventListener('click', () => {
    document.body.classList.toggle('a11y-text');
  });

  // ---- PESTAÑAS (PRECIOS) ----
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.getAttribute('data-tab')).classList.add('active');
    });
  });

  // ---- MODAL Y AUTENTICACIÓN ----
  const modal = document.getElementById('auth-modal');
  document.getElementById('open-auth-btn').addEventListener('click', () => modal.classList.add('active'));
  document.getElementById('close-auth-btn').addEventListener('click', () => modal.classList.remove('active'));
  
  const formLogin = document.getElementById('form-login');
  const formRegister = document.getElementById('form-register');
  document.getElementById('go-to-register').addEventListener('click', () => { formLogin.classList.remove('active'); formRegister.classList.add('active'); });
  document.getElementById('go-to-login').addEventListener('click', () => { formRegister.classList.remove('active'); formLogin.classList.add('active'); });
  document.querySelectorAll('.btn-select-plan').forEach(btn => btn.addEventListener('click', () => modal.classList.add('active')));

  const landingView = document.getElementById('landing-view');
  const appView = document.getElementById('app-view');
  const mainNavLinks = document.getElementById('main-nav-links');
  const btnToApp = document.getElementById('btn-to-app');
  const btnLogout = document.getElementById('btn-logout');
  const openAuthBtn = document.getElementById('open-auth-btn');

  function updateAuthState(isLoggedIn) {
    if (isLoggedIn) {
      modal.classList.remove('active');
      openAuthBtn.style.display = 'none';
      btnToApp.style.display = 'inline-block';
      btnLogout.style.display = 'inline-block';
      landingView.style.display = 'none';
      appView.style.display = 'block';
      mainNavLinks.style.display = 'none';
      window.scrollTo(0,0);
    } else {
      openAuthBtn.style.display = 'inline-block';
      btnToApp.style.display = 'none';
      btnLogout.style.display = 'none';
      landingView.style.display = 'block';
      appView.style.display = 'none';
      mainNavLinks.style.display = 'flex';
    }
  }

  btnToApp.addEventListener('click', () => { landingView.style.display = 'none'; appView.style.display = 'block'; mainNavLinks.style.display = 'none'; });
  document.querySelector('.brand').addEventListener('click', () => { if (appView.style.display === 'block') { landingView.style.display = 'block'; appView.style.display = 'none'; mainNavLinks.style.display = 'flex'; } });
  
  formLogin.addEventListener('submit', (e) => { e.preventDefault(); updateAuthState(true); });
  formRegister.addEventListener('submit', (e) => { e.preventDefault(); updateAuthState(true); });
  btnLogout.addEventListener('click', () => updateAuthState(false));

  document.getElementById("btn-save-config")?.addEventListener("click", () => {

    selectSource.value = selectNative.value;

    const nombrePlan =
        currentPlan === "esencial"
            ? "Esencial (20 idiomas)"
            : "Profesional (50 idiomas)";

    alert(
`Configuración guardada.

Plan: ${nombrePlan}
Idioma: ${selectNative.options[selectNative.selectedIndex].text}`
    );

});


  // ==========================================
  // LÓGICA DE LA APP (DICTADO Y TRADUCCIÓN)
  // ==========================================
  const sourceText = document.getElementById('source-text');
  const targetText = document.getElementById('target-text');
  const speakBtn = document.getElementById('speak-btn');
  const translateBtn = document.getElementById('translate-btn');
  const recordingStatus = document.getElementById('recording-status');

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition = null;
  let isRecording = false;

  if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      let currentTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        currentTranscript += event.results[i][0].transcript;
      }
      sourceText.value = currentTranscript;
    };

    recognition.onerror = (event) => {
      console.warn('Error en dictado:', event.error);
      stopDictation();
      if(event.error === 'not-allowed') alert('Debes permitir el acceso al micrófono en tu navegador.');
    };
    recognition.onend = () => stopDictation();
  }

  function startDictation() {
    if (!SpeechRecognition) {
      alert('Tu navegador no soporta reconocimiento de voz nativo (Prueba Chrome o Edge).');
      return;
    }
    recognition.lang = selectSource.value;
    try {
      recognition.start();
      isRecording = true;
      speakBtn.innerHTML = '<i class="fas fa-stop-circle" style="color: #fff;"></i> Detener Dictado';
      speakBtn.style.backgroundColor = '#EF4444';
      recordingStatus.style.display = 'flex';
      sourceText.value = ''; 
    } catch (e) { console.error(e); }
  }

  function stopDictation() {
    if (recognition && isRecording) { recognition.stop(); }
    isRecording = false;
    speakBtn.innerHTML = '<i class="fas fa-microphone"></i> Iniciar Dictado';
    speakBtn.style.backgroundColor = '';
    recordingStatus.style.display = 'none';

    if (sourceText.value.trim() !== '') translateText();
  }

  speakBtn.addEventListener('click', () => { isRecording ? stopDictation() : startDictation(); });

  async function translateText() {
    const text = sourceText.value.trim();
    if (!text) { targetText.value = ''; return; }
    
    targetText.value = 'Traduciendo...';
    try {
      const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${selectSource.value}|${selectTarget.value}`);
      const data = await response.json();
      targetText.value = data.responseData?.translatedText || 'Error en la traducción.';
    } catch (error) {
      targetText.value = 'Fallo de conexión. Intenta de nuevo.';
    }
  }

  translateBtn.addEventListener('click', translateText);
});

/* --- LÓGICA DEL CARRUSEL DE TESTIMONIOS --- */
document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('testimonial-track');
  const prevBtn = document.getElementById('prev-testimonial');
  const nextBtn = document.getElementById('next-testimonial');

  if (track && prevBtn && nextBtn) {
    let currentIndex = 0;

    const getVisibleCards = () => {
      return window.innerWidth > 900 ? 3 : (window.innerWidth > 600 ? 2 : 1);
    };

    const getCardWidth = () => {
      const card = track.querySelector('.carousel-card');
      if (!card) return 0;
      // Lee el gap real desde el CSS en vez de asumir 20px
      const trackStyles = window.getComputedStyle(track);
      const gap = parseFloat(trackStyles.columnGap || trackStyles.gap || '0');
      return card.getBoundingClientRect().width + gap;
    };

    const getMaxIndex = () => {
      const cards = track.querySelectorAll('.carousel-card');
      const visibleCards = getVisibleCards();
      return Math.max(0, cards.length - visibleCards);
    };

    const updateCarousel = () => {
      const cardWidth = getCardWidth();
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    };

    nextBtn.addEventListener('click', () => {
      const maxIndex = getMaxIndex();
      if (currentIndex < maxIndex) {
        currentIndex++;
      } else {
        currentIndex = 0; // vuelve al inicio
      }
      updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });

    // Al cambiar el tamaño de la ventana, corrige currentIndex si quedó fuera de rango
    window.addEventListener('resize', () => {
      const maxIndex = getMaxIndex();
      if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
      }
      updateCarousel();
    });
  }
});
// escritura de los titulos 


/* --- EFECTO DE MÁQUINA DE ESCRIBIR --- */
document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Función principal que escribe el texto letra por letra
  const typeText = (element, text, speed = 40, callback) => {
    let i = 0;
    element.textContent = ''; // Aseguramos que esté vacío
    element.classList.add('typing-cursor'); // Añadimos el cursor
    
    const type = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        // Cuando termina de escribir, quitamos el cursor después de 1.5 segundos
        setTimeout(() => element.classList.remove('typing-cursor'), 1500);
        if (callback) callback(); // Si hay otra función esperando, la ejecuta
      }
    };
    type();
  };

 // 2. Encadenar el Hero (Escribe el H1 y luego TODOS los Subtítulos)
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitles = document.querySelectorAll('.hero-subtitle'); // Selecciona TODOS los subtítulos
  
  if (heroTitle) {
    // Guardamos el texto del título y lo vaciamos
    const titleText = heroTitle.textContent.trim();
    heroTitle.textContent = '';
    
    // Guardamos los textos de todos los subtítulos y los vaciamos
    const subtitleTexts = [];
    heroSubtitles.forEach(sub => {
      subtitleTexts.push(sub.textContent.trim());
      sub.textContent = '';
    });
    
    // Función para escribir los subtítulos uno tras otro en cadena
    const typeSubtitles = (index) => {
      if (index < heroSubtitles.length) {
        typeText(heroSubtitles[index], subtitleTexts[index], 25, () => {
          typeSubtitles(index + 1); // Llama al siguiente subtítulo cuando termina este
        });
      }
    };

    // Iniciamos la escritura del título con un ligero retraso de 300ms
    setTimeout(() => {
      typeText(heroTitle, titleText, 50, () => {
        // Cuando termine el título, empezamos a escribir el primer subtítulo (índice 0)
        typeSubtitles(0); 
      });
    }, 300);
  }
  });
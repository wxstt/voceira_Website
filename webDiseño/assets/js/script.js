document.addEventListener('DOMContentLoaded', () => {

  // ---- LISTA COMPLETA DE 50+ IDIOMAS PROMETIDOS ----
  const languagesList = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'Inglés' },
    { code: 'fr', name: 'Francés' },
    { code: 'de', name: 'Alemán' },
    { code: 'it', name: 'Italiano' },
    { code: 'pt', name: 'Portugués' },
    { code: 'ru', name: 'Ruso' },
    { code: 'zh', name: 'Chino (Mandarín)' },
    { code: 'ja', name: 'Japonés' },
    { code: 'ko', name: 'Coreano' },
    { code: 'ar', name: 'Árabe' },
    { code: 'hi', name: 'Hindi' },
    { code: 'nl', name: 'Holandés' },
    { code: 'pl', name: 'Polaco' },
    { code: 'tr', name: 'Turco' },
    { code: 'uk', name: 'Ucraniano' },
    { code: 'vi', name: 'Vietnamita' },
    { code: 'sv', name: 'Sueco' },
    { code: 'el', name: 'Griego' },
    { code: 'cs', name: 'Checo' },
    { code: 'da', name: 'Danés' },
    { code: 'fi', name: 'Finlandés' },
    { code: 'hu', name: 'Húngaro' },
    { code: 'id', name: 'Indonesio' },
    { code: 'ro', name: 'Rumano' },
    { code: 'th', name: 'Tailandés' },
    { code: 'no', name: 'Noruego' },
    { code: 'he', name: 'Hebreo' },
    { code: 'ca', name: 'Catalán' },
    { code: 'sk', name: 'Eslovaco' },
    { code: 'bn', name: 'Bengalí' },
    { code: 'tl', name: 'Tagalo (Filipinas)' },
    { code: 'ms', name: 'Malayo' },
    { code: 'fa', name: 'Persa' },
    { code: 'ur', name: 'Urdu' },
    { code: 'sw', name: 'Suajili' },
    { code: 'ta', name: 'Tamil' },
    { code: 'te', name: 'Telugu' },
    { code: 'mr', name: 'Marathi' },
    { code: 'gu', name: 'Guyaratí' },
    { code: 'pa', name: 'Punyabí' },
    { code: 'hr', name: 'Croata' },
    { code: 'sr', name: 'Serbio' },
    { code: 'bg', name: 'Búlgaro' },
    { code: 'lt', name: 'Lituano' },
    { code: 'lv', name: 'Letón' },
    { code: 'et', name: 'Estonio' },
    { code: 'sl', name: 'Esloveno' },
    { code: 'eu', name: 'Euskera' },
    { code: 'gl', name: 'Gallego' },
    { code: 'eo', name: 'Esperanto' }
  ];

  // POBLAR DINÁMICAMENTE LOS DESPLEGABLES
  const selectNative = document.getElementById('idioma-nativo');
  const selectSource = document.getElementById('source-lang');
  const selectTarget = document.getElementById('target-lang');

  function populateSelects() {
    languagesList.forEach(lang => {
      // Idioma Nativo Config
      const opt1 = new Option(lang.name, lang.code);
      if (lang.code === 'es') opt1.selected = true;
      selectNative.add(opt1);

      // Idioma Origen Dictado
      const opt2 = new Option(lang.name, lang.code);
      if (lang.code === 'es') opt2.selected = true;
      selectSource.add(opt2);

      // Idioma Destino Traducción
      const opt3 = new Option(lang.name, lang.code);
      if (lang.code === 'en') opt3.selected = true;
      selectTarget.add(opt3);
    });
  }

  populateSelects();

  // BOTÓN PARA INTERCAMBIAR IDIOMAS
  const btnSwap = document.getElementById('btn-swap-langs');
  btnSwap.addEventListener('click', () => {
    const temp = selectSource.value;
    selectSource.value = selectTarget.value;
    selectTarget.value = temp;
    
    // Intercambiar contenido de las cajas si existe
    const srcText = document.getElementById('source-text').value;
    const tgtText = document.getElementById('target-text').value;
    document.getElementById('source-text').value = tgtText;
    document.getElementById('target-text').value = srcText;
  });

  // ---- TEMA OSCURO / CLARO ----
  const btnTheme = document.getElementById('btn-theme');
  btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
    
    const icon = btnTheme.querySelector('i');
    if (document.body.classList.contains('light-mode')) {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    } else {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  });

  // ---- ACCESIBILIDAD ----
  const btnA11y = document.getElementById('btn-a11y');
  btnA11y.addEventListener('click', () => {
    document.body.classList.toggle('a11y-text');
  });

  // ---- PESTAÑAS DE PRECIOS ----
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      btn.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
    });
  });

  // ---- MODAL AUTENTICACIÓN ----
  const modal = document.getElementById('auth-modal');
  const openAuthBtn = document.getElementById('open-auth-btn');
  const closeAuthBtn = document.getElementById('close-auth-btn');
  const formLogin = document.getElementById('form-login');
  const formRegister = document.getElementById('form-register');
  const goToRegister = document.getElementById('go-to-register');
  const goToLogin = document.getElementById('go-to-login');

  openAuthBtn.addEventListener('click', () => modal.classList.add('active'));
  closeAuthBtn.addEventListener('click', () => modal.classList.remove('active'));
  
  goToRegister.addEventListener('click', () => {
    formLogin.classList.remove('active');
    formRegister.classList.add('active');
  });
  
  goToLogin.addEventListener('click', () => {
    formRegister.classList.remove('active');
    formLogin.classList.add('active');
  });

  // BOTONES PLANES EN LANDING PAGE
  document.querySelectorAll('.btn-select-plan').forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.add('active');
    });
  });

  // ---- ESTADO DE AUTENTICACIÓN Y NAVEGACIÓN VISTA PRINCIPAL/APP ----
  const landingView = document.getElementById('landing-view');
  const appView = document.getElementById('app-view');
  const mainNavLinks = document.getElementById('main-nav-links');
  const btnToApp = document.getElementById('btn-to-app');
  const btnLogout = document.getElementById('btn-logout');

  function updateAuthState(isLoggedIn, userName = 'Usuario') {
    if (isLoggedIn) {
      modal.classList.remove('active');
      openAuthBtn.style.display = 'none';
      btnToApp.style.display = 'inline-block';
      btnLogout.style.display = 'inline-block';
      showAppView();
    } else {
      openAuthBtn.style.display = 'inline-block';
      btnToApp.style.display = 'none';
      btnLogout.style.display = 'none';
      showLandingView();
    }
  }

  function showAppView() {
    landingView.style.display = 'none';
    appView.style.display = 'block';
    mainNavLinks.style.display = 'none';
  }

  function showLandingView() {
    landingView.style.display = 'block';
    appView.style.display = 'none';
    mainNavLinks.style.display = 'flex';
  }

  btnToApp.addEventListener('click', showAppView);
  
  // NAVEGACIÓN EN EL BRAND
  document.querySelector('.brand').addEventListener('click', (e) => {
    if (appView.style.display === 'block') {
      e.preventDefault();
      showLandingView();
    }
  });

  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    updateAuthState(true, 'Usuario de Voceira');
  });

  formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('reg-name').value;
    updateAuthState(true, name);
  });

  btnLogout.addEventListener('click', () => {
    updateAuthState(false);
  });

  // FORMULARIO EMPRESAS
  document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Gracias por tu interés. Un especialista empresarial te contactará en breve.');
    e.target.reset();
  });

  // CONFIGURACIÓN DE CUENTA EN APP
  document.getElementById('btn-save-config')?.addEventListener('click', () => {
    const langSelected = selectNative.options[selectNative.selectedIndex].text;
    alert(`Configuración guardada. Idioma por defecto establecido a: ${langSelected}`);
  });

  // ==========================================
  //     SISTEMA RECONOCIMIENTO Y TRADUCCIÓN
  // ==========================================
  const sourceText = document.getElementById('source-text');
  const targetText = document.getElementById('target-text');
  const speakBtn = document.getElementById('speak-btn');
  const translateBtn = document.getElementById('translate-btn');
  const recordingStatus = document.getElementById('recording-status');

  // --- 1. RECONOCIMIENTO DE VOZ (DICTADO EN VIVO) ---
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
      console.error('Error de voz:', event.error);
      stopDictation();
    };

    recognition.onend = () => {
      stopDictation();
    };
  }

  function startDictation() {
    if (!SpeechRecognition) {
      alert('Tu navegador no soporta entrada de voz directa (Web Speech API). Por favor ingresa el texto manualmente.');
      return;
    }

    const langCode = selectSource.value;
    recognition.lang = langCode;
    
    try {
      recognition.start();
      isRecording = true;
      speakBtn.innerHTML = '<i class="fas fa-stop-circle" style="color: #EF4444;"></i> Detener Dictado';
      recordingStatus.style.display = 'flex';
    } catch (e) {
      console.error(e);
    }
  }

  function stopDictation() {
    if (recognition && isRecording) {
      recognition.stop();
    }
    isRecording = false;
    speakBtn.innerHTML = '<i class="fas fa-microphone"></i> Iniciar Dictado';
    recordingStatus.style.display = 'none';

    // Auto-traducir al terminar de hablar
    if (sourceText.value.trim() !== '') {
      translateText();
    }
  }

  speakBtn.addEventListener('click', () => {
    if (isRecording) {
      stopDictation();
    } else {
      startDictation();
    }
  });

  // --- 2. TRADUCCIÓN EN VIVO (API REAL) ---
  async function translateText() {
    const text = sourceText.value.trim();
    if (!text) {
      targetText.value = '';
      return;
    }

    const srcLang = selectSource.value;
    const tgtLang = selectTarget.value;

    targetText.value = 'Traduciendo en tiempo real...';

    try {
      // Usamos el servicio MyMemory API libre
      const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${srcLang}|${tgtLang}`);
      const data = await response.json();

      if (data.responseData && data.responseData.translatedText) {
        targetText.value = data.responseData.translatedText;
      } else {
        targetText.value = 'No se pudo obtener la traducción para la combinación seleccionada.';
      }
    } catch (error) {
      console.error('Error de traducción:', error);
      targetText.value = 'Error al conectar con el servidor de traducción. Verifica tu conexión a internet.';
    }
  }

  translateBtn.addEventListener('click', translateText);
});

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

  function populateSelects() {
    languagesList.forEach(lang => {
      const opt1 = new Option(lang.name, lang.code);
      if (lang.code === 'es') opt1.selected = true;
      selectNative.add(opt1);

      const opt2 = new Option(lang.name, lang.code);
      if (lang.code === 'es') opt2.selected = true;
      selectSource.add(opt2);

      const opt3 = new Option(lang.name, lang.code);
      if (lang.code === 'en') opt3.selected = true;
      selectTarget.add(opt3);
    });
  }
  populateSelects();

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

  document.getElementById('btn-save-config')?.addEventListener('click', function() {
    const originalText = this.innerText;
    this.innerText = "¡Guardado!";
    this.style.backgroundColor = "#10B981";
    setTimeout(() => { this.innerText = originalText; this.style.backgroundColor = ""; }, 2000);
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
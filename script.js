(function () {
  "use strict";

  // ─── Utilidades ───────────────────────────────────────────────────────────

  function qs(selector) {
    return document.querySelector(selector);
  }

  // Personaliza esta sección para la serenata romántica de Nicoin.
  var SITE = {
    recipient: {
      name: "Nicoin",
      age: 26,
    },
    signature: "Chango",
    publicUrl: "https://jhojha.github.io/feliz-cumple-chikki/",
    audioUrl: "./serenata.mp3",
    // Ritmo inicial; la persona puede cambiarlo antes de iniciar la serenata.
    sequenceMode: "full",
    text: {
      documentTitle: "¡Feliz Cumpleaños, mi Chikki hermosa! 🌹",
      welcomeEyebrow: "UNA NOCHE MÁGICA CON TODO MI AMOR 💖",
      welcomeLead: "Tengo una",
      welcomeHighlight: "sorpresa especial",
      welcomeEnd: "para ti, mi amor…",
      welcomeNote: "Prepárate para una serenata inolvidable hecha sólo para ti.",
      startButton: "Abrir sorpresa",
      startWithSound: "Con sonido",
      startSilent: "Sin sonido",
      soundHint: "Elige cómo quieres vivir esta experiencia romántica.",
      soundChoiceLabel: "Cómo deseas disfrutar la serenata",
      rhythmLabel: "Ritmo de la serenata",
      shortSequence: "Versión breve",
      fullSequence: "Serenata completa",
      languageLabel: "Idioma",
      audioLoading: "Afinando las cuerdas con amor…",
      muteButton: "Silenciar sonido",
      unmuteButton: "Activar sonido",
      progressAria: "Progreso de la serenata",
      introEyebrow: "HOY ES UN DÍA INCONMENSURABLEMENTE ESPECIAL 🌹",
      introLead: "Hoy celebramos los",
      introAgeSuffix: "años",
      introEnd: "de la mujer más hermosa e increíble del mundo.",
      birthdayLead: "¡Feliz cumpleaños,",
      birthdayRelation: "mi hermosa",
      birthdayNote: "Que este nuevo año de vida esté lleno de risas, salud, sueños cumplidos y momentos mágicos juntos. ¡Gracias por hacerme tan feliz!",
      personalLineOne: "Gracias por cada sonrisa, por tu amor tan bonito",
      personalLineTwo: "y por hacer mi vida más hermosa y completa",
      personalLineThree: "en cada segundo a tu lado.",
      personalClosing: "¡Te amo con todo mi corazón, mi Chikki!",
      signatureCardLead: "Con todo mi amor,",
      announcementLead: "¡Con todo mi corazón y mi amor,",
      announcementEnd: "esta serenata es dedicada solo a ti!",
      stageLineOne: "Una serenata para celebrar",
      stageLineTwo: "tu vida, tu belleza y nuestro amor ♫",
      mariachiGroupLabel: "Grupo de mariachis celebrando",
      guitarLabel: "Tocar arpegio de guitarra",
      trumpetLabel: "Tocar sonido de trompeta",
      finalEyebrow: "CON TODO MI AMOR ETERNO",
      finalLead: "¡Que viva la",
      finalHighlight: "cumpleañera más hermosa!",
      finalAgeLead: "¡Felices",
      finalAgeSuffix: "años, mi vida!",
      signatureLead: "Con todo el amor de tu",
      credit: "Hecho con todo mi amor para mi hermosa Chikki 🌹",
      repeatButton: "Repetir serenata",
      shareButton: "Compartir",
      progressMessage: "Un mensaje especial de amor",
      progressSerenade: "La serenata romántica",
      progressFinale: "El gran final 💖",
      pause: "Pausar serenata",
      resume: "Reanudar serenata",
      finished: "La serenata terminó",
      next: "Siguiente momento",
      skip: "Ir directamente al final",
      toastPaused: "Serenata en pausa",
      toastResumed: "La serenata continúa",
      toastNext: "Avanzando al siguiente momento",
      toastFinale: "Llegamos al gran final 💖",
      toastTrumpet: "¡Suena la serenata para ti!",
      toastGuitar: "¡Qué hermosa melodía!",
      soundOn: "Sonido activado.",
      soundOff: "Sonido silenciado.",
      audioUnavailable: "El audio no está disponible en este navegador.",
      shareThanks: "¡Gracias por compartir!",
      shareMenuError: "No se pudo abrir el menú para compartir.",
      shareCopied: "¡Enlace copiado!",
      shareCopyError: "No se pudo copiar el enlace.",
      shareTitle: "💖 ¡Feliz Cumpleaños, mi Chikki hermosa!",
      shareText: "Una serenata especial hecha con todo mi amor 🌹",
    },
  };

  var TRANSLATIONS = {
    es: SITE.text,
    it: {
      documentTitle: "Una sorpresa per te",
      welcomeEyebrow: "UNA NOTTE DA RICORDARE",
      welcomeLead: "Abbiamo una",
      welcomeHighlight: "sorpresa",
      welcomeEnd: "per te…",
      welcomeNote: "Preparati a una serenata piena d'affetto.",
      startButton: "Apri la sorpresa",
      startWithSound: "Con audio",
      startSilent: "Senza audio",
      soundHint: "Scegli come vivere questa sorpresa.",
      soundChoiceLabel: "Come desideri vivere la serenata",
      rhythmLabel: "Ritmo della serenata",
      shortSequence: "Versione breve",
      fullSequence: "Serenata completa",
      languageLabel: "Lingua",
      audioLoading: "Stiamo accordando gli strumenti…",
      muteButton: "Disattiva l'audio",
      unmuteButton: "Attiva l'audio",
      progressAria: "Avanzamento della serenata",
      introEyebrow: "OGGI È UN GIORNO SPECIALE",
      introLead: "Oggi celebriamo",
      introAgeSuffix: "anni",
      introEnd: "di una donna meravigliosa.",
      birthdayLead: "Buon compleanno,",
      birthdayRelation: "zia",
      birthdayNote: "Che questa nuova fase sia piena di salute, gioia e momenti indimenticabili.",
      personalLineOne: "Grazie per il tuo amore, la tua allegria",
      personalLineTwo: "e per essere una parte così speciale",
      personalLineThree: "della nostra famiglia.",
      personalClosing: "Ti vogliamo tanto bene, zia!",
      signatureCardLead: "Con affetto,",
      announcementLead: "Con tanto affetto,",
      announcementEnd: "questa serenata è per te!",
      stageLineOne: "Una serenata per celebrare",
      stageLineTwo: "la tua vita e la tua gioia",
      mariachiGroupLabel: "Gruppo di mariachi in festa",
      guitarLabel: "Suona un arpeggio di chitarra",
      trumpetLabel: "Suona la tromba",
      finalEyebrow: "CON TUTTO IL NOSTRO AFFETTO",
      finalLead: "Viva la",
      finalHighlight: "festeggiata!",
      finalAgeLead: "Buon",
      finalAgeSuffix: "compleanno!",
      signatureLead: "Con affetto da",
      credit: "Con amore, per una zia davvero speciale",
      repeatButton: "Ripeti la serenata",
      shareButton: "Condividi",
      progressMessage: "Un messaggio speciale",
      progressSerenade: "La serenata",
      progressFinale: "Il gran finale",
      pause: "Metti in pausa la serenata",
      resume: "Riprendi la serenata",
      finished: "La serenata è terminata",
      next: "Momento successivo",
      skip: "Vai direttamente al finale",
      toastPaused: "Serenata in pausa",
      toastResumed: "La serenata continua",
      toastNext: "Passiamo al momento successivo",
      toastFinale: "Siamo arrivati al gran finale",
      toastTrumpet: "Suona la tromba!",
      toastGuitar: "Che bella chitarra!",
      soundOn: "Audio attivato.",
      soundOff: "Audio disattivato.",
      audioUnavailable: "L'audio non è disponibile in questo browser.",
      shareThanks: "Grazie per aver condiviso!",
      shareMenuError: "Non è stato possibile aprire il menu di condivisione.",
      shareCopied: "Link copiato!",
      shareCopyError: "Non è stato possibile copiare il link.",
      shareTitle: "🎉 Buon compleanno, zia Lucy!",
      shareText: "Una serenata speciale per celebrare i suoi 50 anni 🌹",
    },
  };

  // ─── Constantes de tiempo (ms) ────────────────────────────────────────────
  // Cambiar aquí para ajustar el ritmo de la experiencia sin buscar números sueltos.
  // La experiencia completa dura ~56 segundos hasta llegar al finale.

  var DELAYS = {
    birthdayMessage:   2800,  // Mensaje de cumpleaños (2.8s) - HITO
    musicLoop1:       10000,  // Música ambiente durante celebración (10s)
    personalMessage:  20000,  // Mensaje personal de Jhayro (20s) - HITO
    musicLoop2:       25000,  // Música ambiente durante celebración (25s)
    stageAppear:      29000,  // Escena del escenario (29s)
    curtainsOpen:     32000,  // Las cortinas se abren (32s) - HITO
    serenade:         39000,  // Primera serenata (39s)
    serenadeRepeat:   47000,  // Segunda serenata (47s)
    finale:           56000,  // Escena final con confeti (56s) - HITO
  };

  // Versión ágil para pantallas pequeñas. Conserva los mismos momentos
  // emocionales, pero llega al final en menos de medio minuto.
  var SHORT_DELAYS = {
    birthdayMessage:   2800,
    musicLoop1:        5600,
    personalMessage:   9000,
    musicLoop2:       11800,
    stageAppear:      14500,
    curtainsOpen:     16400,
    serenade:         19500,
    serenadeRepeat:   23600,
    finale:           28000,
  };

  // ─── Referencias DOM ──────────────────────────────────────────────────────

  var scenes             = [qs("#welcome"), qs("#celebration"), qs("#stage"), qs("#finale")];
  var falling            = qs("#falling");
  var confettiEl         = qs("#confetti");
  var soundButton        = qs("#soundButton");
  var startButton        = qs("#startButton");
  var startWithSoundButton = qs("#startWithSoundButton");
  var startSilentButton  = qs("#startSilentButton");
  var shortSequenceButton = qs("#shortSequenceButton");
  var fullSequenceButton = qs("#fullSequenceButton");
  var languageEsButton   = qs("#languageEsButton");
  var languageItButton   = qs("#languageItButton");
  var audioLoadingStatus = qs("#audioLoadingStatus");
  var repeatButton       = qs("#repeatButton");
  var shareButton        = qs("#shareButton");
  var experienceToggle   = qs("#experienceToggle");
  var experienceControls = qs("#experienceControls");
  var pauseButton        = qs("#pauseButton");
  var nextButton         = qs("#nextButton");
  var skipButton         = qs("#skipButton");
  var secondaryControls  = qs("#secondaryControls");
  var progressBar        = qs("#progressBar");
  var progressTrack      = qs("#progressTrack");
  var progressLabel      = qs("#progressLabel");
  var shareStatus        = qs("#shareStatus");
  var soundStatus        = qs("#soundStatus");
  var toast              = qs("#toast");
  var experience         = qs(".experience");

  // ─── Estado y Temporización ───────────────────────────────────────────────

  var audioEnabled      = false;
  var userMuted         = getStoredMutePreference();
  var currentLanguage   = getStoredLanguage();
  var selectedSequence  = getStoredSequence();
  var audioContext      = null;
  var serenataAudio     = null;    // elemento <audio> para Las Mañanitas
  var audioReady        = false;
  var audioFailed       = false;
  var showAudioLoadingNotice = false;
  var timers            = [];      // temporizadores secundarios o fallback
  var timelineEvents    = [];      // lista de eventos programados en la línea de tiempo
  var progressInterval  = null;
  var elapsedTime       = 0;
  var isPaused          = false;   // pausa manual del usuario
  var isSystemPaused    = false;   // pausa por Page Visibility (cambio de pestaña)
  var experienceRunning = false;
  var fadeInTimer       = null;
  var fadeOutTimer      = null;
  var introMusicTimer   = null;
  var shareFeedbackTimer = null;
  var toastTimer          = null;
  var secondaryHintTimer  = null;
  var secondaryHideTimer  = null;
  var audioLoadingTimer   = null;
  var activeDelays       = DELAYS;

  function getStoredMutePreference() {
    try {
      return window.localStorage.getItem("tia-lucy:muted") === "true";
    } catch (error) {
      return false;
    }
  }

  function saveMutePreference() {
    try {
      window.localStorage.setItem("tia-lucy:muted", String(userMuted));
    } catch (error) {
      // El sitio sigue funcionando si el navegador bloquea almacenamiento local.
    }
  }

  function getStoredLanguage() {
    try {
      return window.localStorage.getItem("tia-lucy:language") === "it" ? "it" : "es";
    } catch (error) {
      return "es";
    }
  }

  function saveLanguage() {
    try {
      window.localStorage.setItem("tia-lucy:language", currentLanguage);
    } catch (error) {
      // El sitio sigue funcionando si el navegador bloquea almacenamiento local.
    }
  }

  function getStoredSequence() {
    try {
      var stored = window.localStorage.getItem("tia-lucy:sequence-mode");
      if (stored === "short" || stored === "full") return stored;
    } catch (error) {
      // Se usa la configuración inicial del sitio.
    }
    return SITE.sequenceMode === "short" ? "short" : "full";
  }

  function saveSequence() {
    try {
      window.localStorage.setItem("tia-lucy:sequence-mode", selectedSequence);
    } catch (error) {
      // El sitio sigue funcionando si el navegador bloquea almacenamiento local.
    }
  }

  // ─── Secuencia y Controles de Ritmo ───────────────────────────────────────

  function schedule(action, delay, isMilestone) {
    timelineEvents.push({
      action: action,
      delay: delay,
      isMilestone: !!isMilestone,
      executed: false,
    });
  }

  function clearSequence() {
    for (var i = 0; i < timers.length; i += 1) {
      window.clearTimeout(timers[i]);
    }
    timers = [];
    if (progressInterval) {
      window.clearInterval(progressInterval);
      progressInterval = null;
    }
    clearAudioFades();
    clearIntroMariachiAmbience();
    window.clearTimeout(secondaryHintTimer);
    window.clearTimeout(secondaryHideTimer);
    secondaryHintTimer = null;
    secondaryHideTimer = null;
    timelineEvents = [];
    elapsedTime = 0;
    isPaused = false;
    isSystemPaused = false;
    experienceRunning = false;
    updateProgress(0);
    setExperienceControlsVisible(false);
    setSecondaryControlsVisible(false);
    updatePauseButton();
  }

  function setExperienceControlsVisible(visible) {
    if (!experienceControls) return;
    experienceControls.classList.toggle("visible", visible);
    experienceControls.setAttribute("aria-hidden", visible ? "false" : "true");
  }

  function updateProgress(percent) {
    var normalized = Math.max(0, Math.min(100, percent));
    if (progressBar) progressBar.style.width = normalized + "%";
    if (progressTrack) progressTrack.setAttribute("aria-valuenow", String(Math.round(normalized)));
    if (progressLabel) {
      var label = normalized >= 99 ? text("progressFinale") : normalized >= 52 ? text("progressSerenade") : text("progressMessage");
      if (progressLabel.textContent !== label) progressLabel.textContent = label;
    }
  }

  function setSecondaryControlsVisible(visible) {
    if (!secondaryControls || !experienceControls) return;
    experienceControls.classList.toggle("secondary-visible", visible);
    secondaryControls.setAttribute("aria-hidden", visible ? "false" : "true");
  }

  function showSecondaryControlsTemporarily() {
    if (!experienceRunning) return;
    window.clearTimeout(secondaryHintTimer);
    window.clearTimeout(secondaryHideTimer);
    setSecondaryControlsVisible(true);
    secondaryHideTimer = window.setTimeout(function () {
      setSecondaryControlsVisible(false);
      secondaryHideTimer = null;
    }, 4500);
  }

  function scheduleSecondaryControlsHint() {
    window.clearTimeout(secondaryHintTimer);
    secondaryHintTimer = window.setTimeout(function () {
      showSecondaryControlsTemporarily();
    }, 6500);
  }

  function showToast(message) {
    if (!toast) return;
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.remove("show");
    void toast.offsetWidth;
    toast.classList.add("show");
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("show");
      toastTimer = null;
    }, 2400);
  }

  function updatePauseButton() {
    if (!pauseButton) return;
    pauseButton.textContent = isPaused ? "▶" : "❚❚";
    pauseButton.title = isPaused ? text("resume") : text("pause");
    pauseButton.setAttribute("aria-label", pauseButton.title);
    pauseButton.setAttribute("aria-pressed", String(isPaused));
  }

  function togglePause() {
    if (!experienceRunning) return;
    isPaused = !isPaused;
    if (isPaused) {
      updatePauseButton();
      if (serenataAudio && !serenataAudio.paused) {
        serenataAudio.pause();
        serenataAudio._pausedByCtrl = true;
      }
      if (audioContext && audioContext.state === "running") {
        audioContext.suspend();
      }
    } else {
      updatePauseButton();
      if (serenataAudio && serenataAudio._pausedByCtrl && !userMuted) {
        serenataAudio.play()["catch"](function () {});
        serenataAudio._pausedByCtrl = false;
      }
      if (audioContext && audioContext.state === "suspended" && !userMuted) {
        audioContext.resume();
      }
    }
    showToast(isPaused ? text("toastPaused") : text("toastResumed"));
  }

  function skipToNextMilestone() {
    if (!experienceRunning || isPaused) return;
    var nextMilestone = null;
    for (var i = 0; i < timelineEvents.length; i += 1) {
      var ev = timelineEvents[i];
      if (!ev.executed && ev.isMilestone && ev.delay > elapsedTime + 150) {
        nextMilestone = ev;
        break;
      }
    }
    if (!nextMilestone) return;

    // Ejecutar todos los eventos pendientes anteriores y el hito para coherencia visual
    for (var j = 0; j < timelineEvents.length; j += 1) {
      var item = timelineEvents[j];
      if (!item.executed && item.delay <= nextMilestone.delay) {
        item.executed = true;
        item.action();
      }
    }
    elapsedTime = nextMilestone.delay;
    updateProgress((elapsedTime / activeDelays.finale) * 100);
    showToast(text("toastNext"));
    showSecondaryControlsTemporarily();
  }

  function skipToFinale() {
    if (!experienceRunning || isPaused) return;
    for (var i = 0; i < timelineEvents.length; i += 1) {
      var event = timelineEvents[i];
      if (!event.executed) {
        event.executed = true;
        event.action();
      }
    }
    elapsedTime = activeDelays.finale;
    updateProgress(100);
    showToast(text("toastFinale"));
    setSecondaryControlsVisible(false);
  }

  // ─── Escenas ──────────────────────────────────────────────────────────────

  function showScene(scene) {
    for (var i = 0; i < scenes.length; i += 1) {
      var item     = scenes[i];
      var isActive = item === scene;
      if (isActive) item.classList.add("active");
      else          item.classList.remove("active");
      item.setAttribute("aria-hidden", isActive ? "false" : "true");
    }
  }

  function setStyle(element, property, value) {
    element.style.setProperty(property, value);
  }

  // ─── Efectos visuales y Micro-interactividad ──────────────────────────────

  function isReducedMotion() {
    return typeof window !== "undefined" &&
           window.matchMedia &&
           window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function getSequenceDelays() {
    return selectedSequence === "short" ? SHORT_DELAYS : DELAYS;
  }

  function getActiveDelays() {
    var sequenceDelays = getSequenceDelays();
    if (!isReducedMotion()) return sequenceDelays;
    var reduced = {};
    for (var key in sequenceDelays) {
      if (Object.prototype.hasOwnProperty.call(sequenceDelays, key)) {
        reduced[key] = Math.max(450, Math.round(sequenceDelays[key] * 0.12));
      }
    }
    return reduced;
  }

  function applySiteConfig() {
    var activeText = TRANSLATIONS[currentLanguage] || TRANSLATIONS.es;
    var copyElements = document.querySelectorAll("[data-copy]");
    for (var i = 0; i < copyElements.length; i += 1) {
      var key = copyElements[i].getAttribute("data-copy");
      if (Object.prototype.hasOwnProperty.call(activeText, key)) {
        copyElements[i].textContent = activeText[key];
      }
    }

    var ariaElements = document.querySelectorAll("[data-aria-label]");
    for (var a = 0; a < ariaElements.length; a += 1) {
      var ariaKey = ariaElements[a].getAttribute("data-aria-label");
      if (Object.prototype.hasOwnProperty.call(activeText, ariaKey)) {
        ariaElements[a].setAttribute("aria-label", activeText[ariaKey]);
      }
    }

    var nameElements = document.querySelectorAll("[data-name]");
    for (var j = 0; j < nameElements.length; j += 1) {
      nameElements[j].textContent = SITE.recipient.name;
    }

    var ageElements = document.querySelectorAll("[data-age]");
    for (var k = 0; k < ageElements.length; k += 1) {
      ageElements[k].textContent = SITE.recipient.age;
    }

    var signatureElements = document.querySelectorAll("[data-signature]");
    for (var m = 0; m < signatureElements.length; m += 1) {
      signatureElements[m].textContent = SITE.signature;
    }

    var balloon1 = qs(".balloon-one .balloon-number");
    var balloon2 = qs(".balloon-two .balloon-number");
    var ageStr = String(SITE.recipient.age);
    if (balloon1) balloon1.textContent = ageStr.length > 0 ? ageStr[0] : "2";
    if (balloon2) balloon2.textContent = ageStr.length > 1 ? ageStr[1] : "6";

    document.documentElement.lang = currentLanguage;
    document.title = activeText.documentTitle;
  }

  function text(key) {
    var activeText = TRANSLATIONS[currentLanguage] || TRANSLATIONS.es;
    return activeText[key] || TRANSLATIONS.es[key] || key;
  }

  function syncPreferenceButtons() {
    if (shortSequenceButton) shortSequenceButton.setAttribute("aria-pressed", String(selectedSequence === "short"));
    if (fullSequenceButton) fullSequenceButton.setAttribute("aria-pressed", String(selectedSequence === "full"));
    if (languageEsButton) languageEsButton.setAttribute("aria-pressed", String(currentLanguage === "es"));
    if (languageItButton) languageItButton.setAttribute("aria-pressed", String(currentLanguage === "it"));
  }

  function setLanguage(language) {
    currentLanguage = language === "it" ? "it" : "es";
    saveLanguage();
    applySiteConfig();
    syncPreferenceButtons();
    updateProgress((elapsedTime / activeDelays.finale) * 100);
    updateAudioLoadingStatus();
    updatePauseButton();
    syncSoundButton();
    if (nextButton) {
      nextButton.title = text("next");
      nextButton.setAttribute("aria-label", text("next"));
    }
    if (skipButton) {
      skipButton.title = text("skip");
      skipButton.setAttribute("aria-label", text("skip"));
    }
    if (shareButton && !shareFeedbackTimer) delete shareButton.dataset.originalLabel;
  }

  function setSequence(mode) {
    selectedSequence = mode === "short" ? "short" : "full";
    saveSequence();
    syncPreferenceButtons();
  }

  /**
   * Cancela todas las animaciones CSS antes de vaciar el contenedor,
   * evitando que animaciones en vuelo queden en memoria en algunos navegadores.
   */
  function clearAnimated(container) {
    var children = container.querySelectorAll("*");
    for (var i = 0; i < children.length; i += 1) {
      children[i].style.animation = "none";
    }
    container.innerHTML = "";
  }

  function createSparkles(x, y) {
    var container = qs(".experience") || document.body;
    var count = 6 + Math.floor(Math.random() * 4);
    var reduced = isReducedMotion();
    for (var i = 0; i < count; i += 1) {
      var spark = document.createElement("span");
      spark.className  = "golden-sparkle";
      spark.style.left = (x - 5) + "px";
      spark.style.top  = (y - 5) + "px";
      if (reduced) {
        setStyle(spark, "--sx", "0px");
        setStyle(spark, "--sy", "0px");
      } else {
        var angle = Math.random() * Math.PI * 2;
        var dist  = 18 + Math.random() * 26;
        setStyle(spark, "--sx", Math.cos(angle) * dist + "px");
        setStyle(spark, "--sy", Math.sin(angle) * dist + "px");
      }
      container.appendChild(spark);
      spark.addEventListener("animationend", function (e) {
        if (e.target && e.target.parentNode) e.target.parentNode.removeChild(e.target);
      });
    }
  }

  function makeFallingRoses(amount) {
    clearAnimated(falling);
    var reduced = isReducedMotion();
    var actualAmount = reduced ? 8 : amount;

    for (var i = 0; i < actualAmount; i += 1) {
      (function (idx) {
        var item = document.createElement("span");
        item.className = idx % 5 === 0 ? "rose" : "petal";
        if (item.className === "rose") {
          for (var layer = 1; layer <= 5; layer += 1) {
            var roseLayer = document.createElement("i");
            roseLayer.className = "rose-layer rose-layer-" + layer;
            item.appendChild(roseLayer);
          }
        }

        if (reduced) {
          // Modo Reduced Motion: decoración floral estática flotante sin lluvia torrencial ni mareo
          item.style.left = (8 + (idx * 11)) + "%";
          item.style.top  = (idx % 2 === 0 ? "12%" : "78%");
          item.style.animation = "none";
          item.style.opacity   = "0.8";
          item.style.transform = "rotate(" + (idx * 25 - 50) + "deg) scale(" + (item.className === "rose" ? "1" : "1.2") + ")";
        } else {
          item.style.left = Math.random() * 100 + "%";
          setStyle(item, "--drift",    (Math.random() - 0.5) * 220 + "px");
          setStyle(item, "--duration", 3.2 + Math.random() * 2.4 + "s");
          setStyle(item, "--delay",    Math.random() * 1.5 + "s");
          
          // Limpieza de memoria en cuanto termina de caer (Garbage Collection visual)
          item.addEventListener("animationend", function (e) {
            if (e.target && e.target.parentNode) e.target.parentNode.removeChild(e.target);
          });
        }

        // Micro-interactividad táctil: las rosas se convierten en destellos dorados al tocarlas
        item.addEventListener("click", function (e) {
          e.stopPropagation();
          createSparkles(e.clientX || (e.touches && e.touches[0].clientX), e.clientY || (e.touches && e.touches[0].clientY));
          if (item.parentNode) item.parentNode.removeChild(item);
          tone(750 + Math.random() * 350, audioContext ? audioContext.currentTime : 0, 0.18, "triangle", 0.035);
        });

        falling.appendChild(item);
      }(i));
    }
  }

  function makeConfetti(amount) {
    clearAnimated(confettiEl);
    var colors = ["#ffd56f", "#ff6e88", "#f8f0d7", "#7bd0c5", "#bd3652"];
    var reduced = isReducedMotion();
    var actualAmount = reduced ? 15 : amount;

    for (var i = 0; i < actualAmount; i += 1) {
      var item = document.createElement("i");
      item.className  = "conf";
      var color = colors[i % colors.length];
      setStyle(item, "--c", color);

      if (reduced) {
        // Modo Reduced Motion: confeti suspendido elegante sin movimiento constante
        item.style.left = (4 + (i * 6.5)) + "%";
        item.style.top  = (i % 2 === 0 ? "16%" : "72%");
        item.style.animation = "none";
        item.style.transform = "rotate(" + (i * 45) + "deg) scale(1.3)";
        item.style.opacity   = "0.85";
      } else {
        item.style.left = Math.random() * 100 + "%";
        setStyle(item, "--r",        Math.random() * 180 + "deg");
        setStyle(item, "--drift",    (Math.random() - 0.5) * 260 + "px");
        setStyle(item, "--duration", 3 + Math.random() * 3 + "s");
        setStyle(item, "--delay",    Math.random() * 1.3 + "s");

        // Limpieza de memoria del confeti al terminar animación
        item.addEventListener("animationend", function (e) {
          if (e.target && e.target.parentNode) e.target.parentNode.removeChild(e.target);
        });
      }

      confettiEl.appendChild(item);
    }
  }

  function makeFinaleGlow(amount) {
    var reduced = isReducedMotion();
    var actualAmount = reduced ? 10 : amount;
    for (var i = 0; i < actualAmount; i += 1) {
      var item = document.createElement("i");
      item.className = "conf finale-glow";
      item.style.left = (4 + Math.random() * 92) + "%";
      item.style.top = (7 + Math.random() * 84) + "%";
      setStyle(item, "--glow-delay", (Math.random() * -8) + "s");
      setStyle(item, "--glow-duration", (7 + Math.random() * 7) + "s");
      item.style.opacity = String(0.35 + Math.random() * 0.45);
      if (reduced) item.style.animation = "none";
      confettiEl.appendChild(item);
    }
  }

  function setupMariachiInteraction() {
    var mariachis = document.querySelectorAll(".mariachi");
    for (var i = 0; i < mariachis.length; i += 1) {
      (function (mariachi, index) {
        mariachi.addEventListener("click", function (e) {
          e.stopPropagation();
          mariachi.classList.remove("bounce-effect");
          void mariachi.offsetWidth; // Trigger reflow
          mariachi.classList.add("bounce-effect");
          timers.push(window.setTimeout(function () {
            mariachi.classList.remove("bounce-effect");
          }, 520));
          showToast(index === 1 ? text("toastTrumpet") : text("toastGuitar"));

          // Sonido musical al tocar a cada mariachi
          if (!audioEnabled || !audioContext || userMuted) return;
          var now = audioContext.currentTime;
          if (index === 1) {
            // Trompeta (mariachi central) - tono festivo brillante
            tone(523.25, now, 0.16, "sawtooth", 0.035);
            tone(659.25, now + 0.13, 0.28, "sawtooth", 0.035);
          } else {
            // Guitarra (mariachis laterales) - arpegiado alegre de cuerdas
            var chord = index === 0 ? [329.63, 415.3, 493.88] : [293.66, 369.99, 440];
            for (var n = 0; n < chord.length; n += 1) {
              tone(chord[n], now + n * 0.05, 0.45, "triangle", 0.03);
            }
          }
        });
      }(mariachis[i], i));
    }
  }

  // ─── Audio (Web Audio API) ────────────────────────────────────────────────

  function tone(frequency, start, duration, type, gain) {
    if (!audioEnabled || !audioContext) return;
    try {
      var oscillator = audioContext.createOscillator();
      var volume     = audioContext.createGain();
      oscillator.type            = type || "sine";
      oscillator.frequency.value = frequency;
      volume.gain.setValueAtTime(0.0001, start);
      volume.gain.exponentialRampToValueAtTime(gain || 0.03, start + 0.025);
      volume.gain.exponentialRampToValueAtTime(0.0001, start + duration);
      oscillator.connect(volume);
      volume.connect(audioContext.destination);
      oscillator.start(start);
      oscillator.stop(start + duration + 0.03);
    } catch (error) {
      audioEnabled = false;
    }
  }

  function introMariachiMusic() {
    if (!audioEnabled || !audioContext) return;
    var time = audioContext.currentTime;
    var chords = [
      [196, 246.94, 293.66],
      [220, 261.63, 329.63],
      [196, 246.94, 293.66],
    ];
    for (var chord = 0; chord < chords.length; chord += 1) {
      for (var note = 0; note < chords[chord].length; note += 1) {
        tone(chords[chord][note], time + chord * 0.72 + note * 0.07, 0.55, "triangle", 0.013);
      }
    }
  }

  function clearIntroMariachiAmbience() {
    if (introMusicTimer) {
      window.clearInterval(introMusicTimer);
      introMusicTimer = null;
    }
  }

  function startIntroMariachiAmbience() {
    clearIntroMariachiAmbience();
    introMariachiMusic();
    introMusicTimer = window.setInterval(function () {
      if (!experienceRunning || userMuted || isPaused || isSystemPaused) return;
      introMariachiMusic();
    }, 4200);
  }

  function drumRoll() {
    if (!audioEnabled || !audioContext) return;
    var time = audioContext.currentTime;
    for (var i = 0; i < 8; i += 1) {
      tone(100 + i * 10, time + i * 0.07, 0.07, "square", 0.045);
    }
  }

  function serenadeMusic() {
    if (!audioEnabled || !audioContext) return;
    var base = audioContext.currentTime + 0.4;
    var progression = [
      [261.63, 329.63, 392],
      [293.66, 369.99, 440],
      [329.63, 415.3, 493.88],
      [261.63, 329.63, 392],
    ];
    for (var chord = 0; chord < progression.length; chord += 1) {
      for (var note = 0; note < progression[chord].length; note += 1) {
        tone(progression[chord][note], base + chord * 0.75, 0.68, "triangle", 0.025);
      }
    }
  }

  function applause() {
    if (!audioEnabled || !audioContext || userMuted) return;
    try {
      var bursts = isReducedMotion() ? 5 : 11;
      var now = audioContext.currentTime;
      for (var i = 0; i < bursts; i += 1) {
        var length = Math.floor(audioContext.sampleRate * 0.055);
        var buffer = audioContext.createBuffer(1, length, audioContext.sampleRate);
        var data = buffer.getChannelData(0);
        for (var sample = 0; sample < data.length; sample += 1) {
          data[sample] = (Math.random() * 2 - 1) * (1 - sample / data.length);
        }
        var source = audioContext.createBufferSource();
        var volume = audioContext.createGain();
        source.buffer = buffer;
        volume.gain.setValueAtTime(0.0001, now + i * 0.1);
        volume.gain.exponentialRampToValueAtTime(0.018, now + i * 0.1 + 0.01);
        volume.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.1 + 0.07);
        source.connect(volume);
        volume.connect(audioContext.destination);
        source.start(now + i * 0.1);
      }
    } catch (error) {
      // El cierre visual se mantiene aunque Web Audio no esté disponible.
    }
  }

  /**
   * Reproduce Las Mañanitas con fade-in suave.
   * El elemento ya fue creado y desbloqueado en startExperience().
   */
  function playSerenata() {
    if (userMuted || !serenataAudio) return;
    try {
      clearAudioFades();
      serenataAudio.currentTime = 0;
      serenataAudio.volume      = 0;
      serenataAudio.play()["catch"](function () {
        // Fallback: si el navegador sigue bloqueando, toca el audio sintético
        serenadeMusic();
      });
      // Fade-in de 2 segundos hasta volumen 0.75
      var step   = 0.75 / 40;
      fadeInTimer = window.setInterval(function () {
        if (!serenataAudio || userMuted || isPaused || isSystemPaused) {
          if (!serenataAudio || userMuted) {
            window.clearInterval(fadeInTimer);
            fadeInTimer = null;
          }
          return;
        }
        if (serenataAudio.volume < 0.75) {
          serenataAudio.volume = Math.min(0.75, serenataAudio.volume + step);
        } else {
          window.clearInterval(fadeInTimer);
          fadeInTimer = null;
        }
      }, 50);
    } catch (error) {
      serenadeMusic(); // Respaldo sintético
    }
  }

  /**
   * Para Las Mañanitas con un fade-out suave.
   * Se llama al repetir la experiencia o al silenciar.
   */
  function stopSerenata(instant) {
    if (!serenataAudio) return;
    clearAudioFades();
    if (instant) {
      serenataAudio.pause();
      serenataAudio.currentTime = 0;
      return;
    }
    fadeOutTimer = window.setInterval(function () {
      if (!serenataAudio) {
        window.clearInterval(fadeOutTimer);
        fadeOutTimer = null;
        return;
      }
      if (serenataAudio.volume > 0.05) {
        serenataAudio.volume = Math.max(0, serenataAudio.volume - 0.05);
      } else {
        serenataAudio.pause();
        serenataAudio.currentTime = 0;
        window.clearInterval(fadeOutTimer);
        fadeOutTimer = null;
      }
    }, 60);
  }

  function clearAudioFades() {
    if (fadeInTimer) {
      window.clearInterval(fadeInTimer);
      fadeInTimer = null;
    }
    if (fadeOutTimer) {
      window.clearInterval(fadeOutTimer);
      fadeOutTimer = null;
    }
  }

  function updateAudioLoadingStatus() {
    if (!audioLoadingStatus) return;
    audioLoadingStatus.textContent = text("audioLoading");
    audioLoadingStatus.classList.toggle("visible", showAudioLoadingNotice && !audioReady && !audioFailed);
  }

  function preloadSerenata() {
    if (!SITE.audioUrl || serenataAudio) return;
    serenataAudio = new Audio(SITE.audioUrl);
    serenataAudio.preload = "auto";
    serenataAudio.addEventListener("canplaythrough", function () {
      audioReady = true;
      showAudioLoadingNotice = false;
      window.clearTimeout(audioLoadingTimer);
      updateAudioLoadingStatus();
    }, { once: true });
    serenataAudio.addEventListener("error", function () {
      audioFailed = true;
      showAudioLoadingNotice = false;
      window.clearTimeout(audioLoadingTimer);
      updateAudioLoadingStatus();
    }, { once: true });
    audioLoadingTimer = window.setTimeout(function () {
      showAudioLoadingNotice = true;
      updateAudioLoadingStatus();
    }, 700);
    serenataAudio.load();
  }

  function enableAudio() {
    try {
      var AudioEngine = window.AudioContext || window.webkitAudioContext;
      if (!AudioEngine) {
        syncSoundButton();
        return;
      }
      if (!audioContext) audioContext = new AudioEngine();
      audioEnabled = true;
      if (audioContext.state === "suspended" && !isPaused && !isSystemPaused) {
        audioContext.resume();
      }
      syncSoundButton();
    } catch (error) {
      audioEnabled = false;
      syncSoundButton();
    }
  }

  function syncSoundButton() {
    if (!soundButton) return;
    var isSoundOn = audioEnabled && !userMuted;
    soundButton.classList.toggle("muted", !isSoundOn);
    soundButton.textContent = isSoundOn ? "♫" : "♩";
    soundButton.title = isSoundOn ? text("muteButton") : text("unmuteButton");
    soundButton.setAttribute("aria-label", soundButton.title);
  }

  function setSoundFeedback(message) {
    if (soundStatus) soundStatus.textContent = message;
    showToast(message);
  }

  // ─── Experiencia principal ────────────────────────────────────────────────

  function startExperience(withSound) {
    if (typeof withSound === "boolean") {
      userMuted = !withSound;
      saveMutePreference();
      syncSoundButton();
    }
    clearSequence();
    activeDelays = getActiveDelays();

    // Cambio visual primero; el audio nunca bloquea el botón.
    stopSerenata(true);   // Parar Las Mañanitas de inmediato si se repite
    qs("#stage").classList.remove("open");
    qs("#stage").classList.remove("performing");
    qs(".birthday-message").classList.remove("show");
    qs(".personal-message").classList.remove("show");
    clearAnimated(confettiEl);
    showScene(qs("#celebration"));
    makeFallingRoses(40);
    if (pauseButton) pauseButton.disabled = false;

    // Liberar el checkbox nativo para que no interfiera con escenas posteriores.
    timers.push(window.setTimeout(function () {
      if (experienceToggle) experienceToggle.checked = false;
    }, 80));

    // Respetar la decisión del usuario: solo activar audio si no silenció.
    if (!userMuted) {
      enableAudio();
      startIntroMariachiAmbience();
      if (!audioReady && !audioFailed) showToast(text("audioLoading"));

      // ⚠️ Política de autoplay: el navegador solo permite reproducir audio si el
      // gesto del usuario está activo. Creamos el elemento <audio> y llamamos
      // .play() + .pause() AHORA (durante el clic) para "desbloquearlo".
      // Así, cuando las cortinas se abran 32s después, el .play() funcionará
      // sin que el navegador lo rechace silenciosamente.
      if (!serenataAudio) {
        serenataAudio         = new Audio(SITE.audioUrl);
        serenataAudio.preload = "auto";
      }
      serenataAudio.volume      = 0;
      serenataAudio.currentTime = 0;
      var primePromise = serenataAudio.play();
      if (primePromise) {
        primePromise.then(function () {
          serenataAudio.pause();
          serenataAudio.currentTime = 0;
        })["catch"](function () {
          // El navegador bloqueó incluso el gesto inicial — el audio sintético actuará de respaldo.
        });
      }
    }

    // Programar hitos y eventos musicales con nuestro coordinador de secuencia
    schedule(function () {
      qs(".birthday-message").classList.add("show");
    }, activeDelays.birthdayMessage, true);

    schedule(function () {
      qs(".personal-message").classList.add("show");
    }, activeDelays.personalMessage, true);

    schedule(function () {
      showScene(qs("#stage"));
      clearIntroMariachiAmbience();
      if (!userMuted) drumRoll();
    }, activeDelays.stageAppear, false);

    schedule(function () {
      qs("#stage").classList.add("open");
      qs("#stage").classList.add("performing");
      playSerenata();
    }, activeDelays.curtainsOpen, true);

    schedule(function () {
      showScene(qs("#finale"));
      clearIntroMariachiAmbience();
      stopSerenata(false);
      makeConfetti(80);
      makeFinaleGlow(28);
      if (!userMuted) applause();
    }, activeDelays.finale, true);

    // Iniciar bucle del coordinador de tiempo y barra de progreso
    experienceRunning = true;
    setExperienceControlsVisible(true);
    scheduleSecondaryControlsHint();
    var lastTick = Date.now();

    progressInterval = window.setInterval(function () {
      var now = Date.now();
      var delta = now - lastTick;
      lastTick = now;

      if (isPaused || isSystemPaused || !experienceRunning) {
        return;
      }
      elapsedTime += delta;

      if (progressBar) {
        updateProgress((elapsedTime / activeDelays.finale) * 100);
      }

      for (var i = 0; i < timelineEvents.length; i += 1) {
        var ev = timelineEvents[i];
        if (!ev.executed && elapsedTime >= ev.delay) {
          ev.executed = true;
          ev.action();
        }
      }

      if (elapsedTime >= activeDelays.finale + 1500) {
        experienceRunning = false;
        window.clearInterval(progressInterval);
        progressInterval = null;
        setSecondaryControlsVisible(false);
        if (pauseButton) {
          pauseButton.disabled = true;
          pauseButton.title = text("finished");
          pauseButton.setAttribute("aria-label", pauseButton.title);
        }
      }
    }, 50);
  }

  // ─── Control de sonido ────────────────────────────────────────────────────

  function toggleSound() {
    if (!audioEnabled) {
      userMuted = false;
      saveMutePreference();
      enableAudio();
      if (!audioEnabled) {
        setSoundFeedback(text("audioUnavailable"));
        return;
      }
      if (experienceRunning && elapsedTime < activeDelays.stageAppear) {
        startIntroMariachiAmbience();
      }
      if (experienceRunning && elapsedTime >= activeDelays.curtainsOpen && elapsedTime < activeDelays.finale && !isPaused && !isSystemPaused) {
        playSerenata();
      }
      setSoundFeedback(text("soundOn"));
      return;
    }
    userMuted    = true;
    audioEnabled = false;
    saveMutePreference();
    stopSerenata(false);
    syncSoundButton();
    setSoundFeedback(text("soundOff"));
  }

  // ─── Sincronización con ciclo de vida (Page Visibility API) ───────────────

  document.addEventListener("visibilitychange", function () {
    if (!experienceRunning) return;
    if (document.hidden) {
      isSystemPaused = true;
      if (serenataAudio && !serenataAudio.paused) {
        serenataAudio.pause();
        serenataAudio._pausedBySystem = true;
      }
      if (audioContext && audioContext.state === "running") {
        audioContext.suspend();
      }
    } else {
      isSystemPaused = false;
      if (!isPaused) {
        if (serenataAudio && serenataAudio._pausedBySystem && !userMuted) {
          serenataAudio.play()["catch"](function () {});
          serenataAudio._pausedBySystem = false;
        }
        if (audioContext && audioContext.state === "suspended" && !userMuted) {
          audioContext.resume();
        }
      }
    }
  });

  // ─── Compartir (Web Share API con fallback a portapapeles) ────────────────

  function setShareFeedback(message) {
    if (shareStatus) shareStatus.textContent = message;
    showToast(message);
    if (!shareButton) return;
    if (shareFeedbackTimer) window.clearTimeout(shareFeedbackTimer);
    var original = shareButton.dataset.originalLabel || shareButton.textContent;
    shareButton.dataset.originalLabel = original;
    shareButton.textContent = message;
    shareFeedbackTimer = window.setTimeout(function () {
      shareButton.textContent = original;
      shareFeedbackTimer = null;
    }, 2500);
  }

  function legacyCopyText(text) {
    var input = document.createElement("textarea");
    input.value = text;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();
    var copied = false;
    try {
      copied = document.execCommand("copy");
    } catch (error) {
      copied = false;
    }
    document.body.removeChild(input);
    return copied;
  }

  function copyShareLink(url) {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      return navigator.clipboard.writeText(url);
    }
    return legacyCopyText(url) ? Promise.resolve() : Promise.reject(new Error("No se pudo copiar el enlace."));
  }

  function shareExperience() {
    var shareData = {
      title: text("shareTitle"),
      text:  text("shareText"),
      url:   SITE.publicUrl || window.location.href,
    };

    if (typeof navigator.share === "function") {
      navigator.share(shareData)["then"](function () {
        setShareFeedback(text("shareThanks"));
      })["catch"](function (error) {
        if (error && error.name !== "AbortError") {
          setShareFeedback(text("shareMenuError"));
        }
      });
    } else {
      copyShareLink(shareData.url)
        .then(function () {
          setShareFeedback(text("shareCopied"));
        })
        ["catch"](function () {
          setShareFeedback(text("shareCopyError"));
        });
    }
  }

  // ─── Eventos e Inicialización ─────────────────────────────────────────────

  if (startButton) {
    startButton.onclick = startExperience;
    startButton.onkeydown = function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        startExperience();
      }
    };
  }

  if (startWithSoundButton) startWithSoundButton.onclick = function () { startExperience(true); };
  if (startSilentButton) startSilentButton.onclick = function () { startExperience(false); };
  if (shortSequenceButton) shortSequenceButton.onclick = function () { setSequence("short"); };
  if (fullSequenceButton) fullSequenceButton.onclick = function () { setSequence("full"); };
  if (languageEsButton) languageEsButton.onclick = function () { setLanguage("es"); };
  if (languageItButton) languageItButton.onclick = function () { setLanguage("it"); };
  if (repeatButton) repeatButton.onclick = startExperience;
  if (soundButton)  soundButton.onclick  = toggleSound;
  if (shareButton)  shareButton.onclick  = shareExperience;
  if (pauseButton)  pauseButton.onclick  = togglePause;
  if (nextButton)   nextButton.onclick   = skipToNextMilestone;
  if (skipButton)   skipButton.onclick   = skipToFinale;

  if (experience) {
    experience.addEventListener("pointerup", function (event) {
      if (!experienceRunning || !event.target.closest) return;
      if (event.target.closest("button, label, .experience-controls, .mariachi, .rose, .petal")) return;
      showSecondaryControlsTemporarily();
    });
  }

  // Activar interactividad en los mariachis
  setupMariachiInteraction();
  setLanguage(currentLanguage);
  preloadSerenata();
  syncSoundButton();

}());

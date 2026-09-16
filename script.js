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
    // Cielo dedicado: la noche que se dibuja en la escena del pabellón.
    sky: {
      dateISO: "2026-09-16",
    },
    // Ritmo inicial; la persona puede cambiarlo antes de iniciar la serenata.
    sequenceMode: "full",
    text: {
      documentTitle: "¡Feliz Cumpleaños, mi Chikki hermosa! 🌹",
      welcomeEyebrow: "UNA NOCHE MÁGICA CON TODO MI AMOR 💖",
      welcomeLead: "Tengo una",
      welcomeHighlight: "sorpresa especial",
      welcomeEnd: "para ti, mi amor…",
      welcomeNote: "Prepárate para una serenata inolvidable hecha sólo para ti.",
      startButton: "Abrir mi carta de amor",
      rhythmLabel: "Ritmo de la serenata",
      shortSequence: "Versión breve",
      fullSequence: "Serenata completa",
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
      stageLineOne: "Una melodía eterna para celebrar",
      stageLineTwo: "tu vida, tu belleza y nuestro amor",
      ensembleGroupLabel: "Ensamble de música romántica",
      violinLabel: "Tocar violín romántico",
      pianoLabel: "Tocar arpegio de piano",
      harpLabel: "Tocar nota de arpa",
      violinToast: "🎻 Melodía romántica de violín para ti",
      pianoToast: "🎹 Notas de piano acústico para ti",
      harpToast: "🪕 Acordes de arpa estrellada para ti",
      cakeInstruction: "✨ ¡Toca las velas para pedir un deseo! ✨",
      cakeWish: "🎉 ¡Deseo concedido! ¡Te amo mi Chikki hermosa! 💖",
      cakeToast: "🎉 ¡Feliz Cumpleaños Nicoin! 🎂💖",
      skyLead: "El cielo la noche de tu cumpleaños",
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

  // Solo español: este regalo siempre es en español y con sonido.
  var TRANSLATIONS = {
    es: SITE.text,
  };

  // ─── Constantes de tiempo (ms) ────────────────────────────────────────────
  // Cambiar aquí para ajustar el ritmo de la experiencia sin buscar números sueltos.
  // La experiencia completa dura ~32 segundos hasta llegar al finale.

  var DELAYS = {
    birthdayMessage:   2500,  // Mensaje de cumpleaños (2.5s) - HITO
    personalMessage:  11000,  // Mensaje personal de Chango (11s) - HITO
    stageAppear:      16000,  // Pabellón romántico (16s)
    serenadeStart:    19000,  // La serenata empieza (19s) - HITO
    finale:           32000,  // Escena final con confeti (32s) - HITO
  };

  // Versión ágil para pantallas pequeñas. Conserva los mismos momentos
  // emocionales, pero llega al final en unos 20 segundos.
  var SHORT_DELAYS = {
    birthdayMessage:   2200,
    personalMessage:   7000,
    stageAppear:      10000,
    serenadeStart:    12000,
    finale:           20000,
  };

  // ─── Referencias DOM ──────────────────────────────────────────────────────

  var scenes             = [qs("#welcome"), qs("#celebration"), qs("#stage"), qs("#finale")];
  var falling            = qs("#falling");
  var confettiEl         = qs("#confetti");
  var soundButton        = qs("#soundButton");
  var startButton        = qs("#startButton");
  var shortSequenceButton = qs("#shortSequenceButton");
  var fullSequenceButton = qs("#fullSequenceButton");
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
  var userMuted         = false;   // Este regalo siempre va con sonido.
  var currentLanguage   = "es";    // Este regalo siempre es en español.
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
  var skyRafId            = null;   // animación del cielo dedicado
  var skyStars            = [];     // estrellas generadas desde la fecha

  function getStoredValue(key, legacyKey) {
    try {
      var value = window.localStorage.getItem(key);
      if (value !== null) return value;
      if (legacyKey) return window.localStorage.getItem(legacyKey);
      return null;
    } catch (error) {
      return null;
    }
  }

  function saveMutePreference() {
    try {
      window.localStorage.setItem("chikki:muted", String(userMuted));
    } catch (error) {
      // El sitio sigue funcionando si el navegador bloquea almacenamiento local.
    }
  }

  function getStoredSequence() {
    var stored = getStoredValue("chikki:sequence-mode", "tia-lucy:sequence-mode");
    if (stored === "short" || stored === "full") return stored;
    return SITE.sequenceMode === "short" ? "short" : "full";
  }

  function saveSequence() {
    try {
      window.localStorage.setItem("chikki:sequence-mode", selectedSequence);
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
    clearIntroAmbience();
    stopDedicatedSky();
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
    secondaryHintTimer = null;
    secondaryHideTimer = null;
    setSecondaryControlsVisible(true);
  }

  function scheduleSecondaryControlsHint() {
    // Los controles Siguiente / Ir al final quedan visibles desde el inicio
    // para que nadie sienta que la experiencia se congeló.
    setSecondaryControlsVisible(true);
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
        try {
          var resumePromise = serenataAudio.play();
          if (resumePromise && typeof resumePromise.catch === "function") {
            resumePromise.catch(function () {});
          }
        } catch (resumeError) {
          // El audio sintético sigue como respaldo.
        }
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

    // Velas del pastel con la edad real (ej. 26 -> "2" y "6").
    var ageStr = String(SITE.recipient.age);
    var candleLeftDigit = qs("#candleLeft .candle-digit");
    var candleRightDigit = qs("#candleRight .candle-digit");
    if (candleLeftDigit) candleLeftDigit.textContent = ageStr.length > 0 ? ageStr[0] : "2";
    if (candleRightDigit) candleRightDigit.textContent = ageStr.length > 1 ? ageStr[1] : "6";

    // Instrucción del pastel (solo si aún no se pidió el deseo).
    var candleInstruction = qs("#candleInstruction");
    var candleLeft = qs("#candleLeft");
    var wishGranted = candleLeft && candleLeft.classList.contains("extinguished");
    if (candleInstruction && !wishGranted) {
      candleInstruction.textContent = text("cakeInstruction");
    }

    // Fecha del cielo dedicado (16 de septiembre de 2026 / 16 settembre 2026).
    var skyDate = qs("#skyDate");
    if (skyDate && SITE.sky && SITE.sky.dateISO) {
      try {
        var skyDay = new Date(SITE.sky.dateISO + "T12:00:00");
        skyDate.textContent = new Intl.DateTimeFormat(
          "es-MX",
          { day: "numeric", month: "long", year: "numeric" }
        ).format(skyDay);
      } catch (skyDateError) {
        skyDate.textContent = SITE.sky.dateISO;
      }
    }

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

  function introRomanticMusic() {
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

  function clearIntroAmbience() {
    if (introMusicTimer) {
      window.clearInterval(introMusicTimer);
      introMusicTimer = null;
    }
  }

  function startIntroAmbience() {
    clearIntroAmbience();
    introRomanticMusic();
    introMusicTimer = window.setInterval(function () {
      if (!experienceRunning || userMuted || isPaused || isSystemPaused) return;
      introRomanticMusic();
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
      try {
        var playPromise = serenataAudio.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(function () {
            // Fallback: si el navegador sigue bloqueando, toca el audio sintético
            serenadeMusic();
          });
        }
      } catch (playError) {
        serenadeMusic();
      }
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
    stopSerenata(true);   // Parar la serenata de inmediato si se repite
    qs("#stage").classList.remove("open");
    qs("#stage").classList.remove("performing");
    qs(".birthday-message").classList.remove("show");
    qs(".personal-message").classList.remove("show");
    resetCake();
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
      startIntroAmbience();
      if (!audioReady && !audioFailed) showToast(text("audioLoading"));

      // ⚠️ Política de autoplay: el navegador solo permite reproducir audio si el
      // gesto del usuario está activo. Creamos el elemento <audio> y llamamos
      // .play() + .pause() AHORA (durante el clic) para "desbloquearlo".
      // Así, cuando la serenata empiece segundos después, el .play() funcionará
      // sin que el navegador lo rechace silenciosamente.
      if (!serenataAudio) {
        serenataAudio         = new Audio(SITE.audioUrl);
        serenataAudio.preload = "auto";
      }
      serenataAudio.volume      = 0;
      serenataAudio.currentTime = 0;
      try {
        var primePromise = serenataAudio.play();
        if (primePromise && typeof primePromise.then === "function") {
          primePromise.then(function () {
            serenataAudio.pause();
            serenataAudio.currentTime = 0;
          }).catch(function () {
            // El navegador bloqueó incluso el gesto inicial — el audio sintético actuará de respaldo.
          });
        }
      } catch (primeError) {
        // El audio sintético actuará de respaldo.
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
      startDedicatedSky();
      clearIntroAmbience();
      if (!userMuted) drumRoll();
    }, activeDelays.stageAppear, false);

    schedule(function () {
      qs("#stage").classList.add("open");
      qs("#stage").classList.add("performing");
      playSerenata();
    }, activeDelays.serenadeStart, true);

    schedule(function () {
      showScene(qs("#finale"));
      stopDedicatedSky();
      clearIntroAmbience();
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
        startIntroAmbience();
      }
      if (experienceRunning && elapsedTime >= activeDelays.serenadeStart && elapsedTime < activeDelays.finale && !isPaused && !isSystemPaused) {
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
          try {
            var systemResume = serenataAudio.play();
            if (systemResume && typeof systemResume.catch === "function") {
              systemResume.catch(function () {});
            }
          } catch (systemResumeError) {
            // Se continúa solo con la parte visual.
          }
          serenataAudio._pausedBySystem = false;
        }
        if (audioContext && audioContext.state === "suspended" && !userMuted) {
          audioContext.resume();
        }
      }
    }
  });

  window.addEventListener("resize", function () {
    var stage = qs("#stage");
    var canvas = qs("#skyCanvas");
    if (stage && canvas && stage.classList.contains("active")) {
      if (sizeSkyCanvas(canvas) && (isReducedMotion() || skyRafId === null)) {
        drawSkyFrame(canvas, 1200);
      }
    }
  });

  // ─── Compartir (Web Share API con fallback a portapapeles) ────────────────

  function setShareFeedback(message) {
    if (shareStatus) shareStatus.textContent = message;
    showToast(message);
    if (!shareButton) return;
    if (shareFeedbackTimer) window.clearTimeout(shareFeedbackTimer);
    if (!shareButton.dataset.originalLabel) {
      shareButton.dataset.originalLabel = shareButton.innerHTML;
    }
    var original = shareButton.dataset.originalLabel;
    shareButton.textContent = message;
    shareFeedbackTimer = window.setTimeout(function () {
      shareButton.innerHTML = original;
      delete shareButton.dataset.originalLabel;
      // Re-aplicar idioma por si cambió durante el feedback.
      applySiteConfig();
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
      try {
        var sharePromise = navigator.share(shareData);
        if (sharePromise && typeof sharePromise.then === "function") {
          sharePromise.then(function () {
            setShareFeedback(text("shareThanks"));
          }).catch(function (error) {
            if (error && error.name !== "AbortError") {
              setShareFeedback(text("shareMenuError"));
            }
          });
        }
      } catch (shareError) {
        setShareFeedback(text("shareMenuError"));
      }
    } else {
      copyShareLink(shareData.url)
        .then(function () {
          setShareFeedback(text("shareCopied"));
        })
        .catch(function () {
          setShareFeedback(text("shareCopyError"));
        });
    }
  }

  // ─── Eventos e Inicialización ─────────────────────────────────────────────

  // Un solo CTA: este regalo siempre empieza en español y con sonido.
  if (startButton) {
    startButton.onclick = function () { startExperience(true); };
    startButton.onkeydown = function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        startExperience(true);
      }
    };
  }

  if (shortSequenceButton) shortSequenceButton.onclick = function () { setSequence("short"); };
  if (fullSequenceButton) fullSequenceButton.onclick = function () { setSequence("full"); };
  if (repeatButton) repeatButton.onclick = function () { startExperience(true); };
  if (soundButton)  soundButton.onclick  = toggleSound;
  if (shareButton)  shareButton.onclick  = shareExperience;
  if (pauseButton)  pauseButton.onclick  = togglePause;
  if (nextButton)   nextButton.onclick   = skipToNextMilestone;
  if (skipButton)   skipButton.onclick   = skipToFinale;

  if (experience) {
    experience.addEventListener("pointerup", function (event) {
      if (!experienceRunning || !event.target.closest) return;
      if (event.target.closest("button, label, .experience-controls, .romantic-btn, .rose, .petal")) return;
      showSecondaryControlsTemporarily();
    });
  }

  // ─── Cielo dedicado ───────────────────────────────────────────────────────
  // Campo de estrellas determinista: la misma fecha siempre dibuja el mismo
  // cielo. La estrella dedicada (la más brillante) marca su noche especial.

  function hashSkySeed(str) {
    var hash = 2166136261;
    for (var i = 0; i < str.length; i += 1) {
      hash ^= str.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }

  function mulberry32(seed) {
    var state = seed >>> 0;
    return function () {
      state |= 0;
      state = (state + 0x6D2B79F5) | 0;
      var t = Math.imul(state ^ (state >>> 15), 1 | state);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function buildSkyStars(seedStr, count) {
    var rand = mulberry32(hashSkySeed(seedStr || "chikki"));
    var stars = [];
    for (var i = 0; i < count; i += 1) {
      var bright = rand();
      stars.push({
        x: rand(),
        y: rand() * 0.85,
        r: 0.5 + rand() * (bright > 0.93 ? 1.9 : 1.1),
        base: 0.35 + rand() * 0.5,
        amp: 0.12 + rand() * 0.25,
        speed: 0.4 + rand() * 1.4,
        phase: rand() * Math.PI * 2,
        gold: rand() > 0.82,
      });
    }
    // La estrella dedicada: siempre en el mismo lugar, la más brillante.
    stars.push({ x: 0.5, y: 0.3, r: 3.1, base: 1, amp: 0.18, speed: 0.9, phase: 0, gold: true, dedicated: true });
    return stars;
  }

  function sizeSkyCanvas(canvas) {
    if (!canvas || !canvas.parentNode) return false;
    var rect = canvas.parentNode.getBoundingClientRect();
    if (rect.width < 2 || rect.height < 2) return false;
    var dpr = Math.min(2, window.devicePixelRatio || 1);
    var w = Math.round(rect.width * dpr);
    var h = Math.round(rect.height * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    return true;
  }

  function drawSkyFrame(canvas, now) {
    var ctx = canvas.getContext("2d");
    if (!ctx) return;
    var w = canvas.width;
    var h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    var t = now / 1000;
    var dedicated = null;
    for (var i = 0; i < skyStars.length; i += 1) {
      var s = skyStars[i];
      var alpha = s.base + s.amp * Math.sin(t * s.speed + s.phase);
      if (alpha < 0.08) alpha = 0.08;
      if (alpha > 1) alpha = 1;
      var px = s.x * w;
      var py = s.y * h;
      var pr = s.r * (w / 800 + 0.6);
      ctx.beginPath();
      ctx.arc(px, py, pr, 0, Math.PI * 2);
      ctx.fillStyle = s.gold
        ? "rgba(255, 214, 140, " + alpha.toFixed(3) + ")"
        : "rgba(255, 240, 245, " + alpha.toFixed(3) + ")";
      ctx.fill();
      if (s.dedicated) dedicated = { x: px, y: py, r: pr, alpha: alpha };
    }
    if (dedicated) {
      // Halo + destello de la estrella dedicada.
      var halo = ctx.createRadialGradient(dedicated.x, dedicated.y, 0, dedicated.x, dedicated.y, dedicated.r * 9);
      halo.addColorStop(0, "rgba(255, 183, 3, " + (0.5 * dedicated.alpha).toFixed(3) + ")");
      halo.addColorStop(1, "rgba(255, 183, 3, 0)");
      ctx.beginPath();
      ctx.arc(dedicated.x, dedicated.y, dedicated.r * 9, 0, Math.PI * 2);
      ctx.fillStyle = halo;
      ctx.fill();
      // Constelación: líneas tenues hacia sus vecinas más cercanas.
      ctx.strokeStyle = "rgba(255, 220, 150, 0.35)";
      ctx.lineWidth = Math.max(1, w / 900);
      var links = 0;
      for (var j = 0; j < skyStars.length && links < 5; j += 1) {
        var o = skyStars[j];
        if (o.dedicated) continue;
        var dx = o.x * w - dedicated.x;
        var dy = o.y * h - dedicated.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < Math.min(w, h) * 0.35 && o.r > 1.1) {
          ctx.beginPath();
          ctx.moveTo(dedicated.x, dedicated.y);
          ctx.lineTo(o.x * w, o.y * h);
          ctx.stroke();
          links += 1;
        }
      }
    }
  }

  function stopDedicatedSky() {
    if (skyRafId !== null) {
      if (typeof window.cancelAnimationFrame === "function") window.cancelAnimationFrame(skyRafId);
      skyRafId = null;
    }
  }

  function startDedicatedSky() {
    var canvas = qs("#skyCanvas");
    if (!canvas) return;
    stopDedicatedSky();
    skyStars = buildSkyStars(SITE.sky && SITE.sky.dateISO ? SITE.sky.dateISO : "chikki", 170);
    if (!sizeSkyCanvas(canvas)) return;
    if (isReducedMotion()) {
      drawSkyFrame(canvas, 1200); // Cielo estático elegante, sin parpadeo.
      return;
    }
    var tick = function (now) {
      var stage = qs("#stage");
      if (!stage || !stage.classList.contains("active")) {
        skyRafId = null;
        return;
      }
      drawSkyFrame(canvas, now);
      skyRafId = window.requestAnimationFrame(tick);
    };
    skyRafId = window.requestAnimationFrame(tick);
  }

  function playInstrumentToast(message, notes, waveType) {
    if (audioEnabled && !userMuted && audioContext) {
      try {
        var now = audioContext.currentTime;
        for (var n = 0; n < notes.length; n += 1) {
          tone(notes[n].freq, now + notes[n].at, notes[n].dur, waveType || "sine", 0.04);
        }
      } catch (instrumentError) {
        // El destello visual sigue aunque falle Web Audio.
      }
    }
  }

  function setupRomanticInstruments() {
    var violin = qs(".instrument-violin");
    var piano  = qs(".instrument-piano");
    var harp   = qs(".instrument-harp");
    if (violin) {
      violin.addEventListener("click", function (e) {
        e.stopPropagation();
        var x = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 200);
        var y = e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : 200);
        createSparkles(x, y);
        playInstrumentToast(text("violinToast"), [{ freq: 659.25, at: 0, dur: 0.4 }, { freq: 880, at: 0.12, dur: 0.45 }], "sine");
        showToast(text("violinToast"));
      });
    }
    if (piano) {
      piano.addEventListener("click", function (e) {
        e.stopPropagation();
        var x = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 200);
        var y = e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : 200);
        createSparkles(x, y);
        playInstrumentToast(text("pianoToast"), [{ freq: 523.25, at: 0, dur: 0.5 }, { freq: 659.25, at: 0.15, dur: 0.5 }], "triangle");
        showToast(text("pianoToast"));
      });
    }
    if (harp) {
      harp.addEventListener("click", function (e) {
        e.stopPropagation();
        var x = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 200);
        var y = e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : 200);
        createSparkles(x, y);
        playInstrumentToast(text("harpToast"), [{ freq: 783.99, at: 0, dur: 0.6 }, { freq: 1046.5, at: 0.2, dur: 0.6 }], "sine");
        showToast(text("harpToast"));
      });
    }
  }

  function resetCake() {
    var candle1 = qs("#candleLeft");
    var candle2 = qs("#candleRight");
    var instruction = qs("#candleInstruction");
    if (candle1) candle1.classList.remove("extinguished");
    if (candle2) candle2.classList.remove("extinguished");
    if (instruction) instruction.textContent = text("cakeInstruction");
  }

  function setupCakeInteraction() {
    var cake = qs("#interactiveCake");
    if (!cake) return;
    cake.addEventListener("click", function () {
      var candle1 = qs("#candleLeft");
      var candle2 = qs("#candleRight");
      var instruction = qs("#candleInstruction");
      var alreadyWished = candle1 && candle1.classList.contains("extinguished");
      if (alreadyWished) {
        // Segundo toque: re-encender para volver a pedir un deseo.
        resetCake();
        return;
      }
      if (candle1) candle1.classList.add("extinguished");
      if (candle2) candle2.classList.add("extinguished");
      if (instruction) instruction.textContent = text("cakeWish");
      makeConfetti(35);
      makeFinaleGlow(15);
      makeFallingRoses(20);
      applause();
      showToast(text("cakeToast"));
    });
  }

  // Activar interactividad romántica
  setupRomanticInstruments();
  setupCakeInteraction();
  applySiteConfig();
  syncPreferenceButtons();
  updateAudioLoadingStatus();
  updatePauseButton();
  syncSoundButton();
  preloadSerenata();
  syncSoundButton();

}());

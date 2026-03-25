/* main.js - NeoPlayers Motion Engine */

document.addEventListener('DOMContentLoaded', () => {
    
    // 10 & 11. Navbar Scroll Interaction
    const navbar = document.getElementById('navbar');
    
    const handleScroll = () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // 12. Intersection Observer for Cinematic Reveals
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Once revealed, no need to watch anymore
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Watch for reveal elements
    const observeElements = () => {
        document.querySelectorAll('.reveal').forEach(el => {
            revealObserver.observe(el);
        });
    };

    observeElements();

    // 13. Smooth Scroll for Primary CTA
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 14. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(el => el.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    // 15. Multilingual Support
    const translations = {
        en: {
            nav_experience: "Experience", nav_interface: "Interface", nav_pricing: "Pricing", btn_activate_nav: "Activate Device",
            hero_title: "The Ultimate Premium IPTV Experience", hero_subtext: "A faster, smarter, and more elegant way to stream your favorite content. Built for speed and clarity.",
            btn_activate_hero: "Activate Your Device", btn_explore: "Explore Features",
            feat_title: "The Engineering Gap", feat_subtitle: "Elite performance for high-end hardware.",
            feat_speed: "Bitstream Engine", feat_speed_desc: "Zero-lag streaming optimized for 4K UHD fiber networks.",
            feat_ui: "Cinematic OS", feat_ui_desc: "A TV-first interface designed for high-end remote navigation.",
            feat_match: "Match Today", feat_match_desc: "Integrated live sports hub with real-time scoreboards.",
            showcase_title: "The Interface of the Future", showcase_subtitle: "Experience the product proof.",
            showcase_arena: "Live Arena", showcase_cinema: "Elite Cinema", showcase_depth: "Cinematic Metadata",
            showcase_series: "Advanced Series Manager", showcase_profiles: "Personalized OS", showcase_settings: "Power-User Hub",
            btn_activate_showcase: "Stop Settling. Activate Neo.",
            comparison_title: "Why the World is Switching to NeoPlayers", comparison_subtitle: "Experience the engineering gap.",
            comp_ux: "Cinematic TV-First Interface", comp_speed: "Turbo-Cache™ Instant Browsing", comp_sports: "Real-time 'Match Today' Scoreboards",
            activation_title: "Ready in 60 Seconds", activation_subtitle: "Seamless remote sync for your hardware.",
            step_1: "Install App", step_2: "Get Device ID", step_3: "WhatsApp Sync", step_4: "Instant Watch",
            pricing_title: "Investment in Excellence", pricing_subtitle: "Choose your professional plan.",
            plan_quarterly: "Quarterly", plan_annual: "Annual Elite", plan_lifetime: "Lifetime",
            btn_choose_plan: "Select Plan",
            faq_title: "Common Questions", faq_subtitle: "Everything you need to know about NeoPlayers.",
            contact_title: "Direct Activation Portal", contact_subtitle: "Contact us via WhatsApp for instant secure setup.",
            contact_card_title: "Secure Your Access", contact_card_desc: "Skip the generic sign-ups. Tap below to speak directly with our activation team.",
            footer_cta_title: "Experience the NeoPlayers standard.", footer_cta_subtitle: "Thousands have upgraded. You're next.",
            btn_activate_footer: "Activate Now", btn_support: "Contact Support", btn_send_id: "Send Device ID",
            badge_4k: "4K HDR Optimized", badge_tv: "TV-First Build", hero_optimized_for: "Optimized for:",
            features_title: "The New Standard of IPTV Performance", features_subtitle: "More than just a player—NeoPlayers is an engineering masterpiece for your living room.",
            feat_tv_title: "TV-First Interface", feat_tv_desc: "Experience cinematic navigation natively built for the big screen with full remote control immersion.",
            feat_cache_title: "Turbo-Cache™ Speed", feat_cache_desc: "Zero lag browsing. Our smart caching engine pre-loads metadata for an instant, fluid user experience.",
            feat_match_title: "Match Today Hub", feat_match_desc2: "Stay updated with real-time football schedules and live score integration directly in your TV dashboard.",
            feat_profile_title: "Multi-Profile Shield", feat_profile_desc: "Personalize your journey. Secure, individual profiles for everyone in the home with personalized watchlists.",
            feat_diag_title: "Integrated Diagnostics", feat_diag_desc: "Monitor your network health with a built-in professional speedtest tailored for high-res streaming.",
            feat_4k_title: "4K HDR Optimized", feat_4k_desc: "Bitstream native support for UHD, HDR10+, and Dolby Vision for the ultimate cinematic clarity.",
            feat_remote_title: "60s Smart Remote", feat_remote_desc: "Skip the complexity. Activate your device using our secure, remote-first flow in under 60 seconds.",
            feat_pin_title: "Total PIN Guard", feat_pin_desc: "Advanced parental controls with granular PIN-based locks for categories, profiles, and settings.",
            showcase_arena_title: "Triple-Column Sports Engine", showcase_arena_desc: "Instant 'Match Today' access inside a high-performance browsing engine featuring native channel categorization.",
            showcase_cinema_title: "High-Density Movie Vault", showcase_cinema_desc: "Smooth, lightning-fast navigation through massive movie libraries with real-time poster rendering.",
            showcase_depth_desc: "Complete cast, crew, and high-res plot summaries delivered in an elegant details view.",
            showcase_series_desc: "Automated episode tracking and season management optimized for heavy binge-watching.",
            showcase_profiles_desc: "Secure, PIN-protected profiles with individual watchlists for everyone in the home.",
            showcase_settings_desc: "Integrated diagnostics and performance tools directly within the app ecosystem.",
            step_1_desc: "Download NeoPlayers directly from the official store on your Smart TV or Android device.",
            step_2_desc: "Launch the app to see your unique Device ID and QR activation code on the screen.",
            step_3_desc: "Send your ID to our activation portal. Our system processes the request instantly.",
            step_4_desc: "Your subscription is automatically linked. Refresh the app and start streaming immediately."
        },
        fr: {
            nav_experience: "Expérience", nav_interface: "Interface", nav_pricing: "Activer", btn_activate_nav: "Activer l'Appareil",
            hero_title: "L'Expérience IPTV Premium Ultime", hero_subtext: "Une façon plus rapide et élégante de diffuser vos contenus. Conçu pour la vitesse et la clarté.",
            btn_activate_hero: "Activer Votre Appareil", btn_explore: "Explorer les Fonctions",
            feat_title: "La Différence Technique", feat_subtitle: "Performance d'élite pour le matériel haut de gamme.",
            feat_speed: "Moteur Bitstream", feat_speed_desc: "Flux sans latence optimisé pour les réseaux fibre 4K UHD.",
            feat_ui: "Cinematic OS", feat_ui_desc: "Interface TV native conçue pour une navigation fluide à distance.",
            feat_match: "Match Today", feat_match_desc: "Hub sportif intégré avec tableaux de bord en temps réel.",
            showcase_title: "L'Interface du Futur", showcase_subtitle: "Découvrez la preuve du produit.",
            showcase_arena: "Live Arena", showcase_cinema: "Cinéma d'Élite", showcase_depth: "Métadonnées Cinématographiques",
            showcase_series: "Gestionnaire de Séries", showcase_profiles: "OS Personnalisé", showcase_settings: "Hub Utilisateurs Pro",
            btn_activate_showcase: "Arrêtez d'attendre. Activez Neo.",
            comparison_title: "Pourquoi le Monde Passe à NeoPlayers", comparison_subtitle: "Découvrez la différence technique.",
            comp_ux: "Interface Cinématique Priorité TV", comp_speed: "Navigation Instantanée Turbo-Cache™", comp_sports: "Scores 'Match Today' en Temps Réel",
            activation_title: "Prêt en 60 Secondes", activation_subtitle: "Synchronisation à distance transparente.",
            step_1: "Installer l'App", step_2: "ID de l'Appareil", step_3: "WhatsApp Sync", step_4: "Instant Watch",
            faq_title: "Questions Fréquentes", faq_subtitle: "Tout ce que vous devez savoir sur NeoPlayers.",
            contact_title: "Portail d'Activation Directe", contact_subtitle: "Contactez-nous via WhatsApp pour une configuration sécurisée et instantanée.",
            contact_card_title: "Sécuriser Votre Accès", contact_card_desc: "Évitez les inscriptions génériques. Cliquez ci-dessous pour parler directement à notre équipe.",
            footer_cta_title: "L'excellence NeoPlayers.", footer_cta_subtitle: "Des milliers ont déjà migré. À votre tour.",
            btn_activate_footer: "Activer Maintenant", btn_support: "Support Client", btn_send_id: "Envoyer l'ID Appareil",
            badge_4k: "4K HDR Optimisé", badge_tv: "Conçu pour TV", hero_optimized_for: "Optimisé pour :",
            features_title: "Le Nouveau Standard IPTV", features_subtitle: "Plus qu'un lecteur — NeoPlayers est un chef-d'œuvre technologique pour votre salon.",
            feat_tv_title: "Interface TV-First", feat_tv_desc: "Navigation cinématique native conçue pour le grand écran avec une immersion totale à la télécommande.",
            feat_cache_title: "Vitesse Turbo-Cache™", feat_cache_desc: "Navigation sans latence. Notre moteur de cache précharge les métadonnées pour une expérience fluide et instantanée.",
            feat_match_title: "Hub Match Today", feat_match_desc2: "Restez informé des calendriers de football en temps réel et de l'intégration des scores directement dans votre tableau de bord TV.",
            feat_profile_title: "Bouclier Multi-Profils", feat_profile_desc: "Personnalisez votre parcours. Profils individuels sécurisés pour tout le foyer avec des listes de lecture personnalisées.",
            feat_diag_title: "Diagnostics Intégrés", feat_diag_desc: "Surveillez votre réseau avec un test de vitesse professionnel intégré, adapté au streaming haute résolution.",
            feat_4k_title: "4K HDR Optimisé", feat_4k_desc: "Support natif du bitstream pour UHD, HDR10+ et Dolby Vision pour la meilleure qualité cinématique possible.",
            feat_remote_title: "60s Télécommande Intelligente", feat_remote_desc: "Activez votre appareil via notre flux sécurisé et prioritaire à la télécommande en moins de 60 secondes.",
            feat_pin_title: "Garde PIN Totale", feat_pin_desc: "Contrôles parentaux avancés avec des verrous PIN granulaires pour les catégories, profils et paramètres.",
            showcase_arena_title: "Moteur Sports Triple Colonne", showcase_arena_desc: "Accès instantané à 'Match Today' dans un moteur de navigation haute performance avec catégorisation native des chaînes.",
            showcase_cinema_title: "Coffre-Fort Cinéma HD", showcase_cinema_desc: "Navigation fluide et ultra-rapide à travers d'immenses bibliothèques de films avec rendu d'affiches en temps réel.",
            showcase_depth_desc: "Casting complet, équipe et résumés HD livrés dans une vue de détails élégante.",
            showcase_series_desc: "Suivi automatisé des épisodes et gestion des saisons optimisés pour le binge-watching intensif.",
            showcase_profiles_desc: "Profils sécurisés par PIN avec des watchlists individuelles pour tout le foyer.",
            showcase_settings_desc: "Diagnostics intégrés et outils de performance directement au sein de l'écosystème de l'application.",
            step_1_desc: "Téléchargez NeoPlayers directement depuis le store officiel sur votre Smart TV ou appareil Android.",
            step_2_desc: "Lancez l'application pour voir votre ID d'appareil unique et le code QR d'activation à l'écran.",
            step_3_desc: "Envoyez votre ID à notre portail d'activation. Notre système traite la demande instantanément.",
            step_4_desc: "Votre abonnement est automatiquement lié. Rafraîchissez l'application et commencez à streamer immédiatement."
        },
        ar: {
            nav_experience: "التجربة", nav_interface: "الواجهة", nav_pricing: "تفعيل", btn_activate_nav: "تفعيل الجهاز",
            hero_title: "تجربة IPTV المتميزة المطلقة", hero_subtext: "طريقة أسرع وأكثر أناقةلبث المحتوى المفضل لديك. مصمم للسرعة والوضوح التام.",
            btn_activate_hero: "فعل جهازك الآن", btn_explore: "استكشف المزايا",
            feat_title: "الفجوة الهندسية", feat_subtitle: "أداء نخبوي للأجهزة عالية المواصفات.",
            feat_speed: "محرك Bitstream", feat_speed_desc: "بث بدون تأخير محسّن لشبكات الألياف البصرية 4K UHD.",
            feat_ui: "نظام التشغيل السينمائي", feat_ui_desc: "واجهة تلفزيون أصلية مصممة للتوجيه السلس عن بُعد.",
            feat_match: "مباراة اليوم", feat_match_desc: "مركز رياضي متكامل مع نتائج المسابقات في الوقت الفعلي.",
            showcase_title: "واجهة المستقبل", showcase_subtitle: "اختبر المنتج بنفسك.",
            showcase_arena: "Live Arena", showcase_cinema: "Elite Cinema", showcase_depth: "بيانات سينمائية",
            showcase_series: "مدير المسلسلات", showcase_profiles: "نظام تشغيل مخصص", showcase_settings: "مركز المستخدمين",
            btn_activate_showcase: "توقف عن الانتظار. فعل Neo الآن.",
            comparison_title: "لماذا ينتقل العالم إلى NeoPlayers", comparison_subtitle: "اختبر الفجوة الهندسية بنفسك.",
            comp_ux: "واجهة سينمائية للتلفزيون اولاً", comp_speed: "تصفح فوري مع تقنية Turbo-Cache™", comp_sports: "نتائج 'مباراة اليوم' في الوقت الفعلي",
            activation_title: "جاهز في 60 ثانية", activation_subtitle: "مزامنة سلسة عن بُعد لجهازك.",
            step_1: "تثبيت التطبيق", step_2: "معرف الجهاز", step_3: "مزامنة واتساب", step_4: "مشاهدة فورية",
            faq_title: "الأسئلة الشائعة", faq_subtitle: "كل ما تحتاج لمعرفته حول NeoPlayers.",
            contact_title: "بوابة التفعيل المباشر", contact_subtitle: "تواصل معنا عبر الواتساب لتفعيل فوري وآمن.",
            contact_card_title: "تأمين وصولك", contact_card_desc: "تجاوز التسجيلات التقليدية. اضغط أدناه للتحدث مباشرة مع فريق التفعيل الخاص بنا.",
            footer_cta_title: "جرب معايير NeoPlayers.", footer_cta_subtitle: "الآلاف قاموا بالترقية بالفعل. حان دورك.",
            btn_activate_footer: "تفعيل الآن", btn_support: "الدعم الفني", btn_send_id: "إرسال معرف الجهاز",
            badge_4k: "4K HDR محسّن", badge_tv: "مبني للتلفزيون", hero_optimized_for: "محسّن لـ:",
            features_title: "المعيار الجديد لـ IPTV", features_subtitle: "أكثر من مجرد مشغل — NeoPlayers تحفة هندسية لغرفة معيشتك.",
            feat_tv_title: "واجهة TV-First", feat_tv_desc: "تصفح سينمائي مبني أصلاً للشاشة الكبيرة مع انغماس كامل في التحكم عن بُعد.",
            feat_cache_title: "سرعة Turbo-Cache™", feat_cache_desc: "تصفح بدون تأخير. محرك التخزين المؤقت الذكي يحمّل البيانات مسبقاً لتجربة فورية وسلسة.",
            feat_match_title: "مركز مباراة اليوم", feat_match_desc2: "ابقَ على اطلاع بجداول كرة القدم في الوقت الفعلي وتكامل النتائج المباشرة مباشرة في لوحة التحكم بتلفزيونك.",
            feat_profile_title: "درع متعدد الملفات الشخصية", feat_profile_desc: "خصص تجربتك. ملفات شخصية آمنة وفردية للجميع في المنزل مع قوائم مشاهدة مخصصة.",
            feat_diag_title: "تشخيصات متكاملة", feat_diag_desc: "راقب صحة شبكتك باختبار سرعة احترافي مدمج مخصص للبث عالي الدقة.",
            feat_4k_title: "4K HDR محسّن", feat_4k_desc: "دعم bitstream أصلي لـ UHD وHDR10+ وDolby Vision لأعلى جودة سينمائية ممكنة.",
            feat_remote_title: "تحكم ذكي في 60 ثانية", feat_remote_desc: "تجاوز التعقيد. فعّل جهازك باستخدام تدفقنا الآمن والمُعطى أولوية للتحكم عن بُعد في أقل من 60 ثانية.",
            feat_pin_title: "حماية PIN الكاملة", feat_pin_desc: "ضوابط أبوية متقدمة مع أقفال PIN دقيقة للفئات والملفات الشخصية والإعدادات.",
            showcase_arena_title: "محرك الرياضات ثلاثي الأعمدة", showcase_arena_desc: "وصول فوري إلى 'مباراة اليوم' داخل محرك تصفح عالي الأداء مع تصنيف قنوات أصلي.",
            showcase_cinema_title: "خزينة أفلام عالية الكثافة", showcase_cinema_desc: "تصفح سلس وسريع للغاية عبر مكتبات أفلام ضخمة مع عرض ملصقات فوري.",
            showcase_depth_desc: "طاقم كامل وملخصات حبكة عالية الدقة مقدمة في عرض تفاصيل أنيق.",
            showcase_series_desc: "تتبع حلقات تلقائي وإدارة مواسم محسّنة للمشاهدة المتواصلة المكثفة.",
            showcase_profiles_desc: "ملفات شخصية محمية بـ PIN مع قوائم مشاهدة فردية للجميع في المنزل.",
            showcase_settings_desc: "تشخيصات مدمجة وأدوات أداء مباشرة داخل نظام بيئة التطبيق.",
            step_1_desc: "نزّل NeoPlayers مباشرة من المتجر الرسمي على تلفازك الذكي أو جهاز Android.",
            step_2_desc: "شغّل التطبيق لترى معرف جهازك الفريد ورمز QR للتفعيل على الشاشة.",
            step_3_desc: "أرسل معرفك إلى بوابة التفعيل لدينا. يعالج نظامنا الطلب فوراً.",
            step_4_desc: "اشتراكك مرتبط تلقائياً. حدّث التطبيق وابدأ البث فوراً."
        }
    };

    // 16. WhatsApp Activation Engine
    const waNumber = "212659672184";
    const waMessages = {
        en: {
            activate: "Hello, I want to activate NeoPlayers. Please contact me for activation.",
            support: "Hello NeoPlayers, I need technical support for my device."
        },
        fr: {
            activate: "Bonjour, je veux activer NeoPlayers. Merci de me contacter.",
            support: "Bonjour NeoPlayers, j'ai besoin d'un support technique pour mon appareil."
        },
        ar: {
            activate: "مرحباً، أريد تفعيل NeoPlayers. المرجو التواصل معي.",
            support: "مرحباً NeoPlayers، أحتاج إلى دعم فني لجهازي."
        }
    };

    function updateWhatsAppLinks(lang) {
        document.querySelectorAll('[data-wa-link]').forEach(el => {
            const action = el.getAttribute('data-wa-link');
            const message = waMessages[lang][action] || waMessages[lang].activate;
            const encodedMsg = encodeURIComponent(message);
            el.href = `https://wa.me/${waNumber}?text=${encodedMsg}`;
        });
    }

    const langBtn = document.getElementById('lang-menu-btn');
    const langSwitcher = document.querySelector('.lang-switcher');
    const langDropdown = document.querySelector('.lang-dropdown');
    const langOpts = document.querySelectorAll('.lang-opt');
    const currentLangText = document.getElementById('current-lang');

    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
        if (!langSwitcher.contains(e.target)) {
            langDropdown.classList.remove('show');
        }
    });

    langOpts.forEach(opt => {
        opt.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = opt.getAttribute('data-lang');
            setLanguage(lang);
            langDropdown.classList.remove('show');
        });
    });

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        currentLangText.textContent = lang.toUpperCase();
        
        // Update regular translations
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Update WhatsApp Links
        updateWhatsAppLinks(lang);
        
        localStorage.setItem('neo_lang', lang);
    }

    // Init language
    const savedLang = localStorage.getItem('neo_lang') || 'fr';
    setLanguage(savedLang);

});

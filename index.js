// Language translation functionality
const translations = {
    en: {
        home: "Home",
        about: "About",
        services: "Services",
        donations: "Donations",
        events: "Events",
        gallery: "Gallery",
        contact: "Contact",
        welcome: "Welcome to Gau Shala",
        mission: "Our Mission",
        goals: "Our Goals",
        bookVisit: "Book a Visit",
        donateNow: "Donate Now",
        saveCow: "Save Cow",
        feedCow: "Feed Cow",
        shelter: "Shelter",
        goodFood: "Good Food",
        medicalCare: "Medical Care",
        preserveValues: "Preserve Values",
        kabutarKhana: "Kabutar Khana",
        quarantineShelter: "Quarantine Shelter"
    },
    hi: {
        home: "होम",
        about: "हमारे बारे में",
        services: "सेवाएं",
        donations: "दान",
        events: "कार्यक्रम",
        gallery: "गैलरी",
        contact: "संपर्क",
        welcome: "गौशाला में आपका स्वागत है",
        mission: "हमारा मिशन",
        goals: "हमारे लक्ष्य",
        bookVisit: "भेंट करें",
        donateNow: "अभी दान करें",
        saveCow: "गाय की रक्षा",
        feedCow: "गाय को खिलाएं",
        shelter: "आश्रय",
        goodFood: "अच्छा भोजन",
        medicalCare: "चिकित्सा देखभाल",
        preserveValues: "मूल्यों का संरक्षण",
        kabutarKhana: "कबूतर खाना",
        quarantineShelter: "संगरोध आश्रय"
    },
    mr: {
        home: "होम",
        about: "आमच्याबद्दल",
        services: "सेवा",
        donations: "दान",
        events: "कार्यक्रम",
        gallery: "गॅलरी",
        contact: "संपर्क",
        welcome: "गौशाळेत आपले स्वागत आहे",
        mission: "आमचे ध्येय",
        goals: "आमचे उद्दिष्ट",
        bookVisit: "भेट द्या",
        donateNow: "आताच दान करा",
        saveCow: "गायीचे रक्षण",
        feedCow: "गायीला खायला द्या",
        shelter: "आश्रय",
        goodFood: "चांगले अन्न",
        medicalCare: "वैद्यकीय सेवा",
        preserveValues: "मूल्ये जपणे",
        kabutarKhana: "कबुतरखाना",
        quarantineShelter: "विलगीकरण आश्रय"
    }
};

// Function to change language
function changeLanguage(lang) {
    // Update Google Translate
    const select = document.querySelector('.goog-te-combo');
    if (select) {
        select.value = lang;
        select.dispatchEvent(new Event('change'));
    }

    // Update UI elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update active language button
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(lang)) {
            btn.classList.add('active');
        }
    });

    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Function to initialize language
function initializeLanguage() {
    // Get stored language preference or default to English
    const storedLang = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(storedLang);
}

// Add data-translate attributes to elements
document.addEventListener('DOMContentLoaded', function() {
    // Add data-translate attributes to navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        const text = link.textContent.toLowerCase().trim();
        link.setAttribute('data-translate', text);
    });

    // Add data-translate attributes to other elements
    const elementsToTranslate = {
        'welcome-title': 'welcome',
        'mission-title': 'mission',
        'goals-title': 'goals',
        'book-visit-btn': 'bookVisit',
        'donate-now-btn': 'donateNow'
    };

    Object.entries(elementsToTranslate).forEach(([id, key]) => {
        const element = document.getElementById(id);
        if (element) {
            element.setAttribute('data-translate', key);
        }
    });

    // Initialize language
    initializeLanguage();
});

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en', // The default language of your website
      includedLanguages: 'en,hi,bn,te,ta,gu,ml,kn,mr,pa,ur,mar', // List of languages to include
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
  }

 
  
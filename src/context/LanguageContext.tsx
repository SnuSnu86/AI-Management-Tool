import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.dashboard': 'Dashboard',
    'nav.modelSettings': 'Model Settings',
    'nav.dataManagement': 'Data Management',
    'nav.analytics': 'Analytics',
    'nav.users': 'Users',
    'nav.settings': 'Settings',
    
    // Auth
    'auth.login': 'Sign in to your account',
    'auth.register': 'Create your account',
    'auth.email': 'Email address',
    'auth.password': 'Password',
    'auth.fullName': 'Full Name',
    'auth.rememberMe': 'Remember me',
    'auth.forgotPassword': 'Forgot your password?',
    'auth.noAccount': 'Don\'t have an account? Sign up',
    'auth.hasAccount': 'Already have an account? Sign in',
    'auth.signIn': 'Sign in',
    'auth.signOut': 'Sign out',
    'auth.createAccount': 'Create account',
    'auth.signingIn': 'Signing in...',
    'auth.creatingAccount': 'Creating account...',
    
    // Profile
    'profile.viewProfile': 'View Profile',
    'profile.editProfile': 'Edit Profile',
    'profile.changePicture': 'Change Picture',
    'profile.uploadPicture': 'Upload Picture',
    'profile.selectImage': 'Select Image',
    'profile.uploading': 'Uploading...',
    'profile.saveChanges': 'Save Changes',
    
    // Settings
    'settings.language': 'Language Settings',
    'settings.language.select': 'Select Language',
    'settings.language.en': 'English',
    'settings.language.de': 'German',
    'settings.security': 'Security Settings',
    'settings.notifications': 'Notification Settings',
    'settings.2fa': 'Two-Factor Authentication',
    'settings.autoLogout': 'Auto-Logout Settings',
    
    // Model Settings
    'modelSettings.vocabulary': 'Custom Vocabulary Management',
    'modelSettings.vocabulary.add': 'Add Word',
    'modelSettings.vocabulary.placeholder': 'Enter custom vocabulary word',
    'modelSettings.vocabulary.count': '{count} words',
    'modelSettings.filters': 'Filter Words Management',
    'modelSettings.filters.add': 'Add Filter',
    'modelSettings.filters.placeholder': 'Add filter word',
    'modelSettings.filters.count': '{count} filters',
    'modelSettings.filters.enable': 'Enable Filter System',
    'modelSettings.transfer': 'Call Transfer Configuration',
    'modelSettings.transfer.update': 'Update',
    'modelSettings.transfer.test': 'Test Number',
    'modelSettings.transfer.current': 'Current Transfer Number',
    'modelSettings.transfer.lastUpdate': 'Last updated: {time}',
    
    // Analytics
    'analytics.callStats': 'Call Statistics',
    'analytics.actionMetrics': 'Action Metrics',
    'analytics.performance': 'Performance Analysis',
    'analytics.export': 'Export Data',
    'analytics.timeRange': 'Time Range',
    
    // Common
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.search': 'Search',
    'common.actions': 'Actions',
    'common.status': 'Status',
    'common.active': 'Active',
    'common.inactive': 'Inactive',
  },
  de: {
    // Navigation
    'nav.dashboard': 'Dashboard',
    'nav.modelSettings': 'Modell-Einstellungen',
    'nav.dataManagement': 'Datenverwaltung',
    'nav.analytics': 'Analysen',
    'nav.users': 'Benutzer',
    'nav.settings': 'Einstellungen',
    
    // Auth
    'auth.login': 'In Konto einloggen',
    'auth.register': 'Konto erstellen',
    'auth.email': 'E-Mail-Adresse',
    'auth.password': 'Passwort',
    'auth.fullName': 'Vollständiger Name',
    'auth.rememberMe': 'Angemeldet bleiben',
    'auth.forgotPassword': 'Passwort vergessen?',
    'auth.noAccount': 'Noch kein Konto? Registrieren',
    'auth.hasAccount': 'Bereits ein Konto? Einloggen',
    'auth.signIn': 'Einloggen',
    'auth.signOut': 'Ausloggen',
    'auth.createAccount': 'Konto erstellen',
    'auth.signingIn': 'Einloggen...',
    'auth.creatingAccount': 'Konto wird erstellt...',
    
    // Profile
    'profile.viewProfile': 'Profil anzeigen',
    'profile.editProfile': 'Profil bearbeiten',
    'profile.changePicture': 'Bild ändern',
    'profile.uploadPicture': 'Bild hochladen',
    'profile.selectImage': 'Bild auswählen',
    'profile.uploading': 'Wird hochgeladen...',
    'profile.saveChanges': 'Änderungen speichern',
    
    // Settings
    'settings.language': 'Spracheinstellungen',
    'settings.language.select': 'Sprache auswählen',
    'settings.language.en': 'Englisch',
    'settings.language.de': 'Deutsch',
    'settings.security': 'Sicherheitseinstellungen',
    'settings.notifications': 'Benachrichtigungseinstellungen',
    'settings.2fa': 'Zwei-Faktor-Authentifizierung',
    'settings.autoLogout': 'Auto-Logout-Einstellungen',
    
    // Model Settings
    'modelSettings.vocabulary': 'Benutzerdefinierte Vokabelverwaltung',
    'modelSettings.vocabulary.add': 'Wort hinzufügen',
    'modelSettings.vocabulary.placeholder': 'Benutzerdefiniertes Vokabelwort eingeben',
    'modelSettings.vocabulary.count': '{count} Wörter',
    'modelSettings.filters': 'Filterwörter-Verwaltung',
    'modelSettings.filters.add': 'Filter hinzufügen',
    'modelSettings.filters.placeholder': 'Filterwort hinzufügen',
    'modelSettings.filters.count': '{count} Filter',
    'modelSettings.filters.enable': 'Filtersystem aktivieren',
    'modelSettings.transfer': 'Anrufweiterleitung-Konfiguration',
    'modelSettings.transfer.update': 'Aktualisieren',
    'modelSettings.transfer.test': 'Nummer testen',
    'modelSettings.transfer.current': 'Aktuelle Weiterleitungsnummer',
    'modelSettings.transfer.lastUpdate': 'Zuletzt aktualisiert: {time}',
    
    // Analytics
    'analytics.callStats': 'Anrufstatistiken',
    'analytics.actionMetrics': 'Aktionsmetriken',
    'analytics.performance': 'Leistungsanalyse',
    'analytics.export': 'Daten exportieren',
    'analytics.timeRange': 'Zeitraum',
    
    // Common
    'common.save': 'Speichern',
    'common.cancel': 'Abbrechen',
    'common.delete': 'Löschen',
    'common.edit': 'Bearbeiten',
    'common.loading': 'Laden...',
    'common.error': 'Fehler',
    'common.success': 'Erfolg',
    'common.search': 'Suchen',
    'common.actions': 'Aktionen',
    'common.status': 'Status',
    'common.active': 'Aktiv',
    'common.inactive': 'Inaktiv',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string, params?: Record<string, string | number>): string => {
    let text = translations[language][key as keyof typeof translations.en] || key;
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        text = text.replace(`{${key}}`, String(value));
      });
    }
    
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
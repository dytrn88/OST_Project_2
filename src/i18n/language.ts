export interface languageInterface {
  de: {
    form: {
      title: string;
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      submit: string;
      address: string;
      city: string;
      zip: string;
      abos: string;
      success: string;
      error: string;
      duration: string;
    };
    checkin: {
      daySig: string;
      success: string;
      error: string;
      selectionError: string;
    };
    general: {
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
      sunday: string;
    };
  };
}

export const lan: languageInterface = {
  de: {
    form: {
      title: "Registrierung",
      firstName: "Name",
      lastName: "Nachname",
      email: "E-Mail",
      password: "Passwort",
      submit: "Absenden",
      address: "Adresse",
      city: "Stadt",
      zip: "PLZ",
      abos: "Abos",
      success: "Erfolgreich gesendet",
      error: "Fehler",
      duration: "Dauer",
    },
    checkin: {
      daySig: "Heute ist",
      success: "Erfolgreich eingechekt!",
      error: "Checkin fehlgeschlagen!",
      selectionError: "Bitte wähle einen Nutzer und eine Klasse aus!",
    },
    general: {
      monday: "Montag",
      tuesday: "Dienstag",
      wednesday: "Mittwoch",
      thursday: "Donnerstag",
      friday: "Freitag",
      saturday: "Samstag",
      sunday: "Sonntag",
    },
  },
};

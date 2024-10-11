// @ts-ignore
import  logo from './extensions/Wootu Skin& Hair Logo low.png';
// @ts-ignore
import  favicon from './extensions/Wootu Skin& Hair Logo low.png';


const config = {
  auth: {
    logo
  },

  head: {
    favicon: favicon
  },

  menu: {
    logo
  },
   // Extend the translations
   translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Store Dashboard",

      "app.components.LeftMenu.navbrand.workplace": "Testing",

      "Auth.form.welcome.title": "Admin Panel",

      "Auth.form.welcome.subtitle": "Login to your account",

      "Settings.profile.form.section.experience.interfaceLanguageHelp":
        "Preference changes will apply only to you.",
    },
  },
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },
}


const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};

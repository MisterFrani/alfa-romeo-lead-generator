const OPTIONS = {
  models: [
    {
      label: "COMPACTE",
      value: "compact",
    },
    {
      label: "SUV",
      value: "suv",
    },
    {
      label: "ÉLECTRIQUE & HYBRIDE",
      value: "electric_hybrid",
    },
    {
      label: "SPORTIVE",
      value: "sport",
    },
  ],
  interests: [
    {
      label: "Un véhicule",
      value: "vehicle",
    },
    {
      label: "Leasing d'un véhicule",
      value: "leasing",
    },
  ],

  purchases: [
    {
      label: "Neuf",
      value: "new",
    },
    {
      label: "Occasion",
      value: "used",
    },
  ],
  leases: [
    {
      label: "6 mois",
      value: 6,
    },

    {
      label: "12 mois",
      value: 12,
    },

    {
      label: "18 mois",
      value: 18,
    },

    {
      label: "24 mois",
      value: 24,
    },
  ],
  userInfos: [
    {
      type: "text",
      label: "Prénom",
      value: "firstName",
      placeholder: "Votre prénom",
      defaultValue: "John",
    },
    {
      type: "text",
      label: "Nom",
      value: "lastName",
      placeholder: "Votre nom",
      defaultValue: "Doe",
    },
    {
      type: "text",
      label: "Code postal",
      value: "postalCode",
      placeholder: "12345",
      maxLength: 5,
      className: "md:max-w-[150px]",
      defaultValue: "75001",
    },
    {
      type: "tel",
      label: "Téléphone",
      value: "phone",
      placeholder: "06 XX XX XX XX",
      maxLength: 10,
      className: "md:-ml-24",
      defaultValue: "0600000000",
    },
  ],
};

export const DATA_STEPS = [
  {
    step: 1,
    key: "modelType",
    title: "Quel est le type de modèle que vous souhaitez tester ?",
    options: OPTIONS.models,
  },

  {
    step: 2,
    key: "interestedIn",
    title: "Vous êtes intéressé par ?",
    options: OPTIONS.interests,
  },

  {
    step: 3,
    createData: (formData) => {
      if (!formData.interestedIn) {
        return;
      }
      if (formData.interestedIn.value === "vehicle") {
        return {
          title: "Pour quel type de véhicule ?",
          options: OPTIONS.purchases,
          key: "purchaseType",
        };
      }
      return {
        title: "Pour quelle durée ?",
        options: OPTIONS.leases,
        key: "leaseDuration",
      };
    },
  },

  {
    step: 4,
    title: "Vos coordonnées :",
    key: "userInfos",
    options: OPTIONS.userInfos,
  },
];

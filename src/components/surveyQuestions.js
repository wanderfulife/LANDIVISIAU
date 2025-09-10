// 🚄 LANDIVISIAU TRAIN STATION INTERMODALITY SURVEY
// Adapted from AREP mobility study questionnaire

export const templateSurveyQuestions = [
    // Q1 - Station presence reason (filters survey flow)
    {
        id: "Q1",
        text: "Quelle est la raison de votre présence en gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Je vais prendre le train", next: "Q2_MONTANTS" },
            { id: 2, text: "Je viens de descendre du train", next: "end" }, // Do not interview
            { id: 3, text: "J'accompagne des voyageurs qui partent / J'attends des voyageurs qui arrivent", next: "Q2_ACCOMPAGNATEURS" },
            { id: 4, text: "Autre raison (achat billet, commerces en gare...)", next: "Q2_ACCOMPAGNATEURS" }
        ]
    },

    // ============ SECTION MONTANTS (TRAIN PASSENGERS) ============

    // Q2 - Origin for train passengers
    {
        id: "Q2_MONTANTS",
        text: "Quelle est l'origine de votre déplacement ? D'où êtes-vous parti pour arriver à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Landivisiau", next: "Q2A_MONTANTS" },
            { id: 2, text: "Autre commune", next: "Q2_AUTRE_MONTANTS" }
        ]
    },

    // Q2 - Autre commune for train passengers
    {
        id: "Q2_AUTRE_MONTANTS",
        text: "Préciser nom de la commune :",
        type: 'commune',
        next: "Q3_MONTANTS"
    },

    // Q2a - Street in Landivisiau for train passengers
    {
        id: "Q2A_MONTANTS",
        text: "De quelle rue de Landivisiau venez-vous ?",
        type: 'street',
        next: "Q3_MONTANTS"
    },

    // Q3 - Transport mode to station for train passengers
    {
        id: "Q3_MONTANTS",
        text: "Quel mode de transport avez-vous utilisé pour vous rendre à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "À pied", next: "Q4_MONTANTS" },
            { id: 2, text: "En voiture -- en tant que conducteur", next: "Q3A_MONTANTS" },
            { id: 3, text: "En voiture -- en tant que passager", next: "Q4_MONTANTS" },
            { id: 4, text: "En covoiturage avec un autre usager du train", next: "Q4_MONTANTS" },
            { id: 5, text: "En bus/car", next: "Q3B_MONTANTS" },
            { id: 6, text: "À vélo", next: "Q3D_MONTANTS" },
            { id: 7, text: "En trottinette", next: "Q3D_MONTANTS" },
            { id: 8, text: "En Taxi/VTC", next: "Q4_MONTANTS" },
            { id: 9, text: "En 2 roues Motorisé (Moto, scooter...)", next: "Q3A_MONTANTS" },
            { id: 10, text: "En train - je fais une correspondance", next: "Q4_MONTANTS" },
            { id: 11, text: "Autre", next: "Q3_AUTRE_MONTANTS" }
        ]
    },

    // Q3 - Autre transport mode for train passengers
    {
        id: "Q3_AUTRE_MONTANTS",
        text: "Préciser le mode de transport :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser",
        next: "Q4_MONTANTS"
    },

    // Q3a - Vehicle parking location for train passengers
    {
        id: "Q3A_MONTANTS",
        text: "Où avez-vous stationné votre véhicule ?",
        type: 'singleChoice',
         image: '/plan.png',
        imageAlt: 'Plan de la gare de Landivisiau montrant les zones de stationnement',
        options: [
            { id: 1, text: "Sur le parking de la gare", next: "Q3A_PRIME_MONTANTS" },
            { id: 2, text: "Sur une autre place en voirie ou parking au sud de la gare", next: "Q3A_PRIME_MONTANTS" },
            { id: 3, text: "Sur une autre place en voirie ou parking au nord de la gare", next: "Q3A_PRIME_MONTANTS" },
            { id: 4, text: "Sur un stationnement privé (box ou place de parking privée)", next: "Q3A_PRIME_MONTANTS" }
        ]
    },

    // Q3a' - Parking duration for train passengers
    {
        id: "Q3A_PRIME_MONTANTS",
        text: "Combien de temps allez-vous laisser votre voiture stationnée ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Moins de 2 heures", next: "Q4_MONTANTS" },
            { id: 2, text: "Une demi-journée (entre 2 et 4 heures)", next: "Q4_MONTANTS" },
            { id: 3, text: "Une journée entière (entre 4h et 12h)", next: "Q4_MONTANTS" },
            { id: 4, text: "2 à 3 jours", next: "Q4_MONTANTS" },
            { id: 5, text: "3 à 6 jours", next: "Q4_MONTANTS" },
            { id: 6, text: "1 semaine ou plus", next: "Q4_MONTANTS" }
        ]
    },

    // Q3b - Bus line for train passengers
    {
        id: "Q3B_MONTANTS",
        text: "Quelle ligne de bus/car avez-vous emprunté ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "La navette gare <> centre-ville", next: "Q4_MONTANTS" },
            { id: 2, text: "Ligne BreizhGo 980 (Sizun - Landivisiau)", next: "Q4_MONTANTS" },
            { id: 3, text: "Ligne BreizhGo 981 (Plouzévédé - Landivisiau)", next: "Q4_MONTANTS" },
            { id: 4, text: "Ligne BreizhGo 9801 (Sizun - Landivisiau)", next: "Q4_MONTANTS" },
            { id: 5, text: "Ligne BreizhGo 9802 (Guiclan - Landivisiau)", next: "Q4_MONTANTS" },
            { id: 6, text: "Ligne BreizhGo 9803 (Saint-Fougay - Landivisiau)", next: "Q4_MONTANTS" },
            { id: 7, text: "Ligne BreizhGo 9804 (Loc-Eguiner - Landivisiau)", next: "Q4_MONTANTS" },
            { id: 8, text: "Car scolaire", next: "Q4_MONTANTS" },
            { id: 9, text: "Autre", next: "Q3B_AUTRE_MONTANTS" }
        ]
    },

    // Q3b - Autre bus line for train passengers
    {
        id: "Q3B_AUTRE_MONTANTS",
        text: "Préciser la ligne :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser",
        next: "Q4_MONTANTS"
    },

    // Q3d - Bike/scooter parking for train passengers
    {
        id: "Q3D_MONTANTS",
        text: "Où avez-vous stationné votre vélo/trottinette ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Sur les arceaux au niveau de l'abri gare", next: "Q4_MONTANTS" },
            { id: 2, text: "Dans un box ou une consigne sécurisée Breizhgo", next: "Q4_MONTANTS" },
            { id: 3, text: "Je le transporte avec moi dans le train", next: "Q4_MONTANTS" },
            { id: 4, text: "Autre", next: "Q3D_AUTRE_MONTANTS" }
        ]
    },

    // Q3d - Autre bike parking for train passengers
    {
        id: "Q3D_AUTRE_MONTANTS",
        text: "Préciser l'emplacement :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser",
        next: "Q4_MONTANTS"
    },

    // Q4 - Transport subscription for train passengers
    {
        id: "Q4_MONTANTS",
        text: "Possédez-vous un abonnement de transport ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Oui, un abonnement TER", next: "Q5_MONTANTS" },
            { id: 2, text: "Oui, un abonnement couplé TER-Bus", next: "Q5_MONTANTS" },
            { id: 3, text: "Non", next: "Q5_MONTANTS" }
        ]
    },

    // Q5 - Final destination station for train passengers
    {
        id: "Q5_MONTANTS",
        text: "Quelle sera votre gare de destination finale ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Brest", next: "Q6_MONTANTS" },
            { id: 2, text: "Rennes", next: "Q6_MONTANTS" },
            { id: 3, text: "Landerneau", next: "Q6_MONTANTS" },
            { id: 4, text: "Saint-Brieuc", next: "Q6_MONTANTS" },
            { id: 5, text: "Guingamp", next: "Q6_MONTANTS" },
            { id: 6, text: "Paris-Montparnasse", next: "Q6_MONTANTS" },
            { id: 7, text: "Morlaix", next: "Q6_MONTANTS" },
            { id: 8, text: "Quimper", next: "Q6_MONTANTS" },
            { id: 9, text: "Autre", next: "Q5_AUTRE_MONTANTS" }
        ]
    },

    // Q5 - Autre destination for train passengers
    {
        id: "Q5_AUTRE_MONTANTS",
        text: "Préciser la gare de destination :",
        type: 'gare',
        next: "Q6_MONTANTS"
    },

    // Q6 - Trip purpose for train passengers
    {
        id: "Q6_MONTANTS",
        text: "Quel est le motif de votre déplacement en train ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Je me rends sur mon lieu de travail", next: "Q7_MONTANTS" },
            { id: 2, text: "Je me rends sur mon lieu d'études", next: "Q7_MONTANTS" },
            { id: 3, text: "Je rentre à mon domicile principal", next: "Q6A_MONTANTS" },
            { id: 4, text: "Déplacement professionnel", next: "Q7_MONTANTS" },
            { id: 5, text: "Loisirs, tourisme", next: "Q7_MONTANTS" },
            { id: 6, text: "Autres", next: "Q6_AUTRE_MONTANTS" }
        ]
    },

    // Q6 - Autre trip purpose for train passengers
    {
        id: "Q6_AUTRE_MONTANTS",
        text: "Préciser le motif (Achats, démarches administratives, RDV médical...) :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser",
        next: "Q7_MONTANTS"
    },

    // Q6a - Reason for coming to Landivisiau for train passengers
    {
        id: "Q6A_MONTANTS",
        text: "Quel était la raison de votre venue à Landivisiau ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Travail", next: "Q7_MONTANTS" },
            { id: 2, text: "Études", next: "Q7_MONTANTS" },
            { id: 3, text: "Déplacement professionnel", next: "Q7_MONTANTS" },
            { id: 4, text: "Loisirs, tourisme", next: "Q7_MONTANTS" },
            { id: 5, text: "Autres (Achats, démarches administratives, RDV médical, visite...)", next: "Q7_MONTANTS" }
        ]
    },

    // Q7 - Improvement suggestions for train passengers
    {
        id: "Q7_MONTANTS",
        text: "Selon vous, que faudrait-il faire en priorité pour améliorer les conditions d'accès à cette gare ?",
        type: 'freeText',
        freeTextPlaceholder: "Notez en clair",
        next: "end"
    },

    // ============ SECTION ACCOMPAGNATEURS (COMPANIONS) ============

    // Q2 - Origin for companions
    {
        id: "Q2_ACCOMPAGNATEURS",
        text: "Quelle est l'origine de votre déplacement ? D'où êtes-vous parti pour arriver à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Landivisiau", next: "Q2A_ACCOMPAGNATEURS" },
            { id: 2, text: "Autre commune", next: "Q2_AUTRE_ACCOMPAGNATEURS" }
        ]
    },

    // Q2 - Autre commune for companions
    {
        id: "Q2_AUTRE_ACCOMPAGNATEURS",
        text: "Préciser nom de la commune :",
        type: 'commune',
        next: "Q3_ACCOMPAGNATEURS"
    },

    // Q2a - Street in Landivisiau for companions
    {
        id: "Q2A_ACCOMPAGNATEURS",
        text: "De quelle rue de Landivisiau venez-vous ?",
        type: 'street',
        next: "Q3_ACCOMPAGNATEURS"
    },

    // Q3 - Transport mode for companions
    {
        id: "Q3_ACCOMPAGNATEURS",
        text: "Quel mode de transport avez-vous utilisé pour vous rendre à la gare ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "À pied", next: "Q4_ACCOMPAGNATEURS" },
            { id: 2, text: "En voiture -- en tant que conducteur", next: "Q3A_ACCOMPAGNATEURS" },
            { id: 3, text: "En voiture -- en tant que passager", next: "Q4_ACCOMPAGNATEURS" },
            { id: 4, text: "En covoiturage avec un autre usager du train", next: "Q4_ACCOMPAGNATEURS" },
            { id: 5, text: "En bus/car", next: "Q4_ACCOMPAGNATEURS" },
            { id: 6, text: "À vélo", next: "Q4_ACCOMPAGNATEURS" },
            { id: 7, text: "En trottinette", next: "Q4_ACCOMPAGNATEURS" },
            { id: 8, text: "En Taxi/VTC", next: "Q4_ACCOMPAGNATEURS" },
            { id: 9, text: "En 2 roues Motorisé (Moto, scooter...)", next: "Q3A_ACCOMPAGNATEURS" },
            { id: 10, text: "Autre", next: "Q3_AUTRE_ACCOMPAGNATEURS" }
        ]
    },

    // Q3 - Autre transport for companions
    {
        id: "Q3_AUTRE_ACCOMPAGNATEURS",
        text: "Préciser le mode de transport :",
        type: 'freeText',
        freeTextPlaceholder: "Préciser",
        next: "Q4_ACCOMPAGNATEURS"
    },

    // Q3a - Vehicle parking for companions
    {
        id: "Q3A_ACCOMPAGNATEURS",
        text: "Où avez-vous stationné votre véhicule ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Sur le parking de la gare", next: "Q4_ACCOMPAGNATEURS" },
            { id: 2, text: "Sur une autre place en voirie ou parking au sud de la gare", next: "Q4_ACCOMPAGNATEURS" },
            { id: 3, text: "Sur une autre place en voirie ou parking au nord de la gare", next: "Q4_ACCOMPAGNATEURS" },
            { id: 4, text: "Sur un stationnement privé (box ou place de parking privée)", next: "Q4_ACCOMPAGNATEURS" }
        ]
    },

    // Q4 - Final question for companions
    {
        id: "Q4_ACCOMPAGNATEURS",
        text: "Selon vous, que faudrait-il faire en priorité pour améliorer les conditions d'accès à cette gare ?",
        type: 'freeText',
        freeTextPlaceholder: "Notez en clair",
        next: "end"
    }
];
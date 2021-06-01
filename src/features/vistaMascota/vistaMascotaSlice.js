import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "vistaMascota",
  initialState: {
    petdata: {
      age: 0,
      allergies: "Ninguna",
      birth: "2021-02-06T12:25:19.925157",
      breed: "Chihuahua",
      kind: "Canino",
      pet_id: "01EYC63JFEMWYE5EC5GQC4G1C2",
      pet_name: "Candy",
      surgical_interventions: "Ninguna",
      vaccination: [
        {
          next_dosis: "2021-03-12T04:23:00.646955",
          user_name: "Agustin",
          vaccination_date: "2021-02-12T23:28:03.183998",
          vaccination_id: "01EYC9593F4NCCRCM39Z0G95Q6",
          vaccine_name: "Moquillo",
        },

        {
          next_dosis: "2021-03-12T04:23:00.646955",
          user_name: "Dr.PanchoMelendez",
          vaccination_date: "2021-02-13T06:54:02.605141",
          vaccination_id: "01EYD2NXBD91NVS1A77X66EN6T",
          vaccine_name: "Moquillo",
        },

        {
          next_dosis: "2021-04-08T00:00:00.000",
          user_name: "Dr.Chapatin",
          vaccination_date: "2021-03-08T15:28:18.794150",
          vaccination_id: "01F09783BAERPH4B9ABJ698W48",
          vaccine_name: "Tetanos",
        },
      ],
      consultations: [
        {
          date: "2021-02-12T23:13:00.880397",
          datedrecord_id: "01EYC89QYGBQ9VZCQQFFA2MDSZ",
          diagnosis: "Gastroenteritis",
          medical_recipe: "Hidratación constante, dieta blanda",
          symptoms: "Vómito, malestar físico, perdida del apetito",
          user_name: "Agustin",
          weight: 3.2,
        },

        {
          date: "2021-02-13T06:53:06.493111",
          datedrecord_id: "01EYD2M6HXV58RDBSDKHSY8NQ8",
          diagnosis: "Gastroenteritis",
          medical_recipe: "Hidratación constante, dieta blanda",
          symptoms: "Vómito, malestar físico, perdida del apetito",
          user_name: "Dr.PanchoMelendez",
          weight: 3.2,
        },

        {
          date: "2021-03-09T18:36:52.809487",
          datedrecord_id: "01F0C4E369BT5176PKQBVS331X",
          diagnosis: "Dolor de articulaciones",
          medical_recipe: "2 tabletas de paracetamol (250gr) en la comida",
          symptoms: "Cansancio extremo",
          user_name: "Dr.Chapatin",
          weight: 3.4,
        },
      ],
    },
  },
});

export default slice.reducer;

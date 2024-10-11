export abstract class StorageNames {}

export const Constants = {
  ProjTitle: "Vinzon's Water",
  ProjTitle1: "Vinzon's",
  ProjTitle2: "Water",
  About: "Your source for real-time environmental data: pH, temperature, TDS, and turbidity - all at your fingertips with our cutting-edge Arduino device.",
  NodeMCUIP: "http://192.168.4.1",
  DefaulMapZoom: 13,
};

export const LocalStorage = {
  mapCenter: "mapCenter",
  mapZoom: "mapZoom",
};

export const Config = {
  useFirebase: true,
  useSignIn: true,
  useRegister: false,
  useFCM: false,
  vapidKey: "",
  useTermsAndConditions: false,
  termsLink: "{{https://www.termsandconditionsgenerator.com}}",
  // vapidKey: "BHFEtmzNp2xZv1NCgS0ku187NKGWbrR_5FseNeYyn04ogXULW4dbiiGNfBLmfpilKnfns3kem1w26Sjt8cigG08",
};

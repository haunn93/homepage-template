export const getCompanyDomain = () => {
  if (typeof window !== "undefined") {
    if (window.location.hostname.includes("experity")) {
      return "experity";
    }
    return window.location.hostname.split(".")[0];
  }
  return "";
};

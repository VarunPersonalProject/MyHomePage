const ICON_BASEURL = "https://icons.duckduckgo.com",
  OPENWEATHER_APIKEY = "775c9cb752c322ecaed7fe2ab6ddf782",
  OPENWEATHER_URL = "https://api.openweathermap.org/data/2.5/weather",
  key = "coordinate";

class ApiWrapper {
  iconRequest({ url }) {
    return `${ICON_BASEURL}/ip2/${url.hostname}.ico`;
  }

  request({ url, mode }) {
    return fetch(url, { mode }).catch(console.error);
  }

  temperatureLocation() {
    let oPosition = this.getStorage(key);
    return this.request({
      url: `${OPENWEATHER_URL}?${new URLSearchParams({
        lat: oPosition.latitude,
        lon: oPosition.longitude,
        appid: OPENWEATHER_APIKEY,
        units: "metric",
      })}`,
    }).then((oResponse) => oResponse.json());
  }

  userConfiguration() {
    const username = this.getStorage("username") || "";

    navigator.geolocation.getCurrentPosition((oCorr) => {
      this.setStorage(key, {
        latitude: oCorr.coords.latitude,
        longitude: oCorr.coords.longitude,
      });
      if (!username) {
        let personName = prompt("Please enter your name.", "");
        if ((personName || "").trim()) {
          this.setStorage("username", personName);
        } else {
          window.location.reload();
        }
      }
    });
  }

  setWithExpiry(sKey, sValue, nExtra) {
    const dNow = new Date(),
      oItem = {
        value: sValue,
        expiry: dNow.getTime() + nExtra,
      };
    this.setStorage(sKey, oItem);
  }

  getWithExpiry(sKey) {
    const sItemStr = this.getStorage(sKey);
    if (!sItemStr) {
      return null;
    }
    const oItem = sItemStr,
      dNow = new Date();
    if (dNow.getTime() > oItem.expiry) {
      localStorage.removeItem(sKey);
      return null;
    }
    return oItem.value;
  }

  setStorage(sKey, sValue) {
    localStorage.setItem(sKey, JSON.stringify(sValue));
  }

  getStorage(sKey) {
    return JSON.parse(localStorage.getItem(sKey));
  }
}
export default ApiWrapper;

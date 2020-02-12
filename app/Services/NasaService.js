import Nasa from "../Models/Nasa.js"
import store from "../store.js"

let _api = axios.create({
  baseURL: "https://api.nasa.gov/planetary/apod?api_key=nPENIa2BENh4J8ppi63WvMoQ7byyYCp0PdlYWCE2",
  timeout: 5000
})

class NasaService {
  constructor() {
    console.log("service is working")
  }

  getNasa() {
    _api.get("")
      .then(res => {
        let nasaData = new Nasa(res.data);
        store.commit("nasa", nasaData)
      });
  }
}
const NASASERVICE = new NasaService();
export default NASASERVICE
import nasaService from "../Services/NasaService.js"
import store from "../store.js"

function _draw() {
  let nasa = store.State.nasa
  console.log(nasa)

  document.getElementById("title").innerHTML = nasa.titleTemplate
  document.getElementById("explanation").innerHTML = nasa.explTemplate
  document.getElementById("image").style.backgroundImage = `url(${nasa.hdurl})`
}
export default class NasaController {
  constructor() {
    console.log("controller is working")
    store.subscribe("nasa", _draw);
    nasaService.getNasa()
  }
}
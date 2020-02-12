export default class Nasa {

  constructor(data) {
    this.hdurl = data.hdurl;
    this.title = data.title;
    this.explanation = data.explanation;
  }

  get titleTemplate() {
    return `
      <h1>${this.title}</h1>
    `
  }

  get picTemplate() {
    return `
    <img src="${this.hdurl}">
    `
  }

  get explTemplate() {
    return `
    <p>${this.explanation}</p>
    `
  }
}
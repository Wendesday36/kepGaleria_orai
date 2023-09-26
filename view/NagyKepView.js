class NagyKepView {
  #kep;
  constructor(kep, szuloElem) {
    this.#kep = kep;
    this.szuloElem = szuloElem;
    this.#HTMLosszerak();
    this.balGombElem = $("#bal")
    this.jobbGombElem = $("#jobb")
    this.NagykepHelye =$("#nagykepHelye")
    this.balGombElem.on("click",()=>{
      this.#sajatesemenyKezelo("bal")
    })
    this.jobbGombElem.on("click",()=>{
      this.#sajatesemenyKezelo("jobb")
    })
  }
  #sajatesemenyKezelo(esemenynev){
    //console.log(esemenynev)
    const esemenyem = new CustomEvent(esemenynev)
    window.dispatchEvent(esemenyem)
  }
  #HTMLosszerak() {
    let txt = "<button id='bal'> BAL </button>";

    txt += `<div class="card">
    <div class="card-header">Főkép</div>
    <div class="card-body"><img id ='nagykepHelye' src="${this.#kep }" class="img-thumbnail" alt="Cinque Terre"></div>
    <div class="card-footer">Footer</div>
  </div>`;
  txt += "<button id='jobb'> JOBB </button>";
  this.szuloElem.html(txt)
  }
  nagykepCsere(kep){
    this.NagykepHelye.attr("src",kep)
  }
}
export default NagyKepView;

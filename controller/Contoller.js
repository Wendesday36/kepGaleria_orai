import Model from "../model/Model.js"
import NagyKepView from "../view/NagyKepView.js";
class Controller {
  constructor() {
    const MODEL = new Model()
    const NAGYKEPVIEW = new NagyKepView(MODEL.getAktKep(),$(".nagykep"))

    $(window).on("jobb",()=>{
      MODEL.jobb()
      let aktkep =MODEL.getAktKep()
      console.log(aktkep)
      NAGYKEPVIEW.nagykepCsere(aktkep)
    })
    $(window).on("bal",()=>{
      MODEL.bal()
      let aktkep = MODEL.getAktKep()
      console.log(aktkep)
      NAGYKEPVIEW.nagykepCsere(aktkep)
    })
  }
}
export default Controller;

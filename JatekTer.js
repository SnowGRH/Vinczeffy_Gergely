import Lampa from "./lampa.js"

class JatekTer{
    #db;
    #allapotLista=[];
    #meret;
    #lepes;
    
    constructor(){
        const ART = $("article");
        let allapotLista = this.#allapotLista;
        for (let index = 0; index < 7; index++) {
            const lampa = new Lampa(index,allapotLista[index],ART);
            console.log(index);
        }
    }
    #setAllapotLista(){

    }
    #szomszedokKeresese(id){
        
    }
    #init(){

    }
    #ellenorzes(){

    }

}
export default JatekTer
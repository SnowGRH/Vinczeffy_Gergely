import Lampa from "./Lampa.js"

class JatekTer{
    #db;
    #allapotLista=[true,false,true];
    #meret = 7;
    #lepes;
    
    constructor(){
        const ART = $("article");
        let meret = this.#meret;
        let index = 0;
        for (index = 0; index <= meret; index++) {
            const lampa = new Lampa(index,this.#allapotLista[index],ART);
            console.log(index);
        }
        $(window).on("kattintasTrigger",(event)=>{
            console.log(event.detail)
            if (this.#allapotLista[event.detail.id] === true) {
                console.log("hello");

            }

            
        })
    }
    #setAllapotLista(id,ertek){
        this.#allapotLista[id] =ertek;
    }
    #szomszedokKeresese(id){
        
    }
    #init(){

    }
    #ellenorzes(){

    }

}
export default JatekTer
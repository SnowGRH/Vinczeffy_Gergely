class Lampa{
    #allapot;
    #id;
    #divElem;

    constructor(id, allapot, szuloElem){
        this.#id=id;
        this.#allapot = allapot;   
        this.#divElem = `<div style="background-color: red" class="lampa col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4" id="${id}"></div>`;
        szuloElem.append(this.#divElem);
        this.divElem = $(".lampa:last-child");
        this.pElem = this.divElem.children("p");
        this.divElem.on("click",()=>{
            this.setAllapot(this.#allapot);
            this.#kattintasTrigger();
          })
    }
    setAllapot(allapot){
        if (allapot === true) {
            this.#szinBeallit("red");
        } else {
            
        }
    }
    #szinBeallit(ertek){
    this.divElem.css("background-color:",ertek);
    }
    #kattintasTrigger(){
        const LAMPA = new CustomEvent("kattintasTrigger", { detail: this });
        window.dispatchEvent(LAMPA);
    }
}
export default Lampa
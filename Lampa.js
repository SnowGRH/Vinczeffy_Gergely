class Lampa{
    #allapot;
    #id;
    #divElem;

    constructor(id, allapot, szuloElem){
        this.#id=id;
        this.#divElem = `<div class="lampa"><p class="alap" id="${id}"></p></div>`;
        szuloElem.append(this.#divElem);
        this.divElem = $(".lampa:last-child");
        this.pElem = this.divElem.children("p");
        this.divElem
    }
    setAllapot(){

    }
    szinBeallit(){

    }
    kattintasTrigger(){

    }
}
export default Lampa
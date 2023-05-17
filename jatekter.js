import Kartya from "./kartya";

class jatekTer{
    #kartyaLISTA = [];
    #kivalasztottKartyaLISTA = [];

    constructor(kartyaLISTA){
        this.#kartyaLISTA = kartyaLISTA;
    }

    #init(){
        this.#kivalasztottKartyaLISTA = [];
        this.#kever();
        const szuloELEM = $("article");
        szuloELEM.empty();

        for (let index = 0; index < this.#kartyaLISTA.length; index++) {
            const kartya = new Kartya(this.#kartyaLISTA[index], szuloELEM);
            
        }
    }

    #kever(){
        this.#kartyaLISTA.sort(function(){
            return 0.5 - Math.random();
        })
    }

    ellenorzes(){

    }

    TriggerBlocked(){

    }

    TriggerUnBlocked(){

    }
}

export default jatekTer;
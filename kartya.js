class Kartya{
    #fajlnev;
    #allapot;
    #blokkolt;
    #divElem;
    #imgElem;

    constructor(fajlnev, szuloELEM){
        this.#fajlnev;
        szuloELEM.append(`
        <div>
            <img src="" alt="kép">
        </div>
        `)
        this.#divElem.on("click", () => {

        });
        this.#imgElem = this.#divElem.children("img");
        this.#allapot = false;

        this.#setLap;
    }
    
    setAllapot(){

    }

    getFajlnev(){

    }

    #setLap(){
        if(this.#allapot){
            this.#imgElem.attr("src", this.#fajlnev);
        }else{
            this.#imgElem.attr("src", "kepek/hatter.jpg");
        }
    }

    kattintas(){
        this.#allapot = !this.#allapot;
        this.#setLap();
    }

    #kattintasTrigger(){
        let esemeny = new CustomEvent("kartyaKattintas", {
            detail: this,
        });
    }
}

export default Kartya;
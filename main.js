let viewport = document.querySelector("#viewport");
let cards = document.querySelector(".cards");
m = Math.round(Math.random() * (10 - 1));
        class enemy {
            constructor(name,strength,img) {
            this.name = name;
            this.strength = strength;
            this.img = img;
            }
        }
        function calculate(minstrength,maxstrength){
            return Math.round(Math.random() * (maxstrength - minstrength) + minstrength);
        }

        let pokemony = ["Tyranitar","Azumarill","Chikorita","Entei","Ho-oh","Houndoom","Lugia","Phanpy","Pichu","Raikou"];
        let list=[new enemy(),new enemy(),new enemy(),new enemy(),new enemy(),new enemy(),new enemy(),new enemy(),new enemy(),new enemy(),];
        for(let i=0;i< 10;i++){
            list[i].name = pokemony[i];
            list[i].strength = calculate(300,800)
            list[i].img = `img/enemies/${pokemony[i]}.png`;
        }
        function load_enemy(){
            let card = document.querySelector(".enemy");
            let enemy1 = list[m];
            card.innerHTML = `<img src="${enemy1.img}">`;
            return enemy1;
        }

        function start(){
            viewport.innerHTML = `
            <div class="card" id="card1" onclick = 'hero1selected();'></div>
            <div class="card" id="card2" onclick = 'hero2selected();'></div>
            <div class="card" id="card3" onclick = 'hero3selected();'></div>
            <div class="card" id="card4" onclick = 'hero4selected();'></div>
            <div class="card" id="card5" onclick = 'hero5selected();'></div>
            <div class="card" id="card6" onclick = 'hero6selected();'></div>
            <div class="card" id="card7" onclick = 'hero7selected();'></div>
            <div class="card" id="card8" onclick = 'hero8selected();'></div>
            <div class="card" id="card9" onclick = 'hero9selected();'></div>
            <div class="card" id="card10" onclick = 'hero10selected();'></div>`;
            load();
        };
        //funkcja wczytujaca wybór postaci
        class hero {
            constructor(name, strenght) {
                this.name = name;
                this.strenght = strenght;
                this.img = `img/heros/${this.name}.png`;
            }

            load(x) {
                let id = `card${x}`;
                let card = document.getElementById(id)
                card.innerHTML = `<img src="${this.img}"> ${this.name}<input type='hidden' value="${this.strenght}" class="value" id="value">`;
            }
        }

        //tworzenie konstruktora
        let Bulbasaur = new hero("Bulbasaur", 500);
        let Pikachu = new hero("Pikachu", 600);
        let Hitmonlee = new hero("Hitmonlee", 500);
        let Gengar = new hero("Gengar", 650);
        let Squirtle = new hero("Squirtle", 500);
        let Butterfree = new hero("Butterfree", 400);
        let Charmander = new hero("Charmander", 750);
        let Gyarados = new hero("Gyarados", 700);
        let Machamp = new hero("Machamp", 600);
        let Diglett = new hero("Diglett", 400);
        //tworzenie postaci
        function load(){
            Butterfree.load(1);
            Bulbasaur.load(2);
            Pikachu.load(3);
            Hitmonlee.load(4);
            Gengar.load(5);
            Squirtle.load(6);
            Charmander.load(7);
            Gyarados.load(8);
            Machamp.load(9);
            Diglett.load(10);
        }


        //wybór postaci =>
        function hero1selected(x){
            viewport.innerHTML = `<div class="battle" id="card1"></div>
            <div class="enemy"></div><div class="war" onclick='switch1()';>Battle</div>`;
            viewport.style.backgroundImage = `url(img/bg2.png)`;
            viewport.style.display = "grid";
            Butterfree.load(1);
            load_enemy();
        }



        function hero2selected(){
            viewport.innerHTML = `<div class="battle" id="card2"></div>
            <div class="enemy"></div><div class="war" onclick='switch1()';>Battle</div>`;
            viewport.style.backgroundImage = `url(img/bg2.png)`;
            viewport.style.display = "grid";
            Bulbasaur.load(2);
            load_enemy();
        }
        function hero3selected(){
            viewport.innerHTML = `<div class="battle" id="card3"></div>
            <div class="enemy"></div><div class="war" onclick='switch1()';>Battle</div>`;
            viewport.style.backgroundImage = `url(img/bg2.png)`;
            viewport.style.display = "grid";
            Pikachu.load(3);
            load_enemy();
        }
        function hero4selected(){
            viewport.innerHTML = `<div class="battle" id="card4"></div>
            <div class="enemy"></div><div class="war" onclick='switch1()';>Battle</div>`;
            viewport.style.backgroundImage = `url(img/bg2.png)`;
            viewport.style.display = "grid";
            Hitmonlee.load(4);
            load_enemy();
        }
        function hero5selected(){
            viewport.innerHTML = `<div class="battle" id="card5"></div>
            <div class="enemy"></div><div class="war" onclick='switch1()';>Battle</div>`;
            viewport.style.backgroundImage = `url(img/bg2.png)`;
            viewport.style.display = "grid";
            Gengar.load(5);
            load_enemy();
        }
        function hero6selected(){
            viewport.innerHTML = `<div class="battle" id="card6"></div>
            <div class="enemy"></div><div class="war" onclick='switch1()';>Battle</div>`;
            viewport.style.backgroundImage = `url(img/bg2.png)`;
            viewport.style.display = "grid";
            Squirtle.load(6);
            load_enemy();
        }
        function hero7selected(){
            viewport.innerHTML = `<div class="battle" id="card7"></div>
            <div class="enemy"></div><div class="war" onclick='switch1()';>Battle</div>`;
            viewport.style.backgroundImage = `url(img/bg2.png)`;
            viewport.style.display = "grid";
            Charmander.load(7);
            load_enemy();
        }
        function hero8selected(){
            viewport.innerHTML = `<div class="battle" id="card8"></div>
            <div class="enemy"></div><div class="war" onclick='switch1()';>Battle</div>`;
            viewport.style.backgroundImage = `url(img/bg2.png)`;
            viewport.style.display = "grid";
            Gyarados.load(8);
            load_enemy();
        }
        function hero9selected(){
            viewport.innerHTML = `<div class="battle" id="card9"></div>
            <div class="enemy"></div><div class="war" onclick='switch1()';>Battle</div>`;
            viewport.style.backgroundImage = `url(img/bg2.png)`;
            viewport.style.display = "grid";
            Machamp.load(9);
            load_enemy();
        }
        function hero10selected(){
            viewport.innerHTML = `<div class="battle" id="card10"></div>
            <div class="enemy"></div><div class="war" onclick='switch1()';>Battle</div>`;
            viewport.style.backgroundImage = `url(img/bg2.png)`;
            viewport.style.display = "grid";
            Diglett.load(10);
            load_enemy();
        }
function switch1(){
    let a = document.querySelector('#value').value;
    let b = load_enemy().strength;
    if(a>=b){
        viewport.innerHTML = `<div class="war" onclick="location.reload()">You Won</div>`
    }
    else{
        viewport.innerHTML = `<div class="war" onclick="location.reload()">You Lost</div>`
    }
    console.log(a)
    console.log(b)
}

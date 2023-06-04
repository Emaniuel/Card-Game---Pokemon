let viewport = document.querySelector("#viewport");
        let cards = document.querySelector(".cards");
        class enemy {
            constructor(name,strength) {
            this.name = name;
            this.strength = strength;
            this.img = `img/enemys/${this.name}.png`;
            }
        }
        function calculate(minstrength,maxstrength){
            return Math.round(Math.random() * (maxstrength - minstrength) + minstrength);
        }

        let pokemony = ["Tyranitar","Azumarin","Chikorita","Entei","Ho-oh","Houndoom","Lugia","Phanpy","Pichu","Raikou"];
        let list=[new enemy(),new enemy(),new enemy(),new enemy(),new enemy(),new enemy(),new enemy(),new enemy(),new enemy(),new enemy(),];
        for(let i=0;i< 10;i++){
            list[i].name = pokemony[i];
            list[i].strength = calculate(300,800)
        }
        function load_enemy(){
            m = Math.round(Math.random() * (10 - 1));
            let enemy1 = list[m];
            let class1 = `enemy`;
            let card = document.getElementByClass(class1)
            card.innerHTML = `<img src="${enemy1.img}"> ${enemy1.name}`;
        }
        function start(){
            viewport.innerHTML = `
            <div class="card" id="card1"></div>
            <div class="card" id="card2"></div>
            <div class="card" id="card3"></div>
            <div class="card" id="card4"></div>
            <div class="card" id="card5"></div>
            <div class="card" id="card6"></div>
            <div class="card" id="card7"></div>
            <div class="card" id="card8"></div>
            <div class="card" id="card9"></div>
            <div class="card" id="card10"></div>`;
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
                card.innerHTML = `<img src="${this.img}"> ${this.name}`;
                card.setAttribute('onclick', `hero${x}selected()`);


                console.log(x);
                console.log(this.img);
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
        function hero1selected(){
            viewport.innerHTML = `<div class="battle" id="card1"></div>
            <div class="enemy"></div>`;
            viewport.style.backgroundImage = `url(img/bg2.png)`;
            viewport.style.display = "grid";
            Butterfree.load(1);
            load_enemy();
        }
        function hero2selected(){
            viewport.innerHTML = `<div class="battle" id="card2"></div>
            <div class="enemy"></div>`;
            viewport.style.backgroundImage = `url(img/bg2.png)`;
            viewport.style.display = "grid";
            Bulbasaur.load(2);
            load_enemy();
        }
        function hero3selected(){
            viewport.innerHTML = `<div class="battle" id="card3"></div>
            <div class="enemy"></div>`;
            viewport.style.backgroundImage = `url(img/bg2.png)`;
            viewport.style.display = "grid";
            Pikachu.load(3);
            load_enemy();
        }
        function hero4selected(){
            viewport.innerHTML = `<div class="battle" id="card4"></div>
            <div class="enemy"></div>`;
            viewport.style.backgroundImage = `url(img/bg2.png)`;
            viewport.style.display = "grid";
            Hitmonlee.load(4);
            load_enemy();
        }
        function hero5selected(){
            viewport.innerHTML = `<div class="battle" id="card5"></div>
            <div class="enemy"></div>`;
            viewport.style.backgroundImage = `url(img/bg2.png)`;
            viewport.style.display = "grid";
            Gengar.load(5);
            load_enemy();
        }
        function hero6selected(){
            viewport.innerHTML = `<div class="battle" id="card6"></div>
            <div class="enemy"></div>`;
            viewport.style.backgroundImage = `url(img/bg2.png)`;
            viewport.style.display = "grid";
            Squirtle.load(6);
            load_enemy();
        }
        function hero7selected(){
            viewport.innerHTML = `<div class="battle" id="card7"></div>
            <div class="enemy"></div>`;
            viewport.style.backgroundImage = `url(img/bg2.png)`;
            viewport.style.display = "grid";
            Charmander.load(7);
            load_enemy();
        }
        function hero8selected(){
            viewport.innerHTML = `<div class="battle" id="card8"></div>
            <div class="enemy"></div>`;
            viewport.style.backgroundImage = `url(img/bg2.png)`;
            viewport.style.display = "grid";
            Gyarados.load(8);
            load_enemy();
        }
        function hero9selected(){
            viewport.innerHTML = `<div class="battle" id="card9"></div>
            <div class="enemy"></div>`;
            viewport.style.backgroundImage = `url(img/bg2.png)`;
            viewport.style.display = "grid";
            Machamp.load(9);
            load_enemy();
        }
        function hero10selected(){
            viewport.innerHTML = `<div class="battle" id="card10"></div>
            <div class="enemy"></div>`;
            viewport.style.backgroundImage = `url(img/bg2.png)`;
            viewport.style.display = "grid";
            Diglett.load(10);
            load_enemy();
        }
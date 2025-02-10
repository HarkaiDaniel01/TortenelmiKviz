let sz=""
let szamlalo = 0
let megoldas = ""
let aktualisSorszam = -1
let elozo = -1
let osszes = 0
let helyes = 0


for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
       sz+=` <img id="${szamlalo}" 
       onmouseover="szegelyRajzol(this.id)" 
       onmouseout="szegelyElvesz(this.id)" 
       onclick="nagyit(this.id)" 
       src="a${szamlalo}.jpg" alt="" 
       style="width: 100px;
       margin: 5px;
       border: 2px solid white;">`
       szamlalo++
    }
    sz+=`<br>`
}


document.getElementById("kepekHelye").innerHTML=sz

function nagyit(id){
    //alert(id)
    aktualisSorszam = id
    if (elozo != -1) {
         document.getElementById(elozo).style.filter="invert(0%)"
         document.getElementById(elozo).style.border="2px solid white"
         
    }
   
    document.getElementById(id).style.filter="invert(100%)"
    document.getElementById(id).style.border="2px solid white"
    document.getElementById("nagykep").innerHTML=`<img src="a${id}.jpg" alt="" style="width: 300px";></img>`
    elozo = id
    

    //tömbböl kiszedni
    //bekeverni
    //gombra rátenni

    megoldas = nevekTomb[id].megoldas
    let keveres = []
    keveres.push(nevekTomb[id].megoldas)
    keveres.push(nevekTomb[id].tipp1)
    keveres.push(nevekTomb[id].tipp2)
    keveres.push(nevekTomb[id].tipp3)

    console.log(keveres)
    
    for (let i = 0; i < 100; i++) {
        let veletlenSzam1 =Math.floor(Math.random() * 4);
        //console.log(veletlenSzam1)
        let veletlenSzam2 =Math.floor(Math.random() * 4);

        let csere = keveres[veletlenSzam1];
        keveres[veletlenSzam1] = keveres[veletlenSzam2];
        keveres[veletlenSzam2] = csere;
        
    }

    //console.log(keveres)

    document.getElementById("ki").innerHTML=`Ki ez a híres személyiség?<br>
    <button onclick="gombKattint('${keveres[0]}')">${keveres[0]}</button>
    <button onclick="gombKattint('${keveres[1]}')">${keveres[1]}</button>
    <button onclick="gombKattint('${keveres[2]}')">${keveres[2]}</button>
    <button onclick="gombKattint('${keveres[3]}')">${keveres[3]}</button>`
    
}

function szegelyRajzol(id) {
    document.getElementById(id).style.border="2px solid blue"
}

function szegelyElvesz(id) {
        document.getElementById(id).style.border="2px solid white"
}

function gombKattint(aktualisFelirat) {
    if (aktualisFelirat == megoldas) {
        helyes++
        alert("Helyes válasz")
        if (aktualisSorszam == nevekTomb.length - 1) {
            aktualisSorszam = 0
        } else {
            aktualisSorszam++
        }
        
        nagyit(aktualisSorszam)

    } else {
        alert("Rossz válasz!!!")
    }
    osszes++
    document.getElementById("pontHelye").innerHTML=`Pontok: ${helyes}/${osszes} ${Math.round(helyes/osszes * 100)} %`
}

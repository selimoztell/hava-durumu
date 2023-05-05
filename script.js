const url ="https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey="5ae07ad89f7e529c198c8ff5902423a2";

const keyPress = (e)=>{
    if(e.keyCode == '13')
    {
        var query = `${url}${sehirAdi.value}&appid=${apiKey}&units=metric&lang=tr`;
        
        fetch(query)
        
        .then(hava=>{
            return hava.json();
        })
        .then(sonuclariGoster)

    }
}

const sonuclariGoster = (sonuc)=>{
    console.log(sonuc.main);

    var sehir = document.querySelector('.city');
    sehir.innerText=sonuc.name;
    
    var sehir = document.querySelector('.temp');
    sehir.innerText=sonuc.main.temp;
    

}

const sehirAdi = document.getElementById("searchBar");
sehirAdi.addEventListener('keypress',keyPress);


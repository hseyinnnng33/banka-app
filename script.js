const paraMiktari = document.querySelector(".para")
const yatirilanParaSpan = document.querySelector(".para-1")
const cekilenParaSpan = document.querySelector(".para-2")
const hesapHareketleri = document.querySelector(".islemler")
const inputGirilenText = document.querySelector("#text")
const inputGirilenPara = document.querySelector("#number-para")
const btn = document.querySelector(".btn-miktar")

let index = 0;

function inputVeriAl(e){
    e.preventDefault()

    let inputGirilenParaValue =  parseFloat(inputGirilenPara.value);
    let inputGirilenMetinValue =  inputGirilenText.value;

    if(inputGirilenMetinValue.trim() === '' ||
    inputGirilenParaValue <= 0
    ){
        alert("Degerler Boş Girilemez")
    }

    else{
        index +=  inputGirilenParaValue;
        let item = document.createElement("ul")
        item.innerHTML = `
            <li><button class="sil">-</button>${inputGirilenMetinValue}<span>${tumPara(inputGirilenParaValue)} TL</span></li>
        `
        let silBtn = item.querySelectorAll(".sil")

        silBtn.forEach((sil)=>{
            sil.addEventListener("click", function(){
                index -= inputGirilenParaValue;
                paraMiktari.innerHTML = `${tumPara(index)} TL`;
                yatirilanParaSpan.innerHTML = `${tumPara(index)} TL`;
                item.remove()
            })
        })

        yatirilanParaSpan.innerHTML = `${tumPara(index)} TL`;

        paraMiktari.innerHTML = `${tumPara(index)} TL`;
        hesapHareketleri.appendChild(item)
    }

    inputGirilenText.value = ""
    inputGirilenPara.value = ""
}

btn.addEventListener("click", inputVeriAl)

function tumPara(deger){
    return ""+ deger.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}
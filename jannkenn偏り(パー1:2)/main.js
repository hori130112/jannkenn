const el=document.querySelector(".a")
console.log(el)
function  jannkenn(a){
if (a=='gu'){
console.log("グー")
}
if(a=='tyoki'){
    console.log("チョキ")
}
if(a=='pa'){
    console.log("パー")
}
let　b=Math.random()
if(b<1/2){
console.log("パー")
}
if(1/2<=b&&b<2/3){
console.log("グー")
}
if(2/3<=b){console.log("チョキ")
}
if(a=='gu'){
    if(b<1/2){
    console.log("負け")
    el.innerText="負け"
    console.log(el.innerText)
}
    if(1/2<=b&&b<2/3){
        console.log("引き分け")
        el.innerText="引き分け"
        console.log(el.innerText)
    }
    if(2/3<=b){
        console.log("勝ち")
        el.innerText="勝ち"
        console.log(el.innerText)
    }
}
if (a=='tyoki'){
 if(b<1/2){
     console.log("勝ち")
     el.innerText="勝ち"
     console.log(el.innerText)
 }
 if(1/2<=b&&b<2/3){
     console.log("負け")
     el.innerText="負け"
     console.log(el.innerText)
 }
 if(2/3<=b){
     console.log("引き分け")
     el.innerText="引き分け"
     console.log(el.innerText)
 }
}
if(a=='pa'){
    if(b<1/2){
        console.log("引き分け")
        el.innerText="引き分け"
        console.log(el.innerText)
    }
    if(1/2<=b&&b<2/3){
        console.log("勝ち")
        el.innerText="勝ち"
        console.log(el.innerText)
    }
    if(2/3<=b){
        console.log("負け")
        el.innerText="負け"
         console.log(el.innerText)
    }
}
}
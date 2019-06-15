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
if(b<1/3){
console.log("パー")
}
if(1/3<=b&&b<2/3){
console.log("グー")
}
if(2/3<=b){console.log("チョキ")
}
if(a=='gu'){
    if(b<1/3){
    console.log("負け")
}
    if(1/3<=b&&b<2/3){
        console.log("引き分け")
    }
    if(2/3<=b){
        console.log("勝ち")
    }
}
if (a=='tyoki'){
 if(b<1/3){
     console.log("勝ち")
 }
 if(1/3<=b&&b<2/3){
     console.log("負け")
 }
 if(2/3<=b){
     console.log("引き分け")
 }
}
if(a=='pa'){
    if(b<1/3){
        console.log("引き分け")
    }
    if(1/3<=b&&b<2/3){
        console.log("勝ち")
    }
    if(2/3<=b){
        console.log("負け")
    }
}
}



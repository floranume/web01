let traiCay = ["cam","xoai","mit","oi"]
let i = 0;
let meo ={
    dau:'xuong',
    chan:'long',
    long:{
        con:'a',
        vat:'b',
    }
}

meo.duoi = 'vit';
let lo = meo.long;
console.log('long gon',lo.con)

while(i < traiCay.length){
    if(traiCay[i].length === 2){
        console.log('trai cay chi co 2 chu',traiCay[i]);
        
    }else if(traiCay[i].length === 4){
        console.log('trai cay co 4 chu',traiCay[i]);
    }
    i++;
}

for(a = 0; a< traiCay.length; a++){
    if(traiCay[a].length === 2){
        console.log('trai cay chi coasdads chu',traiCay[a]);
    }
    console.log(traiCay[a])
}

let day = "";
switch(new Date().getDay()){
    case(3):
        day = 'thu 4';
        break;


}
console.log(' hom nay :', day  ,new Date().getHours(),'gio',new Date().getMinutes(),'phut',new Date().getSeconds(),'giay')
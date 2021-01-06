let p=0;
let obstetricia = new Array(4);

obstetricia[0]="../img/ob.jpg";
obstetricia[1]="../img/obstetricia2.jpg";
obstetricia[2]="../img/cancer.jpg";
obstetricia[3]="../img/obstetricia9.jpg";


const rotacion=()=>{
    window.document["nObstetricia"].src=obstetricia[p];
    document.getElementById("pro").innerText="";
    p++;
    if(p == obstetricia.length)
        p=0;
    setTimeout("rotacion()",1000);
}

let a=document.getElementById('somme')
let b=document.getElementById('Audi')
let c=document.getElementById('coeur')
let d=document.getElementById('produit1')
let e=document.getElementById('prix1')
let f=document.getElementById('produit2')
let g=document.getElementById('prix2')
let h=document.getElementById('BMW')
let i=document.getElementById('coeur1')
let j=document.getElementById('coeur3')
let k=document.getElementById('produit3')
let l=document.getElementById('prix3')
let m=document.getElementById('Porche')

function heart1(){
    if(c.style.color=='red'){
        c.style.color='black'
    }
    else{
        c.style.color='red'
    }
}
function  incre(){
d.innerHTML=+d.innerHTML+1;
e.innerHTML=+e.innerHTML+10000;
a.innerHTML=+a.innerHTML+10000;
}
function decr(){
    if(d.innerHTML==0){
d.innerHTML=+d.innerHTML;
e.innerHTML=+e.innerHTML;
a.innerHTML=+a.innerHTML;
    }else{
        d.innerHTML=+d.innerHTML-1;
        e.innerHTML=+e.innerHTML-10000;
        a.innerHTML=+a.innerHTML-10000;
    }
}
function remove1(){
    b.style.display='none';
    a.innerHTML=+a.innerHTML-e.innerHTML;
}
function heart2(){
    if(i.style.color=='red'){
        i.style.color='black'
    }else{
        i.style.color='red'
    }
}
function incre2(){
    f.innerHTML=+f.innerHTML+1;
    g.innerHTML=+g.innerHTML+20000;
    a.innerHTML=+a.innerHTML+20000;
}
function decr2(){
    if(f.innerHTML==0){
        f.innerHTML=+f.innerHTML;
        g.innerHTML=+g.innerHTML;
        a.innerHTML=+a.innerHTML;
    }else{
        f.innerHTML=+f.innerHTML-1;
    g.innerHTML=+g.innerHTML-20000;
    a.innerHTML=+a.innerHTML-20000;
    }
}
function remove2(){
h.style.display='none';
a.innerHTML=+a.innerHTML-g.innerHTML;
}
function heart3(){
    if(j.style.color=='red'){
        j.style.color='black'
    }else{
        j.style.color='red'
    }
}
function incre3(){
    k.innerHTML=+k.innerHTML+1;
    l.innerHTML=+l.innerHTML+30000;
    a.innerHTML=+a.innerHTML+30000;
}
function decr3(){
    if(l.innerHTML==0){
        k.innerHTML=+k.innerHTML;
    l.innerHTML=+l.innerHTML;
    a.innerHTML=+a.innerHTML;
    }else{
        k.innerHTML=+k.innerHTML-1;
        l.innerHTML=+l.innerHTML-30000;
        a.innerHTML=+a.innerHTML-30000; 
    }
}
function remove3(){
m.style.display='none';
a.innerHTML=+a.innerHTML-l.innerHTML;
}

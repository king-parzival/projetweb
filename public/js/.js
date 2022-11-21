let btn_menu = document.getElementById('btn_menu');
let nav = document.getElementById('nav');


btn_menu.addEventListener('click',function(){
 if (nav.style.left=='-20%'|| nav.style.left=='')   nav.style.left='0'
 else nav.style.left= '-20%'
})
let p_details = document.getElementsByClassName('detail_arts')
let button_33 = document.getElementsByClassName('button_33')
console.log(p_details);
console.log(button_33)

for(let i=0;i< button_33,length;i++){
 button_33[i].addEventListener('click',function(){ 

if (p_details[i].classname =='detail_art detail_inactive'){
p_details[i].classlist.remove('detail_inactive')
p_details[i].classlist.add('detail_active')
}
else{
    p_details[i].classlist.remove('detail_active')
    p_details[i].classlist.add('detail_inactive')
}}  )}
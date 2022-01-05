'use strict'
const modal= document.querySelector('.modal');
const showModal=document.querySelectorAll('.show-modal');
const overlay=document.querySelector('.overlay');
const cross=document.querySelector('.close_modal');
const openModal=function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const closeModal=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
const toggleModal=function(){
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
};
for(var i=0;i<3;i++){
   showModal[i].addEventListener('click',openModal);
}
overlay.addEventListener('click',closeModal);
cross.addEventListener('click',closeModal);
document.addEventListener('keydown',function(e){
    if(e.key==='Escape'&&!modal.classList.contains('hidden')){
        closeModal();
    }
});

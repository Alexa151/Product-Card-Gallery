function filter(shoe){
    const art =document.querySelectorAll('article');
    art.forEach(arti=> {
        const show = shoe === 'all' || arti.classList.contains(shoe);
        arti.classList.toggle('hidden', !show);
    })
};

const theme =document.querySelector('.theme');
theme.addEventListener('click', function(){
    const body=document.querySelector('body');
    body.classList.toggle('light')
    if(theme.textContent==='Light'){
        theme.textContent='Dark'
    }else{
        theme.textContent='Light'
    } 
})
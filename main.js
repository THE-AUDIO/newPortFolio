// ajout de la classe activr quand un lien a été acitvé

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
   

    sections.forEach(section => {
        let scrollPosition = window.scrollY;
        
        let offset = section.offsetTop -150;
        
        let height = section.offsetHeight;// hauteur total de la secion avec la bordure
        
        // console.log(`scrol = ${scrollPosition} <br> hauteur ${height} <br> offset ${offset}`);


        let id = section.getAttribute('id');

        if (scrollPosition >= offset && scrollPosition < offset + height) {
            // La section est visible à l'écran
            // Ajoutez une classe active au lien de navigation correspondant
            navLinks.forEach(link => {
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
    /*=================== sticky navBarre =================*/
    let header = document.querySelector('header')

    header.classList.toggle('sticky',window.scrollY>100 )
}



    let iconActive = document.querySelector('#menu-icon')
    iconActive.addEventListener('click',()=>{
        iconActive.classList.toggle('bx-x')
        iconActive.classList.toggle('bx-menu')
        let navLinks = document.querySelector('.navbar')
        navLinks.classList.toggle('hidden')
    })


let elt = document.querySelectorAll('nav a')
elt.forEach((one)=>{
    one.addEventListener('click',()=>{
        let navLinks = document.querySelector('.navbar')
        navLinks.classList.toggle('hidden')
        iconActive.classList.toggle('bx-x')
        iconActive.classList.toggle('bx-menu')
    })
})
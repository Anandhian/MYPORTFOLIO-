const  navBar=document.querySelector('nav')
const   navLinks=document.querySelector("nav ul")
const sidemenu=document.getElementById("sidemenu")

function openMenu(){
   sidemenu.style.transform='translateX(-16rem)'
}
function closeMenu(){
   sidemenu.style.transform='translateX(16rem)'
   


}
//   sidemenu.style.transform='translateX(16rem)'

window.addEventListener('scroll',()=>{
   if(scrollY>50){
      navBar.classList.add('bg-white', 'bg-opacity-50','backdrop-blur-lg','shadow-sm','dark:bg-darkTheme', 'dark:shadow-white/20');
      navLinks.classList.remove('bg-white','shadow-sm,bg-opacity-50','dark:border','dark:border-white/50','dark:bg-transparent');

   }else{
      navBar.classList.remove('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm','dark:bg-darkTheme','dark:shadow-white/20');
      navLinks.classList.add('bg-white','shadow-sm,bg-opacity-50','dark:border','dark:border-white/50','dark:bg-transparent')
   }
 })
 
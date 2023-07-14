
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

const mainEl=document.querySelector('main')


mainEl.style.backgroundColor = 'var(--main-bg)';

const mainText=document.querySelector('main');
mainText.innerHTML="<h1>SEI Rocks!</h1>"

mainEl.classList.add('flex-ctr');

//2.0
const topMenuEl=document.querySelector('#top-menu');
// const topMenuEl=document.querySelector('nav')
// console.log(topMenuEl);

//2.1
topMenuEl.style.height='100%';

//2.2
topMenuEl.style.backgroundColor = 'var( --top-menu-bg)'

//2.3
topMenuEl.classList.add('flex-around');

//3.0

//3.1 
for (let link of menuLinks){
    const top= document.createElement('a')
    top.setAttribute('href', link.href)
    top.innerHTML=link.text
    topMenuEl.append(top)

}

const subMenuEl=document.querySelector('#sub-menu');
// console.log(subMenuEl);
subMenuEl.style.height='100%';
subMenuEl.style.background='var(--sub-menu-bg)'
subMenuEl.classList.add('flex-around');
subMenuEl.style.position="absolute";
subMenuEl.style.top='0';

// 5.1
const topMenuLinks= topMenuEl.querySelectorAll('nav#top-menu>a');

// 5.2
let showingSubMenu=false;
topMenuEl.addEventListener('click', function(a) {
  a.preventDefault();
  if('click'!='a'){
    console.log('The element clicked was not a');
  }

});
console.log(topMenuLinks);






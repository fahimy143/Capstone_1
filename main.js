const categories = [
  {
    key: 1,
    img_src: './images/nike.png',
    img_atr: 'Nike',
    title: 'Nike',
    description: 'Nike is an American multinational corporation.The company is headquartered near Beaverton, Oregon, in the Portland metropolitan area',
    content: ' Nike is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services.',
  },
  {
    key: 2,
    img_src: './images/Gucci.png',
    img_atr: 'Gucci',
    title: 'Gucci',
    description: 'Gucci is an Italian high-end luxury fashion house based in Florence, Italy.',
    content: 'Its product lines include handbags, ready-to-wear, footwear, and accessories, makeup, fragrances, and home decoration. Gucci was founded in 1921 by Guccio Gucci in Florence.',
  },
  {
    key: 3,
    img_src: './images/addidas.png',
    img_atr: 'Adidas',
    title: 'Adidas',
    description: 'Adidas AG is a German multinational corporation, founded and headquartered in Herzogenaurach.',
    content: 'Adidas designs and manufactures shoes, clothing and accessories. It is the largest sportswear manufacturer in Europe, and the second largest in the world',
  },
  {
    key: 4,
    img_src: './images/Puma.png',
    img_atr: 'Puma',
    title: 'Puma',
    description: 'Puma, is a German multinational corporation that designs and manufactures athletic',
    content: 'Puma is the third largest sportswear manufacturer in the world. The company was founded in 1948 by Rudolf Dassler.',
  },
  {
    key: 5,
    img_src: './images/BURBERRY.png',
    img_atr: 'Burberry',
    title: 'Burberry',
    description: 'Burberry is a British company.',
    content: 'Audrey Hepburn is one of the most iconic figures associated with the Burberry brand.This company is famous for its innovations.',
  },
  {
    key: 6,
    img_src: './images/Prada.png',
    img_atr: 'prada',
    title: 'Prada',
    description: 'Prada was established by an Italian leather manufacturer named Mario Prada in 1913.',
    content: 'The Prada brand is one of the most expensive brands and every girl would love to have this one. The brand offers clothes with amazing design, style, and colour and makes every girl feel special. Thus this is in the top 4th position.',
  },
];

const CategoriesWrap = document.querySelector('#categories');
const lunchCategories = () => {
  categories.forEach((element) => {
    const list = document.createElement('li');
    list.classList.add('category');
    const catImg = document.createElement('img');
    catImg.classList.add('cat-img');
    catImg.src = element.img_src;
    catImg.alt = element.img_atr;
    catImg.id = element.key;
    list.appendChild(catImg);
    const catbody = document.createElement('div');
    catbody.classList.add('cat-body');
    const catHead = document.createElement('h2');
    catHead.classList.add('cat-title');
    catHead.innerText = element.title;
    catbody.appendChild(catHead);
    const catDescription = document.createElement('p');
    catDescription.classList.add('cat-text');
    catDescription.innerText = element.description;
    catbody.appendChild(catDescription);
    const catLine = document.createElement('div');
    catLine.classList.add('cat-line');
    catbody.appendChild(catLine);
    const catContent = document.createElement('p');
    catContent.classList.add('cat-content');
    catContent.innerText = element.content;
    catbody.appendChild(catContent);
    list.appendChild(catbody);
    CategoriesWrap.appendChild(list);
  });
};
lunchCategories();

// more btn
const morebtn = document.querySelector('.morebtn');
morebtn.addEventListener('click', () => {
  document.getElementById('partnerList').classList.remove('p');
  document.getElementById('footer').classList.remove('f');
  morebtn.classList.add('hidden');
});

// humbergar butoon 

const menubtn = document.querySelector('#menubtn');
const closemenubtn = document.querySelector('#closemenubtn');
const mylinks = document.querySelector('.my-links');

menubtn.addEventListener('click', () => {
  mylinks.style.display = 'flex';
  menubtn.style.display = 'none';
  closemenubtn.style.display = 'inline';
});

closemenubtn.addEventListener('click', () => {
  mylinks.style.display = 'none';
  menubtn.style.display = 'inline';
  closemenubtn.style.display = 'none';
});

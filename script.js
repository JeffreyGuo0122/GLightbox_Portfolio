// Initialize AOS (Animate On Scroll)
AOS.init();

// Initialize GLightbox for image gallery
const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
});

const contentGridElement = document.getElementById('contentGrid');

const jsonDatabase = [
  {
    "title": "Home Sweet Home",
    "picture_url": "https://i.imghippo.com/files/BLUl5570lz.jpg",
    "favorite_color": "#154c79",
    "elements": ["peg board", "bed", "shelf"]
  },
  {
    "title": "Boat in the Sky",
    "picture_url": "https://i.imghippo.com/files/eb9760iLo.jpg",
    "favorite_color": "#154c79",
    "elements": ["powerplant", "Red hook", "NYC Subway"]
  },
  {
    "title": "1998 Ford Chinook",
    "picture_url": "https://i.imghippo.com/files/auG5029Ab.jpg",
    "favorite_color": "#154c79",
    "elements": ["Wall", "Bed", "Sink"]
  }
];

// Create each item in the database
jsonDatabase.forEach((item) => {
  createElementProper(item);
});

// Function to build the HTML structure for an item
function createElementProper(data) {
  const contentItem = document.createElement('div');
  contentItem.classList.add('contentItem');
  contentItem.style.backgroundColor = data.favorite_color;

  // Add AOS attributes for animations
  contentItem.setAttribute('data-aos', 'fade-up');
  contentItem.setAttribute('data-aos-duration', '1000');

  const title = document.createElement('h3');
  title.innerText = data.title;
  contentItem.appendChild(title);

  const elementHeader = document.createElement('h4');
  elementHeader.innerText = "Elements:";
  contentItem.appendChild(elementHeader);

  const elementList = document.createElement('ul');
  data.elements.forEach((element) => {
    const elementItem = document.createElement('li');
    elementItem.innerText = element;
    elementList.appendChild(elementItem);
  });
  contentItem.appendChild(elementList);

  // Wrap image in a link for GLightbox
  const imageLink = document.createElement('a');
  imageLink.href = data.picture_url;
  imageLink.setAttribute('class', 'glightbox');
  imageLink.setAttribute('data-gallery', 'portfolio');
  imageLink.setAttribute('data-title', data.title);

  const image = document.createElement('img');
  image.classList.add('footerImage');
  image.src = data.picture_url;
  image.alt = data.title;

  imageLink.appendChild(image);
  contentItem.appendChild(imageLink);

  contentGridElement.appendChild(contentItem);
}

const bookList = [
	{
        "title": "Malgudi Days",
        "author": "R.K. Narayan ",
        "description": "A collection of short stories set in the fictional town of Malgudi, exploring the lives of its inhabitants.",        
		"image": "../assets/malgudi.jpg",
		"link": "https://dn790005.ca.archive.org/0/items/the-malgudi-days/The%20Malgudi%20Days.pdf",
    },
	{
        "title": "Karma",
        "author": "Khushwant Singh",
        "description": "A short story about an Indian man who tries to adopt English culture and ends up in a humiliating situation.",		
        "image": "../assets/karma.jpg",
		"link":"https://books.google.co.in/books?id=V_gOp_Kr358C&lpg=PA8&vq=karma%20khushwant%20singh&pg=PA9#v=onepage&q&f=false"
    },
	{
        "title": "Train to Pakistan",
        "author": "Khushwant Singh",
        "description": "A historical novel that recounts the Partition of India in 1947 and its traumatic impact on people through the story of a small village on the border of India and Pakistan.",
        "image": "../assets/train.jpg",
		"link":"https://ia801009.us.archive.org/33/items/traintopakistansinghkhushwant/Train%20To%20Pakistan%20-%20Singh%2C%20Khushwant.pdf"
    },
	{
        "title": "Shrimad Bhagwat Gita",
        "author": "Ved Vyas",
        "description": "The Shrimad Bhagavad Gita is a 700-verse Hindu scripture that is part of the Indian epic Mahabharata. It is a sacred text of the Hindu religion, containing a conversation between Prince Arjuna and the god Krishna, who serves as his charioteer. The Gita addresses the moral and philosophical dilemmas faced by Arjuna on the battlefield.",
        "image": "../assets/geeta.jpg",
		"link": "https://ignca.gov.in/Asi_data/279.pdf"
    },
	{
        "title": "Gitanjali",
        "author": "Rabindranath Tagore",
        "description": "A collection of 103 poems that explore themes of spirituality, divine love, and the human condition.",
        "image": "../assets/gitanjali.jpg",
		"link": "https://www.gutenberg.org/cache/epub/7164/pg7164-images.html"
    },
	{
        "title": "Godan",
        "author": "Munshi Premchand",
        "description": "A novel that portrays the socio-economic struggles of the peasantry in India through the story of a poor farmer named Hori.",
        "image": "../assets/godan.jpg",
		"link": "https://ia904706.us.archive.org/30/items/Godan-Hindi/GodaanByMunshiPremchandEbook.pdf"
    },
	{
        "title": "The Guide",
        "author": "R.K. Narayan",
        "description": "'The Guide' is a novel about a tour guide named Raju, who is transformed from a corrupt tour guide to a spiritual guide and revered holy man.",
        "image": "../assets/TheGuide.jpg",
		"link": ""
    },
	{
        "title": "Twilight",
        "author": "Stephenie Meyer",
        "description": "Twilight is a young adult vampire-romance novel. It is the first book in the Twilight series and introduces seventeen-year-old Isabella 'Bella' Swan, who moves from Phoenix, Arizona, to Forks, Washington, and finds her life in danger when she falls in love with Edward Cullen, a 103-year-old vampire.",
        "image": "../assets/t1.jpg",
        "link": "https://novel12.com/twilight/1-first-sight-66269.htm"
    },
    {
        "title": "New Moon",
        "author": "Stephenie Meyer",
        "description": "New Moon is a young adult fantasy romance novel. It is the second novel in the Twilight Saga and continues the story of Bella Swan's relationship with the vampire Edward Cullen, and introduces werewolf Jacob Black.",
        "image": "../assets/t2.jpg",
        "link": "https://dn790000.ca.archive.org/0/items/Book3Eclipse/Book%202%20-%20New%20Moon.pdf"
    },
    {
        "title": "Eclipse",
        "author": "Stephenie Meyer",
        "description": "Eclipse is the third novel in the Twilight Saga. It continues the story of Bella Swan and her vampire love, Edward Cullen, as they face new challenges and enemies in their struggle to stay together.",
        "image": "../assets/t3.jpg",
        "link": "https://dn790000.ca.archive.org/0/items/Book3Eclipse/Book%203%20-%20Eclipse.pdf"
    },
    {
        "title": "Breaking Dawn",
        "author": "Stephenie Meyer",
        "description": "Breaking Dawn is the fourth and final novel in the Twilight Saga. It is divided into three parts: the first and third sections are written from Bella Swan's perspective and the second is from Jacob Black's perspective.",
        "image": "../assets/t4.jpg",
        "link": "https://dn790000.ca.archive.org/0/items/Book3Eclipse/Book%204%20-%20Breaking%20Dawn.pdf"
    }
];


function fetchingData() {
    var bookListContainer = document.getElementById("book-list");
    console.log(bookList);
	
    if (bookListContainer != null) {
        for (var i = 0; i < bookList.length; i++) {
            var book = bookList[i];
            var bookItem = document.createElement('li');
            bookItem.classList.add('book');
            bookItem.innerHTML = `
				<img src="${book.image}" id="img${i}" alt="${book.title}" onclick="window.open('${book.link}', '_blank')">
            `;			
            bookListContainer.appendChild(bookItem);
        }
    }
	

    const carouselTrack = document.querySelector('.carousel-track');
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    var currentIndex = 0;

    function updateCarousel() {
        const bookWidth = bookListContainer.children[0].getBoundingClientRect().width;
		console.log(bookWidth);
        carouselTrack.style.transform = `translateX(-${currentIndex * bookWidth}px)`;
		console.log(currentIndex);
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < ((bookList.length-1)/2)) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    updateCarousel();
}

document.addEventListener('DOMContentLoaded', fetchingData);
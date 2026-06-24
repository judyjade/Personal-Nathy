
//  Timeline GSAP sincronizadas com scroll

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.especialidades',
        start: '0% 95%',
        end: '70% 70%',
        scrub: true,
    },
});

tl.to (
    '#video1',
    {
        top: '255%',
        left: '0%',
    },
); 

//  Navegação slides

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.img-slide');

    slides.forEach((slide) => {
        let currentIndex = 0;
        const images = slide.querySelectorAll('img');
        const nextButton = slide.querySelector('.next');
        const prevButton = slide.querySelector('.prev');

        function showSlide(index) {
            images.forEach((img, i) => {
                img.style.opacity = (i === index) ? '1' : '0';
            });
        }

        //  Próximo slide
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            showSlide(currentIndex);
        });

        //  Slide anterior
        prevButton.addEventListener('click', () => {
            currnetIndex = (currentIndex - 1) % images.length;
            showSlide(currentIndex);
        });
    });
});
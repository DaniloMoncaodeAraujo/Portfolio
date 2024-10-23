/////para quando eu rolar o mouse para baixo na tela inicial ele aplicar isso no header!
window.addEventListener('scroll', function(){
    const meuheader = document.querySelector('#header')

    if(window.scrollY > 100){
        meuheader.style.background = '#000000'
        meuheader.style.border = '1px solid #9CA3AF'
    }else{
        meuheader.style.background = ''
        meuheader.style.border = ''
    }
});

///////////para quando eu estiver na aba habilidades ou outras, la em cima no header aplicar o hover dela!
document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section[id]");
    const headerLinks = document.querySelectorAll("header a");

    let currentSectionId = "";

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSectionId = section.getAttribute("id");
        }
    });

    headerLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
            link.classList.add("active");
        }
    });
});

///// estou animando a pagina quando rolo ela
const sections = document.querySelectorAll('.animar');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
});

sections.forEach(section => {
  observer.observe(section);
});



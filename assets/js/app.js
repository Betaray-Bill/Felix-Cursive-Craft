// Menu Responsive

const menuToggle = document.getElementById('menu');
const closeToggle = document.getElementById('close');

const navLinks = document.getElementById('nav-responsive');

menuToggle.addEventListener('click', () => {
    navLinks.classList.add('show')
    console.log("Clicked")
});

closeToggle.addEventListener('click', () => {
    navLinks.classList.remove('show')
});

// Active the Menu Links

const menuLinks = document.querySelectorAll('.navbar_items li a');
console.log(menuLinks)

for (let i = 0; i < menuLinks.length; i++) {
    console.log(menuLinks[i].innerHTML)
    let menu = menuLinks[i]

    menu.addEventListener('click', () => {
        console.log(menu)
        menuLinks.forEach(item => {
            item.classList.remove('activeLink')
            menuLinks.forEach(items => {
                items.style.color = "#303030"
            })

        });
        menu.classList.add('activeLink')
        menu.style.color = "white"
    });
}


const respLink = document.querySelectorAll('.navbar_resp_items');
console.log(respLink)

for (let i = 0; i < respLink.length; i++) {
    console.log(respLink[i].innerHTML)
    let menu = respLink[i]

    menu.addEventListener('click', () => {
        console.log(menu)
        respLink.forEach(item => {
            item.classList.remove('activeLink')
            respLink.forEach(items => {
                items.style.color = "#303030"
            })

        });
        menu.classList.add('activeLink')
        menu.style.color = "white";
        navLinks.classList.remove('show')

    });
}

// Nav

const nav = document.getElementById('nav');

console.log(nav)

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        console.log("object")
        nav.style.position = "sticky"
            // nav.style.borderBottom = "1px solid #000000"
    } else {
        console.log("Noo")
        nav.style.position = "block"
        nav.style.height = "max-height"
    }
})




class Accordion {
    constructor(el) {
        this.el = el;
        this.summary = el.querySelector("summary");
        this.content = el.querySelector(".accordion-content");
        this.expandIcon = this.summary.querySelector(".accordion-icon");
        this.animation = null;
        this.isClosing = false;
        this.isExpanding = false;
        this.summary.addEventListener("click", (e) => this.onClick(e));
    }

    onClick(e) {
        e.preventDefault();
        this.el.style.overflow = "hidden";

        if (this.isClosing || !this.el.open) {
            this.open();
        } else if (this.isExpanding || this.el.open) {
            this.shrink();
        }
    }

    shrink() {
        this.isClosing = true;

        const startHeight = `${this.el.offsetHeight}px`;
        const endHeight = `${this.summary.offsetHeight}px`;

        if (this.animation) {
            this.animation.cancel();
        }

        this.animation = this.el.animate({
            height: [startHeight, endHeight]
        }, {
            duration: 400,
            easing: "ease-out"
        });
        this.animation.onfinish = () => {
            this.expandIcon.setAttribute(
                "src",
                "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/></svg>"
            );
            return this.onAnimationFinish(false);
        };

        this.animation.oncancel = () => {
            this.expandIcon.setAttribute(
                "src",
                "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/></svg>"
            );
            return (this.isClosing = false);
        };
    }

    open() {
        this.el.style.height = `${this.el.offsetHeight}px`;
        this.el.open = true;
        window.requestAnimationFrame(() => this.expand());
    }

    expand() {
        this.isExpanding = true;

        const startHeight = `${this.el.offsetHeight}px`;
        const endHeight = `${
        this.summary.offsetHeight + this.content.offsetHeight
      }px`;

        if (this.animation) {
            this.animation.cancel();
        }

        this.animation = this.el.animate({
            height: [startHeight, endHeight]
        }, {
            duration: 350,
            easing: "ease-out"
        });

        this.animation.onfinish = () => {
            this.expandIcon.setAttribute(
                "src",
                "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/></svg>"
            );
            return this.onAnimationFinish(true);
        };
        this.animation.oncancel = () => {
            this.expandIcon.setAttribute(
                "src",
                "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/></svg>"
            );
            return (this.isExpanding = false);
        };
    }

    onAnimationFinish(open) {
        this.el.open = open;
        this.animation = null;
        this.isClosing = false;
        this.isExpanding = false;
        this.el.style.height = this.el.style.overflow = "";
    }
}

document.querySelectorAll("details").forEach((el) => {
    new Accordion(el);
});


// FAQ
const faq = document.getElementById("faq");
const accordionContainer = document.getElementById("accordion-container")
faq.addEventListener('click', () => {
    // faq.classList.toggle('show');
    console.log("object")
    accordionContainer.classList.toggle('show_faq');
});
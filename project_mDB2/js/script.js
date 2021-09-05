window.addEventListener('DOMContentLoaded', () => {

///////////TABS


    const tabs = document.querySelectorAll('.tabheader__item'),
          tabContent = document.querySelectorAll('.tabcontent'),
          tabParrent = document.querySelector('.tabheader__items');


          function hideTabContent () {
              tabContent.forEach(item => {
                    item.classList.add('hide');
                    item.classList.remove('show', 'fade');
              });

              tabs.forEach(item => {
                    item.classList.remove('tabheader__item_active');
              });
          }

          function showTabContent (i = 0) {
            tabContent[i].classList.add('show', 'fade');
            tabContent[i].classList.remove('hide');
            tabs[i].classList.add('tabheader__item_active');
          }

          hideTabContent();
          showTabContent();

          tabParrent.addEventListener('click', (event) => {
                const target = event.target;

                if(target && target.classList.contains('tabheader__item')){
                    tabs.forEach((item, i) => {
                        if(target == item){
                            hideTabContent();
                            showTabContent(i);
                        }
                    });
                }
          });

 /////////////TIMER

          const deadLine = '2021-09-20';

          function getZero(num){
            if(num >= 0 && num <10){
                return `0${num}`;
            } else {
                return num;
            }
          }

          function getTimeRemaining(endTime){
              const t = Date.parse(endTime) - Date.parse(new Date()),
                    days = Math.floor(t / (1000*60*60*24)),
                    hours =Math.floor((t / (1000*60*60))%24),
                    minutes = Math.floor((t / (1000*60))%60),
                    seconds = Math.floor((t / 1000)%60);

            return {
                'total':t,
                'days':days,
                'hours':hours,
                'minutes':minutes,
                'seconds':seconds
            }   ;     
          }

          function setTime(sector, endTime){
              const timer = document.querySelector(sector),
                    days = timer.querySelector('#days'),
                    hours = timer.querySelector('#hours'),
                    minutes = timer.querySelector('#minutes'),
                    seconds = timer.querySelector('#seconds'),
                    timeInterval = setInterval(updateClock, 1000);

                    updateClock();

                function updateClock(){
                    const t = getTimeRemaining(endTime);

                    days.innerHTML = getZero(t.days);
                    hours.innerHTML = getZero(t.hours);
                    minutes.innerHTML = getZero(t.minutes);
                    seconds.innerHTML = getZero(t.seconds);

                    if(t.total <=0){
                        clearInterval(timeInterval);
                    }
                }
          }

          setTime('.timer', deadLine);



/////////////Modal

          const modalButtons = document.querySelectorAll('[data-modal]'),
                modalCont = document.querySelector('.modal');


          modalButtons.forEach( event => {
            event.addEventListener('click', showModal);
          });


        

        modalCont.addEventListener('click', (e) => {
            if (e.target === modalCont || e.target.getAttribute('data-close') == ''){
                closeModal();
            }
          });

          document.addEventListener('keydown', (e) =>{
            if (e.code === 'Escape' && modalCont.classList.contains('show')){
                closeModal();
            }
          });

          function showModal (){
            modalCont.classList.add('show');
            modalCont.classList.remove('hide');
            document.body.style.overflow = 'hidden';
            clearInterval(showModalTimer);
          }

          function closeModal (){
            modalCont.classList.add('hide');
            modalCont.classList.remove('show');
            document.body.style.overflow = '';
          }


          const showModalTimer = setTimeout(showModal, 50000);

          let count = 0;

          window.addEventListener('scroll', () =>{
            if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight && count == 0){
                showModal();
                count ++;
            } 
          });


////////Classes


// const   menuItem = document.querySelector('.menu__item'),
//         imgPath = menuItem.querySelector('img'),
//         name = menuItem.querySelector('.menu__item-subtitle'),
//         text = menuItem.querySelector('.menu__item-subtitle'),
//         price = menuItem.querySelector('.menu__item-total');


class Menu {
    constructor(imgPath, alt, name, text, price, parentSelector, ...classes){
        this.imgPath = imgPath;
        this.alt = alt;
        this.name = name;
        this.text = text;
        this.price = price;
        this.parent = document.querySelector(parentSelector);
        this.classes = classes;
        this.transfer = 27;
        this.changeToUAH();
    }

    changeToUAH() {
        this.price = this.price*this.transfer;
    }

    render(){
        const element = document.createElement('div');

        if(this.classes.length === 0){
            element.classList.add('menu__item');
        } else {
            this.classes.forEach(className => element.classList.add(className));
        }

        element.innerHTML = `
            <img src=${this.imgPath} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.name}</h3>
            <div class="menu__item-descr">${this.text}
            </div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
        `;
        this.parent.append(element);
    }

}

new Menu(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    '.menu .container',
    'menu__item',
    'big'
).render();

new Menu(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    14,
    ".menu .container",
    'menu__item',
    'big'
).render();

new Menu(
    "img/tabs/elite.jpg",
    "elite",
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    21,
    ".menu .container",
    'menu__item',
    'big'
).render();


///////Forms to server


const forms = document.querySelectorAll('form');

const messages = {
    loading: 'img/Forms/spinner.svg',
    success: 'Успешно! Мы с вами свяжемся!',
    failed: 'Что-то пошло не так'
};

forms.forEach(item =>{
    postData(item);
});

function postData(form){
    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        const statusMessage = document.createElement('img');
        statusMessage.src = messages.loading;
        statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
            height: 200px;
            width: 200px;
        `;
        form.insertAdjacentElement('afterend', statusMessage);

        const request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json');
        
        const formData = new FormData(form),
                object = {};

        formData.forEach(function(value, key) {
            object[key] = value;
        });

        const json = JSON.stringify(object);


        request.send(json);

        request.addEventListener('load', ()=>{
            if(request.status === 200){
                console.log(request.response);
                showThanksModal(messages.success) ;
                form.reset();
                statusMessage.remove();
            } else {
                showThanksModal(messages.failed) ;
            }
        });
    });
}

function showThanksModal(message){
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    showModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
        <div class = "modal__content">
            <div class = "modal__close" data-close>&times;</div>
            <div class = "modal__title">${message}</div>
        </div>
    `;
    
    document.querySelector('.modal').append(thanksModal);

    setTimeout(() =>{
        thanksModal.remove();
        prevModalDialog.classList.add('show');
        prevModalDialog.classList.remove('hide');
        closeModal();
    }, 4000);
}

});
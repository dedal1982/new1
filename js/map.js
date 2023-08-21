// map

ymaps.ready(function () {
  var myMap = new ymaps.Map(
    "map",
    {
      center: [59.931887, 30.333488],
      zoom: 12.5,
    },
    {
      searchControlProvider: "yandex#search",
    },
  );

  // Создаём шаблон Icon
  var MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    `<div style="color: #FFFFFF; font-weight: bold;"><i>$[properties.iconContent]</i></div>`,
  );

  // Создаём шаблон Balloon
  var customBalloonLayout = ymaps.templateLayoutFactory.createClass(
    `<div class="balloon">
       <div class="balloon__swiper swiper">
         <div class="swiper-wrapper">
           <div class="swiper-slide"><img src="../images/salon.png" alt="Salon" /></div>
           <div class="swiper-slide"><img src="../images/salon.png" alt="Salon" /></div>
           <div class="swiper-slide"><img src="../images/salon.png" alt="Salon" /></div>
         </div>
         <div class="swiper-button-prev"></div>
         <div class="swiper-button-next"></div>
       </div>
       <div class="balloon__content">
         <div class="balloon__main">
           <h3 class="balloon__address">$[properties.address]</h3>
           <div class="balloon__info">
             <div class="balloon__stars">
               <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M6.70255 0.427341L8.24211 3.74893H11.2374C11.5469 3.73677 11.8306 3.92062 11.9466 4.20842C12.0626 4.49622 11.9857 4.82598 11.7545 5.03255L9.15866 7.59578L10.5994 10.9114C10.7283 11.2226 10.645 11.5816 10.3922 11.8039C10.1394 12.0262 9.77339 12.0624 9.48215 11.8938L6.00067 9.9319L2.52019 11.8938C2.2289 12.0632 1.86228 12.0274 1.60908 11.8049C1.35587 11.5824 1.27253 11.2229 1.40196 10.9114L2.84268 7.59578L0.246794 5.03255C0.0160557 4.82762 -0.0620056 4.4999 0.0514994 4.21264C0.165004 3.92538 0.445797 3.74003 0.753989 3.74893H3.74924L5.29079 0.42434C5.42979 0.162648 5.70174 -0.000627144 5.99758 1.81059e-06C6.29341 0.000630765 6.56467 0.165061 6.70255 0.427341Z" fill="#F1B354"/>
               </svg>
               <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M6.70255 0.427341L8.24211 3.74893H11.2374C11.5469 3.73677 11.8306 3.92062 11.9466 4.20842C12.0626 4.49622 11.9857 4.82598 11.7545 5.03255L9.15866 7.59578L10.5994 10.9114C10.7283 11.2226 10.645 11.5816 10.3922 11.8039C10.1394 12.0262 9.77339 12.0624 9.48215 11.8938L6.00067 9.9319L2.52019 11.8938C2.2289 12.0632 1.86228 12.0274 1.60908 11.8049C1.35587 11.5824 1.27253 11.2229 1.40196 10.9114L2.84268 7.59578L0.246794 5.03255C0.0160557 4.82762 -0.0620056 4.4999 0.0514994 4.21264C0.165004 3.92538 0.445797 3.74003 0.753989 3.74893H3.74924L5.29079 0.42434C5.42979 0.162648 5.70174 -0.000627144 5.99758 1.81059e-06C6.29341 0.000630765 6.56467 0.165061 6.70255 0.427341Z" fill="#F1B354"/>
               </svg>
               <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M6.70255 0.427341L8.24211 3.74893H11.2374C11.5469 3.73677 11.8306 3.92062 11.9466 4.20842C12.0626 4.49622 11.9857 4.82598 11.7545 5.03255L9.15866 7.59578L10.5994 10.9114C10.7283 11.2226 10.645 11.5816 10.3922 11.8039C10.1394 12.0262 9.77339 12.0624 9.48215 11.8938L6.00067 9.9319L2.52019 11.8938C2.2289 12.0632 1.86228 12.0274 1.60908 11.8049C1.35587 11.5824 1.27253 11.2229 1.40196 10.9114L2.84268 7.59578L0.246794 5.03255C0.0160557 4.82762 -0.0620056 4.4999 0.0514994 4.21264C0.165004 3.92538 0.445797 3.74003 0.753989 3.74893H3.74924L5.29079 0.42434C5.42979 0.162648 5.70174 -0.000627144 5.99758 1.81059e-06C6.29341 0.000630765 6.56467 0.165061 6.70255 0.427341Z" fill="#F1B354"/>
               </svg>
               <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M6.70255 0.427341L8.24211 3.74893H11.2374C11.5469 3.73677 11.8306 3.92062 11.9466 4.20842C12.0626 4.49622 11.9857 4.82598 11.7545 5.03255L9.15866 7.59578L10.5994 10.9114C10.7283 11.2226 10.645 11.5816 10.3922 11.8039C10.1394 12.0262 9.77339 12.0624 9.48215 11.8938L6.00067 9.9319L2.52019 11.8938C2.2289 12.0632 1.86228 12.0274 1.60908 11.8049C1.35587 11.5824 1.27253 11.2229 1.40196 10.9114L2.84268 7.59578L0.246794 5.03255C0.0160557 4.82762 -0.0620056 4.4999 0.0514994 4.21264C0.165004 3.92538 0.445797 3.74003 0.753989 3.74893H3.74924L5.29079 0.42434C5.42979 0.162648 5.70174 -0.000627144 5.99758 1.81059e-06C6.29341 0.000630765 6.56467 0.165061 6.70255 0.427341Z" fill="#F1B354"/>
               </svg>
               <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M6.70255 0.427341L8.24211 3.74893H11.2374C11.5469 3.73677 11.8306 3.92062 11.9466 4.20842C12.0626 4.49622 11.9857 4.82598 11.7545 5.03255L9.15866 7.59578L10.5994 10.9114C10.7283 11.2226 10.645 11.5816 10.3922 11.8039C10.1394 12.0262 9.77339 12.0624 9.48215 11.8938L6.00067 9.9319L2.52019 11.8938C2.2289 12.0632 1.86228 12.0274 1.60908 11.8049C1.35587 11.5824 1.27253 11.2229 1.40196 10.9114L2.84268 7.59578L0.246794 5.03255C0.0160557 4.82762 -0.0620056 4.4999 0.0514994 4.21264C0.165004 3.92538 0.445797 3.74003 0.753989 3.74893H3.74924L5.29079 0.42434C5.42979 0.162648 5.70174 -0.000627144 5.99758 1.81059e-06C6.29341 0.000630765 6.56467 0.165061 6.70255 0.427341Z" fill="#F1B354"/>
               </svg>
             </div>
             <div class="balloon__stats">
               <p class="balloon__rating">$[properties.rating]</p>
               <p class="balloon__reviews">($[properties.reviews] отзывов)</p>
             </div>
           </div>
         </div>
         <div class="balloon__buttons">
           <button class="balloon__button balloon__button--purple">Записаться в этот салон</button>
           <button class="balloon__button balloon__button--white">О салоне</button>
         </div>
       </div>
     </div>`,
  );

  var addresses = [
    {
      address: "г. Санкт-Петербург, 2-я Советская улица, 25А",
      rating: 4.8,
      reviews: 134,
      balloonContent: "2-я Советская улица, 25А",
    },
    {
      address: "г. Санкт-Петербург, Наличная ул., 28/16Б",
      rating: 4.9,
      reviews: 10,
      balloonContent: "Наличная ул., 28/16Б",
    },
    {
      address: "г. Санкт-Петербург, Московский проспект, 130",
      rating: 4.7,
      reviews: 10,
      balloonContent: "Московский проспект, 130",
    },
  ];

  // Итерируемся по массиву объектов с адресами и создаем метки на карте.
  addresses.forEach((address) => {
    // Создаем экземпляр геокодера.
    var myGeocoder = ymaps.geocode(address.address);

    // Обрабатываем результаты геокодирования.
    myGeocoder
      .then(function (res) {
        var geoObject = res.geoObjects.get(0);

        var myPlacemark = new ymaps.Placemark(
          geoObject.geometry.getCoordinates(),
          {
            address: address.balloonContent,
            rating: address.rating,
            reviews: address.reviews,
          },
          {
            iconLayout: "default#imageWithContent",
            iconImageHref: "../images/point.svg",
            iconImageSize: [29, 42],
            iconImageOffset: [-14, -7],
            iconContentOffset: [15, 15],
            iconContentLayout: MyIconContentLayout,
            balloonContentLayout: customBalloonLayout,
            balloonPanelMaxMapArea: 0,
            hideIconOnBalloonOpen: false,
          },
        );

        // Добавляем метку на карту.
        myMap.geoObjects.add(myPlacemark);
      })
      .catch(function (err) {
        console.error("error:" + err);
      });
  });

  const address_btn = document.querySelectorAll('[id="address-btn"]');

  Array.prototype.forEach.call(address_btn, function (e) {
    e.addEventListener("click", function () {
      const lat = parseFloat(this.getAttribute("data-lat"));
      const lng = parseFloat(this.getAttribute("data-lng"));
      myMap.setZoom(16);
      myMap.panTo([lat, lng], {
        flying: true,
        duration: 500,
      });
    });
  });
});

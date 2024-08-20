

// $(document).ready(function () {
//   AOS.init();
//   const eventswiper = document.querySelector(".swiper-wrapper");
//   const event = [
//     {
//       title: "COW FEEDING EVENT",
//       type: "image",
//       media: "assets/images/event/IMG_5230.JPG",
//     },
//     {
//       title: "COW FEEDING EVENT",
//       type: "image",
//       media: "assets/images/event/IMG_5270.JPG",
//     },
//     {
//       title: "COW FEEDING EVENT",
//       type: "image",
//       media: "assets/images/event/IMG_5301.JPG",
//     },
//     {
//       title: "COW FEEDING EVENT",
//       type: "image",
//       media: "assets/images/event/IMG_5412.JPG",
//     },
//     {
//       title: "COW FEEDING EVENT",
//       type: "video",
//       media: "assets/images/event/IMG_5429.MP4",
//     },
//     {
//       title: "COW FEEDING EVENT",
//       type: "video",
//       media: "assets/images/event/IMG_5334.MP4",
//     },
//   ];

//   // Filling the details from the object array event
//   function fillData() {
//     let output = "";
//     for (let x = 0; x < event.length; x++) {
//       if (event[x].type === "image") {
//         output += `
//         <div class="swiper-slide">
//           <div class="img-container">
//             <img src=${event[x].media} alt="" class="img-fluid" />
//           </div>
//           <div class="container arrow_contain">
//             <div class="row justify-content-center">
//               <div class="col-md-8">
//                 <div class="wrapper">
//                   <div class="content">
//                     <div class="title">
//                       <div class="text-wrapper">
//                         <div class="text-inner">
//                           ${event[x].title}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>`;
//       } else if (event[x].type === "video") {
//         output += `
//         <div class="swiper-slide">
//           <div class="img-container">
//             <video controls class="swiper-video">
//               <source src=${event[x].media} type="video/mp4">
//               Your browser does not support the video tag.
//             </video>
//           </div>
//           <div class="container arrow_contain">
//             <div class="row justify-content-center">
//               <div class="col-md-8">
//                 <div class="wrapper">
//                   <div class="content">
//                     <div class="title">
//                       <div class="text-wrapper">
//                         <div class="text-inner">
//                           ${event[x].title}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>`;
//       }
//     }
//     eventswiper.innerHTML = output;
//   }
//   document.addEventListener("DOMContentLoaded", fillData());

//   const parallaxSliderOptions = {
//     speed: 1000,
//     effect: "coverflow",
//     autoplay: false,
//     parallax: true,
//     loop: true,
//     grabCursor: true,
//     centeredSlides: true,
//     coverflowEffect: {
//       rotate: 30,
//       depth: 20,
//       stretch: 0,
//       modifier: 1,
//       slideShadows: true,
//     },
//     // parallax effect
//     on: {
//       init: function () {
//         const swiper = this;
//         for (let i = 0; i < swiper.slides.length; i++) {
//           $(swiper.slides[i])
//             .find(".img-container")
//             .attr({
//               "data-swiper-parallax": 0.75 * swiper.width,
//               "data-swiper-paralalx-opacity": 0.5,
//             });
//         }
//         const index = swiper.activeIndex;
//         $(swiper.slides).removeClass("active");
//         $(swiper.slides[index]).addClass("active");
//         // Play video if the current slide is a video slide
//         const currentSlide = swiper.slides[index];
//         const video = currentSlide.querySelector('video');
//         if (video) {
//           video.play();
//         }
//       },
//       transitionEnd: function () {
//         const swiper = this;
//         const index = swiper.activeIndex;
//         $(swiper.slides).removeClass("active");
//         $(swiper.slides[index]).addClass("active");
//         // Play video if the current slide is a video slide
//         const currentSlide = swiper.slides[index];
//         const video = currentSlide.querySelector('video');
//         if (video) {
//           video.play();
//         }
//       },
//       resize: function () {
//         this.update();
//       },
//     },
//     navigation: { 
//       nextEl: ".image-slider .next-ctrl",
//       prevEl: ".image-slider .prev-ctrl",
//     },
//   };

//   // initializing swiper
//   const slider = new Swiper(".image-slider", parallaxSliderOptions);
// });
$(document).ready(function () {
  AOS.init();
  const eventswiper = document.querySelector(".swiper-wrapper");
  const event = [
    {
      title: "COW FEEDING EVENT",
      type: "image",
      media: "assets/images/event/IMG_5230.JPG",
    },
    {
      title: "COW FEEDING EVENT",
      type: "image",
      media: "assets/images/event/IMG_5270.JPG",
    },
    {
      title: "COW FEEDING EVENT",
      type: "image",
      media: "assets/images/event/IMG_5301.JPG",
    },
    {
      title: "COW FEEDING EVENT",
      type: "image",
      media: "assets/images/event/IMG_5412.JPG",
    },
    {
      title: "COW FEEDING EVENT",
      type: "image",
      media: "assets/images/event/Cow_Fid1.jpeg",
    },
    {
      title: "COW FEEDING EVENT",
      type: "image",
      media: "assets/images/event/Cow_Fid2.jpeg",
    },
  ];

  // Filling the details from the object array event
  function fillData() {
    let output = "";
    for (let x = 0; x < event.length; x++) {
      if (event[x].type === "image") {
        output += `
        <div class="swiper-slide">
          <div class="img-container">
            <img src=${event[x].media} alt="" class="img-fluid" />
          </div>
          <div class="container arrow_contain">
            <div class="row justify-content-center">
              <div class="col-md-8">
                <div class="wrapper">
                  <div class="content">
                    <div class="title">
                      <div class="text-wrapper">
                        <div class="text-inner">
                          ${event[x].title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
      } else if (event[x].type === "video") {
        output += `
        <div class="swiper-slide">
          <div class="img-container">
            <video class="swiper-video" controls>
              <source src=${event[x].media} type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="container arrow_contain">
            <div class="row justify-content-center">
              <div class="col-md-8">
                <div class="wrapper">
                  <div class="content">
                    <div class="title">
                      <div class="text-wrapper">
                        <div class="text-inner">
                          ${event[x].title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
      }
    }
    eventswiper.innerHTML = output;
  }
  document.addEventListener("DOMContentLoaded", fillData());

  const parallaxSliderOptions = {
    speed: 1000,
    effect: "coverflow",
    autoplay: false,
    parallax: true,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 30,
      depth: 20,
      stretch: 0,
      modifier: 1,
      slideShadows: true,
    },
    // parallax effect
    on: {
      init: function () {
        const swiper = this;
        for (let i = 0; i < swiper.slides.length; i++) {
          $(swiper.slides[i])
            .find(".img-container")
            .attr({
              "data-swiper-parallax": 0.75 * swiper.width,
              "data-swiper-paralalx-opacity": 0.5,
            });
        }
        const index = swiper.activeIndex;
        $(swiper.slides).removeClass("active");
        $(swiper.slides[index]).addClass("active");
      },
      transitionEnd: function () {
        const swiper = this;
        const index = swiper.activeIndex;
        $(swiper.slides).removeClass("active");
        $(swiper.slides[index]).addClass("active");
      },
      resize: function () {
        this.update();
      },
    },
    navigation: {
      nextEl: ".image-slider .next-ctrl",
      prevEl: ".image-slider .prev-ctrl",
    },
  };

  // initializing swiper
  const slider = new Swiper(".image-slider", parallaxSliderOptions);

  // Add event listeners to control video playback
  $(".swiper-video").each(function () {
    $(this).on("play", function () {
      // Pause other videos
      $(".swiper-video").not(this).each(function () {
        this.pause();
      });
    });
  });
});

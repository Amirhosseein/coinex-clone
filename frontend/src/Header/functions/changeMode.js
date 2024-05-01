const changeMode = (lightMood) => {
  console.log(lightMood);

  // it is not the the react way to do this dom manipulation 

  // better way would be useing context API 

  if (!lightMood) {

    const body_light = document.querySelector(".body--light--mood");
    const white_green_color = document.querySelector(".white--green--color");
    const sliderImage_container_light = document.querySelector(".sliderImage--parent--container--light");
    const MS_container_space_light = document.querySelector(".MS--container--space--light");
    const Advertise_input_light = document.querySelector(".Advertise--input--light");
    const coin_price_lights = document.querySelectorAll(".coin--price--light");
    const market_container_light = document.querySelector(".market--container--light");
    const info_container_light = document.querySelector(".info--container--light");
    const info_gird_light = document.querySelectorAll(".info--gird--light");
    const guide_container_light = document.querySelector(".guide--container--light");
    const Explore_container_light = document.querySelector(".Explore--container--light");
    const moreService_container_light = document.querySelector(".moreService--container--light");
    const footer_main_container_light = document.querySelector(".footer--main--container--light");
    const footer_main_container_min_light = document.querySelector(".footer--main--container--min--light");
    const pre_light = document.querySelector(".pre--light");
    const next_light = document.querySelector(".next--light");


    if (body_light) {
      body_light?.classList.remove("body--light--mood");
      body_light?.classList.add("body--dark--mood");
    }

    if (white_green_color) {
      white_green_color?.classList.remove("white--green--color");
      white_green_color?.classList.add("black--green--color");
    }

    if (sliderImage_container_light) {
      sliderImage_container_light.classList.remove(
        "sliderImage--parent--container--light"
      );
      sliderImage_container_light.classList.add(
        "sliderImage--parent--container--dark"
      );
    }

    if (MS_container_space_light) {
      MS_container_space_light.classList.remove("MS--container--space--light");
      MS_container_space_light.classList.add("MS--container--space--dark");
    }

    if (Advertise_input_light) {
      Advertise_input_light.classList.remove("Advertise--input--light");
      Advertise_input_light.classList.add("Advertise--input--dark");
    }

    if (coin_price_lights && coin_price_lights.length > 0) {
      coin_price_lights.forEach((coin_price_light)=>{
        coin_price_light.classList.remove("coin--price--light");
        coin_price_light.classList.add("coin--price--dark");
      })
     
    }

    if(market_container_light){
      market_container_light.classList.remove("market--container--light");
      market_container_light.classList.add("market--container--dark");
    }

    if(info_container_light){
      info_container_light.classList.remove("info--container--light");
      info_container_light.classList.add("info--container--dark");
    }

    if(info_gird_light && info_gird_light.length > 0){

      info_gird_light.forEach(info => {
        info.classList.remove("info--gird--light");
        info.classList.add("info--gird--dark");
  
      });
     
    }


    if(guide_container_light){
      guide_container_light.classList.remove("guide--container--light");
      guide_container_light.classList.add("guide--container--dark");
    }



    if(Explore_container_light){
      Explore_container_light.classList.remove("Explore--container--light");
      Explore_container_light.classList.add("Explore--container--dark");
    }


    if(moreService_container_light){
      moreService_container_light.classList.remove("moreService--container--light");
      moreService_container_light.classList.add("moreService--container--dark");
    }

    if(footer_main_container_light){
      footer_main_container_light.classList.remove("footer--main--container--light");
      footer_main_container_light.classList.add("footer--main--container--dark");
    }


    if(footer_main_container_min_light){
      footer_main_container_min_light.classList.remove("footer--main--container--min--light");
      footer_main_container_min_light.classList.add("footer--main--container--min--dark");
    }

    if(pre_light){
      pre_light.classList.remove("pre--light");
      pre_light.classList.add("pre--dark");
    }

    if(next_light){
      next_light.classList.remove("next--light");
      next_light.classList.add("next--dark");
    }

  } 
  else {
    const body_dark = document.querySelector(".body--dark--mood");

    const black_green_color = document.querySelector(".black--green--color");

    const sliderImage_container_dark = document.querySelector(".sliderImage--parent--container--dark" );

    const MS_container_space_dark = document.querySelector(".MS--container--space--dark");

    const Advertise_input_dark = document.querySelector(".Advertise--input--dark");

    const coin_price_darks = document.querySelectorAll(".coin--price--dark");

    const market_container_dark = document.querySelector(".market--container--dark");

    const info_container_dark = document.querySelector(".info--container--dark");

    const info_gird_dark = document.querySelectorAll(".info--gird--dark");

    const guide_container_dark = document.querySelector(".guide--container--dark");

    const Explore_container_dark = document.querySelector(".Explore--container--dark");

    const moreService_container_dark = document.querySelector(".moreService--container--dark");

    const footer_main_container_dark = document.querySelector(".footer--main--container--dark");

    const footer_main_container_min_dark = document.querySelector(".footer--main--container--min--dark");

    const pre_dark = document.querySelector(".pre--dark");

    const next_dark = document.querySelector(".next--dark");

    if (body_dark) {
      body_dark?.classList.remove("body--dark--mood");
      body_dark?.classList.add("body--light--mood");
    }

    if (black_green_color) {
      black_green_color?.classList.remove("black--green--color");
      black_green_color?.classList.add("white--green--color");
    }

    if (sliderImage_container_dark) {
      sliderImage_container_dark.classList.remove(
        "sliderImage--parent--container--dark"
      );
      sliderImage_container_dark.classList.add(
        "sliderImage--parent--container--light"
      );
    }

    if (MS_container_space_dark) {
      MS_container_space_dark.classList.remove("MS--container--space--dark");
      MS_container_space_dark.classList.add("MS--container--space--light");
    }

    if (Advertise_input_dark) {
      Advertise_input_dark.classList.remove("Advertise--input--dark");
      Advertise_input_dark.classList.add("Advertise--input--light");
    }

    if(coin_price_darks && coin_price_darks.length > 0){
      coin_price_darks.forEach((coin_price_dark)=>{
        coin_price_dark.classList.remove("coin--price--dark");
        coin_price_dark.classList.add("coin--price--light")
      })
     
    }

    if(market_container_dark){
      market_container_dark.classList.remove("market--container--dark");
      market_container_dark.classList.add("market--container--light");
    }

    if(info_container_dark){
      info_container_dark.classList.remove("info--container--dark");
      info_container_dark.classList.add("info--container--light");
    }

    if(info_gird_dark && info_gird_dark.length > 0){
      info_gird_dark.forEach(info=>{
        info.classList.remove("info--gird--dark");
        info.classList.add("info--gird--light");
      });
      
    }


    if(guide_container_dark){
      guide_container_dark.classList.remove("guide--container--dark");
      guide_container_dark.classList.add("guide--container--light");
    }


    if(Explore_container_dark){
      Explore_container_dark.classList.remove("Explore--container--dark");
      Explore_container_dark.classList.add("Explore--container--light");
    }

    if(moreService_container_dark){
      moreService_container_dark.classList.remove("moreService--container--dark");
      moreService_container_dark.classList.add("moreService--container--light");
    }

    if(footer_main_container_dark){
      footer_main_container_dark.classList.remove("footer--main--container--dark");
      footer_main_container_dark.classList.add("footer--main--container--light");
    }

    if(footer_main_container_min_dark){
      footer_main_container_min_dark.classList.remove("footer--main--container--min--dark");
      footer_main_container_min_dark.classList.add("footer--main--container--min--light");

    }

    if(pre_dark){
      pre_dark.classList.remove("pre--dark");
      pre_dark.classList.add("pre--light");
    }

    if(next_dark){
      next_dark.classList.remove("next--dark");
      next_dark.classList.add("next--light");
    }

  }

  
};

export default changeMode;

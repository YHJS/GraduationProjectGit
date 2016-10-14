
   $(document).ready(function(){
    //---- Slider --
        $('.Main-slider').bxSlider({
          //  adaptiveHeight: true,
         //   adaptiveHeightSpeed: 250,
            auto: true});
    //---- bxpager --
       $('.bxpager').bxSlider({
           pagerCustom: '#bx-pager',
           auto: true
       });

    //---- Scroll
        $('.scroll-pane').jScrollPane( {
            verticalDragMaxHeight: 12,
            verticalGutter: 22,
            mouseWheelSpeed: 1,
            autoReinitialise: true,
            autoReinitialiseDelay: 250
        });
    //---- slider-range-product-cost
            $( "#slider-range" ).slider({
                range: true,
                min: 321,
                max: 34567,
                values: [ 1, 34567 ],
                slide: function( event, ui ) {
                    $( "#amount-from" ).val(ui.values[ 0 ] + " грн");
                    $( "#amount-to" ).val(ui.values[ 1 ] + " грн");
                }
            });
            $( "#amount-from" ).val($( "#slider-range" ).slider( "values", 0 ) + " грн");
            $( "#amount-to" ).val($( "#slider-range" ).slider( "values", 1 ) + " грн");

    //---- autocomplete-header--search-field-input
        $( function() {
            var availableTags = [
                "Apple",
                "Samsung",
                "HTC",
                "Xiaomi",
                "Sony",
                "LG",
                "Fly",
                "Meizu"
            ];
            $( "#tags" ).autocomplete({
                source: availableTags
            });
        } );
    });
    //-------------------
    //---- checkboxradio-select-product
    //  $( function() {
    //    $( "input" ).checkboxradio();
    // } );

   //-----------add_order ------------------

    var area = document.getElementById('more-Information--area-show');
    if(area){
          area.addEventListener('click', showAreaMoreInformation, false);
    }

   function showAreaMoreInformation() {
        var element = document.getElementById('wrapper-form-add-order--more-Information--text-area'),
            styleElement = getComputedStyle(element);
       if (styleElement.display == 'none') {
           element.style.display = 'block';
       } else {
           element.style.display = '';
       }
    }
    //------------ add product in card

   var buy_button = document.getElementsByClassName('buy-button');
   for (var i=0;i < buy_button.length; i++) {
       // addEvent(aTags[i], 'click', alertWinner);
       buy_button[i].addEventListener("click", addProductInCard, false);
   }
   var buttonBackToBuy = document.getElementById('back-to-buy');
   buttonBackToBuy.addEventListener('click',continueBuy,false);

   function addProductInCard() {
       var element = document.getElementById('add-product-in-card'),
           containerFog = document.getElementById('main-container-fog');
       styleElement = getComputedStyle(element);
       if (styleElement.display == 'none') {
           element.style.display = 'block';
           containerFog.style.opacity = '0.1';
       } else {
           element.style.display = '';
           containerFog.style.opacity = '';
       }
   }

   function continueBuy () {
       var element = document.getElementById('add-product-in-card'),
           containerFog = document.getElementById('main-container-fog');
       element.style.display = '';
       containerFog.style.opacity = '';
    }
//------------ top-sales-product--after

   var area = document.getElementById('more-Information--area-show');
   if(area){
       area.addEventListener('click', showAreaMoreInformation, false);
   }

    var buttonshowTopSales = document.getElementById('button-show-top-sales-product');
    if (buttonshowTopSales) {
        buttonshowTopSales.addEventListener('click',ShowTopSales, false);
    }

    function ShowTopSales() {

        var showTopSales = document.getElementById('top-sales-product--after'),
            buttonshowTopSales = document.getElementById('button-show-top-sales-product');
            styleElement = getComputedStyle(showTopSales);
        if (styleElement.display == 'none') {
            showTopSales.style.display = 'block';
            buttonshowTopSales.style.display = 'none';
        }
        else {
            showTopSales.style.display = '';
            buttonshowTopSales.style.display = '';
        }
    }

   //------------ new--product--after
   var buttonshowNewProduct = document.getElementById('button-show-new-product');
   if (buttonshowNewProduct) {
       buttonshowNewProduct.addEventListener('click',ShowNewProduct, false);
   }

   function ShowNewProduct() {

       var showNewProduct = document.getElementById('new-product--after'),
           buttonshowNewProduct = document.getElementById('button-show-new-product');
       styleElement = getComputedStyle(showNewProduct);
       if (styleElement.display == 'none') {
           showNewProduct.style.display = 'block';
           buttonshowNewProduct.style.display = 'none';
       }
       else {
           showNewProduct.style.display = '';
           buttonshowNewProduct.style.display = '';
       }
   }
    //-----------product-catalog--panel-setup--sorting----------------------
   var sortingBrandSwitcher = document.getElementById('product-catalog--panel-setup--sorting-brand--switcher');
   if (sortingBrandSwitcher) {
       sortingBrandSwitcher.addEventListener('click',ShowSortingBrand, false);
   }
   function ShowSortingBrand() {
       var sortingBrand = document.getElementById('product-catalog--panel-setup--sorting-brand');
       styleElement = getComputedStyle(sortingBrand);
       if (styleElement.display == 'block') {
           sortingBrand.style.display = 'none';
       } else {
           sortingBrand.style.display = '';
       }
   }
   var screenSizeSwitcher = document.getElementById('product-catalog--panel-setup--sorting-screen_size-switcher');
   if (screenSizeSwitcher) {
       screenSizeSwitcher.addEventListener('click',ShowSortingScreenSize, false);
   }
   function ShowSortingScreenSize() {
       var sortingScrinSize = document.getElementById('product-catalog--panel-setup--sorting-screen_size');
       styleElement = getComputedStyle(sortingScrinSize);
       if (styleElement.display == 'block') {
           sortingScrinSize.style.display = 'none';
       } else {
           sortingScrinSize.style.display = '';
       }
   }
   var sortingMemorySwitcher = document.getElementById('product-catalog--panel-setup--sorting-memory-switcher');
   if (sortingMemorySwitcher) {
       sortingMemorySwitcher.addEventListener('click',ShowSortingMemory, false);
   }
   function ShowSortingMemory() {
       var sortingMemory = document.getElementById('product-catalog--panel-setup--sorting-memory');
       styleElement = getComputedStyle(sortingMemory);
       if (styleElement.display == 'none') {
           sortingMemory.style.display = 'block';
       } else {
           sortingMemory.style.display = '';
       }
   }
   var sortingOsSwitcher = document.getElementById('product-catalog--panel-setup--sorting-os-switcher');
   if (sortingOsSwitcher) {
       sortingOsSwitcher.addEventListener('click',ShowSortingOs, false);
   }
   function ShowSortingOs() {
       var sortingOs = document.getElementById('product-catalog--panel-setup--sorting-os');
       styleElement = getComputedStyle(sortingOs);
       if (styleElement.display == 'none') {
           sortingOs.style.display = 'block';
       } else {
           sortingOs.style.display = '';
       }
   }
   var sortingCameraSwitcher = document.getElementById('product-catalog--panel-setup--sorting-camera-switcher');
   if (sortingCameraSwitcher) {
       sortingCameraSwitcher.addEventListener('click',ShowSortingCamera, false);
   }
   function ShowSortingCamera() {
       var sortingCamera = document.getElementById('product-catalog--panel-setup--sorting-camera');
       styleElement = getComputedStyle(sortingCamera);
       if (styleElement.display == 'none') {
           sortingCamera.style.display = 'block';
       } else {
           sortingCamera.style.display = '';
       }
   }
   var sortingSimSwitcher = document.getElementById('product-catalog--panel-setup--sorting-f_sim-switcher');
   if (sortingSimSwitcher) {
       sortingSimSwitcher.addEventListener('click',ShowSortingSim, false);
   }
   function ShowSortingSim() {
       var sortingSim = document.getElementById('product-catalog--panel-setup--sorting-f_sim');
       styleElement = getComputedStyle(sortingSim);
       if (styleElement.display == 'none') {
           sortingSim.style.display = 'block';
       } else {
           sortingSim.style.display = '';
       }
   }

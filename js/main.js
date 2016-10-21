    //============================================================================
    //  jQuery plugins // start
    //============================================================================
    $(document).ready(function(){
    //---- Slider --
        $('.Main-slider').bxSlider({
           // adaptiveHeight: true,
           // adaptiveHeightSpeed: 250,
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
            $( "#header--search-field-input" ).autocomplete({
                source: availableTags
            });
        } );
    });
    //============================================================================
    //  jQuery plugins // end
    //============================================================================
    //============================================================================
    //  jQuery UI // start
    //============================================================================

    $( function() {
       $( "#files" ).selectmenu();
    } );


    //============================================================================
    //  more-Information--area add_order // start
    //============================================================================

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
    //============================================================================
    //  more-Information--area add_order // end
    //============================================================================

    //============================================================================
    //  add product in card // start
    //============================================================================

   var buy_button = document.getElementsByClassName('buy-button');
   for (var i=0;i < buy_button.length; i++) {
       buy_button[i].addEventListener("click", addProductInCard, false);
   }
   var buttonBackToBuy = document.getElementById('back-to-buy');
   buttonBackToBuy.addEventListener('click',continueBuy,false);
   var buttonCancel = document.getElementById('cart-full-wrapper-cancel-icon');
   buttonCancel.addEventListener('click',continueBuy,false);
   var buttonEraseBasket = document.getElementById('basket-erase');
   buttonEraseBasket.addEventListener('click',eraseBasket,false);

   var buttonReversalOrder = document.getElementById('reversal-to-order');
   if(buttonReversalOrder){
       buttonReversalOrder.addEventListener('click', eraseBasket, false);
   }

   if (sessionStorage.getItem('basket') == null) {
       document.getElementById('basket-purchase').innerHTML = '0';
       document.getElementById('header--shop-basket-purchase-number').innerHTML = '0';
   } else {
       document.getElementById('basket-purchase').innerHTML = sessionStorage.getItem('basket');
       document.getElementById('header--shop-basket-purchase-number').innerHTML =  sessionStorage.getItem('basket');
   }

   function addProductInCard() {
       var element = document.getElementById('add-product-in-card'),
       containerFog = document.getElementById('main-container-fog'),
       orderCounter = +sessionStorage.getItem('basket');
       styleElement = getComputedStyle(element);

       if (styleElement.display == 'none') {
           element.style.display = 'block';
           containerFog.style.opacity = '0.1';
           orderCounter += 1;
           sessionStorage.setItem("basket", orderCounter);
       } else {
           element.style.display = '';
           containerFog.style.opacity = '';
       }
       document.getElementById('basket-purchase').innerHTML = sessionStorage.getItem('basket');
       document.getElementById('header--shop-basket-purchase-number').innerHTML =  sessionStorage.getItem('basket');
   }

   function continueBuy () {
       var element = document.getElementById('add-product-in-card'),
           containerFog = document.getElementById('main-container-fog');
       element.style.display = '';
       containerFog.style.opacity = '';
    }

   function eraseBasket() {
       sessionStorage.setItem("basket", '0');
       document.getElementById('basket-purchase').innerHTML = sessionStorage.getItem('basket');
       document.getElementById('header--shop-basket-purchase-number').innerHTML =  sessionStorage.getItem('basket');
   }
    //============================================================================
    //  add product in card // end
    //============================================================================

    //============================================================================
    //  top-sales-product--after // start
    //============================================================================

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
    //============================================================================
    //  top-sales-product--after // end
    //============================================================================

    //============================================================================
    //  new--product--after // start
    //============================================================================

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
    //============================================================================
    //  new--product--after // end
    //============================================================================

    //============================================================================
    //  product-catalog--panel-setup--sorting // start
    //============================================================================
   var sortingPriceSwitcher = document.getElementById('product-catalog--panel-setup--sorting-cost-switcher');
   if (sortingPriceSwitcher) {
       sortingPriceSwitcher.addEventListener('click',ShowSortingPrice, false);
   }
   function ShowSortingPrice() {
       var sortingPrice = document.getElementById('product-catalog--panel-setup--sorting-price');
       styleElement = getComputedStyle(sortingPrice);
       if (styleElement.display == 'block') {
           sortingPrice.style.display = 'none';
       } else {
           sortingPrice.style.display = '';
       }
   }

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
       if (styleElement.display == 'block') {
           sortingMemory.style.display = 'none';
       } else {
           sortingMemory.style.display = '';
       }
   }
   var detailedSpecificationsSwitcher = document.getElementById('product-catalog--panel-setup--sorting--detailed-specifications');
   if (detailedSpecificationsSwitcher) {
       detailedSpecificationsSwitcher.addEventListener('click',detailedSpecificationsSwitch, false);
   }
   function detailedSpecificationsSwitch () {
       ShowSortingOs();
       ShowSortingCamera();
       ShowSortingSim();
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
    //============================================================================
    //  product-catalog--panel-setup--sorting // end
    //============================================================================
   //============================================================================
   //  sorting product logic // start
   //============================================================================
   var allSortingBottom = document.getElementById('sorting');
   if (allSortingBottom) {
       allSortingBottom.addEventListener('click',getAllSorting, false);
   }
   function getAllSorting() {
       var arrProduct = document.getElementsByClassName('product-catalog--content--wrapper');
       var sortingBrand = document.getElementById('product-catalog--panel-setup--sorting-brand'),
           x = '',
           z = '',
           sortingBrandArr = sortingBrand.getElementsByTagName('input');
       for (i = 0; i < sortingBrandArr.length; i++) {
           debugger;
           if (sortingBrandArr[i].checked) {
               x = sortingBrandArr[i].value;
               for (var y = 0; y < arrProduct.length; y++) {
                   if (_.contains(arrProduct[y].innerText.split("\n").join("").toLowerCase().split(' '), x)) {
                       z = document.getElementById(arrProduct[y].id);
                       z.style.display = 'flex';
                   }
               }
           } else {
               x = sortingBrandArr[i].value;
               for (var y = 0; y < arrProduct.length; y++) {
                   if (_.contains(arrProduct[y].innerText.split("\n").join("").toLowerCase().split(' '), x)) {
                       z = document.getElementById(arrProduct[y].id);
                       z.style.display = 'none';
                   }
               }
           }
       }
   }
   //============================================================================
   //  sorting product logic // end
   //============================================================================
    //============================================================================
       //  widget - Calculator // start
    //============================================================================

   document.getElementById("button-reset").addEventListener('click',Reset,false);
   document.getElementById("button-percent").addEventListener('click',percent,false);
   document.getElementById("button-SquareRoot").addEventListener('click',SquareRoot,false);
   document.getElementById("button-changeSign").addEventListener('click',changeSign,false);

   var FirstOperand = null,
       flagNewOperand = false,
       opSelection = '';

   function Reset() {
       document.calculator.display.value = '0';
       FirstOperand = null;
       flagNewOperand = false;
       opSelection = '';
   }

   function getData(i) {
       var i,
           nul = document.calculator.display.value,
           number;
       if (flagNewOperand) {
           document.calculator.display.value = ''
       }
       if (nul == '0') {
           document.calculator.display.value = '';
       }
       flagNewOperand = false;
       number = document.calculator.display.value + i;
       document.calculator.display.value = number;
   }

   function calculation (op) {
       var FirstOperand = document.calculator.display.value;
       if (flagNewOperand && opSelection != "=")
       {
           document.calculator.display.value = total;
       }
       else
       {
           flagNewOperand = true;
           if ( '+' == opSelection )
               total += parseFloat(FirstOperand);
           else if ( '-' == opSelection )
               total -= parseFloat(FirstOperand);
           else if ( '/' == opSelection )
               total /= parseFloat(FirstOperand);
           else if ( '*' == opSelection )
               total *= parseFloat(FirstOperand);
           else
               total = parseFloat(FirstOperand);
           document.calculator.display.value = total;
           opSelection = op;
       }
   }
   function changeSign() {
       document.calculator.display.value = parseFloat(document.calculator.display.value)*-1;
   }

   function percent() {
       document.calculator.display.value = (parseFloat(document.calculator.display.value)/100)*total;
   }
   function SquareRoot() {
       document.calculator.display.value = Math.sqrt(parseFloat(document.calculator.display.value));
   }

   //============================================================================
   //  widget - Calculator // end
   //============================================================================
   //============================================================================
   //  change button Color // start
   //============================================================================

   var callButton = document.getElementById("header--request-call-button");
   callButton.addEventListener('mouseenter',changeColor,false);

   function changeColor() {
       var r = _.random(0, 255),
           g = _.random(0, 255),
           b = _.random(0, 255),
           color = 'rgb'+'('+r+','+g+ ','+b+')';
       callButton.style.backgroundColor = color;
       callButton.style.color = '#fff';
   }
   //============================================================================
   //  change button Color // end
   //============================================================================

var basePrice = 1500;
let select = document.getElementById('styleSelect');
let sizeSelect1 = document.getElementById('calc_size1');
let sizeSelect2 = document.getElementById('calc_size2');
let persons = document.getElementById('numberOfPersons');
let style = 0;
let podramnik = document.getElementById('stretcher');
let giftCheck_1 = false;
let giftCheck_2 = false;
let lack;
let gift_wrap;
let popupBg = document.querySelector('.popup_form');
let popup = document.querySelector('.popup');
let openPopupButton = document.querySelectorAll('.calcButSend');
let closePopupButton = document.querySelector('.close_popup');

openPopupButton.forEach((button) =>{
    button.addEventListener('click', (e) =>{
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
})

closePopupButton.addEventListener('click', () =>{
    popupBg.classList.remove('active');
    popup.classList.remove('active');
})

document.addEventListener('click', (e) =>{
    if(e.target === popupBg){
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
})




function selector() {
    if(select.value == photoArt){

    }
    else{
        if(select.value == dreamArt){
        basePrice += 490;
        }
        else
        if(select.value == classicArt){
        basePrice += 490;
        }
    }

}
function autoselect(val){
    select.value = val;
}


function sizeSelector(){

}

function giftWrap_1(){
    giftCheck_1 = !giftCheck_1;
    if(giftCheck_1){
        document.getElementById('giftWrap_1').style="opacity:1;visibility:visible;";
        document.getElementById('calc_giftWrap_1').style="background: #3bb54a;";
        document.getElementById('calc_checkbox_1').checked=true;
        lack = 1;
    }
    else{
        document.getElementById('giftWrap_1').style="opacity:0;visibility:hidden;";
        document.getElementById('calc_giftWrap_1').style="background: #fff;";
        document.getElementById('calc_checkbox_1').checked=false;
        lack = 0;
    }
}

function giftWrap_2(){
    giftCheck_2 = !giftCheck_2;
    if(giftCheck_2){
        document.getElementById('giftWrap_2').style="opacity:1;visibility:visible;";
        document.getElementById('calc_giftWrap_2').style="background: #3bb54a;";
        document.getElementById('calc_checkbox_2').checked=true;
        gift_wrap = 1;
    }
    else{
        document.getElementById('giftWrap_2').style="opacity:0;visibility:hidden;";
        document.getElementById('calc_giftWrap_2').style="background: #fff;";
        document.getElementById('calc_checkbox_2').checked=false;
        gift_wrap = 0;
    }
}

$('body').on('input', '.calc__input-number', function(){
	var value = this.value.replace(/[^0-9]/g, '');
	if (value < $(this).data('min')) {
		this.value = $(this).data('min');
	} else if (value > $(this).data('max')) {
		this.value = $(this).data('max');
	} else {
		this.value = value;
	}
});

$('body').on('input', '.calc_size1', function(){
	var value = this.value.replace(/[^0-9]/g, '');
	if (value < $(this).data('min')) {
		this.value = $(this).data('min');
	} else if (value > $(this).data('max')) {
		this.value = $(this).data('max');
	} else {
		this.value = value;
	}
});

$('body').on('input', '.calc_size2', function(){
	var value = this.value.replace(/[^0-9]/g, '');
	if (value < $(this).data('min')) {
		this.value = $(this).data('min');
	} else if (value > $(this).data('max')) {
		this.value = $(this).data('max');
	} else {
		this.value = value;
	}


});


//  $('#popupForm').submit(function(e){
//         e.preventDefault();
//          $.ajax({
//          url:'script.php',
//          type:'get', 
//          headers: {
//             "Access-Control-Allow-Origin": "*",
//             "Access-Control-Allow-Headers": "origin, content-type, accept"
//         },
//          data:$('#popupForm').serialize(),
//         success:function(){
//             top.location.href="https://vk.me/w0_id";
//          }
//      });
//  });


// const sub = document.getElementById('popupForm');
// sub.addEventListener('submit', formSend);
// async function formSend(e){
//     e.preventDefault();
//     let error = formValidate(sub);


//     let formData = new FormData(sub);
//     sub.classList.add('_sending');
//     let response = await fetch('sendmail.php',{
//         method: 'POST',
//         body: formData
//     });
//     if(response.ok){
//         let result = await response.json();
//         alert(result.message);
//         sub.reset();

//     }else{
//         alert("Ошибка");
//     }




//     function formAddError(input){
//         input.parentElement.classList.add('_error');
//         input.classList.add('_error');
//     }
//     function formAddError(input){
//         input.parentElement.classList.remove('_error');
//         input.classList.remove('_error');
//     }
//     function emailTest(input){
//         return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
//     }


// }













function calculation(){
    basePrice = 1500;
    if(sizeSelect1.value * sizeSelect2.value >= 1200){
        basePrice += 400;
    }
    if(sizeSelect1.value * sizeSelect2.value >= 2400){
        basePrice += 400;
    }
    if(sizeSelect1.value * sizeSelect2.value >= 3500){
        basePrice += 400;
    }
    if(sizeSelect1.value * sizeSelect2.value >= 7000){
        basePrice += 400;
    }
    if(sizeSelect1.value * sizeSelect2.value >= 12000){
        basePrice += 400;
    }
    if(sizeSelect1.value * sizeSelect2.value >= 20000){
        basePrice += 400;
    }
    if(sizeSelect1.value * sizeSelect2.value >= 30000){
        basePrice += 400;
    }


    if(select.value == 'dreamArt' || select.value == 'classicArt')
    {
        style = 1;
    }
    else{
    style = 0;
    }
    basePrice += 490 * style;


    if(persons.value > 2){
    basePrice += persons.value * 100;
    }


    if(podramnik.value == 2){
        basePrice += 200;
    }

    
    if(lack == 1){
        basePrice += 80;
    }


    if(gift_wrap == 1){
        basePrice += 550;
    }

    document.getElementById("priceOut").innerHTML = basePrice;

    console.log(calc_checkbox_1.value);
    console.log(basePrice);
}





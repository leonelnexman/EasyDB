import { SwiperInit } from './components/swiperinit.js';
import { Tabs } from './components/tabs.js';
import { Accordion } from './components/accordion.js';
import { Modal } from './components/modal.js';
import { Mask } from './components/mask.js';
import { Fixed } from './components/header-fixed.js';
import { Menu } from './components/menu.js';
import { Validation } from './components/validation.js';

const SwiperInstance = new SwiperInit();
const TabsInstance = new Tabs();
const AccordionInstance = new Accordion();
const ModalInstance = new Modal();
const MaskInstance = new Mask();
const FixedInstance = new Fixed();
const MenuInstance = new Menu();
const  ValidationInstance = new Validation();


document.addEventListener('DOMContentLoaded', function() {
    var calcForm = document.querySelector('.calc__form');

    calcForm.addEventListener('change', function(event) {
        handleFormChanges();
    });

    calcForm.addEventListener('input', function(event) {
        handleFormChanges();
    });

    function handleFormChanges() {
        var inputs = ['input_read', 'input_post', 'input_volume'];
        var total_price = 0;
    
        inputs.forEach(function(inputId) {
            var input = document.getElementById(inputId);
            var parentElement = input.parentElement;
            var numElement = parentElement.querySelector('.num');
            numElement.textContent = input.value;
    
            var price;
            if (inputId === 'input_read') {
                price = input.value / 100 * 30;
            } else if (inputId === 'input_post') {
                price = input.value / 100 * 60;
            } else if (inputId === 'input_volume') {
                price = (input.value > 20) ? (input.value - 20) * 150 + 90 : 90;
            }
            total_price += price;
        });

        if (document.getElementById('input_read').value == 100 && document.getElementById('input_post').value == 100 && document.getElementById('input_volume').value == 20) {
            total_price = 90;
        }
    
        var instance = (document.getElementById('checkbox').checked) ? 1500 : 0;
        total_price += instance;
    
        document.getElementById('price').textContent = total_price + " ₽/мес";
    }
    
});


document.addEventListener('DOMContentLoaded', function() {
    var inputRead = document.getElementById('input_read');

    inputRead.addEventListener('input', function() {
        var currentValue = parseInt(inputRead.value);

        var nearestMultiple = Math.round(currentValue / 100) * 100;

        inputRead.value = nearestMultiple;
    });


    var inputPost = document.getElementById('input_post');

    inputPost.addEventListener('input', function() {
        var currentValue = parseInt(inputPost.value);

        var nearestMultiple = Math.round(currentValue / 100) * 100;

      
        inputPost.value = nearestMultiple;
    });
});

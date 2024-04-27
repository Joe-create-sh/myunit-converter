let numberToConvert = document.querySelector('.number-to-convert');
const conversionButton = document.querySelector('.convert-button');
let meterFeetContainer = document.querySelector('.meter-feet');
let literGallonContainer = document.querySelector('.liter-gallon');
let kiloPoundContainer = document.querySelector('.kilo-pound');


conversionButton.addEventListener('click', function () { 
          
    let userNumber = numberToConvert.value;

    let meterToFeetResult = meterToFeet();
    let feetToMeterResult = feetToMeter();
    let literToGallonResult = literToGallon();
    let gallonToLiterResult = gallonToLiter();
    let kiloToPoundResult = kiloToPound();
    let poundToKiloResult = poundToKilo();

    if (meterToFeetResult !== null && feetToMeterResult !== null && literToGallonResult !== null +
        gallonToLiterResult !== null && kiloToPoundResult !== null && poundToKiloResult !== null) {
       
        meterFeetContainer.textContent = `${userNumber} meters = ${meterToFeetResult} feet | ${userNumber} feet = ${feetToMeterResult} meters`;
        literGallonContainer.textContent = `${userNumber} liters = ${literToGallonResult} gallons | ${userNumber} gallons = ${gallonToLiterResult} liters`;
        kiloPoundContainer.textContent = `${userNumber} kilos = ${kiloToPoundResult} pounds | ${userNumber} pounds = ${poundToKiloResult} kilos`;

    } else {

        meterFeetContainer.textContent = '';
        literGallonContainer.textContent = '';
        kiloPoundContainer.textContent = '';

    } 
    

});


function meterToFeet() {
    
    let meterToFeetResult = 0;

    if (numberToConvert.value !== '' && !isNaN(numberToConvert.value)) {
        
        meterToFeetResult = Number(numberToConvert.value * 3.28084).toFixed(3);
        console.log(`Meter to Feet: ${meterToFeetResult}`);

    } else {
        
        console.log('Please enter a number');
        numberToConvert.value = '';
        return null;
        

    }

    return meterToFeetResult;

}


function feetToMeter() {
    
    let feetToMeterResult = 0;

    if (numberToConvert.value !== '' && !isNaN(numberToConvert.value)) {
        
        feetToMeterResult = Number(numberToConvert.value * 0.3048).toFixed(3);
        console.log(`Feet to Meter: ${feetToMeterResult}`);

    } else {


        console.log('Please enter a number');
        numberToConvert.value = '';
        return null;
        

    }

    return feetToMeterResult;

}


function literToGallon() {
    
    let literToGallonResult = 0;

    if (numberToConvert.value !== '' && !isNaN(numberToConvert.value)) {
        
        literToGallonResult = Number(numberToConvert.value * 0.264172).toFixed(3);
        console.log(`Liter to Gallon ${literToGallonResult}`);

    } else {

        console.log('Please enter a number');
        numberToConvert.value = '';
        return null;
    

    }

    return literToGallonResult;

}


function gallonToLiter() {
    
    let gallonToLiterResult = 0;

    if (numberToConvert.value !== '' && !isNaN(numberToConvert.value)) {
        
        gallonToLiterResult = Number(numberToConvert.value * 3.785411784).toFixed(3);
        console.log(`Gallon to Liter: ${gallonToLiterResult}`);

    } else {

        console.log('Please enter a number');
        numberToConvert.value = '';
        return null;
    

    }


    return gallonToLiterResult;


}


function kiloToPound() {
    
    let kiloToPoundResult = 0;

    if (numberToConvert.value !== '' && !isNaN(numberToConvert.value)) {
        
        kiloToPoundResult = Number(numberToConvert.value * 2.20462).toFixed(3);
        console.log(`Kilo to Pound: ${kiloToPoundResult}`);

    } else {


        console.log('Please enter a number');
        numberToConvert.value = '';
        return null;


    }

    return kiloToPoundResult;

}


function poundToKilo() {
    
    let poundToKiloResult = 0;

    if (numberToConvert.value !== '' && !isNaN(numberToConvert.value)) {
        
        poundToKiloResult = Number(numberToConvert.value * 0.453592).toFixed(3);
        console.log(`Pound to Kilo: ${poundToKiloResult}`);

    } else {

        console.log('Please enter a number');
        numberToConvert.value = '';
        return null;


    }

    return poundToKiloResult;

}











// get the element 
let spanE1 = document.getElementById('Input_type');
let spanE2 = document.getElementById('Output_type');
let Input = document.getElementById('Input');
let Output= document.getElementById('Output');
console.log("spanE1 -"+spanE1);
console.log("spanE2 -"+spanE2 );
console.log("Input -" + Input);
console.log("Output -" + Output);
// element --- property
var n1= parseFloat( Input.value);
var Inputindex = spanE1.selectedIndex
var Outputindex = spanE2.selectedIndex
console.log(typeof n1);
console.log(typeof n2);

// Input index 0= Foot, 1= Meter, 2= Inch



//process

switch(Inputindex && Outputindex)
{
    case (Inputindex===Outputindex): var n2=n1
    break;
    case (Inputindex===0 && Outputindex===1): var n2=n1*0.3048
    break;
    case (Inputindex===0 && Outputindex===1): var n2=n1*12
    break;
    case (Inputindex===1 && Outputindex===0): var n2=n1*3.2808399
    break;
    case (Inputindex===1 && Outputindex===2): var n2=n1*39.3700787
    break;
    case (Inputindex===2 && Outputindex===0): var n2=n1/12
    break;
    case (Inputindex===2 && Outputindex===1): var n2=n1*0.0254
    break;
    default: var n2=n1
    break;


}
//display
document.write(n2);
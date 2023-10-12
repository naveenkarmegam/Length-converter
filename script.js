let contianer = document.getElementById('cal-contianer')

function create_element (tagName,attrName,attrVal,content) {
    let element = document.createElement(tagName);
    element.innerHTML = content;
    element.setAttribute(attrName,attrVal)
    return element;
}
// console.log('hello naveen');
const line_break = () => document.createElement('br')

let _heading = create_element('h3','id','heading','cm to inches')

let _input = create_element('input','id','input','')

let _button  = create_element('button','id','btn','Submit')
let _result = create_element('div','id','result','1 inch = 2.54 cm')
document.getElementById('cal-contianer').append(_heading,_input,_button,_result);


let _button_event = document.getElementById('btn')
_button_event.setAttribute('class','btn btn-primary btn-lg')
_button_event.onclick = () => {
    let cm_val = parseFloat(document.getElementById('input').value)
    let result=document.getElementById("result")
    if (!isNaN(cm_val)) { 
        let inch_val = cm_val / 2.54;
        result.innerHTML = inch_val.toFixed(2) + ' inches';
    } else {
        result.innerHTML = 'Please enter a valid number';
    }

}

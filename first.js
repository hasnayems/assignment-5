let serial = 0;
function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId)
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputField.value = '';
    return inputFieldValue;
}
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const ElementValue = parseFloat(elementValueString);
    return ElementValue;
}
function setTotalElementValueById(elementId,newValue){
    const totalElement = document.getElementById(elementId);
    totalElement.innerText = newValue;
}
// function stringToNumberConverter(id) {
//     const element = document.getElementById(id).innerText;
//     return parseFloat(element);
// }
function displayData(name, result) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${name}</td>
      <td>${result}<span>cm<span><sup>2</sup></span></span></td>
      <td>
      <button class="bg-sky-500 px-2 rounded-md">Convert to m<span><sup>2</sup></span></button>
      </td> 
    `;
    container.appendChild(tr);
    // document.getElementById("total-product").innerText = serial;
}

document.getElementById('triangle-calculate').addEventListener('click', function(){
    serial += 1;

    const titleName = document.getElementById("triangle").innerText;

    const triangleFirstInputField = getInputFieldValueById('triangle-input-1');
    if(isNaN(triangleFirstInputField) || triangleFirstInputField <= 0){
        alert('Please input a valid number.');
        return;
    }
    const previousTriangleFirstElement = getElementValueById('triangle-b-element');
    const newTriangleFirstElement = triangleFirstInputField;
    setTotalElementValueById('triangle-b-element', newTriangleFirstElement)

    const triangleSecondInputField = getInputFieldValueById('triangle-input-2');
    if(isNaN(triangleSecondInputField) || triangleSecondInputField <= 0){
        alert('Please input a valid number.');
        return;
    }
    const previousTriangleSecondElement = getElementValueById('triangle-h-element');
    const newTriangleSecondElement = triangleSecondInputField;
    setTotalElementValueById('triangle-h-element', newTriangleSecondElement)

    const previousTriangleFixedElement = getElementValueById('triangle-0.5-element');

    const triangleValue = previousTriangleFixedElement * newTriangleFirstElement * newTriangleSecondElement;
    
    displayData(titleName, triangleValue);
})
document.getElementById('rectangle-calculate').addEventListener('click', function(){
    serial += 1;

    const titleName = document.getElementById("rectangle").innerText;

    const rectangleFirstInputField = getInputFieldValueById('rectangle-input-1');
    if(isNaN(rectangleFirstInputField) || rectangleFirstInputField <= 0){
        alert('Please input a valid number.');
        return;
    }
    const previousRectangleFirstElement = getElementValueById('rectangle-w-element');
    const newRectangleFirstElement = rectangleFirstInputField;
    setTotalElementValueById('rectangle-w-element', newRectangleFirstElement)

    const rectangleSecondInputField = getInputFieldValueById('rectangle-input-2');
    if(isNaN(rectangleSecondInputField) || rectangleSecondInputField <= 0){
        alert('Please input a valid number.');
        return;
    }
    const previousRectangleSecondElement = getElementValueById('rectangle-l-element');
    const newRectangleSecondElement = rectangleSecondInputField;
    setTotalElementValueById('rectangle-l-element', newRectangleSecondElement)

    const rectangleValue = newRectangleFirstElement * newRectangleSecondElement;

    displayData(titleName, rectangleValue);
})
document.getElementById('parallelogram-calculate').addEventListener('click', function(){
    serial += 1;
    const parallelogramFirstInputField = getInputFieldValueById('parallelogram-input-1');
    const previousParallelogramFirstElement = getElementValueById('parallelogram-b-element');
    const newParallelogramFirstElement = parallelogramFirstInputField;
    setTotalElementValueById('parallelogram-b-element', newParallelogramFirstElement)

    const parallelogramSecondInputField = getInputFieldValueById('parallelogram-input-2');
    const previousParallelogramSecondElement = getElementValueById('parallelogram-h-element');
    const newParallelogramSecondElement = parallelogramSecondInputField;
    setTotalElementValueById('parallelogram-h-element', newParallelogramSecondElement)
})
document.getElementById('rhombus-calculate').addEventListener('click', function(){
    serial += 1;
    const rhombusFirstInputField = getInputFieldValueById('rhombus-input-1');
    const previousRhombusFirstElement = getElementValueById('rhombus-d1-element');
    const newRhombusFirstElement = rhombusFirstInputField;
    setTotalElementValueById('rhombus-d1-element', newRhombusFirstElement)

    const rhombusSecondInputField = getInputFieldValueById('rhombus-input-2');
    const previousRhombusSecondElement = getElementValueById('rhombus-d2-element');
    const newRhombusSecondElement = rhombusSecondInputField;
    setTotalElementValueById('rhombus-d2-element', newRhombusSecondElement)

})
document.getElementById('pentagon-calculate').addEventListener('click', function(){
    serial += 1;
    const pentagonFirstInputField = getInputFieldValueById('pentagon-input-1');
    const previousPentagonFirstElement = getElementValueById('pentagon-p-element');
    const newPentagonFirstElement = pentagonFirstInputField;
    setTotalElementValueById('pentagon-p-element', newPentagonFirstElement)

    const pentagonSecondInputField = getInputFieldValueById('pentagon-input-2');
    const previousPentagonSecondElement = getElementValueById('pentagon-b-element');
    const newPentagonSecondElement = pentagonSecondInputField;
    setTotalElementValueById('pentagon-b-element', newPentagonSecondElement)

})
document.getElementById('ellipse-calculate').addEventListener('click', function(){
    serial += 1;
    const ellipseFirstInputField = getInputFieldValueById('ellipse-input-1');
    const previousEllipseFirstElement = getElementValueById('ellipse-a-element');
    const newEllipseFirstElement = ellipseFirstInputField;
    setTotalElementValueById('ellipse-a-element', newEllipseFirstElement)

    const ellipseSecondInputField = getInputFieldValueById('ellipse-input-2');
    const previousEllipseSecondElement = getElementValueById('ellipse-b-element');
    const newEllipseSecondElement = ellipseSecondInputField;
    setTotalElementValueById('ellipse-b-element', newEllipseSecondElement)

})


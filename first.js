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
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}
function getElementStringById(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    return elementString;
}
function setTotalElementValueById(elementId,newValue){
    const totalElement = document.getElementById(elementId);
    totalElement.innerText = newValue;
}
function displayData(name, result) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${name}</td>
      <td><span id="result">${result}</span>cm<span><sup>2</sup></span></td>
      <td>
      <button class="bg-sky-500 px-2 rounded-md w-32">Convert to m<span><sup>2</sup></span></button>
      </td> 
    `;
    container.appendChild(tr);
}
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href='blog.html'
})
document.getElementById('triangle-calculate').addEventListener('click', function(){
    serial += 1;

    const titleName = getElementStringById('triangle')

    const triangleFirstInputField = getInputFieldValueById('triangle-input-1');
    if(isNaN(triangleFirstInputField) || triangleFirstInputField <= 0){
        alert('Please input a valid number.');
        return;
    }
    const previousTriangleFirstElement = getElementStringById('triangle-b-element');
    // console.log(previousTriangleFirstElement)
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

    const triangleValue = (previousTriangleFixedElement * newTriangleFirstElement * newTriangleSecondElement).toFixed(2);
    
    displayData(titleName, triangleValue);
})
document.getElementById('edit-btn').addEventListener('click', function(){
    const previousTriangleFirstElement = getElementValueById('triangle-b-element');
    const newTriangleFirstElement = 'b';
    setTotalElementValueById('triangle-b-element', newTriangleFirstElement)

    const previousTriangleSecondElement = getElementValueById('triangle-b-element');
    const newTriangleSecondElement = 'h';
    setTotalElementValueById('triangle-h-element', newTriangleSecondElement)
})
document.getElementById('ok-btn').addEventListener('click', function(){
    const triangleFirstInputField = getInputFieldValueById('triangle-input-1');
    if(isNaN(triangleFirstInputField) || triangleFirstInputField <= 0){
        alert('Please input a valid number.');
        return;
    }
    const newTriangleFirstElement = triangleFirstInputField;
    setTotalElementValueById('triangle-b-element', newTriangleFirstElement)

    const triangleSecondInputField = getInputFieldValueById('triangle-input-2');
    if(isNaN(triangleSecondInputField) || triangleSecondInputField <= 0){
        alert('Please input a valid number.');
        return;
    }
    // const previousTriangleSecondElement = getElementValueById('triangle-h-element');
    const newTriangleSecondElement = triangleSecondInputField;
    setTotalElementValueById('triangle-h-element', newTriangleSecondElement)
    
    const previousTriangleFixedElement = getElementValueById('triangle-0.5-element');

    const updatedTriangleValue = (previousTriangleFixedElement * newTriangleFirstElement * newTriangleSecondElement).toFixed(2);

    const previousResult = getElementValueById('result');
    const newResult = updatedTriangleValue;
    setTotalElementValueById('result', newResult)

    // const titleName = getElementStringById('triangle')

    displayData(titleName, newResult);
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

    const rectangleValue = (newRectangleFirstElement * newRectangleSecondElement).toFixed(2);

    displayData(titleName, rectangleValue);
})
document.getElementById('parallelogram-calculate').addEventListener('click', function(){
    serial += 1;

    const titleName = document.getElementById("parallelogram").innerText;

    const parallelogramFirstInputField = getInputFieldValueById('parallelogram-input-1');
    if(isNaN(parallelogramFirstInputField) || parallelogramFirstInputField <= 0){
        alert('Please input a valid number.');
        return;
    }
    const previousParallelogramFirstElement = getElementValueById('parallelogram-b-element');
    const newParallelogramFirstElement = parallelogramFirstInputField;
    setTotalElementValueById('parallelogram-b-element', newParallelogramFirstElement)

    const parallelogramSecondInputField = getInputFieldValueById('parallelogram-input-2');
    if(isNaN(parallelogramSecondInputField) || parallelogramSecondInputField <= 0){
        alert('Please input a valid number.');
        return;
    }
    const previousParallelogramSecondElement = getElementValueById('parallelogram-h-element');
    const newParallelogramSecondElement = parallelogramSecondInputField;
    setTotalElementValueById('parallelogram-h-element', newParallelogramSecondElement)

    const parallelogramValue = (newParallelogramFirstElement * newParallelogramSecondElement).toFixed(2);

    displayData(titleName, parallelogramValue);
})
document.getElementById('rhombus-calculate').addEventListener('click', function(){
    serial += 1;

    const titleName = document.getElementById("rhombus").innerText;

    const rhombusFirstInputField = getInputFieldValueById('rhombus-input-1');
    if(isNaN(rhombusFirstInputField) || rhombusFirstInputField <= 0){
        alert('Please input a valid number.');
        return;
    }
    const previousRhombusFirstElement = getElementValueById('rhombus-d1-element');
    const newRhombusFirstElement = rhombusFirstInputField;
    setTotalElementValueById('rhombus-d1-element', newRhombusFirstElement)

    const rhombusSecondInputField = getInputFieldValueById('rhombus-input-2');
    if(isNaN(rhombusSecondInputField) || rhombusSecondInputField <= 0){
        alert('Please input a valid number.');
        return;
    }
    const previousRhombusSecondElement = getElementValueById('rhombus-d2-element');
    const newRhombusSecondElement = rhombusSecondInputField;
    setTotalElementValueById('rhombus-d2-element', newRhombusSecondElement)

    const previousRhombusFixedElement = getElementValueById('rhombus-0.5-element');

    const rhombusValue = (previousRhombusFixedElement * newRhombusFirstElement * newRhombusSecondElement).toFixed(2);

    displayData(titleName, rhombusValue);
})
document.getElementById('pentagon-calculate').addEventListener('click', function(){
    serial += 1;

    const titleName = document.getElementById("pentagon").innerText;

    const pentagonFirstInputField = getInputFieldValueById('pentagon-input-1');
    if(isNaN(pentagonFirstInputField) || pentagonFirstInputField <= 0){
        alert('Please input a valid number.');
        return;
    }
    const previousPentagonFirstElement = getElementValueById('pentagon-p-element');
    const newPentagonFirstElement = pentagonFirstInputField;
    setTotalElementValueById('pentagon-p-element', newPentagonFirstElement)

    const pentagonSecondInputField = getInputFieldValueById('pentagon-input-2');
    if(isNaN(pentagonSecondInputField) || pentagonSecondInputField <= 0){
        alert('Please input a valid number.');
        return;
    }
    const previousPentagonSecondElement = getElementValueById('pentagon-b-element');
    const newPentagonSecondElement = pentagonSecondInputField;
    setTotalElementValueById('pentagon-b-element', newPentagonSecondElement)

    const previousPentagonFixedElement = getElementValueById('pentagon-0.5-element');

    const pentagonValue = (previousPentagonFixedElement * newPentagonFirstElement * newPentagonSecondElement).toFixed(2);

    displayData(titleName, pentagonValue);
})
document.getElementById('ellipse-calculate').addEventListener('click', function(){
    serial += 1;

    const titleName = document.getElementById("ellipse").innerText;

    const ellipseFirstInputField = getInputFieldValueById('ellipse-input-1');
    if(isNaN(ellipseFirstInputField) || ellipseFirstInputField <= 0){
        alert('Please input a valid number.');
        return;
    }
    const previousEllipseFirstElement = getElementValueById('ellipse-a-element');
    const newEllipseFirstElement = ellipseFirstInputField;
    setTotalElementValueById('ellipse-a-element', newEllipseFirstElement)

    const ellipseSecondInputField = getInputFieldValueById('ellipse-input-2');
    if(isNaN(ellipseSecondInputField) || ellipseSecondInputField <= 0){
        alert('Please input a valid number.');
        return;
    }
    const previousEllipseSecondElement = getElementValueById('ellipse-b-element');
    const newEllipseSecondElement = ellipseSecondInputField;
    setTotalElementValueById('ellipse-b-element', newEllipseSecondElement)

    const previousEllipseFixedElement = getElementValueById('ellipse-PI-element');
    const newEllipseFixedElement = 3.1416;
    setTotalElementValueById('ellipse-PI-element', 'PI')

    const ellipseValue = (newEllipseFixedElement * newEllipseFirstElement * newEllipseSecondElement).toFixed(2);

    displayData(titleName, ellipseValue);
})


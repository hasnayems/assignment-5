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
document.getElementById('triangle-calculate').addEventListener('click', function(){
    const triangleFirstInputField = getInputFieldValueById('triangle-input-1');
    const previousTriangleFirstElement = getElementValueById('triangle-b-element');
    const newTriangleFirstElement = triangleFirstInputField;
    setTotalElementValueById('triangle-b-element', newTriangleFirstElement)

    const triangleSecondInputField = getInputFieldValueById('triangle-input-2');
    const previousTriangleSecondElement = getElementValueById('triangle-h-element');
    const newTriangleSecondElement = triangleSecondInputField;
    setTotalElementValueById('triangle-h-element', newTriangleSecondElement)
})
document.getElementById('rectangle-calculate').addEventListener('click', function(){
    const rectangleFirstInputField = getInputFieldValueById('rectangle-input-1');
    const previousRectangleFirstElement = getElementValueById('rectangle-w-element');
    const newRectangleFirstElement = rectangleFirstInputField;
    setTotalElementValueById('rectangle-w-element', newRectangleFirstElement)

    const rectangleSecondInputField = getInputFieldValueById('rectangle-input-2');
    const previousRectangleSecondElement = getElementValueById('rectangle-l-element');
    const newRectangleSecondElement = rectangleSecondInputField;
    setTotalElementValueById('rectangle-l-element', newRectangleSecondElement)
})
document.getElementById('parallelogram-calculate').addEventListener('click', function(){
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
    const pentagonFirstInputField = getInputFieldValueById('pentagon-input-1');
    const previousPentagonFirstElement = getElementValueById('pentagon-p-element');
    const newPentagonFirstElement = pentagonFirstInputField;
    setTotalElementValueById('pentagon-p-element', newPentagonFirstElement)

    const pentagonSecondInputField = getInputFieldValueById('pentagon-input-2');
    const previousPentagonSecondElement = getElementValueById('pentagon-b-element');
    const newPentagonSecondElement = pentagonSecondInputField;
    setTotalElementValueById('pentagon-b-element', newPentagonSecondElement)

})


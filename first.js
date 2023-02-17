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
    const triangleFirstInputField = getInputFieldValueById('rectangle-input-1');
    const previousTriangleFirstElement = getElementValueById('rectangle-w-element');
    const newTriangleFirstElement = triangleFirstInputField;
    setTotalElementValueById('rectangle-w-element', newTriangleFirstElement)

    const triangleSecondInputField = getInputFieldValueById('rectangle-input-2');
    const previousTriangleSecondElement = getElementValueById('rectangle-l-element');
    const newTriangleSecondElement = triangleSecondInputField;
    setTotalElementValueById('rectangle-l-element', newTriangleSecondElement)

})

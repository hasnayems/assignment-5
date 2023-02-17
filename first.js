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

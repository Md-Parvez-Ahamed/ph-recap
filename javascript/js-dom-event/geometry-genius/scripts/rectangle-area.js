console.log("rectangle-area");
function calculateRectangleArea (){
    console.log('inside function');
    const rectangleWidthInput = document.getElementById('rectangle-Width')
    // console.log(rectangleWidthInput);
    const rectangleText = rectangleWidthInput.value;
    // console.log(rectangleText);
    const width = parseFloat(rectangleText)
    console.log(width);

    const rectangleLength = document.getElementById('rectangle-length');
    // console.log(rectangleLength);
    const rectangleLengthText = rectangleLength.value
    // console.log(rectangleLengthText);
    const length = parseFloat(rectangleLengthText)
    console.log(length);
    // display result
    const area = width * length
    console.log(area); 
    const result = document.getElementById('rectangle-area')
    result.innerText = area
}
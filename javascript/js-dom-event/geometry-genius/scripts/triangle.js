console.log('triangle.js');
function calculateTriangleArea(){
    console.log('inside function');
    // Triangle base
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    console.log(base);

    // Triangle high
    const triangleHightInput = document.getElementById('triangle-hight');
    const triangleHightText = triangleHightInput.value;
    const hight = parseFloat(triangleHightText)
    console.log(hight);

    //result
    const area = 0.5*base*hight
    console.log(area);

    //Display result
    const result = document.getElementById('triangle-area')
    result.innerText = area

}
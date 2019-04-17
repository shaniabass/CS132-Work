/**
 * TODO: Write your code here
 */
/**
 * TODO: Write your code here
 */

//check triangle method
function checkTriangle(a,b,c){
  if(a+b <= c ||  a+c <= b  || b+c <= a){
    return "This is not a triangle";
  }
  else {
    return 1;
  }
}

function triangleOutput(){
  const a = parseFloat(document.getElementById('side1').value);
  const b = parseFloat(document.getElementById('side2').value);
  const c = parseFloat(document.getElementById('side3').value);
  if (checkTriangle(a,b,c) === 1 ){
    const type = getTriangleType(a,b,c);
    const [angle1, angle2, angle3] = getTriangleAngles(a,b,c);
    const acute = acuteRightObtuse(a,b,c);
    const perim = perimeter(a,b,c);
    const area = getArea(a,b,c);
    return [" It is " + type, " Its angle1 is: " + angle1 + "°",
    " Its angle2 is: " + angle2 + "°",  " Its angle3 is: " + angle3 + "°"," It is " + acute,
    " Its perimeter is: " + perim + "cm", " Its area is: " + area + "cm³"];
  }
  else{
    return "The given sides do not form a triangle";
  }
}

function getTriangleType(a,b,c){
  return (a===b & b ===c) && "Equilateral" ||
  (a===b || a===c || b===c) && "Isosceles" ||
  (a!==b &&  b!==c && c !== a) && "Scalene";
}

/* acute, right, or obtuse */
function acuteRightObtuse (side1, side2, side3) {
  let sideArray = [side1, side2, side3];
  let maxIndex = 0;
  let maxNum = -10000000;
  for (i = 0; i < 3; i++) {
    if (sideArray[i] > maxNum) {
      maxNum = sideArray[i];
      maxIndex = i;
    }
  }
  let nonMax1 = 0;
  let nonMax2 = 0; //cant reassign let

  switch (maxIndex) {
    case 0:
      nonMax1 = side2;
      nonMax2 = side3;
      break;
    case 1:
      nonMax1 = side1;
      nonMax2 = side3;
      break;
    case 2:
      nonMax1 = side1;
      nonMax2 = side2;
      break;
    default:
      return "Something went wrong (1).";
  }
  let leftEquation = Math.pow(nonMax1, 2) + Math.pow(nonMax2, 2);
  let rightEquation = Math.pow(sideArray[maxIndex], 2);

  if (leftEquation > rightEquation) {
    return "Acute";
  } else if (leftEquation < rightEquation) {
    return "Obtuse";
  } else {
    return "Right";
  }
  return "Something went wrong (2).";
}

function perimeter (side1, side2, side3) {
  perim = side1 + side2 + side3;
  return perim.toString();
}

function getTriangleAngles(a,b,c){
  const angleA1 =  Math.acos(((b*b) + (c*c) - (a*a))/(2*b*c));
  const angleB2 =  Math.acos(((c*c) + (a*a) - (b*b))/(2*c*a));
  const angleC3 =  Math.acos(((a*a) + (b*b) - (c*c))/(2*b*a));

  angleA = angleA1*(180/Math.PI);
  angleB = angleB2*(180/Math.PI);
  angleC = angleC3*(180/Math.PI);

  return [angleA,angleB,angleC];
}

function getArea(a,b,c){
  var p = (a+b+c)/2;
  var a = Math.sqrt(p*(p-a)*(p-b)*(p-c));
  return a;
}

const outputNode = document.getElementById("output");
const form = document.getElementById("triangle");
if (form.addEventListener) {
    form.addEventListener("submit", function(evt) {
        evt.preventDefault();
        const output = triangleOutput();
        const descriptionNode = document.createTextNode(output);
        outputNode.appendChild(descriptionNode);
    }, true);
}




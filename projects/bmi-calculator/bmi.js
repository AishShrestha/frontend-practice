const submit = document.querySelector('input[type="submit"]');

submit.addEventListener('click', (event)=>{
    console.log("clicked");
    event.preventDefault();

  const height = parseFloat( document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);
  const result = document.querySelector('.result')

  if(!height || height <0 || isNaN(height)){
    alert("Please Enter valid height");
  }
  else if(!weight || weight <0 || isNaN(weight)){
    alert("Please Enter valid weight");
  }
  else{
    var bmi = (weight / ((height * height))).toFixed(2);
    console.log(bmi);
    alert(`BMI: ${bmi}`);

  }
  if(bmi < 18.6){
    result.innerHTML = "Underweight";
  }
  else if(bmi >= 18.6 && bmi < 25){
    result.innerHTML = "Normal weight";
  }
  else{
    result.innerHTML = "Overweight";
  }
  
} )
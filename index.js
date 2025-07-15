  function printFormValues(event){
    event.preventDefault();
    var p1Element = document.getElementById('firstName'); 
    var p2Element = document.getElementById('firstLastName'); 
    var p3Element = document.getElementById('age'); 
    var year = 2025;
    var p4Element = year - p3Element.value;
    alert('My name is: ' + p1Element.value + ' ' + p2Element.value + ' and my age is ' +p3Element.value + ' and my bithyear is: ' +p4Element);
}
function resetFormvalues(event){
  document.getElementById('form').reset();
}
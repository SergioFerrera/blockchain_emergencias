function check_available(current){
    current.setCustomValidity('');
    if (current.value>Number(document.getElementById('available_'+current.id[9]).textContent))
        current.setCustomValidity('Excede el número de recursos disponibles');
}
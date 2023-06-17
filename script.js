//your JS code here. If required.

function removeColor() {
    var select = document.getElementById("colorSelect");
	var selectedOption = select.options[select.selectedIndex];
	select.removeChild(selectedOption);
} 

// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
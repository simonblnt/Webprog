var checkbox_count;
var radio_count;

function generate_second(){
	checkbox_count = parseInt(document.getElementById("checkbox_count").value);
	console.log("Checkbox count: " + checkbox_count);
	console.log(typeof(checkbox_count));
	
	radio_count = parseInt(document.getElementById("radio_count").value);
	console.log("Radio count: " + radio_count);
	console.log(typeof(radio_count));
	
	
	document.getElementById("first").style.display="none";
	
	document.getElementById("second").style.display="block";
	
	var block_content = '';
	
	for (i = 1; i <= checkbox_count; i++){
		block_content += "<div>" + 
							"<label>Az " + i + ". checkbox szövege: </label>" +
							"<input type='checkbox' id='checkbox_" + i + "_text'></input>" + 
							"<label>Legyen bepipálva?</label>" + 
							"<input type='checkbox' id='checkbox_" + i + "_checked'></input>" +
						 "</div>";
	}
	
	block_content += "<br>";
	
	for (i = 1; i <= radio_count; i++){
		block_content += "<div>" + 
							"<label>Az " + i + ". radiogomb felirata: </label>" +
							"<input type='text' id='radio" + i + "_text'></input>"
						 "</div>";
	}
	
	block_content += "Hányadik radio legyen kijelölve?";
	block_content += "<select id='select_radio'>";
	
	for (i = 1; i <= radio_count; i++){
		block_content += "<option id='radio_" + i + "' value='" + i + "'>" + i + "</option>";
	}
	block_content += "</select>";
	
	block_content += "<button onclick='generate_third()'>Generate!</button>";
	
	
	document.getElementById("second").innerHTML = block_content;
}

function generate_third(){
	//1. kiolvasni a változók tartalmát
	//2. elrejteni a 2. divet
	//3. megjeleníteni a 3. divet
	//4. legenerálni a tartalmat egy string változóba
	//5. átadni a 3. keretnek a megjelenítendő tartalmat
}






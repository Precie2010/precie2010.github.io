//declare variables
var color,height,width;

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function(event){
	event.preventDefault();
	// Select size input
	height = $("#inputHeight").val();
	width = $("#inputWeight").val();
	makeGrid(height,width);
	
})
//makeGrid function()
function makeGrid(h,w) {
let reset = $('tr').remove();
const table = $('table');
for(let i=0; i<h ;i++){
	table.append('<tr id=row'+ i +'></tr>');
	for(let j=0; j<w; j++){
		$("#row"+ i).append('<td></td>');
	}
}
 $("td").on("click",function(){
 	// Select color input
 	color = $("#colorPicker").val();
	$(this).attr("style","background-color:" + color);
});
}



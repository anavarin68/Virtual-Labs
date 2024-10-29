//*--Ready function---------
var c,ctx,wire_ctx,scene;
var control_labels,control_values,scene_1_lbl;
var ammeter_range,galvo_range,galvo_resistance;
var radius,density,density_values;
var Rh,droped,material_index,wire_fname;
var connectionWires,total_connectio;
var wireColor,shunt_wire_color,galvo_index;
var I,E,S,Ig,I_values,k,r,A,l;
var I_dash, Ig_dash, n_dash;
var wire_anim,wire_length,helpArray;
var rotate_factor,ammeter_rotate_factor;
var gt=$;
function ammeterRange(value){
	ammeter_range = value;
	I = I_values[ammeter_range];
	$("#ammeter").attr('src',simPath+'/images/ammeter_'+value+'.png');
	calculations();
	if(value == 2){
		ammeter_rotate_factor = (2.8*5*parseFloat(I_dash.toFixed(1))*10);
	}else{
		ammeter_rotate_factor = (2.8*parseFloat(I_dash.toFixed(1))*10);
	}
	if(ammeter_range == 1){
		needleRotation('#ammeter_needle',-45);
	}else{
		needleRotation('#ammeter_needle',-75);
	}
}
function galvanoRange(value){
	galvo_index = value;
	galvo_range = galvano_ranges[value];
	$("#galvano").attr('src',simPath+'/images/galvano_'+value+'.png');
	calculations();
	if(value == 0){
		rotate_factor = (2.8/2*parseFloat(n_dash.toFixed(1)));
	}else{
		rotate_factor = (2.8*parseFloat(n_dash.toFixed(1)));
	}
}
function galvanoResistance(value){
	galvo_resistance = galvano_resistance[value];	
	calculations();
}
function setMeterial(value){
	material_index = value;
	$("#wire_resistance").attr('src',simPath+"/images/"+wire_fname[value]+".png");
	density =density_values[value];
	if(value == 0){
		r = 0.0001;
		$('#radius').html("0.1mm");
	}else{
		r = 0.0002;
		$('#radius').html("0.2mm");
	}
	calculations();
	drawWire(shunt_wire_color[material_index],300);
}
function setRheoResistance(value){
	Rh = parseInt(value);
	$("#rheo_resistance_val").html(Rh+"&#937;")
	$("#rheo_move").css({'left':(365 + ((Rh-1) * 11.5)) + 'px'});
	calculations();
	ammeterRange(ammeter_range);
	galvanoRange(galvo_index);
	$("#ammeter_reding").html(I_dash.toFixed(2));
	$("#galvo_reding").html(n_dash.toFixed(2));
	needleRotation('#galvo_needle',rotate_factor);
	if(ammeter_range == 1){
		needleRotation('#ammeter_needle',-45+ammeter_rotate_factor);
	}else{
		needleRotation('#ammeter_needle',-75+ammeter_rotate_factor);
	}
}
function needleRotation(needle,angle){
	$(needle).css({'-ms-transform': 'rotate('+angle+'deg)','-moz-transform': 'rotate('+angle+'deg)','-o-transform': 'rotate('+angle+'deg)','-webkit-transform': 'rotate('+angle+'deg)','transform': 'rotate('+angle+'deg)'});
}
function insertKey(){
	$("#key").attr('disabled',true);
	$("#key_img").draggable({disabled:true});
	$("#key_img").css({'top':'234px'});
	ammeterRange(ammeter_range);
	galvanoRange(galvo_index);
	$("#rheo_resistance").attr('disabled',false);
	$("#rheo_resistance").removeClass('dim');
	$("#rheo_resistance").addClass('bright');
	$("#ammeter_reding").html(I_dash.toFixed(2));
	$("#galvo_reding").html(n_dash.toFixed(2));
	needleRotation('#galvo_needle',rotate_factor);
	if(ammeter_range == 1){
		needleRotation('#ammeter_needle',-45+ammeter_rotate_factor);
	}else{
		needleRotation('#ammeter_needle',-75+ammeter_rotate_factor);
	}
}
function showHidediagram(value){
	if(value.checked){
		$("#cir_diagram").show();
	}else{
		$("#cir_diagram").hide();
	}
}
function drawWire(wireColor,endpoint){
	wire_ctx.clearRect(10, 20, 290, 60);
	wire_ctx.strokeStyle=wireColor;
	wire_ctx.beginPath();
	wire_ctx.moveTo(11, 68);
	wire_ctx.lineTo(wire_length,68);
	wire_ctx.stroke();
	wire_ctx.closePath();
	if(endpoint >= wire_length){
		clearTimeout(wire_anim);
	}else{
		wire_anim = setTimeout(function(){
			wire_length--;
			drawWire(wireColor,endpoint);
		},20);
	}
}
function calculations(){
	S = parseFloat( (1 / ( (I / E) - (1 / galvo_resistance) )).toFixed(2));
	Ig = (I * S) / (galvo_resistance + S);
	k = Ig / galvo_range;
	A = 3.14 * r * r;
	l = (A / density) * S;
	I_dash = E / (Rh + ( (galvo_resistance * S) / (galvo_resistance + S) ));
	Ig_dash = (I_dash * S) / (galvo_resistance + S);
	n_dash = Ig_dash / k;
	$("#k").html(k.toFixed(9));
	$("#ig").html("nk");
	$("#density_value").html(density);
}
window.onload = function() { 
	
	document.getElementById("expName").innerHTML=gt.gettext("Conversion of Galvanometer to Ammeter");
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	var c = document.getElementById("connectionDrawing");
	var wire_c = document.getElementById("shunt_wire");
	ctx = c.getContext("2d");
	wire_ctx = wire_c.getContext("2d");
	wire_ctx.lineWidth=8;
	control_labels=[gt.gettext("Ammeter range(I):"),gt.gettext("Galvanometer resistance(G):"),gt.gettext("Galvanometer range(n):"),
	gt.gettext("Select material:"),gt.gettext("Cell voltage: 2V"),gt.gettext("Radius of the wire(r):"),gt.gettext("Insert shunt resistance"),
	gt.gettext("Insert key"),gt.gettext("Show/hide circuit diagram"),gt.gettext("Reset"),gt.gettext("Rheostat resistance:"),gt.gettext("Proceed")];
	scene_1_lbl = [gt.gettext("Figure of merit(k) = "),gt.gettext("Ig = "),gt.gettext("S = "),gt.gettext("Density of the material(&rho;) ="),gt.gettext("Length of the wire(l) = "),
	gt.gettext("Submit")];
	control_values=[1,10];
	ammeter_ranges = ["5A","3A","1A"];
	galvano_resistance = [60,100,120];
	galvano_ranges = [50,30,20];
	I_values = [5,3,1];
	E = 2;
	connectionWires = ['battery_key','key_ammeter','ammeter_glavano','galvano_rheo','rheo_battery'];
	//material_type = ["Platinum","Manganin","Nichrome","Constantan"];
	material_type = [gt.gettext("Platinum"),gt.gettext("Manganin"),gt.gettext("Nichrome"),gt.gettext("Constantan")];
	wire_fname = ["platinum","magnanin","nichrome","constantan"];
	helpArray=[gt.gettext('Enter the calculated<br>value of above equation.'),gt.gettext('Click on submit button.'),gt.gettext('Drag and connect the terminal</br>of each apparatus as shown</br>in the circuit diagram.'),gt.gettext('Insert shunt resistance.'),gt.gettext('Insert the key.'),gt.gettext('Set  rheostat resistance by adjusting respective slider.')];
	wireColor = ['#FF0000','#000000'];
	shunt_wire_color = ['#CED7E3','#DF6D49','#C2A9A1','#F8E8E8'];
	density_values = [0.000000106,0.000000482,0.0000011,0.00000049];
	radius = 0.1+"mm";
	mirror_flength = [];
	
	function initVariables(){
		G = [60,100,120];
		density =density_values[0];
		ammeter_range = 0;
		galvo_range = galvano_ranges[0];
		galvo_resistance = galvano_resistance[0];
		Rh = 1;
		material_index = 0;
		galvo_index = 0;
		I = I_values[ammeter_range];
		r = 0.0001;
		droped = false;
		wire_length = 300;
		scene = 1;
		calculations();
	}
	initVariables();
	$(document).ready(function() {
		mainTop=$('#mainDiv').position().top;
		mainLeft=$('#mainDiv').position().left;	
		$('#mainDiv').mousedown(function(event){event.preventDefault();});	
		addLabel();
		addintoDropDown( $('#ammeter_range'),ammeter_ranges);
		addintoDropDown( $('#galvano_resistance'),galvano_resistance);
		addintoDropDown( $('#galvano_range'),galvano_ranges);
		addintoDropDown( $('#material_type'),material_type);
		//combo_sliderchange();
		function addLabel(){//Function for adding label for all controls---	
			$('#ammeter_range_lbl').html(control_labels[0]);
			$('#galvano_resistance_lbl').html(control_labels[1]);
			$('#galvano_range_lbl').html(control_labels[2]);
			$('#material_type_lbl').html(control_labels[3]);
			$('#cell_voltage_lbl').html(control_labels[4]);
			$('#radius_lbl').html(control_labels[5]);
			$('#radius').html(radius);
			$('#rheo_resistance_lbl').html(control_labels[10]);
			$('#rheo_resistance_val').html(control_values[0]+"&#937");
			$('#rheo_resistance_min_lbl').html(control_values[0]);
			$('#rheo_resistance_max_lbl').html(control_values[1]);
			$('#shunt_resistance').attr('value',control_labels[6]);
			$('#key').attr('value',control_labels[7]);
			$('#show_hide_txt').html( control_labels[8]);
			$('#reload').attr('value',control_labels[9]);
			$("#merit_txt").html(scene_1_lbl[0]);
			$("#ig_txt").html(scene_1_lbl[1]);
			$("#s_txt").html(scene_1_lbl[2]);
			$("#s").html("Ig(G) / (I - Ig)");
			$("#density_txt").html(scene_1_lbl[3]);
			$("#l_txt").html(scene_1_lbl[4]);
			$("#submit_1_txt").html(scene_1_lbl[5]);
			$("#proceed_txt").html(control_labels[11]);
			$("#popup_msg").html(gt.gettext("Enter the value rounded in two decimal places."))
		}
		function addintoDropDown(getId,valueSet){//Function for adding option in combo box---		
			var selected = getId;
			$.each(valueSet, function(val, text) {
			selected.append($('<option></option>').val(val).html(text));});			
		}
		$("#key_img").draggable({containment:"#canvasBox",
			revert:function(){
				if(!droped){
					$("#key_img").css({
						left:'77px',
						top:'207px'		
					});
				}
			},
		});
		$("#key_img").draggable({disabled:true});
		$("#key_drop").droppable({accept:'#key_img',
			drop:function(){
				droped=true;
				$("#key_img").draggable({disabled:true});
				insertKey();
			}
		});
		$("#s_input").keyup(function(){
			if($("#s_input").val().length == 0){
				$("#submit_1").unbind('click');
				$("#submit_1").css({'opacity':0.4});
				$("#check_mark,#next").hide();
				$("#ammeter_range,#galvano_resistance,#galvano_range").attr('disabled',false);
				$("#ammeter_range,#galvano_resistance,#galvano_range").removeClass('dim');
				$("#ammeter_range,#galvano_resistance,#galvano_range").addClass('bright');
			}else{
				$("#submit_1").css({'opacity':1});
				$("#submit_1").click(function(){
					var user_s_value = $("#s_input").val();
					if(user_s_value == S){
						$("#check_mark").attr('src',simPath+'/images/correct.png');
						$("#next").show();
						$("#ammeter_range,#galvano_resistance,#galvano_range").attr('disabled',true);
						$("#ammeter_range,#galvano_resistance,#galvano_range").addClass('dim');
						$("#ammeter_range,#galvano_resistance,#galvano_range").removeClass('bright');
					}else{
						$("#popup").show();setTimeout(function(){$("#popup").hide()},1700);
						$("#check_mark").attr('src',simPath+'/images/wrong.png');
						$("#next").hide();
						$("#ammeter_range,#galvano_resistance,#galvano_range").attr('disabled',false);
						$("#ammeter_range,#galvano_resistance,#galvano_range").removeClass('dim');
						$("#ammeter_range,#galvano_resistance,#galvano_range").addClass('bright');
					}
					$("#check_mark").show();
				});
			}
		});
		$("#next").click(function(){
			$("#calc_scene_1").hide();
			$("#calc_scene_2").show();
			$("#popup").hide();
			$("#help_elem_1").css({'left':'220px','top':'95px'});
			$("#help_elem_2").css({'left':'210px','top':'114px'});
			$("#popup").css({'left':'216px','top':'11px'});
			trip.stop();
			helpArray[1] = "";
			helpArray[1] = gt.gettext("Click on submit button and then click on</br>'Proceed' button, when it get visible.")
		});
		$("#l_input").keyup(function(){
			if($("#l_input").val().length == 0){
				$("#submit_2").unbind('click');
				$("#submit_2").css({'opacity':0.4});
				$("#check_mark_2").hide();
				$("#proceed").hide();
			}else{
				$("#submit_2").css({'opacity':1});
				$("#submit_2").click(function(){
					var user_l_value = $("#l_input").val();
					if(user_l_value == parseFloat(l.toFixed(2))){
						$("#check_mark_2").attr('src',simPath+'/images/correct.png');
						var wire_legth = (l * 100).toFixed(1);
						drawWire(shunt_wire_color[material_index],10+(wire_legth * 2.8));
						$("#proceed").show();
					}else{
						$("#popup").show();setTimeout(function(){$("#popup").hide()},1700);
						$("#check_mark_2").attr('src',simPath+'/images/wrong.png');
						wire_ctx.clearRect(10, 20, 290, 60);
						$("#proceed").hide();
					}
					$("#check_mark_2").show();
				});
			}
		});
		$("#proceed").click(function(){
			scene = 2;
			$("#popup").hide();
			$("#scene_1,#whiteboard").hide();
			$("#scene_2").show();
			$("#material_type").addClass('dim');
			$("#material_type").removeClass('bright');
			$("#material_type").attr('disabled',true);
			trip.stop();
		});
		
		drawWire(shunt_wire_color[material_index],300);
		connector('#battery_red','#switch_T1','#battery_key',wireColor[0]);
		connector('#switch_T1','#battery_red','#battery_key',wireColor[0]);
		connector('#switch_T2','#ammeter_black','#key_ammeter',wireColor[1]);
		connector('#ammeter_black','#switch_T2','#key_ammeter',wireColor[1]);
		connector('#ammeter_red','#galvo_black','#ammeter_glavano',wireColor[1]);
		connector('#galvo_black','#ammeter_red','#ammeter_glavano',wireColor[1]);
		connector('#galvo_red','#rheo_top','#galvano_rheo',wireColor[0]);
		connector('#rheo_top','#galvo_red','#galvano_rheo',wireColor[0]);
		connector('#rheo_bottom','#battery_black','#rheo_battery',wireColor[1]);
		connector('#battery_black','#rheo_bottom','#rheo_battery',wireColor[1]);

		function connector(startPoint,endPoint,connector,wireColor){
			var elemX,elemY
			$(startPoint).draggable({containment:"#canvasBox",
				revert:function(){
					if(!droped){
						ctx.clearRect(0,0,570,345);
						$(startPoint).css({
							left:elemX,
							top:elemY		
						});
						$(endPoint).css({'opacity':0});
					}
				},
				start:function(){
					elemX=$(startPoint).css('left');
					elemY=$(startPoint).css('top');
					droperInitPos=$(startPoint).css('left');
					startX=(parseInt(elemX.substring(0, elemX.length-2))/2)+(parseInt(elemX.substring(0, elemX.length-2))/35)+7;
					startY=(parseInt(elemY.substring(0, elemY.length-2))/2)-(parseInt(elemY.substring(0, elemY.length-2))/16)+5;
					$(endPoint).css({'opacity':0.5});
					},
				stop:function(){
					
				},
				drag:function(){
					var elemXX=$(startPoint).css('left');
					var elemYY=$(startPoint).css('top');
					mouseX=(parseInt(elemXX.substring(0, elemXX.length-2))/2)+(parseInt(elemXX.substring(0, elemXX.length-2))/35)+10;
					mouseY=(parseInt(elemYY.substring(0, elemYY.length-2))/2)-(parseInt(elemYY.substring(0, elemYY.length-2))/16)+8;
					ctx.clearRect(0,0,570,345);
					ctx.strokeStyle=wireColor;
					ctx.beginPath();
					ctx.moveTo(startX, startY);
					ctx.lineTo(mouseX,mouseY);
					ctx.stroke();
				}
			});
			$(endPoint).droppable({accept:startPoint,
				drop:function(){
					droped=true;
					$(startPoint).css({
						left:$(endPoint).css('left'),
						top:$(endPoint).css('top')		
					});
					$(endPoint).draggable('disable');
					$(startPoint).draggable('disable');
					$(endPoint+','+startPoint).css({'cursor':'default'});
					$(endPoint).hide();
					$(startPoint).hide();
					ctx.clearRect(0,0,570,345);
					$(connector).show();
					droped=false;
					connectedWires=0;
					for(i=0;i<connectionWires.length;i++){
						if($("#"+connectionWires[i]).css('display')=='block'){
							connectedWires++;
						}else{
							break;
						}	
					}
					if(connectionWires.length==connectedWires){
						$("#key_img").draggable({disabled:false});
						$("#key").attr({'disabled':false});
					}
					
				}
			});
		}
		function resetItems(){//resetting slider value and appartus position
			initVariables();
			
		}
		$("#reload").click(function(){//*--Function to click reload button to reset all events---
			window.location.reload();	   
		});
	});	 			
};


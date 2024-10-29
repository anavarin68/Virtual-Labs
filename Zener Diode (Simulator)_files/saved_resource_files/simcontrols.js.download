//*--Ready function---------
var c,ctx;
var control_labels,control_values;
var diode_type,diode_values;
var Rh,Vz,Vin,V_z,y_mA,V_Rs;
var volt_Rs,volt_zener,t_current;
var droped,connectionWires,key_droped;
var gt=$;
function setDiode(value){
	diode_type = value;
	Vz = diode_values[diode_type];
	$("#rheo_resistance").attr('value','1');
	if(key_droped){
		setRheoResistance(1);
	}	
}
function setRheoResistance(value){
	Rh = parseInt(value);
	Vin = (Rh * 12) / 100;
	V_z = Vin < diode_values[diode_type] ? Vin : diode_values[diode_type];
	$("#rheo_resistance_val").html(value+"&#937;");
	$("#rheo_move").css({'left':(366 + ((Rh-1) * 1)) + 'px'});
	calculations();
}
function calculations(){
	V_Rs = Vin - V_z;
	y_mA = 1 / (190*(1 - Math.exp(Vz/Vin) ));
	I_A = Vin < Vz ? (-1 * y_mA) : (V_Rs / 200);
	volt_Rs = I_A * 200;
	volt_zener = Vin - volt_Rs;
	$("#voltmeter_reding").html(volt_zener.toFixed(3));
	$("#ammeter_reding").html(I_A.toFixed(3));
}
function insertKey(){
	key_droped = true;
	$("#ammeter_reding,#voltmeter_reding").show();
	$("#key").attr('disabled',true);
	$("#key").draggable({disabled:true});
	$("#key").css({'top':'111px','left':'250px'});
	$("#rheo_resistance").attr('disabled',false);
	$("#rheo_resistance").removeClass('dim');
	$("#rheo_resistance").addClass('bright');
	setRheoResistance(1);
}
function showHidediagram(value){
	if(value.checked){
		$("#cir_diagram").show();
	}else{
		$("#cir_diagram").hide();
	}
}
window.onload = function() { 
	document.getElementById("expName").innerHTML=gt.gettext("Zener Diode Characteristics");
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
	var c = document.getElementById("connectionDrawing");
	ctx = c.getContext("2d");
	control_labels=[gt.gettext("Select diode:"),gt.gettext("Rheostat resistance:"),gt.gettext("Show/hide circuit diagram"),gt.gettext("Reset")];
	control_values=[1,100];
	diode_types = ["BZX79C5V6","BZX5C7V5","1N4733A","1N4739A","1N4729A","ZD5234A"];
	diode_values = [5.6,7.5,5.1,9.1,3.6,6.2];
	connectionWires = ['battery_switch','switch_rheo','resistence_rheo','ammeter_resistence','volt_ammeter','ammeter_diode','volt_diode','volt_battery','volt_rheo'];
	wire_fname = ["platinum","magnanin","nichrome","constantan"];
	helpArray=[gt.gettext('Drag and connect the terminal</br>of each apparatus as shown</br>in the circuit diagram.'),gt.gettext('Insert the key.')];
	wireColor = ['#FF0000','#000000'];
	$("#rheo_resistance").addClass('dim');
	function initVariables(){
		droped = false;
		key_droped = false;
		diode_type = 0;
		Vz = diode_values[diode_type];
	}
	initVariables();
	$(document).ready(function() {
		mainTop=$('#mainDiv').position().top;
		mainLeft=$('#mainDiv').position().left;	
		$('#mainDiv').mousedown(function(event){event.preventDefault();});	
		addLabel();
		addintoDropDown( $('#diode_type'),diode_types);
		//combo_sliderchange();
		function addLabel(){//Function for adding label for all controls---	
			$('#diode_type_lbl').html(control_labels[0]);
			$('#rheo_resistance_lbl').html(control_labels[1]);
			$('#rheo_resistance_val').html(control_values[0]+"&#937");
			$('#rheo_resistance_min_lbl').html(control_values[0]);
			$('#rheo_resistance_max_lbl').html(control_values[1]);
			$('#show_hide_txt').html( control_labels[2]);
			$('#reload').attr('value',control_labels[3]);
			
		}
		function addintoDropDown(getId,valueSet){//Function for adding option in combo box---		
			var selected = getId;
			$.each(valueSet, function(val, text) {
			selected.append($('<option></option>').val(val).html(text));});			
		}
		$("#key").draggable({containment:"#canvasBox",
			revert:function(){
				if(!droped){
					$("#key").css({
						left:'250px',
						top:'95px'		
					});
				}
			},
		});
		$("#key").draggable({disabled:true});
		$("#key_drop").droppable({accept:'#key',
			drop:function(){
				droped=true;
				$("#key").draggable({disabled:true});
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
		connector('#battery_red','#switch_T1','#battery_switch',wireColor[0]);
		connector('#switch_T1','#battery_red','#battery_switch',wireColor[0]);
		connector('#switch_T2','#rheo_bottom_lft','#switch_rheo',wireColor[1]);
		connector('#rheo_bottom_lft','#switch_T2','#switch_rheo',wireColor[1]);
		connector('#rheo_top','#resist_rgt','#rheo_resist',wireColor[1]);
		connector('#resist_rgt','#rheo_top','#rheo_resist',wireColor[1]);
		connector('#resist_lft','#ammeter_red','#resist_ammeter',wireColor[0]);
		connector('#ammeter_red','#resist_lft','#resist_ammeter',wireColor[0]);
		connector('#ammeter_black','#volt_red','#ammeter_volt',wireColor[0]);
		connector('#volt_red','#ammeter_black','#ammeter_volt',wireColor[0]);
		connector('#ammeter_black_diode','#diode_neg','#ammeter_diode',wireColor[1]);
		connector('#diode_neg','#ammeter_black_diode','#ammeter_diode',wireColor[1]);
		connector('#diode_pos','#volt_black','#diode_volt',wireColor[1]);
		connector('#volt_black','#diode_pos','#diode_volt',wireColor[1]);
		connector('#volt_black_rheo','#rheo_bottom_rgt','#volt_rheo',wireColor[1]);
		connector('#rheo_bottom_rgt','#volt_black_rheo','#volt_rheo',wireColor[1]);
		connector('#volt_black_cell','#battery_black','#volt_battery',wireColor[1]);
		connector('#battery_black','#volt_black_cell','#volt_battery',wireColor[1]);

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
						if($("#"+connectionWires[i]).css('display')!='none'){
							connectedWires++;
						}else{
							break;
						}	
					}
					if(connectionWires.length==connectedWires){
						$("#key").draggable({disabled:false});
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


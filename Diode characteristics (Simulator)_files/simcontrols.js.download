var lablelContent=[];// Variable declaration
var mainTop,mainLeft;
var bgCanvas = document.getElementById('wireCanvas');// canvas for draw image
bgCanvas.width = 568;
bgCanvas.height = 440;
var bgCanvasctx = bgCanvas.getContext('2d');
var WireCanvas = document.getElementById('wireCanvas');
WireCanvas.width = 568;
WireCanvas.height = 440;
var WireCanvasctx = WireCanvas.getContext('2d');
var canvasOffset=$("#wireCanvas").offset();
var degs,Diode_Imgs;
var function_grp,dividarr=[],wirediv_prop,wire_drawpos,end_pointarr,wire_Imgs,reading_prop;
var droped=false;
var drag_nos=0;
var vol_reading,combo_valuess,Sli_id1,Sli_id2,combo_valuess1;
var initial_roomTemp,Temp300,Temp2,TempT,Qv_Nkt,Amm_reading;
var q=1.602*Math.pow(10,-19),n=2,k=1.38*Math.pow(10,-23),Help_msg;

window.onload = function init(){// function called on loading..
	$('#expName').html(gt.gettext("Diode Characteristics"));/*--------------- Experiment heading--------------- */
	$('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));/*- Template icon labels--------------- */	
	Combo_vals=[[gt.gettext('Forward-biasing'),gt.gettext('Reverse-biasing')],[gt.gettext('IN 4007'),gt.gettext('IN 4004 1A'),gt.gettext('IN 3891'),gt.gettext('IN 5711'),gt.gettext('IN 270'),gt.gettext('IN 34 A')]];
	lablelContent=[gt.gettext('Characteristics of diode:'),gt.gettext('Select diode:'),gt.gettext('Rheostat resistance:'),gt.gettext('Room Temperature:'),gt.gettext('Reset'),gt.gettext('Show circuit diagram'),gt.gettext('Show result')];
	wirediv_prop=[[82,82,139,139,139,105,261,256,261,120,158,121,140,200,199,259],[201,201,175,175,175,280,416,298,497,455,277,386,51,54,131,251]];
	startpint_arr=['Connectiondiv_2','Connectiondiv_2','Connectiondiv_5','Connectiondiv_5','Connectiondiv_5','Connectiondiv_6','Connectiondiv_7','Connectiondiv_8','Connectiondiv_9','Connectiondiv_10','Connectiondiv_11','Connectiondiv_12','Connectiondiv_13','Connectiondiv_14','Connectiondiv_15','Connectiondiv_16'];
	end_pointarr=['Connectiondiv_6','Connectiondiv_7','Connectiondiv_8','Connectiondiv_9','Connectiondiv_10','Connectiondiv_1','Connectiondiv_2','Connectiondiv_3','Connectiondiv_4','Connectiondiv_5','Connectiondiv_12','Connectiondiv_11','Connectiondiv_14','Connectiondiv_13','Connectiondiv_16','Connectiondiv_15'];
	wire_Imgs=['Rheo_diodeImg','Rheostat_ammeterImg','Rheostatfront_keyImg','Rheostatfront_ammeterImg','Rheostatfront_voltmeterImg','Rheo_diodeImg','Rheostat_ammeterImg','Rheostatfront_keyImg','Rheostatfront_ammeterImg','Rheostatfront_voltmeterImg','Diode_voltmeterImg','Diode_voltmeterImg','Rheostatfront_batteryImg','Rheostatfront_batteryImg','Battery_keyImg','Battery_keyImg']
	wire_drawpos=[[217,217,185,185,185,291,424,308,506,467,288,397,59,64,140,261],[93,93,155,155,155,135,262,262,260,123,166,122,158,202,202,262]]
	reading_prop=[434,434];
	var circuit_diag=['circuitdiagram','Circuitdiagram_2']
	initial_roomTemp=[19*Math.pow(10, -9),76*Math.pow(10, -9),63*Math.pow(10, -9),315*Math.pow(10, -9),100*Math.pow(10, -6),500*Math.pow(10, -6)]
	Help_msg=[gt.gettext('Drag and connect the terminal</br>of each apparatus as shown</br>in the circuit diagram.'),gt.gettext('Drag the switch to insert key.'),gt.gettext('Drag the rheostat knob or</br> the slider to change the</br> resistance value')]
	Diode_Imgs=['Diode_forward','Diode_Reverse'];
	$('#selectDioLbl').html(lablelContent[0]);
	$("#selectDioLbl1").html(lablelContent[1]);	
	$("#Rheostat_label").html(lablelContent[2]);	
	$("#Temperature_label").html(lablelContent[3]);	
	$('#resetBtn').attr('value',lablelContent[4]);	
	$('#checkLbl').html(lablelContent[5]);	
	$("#resultLabel").html(lablelContent[6]);	
	$("#Rheostat_vals").html(1+'&#8486;');
	$("#Temperature_vals").html(10+'&deg;C');
	$(document).ready(function() {	
		mainTop=$('#mainDiv').position().top;
		mainLeft=$('#mainDiv').position().left;	
		show_circuit();
		$("#resistance_frm :input,#Insrtkey1,#Insrtkey2,#showAns").prop("disabled", true);
		addintoDropDown($('#Diodetype'),Combo_vals[0]);
		addintoDropDown($('#Diodetype2'),Combo_vals[1]);	
		$('#popup_txt').html(gt.gettext("Insert key"));
		function addintoDropDown(getId,valueSet){//Function to add values into combobox------
			$.each(valueSet, function(val, text) {getId.append($('<option ></option>').val(val).html(text));});
		}
		$(".dropBox").change(function(){//combo box change 
			function_grp.Calculation_func()
			if(this.id=="Diodetype"){
			$('#Diodeforward_img').attr('src',simPath+'images/'+Diode_Imgs[this.value]+'.png');
			$('#circuitdiaImg').attr('src',simPath+'images/'+circuit_diag[$("#Diodetype").val()]+'.png');
			}
		
		});
		function show_circuit(){
		$("#circuitCheckBox").change(function(){
		$("#circuitdiaDiv").toggle();
		});}
		$(".rangeSlider").on('input', function() {//on change function of slider.
		function_grp.Calculation_func()
			if(this.id=='Rheostat_'){
				degs='&#8486;';
				var left_var=parseFloat(this.value*3.3).toFixed(1);
				$('#rheostatmovemnt_img').css('left',left_var+'px');
				Rheo_movement();	
			}
			else{
			degs='&deg;C';
			}
		$("#"+this.id+"vals").html(this.value+degs);
		});
		function Rheo_movement(){//Movement of Rheostatcalculation
		rheoRes=(($("#rheostatmovemnt_img").position().left).toFixed(1));
		rheoRes=parseInt(rheoRes/3.3)

		if(rheoRes==0){
			rheoRes=1;
		}
		}

		function_grp={
			Div_creation:function(){//dynamic div creation for nodes
				var d_id;
				for(var i=0;i<16;i++){	
					d_id = i+1;
					$( "<div id='Connectiondiv_"+d_id+"' class='connection_prop'></div>" ).insertBefore( "#circuitCheckBox");
					dividarr.push('Connectiondiv_'+d_id);	
				}
				$.each(dividarr, function(val) {
					$("#"+dividarr[val]).css({top:mainTop+wirediv_prop[0][val],left:mainLeft+wirediv_prop[1][val]});
					function_grp.Drag_wire(dividarr[val],val)
				});
			},
			Drag_wire:function(Drag_id,vals1){//Drag function of wire
			var elemX,elemY,droperInitPos;

			$("#"+Drag_id).css({'cursor':'pointer'})
			$("#"+Drag_id).draggable({disabled:false,
			revert:function(e){
				if(!droped){
					function_grp.clearBg();
					$("#"+Drag_id).css({left:elemX,top:elemY});
				}
				},
				start:function(e){
						//console.log(Drag_id)
				elemX=$("#"+Drag_id).css('left');
				elemY=$("#"+Drag_id).css('top');
				droperInitPos=$("#"+Drag_id).css('left');
				},
				drag:function(e){
					if(Drag_id==dividarr[0]||Drag_id==dividarr[1]||Drag_id==dividarr[5]||Drag_id==dividarr[6]||Drag_id==dividarr[12]||Drag_id==dividarr[13]||Drag_id==dividarr[10]||Drag_id==dividarr[11]){
					stroke_var='red';}
					 else{
					 	stroke_var='black';
					 }	
					 function_grp.DrawWire(e,wire_drawpos[0][vals1],wire_drawpos[1][vals1]);	
				},
			});
			$("#"+end_pointarr[vals1]).droppable({accept:'#'+startpint_arr[vals1],
			drop:function(){
				droped=true;
				drag_nos++;
				multiple_connection()
				multiple_connection('Connectiondiv_2');
				multiple_connection('Connectiondiv_5');
				
			function multiple_connection(id){//from same point to different connection divs
			if(Drag_id==id){//starting point
			$('#'+Drag_id).show();
			$('#'+Drag_id).draggable('enable');
			$("#"+end_pointarr[vals1]).draggable('disable');
			$("#"+end_pointarr[vals1]).hide();
			}
			else if(end_pointarr[vals1]==id){//ending point
			$('#'+end_pointarr[vals1]).show();
			$('#'+end_pointarr[vals1]).draggable('enable');
			$('#'+Drag_id).hide();	
			$('#'+Drag_id).draggable('disable');
			}
			else{
			$('#'+Drag_id).hide();	
			$('#'+Drag_id).draggable('disable');
			$("#"+end_pointarr[vals1]).draggable('disable');
			$("#"+end_pointarr[vals1]).hide();
			}}
				//$("#"+end_pointarr[vals1]+','+'#'+Drag_id).css({'cursor':'default'});
				droped=false;
				$('#'+wire_Imgs[vals1]).css({'display':'block'});
				if(($("#"+wire_Imgs[0]).css('display')=='block')&&($("#"+wire_Imgs[1]).css('display')=='block')){
				$('#Connectiondiv_2').hide();
				$('#Connectiondiv_2').draggable('disable');
				}
				if(($("#"+wire_Imgs[2]).css('display')=='block')&&($("#"+wire_Imgs[3]).css('display')=='block')){
					if(($("#"+wire_Imgs[4]).css('display')=='block')){
					$('#Connectiondiv_5').hide();
					$('#Connectiondiv_5').draggable('disable');
					}
				}
				if($("#"+wire_Imgs[vals1]).css('display')=='block'){
				drag_nos++;}
				if(wire_Imgs.length==drag_nos){
					
					$("#popupMsg").css({'display':'block'})
						$("#switchKeyDiv").css({'cursor':'pointer'})
						function_grp.Key_drag();
				}
			}
			});
		},
			Key_drag:function(){
			$("#switchKeyDiv").draggable({disabled:false,
				stop:function(e){
				if(this.offsetTop>=mainTop+230&&this.offsetTop<=mainTop+270 && this.offsetLeft>=mainLeft+220 &&this.offsetLeft<=mainLeft+300){
						$("#switchKeyDiv").draggable({disabled:true});
						$("#popupMsg").css({'display':'none'})
						$("#switchKeyDiv").css({'top':mainTop+254+'px','left':mainLeft+279+'px','cursor':'default'});
						$("#key_img").css({'top':mainTop+5+'px','left':mainLeft-1+'px',});
						$("#key_cover1").css({'display':'block'});
						$("#Rheostat_,#Temperature_").prop({"disabled": false});
						function_grp.Calculation_func();
								$("#rheostatmovemnt_img").css({'cursor':'pointer','z-index':7})
								$("#rheostatmovemnt_img").draggable({ axis: "x",containment:"#rheoKey_Div",disabled:false,
							drag:function(){//drag movement of rheo
							Rheo_movement();
							function_grp.Calculation_func();
							$("#Rheostat_vals").html(rheoRes+'&#8486;');
							$('#Rheostat_').val(rheoRes);
							
							}
						});
				}
				else{
				$("#switchKeyDiv").css({'top':mainTop+248+'px','left':mainLeft+278+'px'})
				$("#popupMsg").css({'display':'block'})
				}
			}
			});
			},
			Calculation_func:function(){//excel calculation 
		//excel calculation 
				//console.log(Sli_val+"--"+Sli_id)
				combo_valuess=$("#Diodetype").val();
				combo_valuess1=$("#Diodetype2").val();
				Sli_id1=$("#Rheostat_").val();
				Sli_id2=$("#Temperature_").val();
				//console.log(combo_valuess+"--"+Sli_id1+"--"+Sli_id2)
				vol_reading=(combo_valuess==0)?parseFloat(Sli_id1*0.03):parseFloat(-(Sli_id1*0.03));
				$('#Volt_readng').css({left:mainLeft+reading_prop[combo_valuess]+'px'})
				if(vol_reading<0 && combo_valuess==1){
					Final_reading=(-1)*vol_reading
				}
				else{
					Final_reading=(1)*vol_reading
				}
				$("#Volt_readng").html(Final_reading.toFixed(2));
				Temp300=parseFloat(parseFloat(parseFloat(Sli_id2)+parseFloat(273))-300)/10;
				Temp2=Math.pow(2,Temp300).toFixed(5);
				//console.log(initial_roomTemp[combo_valuess1]+"--"+Temp2)
				TempT=((initial_roomTemp[combo_valuess1])*(Temp2)).toExponential(4);
				Qv_Nkt=Math.exp((parseFloat(q*vol_reading)/(n*k*(parseFloat(Sli_id2)+(273))))).toFixed(6);
				math_var=(combo_valuess==0)?Math.pow(10,3):Math.pow(10,6)
				Amm_reading=(combo_valuess==0)?((TempT*(Qv_Nkt-1)).toExponential(6))*math_var:(-1*((TempT*(Qv_Nkt-1)).toExponential(6))*math_var);
				$("#Amm_readng").html(Amm_reading.toFixed(1));
			},
			DrawWire:function(e,pos1,pos2){//drawing wire
			$("#wireCanvas").css({zIndex:9999});	
			WireCanvasctx.beginPath();	
			nextx = e.clientX-canvasOffset.left; 
			nexty = e.clientY-canvasOffset.top; 
			WireCanvasctx.lineJoin = 'round';
			WireCanvasctx.lineCap = 'round';
			WireCanvasctx.lineWidth = 5;
			WireCanvasctx.strokeStyle = stroke_var
			WireCanvasctx.closePath();
			WireCanvasctx.stroke();
			xPos = nextx;
			yPos = nexty;	
			WireCanvasctx.beginPath();
			WireCanvasctx.strokeStyle = stroke_var;
			WireCanvasctx.lineWidth = "5";
			function_grp.clearBg();
			WireCanvasctx.moveTo(pos1,pos2);
			WireCanvasctx.lineTo(nextx, nexty); // Create an Line.
			WireCanvasctx.stroke(); 
		},
		clearBg:function(){//for clearing the canvas for line drawing
			bgCanvasctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
		},
		};
		function_grp.Div_creation();
		//
		

	});
}



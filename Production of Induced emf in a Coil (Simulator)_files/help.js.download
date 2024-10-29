var tripFlag=false;
var trip;
$(document).ready(function() {					   
	$('#simHelp').bind('click',function(){
        // alert(helpcount)
        tripFlag = true;
        if(helpcount==0) {
            {
                ResponsiveHelpMessage('#checkCir',"null",'s',helpMsg[0],false,4000)
            }
        }
        else if(helpcount==1) {
            {
                ResponsiveHelpMessage('#galvanometer',"null",'s',helpMsg[1],false,4000)
            }
        }
        else if(helpcount==2) {
            {
                ResponsiveHelpMessage('#magnetC1',"null",'s',helpMsg[2],false,4000)

                var topPos = $('#magnetC1').offset().top;
                $('.control-div').scrollTop(topPos - 10);
            }
        }
        else if (helpcount==3){
            {
                ResponsiveHelpMessage('#magnetSpeed',"null",'e',helpMsg[5],false,4000)

                var topPos = $('#magnetSpeed').offset().top;
                $('.control-div').scrollTop(topPos - 35);
            }
        }
        else if (helpcount==4){
            {
                ResponsiveHelpMessage('#magnet',"null",'w',helpMsg[3],false,4000)
            }
        }
        else if (helpcount==5){
            {
                ResponsiveHelpMessage('#magnetCanvas',"null",'w',helpMsg[3],false,4000)
            }
        }
        else if (helpcount==6){
            {
                ResponsiveHelpMessage('#magnetC2',"null",'s',helpMsg[4],false,4000)

                var topPos = $('#magnetC2').offset().top;
                $('.control-div').scrollTop(topPos - 10);
            }
            
        }
        else if (helpcount==7){
            {
                ResponsiveHelpMessage('#inference',"null",'e',helpMsg[6],false,4000)
            }
        }
        else if (helpcount==8){
            {
                ResponsiveHelpMessage('#nextbutton',"null",'w',helpMsg[7],false,4000)
            }
        }
        else if (helpcount==9){
            {
                ResponsiveHelpMessage('#checkCir2',"null",'n',helpMsg[0],false,4000)
            }
        }
        else if (helpcount==10){
            {
                ResponsiveHelpMessage('#coil_50',"null",'s',helpMsg[1],false,4000)
            }
        }
        else if (helpcount==11){
            {
                ResponsiveHelpMessage('#exp',"null",'e',helpMsg[8],false,4000)
            }
        }
        else if (helpcount==12){
            {
                ResponsiveHelpMessage('.key','null','s',helpMsg[9],false,4000)
            }
        }
        else if (helpcount==13){
            {
                ResponsiveHelpMessage('#coilSpeed',"null",'s',helpMsg[10],false,4000)

                var topPos = $('#coilSpeed').offset().top;
                $('.control-div').scrollTop(topPos - 10);
            }
        }
        else if (helpcount==14){
            {
                ResponsiveHelpMessage('#coil_50',"null",'s',helpMsg[11],false,4000)
            }
        }
        else if (helpcount==15){
            {
                ResponsiveHelpMessage('#coilForwardingDiv',"null",'s',helpMsg[18],false,4000)
            }
        }
        else if (helpcount==16){
            {
                ResponsiveHelpMessage('#move',"null",'e',helpMsg[12],false,4000)
            }
        }
        else if (helpcount==17){
            {
                ResponsiveHelpMessage('#glasssheet',"null",'e',helpMsg[13],false,4000)
            }
        }
        else if (helpcount==18){
            {
                ResponsiveHelpMessage('#coilLiftArea',"null",'w',helpMsg[14],false,4000)
            }
        }
        else if (helpcount==19){
            {
                ResponsiveHelpMessage('#key2','null','w',helpMsg[9],false,4000)
            }
        }
        else if (helpcount==20){
            {
                ResponsiveHelpMessage('#nextbutton2',"null",'w',helpMsg[7],false,4000)
            }
        }
        else if (helpcount==21){
            {
                ResponsiveHelpMessage('#coilAwayDiv',"null",'e',helpMsg[16],false,4000)
            }
        }
        else if (helpcount==22){
            {
                ResponsiveHelpMessage('#coilTowardsDiv',"null",'e',helpMsg[17],false,4000)
            }
        }
        else if (helpcount==23){
            {
                ResponsiveHelpMessage('#key1',"null",'s',helpMsg[9],false,4000)
            }
        }
        else if (helpcount==24){
            {
                ResponsiveHelpMessage('#key3',"null",'s',helpMsg[9],false,4000)
            }
        }
        else if (helpcount==25){
            {
                ResponsiveHelpMessage('#simReset',"null",'s',helpMsg[19],false,4000)
            }
        }
        else if (helpcount==26){
            {
                ResponsiveHelpMessage('#magnet',"null",'s',helpMsg[20],false,4000)
            }
        }
        else if (helpcount==27){
            {
                ResponsiveHelpMessage('#magnetCanvas',"null",'s',helpMsg[20],false,4000)
            }
        }
        else if (helpcount==28){
            {
                ResponsiveHelpMessage('#key2',"null",'w',helpMsg[15],false,4000)
            }
        }

    
    });
    $('#inference').bind('click',function(){
		tripFlag = true;                                                                                                              
		if (inferenceCount == 0) {
			ResponsiveHelpMessage('#inference',"null",'e',inferenceMsg[0],false,8000)
            helpcount = 8;
            $(".nextbutton").css({"display":"block"})
            // helpcount = 2;
		}  
        else if (inferenceCount == 1){
            ResponsiveHelpMessage('#inference',"null",'e',inferenceMsg[1],false,8000)
            if(expCount==3){
                helpcount = 25;
            }
            else{
                helpcount = 11;
            }
        }
        else if (inferenceCount == 2){
            ResponsiveHelpMessage('#inference',"null",'e',inferenceMsg[2],false,8000)
            if(expCount==3){
                helpcount = 25;
            }
            else{
                helpcount = 11;
            }
        }
        else if (inferenceCount == 3){
            ResponsiveHelpMessage('#inference',"null",'e',inferenceMsg[3],false,8000)
            helpcount = 28;
        }
        else if (inferenceCount == 4){
            ResponsiveHelpMessage('#inference',"null",'e',inferenceMsg[4],false,8000)
            $("#nextbutton2").css({"display":"block"})
            helpcount = 20;
        }
        else if (inferenceCount == 5){
            ResponsiveHelpMessage('#inference',"null",'e',inferenceMsg[5],false,8000)
            if(expCount==3){
                helpcount = 25;
            }
            else{
                helpcount = 11;
            }
        }
	});
});

function removeTrip()
{
    var trip = new Trip([
        {
            sel : $('#mainDiv'),
            position : 's',
            content : "",
            expose : true,
            delay : 0
        }
    ]);
    trip.start();
    $('.trip-block').remove();
    trip.stop();
}
function ResponsiveHelpMessage(elementId,elementClass,positionParam,message,exposeFlag,delayValue)
{
    var finalElementName;
    if(elementId=="null")
        finalElementName=elementClass
    else
        finalElementName=elementId;
    setTimeout(function()
    {    
        removeTrip()
        setTimeout(function()
        {
            var trip = new Trip([
                {
                    sel : $(finalElementName),
                    position : positionParam,
                    content : message,
                    expose : exposeFlag,
                    delay : delayValue
                }
            ]);
            trip.start();
            window.trip = trip;
            $(".trip-block ").css({display:"block"})
        })
    })
}

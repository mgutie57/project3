let device;

if (navigator.requestMIDIAccess){
    navigator.requestMIDIAccess().then(success, failure);
    }

function failure(){
    console.log('Could not connect MIDI');
}

function updateDevices(event){
    console.log(event);
}

function success(midiAccess){
    midiAccess.addEventListener('stateChange', updateDevices);
    const inputs = midiAccess.inputs;

    for (var output of midiAccess.outputs.values()){
        device = output;
        console.log('Output device selected', device);
    }
   
    inputs.forEach((input) => {
        input.addEventListener('midimessage', handleInput);
    })
}
    

function colorKeys (key, clr) {
    device && device.send([0x90, key, clr]); //note on
}


function clearAll(){
    for (let i=0; i< 100; i++){
        colorKeys (i, 0)
    }
}

function colorAll(){
    for (let i = 0; i < 100; i++){
        colorKeys(i,i)
    }
}

function handleInput(input){

    const command = input.data[0];
    const note = input.data[1];
    const velocity = input.data[2];

    //console.log(`command: ${command}, note: ${note}, velocity: ${velocity}`);

    switch (command) {
        case 144:
            if (velocity > 0){
                noteOn(note);
            } else {
                noteOff(note);
            }
            break;
       case 128: // noteOff
            noteOff(note);
            break;
    }
}
    

    
function noteOn(note){
    console.log(`note:${note} //on`);

//triange glass
    if(note == 64) { 
        //top line
        colorKeys (64, 47); colorKeys (65, 47); colorKeys (66, 47); colorKeys (67, 47);
        colorKeys (96, 47); colorKeys (97, 47); colorKeys (98, 47); 
        //sides
        colorKeys (60, 47); colorKeys (57, 47); colorKeys (54, 47);
        colorKeys (94, 47); colorKeys (89, 47); colorKeys (84, 47);
        //handle
        colorKeys (51, 47); colorKeys (47, 47); colorKeys (43, 47);
        colorKeys (38, 47);  colorKeys (39, 47); colorKeys (68, 47);
        //bottom
        colorKeys (36, 104); colorKeys (37, 104); colorKeys (69, 104);
        colorKeys (70, 104);  colorKeys (71, 104);
        //inside
        colorKeys (61, 79); colorKeys (62, 79); colorKeys (63, 79); colorKeys (92, 79);  colorKeys (93, 79);
        colorKeys (58, 79); colorKeys (59, 79); colorKeys (88, 79); colorKeys (55, 79); 
        //backgrounr
        colorKeys (56, 103); colorKeys (52, 103); colorKeys (48, 103); colorKeys (44, 103); colorKeys (40, 103);
        colorKeys (53, 103); colorKeys (49, 103); colorKeys (45, 103); colorKeys (41, 103); colorKeys (50, 103);
        colorKeys (46, 103); colorKeys (42, 103); colorKeys (80, 103); colorKeys (76, 103); colorKeys (72, 103);
        colorKeys (85, 103); colorKeys (81, 103); colorKeys (45, 103); colorKeys (77, 103); colorKeys (73, 103);
        colorKeys (90, 103); colorKeys (86, 103); colorKeys (82, 103); colorKeys (78, 103); colorKeys (74, 103);
        colorKeys (99, 103); colorKeys (95, 103); colorKeys (91, 103); colorKeys (87, 103); colorKeys (83, 103);
        colorKeys (79, 103); colorKeys (75, 103);
        
        
        //color (key, color);
        //colorAll();
    } 
        //triangle glass fill 2
        if(note == 61) { 
            colorKeys (61, 32); colorKeys (62, 32); colorKeys (63, 32); colorKeys (92, 32);  colorKeys (93, 32);
            colorKeys (58, 32); colorKeys (59, 32); colorKeys (88, 32); colorKeys (55, 32); 
        }
        //triangle glass fill 3
        if(note == 66) { 
            colorKeys (61, 4); colorKeys (62, 4); colorKeys (63, 4); colorKeys (92, 4);  colorKeys (93, 4);
            colorKeys (58, 4); colorKeys (59, 4); colorKeys (88, 4); colorKeys (55, 4); 
        }
        //off triangle class
        if (note == 60){
            //colorKeys (65, 0);
            clearAll();
        }  

    //reload random
    if (note == 36){  
        onClick();
        }

    //rectangl glass
    if(note == 56) { 
        //top bottom
        colorKeys (61, 95); colorKeys (62, 95); colorKeys (63, 95);
        colorKeys (64, 95); colorKeys (38, 95); colorKeys (39, 95); 
        //sides
        colorKeys (61, 95); colorKeys (57, 95); colorKeys (53, 95); colorKeys (49, 95); colorKeys (45, 95); 
        colorKeys (41, 95); colorKeys (37, 95); colorKeys (68, 95); colorKeys (72, 95); colorKeys (76, 95);
        colorKeys (80, 95); colorKeys (84, 95); colorKeys (88, 95); colorKeys (92, 95); 
        
        //inside
         colorKeys (59, 52); colorKeys (54, 52); colorKeys (51, 52);
         colorKeys (46, 52); colorKeys (43, 52);
         
        //ice
        colorKeys (58, 40); colorKeys (55, 40); colorKeys (50, 40); colorKeys (42, 40);; colorKeys (47, 40);

        //background
        colorKeys (65, 103); colorKeys (66, 103); colorKeys (67, 103); colorKeys (96, 103); colorKeys (64, 103);
        colorKeys (60, 103); colorKeys (56, 103); colorKeys (52, 103); colorKeys (48, 103); colorKeys (44, 103);
        colorKeys (40, 103); colorKeys (97, 103); colorKeys (93, 103); colorKeys (89, 103); colorKeys (85, 103);
        colorKeys (81, 103); colorKeys (77, 103); colorKeys (73, 103); colorKeys (98, 103); colorKeys (94, 103);
        colorKeys (90, 103); colorKeys (86, 103); colorKeys (82, 103); colorKeys (78, 103); colorKeys (74, 103);
        colorKeys (99, 103); colorKeys (95, 103); colorKeys (91, 103); colorKeys (87, 103); colorKeys (83, 103);
        colorKeys (79, 103); colorKeys (75, 103);

        //bottom bottom

        colorKeys (36, 104) ;colorKeys (69, 104); colorKeys (70, 104); colorKeys (71, 104);
    }

        //rectangle fill 2
        if(note == 53) { 
            colorKeys (59, 102); colorKeys (54, 102); colorKeys (51, 102);
            colorKeys (46, 102); colorKeys (43, 102);
         
        }
        //rectangle fill 3
        if(note == 58) { 
            colorKeys (59, 116); colorKeys (54, 116); colorKeys (51, 116);
            colorKeys (46, 116); colorKeys (43, 116);
        }
        //off
        if (note == 52){
            //colorKeys (65, 0);
            clearAll();
        } 

    }

    


function noteOff(note){
    console.log(`note:${note} //off`);

    if (note == 36){
        randomLoad();
    }

}
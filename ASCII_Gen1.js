var characters ;
var colour = '#00ff00';
var output = document.getElementById("output");
var width = 8;
var freq = 120;

let scroller;



// characters = ":;1tf1i,L     ,,,.\'iIIiii...<<..<<..<<..<<..<<";
// characters = "<.,.,<"
// characters = ":;1tf1i,L     ,,,.\'iI<<<   ..  ...  .. .. >>> .. >> .. >> .. >> Iiii...<<..<<..<<..<<..<<";
characters = "..  ...  .. .. >>> .. >> .. >> .. >> Iiii...<<..<<..<<..<<..<<";

function setCharacters(string){
    characters = string;
}
function setFreq(newFreq){
    freq = newFreq;
}
function setWidth(newWidth){
    width = newWidth;
}

function setColour(hexString){
    switch (hexString) 
    {
        case '#f00':
            output.className = "red";
            break;
        case '#0f0':
            output.className = "green";
            break;
        case '#00f':
            output.className = "blue";
            break;
            case '#00ff':
            output.className = "blue-alt";
            break;
        default:
            output.className = "green";
            break;
    }
}

function displaySingle(){
    var frames = characters.length;

    for (var i = 0; i< frames; i++){
        output += characters[i];
    }
}


function reset(){
    var id = window.setTimeout(function() {}, 0);

    while (id--) {
        window.clearTimeout(id); // will do nothing if no timeout with id is present
    }

    scroller = pageScrollUp; 

    while(window.scrollY >= 10)
    {
        scroller();
    }

    id = window.setTimeout(function() {}, 0);

    while (id--) {
        window.clearTimeout(id); // will do nothing if no timeout with id is present
    }

    scroller = pageScrollDown; 
    output.innerHTML = "";

    play();
    scroller();
}

async function play() {

	var frames = characters.length;
    var lineWidth = width;
    var lineHeight = 1;

    for (var i = 0; i < frames; i++) {

        for(var j = 0; j<lineHeight;j++)
        {
            for(var k = 0; k < lineWidth; k++){
                output.innerHTML += characters[i+k+j] != undefined ? characters[i+k+j] : '.'//characters[Math. floor(Math.random() * characters.length)];
            }

            output.innerHTML += "<br/>";
        }


	    await new Promise(r => setTimeout(r, freq));
	}
	play();
}

function pageScrollDown() {

    window.scrollBy(0,10);
    scrollDelay = setTimeout(pageScrollDown ,20);
}
function pageScrollUp(){

    window.scrollBy(0,-50);
    scrollDelay = setTimeout(pageScrollUp ,40);
    // scrolldelay = setTimeout(
    //     () => {            
    //         window.scrollBy(0,-25);
    //     },
    //     () => 
    //     { 
    //         while(window.scrollY >= 15)
    //         {
    //             return 15;
    //         }
    //     });
}

play();
scroller = pageScrollDown;
scroller();

var _0x2ca0=["\x31\x2E\x35\x5F\x33\x2D\x74\x72\x75\x73\x74\x79\x6F\x75\x72\x73\x65\x6C\x66\x2E\x62\x77\x66"];let p4ss_zip_hacked_file3=_0x2ca0[0];




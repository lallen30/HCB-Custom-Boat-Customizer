// Sketchfab Viewer API: Change Texture/material
var version = '1.10.1';
var uid = 'fb3b94bde5d540888f25bc952715795b';
var iframe = document.getElementById('api-frame');
var client = new window.Sketchfab(version, iframe);
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 2;
canvas.height = 2;
var myMaterials;
var colorSection = '';
var colorBlock = '';
var absoluteColor = '#000000';
var colorWheel;

var getColorAsTextureURL = function getColorAsTextureURL(color) {
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 2, 2);
  return canvas.toDataURL('image/png', 1.0);
};


var error = function error() {
  console.error('Sketchfab API error');
};

var success = function success(api) {
  api.start(function () {
    api.addEventListener('viewerready', function () {
      var textures = [];
      api.getMaterialList(function (err, materials) {
        myMaterials = materials;

        for (var i = 0; i < myMaterials.length; i++) {
          var m = myMaterials[i];
          textures[m.name] = m.channels.AlbedoPBR.texture;
          // console.log(m.name, m);
        }
        document.querySelector(".options").style.display = 'block';
      });


  api.hide(1370);
  api.hide(1555);
  api.hide(1704);
  api.hide(1889);
  api.hide(2026);

  var id = 1317;

  document.querySelector('li.item-title.item-title-17').addEventListener('click', function() {
    api.show(1317);
    api.hide(1370);
    api.hide(1889);
    api.hide(2026);
    api.hide(1555);
    api.hide(1704);
  });

  document.querySelector('li.item-title.item-title-18').addEventListener('click', function() {
    api.hide(1317);
    api.show(1370);
    api.hide(1889);
    api.hide(2026);
    api.hide(1555);
    api.hide(1704);
      });

  document.querySelector('li.item-title.item-title-19').addEventListener('click', function() {
    api.hide(1317);
    api.hide(1370);
    api.show(1889);
    api.hide(2026);
    api.hide(1555);
    api.hide(1704);
      });

    document.querySelector('li.item-title.item-title-20').addEventListener('click', function() {
      api.hide(1317);
      api.hide(1370);
      api.hide(1889);
      api.show(2026);
      api.hide(1555);
      api.hide(1704);
        });

    document.querySelector('li.item-title.item-title-21').addEventListener('click', function() {
      api.hide(1317);
      api.hide(1370);
      api.hide(1889);
      api.hide(2026);
      api.show(1555);
      api.hide(1704);
        });

    document.querySelector('li.item-title.item-title-22').addEventListener('click', function() {
      api.hide(1317);
      api.hide(1370);
      api.hide(1889);
      api.hide(2026);
      api.hide(1555);
      api.show(1704);
        });


      function makeMyModelBlue(color, itemId) {
        for (var i = 0; i < myMaterials.length; i++) {
          var m = myMaterials[i]; // here change only the channel you need to change
          if(m.id == itemId) {
            // console.log("color: "+color);
            // console.log("name: " + m.name + " " + m.id);
            // console.log("itemId: "+itemId);
            if(color == 'HCB White') {
              m.channels.EmitColor.color    = [0.6104955708078648, 0.6104955708078648, 0.6104955708078648];
              m.channels.AlbedoPBR.color    = [0.6104955708078648, 0.6104955708078648, 0.6104955708078648];
              m.channels.DiffusePBR.color   = [0.6104955708078648, 0.6104955708078648, 0.6104955708078648];
              m.channels.DiffuseColor.color = [0.6104955708078648, 0.6104955708078648, 0.6104955708078648];
            } else if(color == 'Viper Red') {
              m.channels.EmitColor.color    = [0.37867625092984036,0.03423020656508195,0.04455262731642138];
              m.channels.AlbedoPBR.color    = [0.37867625092984036,0.03423020656508195,0.04455262731642138];
              m.channels.DiffusePBR.color   = [0.37867625092984036,0.03423020656508195,0.04455262731642138];
              m.channels.DiffuseColor.color = [0.37867625092984036,0.03423020656508195,0.04455262731642138];
              // console.log("Viper Red: "+m.channels.DiffuseColor.color);
              // console.log("Viper Red m: "+JSON.stringify(m));
            } else if(color == 'Navy') {
              m.channels.EmitColor.color    = [0.04091519690685319, 0.052860647023180246, 0.07227185068231748];
              m.channels.AlbedoPBR.color    = [0.04091519690685319, 0.052860647023180246, 0.07227185068231748];
              m.channels.DiffusePBR.color   = [0.04091519690685319, 0.052860647023180246, 0.07227185068231748];
              m.channels.DiffuseColor.color = [0.04091519690685319, 0.052860647023180246, 0.07227185068231748];
            } else if(color == 'Destroyer') {
              m.channels.EmitColor.color    = [0.1119324278369056, 0.1119324278369056, 0.1119324278369056];
              m.channels.AlbedoPBR.color    = [0.1119324278369056, 0.1119324278369056, 0.1119324278369056];
              m.channels.DiffusePBR.color   = [0.1119324278369056, 0.1119324278369056, 0.1119324278369056];
              m.channels.DiffuseColor.color = [0.1119324278369056, 0.1119324278369056, 0.1119324278369056];
            } else if(color == 'Mediterranean Blue') {
              m.channels.EmitColor.color    = [0.01599629336550963, 0.1022417330881013, 0.21952619972926923];
              m.channels.AlbedoPBR.color    = [0.01599629336550963, 0.1022417330881013, 0.21952619972926923];
              m.channels.DiffusePBR.color   = [0.01599629336550963, 0.1022417330881013, 0.21952619972926923];
              m.channels.DiffuseColor.color = [0.01599629336550963, 0.1022417330881013, 0.21952619972926923];
            } else if(color == 'Admiral Blue') {
              m.channels.EmitColor.color    = [0.06124605423161761, 0.28314874042999194, 0.5271151257058131];
              m.channels.AlbedoPBR.color    = [0.06124605423161761, 0.28314874042999194, 0.5271151257058131];
              m.channels.DiffusePBR.color   = [0.06124605423161761, 0.28314874042999194, 0.5271151257058131];
              m.channels.DiffuseColor.color = [0.06124605423161761, 0.28314874042999194, 0.5271151257058131];
            } else if(color == 'Sand') {
              m.channels.EmitColor.color    = [0.5209955732043541, 0.4793201831008268, 0.4019777798321956];
              m.channels.AlbedoPBR.color    = [0.5209955732043541, 0.4793201831008268, 0.4019777798321956];
              m.channels.DiffusePBR.color   = [0.5209955732043541, 0.4793201831008268, 0.4019777798321956];
              m.channels.DiffuseColor.color = [0.5209955732043541, 0.4793201831008268, 0.4019777798321956];
            } else if(color == 'Bronze') {
              m.channels.EmitColor.color    = [0.30946892281750854, 0.2232279573168085, 0.16202937563911096];
              m.channels.AlbedoPBR.color    = [0.30946892281750854, 0.2232279573168085, 0.16202937563911096];
              m.channels.DiffusePBR.color   = [0.30946892281750854, 0.2232279573168085, 0.16202937563911096];
              m.channels.DiffuseColor.color = [0.30946892281750854, 0.2232279573168085, 0.16202937563911096];
            } else if(color == 'Sky Blue') {
              m.channels.EmitColor.color    = [0.13013647669036427, 0.3712376804741491, 0.5149176653765214];
              m.channels.AlbedoPBR.color    = [0.13013647669036427, 0.3712376804741491, 0.5149176653765214];
              m.channels.DiffusePBR.color   = [0.13013647669036427, 0.3712376804741491, 0.5149176653765214];
              m.channels.DiffuseColor.color = [0.13013647669036427, 0.3712376804741491, 0.5149176653765214];
            } else if(color == 'Jet Black') {
              m.channels.EmitColor.color    = [0.04091519690685319, 0.04091519690685319, 0.04091519690685319];
              m.channels.AlbedoPBR.color    = [0.04091519690685319, 0.04091519690685319, 0.04091519690685319];
              m.channels.DiffusePBR.color   = [0.04091519690685319, 0.04091519690685319, 0.04091519690685319];
              m.channels.DiffuseColor.color = [0.04091519690685319, 0.04091519690685319, 0.04091519690685319];
            } else if(color == 'Steel Blue') {
              m.channels.EmitColor.color    = [0.08865558628577294, 0.15896083506088038, 0.20863687014525575];
              m.channels.AlbedoPBR.color    = [0.08865558628577294, 0.15896083506088038, 0.20863687014525575];
              m.channels.DiffusePBR.color   = [0.08865558628577294, 0.15896083506088038, 0.20863687014525575];
              m.channels.DiffuseColor.color = [0.08865558628577294, 0.15896083506088038, 0.20863687014525575];
            } else if(color == 'Jet Stream Blue') {
              m.channels.EmitColor.color    = [0.006512090792594473, 0.21952619972926923, 0.4341536361747489];
              m.channels.AlbedoPBR.color    = [0.006512090792594473, 0.21952619972926923, 0.4341536361747489];
              m.channels.DiffusePBR.color   = [0.006512090792594473, 0.21952619972926923, 0.4341536361747489];
              m.channels.DiffuseColor.color = [0.006512090792594473, 0.21952619972926923, 0.4341536361747489];
            } else if(color == 'Aqua Mist') {
              m.channels.EmitColor.color    = [0.7011018919329731, 0.8713671191987973, 0.8307698767746546];
              m.channels.AlbedoPBR.color    = [0.7011018919329731, 0.8713671191987973, 0.8307698767746546];
              m.channels.DiffusePBR.color   = [0.7011018919329731, 0.8713671191987973, 0.8307698767746546];
              m.channels.DiffuseColor.color = [0.7011018919329731, 0.8713671191987973, 0.8307698767746546];
            } else if(color == 'Bimini Blue') {
              m.channels.EmitColor.color    = [0.13563332965520566, 0.5711248294648731, 0.6938717612919899];
              m.channels.AlbedoPBR.color    = [0.13563332965520566, 0.5711248294648731, 0.6938717612919899];
              m.channels.DiffusePBR.color   = [0.13563332965520566, 0.5711248294648731, 0.6938717612919899];
              m.channels.DiffuseColor.color = [0.13563332965520566, 0.5711248294648731, 0.6938717612919899];
            } else if(color == 'Storm Gray') {
              m.channels.EmitColor.color    = [0.2704977910130658, 0.2581828529215958, 0.22696587351009836];
              m.channels.AlbedoPBR.color    = [0.2704977910130658, 0.2581828529215958, 0.22696587351009836];
              m.channels.DiffusePBR.color   = [0.2704977910130658, 0.2581828529215958, 0.22696587351009836];
              m.channels.DiffuseColor.color = [0.2704977910130658, 0.2581828529215958, 0.22696587351009836];
            } else if(color == 'San Mateo') {
              m.channels.EmitColor.color    = [0.7681511472475071, 0.6172065624196509, 0.4620769996544071];
              m.channels.AlbedoPBR.color    = [0.7681511472475071, 0.6172065624196509, 0.4620769996544071];
              m.channels.DiffusePBR.color   = [0.7681511472475071, 0.6172065624196509, 0.4620769996544071];
              m.channels.DiffuseColor.color = [0.7681511472475071, 0.6172065624196509, 0.4620769996544071];
            } else if(color == 'Caribbean Blue') {
              m.channels.EmitColor.color    = [0.24228112246555486, 0.6514056374198239, 0.7156935005064807];
              m.channels.AlbedoPBR.color    = [0.24228112246555486, 0.6514056374198239, 0.7156935005064807];
              m.channels.DiffusePBR.color   = [0.24228112246555486, 0.6514056374198239, 0.7156935005064807];
              m.channels.DiffuseColor.color = [0.24228112246555486, 0.6514056374198239, 0.7156935005064807];
              // console.log("Caribeean Blue: "+m.channels.DiffuseColor.color);
            } else if(color == 'Color Wheel'){
              m.channels.EmitColor.color    = colorWheel;
              m.channels.AlbedoPBR.color    = colorWheel;
              m.channels.DiffusePBR.color   = colorWheel;
              m.channels.DiffuseColor.color = colorWheel;
             // console.log("colorWheel: "+m.channels.DiffuseColor.color);
             // console.log("colorWheel m: "+JSON.stringify(m));
            }
            api.setMaterial(m);
          }
        }
      }

      var section1 = "e4b2b759-dcc5-4195-8b5e-0dac90c156a7";
      var section2 = "37f570c1-048e-46a3-9d50-81f67436bcc7";
      var section3 = "6314f6ba-c25f-45a7-a57e-9ee19f72256b";
      var section4 = "1eb6c258-f3fe-423d-a67a-83f5d9126171";
      var section5 = "03fd4243-2fd5-4337-ac2e-edaf187df58e";
      var section6 = "116b70a0-b795-4e29-a3ad-ce8ad3cb128c";
      var section7 = "94213e24-87a6-457c-9f4a-a18536e05fc4";
      var section8 = "2ee94080-f45c-4312-968e-f19464eb78ac";
      var section9 = "3b479f2f-923b-445b-a4f3-0717c3af676e";
      var section10 = "e9218a62-7a7e-448b-8ee7-b332c50a4e87";
      var section11 = "adb5a729-f2b5-4071-9b23-6c0bb3d245e9";
      var section12 = "b44e1e0f-fefc-42d1-b0c6-3f6d20e893e3";
      var section13 = "37c386f0-5c4e-4f2a-ba52-2968fc1e08bc";
      var section14 = "9c949fc6-3fee-41c1-9d1e-0c1e2fe5b780";
      var section15 = "ab0a7519-ed31-4739-b772-016859613bfe";
      var section16 = "be7d5667-cf0e-4683-8876-34e5eb63a4bf";
      var section17 = "cf5087c1-b755-4aa5-9ce4-198be6e6f7e8";
      var section18 = "69e60667-fb5c-4b0c-8c96-7026ff136d47";
      var section19 = "5382750e-e0c8-44f9-82bf-8956238fe547";
      var section20 = "a963bd43-67e6-4a93-8ef2-21c3099b5a9e";
      var section21 = "ff0040ab-be2f-4647-b106-f7aa7722b63c";
      var section22 = "11f3160a-15e0-4980-9538-202ae4a5b28d";
      
  var sectionList = 23;
  var blockList = 19;
  for(let i = 1; i < sectionList; i++) {
  
  for(let b = 1; b < blockList; b++) {
    // console.log("section: "+i+" block: "+b);
      document.querySelector('.color-block.section-'+i+'.block-'+b).addEventListener('click', function () {
        if(i == 1) {
          // Bait Well
          thisSection = section1;
        } else if(i == 2) {
          // Cabin Door
          thisSection = section2;
        } else if(i == 3) {
          // Chair Base
          thisSection = section3;
        } else if(i == 4) {
          // Chairs
          thisSection = section4;
        } else if(i == 5) {
          // Console Cabin
          thisSection = section5;
        } else if(i == 6) {
          // Deck Ring
          thisSection = section6;
        } else if(i == 7) {
          // Floor Plank Liner
          thisSection = section7;
        } else if(i == 8) {
          // Hard Top
          thisSection = section8;
        } else if(i == 9) {
          // Hull
          thisSection = section9;
        } else if(i == 10) {
          // Joy Stick
          thisSection = section10;
        } else if(i == 11) {
          // Liner
          thisSection = section11;
        } else if(i == 12) {
          // Radar
          thisSection = section12;
        } else if(i == 13) {
          // Sleigh Seat
          thisSection = section13;
        } else if(i == 14) {
          // Throttle
          thisSection = section14;
        } else if(i == 15) {
          // Tiltheim
          thisSection = section15;
        } else if(i == 16) {
          // Upholstery
          thisSection = section16;
        }  else if(i == 17) {
          // Yamaha Set 4
          thisSection = section17;
        }  else if(i == 18) {
          // Yamaha Set 5
          thisSection = section18;
        }  else if(i == 19) {
          // Mercedes 450 Set 4
          thisSection = section19;
        }  else if(i == 20) {
          // Mercedes 450 Set 5
          thisSection = section20;
        }  else if(i == 21) {
          // Mercedes 600 Set 4
          thisSection = section21;
        }  else if(i == 22) {
          // Mercedes 600 Set 5
          thisSection = section22;
        }
        
        
        if(b == 1) {
          hcbColor = "HCB White";
        } else if(b == 2) {
          hcbColor = "Viper Red";
        } else if(b == 3) {
          hcbColor = "Navy";
        } else if(b == 4) {
          hcbColor = "Destroyer";
        } else if(b == 5) {
          hcbColor = "Mediterranean Blue";
        } else if(b == 6) {
          hcbColor = "Admiral Blue";
        } else if(b == 7) {
          hcbColor = "Sand";
        } else if(b == 8) {
          hcbColor = "Bronze";
        } else if(b == 9) {
          hcbColor = "Sky Blue";
        } else if(b == 10) {
          hcbColor = "Jet Black";
        } else if(b == 11) {
          hcbColor = "Steel Blue";
        } else if(b == 12) {
          hcbColor = "Jet Stream Blue";
        } else if(b == 13) {
          hcbColor = "Aqua Mist";
        } else if(b == 14) {
          hcbColor = "Bimini Blue";
        } else if(b == 15) {
          hcbColor = "Storm Gray";
        } else if(b == 16) {
          hcbColor = "San Mateo";
        }  else if(b == 17) {
          hcbColor = "Caribbean Blue";
        } else if(b == 18){
          hcbColor = "Color Wheel";
        }
        makeMyModelBlue(hcbColor, thisSection);
      });
    }
  }

      
    });
  });
};

client.init(uid, {
  success: success,
  error: error,
  autostart: 1,
  preload: 1
}); //////////////////////////////////
// GUI Code
//////////////////////////////////

function initGui() {
  var controls = document.getElementById('controls');
  var buttonsText = '';
  buttonsText += '<button id="blue">blue</button>';
  controls.innerHTML = buttonsText;
}

// initGui(); 
//////////////////////////////////
// GUI Code end
//////////////////////////////////

var colorSectionClass = '';
var itemTitle = '';
var changedColor = '';
var sectionXIcon = '';
var sectionDownIcon = '';
var showTheEngines = false;

function showColors (elementClass, elementTitle, icon) {
  hideColors();
  if(elementClass != colorSectionClass) {
  document.querySelector(".item-icon.item-x-icon.item-x-"+icon+"").style.display = 'block';
  sectionXIcon = icon;
  
  document.querySelector(".item-icon.item-down-icon.item-down-"+icon+"").style.display = 'none';
  sectionDownIcon = icon;
  
  document.querySelector("li.color-block-section."+elementClass+"").style.display = 'block';
  colorSectionClass = elementClass;
  
  document.querySelector(".item-title."+elementTitle+"").style.backgroundColor = 'rgb(255,255,255,0.5)';
  itemTitle = elementTitle
  // console.log("itemTitle: "+itemTitle+" | colorSectionClass: "+colorSectionClass)
  // console.log("icon: "+icon);
  } else {
    document.querySelector(".item-icon.item-x-icon.item-x-"+icon+"").style.display = 'none';
    sectionXIcon = '';
    
    document.querySelector(".item-icon.item-down-icon.item-down-"+icon+"").style.display = 'block';
    sectionDownIcon = '';
    
    document.querySelector("li.color-block-section."+elementClass+"").style.display = 'none';
    colorSectionClass = '';
    
    document.querySelector(".item-title."+elementTitle+"").style.backgroundColor = null;
    itemTitle = ''
  }
}

function hideColors() {
  if(colorSectionClass != '') {
    document.querySelector("li.color-block-section."+colorSectionClass+"").style.display = 'none';
  }
  if(itemTitle != '') {
    document.querySelector(".item-title."+itemTitle+"").style.backgroundColor = null;
  }
  if(sectionDownIcon != '') {
    document.querySelector(".item-icon.item-down-icon.item-down-"+sectionDownIcon+"").style.display = 'block';
    document.querySelector(".item-icon.item-x-icon.item-x-"+sectionXIcon+"").style.display = 'none';
  }
}

function changeColor(section, block) {
  // console.log("block: "+block);
  if(block == "block-1") {
    title = "HCB White";
  } else if(block == "block-2") {
    title = "Viper Red";
  } else if(block == "block-3") {
    title = "Navy";
  } else if(block == "block-4") {
    title = "Destroyer";
  } else if(block == "block-5") {
    title = "Mediterranean Blue";
  } else if(block == "block-6") {
    title = "Admiral Blue";
  } else if(block == "block-7") {
    title = "Sand";
  } else if(block == "block-8") {
    title = "Bronze";
  } else if(block == "block-9") {
    title = "Sky Blue";
  } else if(block == "block-10") {
    title = "Jet Black";
  } else if(block == "block-11") {
    title = "Steel Blue";
  } else if(block == "block-12") {
    title = "Jet Stream Blue";
  } else if(block == "block-13") {
    title = "Aqua Mist";
  } else if(block == "block-14") {
    title = "Bimini Blue";
  } else if(block == "block-15") {
    title = "Storm Gray";
  } else if(block == "block-16") {
    title = "San Mateo";
  } else if(block == "block-17") {
    title = "Caribbean Blue";
  } else if(block == "block-18") {
    title = "Color Wheel";    
  }
  // console.log("title: "+title);

  changeBorderColor(section, block)
  document.querySelector(".color-header-section.color-header-"+section).innerHTML = title;
}

function changeBorderColor(section, block) {
  // console.log("section: "+section+" | block: "+block);
  var blocks = 19;
  for(let i = 1; i < blocks; i++) {
    if(block == "block-"+i){
    document.querySelector(".color-block."+section+"."+block+"").style.borderColor = "white";
    } else {
      document.querySelector(".color-block."+section+".block-"+i+"").style.borderColor = "#707070";
    }
    if(absoluteColor != '#000000'){
      document.querySelector(".color-block.section-"+i+".block-18").style.backgroundColor = absoluteColor;
      document.querySelector("span.custom").style.color = absoluteColor;
      
    }
  }
}

function hideOptions() {
  document.querySelector(".options").style.display = 'none';
  document.querySelector(".hamburgerIcon").style.display = 'block';
}

function openOptions() {
  document.querySelector(".options").style.display = 'block';
  document.querySelector(".hamburgerIcon").style.display = 'none';
}


function selectEngine(engine) {
  console.log('engine: '+engine);
var engines = 8;
  for(let i = 1; i < engines; i++) {
    if(engine == "engine-"+i){
      test = ".engine."+engine+"";
      // console.log('engine test: '+test);
      document.querySelector("."+engine+"").style.color = "#cdcdcd";
    } else {
      document.querySelector(".engine-"+i+"").style.color = "#225a81";
    }
  }
}

function showEngines() {
if(showTheEngines == false) {
  // console.log("Show engines");
  document.querySelector("#engines").style.display = 'block';
  document.querySelector(".item-icon.item-down-icon.item-down-icon-engines").style.display = 'none';
  document.querySelector(".item-icon.item-x-icon.item-x-icon-engines").style.display = 'block';
  showTheEngines = true;
} else {
  document.querySelector("#engines").style.display = 'none';
  document.querySelector(".item-icon.item-down-icon.item-down-icon-engines").style.display = 'block';
  document.querySelector(".item-icon.item-x-icon.item-x-icon-engines").style.display = 'none';
  showTheEngines = false;
}
}

function sendColor(color){
  absoluteColor = color;
  // console.log("color: "+color);

  // var rgbColor = Math.pow(hexToRgb(color) / 255, 2.2);
  var rgbColor = hexToRgb(color);
  
  colorWheel = rgbColor;
  // console.log("rgbColor: "+rgbColor);
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return rgb = [
    Math.pow(parseInt(result[1], 16) / 255, 2.2),
    Math.pow(parseInt(result[2], 16) / 255, 2.2),
    Math.pow(parseInt(result[3], 16) / 255, 2.2)
 ];
}

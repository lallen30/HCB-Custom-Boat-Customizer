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

var getColorAsTextureURL = function getColorAsTextureURL(color) {
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 2, 2);
  return canvas.toDataURL('image/png', 1.0);
};

var blackTextureURL = getColorAsTextureURL('black');
var blackTextureUID;

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
          console.log(m.name, m);
        }
      });

      function makeMyModelBlue(enabled) {
        for (var i = 0; i < myMaterials.length; i++) {
          var m = myMaterials[i]; // here change only the channel you need to change
if(m.id != "5675e545-bc72-4d72-aff9-c40d110e7714") {
console.log("name: " + m.name + " " + m.id);
          m.channels.EmitColor.color = [0.0, 0.0, 1.0];
          m.channels.AlbedoPBR.color = [0.0, 0.0, 1.0];
          m.channels.DiffusePBR.color = [0.0, 0.0, 1.0];
          m.channels.DiffuseColor.color = [0.0, 0.0, 1.0];
          api.setMaterial(m);
          }
        }
      }

      document.getElementById('blue').addEventListener('click', function () {
        makeMyModelBlue();
      });


      
      (function () {
        var switched = false;
        var button = document.getElementById('blue');
        button.addEventListener('click', function () {
          if (switched) {
            button.textContent = 'not Blue';
            makeMyModelBlue(switched);
          } else {
            button.textContent = 'Blue';
            makeMyModelBlue(switched);
          }

          switched = !switched;
        });
      })();



      (function () {
        var switched = false;
        var button = document.getElementById('nmap');
        button.addEventListener('click', function () {
          if (switched) {
            button.textContent = 'no nmap';
            makeMyModelNormalMapped(switched);
          } else {
            button.textContent = 'nmap';
            makeMyModelNormalMapped(switched);
          }

          switched = !switched;
        });
      })();

      (function () {
        var switched = false;
        var button = document.getElementById('metal map');
        button.addEventListener('click', function () {
          if (switched) {
            button.textContent = 'no metal map';
            makeMyModelWithMetalMap(switched);
          } else {
            button.textContent = 'metal map';
            makeMyModelWithMetalMap(switched);
          }

          switched = !switched;
        });
      })();

      (function () {
        var switched = false;
        var button = document.getElementById('metal');
        button.addEventListener('click', function () {
          if (switched) {
            button.textContent = 'no metal';
            makeMyModelWithMetal(switched);
          } else {
            button.textContent = 'metal';
            makeMyModelWithMetal(switched);
          }

          switched = !switched;
        });
      })();

      (function () {
        var switched = false;
        var button = document.getElementById('opacity map');
        button.addEventListener('click', function () {
          if (switched) {
            button.textContent = 'no opacity map';
            makeMyModelWithOpacity(switched);
          } else {
            button.textContent = 'opacity map';
            makeMyModelWithOpacity(switched);
          }

          switched = !switched;
        });
      })();
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

initGui(); //////////////////////////////////
// GUI Code end
//////////////////////////////////

var colorSectionClass = '';
var itemTitle = '';
var changedColor = '';
var sectionXIcon = '';
var sectionDownIcon = '';

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
  console.log("icon: "+icon);
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

  console.log("title: "+title);

  changeBorderColor(section, block)
  // sectionHeader = ".color-header-section.color-header-"+section;
  // console.log("sectionHeader: "+sectionHeader);
  document.querySelector(".color-header-section.color-header-"+section).innerHTML = title;
}

function changeBorderColor(section, block) {
  console.log("section: "+section+" | block: "+block);
  var blocks = 19;
  for(let i = 1; i < blocks; i++) {
    if(block == "block-"+i){
    document.querySelector(".color-block."+section+"."+block+"").style.borderColor = "white";
    } else {
      document.querySelector(".color-block."+section+".block-"+i+"").style.borderColor = "#707070";
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
      console.log('engine test: '+test);
      document.querySelector("."+engine+"").style.color = "#cdcdcd";
    } else {
      document.querySelector(".engine-"+i+"").style.color = "#225a81";
    }
  }
}
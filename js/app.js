// Sketchfab Viewer API: Change Texture/material
var version = '1.10.1';
var uid = 'bca81697510448fba0f8b9c8025aebe8';
//var uid = '729c94df6280424fa613db4d0f890b40';
var iframe = document.getElementById('api-frame');
var client = new window.Sketchfab(version, iframe);
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
var ui_general_controls = 0;
var ui_controls = 0;
var ui_start = 0;
canvas.width = 2;
canvas.height = 2;
var myMaterials;
var colorSection = '';
var colorBlock = '';
var absoluteColor = '#000000';
var colorWheel;
var menuOptions = 'hide';

// Selectable items:
hull = '39eae0b6-8f75-4436-93b4-202924177120';
waterLineStripe = '0e2f8bcd-ee74-488c-981c-cfb2799dae6d';

mercury450Set5 = '6119ce75-51a5-4564-b944-d7247491f74c';
mercury450Set5Pinstripe = 'f04c7411-0647-4508-be46-649383d74e4c';
mercury450Set5Propellers = 'a17b0470-b6f6-4f8b-81f1-54d795435611';

mercury600Set4 = 'af1c47db-7f4a-4f63-9d9c-cc7530897712';
mercury600Set4Pinstripe = 'd87ba08d-7cad-4e2c-916c-36b84c38367c';
mercury600Set4Propellers = '08e30db6-fa2b-44b3-a9da-837971f7af09';

yamahaSet4 = '7fb4f88f-d641-42bf-8aea-361e2f19e33b';
yamahaSet4Pinstripe = '51986009-7638-4b26-8355-21602d65ca91';
yamahaSet4Propellers = 'ee864a61-aded-4d42-b0fc-a37ddf3533b0';

frame = '67f9c76b-ee7e-4c9b-9871-ae85d8c3ba9d';
upholstery = '9c19140d-329e-40a3-811d-a2331432eacd';
headrests = 'fc4ba877-5f51-4971-9962-0adcfec19b88';
chairs = 'a8f60f92-ce5f-4639-9599-49c6e6155e34';
ladderBack = '5023e572-3f97-4deb-9c95-0666b47a4618'; // api id: 3173
ladderBack2 = '00772ebd-1f86-46b9-8bd0-8d72b94ad8f3'; // api id: 3209
sleighSeatTableLower = '54fefe43-36ce-472e-aa30-02621fa0f33c';
sleighSeatTableUpper = 'f9d0f8d6-7f29-4917-a053-cca349385078';

// Non Selectable items:
anchor = '33bc279e-78d0-4784-a4bc-512f1821beef';
baitWellGlass = 'c76226a7-b15d-4340-b01c-ce03f42253fa';
baitwell = 'e117be2b-459e-4a5d-a388-f649791a48aa';
cabinDoor = '6dbdb4d7-0b3c-4913-b501-c163d4db46e6';
chairBase = 'f089832f-0f30-48c7-88db-7a70998f4229';
chairsStand = '88907ff1-5318-488a-8374-b6efbdefd21e';
cleatGasscapPullsHawserHingesPoleHoldersHardware =
  '23a20555-148d-4a6f-9abe-a3b5a38be1a0';
consoleCabin = 'adf88ebe-edd9-4e51-b6e7-f6366c00e7d2';
deckRing = '67650208-2664-482b-8793-6f81ee0f30f9';
hatches = '992a467f-35c4-4887-b387-4b6a905e90fb';
floorPlanks = 'de40118a-b8f2-4fc1-9d3c-63995ac3da50';
floorPlankLiner = '3a8000bb-27bc-406a-8407-500984d4f04e';
fpl = 'hide'; // var for initial change
hatchPlanks = 'b85b645b-f61c-430f-8e17-965d870e2e1e';
floorPlankLinerHatches = '92cee2e9-617a-4ce6-99c4-d80c9e4dd7a1';

// Textures:
hcbwhite = '9a83f2b96d3541fa9be8650dc4d6e656';
designerWhite = '74c7eac322f049198410a7f1169110a2';
highGlossTeak = 'bd5481820f7045f3ba41c2560275cd5d';
deepTitanium = '09255ff0ae8143799590415f1f92bc54';
grayOnyx = 'a7a6f8f6bd1a43aa90f49f1b29189154';
naturalGray = '82ab805cec6545ca831d3ffdf55e86fb';
platinum = 'cc3ca5aede754546b152a13d18c39779';
rawTeak = '65ba2956921a46829db2e41ccac3b7ab';
sahara = 'a51b1f4de9b64f51879a257024fe3c4d';

var section1 = hull;
var section2 = waterLineStripe;
var section3 = mercury600Set4;
var section4 = mercury450Set5;
var section5 = yamahaSet4;
var section6 = frame;
var section7 = upholstery;
var section8 = headrests;
var section9 = sleighSeatTableUpper;
var section10 = sleighSeatTableLower;
var section11 = chairs;
var section12 = floorPlankLiner;
var section13 = floorPlankLinerHatches;
var section14 = baitwell;
var section15 = cabinDoor;
var section16 = chairBase;
var section17 = chairsStand;
var section18 = cleatGasscapPullsHawserHingesPoleHoldersHardware;
var section19 = consoleCabin;
var section20 = mercury600Set4Pinstripe;
var section21 = mercury450Set5Pinstripe;
var section22 = yamahaSet4Pinstripe;
var section23 = ladderBack;

t1 = designerWhite;
t2 = highGlossTeak;
t3 = deepTitanium;
t4 = grayOnyx;
t5 = naturalGray;
t6 = platinum;
t7 = rawTeak;
t8 = sahara;

var s1 = getParameterByName('s1');
var s2 = getParameterByName('s2');
var s3 = getParameterByName('s3');
var s4 = getParameterByName('s4');
var s5 = getParameterByName('s5');
var s6 = getParameterByName('s6');
var s7 = getParameterByName('s7');
var s8 = getParameterByName('s8');
var s9 = getParameterByName('s9');
var s10 = getParameterByName('s10');
var s11 = getParameterByName('s11');
var s12 = getParameterByName('s12');
var s13 = getParameterByName('s13');
var s14 = getParameterByName('s14');
var s15 = getParameterByName('s15');
var s16 = getParameterByName('s16');
var s17 = getParameterByName('s17');
var s18 = getParameterByName('s18');
var s19 = getParameterByName('s19');
var eng = getParameterByName('eng');

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
          console.log(m.name, m);
        }
        document.querySelector('.options').style.display = 'block';
        document.getElementById('hamburger-menu').style.transform =
          'rotate(360deg)';

        getURLCodes();
        getURLEng();

        changeItemColor('hcbwhite', hatches);
        changeItemColor('hcbwhite', deckRing);
        changeItemColor('hcbwhite', chairBase);
        changeItemColor('hcbwhite', consoleCabin);
        changeItemColor('hcbwhite', cabinDoor);
        changeItemColor('cdcdcd', floorPlankLiner);
        changeItemColor('cdcdcd', floorPlankLinerHatches);
        api.hide(2495); // Floor Planks
        api.hide(2513); // Hatch Planks
        api.hide(3385); // Water line Stripe

        if (
          s10 != 'highGlossTeak' &&
          s10 != 'deepTitanium' &&
          s10 != 'grayOnyx' &&
          s10 != 'naturalGray' &&
          s10 != 'platinum' &&
          s10 != 'rawTeak' &&
          s10 != 'sahara'
        ) {
          changeItemColor('designerWhite', sleighSeatTableLower);
        }
        // changeItemColor('designerWhite', sleighSeatTableUpper);

        console.log('s1: ' + s1);
        console.log('s2: ' + s2);
        console.log('s3: ' + s3);
        console.log('s9: ' + s9);
        console.log('s10: ' + s10);
      });

      function getURLEng() {
        console.log('eng: ' + eng);
        if (eng == '2653') {
          api.show(2653); // Mercury 600 default
          api.show(2815); // Mercury 600 propeller default
          api.show(2851); // Mercury 600 pinstripe default

          api.hide(2695); // Mercury 450
          api.hide(2797); // Mercury 450 propeller
          api.hide(2887); // Mercury 450 pinstripe

          api.hide(2623); // Yamaha
          api.hide(2833); // Yamaha propeller
          api.hide(2869); // Yamaha pinstripe
        }

        if (eng == '2695') {
          api.hide(2653); // Mercury 600 default
          api.hide(2815); // Mercury 600 propeller default
          api.hide(2851); // Mercury 600 pinstripe default

          api.show(2695); // Mercury 450
          api.show(2797); // Mercury 450 propeller
          api.show(2887); // Mercury 450 pinstripe

          api.hide(2623); // Yamaha
          api.hide(2833); // Yamaha propeller
          api.hide(2869); // Yamaha pinstripe
        }

        if (eng == '2623') {
          api.hide(2653); // Mercury 600 default
          api.hide(2815); // Mercury 600 propeller default
          api.hide(2851); // Mercury 600 pinstripe default

          api.hide(2695); // Mercury 450
          api.hide(2797); // Mercury 450 propeller
          api.hide(2887); // Mercury 450 pinstripe

          api.show(2623); // Yamaha
          api.show(2833); // Yamaha propeller
          api.show(2869); // Yamaha pinstripe
        }
      }

      api.hide(3173); // ladderback
      // api.hide(3209); // ladderback2

      api.hide(2623); // Yamaha
      api.hide(2833); // Yamaha propeller
      api.hide(2869); // Yamaha pinstripe

      api.hide(2695); // Mercury 450
      api.hide(2797); // Mercury 450 propeller
      api.hide(2887); // Mercury 450 pinstripe

      var id = 2653;

      document
        .querySelector('li.item-title.item-title-merc600')
        .addEventListener('click', function () {
          api.show(2653); // Mercury 600 default
          api.show(2815); // Mercury 600 propeller default
          api.show(2851); // Mercury 600 pinstripe default

          api.hide(2695); // Mercury 450
          api.hide(2797); // Mercury 450 propeller
          api.hide(2887); // Mercury 450 pinstripe

          api.hide(2623); // Yamaha
          api.hide(2833); // Yamaha propeller
          api.hide(2869); // Yamaha pinstripe
          eng = '2653';
        });

      document
        .querySelector('li.item-title.item-title-merc450')
        .addEventListener('click', function () {
          api.hide(2653); // Mercury 600 default
          api.hide(2815); // Mercury 600 propeller default
          api.hide(2851); // Mercury 600 pinstripe default

          api.show(2695); // Mercury 450
          api.show(2797); // Mercury 450 propeller
          api.show(2887); // Mercury 450 pinstripe

          api.hide(2623); // Yamaha
          api.hide(2833); // Yamaha propeller
          api.hide(2869); // Yamaha pinstripe
          eng = '2695';
        });

      document
        .querySelector('li.item-title.item-title-yamaha')
        .addEventListener('click', function () {
          api.hide(2653); // Mercury 600 default
          api.hide(2815); // Mercury 600 propeller default
          api.hide(2851); // Mercury 600 pinstripe default

          api.hide(2695); // Mercury 450
          api.hide(2797); // Mercury 450 propeller
          api.hide(2887); // Mercury 450 pinstripe

          api.show(2623); // Yamaha
          api.show(2833); // Yamaha propeller
          api.show(2869); // Yamaha pinstripe
          eng = '2623';
        });

      document
        .querySelector('.no-color-block')
        .addEventListener('click', function () {
          api.hide(3385); // Water Stripe
          for (var a = 1; a < 19; a++) {
            document.querySelector(
              '.color-block.section-2.block-' + a
            ).style.borderColor = '#707070';
          }
        });

      document
        .querySelector('.no-color-block-merc600')
        .addEventListener('click', function () {
          api.hide(2851); // merc600 Stripe
          for (var a = 1; a < 19; a++) {
            document.querySelector(
              '.color-block.section-20.block-' + a
            ).style.borderColor = '#707070';
          }
        });

      document
        .querySelector('.no-color-block-ladderBack')
        .addEventListener('click', function () {
          // changeItemColor('hcbwhite', ladderBack);
          api.hide(3173);
          api.show(3209);
          console.log('teak set');
          for (var a = 1; a < 19; a++) {
            document.querySelector(
              '.color-block.section-23.block-' + a
            ).style.borderColor = '#707070';
          }
        });

      document
        .querySelector('.no-color-block-merc450')
        .addEventListener('click', function () {
          api.hide(2887); // Water Stripe
          for (var a = 1; a < 19; a++) {
            document.querySelector(
              '.color-block.section-21.block-' + a
            ).style.borderColor = '#707070';
          }
        });

      document
        .querySelector('.no-color-block-yamaha')
        .addEventListener('click', function () {
          api.hide(2869); // Water Stripe
          for (var a = 1; a < 19; a++) {
            document.querySelector(
              '.color-block.section-22.block-' + a
            ).style.borderColor = '#707070';
          }
        });

      function changeItemColor(color, itemId) {
        for (var i = 0; i < myMaterials.length; i++) {
          var m = myMaterials[i]; // here change only the channel you need to change
          if (m.id == itemId) {
            console.log('color: ' + color);
            console.log('name: ' + m.name + ' ' + m.id);
            console.log('itemId: ' + itemId);

            if (
              itemId == hatches ||
              itemId == deckRing ||
              itemId == chairBase ||
              itemId == consoleCabin ||
              itemId == cabinDoor ||
              itemId == floorPlanks ||
              itemId == hatchPlanks
            ) {
              setThisSection = false;
            } else {
              setThisSection = true;
            }

            if (itemId == waterLineStripe) {
              api.show(3385); // water stripe
            }

            if (itemId == mercury600Set4Pinstripe) {
              api.show(2851); // mercury600 stripe
            }

            if (itemId == mercury450Set5Pinstripe) {
              api.show(2887); // mercury450 stripe
            }

            if (itemId == yamahaSet4Pinstripe) {
              api.show(2869); // yamaha stripe
            }

            if (fpl == 'show') {
              api.show(2495);
              api.show(2513);
            } else if (fpl == 'hide') {
              api.hide(2495);
              api.hide(2513);
            }

            console.log('fpl: ', fpl);

            if (color == 'cdcdcd') {
              m.channels.AlbedoPBR.color = [
                0.6104955708078648, 0.6104955708078648, 0.6104955708078648,
              ];
              if (setThisSection === true) {
                setSection(itemId, color);
              }
            } else if (color == 'a4373e') {
              m.channels.AlbedoPBR.color = [
                0.37867625092984036, 0.03423020656508195, 0.04455262731642138,
              ];
              if (setThisSection === true) {
                setSection(itemId, color);
              }
            } else if (color == '39414c') {
              m.channels.AlbedoPBR.color = [
                0.04091519690685319, 0.052860647023180246, 0.07227185068231748,
              ];
              if (setThisSection === true) {
                setSection(itemId, color);
              }
            } else if (color == '5e5e5e') {
              m.channels.AlbedoPBR.color = [
                0.1119324278369056, 0.1119324278369056, 0.1119324278369056,
              ];
              if (setThisSection === true) {
                setSection(itemId, color);
              }
            } else if (color == '225a81') {
              m.channels.AlbedoPBR.color = [
                0.01599629336550963, 0.1022417330881013, 0.21952619972926923,
              ];
              if (setThisSection === true) {
                setSection(itemId, color);
              }
            } else if (color == '4691c0') {
              m.channels.AlbedoPBR.color = [
                0.06124605423161761, 0.28314874042999194, 0.5271151257058131,
              ];
              if (setThisSection === true) {
                setSection(itemId, color);
              }
            } else if (color == 'bfb8aa') {
              m.channels.AlbedoPBR.color = [
                0.5209955732043541, 0.4793201831008268, 0.4019777798321956,
              ];
              if (setThisSection === true) {
                setSection(itemId, color);
              }
            } else if (color == '978270') {
              m.channels.AlbedoPBR.color = [
                0.30946892281750854, 0.2232279573168085, 0.16202937563911096,
              ];
              if (setThisSection === true) {
                setSection(itemId, color);
              }
            } else if (color == '65a4be') {
              m.channels.AlbedoPBR.color = [
                0.13013647669036427, 0.3712376804741491, 0.5149176653765214,
              ];
              if (setThisSection === true) {
                setSection(itemId, color);
              }
            } else if (color == '393939') {
              m.channels.AlbedoPBR.color = [
                0.04091519690685319, 0.04091519690685319, 0.04091519690685319,
              ];
              if (setThisSection === true) {
                setSection(itemId, color);
              }
            } else if (color == '546f7e') {
              m.channels.AlbedoPBR.color = [
                0.08865558628577294, 0.15896083506088038, 0.20863687014525575,
              ];
              if (setThisSection === true) {
                setSection(itemId, color);
              }
            } else if (color == '1381b0') {
              m.channels.AlbedoPBR.color = [
                0.006512090792594473, 0.21952619972926923, 0.4341536361747489,
              ];
              if (setThisSection === true) {
                setSection(itemId, color);
              }
            } else if (color == 'daf0eb') {
              m.channels.AlbedoPBR.color = [
                0.7011018919329731, 0.8713671191987973, 0.8307698767746546,
              ];
              if (setThisSection === true) {
                setSection(itemId, color);
              }
            } else if (color == '67c7d9') {
              m.channels.AlbedoPBR.color = [
                0.13563332965520566, 0.5711248294648731, 0.6938717612919899,
              ];
              if (setThisSection === true) {
                setSection(itemId, color);
              }
            } else if (color == '8e8b83') {
              m.channels.AlbedoPBR.color = [
                0.2704977910130658, 0.2581828529215958, 0.22696587351009836,
              ];
              if (setThisSection === true) {
                setSection(itemId, color);
              }
            } else if (color == 'e3ceb5') {
              m.channels.AlbedoPBR.color = [
                0.7681511472475071, 0.6172065624196509, 0.4620769996544071,
              ];
              if (setThisSection === true) {
                setSection(itemId, color);
              }
            } else if (color == '87d3dc') {
              m.channels.AlbedoPBR.color = [
                0.24228112246555486, 0.6514056374198239, 0.7156935005064807,
              ];
              if (setThisSection === true) {
                setSection(itemId, color);
              }
            } else if (color == '58331A') {
              m.channels.AlbedoPBR.color = [
                0.09758734714186242, 0.03310476657088505, 0.010329823029626938,
              ];
              if (setThisSection === true) {
                setSection(itemId, color);
              }
            } else if (color == 'hcbwhite') {
              console.log(
                'before hcbwhite: ' +
                  JSON.stringify(m.channels.AlbedoPBR.texture)
              );
              m.channels.AlbedoPBR.texture.uid = hcbwhite;
              m.channels.AlbedoPBR.color = false;
              console.log(
                'hcbwhite: ' + JSON.stringify(m.channels.AlbedoPBR.texture)
              );
              if (setThisSection === true) {
                setSection(itemId, color);
              }
            } else if (color == 'sahara') {
              console.log(
                'before sahara: ' + JSON.stringify(m.channels.AlbedoPBR.texture)
              );
              m.channels.AlbedoPBR.texture.uid = sahara;
              m.channels.AlbedoPBR.color = false;
              console.log(
                'sahara: ' + JSON.stringify(m.channels.AlbedoPBR.texture)
              );
              if (setThisSection === true) {
                setSection(itemId, color);
              }
            } else if (color == 'deepTitanium') {
              m.channels.AlbedoPBR.texture.uid = deepTitanium;
              m.channels.AlbedoPBR.color = false;
              console.log('deepTitanium: ' + m.channels.AlbedoPBR.texture.uid);
              if (setThisSection === true) {
                setSection(itemId, color);
              }
            } else if (color == 'naturalGray') {
              m.channels.AlbedoPBR.texture.uid = naturalGray;
              m.channels.AlbedoPBR.color = false;
              console.log('naturalGray: ' + m.channels.AlbedoPBR.texture.uid);
              if (setThisSection === true) {
                setSection(itemId, color);
              }
            } else if (color == 'designerWhite') {
              m.channels.AlbedoPBR.texture.uid = designerWhite;
              m.channels.AlbedoPBR.color = false;
              console.log('designerWhite: ' + m.channels.AlbedoPBR.texture.uid);
              if (setThisSection === true) {
                setSection(itemId, color);
              }
            } else if (color == 'platinum') {
              m.channels.AlbedoPBR.texture.uid = platinum;
              m.channels.AlbedoPBR.color = false;
              console.log('platinum: ' + m.channels.AlbedoPBR.texture.uid);
              if (setThisSection === true) {
                setSection(itemId, color);
              }
            } else if (color == 'grayOnyx') {
              m.channels.AlbedoPBR.texture.uid = grayOnyx;
              m.channels.AlbedoPBR.color = false;
              console.log('grayOnyx: ' + m.channels.AlbedoPBR.texture.uid);
              if (setThisSection === true) {
                setSection(itemId, color);
              }
            } else if (color == 'highGlossTeak') {
              m.channels.AlbedoPBR.texture.uid = highGlossTeak;
              m.channels.AlbedoPBR.color = false;
              console.log('highGlossTeak: ' + m.channels.AlbedoPBR.texture.uid);
              if (setThisSection === true) {
                setSection(itemId, color);
              }
            } else if (color == 'rawTeak') {
              m.channels.AlbedoPBR.texture.uid = rawTeak;
              m.channels.AlbedoPBR.color = false;
              console.log('rawTeak: ' + m.channels.AlbedoPBR.texture.uid);
              if (setThisSection === true) {
                setSection(itemId, color);
              }
            } else if (color == 'Color Wheel') {
              m.channels.AlbedoPBR.color = colorWheel;
              // console.log("colorWheel: "+m.channels.DiffuseColor.color);
              // console.log("colorWheel m: "+JSON.stringify(m));
              console.log('pre color changed: ' + absoluteColor);
              var regexp = /#(\S)/g;
              absoluteColor = absoluteColor.replace(regexp, '$1');
              console.log('post color changed: ' + absoluteColor);
              setSection(itemId, absoluteColor);
            } else {
              thisColor = '#' + color;
              sendColor(thisColor);
              m.channels.AlbedoPBR.color = colorWheel;
              if (setThisSection === true) {
                setSection(itemId, color);
              }
            }
            api.setMaterial(m);
          }
        }
      }

      function getURLCodes() {
        if (s1 !== null) {
          // Hull
          changeItemColor(s1, section1);
          console.log('s1: ' + s1 + ' | section: ' + section1);
        }
        if (s2 !== null) {
          // Water Line Stripe
          changeItemColor(s2, section2);
          console.log('s2: ' + s2 + ' | section: ' + section2);
        }
        if (s3 !== null) {
          // Mercury 600 set or 4
          changeItemColor(s3, section3);
          console.log('s3: ' + s3 + ' | section: ' + section3);
        }
        if (s4 !== null) {
          // Mercury 450 set of 5
          changeItemColor(s4, section4);
          console.log('s4: ' + s4 + ' | section: ' + section4);
        }
        if (s5 !== null) {
          // Yamaha set of 4
          changeItemColor(s5, section5);
          console.log('s5: ' + s5 + ' | section: ' + section5);
        }
        if (s6 !== null) {
          // Frame
          changeItemColor(s6, section6);
          console.log('s6: ' + s6 + ' | section: ' + section6);
        }
        if (s7 !== null) {
          // Upholstery - Base color
          changeItemColor(s7, section7);
          console.log('s7: ' + s7 + ' | section: ' + section7);
          changeItemColor(s7, section11);
          console.log('s11: ' + s11 + ' | section: ' + section11);
        }
        if (s8 !== null) {
          // Upholstery - Head rest
          changeItemColor(s8, section8);
          console.log('s8: ' + s8 + ' | section: ' + section8);
        }
        if (s9 !== null) {
          // Counters
          changeItemColor(s9, section9);
          console.log('s9: ' + s9 + ' | section: ' + section9);
          changeItemColor(s9, section10);
          console.log('s10: ' + s10 + ' | section: ' + section10);
        }
        if (s12 !== null) {
          // Floor Planks
          changeItemColor(s12, section12);
          console.log('s12: ' + s12 + ' | section: ' + section12);
          changeItemColor(s12, section13);
          console.log('s13: ' + s13 + ' | section: ' + section13);
        }
      }

      var sectionList = 13;
      var blockList = 19;
      for (let i = 1; i < sectionList; i++) {
        for (let b = 1; b < blockList; b++) {
          if (i == 9) {
            a = 20;
          } else if (i == 10) {
            a = 21;
          } else if (i == 11) {
            a = 22;
          } else if (i == 12) {
            a = 23;
          } else {
            a = i;
          }
          document
            .querySelector('.color-block.section-' + a + '.block-' + b)
            .addEventListener('click', function () {
              if (i == 1) {
                // Hull
                thisSection = section1;
              } else if (i == 2) {
                // Water Line Stripe
                thisSection = section2;
              } else if (i == 3) {
                // Mercury 600 set of 4
                thisSection = section3;
              } else if (i == 4) {
                // Mercury 450 set of 5
                thisSection = section4;
              } else if (i == 5) {
                // Yamaha Set of 4
                thisSection = section5;
              } else if (i == 6) {
                // Frame
                thisSection = section6;
              } else if (i == 7) {
                // Upholstery Base color
                thisSection = section7;
                secondSection = section11;
              } else if (i == 8) {
                // Upholstery - Head rest
                thisSection = section8;
              } else if (i == 9) {
                // Mercury 600
                thisSection = section20;
                console.log('thisSection = section20');
              } else if (i == 10) {
                // Mercury 450
                thisSection = section21;
              } else if (i == 11) {
                // Yamaha
                thisSection = section22;
              } else if (i == 12) {
                // ladderback
                thisSection = section23;
                api.show(3173);
                api.hide(3209);
              }

              if (b == 1) {
                hcbColor = 'cdcdcd';
              } else if (b == 2) {
                hcbColor = 'a4373e';
              } else if (b == 3) {
                hcbColor = '39414c';
              } else if (b == 4) {
                hcbColor = '5e5e5e';
              } else if (b == 5) {
                hcbColor = '225a81';
              } else if (b == 6) {
                hcbColor = '4691c0';
              } else if (b == 7) {
                hcbColor = 'bfb8aa';
              } else if (b == 8) {
                hcbColor = '978270';
              } else if (b == 9) {
                hcbColor = '65a4be';
              } else if (b == 10) {
                hcbColor = '393939';
              } else if (b == 11) {
                hcbColor = '546f7e';
              } else if (b == 12) {
                hcbColor = '1381b0';
              } else if (b == 13) {
                hcbColor = 'daf0eb';
              } else if (b == 14) {
                hcbColor = '67c7d9';
              } else if (b == 15) {
                hcbColor = '8e8b83';
              } else if (b == 16) {
                hcbColor = 'e3ceb5';
              } else if (b == 17) {
                hcbColor = '87d3dc';
              } else if (b == 18) {
                hcbColor = 'Color Wheel';
              }

              // console.log("__section: "+i+" block: "+b);
              // console.log('thisSection: ', thisSection);
              // console.log('hcbColor: ', hcbColor);
              changeItemColor(hcbColor, thisSection);
              if (thisSection == section7) {
                changeItemColor(hcbColor, secondSection);
              }
            });
        }
      }
      var textureBlockList = 27;
      for (let b = 19; b < textureBlockList; b++) {
        document
          .querySelector('.color-block.section-9.block-' + b)
          .addEventListener('click', function () {
            thisSection = section9;
            secondSection = section10;

            if (b == 19) {
              hcbColor = 'sahara';
            } else if (b == 20) {
              hcbColor = 'deepTitanium';
            } else if (b == 21) {
              hcbColor = 'naturalGray';
            } else if (b == 22) {
              hcbColor = 'designerWhite';
            } else if (b == 23) {
              hcbColor = 'platinum';
            } else if (b == 24) {
              hcbColor = 'grayOnyx';
            } else if (b == 25) {
              hcbColor = 'highGlossTeak';
            } else if (b == 26) {
              hcbColor = 'rawTeak';
            }

            // console.log("__block: "+b);
            // console.log('hcbColor: ', hcbColor);
            // console.log('thisSection-9: ', thisSection);
            // console.log('secondSection-10: ', secondSection);
            changeItemColor(hcbColor, thisSection);
            changeItemColor(hcbColor, secondSection);
          });
      }

      for (let b = 25; b < textureBlockList; b++) {
        document
          .querySelector('.color-block.section-12.block-' + b)
          .addEventListener('click', function () {
            fpl = 'show';
            thisSection = section12;
            secondSection = section13;

            if (b == 25) {
              hcbColor = 'highGlossTeak';
            } else if (b == 26) {
              hcbColor = 'rawTeak';
            }

            changeItemColor(hcbColor, floorPlanks);
            changeItemColor(hcbColor, hatchPlanks);
            changeItemColor('58331A', floorPlankLiner);
            changeItemColor('58331A', floorPlankLinerHatches);
          });
      }
      document
        .querySelector('.no-floor-block')
        .addEventListener('click', function () {
          fpl = 'show';
          thisSection = section12;
          secondSection = section13;

          fpl = 'hide';
          console.log('fpl: ', fpl);
          console.log('floorPlankLiner: ', floorPlankLiner);
          console.log('floorPlankLinerHatches: ', floorPlankLinerHatches);
          changeItemColor('cdcdcd', floorPlankLiner);
          changeItemColor('cdcdcd', floorPlankLinerHatches);
        });
    });
  });
};

client.init(uid, {
  success: success,
  error: error,
  autostart: 1,
  preload: 1,
  ui_infos: 0,
  ui_stop: 0,
});

//////////////////////////////////
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
var showTheMerc600 = false;
var showTheMerc450 = false;
var showTheYamaha = false;
var showTheHull = false;
var showTheUpholstery = false;

function showColors(elementClass, elementTitle, icon) {
  hideColors();
  if (elementClass != colorSectionClass) {
    document.querySelector(
      '.item-icon.item-x-icon.item-x-' + icon + ''
    ).style.display = 'block';
    sectionXIcon = icon;

    document.querySelector(
      '.item-icon.item-down-icon.item-down-' + icon + ''
    ).style.display = 'none';
    sectionDownIcon = icon;

    document.querySelector(
      'li.color-block-section.' + elementClass + ''
    ).style.display = 'block';
    colorSectionClass = elementClass;

    document.querySelector(
      '.item-title.' + elementTitle + ''
    ).style.backgroundColor = 'rgb(255,255,255,0.5)';
    itemTitle = elementTitle;
    // console.log("itemTitle: "+itemTitle+" | colorSectionClass: "+colorSectionClass)
    // console.log("icon: "+icon);
  } else {
    document.querySelector(
      '.item-icon.item-x-icon.item-x-' + icon + ''
    ).style.display = 'none';
    sectionXIcon = '';

    document.querySelector(
      '.item-icon.item-down-icon.item-down-' + icon + ''
    ).style.display = 'block';
    sectionDownIcon = '';

    document.querySelector(
      'li.color-block-section.' + elementClass + ''
    ).style.display = 'none';
    colorSectionClass = '';

    document.querySelector(
      '.item-title.' + elementTitle + ''
    ).style.backgroundColor = null;
    itemTitle = '';
  }
}

function hideColors() {
  if (colorSectionClass != '') {
    document.querySelector(
      'li.color-block-section.' + colorSectionClass + ''
    ).style.display = 'none';
  }
  if (itemTitle != '') {
    document.querySelector(
      '.item-title.' + itemTitle + ''
    ).style.backgroundColor = null;
  }
  if (sectionDownIcon != '') {
    document.querySelector(
      '.item-icon.item-down-icon.item-down-' + sectionDownIcon + ''
    ).style.display = 'block';
    document.querySelector(
      '.item-icon.item-x-icon.item-x-' + sectionXIcon + ''
    ).style.display = 'none';
  }
}

function changeColor(section, block) {
  if (block == 'block-1') {
    title = 'HCB White';
  } else if (block == 'block-2') {
    title = 'Viper Red';
  } else if (block == 'block-3') {
    title = 'Navy';
  } else if (block == 'block-4') {
    title = 'Destroyer';
  } else if (block == 'block-5') {
    title = 'Mediterranean Blue';
  } else if (block == 'block-6') {
    title = 'Admiral Blue';
  } else if (block == 'block-7') {
    title = 'Sand';
  } else if (block == 'block-8') {
    title = 'Bronze';
  } else if (block == 'block-9') {
    title = 'Sky Blue';
  } else if (block == 'block-10') {
    title = 'Jet Black';
  } else if (block == 'block-11') {
    title = 'Steel Blue';
  } else if (block == 'block-12') {
    title = 'Jet Stream Blue';
  } else if (block == 'block-13') {
    title = 'Aqua Mist';
  } else if (block == 'block-14') {
    title = 'Bimini Blue';
  } else if (block == 'block-15') {
    title = 'Storm Gray';
  } else if (block == 'block-16') {
    title = 'San Mateo';
  } else if (block == 'block-17') {
    title = 'Caribbean Blue';
  } else if (block == 'block-18') {
    title = 'Color Wheel';
  } else if (block == 'block-19') {
    title = 'Sahara';
  } else if (block == 'block-20') {
    title = 'Deep Titanium';
  } else if (block == 'block-21') {
    title = 'Natural Gray';
  } else if (block == 'block-22') {
    title = 'Designer White';
  } else if (block == 'block-23') {
    title = 'Platinum';
  } else if (block == 'block-24') {
    title = 'Gray Onyx';
  } else if (block == 'block-25') {
    if (section == 'section-12') {
      title = 'Raw Teak';
    } else {
      title = 'High Gloss Teak';
    }
  } else if (block == 'block-26') {
    title = 'Raw Teak';
  }
  // console.log("title: "+title);
  // console.log("section: "+section);
  // console.log("block: "+block);

  document.querySelector(
    '.color-header-section.color-header-' + section
  ).innerHTML = title;

  if (section == 'section-9') {
    changeCounterTopsBorderColor(block);
  } else if (section == 'section-12') {
    changeFloorBorderColor(block);
  } else {
    changeBorderColor(section, block);
  }
} // End function changeColor()

function changeBorderColor(section, block) {
  // console.log("section: "+section+" | block: "+block);
  var blocks = 19;
  for (let i = 1; i < blocks; i++) {
    // console.log('start i: '+i);
    if (block == 'block-' + i) {
      document.querySelector(
        '.color-block.' + section + '.' + block + ''
      ).style.borderColor = 'white';

      if (section == 'section-2') {
        document.querySelector('.slash').style.borderBottomColor = '#707070';
        document.querySelector('.no-color-block').style.borderColor = '#707070';
      }

      if (section == 'section-20') {
        document.querySelector('.slash-merc600').style.borderBottomColor =
          '#707070';
        document.querySelector('.no-color-block-merc600').style.borderColor =
          '#707070';
      }

      if (section == 'section-21') {
        document.querySelector('.slash-merc450').style.borderBottomColor =
          '#707070';
        document.querySelector('.no-color-block-merc450').style.borderColor =
          '#707070';
      }

      if (section == 'section-22') {
        document.querySelector('.slash-yamaha').style.borderBottomColor =
          '#707070';
        document.querySelector('.no-color-block-yamaha').style.borderColor =
          '#707070';
      }

      if (section == 'section-23') {
        document.querySelector('.no-color-block-ladderBack').style.borderColor =
          '#707070';
      }
    } else {
      document.querySelector(
        '.color-block.' + section + '.block-' + i + ''
      ).style.borderColor = '#707070';
    }
    if (absoluteColor != '#000000') {
      document.querySelector(
        '.color-block.section-' + i + '.block-18'
      ).style.backgroundColor = absoluteColor;
      /* document.querySelector("span.custom").style.color = absoluteColor; */
    }
    // console.log('end i: '+i);
  }
} // End function changeBorderColor

function changeCounterTopsBorderColor(block) {
  // console.log("in counter block: "+block);
  var blocks = 27;
  for (let i = 19; i < blocks; i++) {
    // console.log('start i: '+i);
    if (block == 'block-' + i) {
      document.querySelector(
        '.color-block.section-9.' + block + ''
      ).style.borderColor = 'white';
    } else {
      document.querySelector(
        '.color-block.section-9.block-' + i + ''
      ).style.borderColor = '#707070';
    }
    // console.log('end i: '+i);
  }
}

function changeFloorBorderColor(block) {
  // console.log("in counter block: "+block);
  var blocks = 27;
  for (let i = 25; i < blocks; i++) {
    // console.log('start i: '+i);
    if (block == 'block-' + i) {
      document.querySelector(
        '.color-block.section-9.' + block + ''
      ).style.borderColor = 'white';
    } else {
      document.querySelector(
        '.color-block.section-9.block-' + i + ''
      ).style.borderColor = '#707070';
      document.querySelector('.no-floor-block').style.borderColor = '#707070';
      document.querySelector('.floor_slash').style.borderBottomColor =
        '#707070';
    }
    // console.log('end i: '+i);
  }
}

function openOptions() {
  if (menuOptions == 'show') {
    document.querySelector('.options').style.display = 'none';
    /*document.getElementById('hamburger-menu').style.transform = 'scaleY(1)';*/
    /*document.getElementById('hamburger-menu').style.transform = 'rotate(0deg)';*/
    menuOptions = 'hide';
  } else {
    document.querySelector('.options').style.display = 'block';
    /*document.getElementById('hamburger-menu').style.transform = 'scaleY(0.6)';*/
    /*document.getElementById('hamburger-menu').style.transform = 'rotate(90deg)';*/
    menuOptions = 'show';
  }
  /*document.querySelector(".hamburgerIcon").style.display = 'none';*/
}

function selectEngine(engine) {
  // console.log('engine: '+engine);
  var engines = 8;
  for (let i = 1; i < engines; i++) {
    if (engine == 'engine-' + i) {
      test = '.engine.' + engine + '';
      // console.log('engine test: '+test);
      document.querySelector('.' + engine + '').style.color = '#cdcdcd';
    } else {
      document.querySelector('.engine-' + i + '').style.color = '#225a81';
    }
  }
}

function showHull() {
  if (showTheHull == false) {
    // console.log("Show Hull");
    document.querySelector('#hull').style.display = 'block';
    document.querySelector(
      '.item-icon.item-down-icon.item-down-icon-hull'
    ).style.display = 'none';
    document.querySelector(
      '.item-icon.item-x-icon.item-x-icon-hull'
    ).style.display = 'block';
    showTheHull = true;
  } else {
    document.querySelector('#hull').style.display = 'none';
    document.querySelector(
      '.item-icon.item-down-icon.item-down-icon-hull'
    ).style.display = 'block';
    document.querySelector(
      '.item-icon.item-x-icon.item-x-icon-hull'
    ).style.display = 'none';
    showTheHull = false;
  }
}

function noColor(item) {
  if (item == 'waterLineStripe') {
    document.querySelector('.slash').style.borderBottomColor = '#a4373e';
    document.querySelector('.no-color-block').style.borderColor = '#a4373e';
    document.querySelector(
      '.color-header-section.color-header-section-2'
    ).innerHTML = 'No Color';
  }
  if (item == 'merc600') {
    document.querySelector('.slash-merc600').style.borderBottomColor =
      '#a4373e';
    document.querySelector('.no-color-block-merc600').style.borderColor =
      '#a4373e';
    document.querySelector(
      '.color-header-section.color-header-section-20'
    ).innerHTML = 'No Color';
  }
  if (item == 'merc450') {
    document.querySelector('.slash-merc450').style.borderBottomColor =
      '#a4373e';
    document.querySelector('.no-color-block-merc450').style.borderColor =
      '#a4373e';
    document.querySelector(
      '.color-header-section.color-header-section-21'
    ).innerHTML = 'No Color';
  }
  if (item == 'yamaha') {
    document.querySelector('.slash-yamaha').style.borderBottomColor = '#a4373e';
    document.querySelector('.no-color-block-yamaha').style.borderColor =
      '#a4373e';
    document.querySelector(
      '.color-header-section.color-header-section-22'
    ).innerHTML = 'No Color';
  }
  if (item == 'ladderBack') {
    document.querySelector('.no-color-block-ladderBack').style.borderColor =
      '#ffffff';
    document.querySelector(
      '.color-header-section.color-header-section-23'
    ).innerHTML = 'Teak';
  }
}

function noFloor() {
  document.querySelector('.floor_slash').style.borderBottomColor = '#a4373e';
  document.querySelector('.no-floor-block').style.borderColor = '#a4373e';
  document.querySelector(
    '.color-header-section.color-header-section-12'
  ).innerHTML = 'No Floor Planks';
}

function showUpholstery() {
  if (showTheUpholstery == false) {
    // console.log("Show Upholstery");
    document.querySelector('#upholstery').style.display = 'block';
    document.querySelector(
      '.item-icon.item-down-icon.item-down-icon-upholstery'
    ).style.display = 'none';
    document.querySelector(
      '.item-icon.item-x-icon.item-x-icon-upholstery'
    ).style.display = 'block';
    showTheUpholstery = true;
  } else {
    document.querySelector('#upholstery').style.display = 'none';
    document.querySelector(
      '.item-icon.item-down-icon.item-down-icon-upholstery'
    ).style.display = 'block';
    document.querySelector(
      '.item-icon.item-x-icon.item-x-icon-upholstery'
    ).style.display = 'none';
    showTheUpholstery = false;
  }
}

function showEngines() {
  if (showTheEngines == false) {
    // console.log("Show engines");
    document.querySelector('#engines').style.display = 'block';
    document.querySelector(
      '.item-icon.item-down-icon.item-down-icon-engines'
    ).style.display = 'none';
    document.querySelector(
      '.item-icon.item-x-icon.item-x-icon-engines'
    ).style.display = 'block';
    showTheEngines = true;
  } else {
    document.querySelector('#engines').style.display = 'none';
    document.querySelector(
      '.item-icon.item-down-icon.item-down-icon-engines'
    ).style.display = 'block';
    document.querySelector(
      '.item-icon.item-x-icon.item-x-icon-engines'
    ).style.display = 'none';
    showTheEngines = false;
  }
}

function showMerc600() {
  if (showTheMerc600 == false) {
    document.querySelector('#merc600').style.display = 'block';
    document.querySelector(
      '.item-icon.item-down-icon.item-down-icon-merc600'
    ).style.display = 'none';
    document.querySelector(
      '.item-icon.item-x-icon.item-x-icon-merc600'
    ).style.display = 'block';
    showTheMerc600 = true;
    document.querySelector('#merc450').style.display = 'none';
    document.querySelector(
      '.item-icon.item-down-icon.item-down-icon-merc450'
    ).style.display = 'block';
    document.querySelector(
      '.item-icon.item-x-icon.item-x-icon-merc450'
    ).style.display = 'none';
    showTheMerc450 = false;
    document.querySelector('#yamaha').style.display = 'none';
    document.querySelector(
      '.item-icon.item-down-icon.item-down-icon-yamaha'
    ).style.display = 'block';
    document.querySelector(
      '.item-icon.item-x-icon.item-x-icon-yamaha'
    ).style.display = 'none';
    showTheYamaha = false;
  } else {
    document.querySelector('#merc600').style.display = 'none';
    document.querySelector(
      '.item-icon.item-down-icon.item-down-icon-merc600'
    ).style.display = 'block';
    document.querySelector(
      '.item-icon.item-x-icon.item-x-icon-merc600'
    ).style.display = 'none';
    showTheMerc600 = false;
  }
}

function showMerc450() {
  if (showTheMerc450 == false) {
    document.querySelector('#merc450').style.display = 'block';
    document.querySelector(
      '.item-icon.item-down-icon.item-down-icon-merc450'
    ).style.display = 'none';
    document.querySelector(
      '.item-icon.item-x-icon.item-x-icon-merc450'
    ).style.display = 'block';
    showTheMerc450 = true;
    document.querySelector('#yamaha').style.display = 'none';
    document.querySelector(
      '.item-icon.item-down-icon.item-down-icon-yamaha'
    ).style.display = 'block';
    document.querySelector(
      '.item-icon.item-x-icon.item-x-icon-yamaha'
    ).style.display = 'none';
    showTheYamaha = false;
    document.querySelector('#merc600').style.display = 'none';
    document.querySelector(
      '.item-icon.item-down-icon.item-down-icon-merc600'
    ).style.display = 'block';
    document.querySelector(
      '.item-icon.item-x-icon.item-x-icon-merc600'
    ).style.display = 'none';
    showTheMerc600 = false;
  } else {
    document.querySelector('#merc450').style.display = 'none';
    document.querySelector(
      '.item-icon.item-down-icon.item-down-icon-merc450'
    ).style.display = 'block';
    document.querySelector(
      '.item-icon.item-x-icon.item-x-icon-merc450'
    ).style.display = 'none';
    showTheMerc450 = false;
  }
}

function showYamaha() {
  if (showTheYamaha == false) {
    document.querySelector('#yamaha').style.display = 'block';
    document.querySelector(
      '.item-icon.item-down-icon.item-down-icon-yamaha'
    ).style.display = 'none';
    document.querySelector(
      '.item-icon.item-x-icon.item-x-icon-yamaha'
    ).style.display = 'block';
    showTheYamaha = true;
    document.querySelector('#merc600').style.display = 'none';
    document.querySelector(
      '.item-icon.item-down-icon.item-down-icon-merc600'
    ).style.display = 'block';
    document.querySelector(
      '.item-icon.item-x-icon.item-x-icon-merc600'
    ).style.display = 'none';
    showTheMerc600 = false;
    document.querySelector('#merc450').style.display = 'none';
    document.querySelector(
      '.item-icon.item-down-icon.item-down-icon-merc450'
    ).style.display = 'block';
    document.querySelector(
      '.item-icon.item-x-icon.item-x-icon-merc450'
    ).style.display = 'none';
    showTheMerc450 = false;
  } else {
    document.querySelector('#yamaha').style.display = 'none';
    document.querySelector(
      '.item-icon.item-down-icon.item-down-icon-yamaha'
    ).style.display = 'block';
    document.querySelector(
      '.item-icon.item-x-icon.item-x-icon-yamaha'
    ).style.display = 'none';
    showTheYamaha = false;
  }
}

function sendColor(color) {
  //console.log("color: "+color);
  absoluteColor = color;

  var rgbColor = hexToRgb(color);

  colorWheel = rgbColor;
  // console.log("rgbColor: "+rgbColor);
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return (rgb = [
    Math.pow(parseInt(result[1], 16) / 255, 2.2),
    Math.pow(parseInt(result[2], 16) / 255, 2.2),
    Math.pow(parseInt(result[3], 16) / 255, 2.2),
  ]);
}

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function setSection(sec, color) {
  if (sec == hull) {
    s1 = color;
  }
  if (sec == waterLineStripe) {
    s2 = color;
  }
  if (sec == mercury600Set4) {
    s3 = color;
  }
  if (sec == mercury450Set5) {
    s4 = color;
  }
  if (sec == yamahaSet4) {
    s5 = color;
  }
  if (sec == frame) {
    s6 = color;
  }
  if (sec == upholstery) {
    s7 = color;
  }
  if (sec == headrests) {
    s8 = color;
  }
  if (sec == sleighSeatTableUpper) {
    s9 = color;
  }
  if (sec == sleighSeatTableLower) {
    s10 = color;
  }
  if (sec == chairs) {
    s11 = color;
  }
  if (sec == anchor) {
    s12 = color;
  }
  if (sec == baitWellGlass) {
    s13 = color;
  }
  if (sec == baitwell) {
    s14 = color;
  }
  if (sec == cabinDoor) {
    s15 = color;
  }
  if (sec == chairBase) {
    s16 = color;
  }
  if (sec == chairsStand) {
    s17 = color;
  }
  if (sec == cleatGasscapPullsHawserHingesPoleHoldersHardware) {
    s18 = color;
  }
  if (sec == consoleCabin) {
    s19 = color;
  }
  console.log('item: ' + sec + ' | color: ' + color);
}

function linkToShare() {
  if (s1 != '' && s1 != null) {
    se1 = '?s1=' + s1;
  } else {
    se1 = '';
  }
  if (s2 != '' && s2 != null) {
    se2 = '&s2=' + s2;
  } else {
    se2 = '';
  }
  if (s3 != '' && s3 != null) {
    se3 = '&s3=' + s3;
  } else {
    se3 = '';
  }
  if (s4 != '' && s4 != null) {
    se4 = '&s4=' + s4;
  } else {
    se4 = '';
  }
  if (s5 != '' && s5 != null) {
    se5 = '&s5=' + s5;
  } else {
    se5 = '';
  }
  if (s6 != '' && s6 != null) {
    se6 = '&s6=' + s6;
  } else {
    se6 = '';
  }
  if (s7 != '' && s7 != null) {
    se7 = '&s7=' + s7;
  } else {
    se7 = '';
  }
  if (s8 != '' && s8 != null) {
    se8 = '&s8=' + s8;
  } else {
    se8 = '';
  }
  if (s9 != '' && s9 != null) {
    se9 = '&s9=' + s9;
  } else {
    se9 = '';
  }
  if (s10 != '' && s10 != null) {
    se10 = '&s10=' + s10;
  } else {
    se10 = '';
  }
  if (s11 != '' && s11 != null) {
    se11 = '&s11=' + s11;
  } else {
    se11 = '';
  }
  if (s12 != '' && s12 != null) {
    se12 = '&s12=' + s12;
  } else {
    se12 = '';
  }
  if (s13 != '' && s13 != null) {
    se13 = '&s13=' + s13;
  } else {
    se13 = '';
  }
  if (s14 != '' && s14 != null) {
    se14 = '&s14=' + s14;
  } else {
    se14 = '';
  }
  if (s15 != '' && s15 != null) {
    se15 = '&s15=' + s15;
  } else {
    se15 = '';
  }
  if (s16 != '' && s16 != null) {
    se16 = '&s16=' + s16;
  } else {
    se16 = '';
  }
  if (s17 != '' && s17 != null) {
    se17 = '&s17=' + s17;
  } else {
    se17 = '';
  }
  if (s18 != '' && s18 != null) {
    se18 = '&s18=' + s18;
  } else {
    se18 = '';
  }
  if (s19 != '' && s19 != null) {
    se19 = '&s19=' + s19;
  } else {
    se19 = '';
  }
  if (eng != '' && eng != null) {
    engn = '&eng=' + eng;
  } else {
    engn = '';
  }

  shareLink =
    'https://scruffydev.org/boat/' +
    se1 +
    '' +
    se2 +
    '' +
    se3 +
    '' +
    se4 +
    '' +
    se5 +
    '' +
    se6 +
    '' +
    se7 +
    '' +
    se8 +
    '' +
    se9 +
    '' +
    se10 +
    '' +
    se11 +
    '' +
    se12 +
    '' +
    se13 +
    '' +
    se14 +
    '' +
    se15 +
    '' +
    se16 +
    '' +
    se17 +
    '' +
    se18 +
    '' +
    se19 +
    '' +
    engn;

  sFacebook = document.getElementById('shareFacebook');
  sFacebook.dataset.url = shareLink;
  // console.log('sFacebook: ', sFacebook.dataset.url);

  sTwitter = document.getElementById('shareTwitter');
  sTwitter.dataset.url = shareLink;
  // console.log('sTwitter: ', sTwitter.dataset.url);

  sEmail = document.getElementById('shareEmail');
  sEmail.dataset.url = shareLink;
  // console.log('sEmail: ', sEmail.dataset.url);

  sHCB = document.getElementById('sendToHCB');
  sHCB.dataset.url = shareLink;
  // console.log('sHCB: ', sHCB.dataset.url);
}

function showMobileIcons(view) {
  if (view == 'show') {
    document.querySelector('.in-mobile-header').style.display = 'none';
    document.querySelector('.in-mobile-icons').style.display = 'inline-flex';
    linkToShare();
  } else {
    document.querySelector('.in-mobile-header').style.display = 'inline-flex';
    document.querySelector('.in-mobile-icons').style.display = 'none';
  }
}

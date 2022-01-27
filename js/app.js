// Sketchfab Viewer API: Change Texture/material
var version = '1.10.1';
var uid = '729c94df6280424fa613db4d0f890b40';
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
hull = '25473fd0-9ae7-4fbe-8331-7e0e187b7f2d';
waterLineStripe = '9c8b8596-e923-4101-aa58-04729f362bfc';

mercury450Set5 = '655bca15-ea32-4507-932f-b80bab7a64d4';
mercury450Set5Pinstripe = '2853487a-956d-4b24-8054-59c8a03dca7d';
mercury450Set5Propellers = 'f1d88136-4d27-4d53-ad25-d4e59d77e348';

mercury600Set4 = '5f6cb161-94f2-4e6b-aa98-6137782750a8';
mercury600Set4Pinstripe = 'd92c770d-db03-49af-b0c2-02f40b908c4d';
mercury600Set4Propellers = '24782ee1-ee86-4864-b786-d6fc05e2886f';

yamahaSet4 = '529cfc33-47c2-4ec1-b9fb-a7492e39ec80';
yamahaSet4Pinstripe = 'a34ce37b-cd8b-42fb-b4a1-30c70e0cdc69';
yamahaSet4Propellers = '372e23ce-1550-4e99-a74d-966e55de42cf';

frame = '6b643535-c57d-4616-8a6f-c82c68c61b25';
upholstery = '7eecadfa-df17-48ef-9379-bd3fe8ce684d';
headrests = '9da31931-5e86-4073-9700-8dc5ad7d3f6d';
chairs = 'b73bf23c-0796-4357-8376-bb6601a8c25a';
sleighSeatTableLower = '489db6aa-89b5-443b-9c75-babd5186a606';
sleighSeatTableUpper = 'a342168d-e59e-45e7-990e-1a3e2c03ffd3';

// Non Selectable items:
anchor = 'dee02a99-2b3b-4a41-995d-951f372c2072';
baitWellGlass = 'ecea1e39-0e0e-4864-b4f4-ed4113ab971b';
baitwell = 'cd3e5f6a-b60e-4149-96c1-48ecaa377cb9';
cabinDoor = 'fb4393dd-fc81-439e-a184-1f65dfd0538e';
chairBase = 'cc22db14-c6c1-4c89-89e6-01721eea23c0';
chairsStand = '58ea43bd-60d1-42b2-aca4-396ea4cf1f17';
cleatGasscapPullsHawserHingesPoleHoldersHardware =
  '2668e0e7-6bb0-4e75-a286-3dbdd61b95ee';
consoleCabin = '844b7a4c-e482-4fb3-b6e0-8b8eb1ca6635';
deckRing = '3bb144ff-4935-4d64-9397-d54ad5e73728';
hatches = 'dc90c0a8-3b53-408e-ad70-48488670b49e';
floorPlanks = '60a62055-7d34-449d-9b7c-3dc3866a880d';
floorPlankLiner = '1a41ccf1-5358-41b1-aad7-088611dad7ae';
fpl = 'hide'; // var for initial change
hatchPlanks = '03a53f5c-be55-4fd4-abb3-3c5ae653d2d1';
floorPlankLinerHatches = 'ae01e16f-88d6-4536-bb4e-6800d5d02dd7';

// Textures:
hcbwhite = 'bfb4b7ae9b1648deb2c32cd7ad4b6688';
designerWhite = 'b4ec9ee5e3e841daa0e7a4219262535a';
highGlossTeak = '5548465b852c433b8f3ee0939e0f2b77';
deepTitanium = '27489a5d00054bbdafe1109931ac9ffc';
grayOnyx = '2713129de2e14194ab4a50d77b113770';
naturalGray = '0d796e234122450a8178da3739d810bc';
platinum = '500b628cda324f23a994ab3b5236eadc';
rawTeak = 'fbc02c81ab204a089e14830cc0524538';
sahara = '35d1447d2e894ce3a6d2b171f4038a5a';

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
        api.hide(2379);
        api.hide(2397);
        api.hide(3251); // Water Stripe

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
        if (eng == '2537') {
          api.show(2537); // Mercury 600 default
          api.show(2699); // Mercury 600 propeller default
          api.show(2735); // Mercury 600 pinstripe default

          api.hide(2579); // Mercury 450
          api.hide(2681); // Mercury 450 propeller
          api.hide(2771); // Mercury 450 pinstripe

          api.hide(2507); // Yamaha
          api.hide(2717); // Yamaha propeller
          api.hide(2753); // Yamaha pinstripe
        }

        if (eng == '2579') {
          api.hide(2537); // Mercury 600 default
          api.hide(2699); // Mercury 600 propeller default
          api.hide(2735); // Mercury 600 pinstripe default

          api.show(2579); // Mercury 450
          api.show(2681); // Mercury 450 propeller
          api.show(2771); // Mercury 450 pinstripe

          api.hide(2507); // Yamaha
          api.hide(2717); // Yamaha propeller
          api.hide(2753); // Yamaha pinstripe
        }

        if (eng == '2507') {
          api.hide(2537); // Mercury 600 default
          api.hide(2699); // Mercury 600 propeller default
          api.hide(2735); // Mercury 600 pinstripe default

          api.hide(2579); // Mercury 450
          api.hide(2681); // Mercury 450 propeller
          api.hide(2771); // Mercury 450 pinstripe

          api.show(2507); // Yamaha
          api.show(2717); // Yamaha propeller
          api.show(2753); // Yamaha pinstripe
        }
      }

      // New engines:

      //api.hide(2537); // Mercury 600 default
      //api.hide(2699); // Mercury 600 propeller default
      //api.hide(2735); // Mercury 600 pinstripe default

      api.hide(2507); // Yamaha
      api.hide(2717); // Yamaha propeller
      api.hide(2753); // Yamaha pinstripe

      api.hide(2579); // Mercury 450
      api.hide(2681); // Mercury 450 propeller
      api.hide(2771); // Mercury 450 pinstripe

      var id = 2537;

      document
        .querySelector('li.item-title.item-title-merc600')
        .addEventListener('click', function () {
          api.show(2537); // Mercury 600 default
          api.show(2699); // Mercury 600 propeller default
          api.show(2735); // Mercury 600 pinstripe default

          api.hide(2579); // Mercury 450
          api.hide(2681); // Mercury 450 propeller
          api.hide(2771); // Mercury 450 pinstripe

          api.hide(2507); // Yamaha
          api.hide(2717); // Yamaha propeller
          api.hide(2753); // Yamaha pinstripe
          eng = '2537';
        });

      document
        .querySelector('li.item-title.item-title-merc450')
        .addEventListener('click', function () {
          api.hide(2537); // Mercury 600 default
          api.hide(2699); // Mercury 600 propeller default
          api.hide(2735); // Mercury 600 pinstripe default

          api.show(2579); // Mercury 450
          api.show(2681); // Mercury 450 propeller
          api.show(2771); // Mercury 450 pinstripe

          api.hide(2507); // Yamaha
          api.hide(2717); // Yamaha propeller
          api.hide(2753); // Yamaha pinstripe
          eng = '2579';
        });

      document
        .querySelector('li.item-title.item-title-yamaha')
        .addEventListener('click', function () {
          api.hide(2537); // Mercury 600 default
          api.hide(2699); // Mercury 600 propeller default
          api.hide(2735); // Mercury 600 pinstripe default

          api.hide(2579); // Mercury 450
          api.hide(2681); // Mercury 450 propeller
          api.hide(2771); // Mercury 450 pinstripe

          api.show(2507); // Yamaha
          api.show(2717); // Yamaha propeller
          api.show(2753); // Yamaha pinstripe
          eng = '2507';
        });

      document
        .querySelector('.no-color-block')
        .addEventListener('click', function () {
          api.hide(3251); // Water Stripe
          for (var a = 1; a < 19; a++) {
            document.querySelector(
              '.color-block.section-2.block-' + a
            ).style.borderColor = '#707070';
          }
        });

      document
        .querySelector('.no-color-block-merc600')
        .addEventListener('click', function () {
          api.hide(2735); // Water Stripe
          for (var a = 1; a < 19; a++) {
            document.querySelector(
              '.color-block.section-20.block-' + a
            ).style.borderColor = '#707070';
          }
        });

      document
        .querySelector('.no-color-block-merc450')
        .addEventListener('click', function () {
          api.hide(2771); // Water Stripe
          for (var a = 1; a < 19; a++) {
            document.querySelector(
              '.color-block.section-21.block-' + a
            ).style.borderColor = '#707070';
          }
        });

      document
        .querySelector('.no-color-block-yamaha')
        .addEventListener('click', function () {
          api.hide(2753); // Water Stripe
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
              api.show(3251); // water stripe
            }

            if (itemId == mercury600Set4Pinstripe) {
              api.show(2735); // mercury600 stripe
            }

            if (itemId == mercury450Set5Pinstripe) {
              api.show(2771); // mercury450 stripe
            }

            if (itemId == yamahaSet4Pinstripe) {
              api.show(2753); // yamaha stripe
            }

            if (fpl == 'show') {
              api.show(2379);
              api.show(2397);
            } else if (fpl == 'hide') {
              api.hide(2379);
              api.hide(2397);
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

      var sectionList = 12;
      var blockList = 19;
      for (let i = 1; i < sectionList; i++) {
        for (let b = 1; b < blockList; b++) {
          if (i == 9) {
            a = 20;
          } else if (i == 10) {
            a = 21;
          } else if (i == 11) {
            a = 22;
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

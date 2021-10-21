<html>
<head>
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <link rel="stylesheet" type="text/css" href="css/modal.css">
    <script type="text/javascript" src="https://static.sketchfab.com/api/sketchfab-viewer-1.1.0.js"></script>
    <script src="js/html5kellycolorpicker.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sharer.js@latest/sharer.min.js"></script>
    
</head>
<body>
<div class="header">
  <div class="hamburgerIcon" onclick="openOptions();"><img id="hamburger-menu" src="./images/hamburger.png" /></div>
  <div class="logo"><a href="https://hcbyachts.com/"><img src="https://hcbyachts.com/wp-content/uploads/2018/05/hcb_standard_oval.png" /></a></div>
  <div onmouseup="linkToShare()" id="myBtn" class="share"><img src="./images/share-icon.png" />
  </div>
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">&times;</span>
      <button id="shareFacebook" class="button" data-sharer="facebook" data-hashtag="HCBYachts" data-url="">Facebook</button>
      <button id="shareTwitter" class="button" data-sharer="twitter" data-title="Check out my customized yacht!" data-hashtags="HCBYachts" data-url="">Twitter</button>
      <button id="shareEmail" class="button" data-sharer="email" data-title="Check out my customized yacht!" data-url="" data-subject="Check out my custom created yacht!" data-to="">Share via Email</button>
      <button id="sendToHCB" class="button" data-sharer="email" data-title="I would like to be contacted by a sale rep regarding this customized version of this Yacht." data-url="" data-subject="Customized yacht from customer." data-to="larry@gobigwheel.com">HCB Yachts Sales</button>
    </div>
    <script src="js/modal.js"></script>
  </div>
</div>
    <div class="container">

  <div class="options">
    <ul>
      <li class="hide-item-title" onclick="openOptions();">
        <img class="item-icon item-icon-back" src="./images/back_arrow_icon.png" />
      </li>
      
      <li class="item-title item-title-1" onclick="showColors('color-block-section-1', 'item-title-1', 'icon-1');">Bait well
        <img class="item-icon item-down-icon item-down-icon-1" src="./images/down_arrow.png" />
        <img class="item-icon item-x-icon item-x-icon-1" src="./images/x-icon.png" />
      </li>
      
        <li class="color-block-section color-block-section-1">
          <div class="color-header-section color-header-section-1">Choose a Color</div>
          <div class="flex-grid"> 
            <div class="color-block section-1 block-1" onclick="changeColor('section-1','block-1')"></div>
            <div class="color-block section-1 block-2" onclick="changeColor('section-1','block-2')"></div>
            <div class="color-block section-1 block-3" onclick="changeColor('section-1','block-3')"></div>
            <div class="color-block section-1 block-4" onclick="changeColor('section-1','block-4')"></div>
            <div class="color-block section-1 block-5" onclick="changeColor('section-1','block-5')"></div>
            <div class="color-block section-1 block-6" onclick="changeColor('section-1','block-6')"></div>
          </div>
          <div class="flex-grid"> 
            <div class="color-block section-1 block-7" onclick="changeColor('section-1','block-7')"></div>
            <div class="color-block section-1 block-8" onclick="changeColor('section-1','block-8')"></div>
            <div class="color-block section-1 block-9" onclick="changeColor('section-1','block-9')"></div>
            <div class="color-block section-1 block-10" onclick="changeColor('section-1','block-10')"></div>
            <div class="color-block section-1 block-11" onclick="changeColor('section-1','block-11')"></div>
            <div class="color-block section-1 block-12" onclick="changeColor('section-1','block-12')"></div>
          </div>
          <div class="flex-grid"> 
            <div class="color-block section-1 block-13" onclick="changeColor('section-1','block-13')"></div>
            <div class="color-block section-1 block-14" onclick="changeColor('section-1','block-14')"></div>
            <div class="color-block section-1 block-15" onclick="changeColor('section-1','block-15')"></div>
            <div class="color-block section-1 block-16" onclick="changeColor('section-1','block-16')"></div>
            <div class="color-block section-1 block-17" onclick="changeColor('section-1','block-17')"></div>
            <div class="color-block section-1 block-18 colorpicker" onclick="changeColor('section-1','block-18')"><span class="custom">Custom</span></div>
          </div>
        </li>
        

      <li class="item-title item-title-2" onclick="showColors('color-block-section-2', 'item-title-2', 'icon-2');">Cabin Door
        <img class="item-icon item-down-icon item-down-icon-2" src="./images/down_arrow.png" />
        <img class="item-icon item-x-icon item-x-icon-2" src="./images/x-icon.png" />
      </li>
      
        <li class="color-block-section color-block-section-2">
          <div class="color-header-section color-header-section-2">Choose a Color</div>
          <div class="flex-grid"> 
            <div class="color-block section-2 block-1" onclick="changeColor('section-2','block-1')"></div>
            <div class="color-block section-2 block-2" onclick="changeColor('section-2','block-2')"></div>
            <div class="color-block section-2 block-3" onclick="changeColor('section-2','block-3')"></div>
            <div class="color-block section-2 block-4" onclick="changeColor('section-2','block-4')"></div>
            <div class="color-block section-2 block-5" onclick="changeColor('section-2','block-5')"></div>
            <div class="color-block section-2 block-6" onclick="changeColor('section-2','block-6')"></div>
          </div>
          <div class="flex-grid"> 
            <div class="color-block section-2 block-7" onclick="changeColor('section-2','block-7')"></div>
            <div class="color-block section-2 block-8" onclick="changeColor('section-2','block-8')"></div>
            <div class="color-block section-2 block-9" onclick="changeColor('section-2','block-9')"></div>
            <div class="color-block section-2 block-10" onclick="changeColor('section-2','block-10')"></div>
            <div class="color-block section-2 block-11" onclick="changeColor('section-2','block-11')"></div>
            <div class="color-block section-2 block-12" onclick="changeColor('section-2','block-12')"></div>
          </div>
          <div class="flex-grid"> 
            <div class="color-block section-2 block-13" onclick="changeColor('section-2','block-13')"></div>
            <div class="color-block section-2 block-14" onclick="changeColor('section-2','block-14')"></div>
            <div class="color-block section-2 block-15" onclick="changeColor('section-2','block-15')"></div>
            <div class="color-block section-2 block-16" onclick="changeColor('section-2','block-16')"></div>
            <div class="color-block section-2 block-17" onclick="changeColor('section-2','block-17')"></div>
            <div class="color-block section-2 block-18 colorpicker" onclick="changeColor('section-2','block-18')"><span class="custom">Custom</span></div>
          </div>
        </li>
        
      
      <li class="item-title item-title-3" onclick="showColors('color-block-section-3', 'item-title-3', 'icon-3');">Chair Base
        <img class="item-icon item-down-icon item-down-icon-3" src="./images/down_arrow.png" />
        <img class="item-icon item-x-icon item-x-icon-3" src="./images/x-icon.png" />
      </li>
      
      <li class="color-block-section color-block-section-3">
        <div class="color-header-section color-header-section-3">Choose a Color</div>
        <div class="flex-grid"> 
          <div class="color-block section-3 block-1" onclick="changeColor('section-3','block-1')"></div>
          <div class="color-block section-3 block-2" onclick="changeColor('section-3','block-2')"></div>
          <div class="color-block section-3 block-3" onclick="changeColor('section-3','block-3')"></div>
          <div class="color-block section-3 block-4" onclick="changeColor('section-3','block-4')"></div>
          <div class="color-block section-3 block-5" onclick="changeColor('section-3','block-5')"></div>
          <div class="color-block section-3 block-6" onclick="changeColor('section-3','block-6')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-3 block-7" onclick="changeColor('section-3','block-7')"></div>
          <div class="color-block section-3 block-8" onclick="changeColor('section-3','block-8')"></div>
          <div class="color-block section-3 block-9" onclick="changeColor('section-3','block-9')"></div>
          <div class="color-block section-3 block-10" onclick="changeColor('section-3','block-10')"></div>
          <div class="color-block section-3 block-11" onclick="changeColor('section-3','block-11')"></div>
          <div class="color-block section-3 block-12" onclick="changeColor('section-3','block-12')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-3 block-13" onclick="changeColor('section-3','block-13')"></div>
          <div class="color-block section-3 block-14" onclick="changeColor('section-3','block-14')"></div>
          <div class="color-block section-3 block-15" onclick="changeColor('section-3','block-15')"></div>
          <div class="color-block section-3 block-16" onclick="changeColor('section-3','block-16')"></div>
          <div class="color-block section-3 block-17" onclick="changeColor('section-3','block-17')"></div>
          <div class="color-block section-3 block-18 colorpicker" onclick="changeColor('section-3','block-18')"><span class="custom">Custom</span></div>
        </div>
      </li>
      
      <li class="item-title item-title-4" onclick="showColors('color-block-section-4', 'item-title-4', 'icon-4');">Chairs
        <img class="item-icon item-down-icon item-down-icon-4" src="./images/down_arrow.png" />
        <img class="item-icon item-x-icon item-x-icon-4" src="./images/x-icon.png" />
      </li>
      
      <li class="color-block-section color-block-section-4">
        <div class="color-header-section color-header-section-4">Choose a Color</div>
        <div class="flex-grid"> 
          <div class="color-block section-4 block-1" onclick="changeColor('section-4','block-1')"></div>
          <div class="color-block section-4 block-2" onclick="changeColor('section-4','block-2')"></div>
          <div class="color-block section-4 block-3" onclick="changeColor('section-4','block-3')"></div>
          <div class="color-block section-4 block-4" onclick="changeColor('section-4','block-4')"></div>
          <div class="color-block section-4 block-5" onclick="changeColor('section-4','block-5')"></div>
          <div class="color-block section-4 block-6" onclick="changeColor('section-4','block-6')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-4 block-7" onclick="changeColor('section-4','block-7')"></div>
          <div class="color-block section-4 block-8" onclick="changeColor('section-4','block-8')"></div>
          <div class="color-block section-4 block-9" onclick="changeColor('section-4','block-9')"></div>
          <div class="color-block section-4 block-10" onclick="changeColor('section-4','block-10')"></div>
          <div class="color-block section-4 block-11" onclick="changeColor('section-4','block-11')"></div>
          <div class="color-block section-4 block-12" onclick="changeColor('section-4','block-12')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-4 block-13" onclick="changeColor('section-4','block-13')"></div>
          <div class="color-block section-4 block-14" onclick="changeColor('section-4','block-14')"></div>
          <div class="color-block section-4 block-15" onclick="changeColor('section-4','block-15')"></div>
          <div class="color-block section-4 block-16" onclick="changeColor('section-4','block-16')"></div>
          <div class="color-block section-4 block-17" onclick="changeColor('section-4','block-17')"></div>
          <div class="color-block section-4 block-18 colorpicker" onclick="changeColor('section-4','block-18')"><span class="custom">Custom</span></div>
        </div>
      </li>
      
      <li class="item-title item-title-5" onclick="showColors('color-block-section-5', 'item-title-5', 'icon-5');">Console Cabin
        <img class="item-icon item-down-icon item-down-icon-5" src="./images/down_arrow.png" />
        <img class="item-icon item-x-icon item-x-icon-5" src="./images/x-icon.png" />
      </li>
      
      <li class="color-block-section color-block-section-5">
        <div class="color-header-section color-header-section-5">Choose a Color</div>
        <div class="flex-grid"> 
          <div class="color-block section-5 block-1" onclick="changeColor('section-5','block-1')"></div>
          <div class="color-block section-5 block-2" onclick="changeColor('section-5','block-2')"></div>
          <div class="color-block section-5 block-3" onclick="changeColor('section-5','block-3')"></div>
          <div class="color-block section-5 block-4" onclick="changeColor('section-5','block-4')"></div>
          <div class="color-block section-5 block-5" onclick="changeColor('section-5','block-5')"></div>
          <div class="color-block section-5 block-6" onclick="changeColor('section-5','block-6')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-5 block-7" onclick="changeColor('section-5','block-7')"></div>
          <div class="color-block section-5 block-8" onclick="changeColor('section-5','block-8')"></div>
          <div class="color-block section-5 block-9" onclick="changeColor('section-5','block-9')"></div>
          <div class="color-block section-5 block-10" onclick="changeColor('section-5','block-10')"></div>
          <div class="color-block section-5 block-11" onclick="changeColor('section-5','block-11')"></div>
          <div class="color-block section-5 block-12" onclick="changeColor('section-5','block-12')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-5 block-13" onclick="changeColor('section-5','block-13')"></div>
          <div class="color-block section-5 block-14" onclick="changeColor('section-5','block-14')"></div>
          <div class="color-block section-5 block-15" onclick="changeColor('section-5','block-15')"></div>
          <div class="color-block section-5 block-16" onclick="changeColor('section-5','block-16')"></div>
          <div class="color-block section-5 block-17" onclick="changeColor('section-5','block-17')"></div>
          <div class="color-block section-5 block-18 colorpicker" onclick="changeColor('section-5','block-18')"><span class="custom">Custom</span></div>
        </div>
      </li>
      
      <li class="item-title item-title-6" onclick="showColors('color-block-section-6', 'item-title-6', 'icon-6');">Deck Ring
        <img class="item-icon item-down-icon item-down-icon-6" src="./images/down_arrow.png" />
        <img class="item-icon item-x-icon item-x-icon-6" src="./images/x-icon.png" />
      </li>
      
      <li class="color-block-section color-block-section-6">
        <div class="color-header-section color-header-section-6">Choose a Color</div>
        <div class="flex-grid"> 
          <div class="color-block section-6 block-1" onclick="changeColor('section-6','block-1')"></div>
          <div class="color-block section-6 block-2" onclick="changeColor('section-6','block-2')"></div>
          <div class="color-block section-6 block-3" onclick="changeColor('section-6','block-3')"></div>
          <div class="color-block section-6 block-4" onclick="changeColor('section-6','block-4')"></div>
          <div class="color-block section-6 block-5" onclick="changeColor('section-6','block-5')"></div>
          <div class="color-block section-6 block-6" onclick="changeColor('section-6','block-6')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-6 block-7" onclick="changeColor('section-6','block-7')"></div>
          <div class="color-block section-6 block-8" onclick="changeColor('section-6','block-8')"></div>
          <div class="color-block section-6 block-9" onclick="changeColor('section-6','block-9')"></div>
          <div class="color-block section-6 block-10" onclick="changeColor('section-6','block-10')"></div>
          <div class="color-block section-6 block-11" onclick="changeColor('section-6','block-11')"></div>
          <div class="color-block section-6 block-12" onclick="changeColor('section-6','block-12')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-6 block-13" onclick="changeColor('section-6','block-13')"></div>
          <div class="color-block section-6 block-14" onclick="changeColor('section-6','block-14')"></div>
          <div class="color-block section-6 block-15" onclick="changeColor('section-6','block-15')"></div>
          <div class="color-block section-6 block-16" onclick="changeColor('section-6','block-16')"></div>
          <div class="color-block section-6 block-17" onclick="changeColor('section-6','block-17')"></div>
          <div class="color-block section-6 block-18 colorpicker" onclick="changeColor('section-6','block-18')"><span class="custom">Custom</span></div>
        </div>
      </li>
      
      <li class="item-title item-title-7" onclick="showColors('color-block-section-7', 'item-title-7', 'icon-7');">Floor Plank Liner
        <img class="item-icon item-down-icon item-down-icon-7" src="./images/down_arrow.png" />
        <img class="item-icon item-x-icon item-x-icon-7" src="./images/x-icon.png" />
      </li>
      
      <li class="color-block-section color-block-section-7">
        <div class="color-header-section color-header-section-7">Choose a Color</div>
        <div class="flex-grid"> 
          <div class="color-block section-7 block-1" onclick="changeColor('section-7','block-1')"></div>
          <div class="color-block section-7 block-2" onclick="changeColor('section-7','block-2')"></div>
          <div class="color-block section-7 block-3" onclick="changeColor('section-7','block-3')"></div>
          <div class="color-block section-7 block-4" onclick="changeColor('section-7','block-4')"></div>
          <div class="color-block section-7 block-5" onclick="changeColor('section-7','block-5')"></div>
          <div class="color-block section-7 block-6" onclick="changeColor('section-7','block-6')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-7 block-7" onclick="changeColor('section-7','block-7')"></div>
          <div class="color-block section-7 block-8" onclick="changeColor('section-7','block-8')"></div>
          <div class="color-block section-7 block-9" onclick="changeColor('section-7','block-9')"></div>
          <div class="color-block section-7 block-10" onclick="changeColor('section-7','block-10')"></div>
          <div class="color-block section-7 block-11" onclick="changeColor('section-7','block-11')"></div>
          <div class="color-block section-7 block-12" onclick="changeColor('section-7','block-12')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-7 block-13" onclick="changeColor('section-7','block-13')"></div>
          <div class="color-block section-7 block-14" onclick="changeColor('section-7','block-14')"></div>
          <div class="color-block section-7 block-15" onclick="changeColor('section-7','block-15')"></div>
          <div class="color-block section-7 block-16" onclick="changeColor('section-7','block-16')"></div>
          <div class="color-block section-7 block-17" onclick="changeColor('section-7','block-17')"></div>
          <div class="color-block section-7 block-18 colorpicker" onclick="changeColor('section-7','block-18')"><span class="custom">Custom</span></div>
        </div>
      </li>

      <li class="item-title item-title-8" onclick="showColors('color-block-section-8', 'item-title-8', 'icon-8');">Hardtop
        <img class="item-icon item-down-icon item-down-icon-8" src="./images/down_arrow.png" />
        <img class="item-icon item-x-icon item-x-icon-8" src="./images/x-icon.png" />
      </li>
      
      <li class="color-block-section color-block-section-8">
        <div class="color-header-section color-header-section-8">Choose a Color</div>
        <div class="flex-grid"> 
          <div class="color-block section-8 block-1" onclick="changeColor('section-8','block-1')"></div>
          <div class="color-block section-8 block-2" onclick="changeColor('section-8','block-2')"></div>
          <div class="color-block section-8 block-3" onclick="changeColor('section-8','block-3')"></div>
          <div class="color-block section-8 block-4" onclick="changeColor('section-8','block-4')"></div>
          <div class="color-block section-8 block-5" onclick="changeColor('section-8','block-5')"></div>
          <div class="color-block section-8 block-6" onclick="changeColor('section-8','block-6')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-8 block-7" onclick="changeColor('section-8','block-7')"></div>
          <div class="color-block section-8 block-8" onclick="changeColor('section-8','block-8')"></div>
          <div class="color-block section-8 block-9" onclick="changeColor('section-8','block-9')"></div>
          <div class="color-block section-8 block-10" onclick="changeColor('section-8','block-10')"></div>
          <div class="color-block section-8 block-11" onclick="changeColor('section-8','block-11')"></div>
          <div class="color-block section-8 block-12" onclick="changeColor('section-8','block-12')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-8 block-13" onclick="changeColor('section-8','block-13')"></div>
          <div class="color-block section-8 block-14" onclick="changeColor('section-8','block-14')"></div>
          <div class="color-block section-8 block-15" onclick="changeColor('section-8','block-15')"></div>
          <div class="color-block section-8 block-16" onclick="changeColor('section-8','block-16')"></div>
          <div class="color-block section-8 block-17" onclick="changeColor('section-8','block-17')"></div>
          <div class="color-block section-8 block-18 colorpicker" onclick="changeColor('section-8','block-18')"><span class="custom">Custom</span></div>
        </div>
      </li>
      
      <li class="item-title item-title-9" onclick="showColors('color-block-section-9', 'item-title-9', 'icon-9');">Hull
        <img class="item-icon item-down-icon item-down-icon-9" src="./images/down_arrow.png" />
        <img class="item-icon item-x-icon item-x-icon-9" src="./images/x-icon.png" />
      </li>
      
      <li class="color-block-section color-block-section-9">
        <div class="color-header-section color-header-section-9">Choose a Color</div>
        <div class="flex-grid"> 
          <div class="color-block section-9 block-1" onclick="changeColor('section-9','block-1')"></div>
          <div class="color-block section-9 block-2" onclick="changeColor('section-9','block-2')"></div>
          <div class="color-block section-9 block-3" onclick="changeColor('section-9','block-3')"></div>
          <div class="color-block section-9 block-4" onclick="changeColor('section-9','block-4')"></div>
          <div class="color-block section-9 block-5" onclick="changeColor('section-9','block-5')"></div>
          <div class="color-block section-9 block-6" onclick="changeColor('section-9','block-6')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-9 block-7" onclick="changeColor('section-9','block-7')"></div>
          <div class="color-block section-9 block-8" onclick="changeColor('section-9','block-8')"></div>
          <div class="color-block section-9 block-9" onclick="changeColor('section-9','block-9')"></div>
          <div class="color-block section-9 block-10" onclick="changeColor('section-9','block-10')"></div>
          <div class="color-block section-9 block-11" onclick="changeColor('section-9','block-11')"></div>
          <div class="color-block section-9 block-12" onclick="changeColor('section-9','block-12')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-9 block-13" onclick="changeColor('section-9','block-13')"></div>
          <div class="color-block section-9 block-14" onclick="changeColor('section-9','block-14')"></div>
          <div class="color-block section-9 block-15" onclick="changeColor('section-9','block-15')"></div>
          <div class="color-block section-9 block-16" onclick="changeColor('section-9','block-16')"></div>
          <div class="color-block section-9 block-17" onclick="changeColor('section-9','block-17')"></div>
          <div class="color-block section-9 block-18 colorpicker" onclick="changeColor('section-9','block-18')"><span class="custom">Custom</span></div>
        </div>
      </li>
      
      <li class="item-title item-title-10" onclick="showColors('color-block-section-10', 'item-title-10', 'icon-10');">Liner
        <img class="item-icon item-down-icon item-down-icon-10" src="./images/down_arrow.png" />
        <img class="item-icon item-x-icon item-x-icon-10" src="./images/x-icon.png" />
      </li>
      
      <li class="color-block-section color-block-section-10">
        <div class="color-header-section color-header-section-10">Choose a Color</div>
        <div class="flex-grid"> 
          <div class="color-block section-10 block-1" onclick="changeColor('section-10','block-1')"></div>
          <div class="color-block section-10 block-2" onclick="changeColor('section-10','block-2')"></div>
          <div class="color-block section-10 block-3" onclick="changeColor('section-10','block-3')"></div>
          <div class="color-block section-10 block-4" onclick="changeColor('section-10','block-4')"></div>
          <div class="color-block section-10 block-5" onclick="changeColor('section-10','block-5')"></div>
          <div class="color-block section-10 block-6" onclick="changeColor('section-10','block-6')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-10 block-7" onclick="changeColor('section-10','block-7')"></div>
          <div class="color-block section-10 block-8" onclick="changeColor('section-10','block-8')"></div>
          <div class="color-block section-10 block-9" onclick="changeColor('section-10','block-9')"></div>
          <div class="color-block section-10 block-10" onclick="changeColor('section-10','block-10')"></div>
          <div class="color-block section-10 block-11" onclick="changeColor('section-10','block-11')"></div>
          <div class="color-block section-10 block-12" onclick="changeColor('section-10','block-12')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-10 block-13" onclick="changeColor('section-10','block-13')"></div>
          <div class="color-block section-10 block-14" onclick="changeColor('section-10','block-14')"></div>
          <div class="color-block section-10 block-15" onclick="changeColor('section-10','block-15')"></div>
          <div class="color-block section-10 block-16" onclick="changeColor('section-10','block-16')"></div>
          <div class="color-block section-10 block-17" onclick="changeColor('section-10','block-17')"></div>
          <div class="color-block section-10 block-18 colorpicker" onclick="changeColor('section-10','block-18')"><span class="custom">Custom</span></div>
        </div>
      </li>
      
      <li class="item-title item-title-11" onclick="showColors('color-block-section-11', 'item-title-11', 'icon-11');">Radar
        <img class="item-icon item-down-icon item-down-icon-11" src="./images/down_arrow.png" />
        <img class="item-icon item-x-icon item-x-icon-11" src="./images/x-icon.png" />
      </li>
      
      <li class="color-block-section color-block-section-11">
        <div class="color-header-section color-header-section-11">Choose a Color</div>
        <div class="flex-grid"> 
          <div class="color-block section-11 block-1" onclick="changeColor('section-11','block-1')"></div>
          <div class="color-block section-11 block-2" onclick="changeColor('section-11','block-2')"></div>
          <div class="color-block section-11 block-3" onclick="changeColor('section-11','block-3')"></div>
          <div class="color-block section-11 block-4" onclick="changeColor('section-11','block-4')"></div>
          <div class="color-block section-11 block-5" onclick="changeColor('section-11','block-5')"></div>
          <div class="color-block section-11 block-6" onclick="changeColor('section-11','block-6')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-11 block-7" onclick="changeColor('section-11','block-7')"></div>
          <div class="color-block section-11 block-8" onclick="changeColor('section-11','block-8')"></div>
          <div class="color-block section-11 block-9" onclick="changeColor('section-11','block-9')"></div>
          <div class="color-block section-11 block-10" onclick="changeColor('section-11','block-10')"></div>
          <div class="color-block section-11 block-11" onclick="changeColor('section-11','block-11')"></div>
          <div class="color-block section-11 block-12" onclick="changeColor('section-11','block-12')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-11 block-13" onclick="changeColor('section-11','block-13')"></div>
          <div class="color-block section-11 block-14" onclick="changeColor('section-11','block-14')"></div>
          <div class="color-block section-11 block-15" onclick="changeColor('section-11','block-15')"></div>
          <div class="color-block section-11 block-16" onclick="changeColor('section-11','block-16')"></div>
          <div class="color-block section-11 block-17" onclick="changeColor('section-11','block-17')"></div>
          <div class="color-block section-11 block-18 colorpicker" onclick="changeColor('section-1','block-18')"><span class="custom">Custom</span></div>
        </div>
      </li>
      
      <li class="item-title item-title-12" onclick="showColors('color-block-section-12', 'item-title-12', 'icon-12');">Sleigh Seat
        <img class="item-icon item-down-icon item-down-icon-12" src="./images/down_arrow.png" />
        <img class="item-icon item-x-icon item-x-icon-12" src="./images/x-icon.png" />
      </li>
      
      <li class="color-block-section color-block-section-12">
        <div class="color-header-section color-header-section-12">Choose a Color</div>
        <div class="flex-grid"> 
          <div class="color-block section-12 block-1" onclick="changeColor('section-12','block-1')"></div>
          <div class="color-block section-12 block-2" onclick="changeColor('section-12','block-2')"></div>
          <div class="color-block section-12 block-3" onclick="changeColor('section-12','block-3')"></div>
          <div class="color-block section-12 block-4" onclick="changeColor('section-12','block-4')"></div>
          <div class="color-block section-12 block-5" onclick="changeColor('section-12','block-5')"></div>
          <div class="color-block section-12 block-6" onclick="changeColor('section-12','block-6')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-12 block-7" onclick="changeColor('section-12','block-7')"></div>
          <div class="color-block section-12 block-8" onclick="changeColor('section-12','block-8')"></div>
          <div class="color-block section-12 block-9" onclick="changeColor('section-12','block-9')"></div>
          <div class="color-block section-12 block-10" onclick="changeColor('section-12','block-10')"></div>
          <div class="color-block section-12 block-11" onclick="changeColor('section-12','block-11')"></div>
          <div class="color-block section-12 block-12" onclick="changeColor('section-12','block-12')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-12 block-13" onclick="changeColor('section-12','block-13')"></div>
          <div class="color-block section-12 block-14" onclick="changeColor('section-12','block-14')"></div>
          <div class="color-block section-12 block-15" onclick="changeColor('section-12','block-15')"></div>
          <div class="color-block section-12 block-16" onclick="changeColor('section-12','block-16')"></div>
          <div class="color-block section-12 block-17" onclick="changeColor('section-12','block-17')"></div>
          <div class="color-block section-12 block-18 colorpicker" onclick="changeColor('section-12','block-18')"><span class="custom">Custom</span></div>
        </div>
      </li>
      
      <li class="item-title item-title-13" onclick="showColors('color-block-section-13', 'item-title-13', 'icon-13');">Upholstery
        <img class="item-icon item-down-icon item-down-icon-13" src="./images/down_arrow.png" />
        <img class="item-icon item-x-icon item-x-icon-13" src="./images/x-icon.png" />
      </li>
      
      <li class="color-block-section color-block-section-13">
        <div class="color-header-section color-header-section-13">Choose a Color</div>
        <div class="flex-grid"> 
          <div class="color-block section-13 block-1" onclick="changeColor('section-13','block-1')"></div>
          <div class="color-block section-13 block-2" onclick="changeColor('section-13','block-2')"></div>
          <div class="color-block section-13 block-3" onclick="changeColor('section-13','block-3')"></div>
          <div class="color-block section-13 block-4" onclick="changeColor('section-13','block-4')"></div>
          <div class="color-block section-13 block-5" onclick="changeColor('section-13','block-5')"></div>
          <div class="color-block section-13 block-6" onclick="changeColor('section-13','block-6')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-13 block-7" onclick="changeColor('section-13','block-7')"></div>
          <div class="color-block section-13 block-8" onclick="changeColor('section-13','block-8')"></div>
          <div class="color-block section-13 block-9" onclick="changeColor('section-13','block-9')"></div>
          <div class="color-block section-13 block-10" onclick="changeColor('section-13','block-10')"></div>
          <div class="color-block section-13 block-11" onclick="changeColor('section-13','block-11')"></div>
          <div class="color-block section-13 block-12" onclick="changeColor('section-13','block-12')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-13 block-13" onclick="changeColor('section-13','block-13')"></div>
          <div class="color-block section-13 block-14" onclick="changeColor('section-13','block-14')"></div>
          <div class="color-block section-13 block-15" onclick="changeColor('section-13','block-15')"></div>
          <div class="color-block section-13 block-16" onclick="changeColor('section-13','block-16')"></div>
          <div class="color-block section-13 block-17" onclick="changeColor('section-13','block-17')"></div>
          <div class="color-block section-13 block-18 colorpicker" onclick="changeColor('section-13','block-18')"><span class="custom">Custom</span></div>
        </div>
      </li>


      <li class="item-title item-title-engines" onclick="showEngines();">Engines
        <img class="item-icon item-down-icon item-down-icon-engines" src="./images/down_arrow.png" />
        <img class="item-icon item-x-icon item-x-icon-engines" src="./images/x-icon.png" />
      </li>

<div id="engines">

      <li class="item-title item-title-14" onclick="showColors('color-block-section-14', 'item-title-14', 'icon-14');">Yamaha Set 4
        <img class="item-icon item-down-icon item-down-icon-14" src="./images/down_arrow.png" />
        <img class="item-icon item-x-icon item-x-icon-14" src="./images/x-icon.png" />
      </li>
      
      <li class="color-block-section color-block-section-14">
        <div class="color-header-section color-header-section-14">Choose a Color</div>
        <div class="flex-grid"> 
          <div class="color-block section-14 block-1" onclick="changeColor('section-14','block-1')"></div>
          <div class="color-block section-14 block-2" onclick="changeColor('section-14','block-2')"></div>
          <div class="color-block section-14 block-3" onclick="changeColor('section-14','block-3')"></div>
          <div class="color-block section-14 block-4" onclick="changeColor('section-14','block-4')"></div>
          <div class="color-block section-14 block-5" onclick="changeColor('section-14','block-5')"></div>
          <div class="color-block section-14 block-6" onclick="changeColor('section-14','block-6')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-14 block-7" onclick="changeColor('section-14','block-7')"></div>
          <div class="color-block section-14 block-8" onclick="changeColor('section-14','block-8')"></div>
          <div class="color-block section-14 block-9" onclick="changeColor('section-14','block-9')"></div>
          <div class="color-block section-14 block-10" onclick="changeColor('section-14','block-10')"></div>
          <div class="color-block section-14 block-11" onclick="changeColor('section-14','block-11')"></div>
          <div class="color-block section-14 block-12" onclick="changeColor('section-14','block-12')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-14 block-13" onclick="changeColor('section-14','block-13')"></div>
          <div class="color-block section-14 block-14" onclick="changeColor('section-14','block-14')"></div>
          <div class="color-block section-14 block-15" onclick="changeColor('section-14','block-15')"></div>
          <div class="color-block section-14 block-16" onclick="changeColor('section-14','block-16')"></div>
          <div class="color-block section-14 block-17" onclick="changeColor('section-14','block-17')"></div>
          <div class="color-block section-14 block-18 colorpicker" onclick="changeColor('section-14','block-18')"><span class="custom">Custom</span></div>
        </div>
      </li>

      

      <li class="item-title item-title-15" onclick="showColors('color-block-section-15', 'item-title-15', 'icon-15');">Yamaha Set 5
        <img class="item-icon item-down-icon item-down-icon-15" src="./images/down_arrow.png" />
        <img class="item-icon item-x-icon item-x-icon-15" src="./images/x-icon.png" />
      </li>
      
      <li class="color-block-section color-block-section-15">
        <div class="color-header-section color-header-section-15">Choose a Color</div>
        <div class="flex-grid"> 
          <div class="color-block section-15 block-1" onclick="changeColor('section-15','block-1')"></div>
          <div class="color-block section-15 block-2" onclick="changeColor('section-15','block-2')"></div>
          <div class="color-block section-15 block-3" onclick="changeColor('section-15','block-3')"></div>
          <div class="color-block section-15 block-4" onclick="changeColor('section-15','block-4')"></div>
          <div class="color-block section-15 block-5" onclick="changeColor('section-15','block-5')"></div>
          <div class="color-block section-15 block-6" onclick="changeColor('section-15','block-6')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-15 block-7" onclick="changeColor('section-15','block-7')"></div>
          <div class="color-block section-15 block-8" onclick="changeColor('section-15','block-8')"></div>
          <div class="color-block section-15 block-9" onclick="changeColor('section-15','block-9')"></div>
          <div class="color-block section-15 block-10" onclick="changeColor('section-15','block-10')"></div>
          <div class="color-block section-15 block-11" onclick="changeColor('section-15','block-11')"></div>
          <div class="color-block section-15 block-12" onclick="changeColor('section-15','block-12')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-15 block-13" onclick="changeColor('section-15','block-13')"></div>
          <div class="color-block section-15 block-14" onclick="changeColor('section-15','block-14')"></div>
          <div class="color-block section-15 block-15" onclick="changeColor('section-15','block-15')"></div>
          <div class="color-block section-15 block-16" onclick="changeColor('section-15','block-16')"></div>
          <div class="color-block section-15 block-17" onclick="changeColor('section-15','block-17')"></div>
          <div class="color-block section-15 block-18 colorpicker" onclick="changeColor('section-15','block-18')"><span class="custom">Custom</span></div>
        </div>
      </li>

      

      <li class="item-title item-title-16" onclick="showColors('color-block-section-16', 'item-title-16', 'icon-16');">Mercedes 450 Set 4
        <img class="item-icon item-down-icon item-down-icon-16" src="./images/down_arrow.png" />
        <img class="item-icon item-x-icon item-x-icon-16" src="./images/x-icon.png" />
      </li>
      
      <li class="color-block-section color-block-section-16">
        <div class="color-header-section color-header-section-16">Choose a Color</div>
        <div class="flex-grid"> 
          <div class="color-block section-16 block-1" onclick="changeColor('section-16','block-1')"></div>
          <div class="color-block section-16 block-2" onclick="changeColor('section-16','block-2')"></div>
          <div class="color-block section-16 block-3" onclick="changeColor('section-16','block-3')"></div>
          <div class="color-block section-16 block-4" onclick="changeColor('section-16','block-4')"></div>
          <div class="color-block section-16 block-5" onclick="changeColor('section-16','block-5')"></div>
          <div class="color-block section-16 block-6" onclick="changeColor('section-16','block-6')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-16 block-7" onclick="changeColor('section-16','block-7')"></div>
          <div class="color-block section-16 block-8" onclick="changeColor('section-16','block-8')"></div>
          <div class="color-block section-16 block-9" onclick="changeColor('section-16','block-9')"></div>
          <div class="color-block section-16 block-10" onclick="changeColor('section-16','block-10')"></div>
          <div class="color-block section-16 block-11" onclick="changeColor('section-16','block-11')"></div>
          <div class="color-block section-16 block-12" onclick="changeColor('section-16','block-12')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-16 block-13" onclick="changeColor('section-16','block-13')"></div>
          <div class="color-block section-16 block-14" onclick="changeColor('section-16','block-14')"></div>
          <div class="color-block section-16 block-15" onclick="changeColor('section-16','block-15')"></div>
          <div class="color-block section-16 block-16" onclick="changeColor('section-16','block-16')"></div>
          <div class="color-block section-16 block-17" onclick="changeColor('section-16','block-17')"></div>
          <div class="color-block section-16 block-18 colorpicker" onclick="changeColor('section-16','block-18')"><span class="custom">Custom</span></div>
        </div>
      </li>
      

      

      <li class="item-title item-title-17" onclick="showColors('color-block-section-17', 'item-title-17', 'icon-17');">Mercedes 450 Set 5
        <img class="item-icon item-down-icon item-down-icon-17" src="./images/down_arrow.png" />
        <img class="item-icon item-x-icon item-x-icon-17" src="./images/x-icon.png" />
      </li>
      
      <li class="color-block-section color-block-section-17">
        <div class="color-header-section color-header-section-17">Choose a Color</div>
        <div class="flex-grid"> 
          <div class="color-block section-17 block-1" onclick="changeColor('section-17','block-1')"></div>
          <div class="color-block section-17 block-2" onclick="changeColor('section-17','block-2')"></div>
          <div class="color-block section-17 block-3" onclick="changeColor('section-17','block-3')"></div>
          <div class="color-block section-17 block-4" onclick="changeColor('section-17','block-4')"></div>
          <div class="color-block section-17 block-5" onclick="changeColor('section-17','block-5')"></div>
          <div class="color-block section-17 block-6" onclick="changeColor('section-17','block-6')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-17 block-7" onclick="changeColor('section-17','block-7')"></div>
          <div class="color-block section-17 block-8" onclick="changeColor('section-17','block-8')"></div>
          <div class="color-block section-17 block-9" onclick="changeColor('section-17','block-9')"></div>
          <div class="color-block section-17 block-10" onclick="changeColor('section-17','block-10')"></div>
          <div class="color-block section-17 block-11" onclick="changeColor('section-17','block-11')"></div>
          <div class="color-block section-17 block-12" onclick="changeColor('section-17','block-12')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-17 block-13" onclick="changeColor('section-17','block-13')"></div>
          <div class="color-block section-17 block-14" onclick="changeColor('section-17','block-14')"></div>
          <div class="color-block section-17 block-15" onclick="changeColor('section-17','block-15')"></div>
          <div class="color-block section-17 block-16" onclick="changeColor('section-17','block-16')"></div>
          <div class="color-block section-17 block-17" onclick="changeColor('section-17','block-17')"></div>
          <div class="color-block section-17 block-18 colorpicker" onclick="changeColor('section-17','block-18')"><span class="custom">Custom</span></div>
        </div>
      </li>
      

      

      <li class="item-title item-title-18" onclick="showColors('color-block-section-18', 'item-title-18', 'icon-18');">Mercedes 600 Set 4
        <img class="item-icon item-down-icon item-down-icon-18" src="./images/down_arrow.png" />
        <img class="item-icon item-x-icon item-x-icon-18" src="./images/x-icon.png" />
      </li>
      
      <li class="color-block-section color-block-section-18">
        <div class="color-header-section color-header-section-18">Choose a Color</div>
        <div class="flex-grid"> 
          <div class="color-block section-18 block-1" onclick="changeColor('section-18','block-1')"></div>
          <div class="color-block section-18 block-2" onclick="changeColor('section-18','block-2')"></div>
          <div class="color-block section-18 block-3" onclick="changeColor('section-18','block-3')"></div>
          <div class="color-block section-18 block-4" onclick="changeColor('section-18','block-4')"></div>
          <div class="color-block section-18 block-5" onclick="changeColor('section-18','block-5')"></div>
          <div class="color-block section-18 block-6" onclick="changeColor('section-18','block-6')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-18 block-7" onclick="changeColor('section-18','block-7')"></div>
          <div class="color-block section-18 block-8" onclick="changeColor('section-18','block-8')"></div>
          <div class="color-block section-18 block-9" onclick="changeColor('section-18','block-9')"></div>
          <div class="color-block section-18 block-10" onclick="changeColor('section-18','block-10')"></div>
          <div class="color-block section-18 block-11" onclick="changeColor('section-18','block-11')"></div>
          <div class="color-block section-18 block-12" onclick="changeColor('section-18','block-12')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-18 block-13" onclick="changeColor('section-18','block-13')"></div>
          <div class="color-block section-18 block-14" onclick="changeColor('section-18','block-14')"></div>
          <div class="color-block section-18 block-15" onclick="changeColor('section-18','block-15')"></div>
          <div class="color-block section-18 block-16" onclick="changeColor('section-18','block-16')"></div>
          <div class="color-block section-18 block-17" onclick="changeColor('section-18','block-17')"></div>
          <div class="color-block section-18 block-18 colorpicker" onclick="changeColor('section-18','block-18')"><span class="custom">Custom</span></div>
        </div>
      </li>
      
      

      <li class="item-title item-title-19" onclick="showColors('color-block-section-19', 'item-title-19', 'icon-19');">Mercedes 600 Set 5
        <img class="item-icon item-down-icon item-down-icon-19" src="./images/down_arrow.png" />
        <img class="item-icon item-x-icon item-x-icon-19" src="./images/x-icon.png" />
      </li>
      
      <li class="color-block-section color-block-section-19">
        <div class="color-header-section color-header-section-19">Choose a Color</div>
        <div class="flex-grid"> 
          <div class="color-block section-19 block-1" onclick="changeColor('section-19','block-1')"></div>
          <div class="color-block section-19 block-2" onclick="changeColor('section-19','block-2')"></div>
          <div class="color-block section-19 block-3" onclick="changeColor('section-19','block-3')"></div>
          <div class="color-block section-19 block-4" onclick="changeColor('section-19','block-4')"></div>
          <div class="color-block section-19 block-5" onclick="changeColor('section-19','block-5')"></div>
          <div class="color-block section-19 block-6" onclick="changeColor('section-19','block-6')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-19 block-7" onclick="changeColor('section-19','block-7')"></div>
          <div class="color-block section-19 block-8" onclick="changeColor('section-19','block-8')"></div>
          <div class="color-block section-19 block-9" onclick="changeColor('section-19','block-9')"></div>
          <div class="color-block section-19 block-10" onclick="changeColor('section-19','block-10')"></div>
          <div class="color-block section-19 block-11" onclick="changeColor('section-19','block-11')"></div>
          <div class="color-block section-19 block-12" onclick="changeColor('section-19','block-12')"></div>
        </div>
        <div class="flex-grid"> 
          <div class="color-block section-19 block-13" onclick="changeColor('section-19','block-13')"></div>
          <div class="color-block section-19 block-14" onclick="changeColor('section-19','block-14')"></div>
          <div class="color-block section-19 block-15" onclick="changeColor('section-19','block-15')"></div>
          <div class="color-block section-19 block-16" onclick="changeColor('section-19','block-16')"></div>
          <div class="color-block section-19 block-17" onclick="changeColor('section-19','block-17')"></div>
          <div class="color-block section-19 block-18 colorpicker" onclick="changeColor('section-19','block-18')"><span class="custom">Custom</span></div>
        </div>
      </li>
    </div>

    </ul>
  </div>

    <div class="iframe-container">
        <iframe title="Sketchfab Viewer" src="" id="api-frame"></iframe>
     </div>
</div>

<script>
  var colorpickersCustom = KellyColorPicker.attachToInputByClass('colorpicker', {alpha_slider : false, size : 200, popupClass : 'popup-kelly-color-custom'}); 
</script>

<script type="text/javascript" src="js/appnew.js"></script>
</body>
</html>
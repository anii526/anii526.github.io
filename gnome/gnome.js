(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#454545",
	webfonts: {},
	manifest: [
	{ src: "gnome/images/gnome_atlas_.png?1473495556", id: "gnome_atlas_" },
    { src: "gnome/images/gnome_atlas_2.png?1473495556", id: "gnome_atlas_2" },
    { src: "gnome/images/gnome_atlas_3.png?1473495556", id: "gnome_atlas_3" },
    { src: "gnome/images/gnome_atlas_4.png?1473495556", id: "gnome_atlas_4" }
	]
};


lib.ssMetadata = [
        { name: "gnome_atlas_", frames: [[1284,306,164,430],[1284,1170,164,430],[1284,738,164,430],[1284,1602,164,430],[1450,306,164,430],[1616,306,164,430],[1782,1602,164,430],[1450,738,164,430],[1616,1602,164,430],[1616,738,164,430],[1450,1170,164,430],[1450,1602,164,430],[1782,306,164,430],[1616,1170,164,430],[1782,738,164,430],[1782,1170,164,430],[0,0,640,485],[0,487,640,485],[642,1446,640,448],[1284,0,640,304],[642,0,640,480],[0,974,640,480],[0,1456,640,480],[642,482,640,480],[642,964,640,480]]},
        { name: "gnome_atlas_2", frames: [[166, 0, 164, 430], [0, 864, 164, 430], [166, 432, 164, 430], [0, 1296, 164, 430], [0, 432, 164, 430], [0, 0, 164, 430], [332, 0, 164, 430], [166, 1296, 164, 430], [332, 1296, 164, 430], [1328, 0, 164, 430], [498, 0, 164, 430], [996, 0, 164, 430], [332, 432, 164, 430], [498, 432, 164, 430], [166, 864, 164, 430], [664, 0, 164, 430], [830, 0, 164, 430], [332, 864, 164, 430], [498, 864, 164, 430], [498, 1296, 164, 430], [1162, 0, 164, 430], [1494, 0, 164, 430], [1660, 0, 164, 430], [664, 864, 164, 430], [830, 864, 164, 430], [1494, 432, 164, 430], [1826, 0, 164, 430], [996, 432, 164, 430], [664, 1296, 164, 430], [1660, 432, 164, 430], [1826, 432, 164, 430], [1162, 432, 164, 430], [664, 432, 164, 430], [1328, 432, 164, 430], [830, 432, 164, 430], [830, 1296, 164, 430], [996, 864, 164, 430], [996, 1296, 164, 430], [1162, 864, 164, 430], [1328, 864, 164, 430], [1162, 1296, 164, 430], [1328, 1296, 164, 430], [1494, 864, 164, 430], [1660, 864, 164, 430], [1826, 864, 164, 430], [1660, 1296, 164, 430], [1494, 1296, 164, 430], [1826, 1296, 164, 430]] },
        { name: "gnome_atlas_3", frames: [[1000, 1702, 248, 201], [830, 1499, 248, 201], [0, 1728, 248, 201], [250, 1728, 248, 201], [500, 1728, 248, 201], [1250, 432, 248, 201], [996, 432, 248, 201], [750, 1728, 248, 201], [1500, 432, 248, 201], [830, 1296, 248, 201], [1250, 1650, 248, 201], [1750, 432, 248, 201], [1500, 635, 248, 201], [996, 635, 248, 201], [996, 838, 248, 201], [996, 1041, 248, 201], [1080, 1244, 248, 201], [1080, 1447, 248, 201], [1750, 635, 248, 201], [1246, 838, 248, 201], [1496, 1041, 248, 201], [1496, 838, 248, 201], [1750, 1244, 248, 201], [1750, 1041, 248, 201], [1246, 1041, 248, 201], [1246, 635, 248, 201], [1580, 1447, 248, 201], [1330, 1244, 248, 201], [1500, 1650, 248, 201], [1750, 1650, 248, 201], [1750, 838, 248, 201], [1330, 1447, 248, 201], [0, 432, 164, 430], [0, 0, 164, 430], [0, 864, 164, 430], [166, 432, 164, 430], [166, 0, 164, 430], [0, 1296, 164, 430], [166, 1296, 164, 430], [166, 864, 164, 430], [332, 0, 164, 430], [332, 432, 164, 430], [332, 864, 164, 430], [332, 1296, 164, 430], [498, 0, 164, 430], [498, 432, 164, 430], [498, 864, 164, 430], [664, 0, 164, 430], [498, 1296, 164, 430], [830, 0, 164, 430], [996, 0, 164, 430], [1494, 0, 164, 430], [1162, 0, 164, 430], [1328, 0, 164, 430], [1660, 0, 164, 430], [1826, 0, 164, 430], [664, 432, 164, 430], [664, 864, 164, 430], [830, 864, 164, 430], [664, 1296, 164, 430], [830, 432, 164, 430]] },
        { name: "gnome_atlas_4", frames: [[759, 1514, 110, 163], [759, 1436, 46, 57], [1000, 107, 22, 36], [999, 1589, 23, 34], [969, 1555, 27, 34], [969, 1625, 27, 33], [999, 1555, 25, 32], [704, 1852, 57, 57], [351, 1806, 71, 83], [642, 1436, 115, 164], [1000, 356, 21, 33], [992, 443, 30, 35], [634, 1848, 68, 82], [969, 1591, 28, 32], [913, 1710, 75, 87], [130, 1806, 73, 83], [680, 609, 67, 91], [205, 1806, 71, 84], [920, 666, 60, 58], [969, 1519, 27, 34], [982, 666, 25, 39], [278, 1806, 71, 83], [998, 1625, 23, 31], [992, 406, 32, 35], [496, 1806, 66, 89], [947, 1368, 73, 90], [992, 522, 30, 33], [969, 1660, 27, 32], [992, 480, 25, 40], [959, 1852, 54, 56], [838, 1710, 73, 90], [969, 1460, 55, 57], [564, 1848, 68, 83], [424, 1806, 70, 84], [1000, 37, 24, 33], [998, 1658, 21, 32], [1000, 252, 22, 33], [588, 1708, 21, 32], [998, 1692, 21, 32], [1000, 287, 22, 32], [1000, 321, 21, 33], [947, 1460, 20, 33], [1000, 72, 24, 33], [1000, 219, 24, 31], [1000, 0, 24, 35], [999, 1519, 25, 34], [611, 1708, 20, 32], [1000, 182, 22, 35], [1000, 145, 22, 35], [750, 568, 168, 158], [170, 609, 168, 158], [0, 609, 168, 158], [340, 609, 168, 158], [510, 609, 168, 158], [680, 728, 168, 158], [660, 1249, 16, 32], [660, 1283, 16, 32], [0, 769, 168, 158], [740, 1602, 16, 32], [1008, 1726, 16, 32], [990, 1726, 16, 32], [812, 1368, 133, 144], [660, 1317, 16, 32], [740, 1636, 16, 32], [588, 1742, 16, 32], [606, 1742, 16, 32], [624, 1742, 16, 32], [850, 728, 168, 158], [170, 1368, 640, 32], [170, 769, 168, 158], [340, 769, 168, 158], [500, 0, 248, 201], [0, 0, 248, 201], [170, 1402, 640, 32], [250, 0, 248, 201], [680, 888, 168, 158], [750, 0, 248, 201], [0, 1436, 640, 32], [0, 203, 248, 201], [250, 203, 248, 201], [0, 1470, 640, 32], [500, 203, 248, 201], [750, 203, 248, 201], [510, 769, 168, 158], [0, 406, 248, 201], [0, 1504, 640, 32], [250, 406, 248, 201], [500, 406, 248, 201], [0, 1538, 640, 32], [850, 888, 168, 158], [0, 1606, 640, 32], [0, 1640, 640, 32], [0, 1572, 640, 32], [0, 1674, 640, 32], [0, 929, 168, 158], [170, 929, 168, 158], [340, 929, 168, 158], [510, 929, 168, 158], [680, 1048, 168, 158], [850, 1048, 168, 158], [170, 1089, 168, 158], [0, 1089, 168, 158], [680, 1208, 168, 158], [510, 1089, 168, 158], [340, 1089, 168, 158], [170, 1249, 96, 96], [920, 568, 96, 96], [268, 1249, 96, 96], [366, 1249, 96, 96], [464, 1249, 96, 96], [562, 1249, 96, 96], [850, 1208, 168, 158], [871, 1514, 96, 96], [750, 406, 240, 160], [642, 1602, 96, 96], [763, 1852, 96, 32], [763, 1886, 96, 32], [861, 1886, 96, 32], [0, 1890, 96, 32], [0, 1856, 96, 32], [861, 1852, 96, 32], [278, 1891, 96, 32], [98, 1925, 96, 32], [196, 1925, 96, 32], [802, 1920, 96, 32], [704, 1920, 96, 32], [900, 1920, 96, 32], [376, 1892, 96, 32], [294, 1926, 96, 32], [0, 1924, 96, 32], [98, 1891, 96, 32], [718, 1802, 128, 48], [848, 1802, 128, 48], [588, 1798, 128, 48], [0, 1806, 128, 48], [0, 1249, 168, 158], [474, 1897, 81, 37], [871, 1612, 96, 96], [740, 1679, 96, 96], [642, 1700, 96, 96], [294, 1708, 96, 96], [98, 1708, 96, 96], [392, 1708, 96, 96], [0, 1708, 96, 96], [490, 1708, 96, 96], [196, 1708, 96, 96]] }
];



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.back = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap17ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap18ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap20ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap21ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap22ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap23ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap24ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap25ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap26ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap27ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap28ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap29ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap30ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap31ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap32ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap33ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap34ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap35ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap36ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap37ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap38ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap39ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap40ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap41ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap42ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap43ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap44ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap45ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap46ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap47ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap48ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap49ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap50ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9ca = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.bitmap1 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.bitmap101 = function() {
	this.spriteSheet = ss["gnome_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bitmap103 = function() {
	this.spriteSheet = ss["gnome_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bitmap105 = function() {
	this.spriteSheet = ss["gnome_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bitmap107 = function() {
	this.spriteSheet = ss["gnome_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bitmap109 = function() {
	this.spriteSheet = ss["gnome_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bitmap11 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.bitmap111 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bitmap113 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bitmap115 = function() {
	this.spriteSheet = ss["gnome_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bitmap117 = function() {
	this.spriteSheet = ss["gnome_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bitmap119 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bitmap12 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bitmap121 = function() {
	this.spriteSheet = ss["gnome_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.bitmap123 = function() {
	this.spriteSheet = ss["gnome_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.bitmap125 = function() {
	this.spriteSheet = ss["gnome_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.bitmap127 = function() {
	this.spriteSheet = ss["gnome_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.bitmap129 = function() {
	this.spriteSheet = ss["gnome_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.bitmap13 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.bitmap131 = function() {
	this.spriteSheet = ss["gnome_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.bitmap133 = function() {
	this.spriteSheet = ss["gnome_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.bitmap136 = function() {
	this.spriteSheet = ss["gnome_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.bitmap138 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bitmap14 = function() {
	this.spriteSheet = ss["gnome_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.bitmap140 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bitmap142 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bitmap144 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.bitmap146 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.bitmap148 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.bitmap15 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.bitmap150 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.bitmap152 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.bitmap154 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.bitmap156 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.bitmap158 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.bitmap16 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.bitmap160 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.bitmap162 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.bitmap164 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.bitmap166 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.bitmap169 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.bitmap17 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.bitmap176 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.bitmap178 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.bitmap18 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.bitmap180 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.bitmap182 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.bitmap184 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.bitmap186 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.bitmap188 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.bitmap19 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.bitmap190 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.bitmap192 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.bitmap194 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.bitmap196 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.bitmap198 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.bitmap2 = function() {
	this.spriteSheet = ss["gnome_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.bitmap20 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.bitmap200 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.bitmap202 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.bitmap207 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.bitmap209 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.bitmap21 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.bitmap211 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.bitmap212 = function() {
	this.spriteSheet = ss["gnome_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.bitmap213 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.bitmap215 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.bitmap215_1 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.bitmap217 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.bitmap218 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bitmap219 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.bitmap22 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.bitmap220 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bitmap221 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.bitmap222 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bitmap223 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.bitmap224 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bitmap225 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.bitmap226 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bitmap228 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bitmap23 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.bitmap230 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bitmap232 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.bitmap234 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.bitmap236 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.bitmap238 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.bitmap24 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.bitmap240 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.bitmap241 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.bitmap242 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.bitmap242_1 = function() {
	this.spriteSheet = ss["gnome_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.bitmap244 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.bitmap246 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.bitmap248 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.bitmap25 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.bitmap250 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.bitmap252 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.bitmap254 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.bitmap257 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.bitmap259 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.bitmap26 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.bitmap261 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.bitmap263 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.bitmap265 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.bitmap267 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.bitmap269 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.bitmap27 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.bitmap271 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.bitmap273 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.bitmap275 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.bitmap277 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.bitmap279 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.bitmap28 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.bitmap281 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.bitmap283 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.bitmap285 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.bitmap285_1 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.bitmap287 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.bitmap29 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.bitmap290 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.bitmap290_1 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.bitmap292 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.bitmap294 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.bitmap295 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.bitmap296 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.bitmap298 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.bitmap3 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.bitmap30 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.bitmap300 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.bitmap300_1 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.bitmap302 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.bitmap304 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.bitmap305 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.bitmap31 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.bitmap310 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.bitmap315 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.bitmap32 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.bitmap320 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.bitmap325 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.bitmap33 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.bitmap34 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.bitmap35 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.bitmap36 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.bitmap37 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.bitmap38 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.bitmap39 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.bitmap40 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.bitmap41 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.bitmap42 = function() {
	this.spriteSheet = ss["gnome_atlas_2"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.bitmap43 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.bitmap44 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.bitmap45 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.bitmap46 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.bitmap47 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.bitmap48 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.bitmap49 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.bitmap5 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.bitmap5_1 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.bitmap50 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.bitmap51 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.bitmap52 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.bitmap54 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.bitmap56 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.bitmap57 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.bitmap58 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.bitmap59 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.bitmap60 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.bitmap61 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.bitmap62 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.bitmap63 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.bitmap64 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.bitmap65 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.bitmap66 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.bitmap68 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.bitmap68_1 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.bitmap7 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.bitmap70 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.bitmap70_1 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.bitmap711 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.bitmap72 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.bitmap72_1 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.bitmap737 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.bitmap739 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.bitmap74 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.bitmap741 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.bitmap743 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.bitmap745 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.bitmap747 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.bitmap749 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.bitmap751 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.bitmap753 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.bitmap755 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.bitmap757 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.bitmap759 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.bitmap76 = function() {
	this.spriteSheet = ss["gnome_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.bitmap76_1 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.bitmap761 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.bitmap763 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.bitmap765 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.bitmap767 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.bitmap771 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.bitmap773 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.bitmap775 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.bitmap777 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.bitmap78 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.bitmap80 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.bitmap82 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.bitmap84 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.bitmap86 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.bitmap88 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.bitmap9 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.bitmap90 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.bitmap92 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.bitmap94 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.bitmap96 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.bitmap99 = function() {
	this.spriteSheet = ss["gnome_atlas_3"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap_pickg = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.help_1 = function() {
	this.spriteSheet = ss["gnome_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.help_2 = function() {
	this.spriteSheet = ss["gnome_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.help_3 = function() {
	this.spriteSheet = ss["gnome_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.help_4 = function() {
	this.spriteSheet = ss["gnome_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.help_5 = function() {
	this.spriteSheet = ss["gnome_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.icon1 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.icon2 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.icon3 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.icon4 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.icon5 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.icon6 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.icon7 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.icon8 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.icon9 = function() {
	this.spriteSheet = ss["gnome_atlas_4"];
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.Symbol778 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],134), null, new cjs.Matrix2D(1,0,0,1,-64,-24)).s().p("Ap/DvIAAneIT+AAIAAHeg");
	this.shape.setTransform(64,24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128,48);


(lib.Symbol776 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],133), null, new cjs.Matrix2D(1,0,0,1,-64,-24)).s().p("Ap/DvIAAneIT+AAIAAHeg");
	this.shape.setTransform(64,24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128,48);


(lib.Symbol774 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],132), null, new cjs.Matrix2D(1,0,0,1,-64,-24)).s().p("Ap/DvIAAneIT+AAIAAHeg");
	this.shape.setTransform(64,24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128,48);


(lib.Symbol772 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],131), null, new cjs.Matrix2D(1,0,0,1,-64,-24)).s().p("Ap/DvIAAneIT+AAIAAHeg");
	this.shape.setTransform(64,24);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128,48);


(lib.Symbol769 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{idle:0,stop:48});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],115), null, new cjs.Matrix2D(1,0,0,1,-48,-16)).s().p("AnfCgIAAk/IO/AAIAAE/g");
	this.shape.setTransform(48,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],116), null, new cjs.Matrix2D(1,0,0,1,-48,-16)).s().p("AnfCgIAAk/IO/AAIAAE/g");
	this.shape_1.setTransform(48,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],117), null, new cjs.Matrix2D(1,0,0,1,-48,-16)).s().p("AnfCgIAAk/IO/AAIAAE/g");
	this.shape_2.setTransform(48,16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],118), null, new cjs.Matrix2D(1,0,0,1,-48,-16)).s().p("AnfCgIAAk/IO/AAIAAE/g");
	this.shape_3.setTransform(48,16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],119), null, new cjs.Matrix2D(1,0,0,1,-48,-16)).s().p("AnfCgIAAk/IO/AAIAAE/g");
	this.shape_4.setTransform(48,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],120), null, new cjs.Matrix2D(1,0,0,1,-48,-16)).s().p("AnfCgIAAk/IO/AAIAAE/g");
	this.shape_5.setTransform(48,16);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],121), null, new cjs.Matrix2D(1,0,0,1,-48,-16)).s().p("AnfCgIAAk/IO/AAIAAE/g");
	this.shape_6.setTransform(48,16);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],122), null, new cjs.Matrix2D(1,0,0,1,-48,-16)).s().p("AnfCgIAAk/IO/AAIAAE/g");
	this.shape_7.setTransform(48,16);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],123), null, new cjs.Matrix2D(1,0,0,1,-48,-16)).s().p("AnfCgIAAk/IO/AAIAAE/g");
	this.shape_8.setTransform(48,16);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],124), null, new cjs.Matrix2D(1,0,0,1,-48,-16)).s().p("AnfCgIAAk/IO/AAIAAE/g");
	this.shape_9.setTransform(48,16);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],125), null, new cjs.Matrix2D(1,0,0,1,-48,-16)).s().p("AnfCgIAAk/IO/AAIAAE/g");
	this.shape_10.setTransform(48,16);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],126), null, new cjs.Matrix2D(1,0,0,1,-48,-16)).s().p("AnfCgIAAk/IO/AAIAAE/g");
	this.shape_11.setTransform(48,16);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],127), null, new cjs.Matrix2D(1,0,0,1,-48,-16)).s().p("AnfCgIAAk/IO/AAIAAE/g");
	this.shape_12.setTransform(48,16);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],128), null, new cjs.Matrix2D(1,0,0,1,-48,-16)).s().p("AnfCgIAAk/IO/AAIAAE/g");
	this.shape_13.setTransform(48,16);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],129), null, new cjs.Matrix2D(1,0,0,1,-48,-16)).s().p("AnfCgIAAk/IO/AAIAAE/g");
	this.shape_14.setTransform(48,16);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],130), null, new cjs.Matrix2D(1,0,0,1,-48,-16)).s().p("AnfCgIAAk/IO/AAIAAE/g");
	this.shape_15.setTransform(48,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_4}]},3).to({state:[{t:this.shape_5}]},3).to({state:[{t:this.shape_6}]},3).to({state:[{t:this.shape_7}]},3).to({state:[{t:this.shape_8}]},3).to({state:[{t:this.shape_9}]},3).to({state:[{t:this.shape_10}]},3).to({state:[{t:this.shape_11}]},3).to({state:[{t:this.shape_12}]},3).to({state:[{t:this.shape_13}]},3).to({state:[{t:this.shape_14}]},3).to({state:[{t:this.shape_15}]},3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96,32);


(lib.graphics_flamcSlotBackgroundMouse_component_57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol312s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF10").s().p("AgTBQQgJgFgGgIQgFgJgBgKIgBgjIAAgaIABgiQABgKAFgJQAFgIAJgEQAJgFALAAQALAAAJAEQAJAFAGAIQAFAJABAJIABAjIAAAaIgBAjQgBAKgFAIQgFAJgKAFQgJAEgLAAQgKAAgJgEgAgDg1QgBACAAANIAABKQAAAOABADQABADACAAQADAAABgDQABgEAAgOIAAhJQAAgMgBgCQgBgDgDgBQgBAAgCADg");
	this.shape.setTransform(108.4,25.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF10").s().p("AgRBRIAAiBIgWAAIAAgfIBPAAIAAAfIgWAAIAACBg");
	this.shape_1.setTransform(99.3,25.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF10").s().p("AgfBRIAAigIA8AAIAAAfIgZAAIAAAgIAYAAIAAAcIgYAAIAAAkIAbAAIAAAhg");
	this.shape_2.setTransform(88.5,25.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF10").s().p("AgcBRIAAigIAjAAIAAB/IAWAAIAAAhg");
	this.shape_3.setTransform(81.4,25.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF10").s().p("AgpBRIAAigIAlAAQAPAAAJACQAJADAFAKQAGAJAAAWQAAAOgEAFQgEAGgLADQANADAEAGQAEAHAAARIAAAPQAAAQgCAIQgEAHgHADQgIAEgVAAgAgEA1QAFAAADgDQACgCgBgLIAAgPQABgKgCgCQgDgCgFAAgAgEgQIADAAQADAAACgDQABgDAAgOIAAgLQgCgEgCAAIgFgBg");
	this.shape_4.setTransform(72.8,25.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF10").s().p("AgUBNQgJgEgFgIQgFgIgBgIIgBgkIAAheIAlAAIAAB3QAAALABADQABADACAAQADAAABgEQABgDAAgMIAAh1IAlAAIAABqIgBAaQgBAHgGAIQgFAIgIAEQgJAEgLAAQgLAAgKgFg");
	this.shape_5.setTransform(62.8,26.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF10").s().p("AgTBQQgJgFgGgIQgFgJgBgKIgBgjIAAgaIABgiQABgKAFgJQAFgIAJgEQAJgFALAAQALAAAJAEQAJAFAGAIQAFAJABAJIABAjIAAAaIgBAjQgBAKgFAIQgFAJgKAFQgJAEgLAAQgKAAgJgEgAgDg1QgBACAAANIAABKQAAAOABADQABADACAAQADAAABgDQABgEAAgOIAAhJQAAgMgBgCQgBgDgDgBQgBAAgCADg");
	this.shape_6.setTransform(53,25.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF10").s().p("AgpBRIAAigIAbAAQAZgBAKADQAJADAFAGQAFAHABAIIABAeIAAA3QAAAWgBAIQgCAHgFAEQgEAEgHACQgGABgOABgAgEA1QAGAAABgEQACgDAAgRIAAg9IAAgOQgBgDgCgCQgCgBgEAAg");
	this.shape_7.setTransform(43.2,25.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.windouble_txt = new cjs.Text("600", "30px 'Impact'", "#FFFF10");
	this.windouble_txt.name = "windouble_txt";
	this.windouble_txt.lineHeight = 39;
	this.windouble_txt.lineWidth = 178;
	this.windouble_txt.setTransform(124.2,5,1,0.999);

	this.timeline.addTween(cjs.Tween.get(this.windouble_txt).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.8,5,320.8,40.6);


(lib.Symbol243 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],68), null, new cjs.Matrix2D(1,0,0,1,-320,-16)).s().p("Egx+ACfIAAk9MBj+AAAIAAE9g");
	this.shape.setTransform(364,31);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_"],18), null, new cjs.Matrix2D(1,0,0,1,-320,-224)).s().p("Egx+AjAMAAAhF/MBj+AAAMAAABF/g");
	this.shape_1.setTransform(363,271);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(43,15,641,480);


(lib.Symbol217 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],61), null, new cjs.Matrix2D(1,0,0,1,-66.5,-72)).s().p("AqYLQIAA2fIUxAAIAAWfg");
	this.shape.setTransform(66.5,72);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133,144);


(lib.shield_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],113), null, new cjs.Matrix2D(1,0,0,1,-120,-80)).s().p("AyvMfIAA4+MAlfAAAIAAY+g");
	this.shape.setTransform(106.6,-52.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.4,-132.5,240,160);


(lib.pick_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Bitmap_pickg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81,37);


(lib.lines_temn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],88), null, new cjs.Matrix2D(1,0,0,1,-320,-16)).s().p("Egx/ACgIAAk/MBj+AAAIAAE/g");
	this.shape.setTransform(320,144);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],92), null, new cjs.Matrix2D(1,0,0,1,-320,-15.6)).s().p("Egx/ACcIAAk3MBj+AAAIAAE3g");
	this.shape_1.setTransform(320,239.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],93), null, new cjs.Matrix2D(1,0,0,1.026,-320,-16.4)).s().p("Egx/ACkIAAlHMBj+AAAIAAFHg");
	this.shape_2.setTransform(320,271.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],90), null, new cjs.Matrix2D(1,0,0,1,-320,-16)).s().p("Egx/ACgIAAk/MBj+AAAIAAE/g");
	this.shape_3.setTransform(320,176);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],91), null, new cjs.Matrix2D(1,0,0,1,-320,-16)).s().p("Egx/ACfIAAk9MBj+AAAIAAE9g");
	this.shape_4.setTransform(320,208);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],77), null, new cjs.Matrix2D(1,0,0,1,-320,-16)).s().p("Egx/ACfIAAk9MBj+AAAIAAE9g");
	this.shape_5.setTransform(320,48);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],80), null, new cjs.Matrix2D(1,0,0,1.036,-320,-16)).s().p("Egx/ACgIAAk/MBj+AAAIAAE/g");
	this.shape_6.setTransform(320,80);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],85), null, new cjs.Matrix2D(1,0,0,1,-320,-16)).s().p("Egx/ACfIAAk9MBj+AAAIAAE9g");
	this.shape_7.setTransform(320,112);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],73), null, new cjs.Matrix2D(1,0,0,1,-320,-16)).s().p("Egx/ACgIAAk/MBj+AAAIAAE/g");
	this.shape_8.setTransform(320,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,288.1);


(lib.help_scene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.help_1();

	this.instance_1 = new lib.help_2();

	this.instance_2 = new lib.help_3();

	this.instance_3 = new lib.help_4();

	this.instance_4 = new lib.help_5();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.card = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(7,7,7,0)").s().p("AhPBAIAAiAICfAAIAACAg");
	this.shape.setTransform(8,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,13);


(lib.bounds_infopanel_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#45492E").s().p("AuCErIAApVIcFAAIAAJVg");
	this.shape.setTransform(90,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,179.9,60);


(lib.Symbol306 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],76), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape.setTransform(124,100.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],78), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_1.setTransform(124,100.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],79), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_2.setTransform(124,100.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],81), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_3.setTransform(124,100.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],82), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_4.setTransform(124,100.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],84), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_5.setTransform(124,100.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],86), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_6.setTransform(124,100.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],87), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_7.setTransform(124,100.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,248,201);


(lib.Symbol289 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],19), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape.setTransform(124,100.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],20), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_1.setTransform(124,100.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],21), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_2.setTransform(124,100.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],22), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_3.setTransform(124,100.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],23), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_4.setTransform(124,100.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],24), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_5.setTransform(124,100.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],25), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_6.setTransform(124,100.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],26), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_7.setTransform(124,100.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],27), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_8.setTransform(124,100.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],28), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_9.setTransform(124,100.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],29), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_10.setTransform(124,100.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],30), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_11.setTransform(124,100.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],71), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_12.setTransform(124,100.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],31), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_13.setTransform(124,100.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],72), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_14.setTransform(124,100.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],74), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_15.setTransform(124,100.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_4}]},3).to({state:[{t:this.shape_5}]},3).to({state:[{t:this.shape_6}]},3).to({state:[{t:this.shape_7}]},3).to({state:[{t:this.shape_8}]},3).to({state:[{t:this.shape_9}]},3).to({state:[{t:this.shape_10}]},3).to({state:[{t:this.shape_11}]},3).to({state:[{t:this.shape_12}]},3).to({state:[{t:this.shape_13}]},3).to({state:[{t:this.shape_14}]},3).to({state:[{t:this.shape_15}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,248,201);


(lib.Symbol256 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],0), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape.setTransform(124,100.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],1), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_1.setTransform(124,100.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],2), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_2.setTransform(124,100.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],3), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_3.setTransform(124,100.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],4), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_4.setTransform(124,100.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],5), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_5.setTransform(124,100.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],6), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_6.setTransform(124,100.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],7), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_7.setTransform(124,100.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],8), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_8.setTransform(124,100.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],9), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_9.setTransform(124,100.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],10), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_10.setTransform(124,100.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],11), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_11.setTransform(124,100.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],12), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_12.setTransform(124,100.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],13), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_13.setTransform(124,100.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],14), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_14.setTransform(124,100.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],15), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_15.setTransform(124,100.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],16), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_16.setTransform(124,100.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],17), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_17.setTransform(124,100.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],18), null, new cjs.Matrix2D(1,0,0,1,-124,-100.5)).s().p("AzXPsIAA/YMAmvAAAIAAfYg");
	this.shape_18.setTransform(124,100.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_18}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,248,201);


(lib.Symbol214 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_"],17), null, new cjs.Matrix2D(1,0,0,1,-320,-242.5)).s().p("Egx/Al5MAAAhLxMBj+AAAMAAABLxg");
	this.shape.setTransform(320,242.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,485);


(lib.Symbol407 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgHA2IgMgEIgGgCIgEACQgDABgBAEIgCAAIAAgoIACAAQAEARAJAJQAKAIAKABQAIAAAFgFQAGgFAAgGQAAgEgCgEQgDgDgDgDQgEgDgJgGQgOgHgHgEQgGgDgDgHQgDgGAAgIQAAgMAJgJQAJgJAOAAQADAAAFABIAJAEIAHADQABAAAAgBQABAAAAAAQABAAAAAAQAAgBAAAAQACgBABgFIACAAIABAkIgDAAQgCgOgKgIQgIgIgJAAQgHAAgFAFQgFADAAAGQAAAEACADQACADAFAEIAPAJQASAJAHAGQAGAIABALQgBANgJAJQgLAKgQAAIgHgBg");
	this.shape.setTransform(116.7,35.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgbA1IAAgDIAEAAQAEAAADgCQACgBACgDQABgCAAgHIAAhQIgIAAQgLgBgFAFQgGAGgCAMIgDAAIAAgdIBdAAIAAAdIgDAAQgDgJgCgFQgDgEgGgDQgCgCgIABIgIAAIAABQQAAAHABACQAAABAAAAQABABAAAAQABABAAAAQABABAAAAQADACAFAAIADAAIAAADg");
	this.shape_1.setTransform(106.9,35.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgaA1IAAgDIADAAQAFAAADgCQACgBABgDIABgJIAAhFIgBgJIgDgEQgDgCgFAAIgDAAIAAgDIA1AAIAAADIgDAAQgFAAgDACQgCABgBADQgBACAAAHIAABFQAAAHABACIAEAEQACACAFAAIADAAIAAADg");
	this.shape_2.setTransform(98.3,35.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("Ag0A1IAAgDIADAAQAFAAADgCIADgEIABgJIAAhFQAAgHgBgCQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBgBAAAAQgDgCgFAAIgDAAIAAgDIAwAAQAQAAAMAGQAOAGAIANQAHAMAAAPQAAALgEAJQgEAKgFAGQgGAGgHAEQgIAEgKACIgNABgAgMAjIABAJIACABIAGABQAMAAAGgIQAJgMAAgaQABgSgHgMQgFgKgIgDQgFgDgMABg");
	this.shape_3.setTransform(89.3,35.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AgvA1IAAgDIAEAAQAFAAACgCQACgBACgDIAAgJIAAhFIAAgIQgBgDgCgBQgDgCgFgBIgEAAIAAgDIBXAAIAAAgIgDAAQgCgMgEgEQgEgFgIgDQgEgCgMABIgJAAIAAArIACAAQAIAAAFgGQAEgHABgMIADAAIAAA1IgDAAQgBgJgDgGQgDgFgEgDQgDgCgGAAIAAAfQAAAIABACQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAIAFABIAGAAQAPAAAJgGQAJgHAEgOIADAAIgFAig");
	this.shape_4.setTransform(78.2,35.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AAXA1IgggxIgHAAIAAAeQAAAIABADQABACADABIAKACIAAADIg2AAIAAgDQAHAAADgCQACgBABgDQABgBAAgJIAAhDQAAgJgBgBQAAgBgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQgDgCgHAAIAAgDIAwAAQASABAJACQAIADAHAHQAFAHAAAKQAAALgIAIQgGADgJACIAZAkIAHAJQADADAEAAIAAADgAgQAAIAFAAQAKAAADgBQAGgCADgFQAEgFAAgJQgBgMgFgGQgGgGgLABIgIAAg");
	this.shape_5.setTransform(67.5,35.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AgVAwQgOgHgHgNQgHgMAAgPQAAgNAIgOQAIgNANgHQAOgIANAAQALAAANAFIAJADQAAAAABAAQABAAAAgBQABAAAAAAQABgBAAAAIADgGIADAAIAAAlIgDAAQgEgOgJgIQgKgIgMAAQgJAAgHAGQgIAGgEAJQgFALAAAPQAAAMAEAMQADALAIAHQAGAFAMAAQAKABAIgFQAJgEAJgLIAAAJQgJAKgKAEQgJAEgNAAQgPAAgNgHg");
	this.shape_6.setTransform(55.6,35.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("AgcAxQgEgDAAgFQAAgDACgDQADgDADABQADgBADACIALAHIAHAEIAFABQAGAAAEgFQAFgFAAgGQAAgOgOgJQgMgHgVAAIgGAAIATg1IAwAAIgIAUIgoAAIgEAMQAZABAPAMQAMAIAAAPQAAAKgGAKQgGAIgKAGQgKAEgKAAQgNAAgHgEg");
	this.shape_7.setTransform(41.9,35.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AghA2IAAgCQAdgiAEgMQAHgKAAgLQAAgJgGgFQgDgFgHAAQgMAAgHAMIgDgBQAFgPAIgHQAJgIAJABQAIAAAHADQAGAEAEAGQAEAHAAAGQAAAKgGAKQgIANgYAaIAUAAIAMAAIAEgDIAEgHIADAAIgGAfg");
	this.shape_8.setTransform(33.8,35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AghA2IAAgCQAdgiAEgMQAHgKAAgLQAAgJgGgFQgDgFgHAAQgMAAgHAMIgCgBQAEgPAIgHQAJgIAJABQAIAAAHADQAGAEAEAGQAEAHAAAGQAAAKgGAKQgIANgYAaIAUAAIAMAAIADgDIAFgHIADAAIgGAfg");
	this.shape_9.setTransform(25.8,35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("AgrAjQgMgPAAgUQAAgXAQgPQAQgQAXABQAYgBAQAQQAQAPAAAXQAAATgMAPQgQAVgcAAQgbAAgQgUgAgVghQgGAMAAAVQAAAbAKANQAGAJALAAQAHAAAGgEQAHgFADgLQAEgLAAgSQAAgTgEgKQgEgLgGgEQgGgEgHAAQgNAAgIAPg");
	this.shape_10.setTransform(107.3,17.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF00").s().p("AgaA0IAAgCIADAAQAFgBADgBQAAAAAAgBQABAAAAgBQABAAAAgBQAAAAAAgBQABgBAAgJIAAhQIgHAAQgLABgEAEQgIAHgBALIgDAAIAAgdIBdAAIAAAdIgDAAQgDgKgCgEQgDgFgGgCQgDgBgHgBIgIAAIAABQQAAAJABABQAAABAAAAQABABAAAAQABABAAAAQABABABAAQACABAEABIAEAAIAAACg");
	this.shape_11.setTransform(96,17.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("AgZA1IAAgCIADAAQAGgBADgBQADgCABgCQABgDAAgKIAAg1QAAgHgBgCQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgEABgFACIgCgDIAlgSIADAAIAABVQgBAKABACIAEAFQADABAGABIACAAIAAACg");
	this.shape_12.setTransform(82.9,17.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFF00").s().p("AgcA0IAAgCIAFAAQAFgBADgBQACgBABgDQABgBAAgJIAAgVIgZgrQgIgNgDgDQgDgDgFABIAAgEIAzAAIAAAEIgCAAQgFgBgCACQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAAAAAQAAADAHAMIARAhIATgeQAHgMAAgEQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgDgCgHAAIAAgEIAhAAIAAAEQgGAAgDACQgDAEgJAOIgXAlIAAAZQAAAJABABQAAABABAAQAAABAAAAQABABAAAAQABABAAAAQADABAEABIAGAAIAAACg");
	this.shape_13.setTransform(65.8,17.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFF00").s().p("AAEA1IAAgCIACAAQAHgBACgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIgBgCIgCgHIgGgMIgjAAIgFAJIgCAJQAAAFAEACQACABAIABIAAACIgjAAIAAgCQAGgBADgEQAEgEAFgMIAlhTIABAAIAmBWQAFAMAEADQADACAFABIAAACgAgYARIAeAAIgOgig");
	this.shape_14.setTransform(55.7,17.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFF00").s().p("AgwA0IAAgCIAEAAQAEgBAEgBQAAAAAAgBQABAAAAgBQABAAAAgBQAAAAABgBQAAgBAAgJIAAhEQAAgIAAgCIgEgDQgCgCgFABIgEAAIAAgEIA3AAIAAAEIgFAAQgCgBgDACQgCABgCADIAAAJIAABCQAAAJABABQAAABAAABQABAAAAABQABAAAAAAQABABAAAAIAIABIAJAAQAIgBAGgDQAGgDADgGQAEgGAEgNIADAAIgDAlg");
	this.shape_15.setTransform(44.5,17.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFF00").s().p("AgrA0IAAgCIAKgBQADgCAAgDQACgCAAgIIAAhDQAAgJgCgCQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQgCgCgIABIAAgEIAsAAQAXABAKAHQAKAJAAAMQAAAKgGAIQgHAFgLADQgHACgRAAIAAAdQAAAIABADIADAEIAJABIAAACgAgEAAIAEAAQAHAAAGgFQAFgFAAgMQAAgMgFgGQgGgFgIgBIgDAAg");
	this.shape_16.setTransform(34.4,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.7,6.5,180.5,39.4);


(lib.line_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9E0000").s().p("EgrzAAEIAAgIMBXoAAAIAAAIg");
	this.shape.setTransform(322.5,138.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("EgrzAAGIAAgLMBXoAAAIAAALg");
	this.shape_1.setTransform(322.5,139.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B40000").s().p("EgrzAADIAAgGMBXoAAAIAAAGg");
	this.shape_2.setTransform(322.5,140.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Egr5AAUIgEgFIAAgiIAKAAIAAAKIAAALIAAAIMBXoAAAIAAgIIAAgLIAAgKIAJAAIAAAiIgEAFg");
	this.shape_3.setTransform(322.5,140.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#479E11").s().p("EgrzAAFIAAgIMBXnAAAIAAAIg");
	this.shape_4.setTransform(324.1,11.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7EFF1F").s().p("EgrzAAGIAAgLMBXnAAAIAAALg");
	this.shape_5.setTransform(324.1,13);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#50B414").s().p("EgrzAAEIAAgGMBXnAAAIAAAGg");
	this.shape_6.setTransform(324.1,14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Egr5AAUIgEgFIAAgiIAKAAIAAAKIAAALIAAAIMBXnAAAIAAgIIAAgLIAAgKIAKAAIAAAiIgEAFg");
	this.shape_7.setTransform(324.1,13.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0200BB").s().p("EgrzAADIAAgGMBXoAAAIAAAGg");
	this.shape_8.setTransform(322.5,264.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0200A9").s().p("EgrzAAEIAAgIMBXoAAAIAAAIg");
	this.shape_9.setTransform(322.5,262.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0300FF").s().p("EgrzAAGIAAgLMBXoAAAIAAALg");
	this.shape_10.setTransform(322.5,263.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A75A00").s().p("Ai5NNQg3AAgzgVIAAAAQgzgVgngnI3p3nQgqgpg3gXIAAAAQg4gXg7AAIq5AAIAAgKIK5AAQA+AAA5AYQA5AXArArIXpXnQAlAlAyAVQAyAUA0AAIF2AAQA1AAAygUQAxgVAmglIXp3nQArgrA5gXQA4gYA+AAIK2AAIAAAKIq2AAQg8AAg3AXIAAAAQg2AXgrApI3pXnQgnAngzAVIAAAAQgzAVg3AAg");
	this.shape_11.setTransform(323.1,155.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9800").s().p("Ai5NPQg5AAg2gWQg1gWgpgpI3p3nQgogng1gXQg1gVg5AAIq5AAIAAgOIK5AAQA7AAA4AXIAAABQA3AWAqApIXpXnQAnAnAzAWIAAgBQAzAWA3gBIF2AAQA3ABAzgWIAAABQAzgWAngnIXp3nQArgpA2gWIAAgBQA3gXA8AAIK2AAIAAAOIq2AAQg4AAg1AVQg1AXgoAnI3pXnQgpApg1AWQg3AWg5AAg");
	this.shape_12.setTransform(323.1,156.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AF5F00").s().p("Ai5NMQg7AAg3gXQg3gWgqgqI3p3nQgngngzgVQg0gWg3AAIq5AAIAAgHIK5AAQA5AAA1AWQA1AWAoAnIXpXnQApApA1AWQA2AWA5AAIF2AAQA5AAA3gWQA1gWApgpIXp3nQAognA1gWQA1gWA4AAIK2AAIAAAHIq2AAQg3AAg0AWQgzAVgnAnI3pXnQgqAqg3AWQg3AXg7AAg");
	this.shape_13.setTransform(323.1,157.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ai5NdQg9AAg5gYIAAABQg5gYgrgrI3p3oQglglgygVQgxgUg2AAIq/AAIgEgFIAAgkIAKAAIAAAKIAAAOIAAAHIK5AAQA3AAA0AVQAzAWAnAnIXpXnQAqAqA3AWQA3AXA7AAIF2AAQA7AAA3gXQA3gWAqgqIXp3nQAngnAzgWQA0gVA3AAIK2AAIAAgHIAAgOIAAgKIAKAAIAAAkIgEAFIq8AAQg1AAgxAUQgyAVglAlI3pXoQgrArg5AYIAAgBQg6AYg9AAg");
	this.shape_14.setTransform(323.1,157);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFF00").s().p("EAg+ANPQg6AAg1gWQg2gWgpgpI3p3nQgngog1gWQg2gWg4AAIl2AAQg4AAg0AWQg2AWgoAoI3pXnQgpApg1AWQg2AWg6AAIq5AAIAAgNIK5AAQA3AAA0gWIAAABQAzgVAngoIXp3nQAqgpA3gXIAAAAQA3gXA7AAIF2AAQA7AAA3AXIAAAAQA3AXAqApIXpXnQAnAnAzAVQA0AWA3AAIK2AAIAAANg");
	this.shape_15.setTransform(323.1,120.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#ADAD00").s().p("EAg+ANMQg8AAg3gXQg2gWgrgqI3p3nQgngngzgVQgzgWg3AAIl2AAQg3AAgzAWQgzAVgnAnI3pXnQgqAqg3AWQg4AXg7AAIq5AAIAAgHIK5AAQA6AAA2gWQA1gXApgpIXp3nQAognA2gWQA0gWA4AAIF2AAQA4AAA2AWQA1AWAnAnIXpXnQApApA2AXQA1AWA6AAIK2AAIAAAHg");
	this.shape_16.setTransform(323.1,121.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("EAg+ANOQg+AAg4gZIAAABQg5gYgrgrI3p3nQgmgmgxgUQgygVg1ABIl2AAQg0gBgyAVQgyAUglAmI3pXnQgrArg5AYIAAgBQg5AZg+AAIq/AAIgEgGIAAgkIAKAAIAAAKIAAAOIAAAIIK5AAQA7AAA4gYQA3gWAqgqIXp3nQAngnAzgVQAzgVA3AAIF2AAQA3AAAzAVQAzAVAnAnIXpXnQArAqA2AWQA3AYA8AAIK2AAIAAgIIAAgOIAAgKIAKAAIAAAkIgEAGg");
	this.shape_17.setTransform(323.1,122.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A7A700").s().p("EAg+ANNQg3ABg0gWQgzgVgngnI3p3nQgqgqg3gWIAAAAQg3gYg7AAIl2AAQg7AAg3AYIAAAAQg3AWgqAqI3pXnQgnAngzAWIAAgBQg0AWg3gBIq5AAIAAgKIK5AAQA2ABAxgVQAygUAlgmIXp3nQArgrA5gXQA5gZA9AAIF2AAQA9AAA6AZQA5AXArArIXpXnQAlAmAyAUQAxAVA1gBIK2AAIAAAKg");
	this.shape_18.setTransform(323.1,119.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7F0098").s().p("AAAFNQgqAAgpgQIAAgBQgogRgfgfInunrQgugwg/gZQg9gZhCAAI9/AAIAAgKId/AAQBEAABAAaQBAAaAvAxIHuHsQAeAdAnAQQAmAPAoAAIAAAAQApAAAngPQAngRAdgdIHtnrQAwgxBAgaQA/gaBFAAId/AAIAAAKI9/AAQhCAAg+AZIAAABQg+AZgvAvIntHrQgeAegpASQgpARgrAAg");
	this.shape_19.setTransform(323.6,76.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E400FF").s().p("AAAFOQgtAAgqgRQgsgSggghInunsQgsgsg8gZQg8gZg/AAI9/AAIAAgNId/AAQBCAAA9AZQA/AaAuAvIHuHsQAfAeAoARIAAABQApAQAqAAIAAAAQArAAApgRQApgRAegfIHtnrQAvgvA+gZIAAgBQA+gZBCAAId/AAIAAANI9/AAQg/AAg8AZQg8AZgsAsIntHsIAAAAQghAhgrASQgrARguAAg");
	this.shape_20.setTransform(323.6,77.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9200AE").s().p("AAAFLQguAAgtgSQgsgSghgiInunsQgsgsg6gYQg6gYg+AAI9/AAIAAgHId/AAQA/AAA8AYQA8AZAsAsIHuHsQAgAhAsASQAqARAtABIAAAAQAugBArgRQArgSAhghIAAAAIHtnsQAsgsA8gZQA8gYA/AAId/AAIAAAHI9/AAQg+AAg6AYQg6AYgsAsInsHsQgiAigtASQgsASgwAAg");
	this.shape_21.setTransform(323.6,78.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAAFcQgwAAgugTQgvgUgigiInvnsQgqgrg4gXQg4gXg8AAI+FAAIgEgFIAAgkIAKAAIAAAKIAAANIAAAIId/AAQA+AAA6AYQA6AYAsAsIHuHsQAhAhAsATQAtASAuAAIAAAAQAwAAAsgSQAtgTAigiIHsnrQAsgsA6gYQA6gYA+AAId/AAIAAgIIAAgNIAAgKIAKAAIAAAkIgEAFI+FAAQg8AAg4AXQg5AXgqArIntHrQgiAjgvAUQgvATgxAAg");
	this.shape_22.setTransform(323.6,77.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A546").s().p("AN1FOQhBAAg8gZQg9gYgtguIntnsQgggggpgRQgrgSgtAAIAAAAQgrAAgqASQgrARgfAgInuHsQgtAug9AYQg8AZhBAAI9/AAIAAgNId/AAQA+AAA6gYQA6gZArgrIHunsQAighAtgTQAsgSAuAAIAAAAQAvAAAtASQAtATAhAhIHtHsQArArA7AZQA6AYA+AAIeAAAIAAANg");
	this.shape_23.setTransform(323.3,202.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#005C27").s().p("AN1FNQg+AAg6gYQg7gZgrgrIntnsQghgigtgSQgtgTgvAAIAAAAQguAAgsATQgtASgiAiInuHsQgrArg6AZQg6AYg+AAI9/AAIAAgKId/AAQA8AAA4gXQA4gYArgqIHunsQAigjAvgTQAugUAwAAIAAAAQAxAAAvAUQAuATAkAjIHsHsQAqAqA5AYQA4AXA8AAIeAAAIAAAKg");
	this.shape_24.setTransform(323.3,201.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00682C").s().p("AN1FMQhCAAg+gaQg+gagvguIntnsQgegegpgRQgpgSgrAAIAAAAQgqAAgoARQgpARgfAfInuHsQguAug+AaQg+AahCAAI9/AAIAAgIId/AAQBBAAA8gZQA9gZAtguIHunsQAfggArgQQAqgTArABIAAAAQAtgBArATQApARAgAfIHtHsQAtAuA9AZQA8AZBBAAIeAAAIAAAIg");
	this.shape_25.setTransform(323.3,203.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AN1FNQhEAAhAgbQhAgagwgwIntnsQgdgdgngQQgmgQgqgBIAAAAQgoAAgnAQQgmAQgdAeInuHsQgxAwhAAaQg/AbhEAAI+FAAIgFgFIAAgkIALAAIAAAKIAAANIAAAIId/AAQBCAAA+gaQA+gZAugvIHunsQAfgfApgRQAogRAqAAIAAAAQArABApARQApARAeAeIHtHsQAvAvA+AZQA+AaBCAAIeAAAIAAgIIAAgNIAAgKIAJAAIAAAkIgFAFg");
	this.shape_26.setTransform(323.3,204.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00AEAE").s().p("AxrDrQg+AAg6gYQg7gYgrgsIkPkNQgvgvg9gZQg/gahBAAIuvAAIAAgKIOvAAQBDAABAAbQBAAaAwAwIEPENQAqAqA5AYQA4AXA8AAMAjXAAAQA8AAA4gXQA4gYAqgqIEPkNQAwgwBAgaQBAgbBEAAIOvAAIAAAKIuvAAQhCAAg+AaQg+AZgvAvIkOENQgsAsg6AYQg6AYg+AAg");
	this.shape_27.setTransform(323.1,189.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00ABAB").s().p("AxrDqQhCAAg+gaQg+gZgvgvIkPkNQgsgsg5gYQg6gYg+AAIuvAAIAAgIIOvAAQA+AAA8AZQA8AZAtAsIEPENQAtAuA9AZQA9AZBAAAMAjXAAAQBBAAA8gZQA8gZAuguIEPkNQAsgsA9gZQA7gZA/AAIOvAAIAAAIIuvAAQg9AAg7AYQg6AYgrAsIkPENQgvAvg+AZQg+AahCAAg");
	this.shape_28.setTransform(323.1,192);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00FFFF").s().p("AxrDtQhAAAg9gZQg9gZgtguIkPkNQgtgtg8gYQg8gZg+AAIuvAAIAAgOIOvAAQBBAAA/AaQA9AZAvAvIEPENQArAsA7AYQA6AYA+AAMAjXAAAQA+AAA6gYQA6gYAsgsIEOkNQAvgvA+gZQA+gaBCAAIOvAAIAAAOIuvAAQg/AAg7AZQg9AYgsAtIkPENQguAug8AZQg8AZhBAAg");
	this.shape_29.setTransform(323.1,191);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AxrD6QhEABhAgbQhAgbgwgvIkPkNQgqgrg5gXQg4gXg7AAIu1AAIgEgFIAAglIAKAAIAAAKIAAAOIAAAIIOvAAQA+AAA6AYQA5AYAsAsIEPEMQAvAvA+AaQA+AZBCABMAjXAAAQBCgBA+gZQA+gaAvgvIEPkMQArgsA6gYQA7gYA9AAIOvAAIAAgIIAAgOIAAgKIAKAAIAAAlIgEAFIu1AAQg8AAg4AXIAAAAQg4AXgrArIkPENQgvAvhAAbQg/AbhFgBg");
	this.shape_30.setTransform(323.1,191.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AdFDrQhEAAhAgbQhAgagwgwIkPkNQgqgqg4gYQg4gXg8AAMgjXAAAQg8AAg4AXQg5AYgqAqIkPENQgvAwhBAaQhAAbhDAAIu1AAIgEgFIAAgkIAKAAIAAAKIAAANIAAAIIOvAAQBBAAA/gaQA9gZAvgvIEPkNQArgrA7gZQA6gYA+AAMAjXAAAQA+AAA6AYQA6AZAsArIEOENQAvAvA+AZQA+AaBCAAIOvAAIAAgIIAAgNIAAgKIAKAAIAAAkIgEAFg");
	this.shape_31.setTransform(323.1,86.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#AFAFAF").s().p("AdFDqQhCAAg+gaQg+gagvguIkOkNQgsgsg6gYQg6gYg+AAMgjXAAAQg+AAg6AYQg7AYgrAsIkPENQgvAug9AaQg/AahBAAIuvAAIAAgIIOvAAQBAAAA8gZQA9gZAtguIEPkNQAugtA7gYQA7gYBAAAMAjXAAAQA/AAA8AYQA8AYAsAtIEPENQAuAuA8AZQA9AZBAAAIOvAAIAAAIg");
	this.shape_32.setTransform(323.1,85.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AdFDsQhAAAg9gYQg8gagugtIkPkNQgsgtg8gYQg8gZg/AAMgjXAAAQhAAAg7AZQg7AYguAtIkPENQgtAtg9AaQg8AYhAAAIuvAAIAAgNIOvAAQA+AAA6gYQA6gZArgrIEPkNQAvguA+gaQA+gZBCAAMAjXAAAQBCAAA+AZQA+AaAvAuIEPENQArArA6AZIAAAAQA7AYA9AAIOvAAIAAANg");
	this.shape_33.setTransform(323.1,84.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A5A5A5").s().p("AdFDrQg9AAg7gYIAAAAQg6gZgrgrIkPkNQgvgvg+gZQg+gahCAAMgjXAAAQhCAAg+AaQg+AZgvAvIkPENQgrArg6AZQg6AYg+AAIuvAAIAAgKIOvAAQA7AAA4gXQA5gYAqgqIEPkNQAwgwBAgaQBAgbBEAAMAjXAAAQBEAABAAbQBAAaAvAwIEPENQArAqA4AYQA1AVA3ACIO3AAIAAAKg");
	this.shape_34.setTransform(323.1,83);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{y:140.1}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3,p:{y:264.1}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41,138,563,4.2);


(lib.icon9_an = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],105), null, new cjs.Matrix2D(1,0,0,1,-48,-48)).s().p("AnfHgIAAu/IO/AAIAAO/g");
	this.shape.setTransform(48,48);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],106), null, new cjs.Matrix2D(1,0,0,1,-48,-48)).s().p("AnfHgIAAu/IO/AAIAAO/g");
	this.shape_1.setTransform(48,48);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],107), null, new cjs.Matrix2D(1,0,0,1,-48,-48)).s().p("AnfHgIAAu/IO/AAIAAO/g");
	this.shape_2.setTransform(48,48);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],108), null, new cjs.Matrix2D(1,0,0,1,-48,-48)).s().p("AnfHgIAAu/IO/AAIAAO/g");
	this.shape_3.setTransform(48,48);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],109), null, new cjs.Matrix2D(1,0,0,1,-48,-48)).s().p("AnfHgIAAu/IO/AAIAAO/g");
	this.shape_4.setTransform(48,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},8).to({state:[{t:this.shape_2}]},8).to({state:[{t:this.shape_3}]},8).to({state:[{t:this.shape_4}]},8).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96,96);


(lib.icon1_an = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],110), null, new cjs.Matrix2D(1,0,0,1,-48,-48)).s().p("AnfHgIAAu/IO/AAIAAO/g");
	this.shape.setTransform(48,48);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],112), null, new cjs.Matrix2D(1,0,0,1,-48,-48)).s().p("AnfHgIAAu/IO/AAIAAO/g");
	this.shape_1.setTransform(48,48);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],114), null, new cjs.Matrix2D(1,0,0,1,-48,-48)).s().p("AnfHgIAAu/IO/AAIAAO/g");
	this.shape_2.setTransform(48,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},8).to({state:[{t:this.shape_2}]},8).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96,96);


(lib.Symbol226 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],66), null, new cjs.Matrix2D(1,0,0,1,-8,-16)).s().p("AhPCgIAAk/ICfAAIAAE/g");
	this.shape.setTransform(8,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,32);


(lib.Symbol224 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],65), null, new cjs.Matrix2D(1,0,0,1,-8,-16)).s().p("AhPCgIAAk/ICfAAIAAE/g");
	this.shape.setTransform(8,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,32);


(lib.Symbol222 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],64), null, new cjs.Matrix2D(1,0,0,1,-8,-16)).s().p("AhPCgIAAk/ICfAAIAAE/g");
	this.shape.setTransform(8,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,32);


(lib.Symbol220 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],63), null, new cjs.Matrix2D(1,0,0,1,-8,-16)).s().p("AhPCgIAAk/ICfAAIAAE/g");
	this.shape.setTransform(8,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,32);


(lib.Symbol218 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],62), null, new cjs.Matrix2D(1,0,0,1,-8,-16)).s().p("AhPCgIAAk/ICfAAIAAE/g");
	this.shape.setTransform(8,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,32);


(lib.Symbol216 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],60), null, new cjs.Matrix2D(1,0,0,1,-8,-16)).s().p("AhPCgIAAk/ICfAAIAAE/g");
	this.shape.setTransform(8,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,32);


(lib.Symbol214_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],59), null, new cjs.Matrix2D(1,0,0,1,-8,-16)).s().p("AhPCgIAAk/ICfAAIAAE/g");
	this.shape_1.setTransform(8,16);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,32);


(lib.Symbol212 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],58), null, new cjs.Matrix2D(1,0,0,1,-8,-16)).s().p("AhPCgIAAk/ICfAAIAAE/g");
	this.shape.setTransform(8,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,32);


(lib.Symbol210 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],56), null, new cjs.Matrix2D(1,0,0,1,-8,-16)).s().p("AhPCgIAAk/ICfAAIAAE/g");
	this.shape.setTransform(8,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,32);


(lib.Symbol208 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],55), null, new cjs.Matrix2D(1,0,0,1,-8,-16)).s().p("AhPCgIAAk/ICfAAIAAE/g");
	this.shape.setTransform(8,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,32);


(lib.Symbol77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_"],19), null, new cjs.Matrix2D(1,0,0,1,-320,-152)).s().p("Egx/AXwMAAAgvfMBj+AAAMAAAAvfg");
	this.shape.setTransform(494.7,152);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(174.7,0,640,304);


(lib.spades_card = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap42ca();
	this.instance.setTransform(6,10);

	this.instance_1 = new lib.Bitmap43ca();
	this.instance_1.setTransform(8,11);

	this.instance_2 = new lib.Bitmap44ca();
	this.instance_2.setTransform(6,10);

	this.instance_3 = new lib.Bitmap45ca();
	this.instance_3.setTransform(8,14);

	this.instance_4 = new lib.Bitmap46ca();
	this.instance_4.setTransform(7,10);

	this.instance_5 = new lib.Bitmap47ca();
	this.instance_5.setTransform(7,10);

	this.instance_6 = new lib.Bitmap48ca();
	this.instance_6.setTransform(6,10);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhoACIAAgDIDRAAIAAADg");
	this.shape.setTransform(16.2,0.3);

	this.instance_7 = new lib.Bitmap49ca();
	this.instance_7.setTransform(9,12);

	this.instance_8 = new lib.Bitmap50ca();
	this.instance_8.setTransform(7,11);

	this.instance_9 = new lib.Bitmap41ca();
	this.instance_9.setTransform(33,10);

	this.instance_10 = new lib.Bitmap31ca();
	this.instance_10.setTransform(7,10);

	this.instance_11 = new lib.Bitmap40ca();
	this.instance_11.setTransform(35,6);

	this.instance_12 = new lib.Bitmap32ca();
	this.instance_12.setTransform(5,8);

	this.instance_13 = new lib.Bitmap39ca();
	this.instance_13.setTransform(32,4);

	this.instance_14 = new lib.Bitmap35ca();
	this.instance_14.setTransform(4,10);

	this.instance_15 = new lib.Bitmap36ca();
	this.instance_15.setTransform(6,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.shape},{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_10},{t:this.instance_9}]},1).to({state:[{t:this.instance_12},{t:this.instance_11}]},1).to({state:[{t:this.instance_14},{t:this.instance_13}]},1).to({state:[{t:this.instance_15}]},1).wait(1));

	// Layer 5
	this.instance_16 = new lib.Bitmap38ca();
	this.instance_16.setTransform(28,99);

	this.instance_17 = new lib.Bitmap37ca();
	this.instance_17.setTransform(6,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16}]}).wait(13));

	// Layer 4
	this.instance_18 = new lib.Bitmap1ca();

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,164);


(lib.hearts_card = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap4ca();
	this.instance.setTransform(7,11);

	this.instance_1 = new lib.Bitmap5ca();
	this.instance_1.setTransform(7,11);

	this.instance_2 = new lib.Bitmap6ca();
	this.instance_2.setTransform(6,11);

	this.instance_3 = new lib.Bitmap7ca();
	this.instance_3.setTransform(8,16);

	this.instance_4 = new lib.Bitmap8ca();
	this.instance_4.setTransform(7,11);

	this.instance_5 = new lib.Bitmap9ca();
	this.instance_5.setTransform(7,10);

	this.instance_6 = new lib.Bitmap10ca();
	this.instance_6.setTransform(7,12);

	this.instance_7 = new lib.Bitmap11ca();
	this.instance_7.setTransform(8,11);

	this.instance_8 = new lib.Bitmap12ca();
	this.instance_8.setTransform(5,10);

	this.instance_9 = new lib.Bitmap20ca();
	this.instance_9.setTransform(8,11);

	this.instance_10 = new lib.Bitmap19ca();
	this.instance_10.setTransform(34,11);

	this.instance_11 = new lib.Bitmap22ca();
	this.instance_11.setTransform(35,5);

	this.instance_12 = new lib.Bitmap21ca();
	this.instance_12.setTransform(5,11);

	this.instance_13 = new lib.Bitmap24ca();
	this.instance_13.setTransform(32,5);

	this.instance_14 = new lib.Bitmap23ca();
	this.instance_14.setTransform(4,11);

	this.instance_15 = new lib.Bitmap16ca();
	this.instance_15.setTransform(6,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_10},{t:this.instance_9}]},1).to({state:[{t:this.instance_12},{t:this.instance_11}]},1).to({state:[{t:this.instance_14},{t:this.instance_13}]},1).to({state:[{t:this.instance_15}]},1).wait(1));

	// Layer 5
	this.instance_16 = new lib.Bitmap18ca();
	this.instance_16.setTransform(25,98);

	this.instance_17 = new lib.Bitmap17ca();
	this.instance_17.setTransform(5,53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16}]}).wait(13));

	// Layer 4
	this.instance_18 = new lib.Bitmap1ca();

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,164);


(lib.diamonds_card = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Bitmap4ca();
	this.instance.setTransform(7,11);

	this.instance_1 = new lib.Bitmap5ca();
	this.instance_1.setTransform(7,11);

	this.instance_2 = new lib.Bitmap6ca();
	this.instance_2.setTransform(6,11);

	this.instance_3 = new lib.Bitmap7ca();
	this.instance_3.setTransform(8,16);

	this.instance_4 = new lib.Bitmap8ca();
	this.instance_4.setTransform(7,11);

	this.instance_5 = new lib.Bitmap9ca();
	this.instance_5.setTransform(7,10);

	this.instance_6 = new lib.Bitmap10ca();
	this.instance_6.setTransform(7,12);

	this.instance_7 = new lib.Bitmap11ca();
	this.instance_7.setTransform(8,11);

	this.instance_8 = new lib.Bitmap12ca();
	this.instance_8.setTransform(5,10);

	this.instance_9 = new lib.Bitmap27ca();
	this.instance_9.setTransform(32,9);

	this.instance_10 = new lib.Bitmap20ca();
	this.instance_10.setTransform(8,11);

	this.instance_11 = new lib.Bitmap26ca();
	this.instance_11.setTransform(36,7);

	this.instance_12 = new lib.Bitmap21ca();
	this.instance_12.setTransform(5,11);

	this.instance_13 = new lib.Bitmap25ca();
	this.instance_13.setTransform(33,7);

	this.instance_14 = new lib.Bitmap23ca();
	this.instance_14.setTransform(4,11);

	this.instance_15 = new lib.Bitmap16ca();
	this.instance_15.setTransform(6,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_10},{t:this.instance_9}]},1).to({state:[{t:this.instance_12},{t:this.instance_11}]},1).to({state:[{t:this.instance_14},{t:this.instance_13}]},1).to({state:[{t:this.instance_15}]},1).wait(1));

	// Layer 3
	this.instance_16 = new lib.Bitmap3ca();
	this.instance_16.setTransform(26,97);

	this.instance_17 = new lib.Bitmap2ca();
	this.instance_17.setTransform(6,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16}]}).wait(13));

	// Layer 2
	this.instance_18 = new lib.Bitmap1ca();

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,164);


(lib.clubs_card = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Bitmap42ca();
	this.instance.setTransform(6,10);

	this.instance_1 = new lib.Bitmap43ca();
	this.instance_1.setTransform(8,11);

	this.instance_2 = new lib.Bitmap44ca();
	this.instance_2.setTransform(6,10);

	this.instance_3 = new lib.Bitmap45ca();
	this.instance_3.setTransform(8,14);

	this.instance_4 = new lib.Bitmap46ca();
	this.instance_4.setTransform(7,10);

	this.instance_5 = new lib.Bitmap47ca();
	this.instance_5.setTransform(7,10);

	this.instance_6 = new lib.Bitmap48ca();
	this.instance_6.setTransform(6,10);

	this.instance_7 = new lib.Bitmap49ca();
	this.instance_7.setTransform(9,12);

	this.instance_8 = new lib.Bitmap50ca();
	this.instance_8.setTransform(7,11);

	this.instance_9 = new lib.Bitmap31ca();
	this.instance_9.setTransform(7,10);

	this.instance_10 = new lib.Bitmap30ca();
	this.instance_10.setTransform(33,10);

	this.instance_11 = new lib.Bitmap33ca();
	this.instance_11.setTransform(37,8);

	this.instance_12 = new lib.Bitmap32ca();
	this.instance_12.setTransform(5,8);

	this.instance_13 = new lib.Bitmap35ca();
	this.instance_13.setTransform(4,10);

	this.instance_14 = new lib.Bitmap34ca();
	this.instance_14.setTransform(33,5);

	this.instance_15 = new lib.Bitmap36ca();
	this.instance_15.setTransform(6,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_10},{t:this.instance_9}]},1).to({state:[{t:this.instance_12},{t:this.instance_11}]},1).to({state:[{t:this.instance_14},{t:this.instance_13}]},1).to({state:[{t:this.instance_15}]},1).wait(1));

	// Layer 3
	this.instance_16 = new lib.Bitmap29ca();
	this.instance_16.setTransform(5,50);

	this.instance_17 = new lib.Bitmap28ca();
	this.instance_17.setTransform(25,97);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16}]}).wait(13));

	// Layer 2
	this.instance_18 = new lib.Bitmap1ca();

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,164);


(lib.back_card = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,163);


(lib.Symbol206 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(9,278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,278,46,57);


(lib.Symbol204 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],21), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape.setTransform(82,215);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],22), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_1.setTransform(82,215);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],24), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_2.setTransform(82,215);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],25), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_3.setTransform(82,215);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],26), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_4.setTransform(82,215);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],27), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_5.setTransform(82,215);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],28), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_6.setTransform(82,215);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],29), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_7.setTransform(82,215);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],30), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_8.setTransform(82,215);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],31), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_9.setTransform(82,215);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],32), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_10.setTransform(82,215);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],33), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_11.setTransform(82,215);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],35), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_12.setTransform(82,215);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],36), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_13.setTransform(82,215);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164,430);


(lib.Symbol170 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],20), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape.setTransform(82,215);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164,430);


(lib.Symbol168 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_"],14), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape.setTransform(82,215);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],4), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_1.setTransform(82,215);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],5), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_2.setTransform(82,215);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],6), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_3.setTransform(82,215);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],7), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_4.setTransform(82,215);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],8), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_5.setTransform(82,215);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],9), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_6.setTransform(82,215);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],10), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_7.setTransform(82,215);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],11), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_8.setTransform(82,215);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],12), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_9.setTransform(82,215);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],13), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_10.setTransform(82,215);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],14), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_11.setTransform(82,215);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],16), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_12.setTransform(82,215);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],17), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_13.setTransform(82,215);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],18), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_14.setTransform(82,215);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],19), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_15.setTransform(82,215);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164,430);


(lib.Symbol135 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],60), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape.setTransform(82,215);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_1.setTransform(82,215);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_"],1), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_2.setTransform(82,215);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_"],2), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_3.setTransform(82,215);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_"],3), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_4.setTransform(82,215);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_"],4), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_5.setTransform(82,215);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],0), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_6.setTransform(82,215);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],1), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_7.setTransform(82,215);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_"],5), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_8.setTransform(82,215);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_"],6), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_9.setTransform(82,215);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],2), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_10.setTransform(82,215);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_"],7), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_11.setTransform(82,215);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_"],8), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_12.setTransform(82,215);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_"],9), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_13.setTransform(82,215);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_"],10), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_14.setTransform(82,215);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_"],11), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_15.setTransform(82,215);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_"],12), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_16.setTransform(82,215);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_"],13), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_17.setTransform(82,215);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_17}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164,430);


(lib.Symbol98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],3), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape.setTransform(82,215);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_"],15), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_1.setTransform(82,215);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],15), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_2.setTransform(82,215);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],23), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_3.setTransform(82,215);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],34), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_4.setTransform(82,215);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],37), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_5.setTransform(82,215);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],38), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_6.setTransform(82,215);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],39), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_7.setTransform(82,215);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],40), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_8.setTransform(82,215);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],41), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_9.setTransform(82,215);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],42), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_10.setTransform(82,215);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],43), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_11.setTransform(82,215);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],44), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_12.setTransform(82,215);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],45), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_13.setTransform(82,215);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],46), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_14.setTransform(82,215);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_2"],47), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_15.setTransform(82,215);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],32), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_16.setTransform(82,215);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],33), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_17.setTransform(82,215);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],34), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_18.setTransform(82,215);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],36), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_19.setTransform(82,215);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],37), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_20.setTransform(82,215);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],38), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_21.setTransform(82,215);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],39), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_22.setTransform(82,215);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],40), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_23.setTransform(82,215);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],41), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_24.setTransform(82,215);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],42), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_25.setTransform(82,215);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],43), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_26.setTransform(82,215);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],44), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_27.setTransform(82,215);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],45), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_28.setTransform(82,215);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],46), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_29.setTransform(82,215);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],47), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_30.setTransform(82,215);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],48), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_31.setTransform(82,215);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],49), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_32.setTransform(82,215);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],50), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_33.setTransform(82,215);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],51), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_34.setTransform(82,215);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],52), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_35.setTransform(82,215);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],53), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_36.setTransform(82,215);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],54), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_37.setTransform(82,215);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],55), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_38.setTransform(82,215);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],56), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_39.setTransform(82,215);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],57), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_40.setTransform(82,215);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],58), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_41.setTransform(82,215);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],59), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape_42.setTransform(82,215);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_20}]},2).to({state:[{t:this.shape_21}]},2).to({state:[{t:this.shape_22}]},2).to({state:[{t:this.shape_23}]},2).to({state:[{t:this.shape_24}]},2).to({state:[{t:this.shape_25}]},2).to({state:[{t:this.shape_26}]},2).to({state:[{t:this.shape_27}]},2).to({state:[{t:this.shape_28}]},2).to({state:[{t:this.shape_29}]},2).to({state:[{t:this.shape_30}]},2).to({state:[{t:this.shape_31}]},2).to({state:[{t:this.shape_32}]},2).to({state:[{t:this.shape_33}]},2).to({state:[{t:this.shape_34}]},2).to({state:[{t:this.shape_35}]},2).to({state:[{t:this.shape_36}]},2).to({state:[{t:this.shape_37}]},2).to({state:[{t:this.shape_38}]},2).to({state:[{t:this.shape_39}]},2).to({state:[{t:this.shape_40}]},2).to({state:[{t:this.shape_41}]},2).to({state:[{t:this.shape_42}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164,430);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_3"],35), null, new cjs.Matrix2D(1,0,0,1,-82,-215)).s().p("EgMzAhmMAAAhDLIZmAAMAAABDLg");
	this.shape.setTransform(82,215);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164,430);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_"],16), null, new cjs.Matrix2D(1,0,0,1,-320,-242.5)).s().p("Egx/Al5MAAAhLxMBj+AAAMAAABLxg");
	this.shape.setTransform(320,242.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,485);


(lib.anim_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bitmap1();
	this.instance.setTransform(-84,-79);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],83), null, new cjs.Matrix2D(1,0,0,1,-84,-79)).s().p("AtHMWIAA4rIaPAAIAAYrg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],103), null, new cjs.Matrix2D(1,0,0,1,-84,-79)).s().p("AtHMWIAA4rIaPAAIAAYrg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],111), null, new cjs.Matrix2D(1,0,0,1,-84,-79)).s().p("AtHMWIAA4rIaPAAIAAYrg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],135), null, new cjs.Matrix2D(1,0,0,1,-84,-79)).s().p("AtHMWIAA4rIaPAAIAAYrg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],50), null, new cjs.Matrix2D(1,0,0,1,-84,-79)).s().p("AtHMWIAA4rIaPAAIAAYrg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],51), null, new cjs.Matrix2D(1,0,0,1,-84,-79)).s().p("AtHMWIAA4rIaPAAIAAYrg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],52), null, new cjs.Matrix2D(1,0,0,1,-84,-79)).s().p("AtHMWIAA4rIaPAAIAAYrg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],53), null, new cjs.Matrix2D(1,0,0,1,-84,-79)).s().p("AtHMWIAA4rIaPAAIAAYrg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],54), null, new cjs.Matrix2D(1,0,0,1,-84,-79)).s().p("AtHMWIAA4rIaPAAIAAYrg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],57), null, new cjs.Matrix2D(1,0,0,1,-84,-79)).s().p("AtHMWIAA4rIaPAAIAAYrg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],67), null, new cjs.Matrix2D(1,0,0,1,-84,-79)).s().p("AtHMWIAA4rIaPAAIAAYrg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],69), null, new cjs.Matrix2D(1,0,0,1,-84,-79)).s().p("AtHMWIAA4rIaPAAIAAYrg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],70), null, new cjs.Matrix2D(1,0,0,1,-84,-79)).s().p("AtHMWIAA4rIaPAAIAAYrg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],75), null, new cjs.Matrix2D(1,0,0,1,-84,-79)).s().p("AtHMWIAA4rIaPAAIAAYrg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],89), null, new cjs.Matrix2D(1,0,0,1,-84,-79)).s().p("AtHMWIAA4rIaPAAIAAYrg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],94), null, new cjs.Matrix2D(1,0,0,1,-84,-79)).s().p("AtHMWIAA4rIaPAAIAAYrg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],95), null, new cjs.Matrix2D(1,0,0,1,-84,-79)).s().p("AtHMWIAA4rIaPAAIAAYrg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],96), null, new cjs.Matrix2D(1,0,0,1,-84,-79)).s().p("AtHMWIAA4rIaPAAIAAYrg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],97), null, new cjs.Matrix2D(1,0,0,1,-84,-79)).s().p("AtHMWIAA4rIaPAAIAAYrg");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],98), null, new cjs.Matrix2D(1,0,0,1,-84,-79)).s().p("AtHMWIAA4rIaPAAIAAYrg");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],99), null, new cjs.Matrix2D(1,0,0,1,-84,-79)).s().p("AtHMWIAA4rIaPAAIAAYrg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],100), null, new cjs.Matrix2D(1,0,0,1,-84,-79)).s().p("AtHMWIAA4rIaPAAIAAYrg");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],101), null, new cjs.Matrix2D(1,0,0,1,-84,-79)).s().p("AtHMWIAA4rIaPAAIAAYrg");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],102), null, new cjs.Matrix2D(1,0,0,1,-84,-79)).s().p("AtHMWIAA4rIaPAAIAAYrg");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["gnome_atlas_4"],104), null, new cjs.Matrix2D(1,0,0,1,-84,-79)).s().p("AtGMWIAA4rIaNAAIAAYrg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},88).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_20}]},2).to({state:[{t:this.shape_21}]},2).to({state:[{t:this.shape_22}]},2).to({state:[{t:this.shape_23}]},2).to({state:[{t:this.shape_24}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-79,168,158);


(lib.Symbol779 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:0,play:80});

	// Layer 2
	this.instance = new lib.Symbol772("synched",0);

	this.instance_1 = new lib.Symbol774("synched",0);

	this.instance_2 = new lib.Symbol776("synched",0);

	this.instance_3 = new lib.Symbol778("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},20).to({state:[{t:this.instance_2}]},20).to({state:[{t:this.instance_3}]},20).to({state:[{t:this.instance}]},20).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_3}]},8).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128,48);


(lib.graphics_flamcSlotBackgroundGears_component_59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.video = new lib.Symbol769();

	this.timeline.addTween(cjs.Tween.get(this.video).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96,32);


(lib.Symbol316d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.msg_txt = new cjs.Text("", "18px 'Impact'", "#FFFF10");
	this.msg_txt.name = "msg_txt";
	this.msg_txt.textAlign = "center";
	this.msg_txt.lineHeight = 24;
	this.msg_txt.lineWidth = 397;
	this.msg_txt.setTransform(229.8,11.3,1,1.12);

	this.timeline.addTween(cjs.Tween.get(this.msg_txt).wait(1));

	// Layer 2
	this.double_to = new lib.Symbol312s();
	this.double_to.setTransform(110.3,-3.8);

	this.timeline.addTween(cjs.Tween.get(this.double_to).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.5,1.2,400.6,40.6);


(lib.anim_sbonus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 7
	this.prize_txt = new cjs.Text("111", "30px 'Arial'", "#E6FF81");
	this.prize_txt.name = "prize_txt";
	this.prize_txt.textAlign = "center";
	this.prize_txt.lineHeight = 35;
	this.prize_txt.lineWidth = 100;
	this.prize_txt.setTransform(163.3,47.3);

	this.timeline.addTween(cjs.Tween.get(this.prize_txt).wait(1));

	// superlose1
	this.superlose1 = new lib.Symbol306();

	this.timeline.addTween(cjs.Tween.get(this.superlose1).wait(1));

	// superwin1
	this.superwin1 = new lib.Symbol289();

	this.timeline.addTween(cjs.Tween.get(this.superwin1).wait(1));

	// superopen1
	this.superopen1 = new lib.Symbol256();

	this.timeline.addTween(cjs.Tween.get(this.superopen1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,248,201);


(lib.superbonus_scene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1CAA0").s().p("AAIBDIgQg9IAAA9IgdAAIAAiFIAdAAIARA9IAAg9IAdAAIAACFg");
	this.shape.setTransform(515.3,23.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1CAA0").s().p("AgQBDIAAiFIAhAAIAACFg");
	this.shape_1.setTransform(508.2,23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D1CAA0").s().p("AAKBDQgGgfgEgmIgJBFIgrAAIgQiFIAiAAIAEAvIAEAsQABgiAIg5IAiAAIAEAtIAEAxQADgvAHgvIAiAAIgQCFg");
	this.shape_2.setTransform(498.8,23.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1CAA0").s().p("AgbBDIAAiFIAhAAIAABqIAWAAIAAAbg");
	this.shape_3.setTransform(486,23.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D1CAA0").s().p("AAIBDIgCgYIgKAAIgDAYIgkAAIASiFIAxAAIAUCFgAgFATIAKAAQgDgVgCgiQgEAlgBASg");
	this.shape_4.setTransform(478.1,23.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D1CAA0").s().p("AgQBDIAAhqIgVAAIAAgbIBLAAIAAAbIgVAAIAABqg");
	this.shape_5.setTransform(470.6,23.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D1CAA0").s().p("AgSBCQgIgDgGgIQgFgHgBgIIgBgdIAAgVIABgdQABgIAFgIQAFgGAIgEQAJgEAKABQAKgBAJAEQAJAEAEAGQAGAIABAIIABAdIAAAVIgBAcQgBAJgFAHQgFAHgIAEQgJADgLAAQgJABgJgEgAgCgsQgCACAAALIAAA9QAAALABADQABACACABQADAAABgEQABgCAAgMIAAg8IgBgMQgBgDgDAAQAAAAAAAAQAAAAgBABQAAAAgBAAQAAABAAAAg");
	this.shape_6.setTransform(462,23.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D1CAA0").s().p("AgQBDIAAhqIgVAAIAAgbIBLAAIAAAbIgVAAIAABqg");
	this.shape_7.setTransform(453.4,23.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D1CAA0").s().p("AAIBDIgRg9IAAA9IgdAAIAAiFIAdAAIASA9IAAg9IAeAAIAACFg");
	this.shape_8.setTransform(305.9,23.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D1CAA0").s().p("AgQBDIAAiFIAhAAIAACFg");
	this.shape_9.setTransform(298.8,23.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D1CAA0").s().p("AAKBDQgGgfgEgmIgJBFIgrAAIgQiFIAiAAIAEAvIAEAsQABgiAIg5IAiAAIAEAtIAEAxQADgvAHgvIAiAAIgQCFg");
	this.shape_10.setTransform(289.4,23.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D1CAA0").s().p("AgdBDIAAiFIA4AAIAAAbIgXAAIAAAaIAWAAIAAAXIgWAAIAAAeIAaAAIAAAbg");
	this.shape_11.setTransform(276.2,23.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D1CAA0").s().p("AgfBDIAAgUIAbhWIgYAAIAAgbIA8AAIAAAbIgaBPIAaAAIAAAbg");
	this.shape_12.setTransform(269,23.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D1CAA0").s().p("AgQBDIAAiFIAhAAIAACFg");
	this.shape_13.setTransform(263.3,23.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D1CAA0").s().p("AAGBDIAAgtQAAgLgBgCQgDgDgEAAIAAA9IgjAAIAAiFIAYAAQAXAAAIACQAKACAFAIQAGAIAAARQgBAQgEAFQgDAGgMABQALABADADQAEAFAAADQACAEAAAQIAAAkgAgCgNQAEAAACgBQACgCAAgJIAAgHQAAgHgCgCQgDgCgDAAg");
	this.shape_14.setTransform(256.3,23.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D1CAA0").s().p("AgkBDIAAiFIAjAAQAMAAAIADQAIACADAEQAEAEACAGQABAGAAANIAAAMQAAANgDADQgCAGgHADQgHAEgMAAIgHAAIAAA2gAgBgIIABAAQAEAAACgDQACgCAAgIIAAgLQAAgGgCgDQgDgCgEAAg");
	this.shape_15.setTransform(247.6,23.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D1CAA0").s().p("AgQBDIAAhqIgVAAIAAgbIBLAAIAAAbIgVAAIAABqg");
	this.shape_16.setTransform(92.6,23.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D1CAA0").s().p("AgdBDIAAiFIA4AAIAAAbIgXAAIAAAaIAWAAIAAAXIgWAAIAAAeIAaAAIAAAbg");
	this.shape_17.setTransform(85.6,23.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D1CAA0").s().p("AgnBDIAAiFIAjAAQAOAAAJADQAIADAFAHQAGAIAAASQAAALgEAFQgEAFgLACQAMADAFAEQAEAHAAANIAAAMQAAAOgDAGQgDAHgHACQgHADgUAAgAgEAsQAFAAACgDQACgCAAgIIAAgMQAAgJgCgCQgCgCgFAAgAgEgNIADAAQADAAACgCQABgDAAgMQAAgGgBgDQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBgBgEAAg");
	this.shape_18.setTransform(77.2,23.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D1CAA0").s().p("AgaBDIAAiFIAhAAIAABqIAUAAIAAAbg");
	this.shape_19.setTransform(66.5,23.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D1CAA0").s().p("AAIBDIgCgYIgKAAIgDAYIgkAAIASiFIAxAAIAUCFgAgFATIAKAAQgDgVgCgiQgEAlgBASg");
	this.shape_20.setTransform(58.7,23.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D1CAA0").s().p("AgQBDIAAhqIgVAAIAAgbIBLAAIAAAbIgVAAIAABqg");
	this.shape_21.setTransform(51.1,23.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D1CAA0").s().p("AgSBCQgJgDgFgIQgFgHgBgIIgBgdIAAgVIABgdQABgIAFgIQAFgGAJgEQAIgEAKABQAKgBAJAEQAJAEAEAGQAGAIABAIIABAdIAAAVIgBAcQgBAJgFAHQgFAHgJAEQgIADgLAAQgJABgJgEgAgDgsQgBACAAALIAAA9QAAALABADQABACACABQADAAABgEQABgCAAgMIAAg8IgBgMQgBgDgDAAQAAAAAAAAQAAAAgBABQAAAAgBAAQAAABgBAAg");
	this.shape_22.setTransform(42.6,23.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D1CAA0").s().p("AgQBDIAAhqIgVAAIAAgbIBLAAIAAAbIgVAAIAABqg");
	this.shape_23.setTransform(34,23.4);

	this.bet_txt = new cjs.Text("111", "17px 'Arial'", "#D1CA9F");
	this.bet_txt.name = "bet_txt";
	this.bet_txt.textAlign = "right";
	this.bet_txt.lineHeight = 19;
	this.bet_txt.lineWidth = 100;
	this.bet_txt.setTransform(184.6,11.5);

	this.win_txt = new cjs.Text("111", "17px 'Arial'", "#D1CA9F");
	this.win_txt.name = "win_txt";
	this.win_txt.textAlign = "right";
	this.win_txt.lineHeight = 19;
	this.win_txt.lineWidth = 100;
	this.win_txt.setTransform(403,11.5);

	this.credit_txt = new cjs.Text("45", "17px 'Arial'", "#D1CA9F");
	this.credit_txt.name = "credit_txt";
	this.credit_txt.textAlign = "right";
	this.credit_txt.lineHeight = 19;
	this.credit_txt.lineWidth = 100;
	this.credit_txt.setTransform(615,11);

	this.text6 = new cjs.Text("SELECT THE GOLDEN CHEST", "28px 'Arial'", "#CCFF00");
	this.text6.name = "text6";
	this.text6.textAlign = "center";
	this.text6.lineHeight = 33;
	this.text6.lineWidth = 636;
	this.text6.setTransform(318,94);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text6},{t:this.credit_txt},{t:this.win_txt},{t:this.bet_txt},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 14
	this.SuperBonus = new lib.Symbol214();

	this.timeline.addTween(cjs.Tween.get(this.SuperBonus).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,485);


(lib.Symbol422 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.msg_txt = new cjs.Text("TAKE OR RISK", "bold 18px 'Times New Roman'", "#FFFF00");
	this.msg_txt.name = "msg_txt";
	this.msg_txt.textAlign = "center";
	this.msg_txt.lineHeight = 20;
	this.msg_txt.lineWidth = 392;
	this.msg_txt.setTransform(1627.3,-32);

	this.timeline.addTween(cjs.Tween.get(this.msg_txt).wait(1));

	// anim
	this.anim = new lib.Symbol407();
	this.anim.setTransform(1541.8,-45.6);

	this.timeline.addTween(cjs.Tween.get(this.anim).wait(1));

	// bounds
	this.bounds = new lib.bounds_infopanel_mc();
	this.bounds.setTransform(1613.7,-20.1,1,0.728,0,0,0,90,29.9);

	this.timeline.addTween(cjs.Tween.get(this.bounds).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1431.1,-41.9,396.4,43.7);


(lib.Symbol227 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{_0:0,_1:4,_2:8,_3:12,_4:16,_5:20,_6:24,_7:28,_8:32,_9:36,_10:40,_11:44,_12:48,_13:52,_14:56,_15:60,_16:64,_17:68,_18:72,_19:76,_20:80});

	// Layer 2
	this.instance = new lib.Symbol210("synched",0);

	this.instance_1 = new lib.Symbol212("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},40).to({state:[{t:this.instance_1}]},40).wait(4));

	// Layer 3
	this.instance_2 = new lib.Symbol208("synched",0);
	this.instance_2.setTransform(16,0);

	this.instance_3 = new lib.Symbol210("synched",0);
	this.instance_3.setTransform(16,0);

	this.instance_4 = new lib.Symbol212("synched",0);
	this.instance_4.setTransform(16,0);

	this.instance_5 = new lib.Symbol214_1("synched",0);
	this.instance_5.setTransform(16,0);

	this.instance_6 = new lib.Symbol216("synched",0);
	this.instance_6.setTransform(16,0);

	this.instance_7 = new lib.Symbol218("synched",0);
	this.instance_7.setTransform(16,0);

	this.instance_8 = new lib.Symbol220("synched",0);
	this.instance_8.setTransform(16,0);

	this.instance_9 = new lib.Symbol222("synched",0);
	this.instance_9.setTransform(16,0);

	this.instance_10 = new lib.Symbol224("synched",0);
	this.instance_10.setTransform(16,0);

	this.instance_11 = new lib.Symbol226("synched",0);
	this.instance_11.setTransform(16,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_2}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16,0,16,32);


(lib.Symbol207 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol206("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,278,46,57);


(lib.Symbol171 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol170("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164,430);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164,430);


(lib.bonus_scene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1CAA0").s().p("AAIBDIgQg9IAAA9IgdAAIAAiFIAdAAIARA9IAAg9IAdAAIAACFg");
	this.shape.setTransform(515.3,23.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1CAA0").s().p("AgQBDIAAiFIAhAAIAACFg");
	this.shape_1.setTransform(508.2,23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D1CAA0").s().p("AAKBDQgGgfgEgmIgJBFIgrAAIgQiFIAiAAIAEAvIAEAsQABgiAIg5IAiAAIAEAtIAEAxQADgvAHgvIAiAAIgQCFg");
	this.shape_2.setTransform(498.8,23.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1CAA0").s().p("AgbBDIAAiFIAhAAIAABqIAWAAIAAAbg");
	this.shape_3.setTransform(486,23.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D1CAA0").s().p("AAIBDIgCgYIgKAAIgDAYIgkAAIASiFIAxAAIAUCFgAgFATIAKAAQgDgVgCgiQgEAlgBASg");
	this.shape_4.setTransform(478.1,23.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D1CAA0").s().p("AgQBDIAAhqIgVAAIAAgbIBLAAIAAAbIgVAAIAABqg");
	this.shape_5.setTransform(470.6,23.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D1CAA0").s().p("AgSBCQgIgDgGgIQgFgHgBgIIgBgdIAAgVIABgdQABgIAFgIQAFgGAIgEQAJgEAKABQAKgBAJAEQAJAEAEAGQAGAIABAIIABAdIAAAVIgBAcQgBAJgFAHQgFAHgIAEQgJADgLAAQgJABgJgEgAgCgsQgCACAAALIAAA9QAAALABADQABACACABQADAAABgEQABgCAAgMIAAg8IgBgMQgBgDgDAAQAAAAAAAAQAAAAgBABQAAAAgBAAQAAABAAAAg");
	this.shape_6.setTransform(462,23.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D1CAA0").s().p("AgQBDIAAhqIgVAAIAAgbIBLAAIAAAbIgVAAIAABqg");
	this.shape_7.setTransform(453.4,23.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D1CAA0").s().p("AAIBDIgRg9IAAA9IgdAAIAAiFIAdAAIASA9IAAg9IAeAAIAACFg");
	this.shape_8.setTransform(305.9,23.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D1CAA0").s().p("AgQBDIAAiFIAhAAIAACFg");
	this.shape_9.setTransform(298.8,23.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D1CAA0").s().p("AAKBDQgGgfgEgmIgJBFIgrAAIgQiFIAiAAIAEAvIAEAsQABgiAIg5IAiAAIAEAtIAEAxQADgvAHgvIAiAAIgQCFg");
	this.shape_10.setTransform(289.4,23.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D1CAA0").s().p("AgdBDIAAiFIA4AAIAAAbIgXAAIAAAaIAWAAIAAAXIgWAAIAAAeIAaAAIAAAbg");
	this.shape_11.setTransform(276.2,23.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D1CAA0").s().p("AgfBDIAAgUIAbhWIgYAAIAAgbIA8AAIAAAbIgaBPIAaAAIAAAbg");
	this.shape_12.setTransform(269,23.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D1CAA0").s().p("AgQBDIAAiFIAhAAIAACFg");
	this.shape_13.setTransform(263.3,23.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D1CAA0").s().p("AAGBDIAAgtQAAgLgBgCQgDgDgEAAIAAA9IgjAAIAAiFIAYAAQAXAAAIACQAKACAFAIQAGAIAAARQgBAQgEAFQgDAGgMABQALABADADQAEAFAAADQACAEAAAQIAAAkgAgCgNQAEAAACgBQACgCAAgJIAAgHQAAgHgCgCQgDgCgDAAg");
	this.shape_14.setTransform(256.3,23.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D1CAA0").s().p("AgkBDIAAiFIAjAAQAMAAAIADQAIACADAEQAEAEACAGQABAGAAANIAAAMQAAANgDADQgCAGgHADQgHAEgMAAIgHAAIAAA2gAgBgIIABAAQAEAAACgDQACgCAAgIIAAgLQAAgGgCgDQgDgCgEAAg");
	this.shape_15.setTransform(247.6,23.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D1CAA0").s().p("AgQBDIAAhqIgVAAIAAgbIBLAAIAAAbIgVAAIAABqg");
	this.shape_16.setTransform(92.6,23.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D1CAA0").s().p("AgdBDIAAiFIA4AAIAAAbIgXAAIAAAaIAWAAIAAAXIgWAAIAAAeIAaAAIAAAbg");
	this.shape_17.setTransform(85.6,23.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D1CAA0").s().p("AgnBDIAAiFIAjAAQAOAAAJADQAIADAFAHQAGAIAAASQAAALgEAFQgEAFgLACQAMADAFAEQAEAHAAANIAAAMQAAAOgDAGQgDAHgHACQgHADgUAAgAgEAsQAFAAACgDQACgCAAgIIAAgMQAAgJgCgCQgCgCgFAAgAgEgNIADAAQADAAACgCQABgDAAgMQAAgGgBgDQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBgBgEAAg");
	this.shape_18.setTransform(77.2,23.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D1CAA0").s().p("AgaBDIAAiFIAhAAIAABqIAUAAIAAAbg");
	this.shape_19.setTransform(66.5,23.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D1CAA0").s().p("AAIBDIgCgYIgKAAIgDAYIgkAAIASiFIAxAAIAUCFgAgFATIAKAAQgDgVgCgiQgEAlgBASg");
	this.shape_20.setTransform(58.7,23.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D1CAA0").s().p("AgQBDIAAhqIgVAAIAAgbIBLAAIAAAbIgVAAIAABqg");
	this.shape_21.setTransform(51.1,23.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D1CAA0").s().p("AgSBCQgJgDgFgIQgFgHgBgIIgBgdIAAgVIABgdQABgIAFgIQAFgGAJgEQAIgEAKABQAKgBAJAEQAJAEAEAGQAGAIABAIIABAdIAAAVIgBAcQgBAJgFAHQgFAHgJAEQgIADgLAAQgJABgJgEgAgDgsQgBACAAALIAAA9QAAALABADQABACACABQADAAABgEQABgCAAgMIAAg8IgBgMQgBgDgDAAQAAAAAAAAQAAAAgBABQAAAAgBAAQAAABgBAAg");
	this.shape_22.setTransform(42.6,23.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D1CAA0").s().p("AgQBDIAAhqIgVAAIAAgbIBLAAIAAAbIgVAAIAABqg");
	this.shape_23.setTransform(34,23.4);

	this.bet_txt = new cjs.Text("111", "17px 'Arial'", "#D1CA9F");
	this.bet_txt.name = "bet_txt";
	this.bet_txt.textAlign = "right";
	this.bet_txt.lineHeight = 19;
	this.bet_txt.lineWidth = 100;
	this.bet_txt.setTransform(184.6,11.5);

	this.win_txt = new cjs.Text("111", "17px 'Arial'", "#D1CA9F");
	this.win_txt.name = "win_txt";
	this.win_txt.textAlign = "right";
	this.win_txt.lineHeight = 19;
	this.win_txt.lineWidth = 100;
	this.win_txt.setTransform(403,11.5);

	this.credit_txt = new cjs.Text("45", "17px 'Arial'", "#D1CA9F");
	this.credit_txt.name = "credit_txt";
	this.credit_txt.textAlign = "right";
	this.credit_txt.lineHeight = 19;
	this.credit_txt.lineWidth = 100;
	this.credit_txt.setTransform(615,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.credit_txt},{t:this.win_txt},{t:this.bet_txt},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 36
	this.BG = new lib.Symbol4();

	this.timeline.addTween(cjs.Tween.get(this.BG).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,485);


(lib.graphics_flamcSlotBackgroundFurnace_component_61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.video = new lib.Symbol779();

	this.timeline.addTween(cjs.Tween.get(this.video).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128,48);


(lib.main_scene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.bet2_txt = new cjs.Text("11", "bold 14px 'Times New Roman'", "#FFFF00");
	this.bet2_txt.name = "bet2_txt";
	this.bet2_txt.textAlign = "center";
	this.bet2_txt.lineHeight = 16;
	this.bet2_txt.lineWidth = 42;
	this.bet2_txt.setTransform(606.2,331.7);

	this.bet1_txt = new cjs.Text("11", "bold 14px 'Times New Roman'", "#FFFF00");
	this.bet1_txt.name = "bet1_txt";
	this.bet1_txt.textAlign = "center";
	this.bet1_txt.lineHeight = 16;
	this.bet1_txt.lineWidth = 42;
	this.bet1_txt.setTransform(27,331.7);

	this.mInfo = new lib.Symbol422();
	this.mInfo.setTransform(-986.3,366.7,0.8,0.8);

	this.shield_mc = new lib.shield_mc();
	this.shield_mc.setTransform(488.7,465.7,1,1,0,0,0,75.5,13.5);

	this.lines_temn = new lib.lines_temn();
	this.lines_temn.setTransform(316.9,180.6,1,1,0,0,0,316.7,148.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1CAA0").s().p("AgQBDIAAhqIgVAAIAAgbIBLAAIAAAbIgVAAIAABqg");
	this.shape.setTransform(500.3,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1CAA0").s().p("AgQBDIAAiFIAhAAIAACFg");
	this.shape_1.setTransform(494,15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D1CAA0").s().p("AgnBDIAAiFIAaAAQAXAAAKADQAIACAFAFQAFAGABAGQABAHAAATIAAAtQAAASgCAGQgCAGgEAEQgEADgGABQgGACgNAAgAgEAsQAGAAABgDQACgDAAgOIAAgyIAAgMQgBAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgCgCgEAAg");
	this.shape_2.setTransform(486.9,15.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1CAA0").s().p("AgdBDIAAiFIA4AAIAAAbIgXAAIAAAaIAWAAIAAAXIgWAAIAAAeIAaAAIAAAbg");
	this.shape_3.setTransform(478.8,15.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D1CAA0").s().p("AAGBDIAAgtQAAgLgCgCQgBgDgGAAIAAA9IgjAAIAAiFIAZAAQAXAAAJACQAJACAFAIQAFAIAAARQAAAQgDAFQgFAGgLABQALABADADQAEAFAAADQABAEAAAQIAAAkgAgDgNQAFAAABgBQADgCAAgJIAAgHQAAgHgCgCQgCgCgFAAg");
	this.shape_4.setTransform(470.5,15.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D1CAA0").s().p("AgXBAQgKgGgEgJQgDgLAAgTIAAgmIABgVQABgHAFgIQAFgGAJgEQAJgEAKAAQAOABAKAFQALAGADAJQADAJAAATIAAAMIgjAAIAAgWQAAgLgBgDQgBgCgEAAQgDAAgBADQgBADAAALIAAA8QAAAKABACQABADADAAQADAAACgDQABgDAAgKIAAgRIAjAAIAAAFQAAAUgDAKQgDAIgKAHQgKAGgPAAQgNAAgKgFg");
	this.shape_5.setTransform(461.2,16);

	this.info_stat_txt = new cjs.Text("LINES", "17px 'Impact'", "#D1CAA0");
	this.info_stat_txt.name = "info_stat_txt";
	this.info_stat_txt.lineHeight = 21;
	this.info_stat_txt.lineWidth = 100;
	this.info_stat_txt.setTransform(241.1,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D1CAA0").s().p("AgQBDIAAhqIgVAAIAAgbIBLAAIAAAbIgVAAIAABqg");
	this.shape_6.setTransform(92.6,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D1CAA0").s().p("AgdBDIAAiFIA4AAIAAAbIgXAAIAAAaIAWAAIAAAXIgWAAIAAAeIAaAAIAAAbg");
	this.shape_7.setTransform(85.6,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D1CAA0").s().p("AgnBDIAAiFIAjAAQAOAAAJADQAIADAFAHQAGAIAAASQAAALgEAFQgEAFgLACQAMADAFAEQAEAHAAANIAAAMQAAAOgDAGQgDAHgHACQgHADgUAAgAgEAsQAFAAACgDQACgCAAgIIAAgMQAAgJgCgCQgCgCgFAAgAgEgNIADAAQADAAACgCQABgDAAgMQAAgGgBgDQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBgBgEAAg");
	this.shape_8.setTransform(77.2,15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D1CAA0").s().p("AgaBDIAAiFIAhAAIAABqIAUAAIAAAbg");
	this.shape_9.setTransform(66.5,15.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D1CAA0").s().p("AAIBDIgCgYIgKAAIgDAYIgkAAIASiFIAxAAIAUCFgAgFATIAKAAQgDgVgCgiQgEAlgBASg");
	this.shape_10.setTransform(58.7,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D1CAA0").s().p("AgQBDIAAhqIgVAAIAAgbIBLAAIAAAbIgVAAIAABqg");
	this.shape_11.setTransform(51.1,15.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D1CAA0").s().p("AgSBCQgJgEgFgHQgFgHgBgIIgBgdIAAgVIABgdQABgIAFgIQAFgGAJgEQAIgDAKAAQAKAAAJADQAJAEAEAGQAGAIABAIIABAdIAAAVIgBAcQgBAJgFAHQgFAHgJADQgIAEgLAAQgJAAgJgDgAgDgsQgBACAAAKIAAA9QAAAMABADQABACACABQADAAABgDQABgEAAgLIAAg9IgBgLQgBgDgDAAQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBABg");
	this.shape_12.setTransform(42.6,15.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D1CAA0").s().p("AgQBDIAAhqIgVAAIAAgbIBLAAIAAAbIgVAAIAABqg");
	this.shape_13.setTransform(34,15.4);

	this.bet_txt = new cjs.Text("111", "17px 'Arial'", "#D1CA9F");
	this.bet_txt.name = "bet_txt";
	this.bet_txt.textAlign = "right";
	this.bet_txt.lineHeight = 19;
	this.bet_txt.lineWidth = 100;
	this.bet_txt.setTransform(184.6,4.5);

	this.line_txt = new cjs.Text("111", "17px 'Arial'", "#D1CA9F");
	this.line_txt.name = "line_txt";
	this.line_txt.textAlign = "right";
	this.line_txt.lineHeight = 19;
	this.line_txt.lineWidth = 100;
	this.line_txt.setTransform(403,4.5);

	this.credit_txt = new cjs.Text("45", "17px 'Arial'", "#D1CA9F");
	this.credit_txt.name = "credit_txt";
	this.credit_txt.textAlign = "right";
	this.credit_txt.lineHeight = 19;
	this.credit_txt.lineWidth = 100;
	this.credit_txt.setTransform(622,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.credit_txt},{t:this.line_txt},{t:this.bet_txt},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.info_stat_txt},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.lines_temn},{t:this.shield_mc},{t:this.mInfo},{t:this.bet1_txt},{t:this.bet2_txt}]}).wait(1));

	// Слой 3
	this.anim_main = new lib.anim_main();
	this.anim_main.setTransform(143,402,1,1,0,0,0,43,19.5);

	this.timeline.addTween(cjs.Tween.get(this.anim_main).wait(1));

	// Layer 2
	this.bounds = new lib.bounds_infopanel_mc();
	this.bounds.setTransform(289.9,350.6,0.867,0.528,0,0,0,90,30.1);
	this.bounds.alpha = 0.73;

	this.timeline.addTween(cjs.Tween.get(this.bounds).wait(1));

	// Layer 3
	this.instance = new lib.graphics_flamcSlotBackgroundFurnace_component_61();
	this.instance.setTransform(224,368);

	this.instance_1 = new lib.graphics_flamcSlotBackgroundGears_component_59();
	this.instance_1.setTransform(384,384);

	this.instance_2 = new lib.graphics_flamcSlotBackgroundMouse_component_57();
	this.instance_2.setTransform(400,320);

	this.instance_3 = new lib.Symbol243("synched",0);
	this.instance_3.setTransform(-43,-15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,641,480);


(lib.gamble_scene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.step_txt = new cjs.Text("1", "30px 'Arial'", "#FFFFFF");
	this.step_txt.name = "step_txt";
	this.step_txt.lineHeight = 36;
	this.step_txt.lineWidth = 57;
	this.step_txt.setTransform(814.6,48,1.003,1.001);

	this.pick_mc = new lib.pick_mc();
	this.pick_mc.setTransform(537.5,274.3,1,1,0,0,0,41.5,18);

	this.card4 = new lib.card();
	this.card4.setTransform(511.5,99.9,1,1,0,0,0,8,6.5);

	this.card3 = new lib.card();
	this.card3.setTransform(397.6,99.9,1,1,0,0,0,8,6.5);

	this.card2 = new lib.card();
	this.card2.setTransform(283.8,99.9,1,1,0,0,0,8,6.5);

	this.card1 = new lib.card();
	this.card1.setTransform(170,99.9,1,1,0,0,0,8,6.5);

	this.dealer_card = new lib.card();
	this.dealer_card.setTransform(37,99.9,1,1,0,0,0,8,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dealer_card},{t:this.card1},{t:this.card2},{t:this.card3},{t:this.card4},{t:this.pick_mc},{t:this.step_txt}]}).wait(1));

	// Слой 2
	this.anim_main = new lib.anim_main();
	this.anim_main.setTransform(143.5,401.5,1,1,0,0,0,43,19.5);

	this.timeline.addTween(cjs.Tween.get(this.anim_main).wait(1));

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1CAA0").s().p("AAIBDIgQg9IAAA9IgeAAIAAiFIAeAAIASA9IAAg9IAcAAIAACFg");
	this.shape.setTransform(521.3,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1CAA0").s().p("AgQBDIAAiFIAhAAIAACFg");
	this.shape_1.setTransform(514.2,15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D1CAA0").s().p("AAKBDQgGgfgEgmIgJBFIgrAAIgQiFIAiAAIAEAvIAEAsQABgiAIg5IAiAAIAEAtIAEAxQADgvAHgvIAiAAIgQCFg");
	this.shape_2.setTransform(504.8,15.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1CAA0").s().p("AgbBDIAAiFIAiAAIAABqIAUAAIAAAbg");
	this.shape_3.setTransform(492,15.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D1CAA0").s().p("AAIBDIgCgYIgKAAIgDAYIgkAAIASiFIAxAAIAUCFgAgFATIAKAAQgDgVgCgiQgEAlgBASg");
	this.shape_4.setTransform(484.1,15.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D1CAA0").s().p("AgQBDIAAhqIgVAAIAAgbIBLAAIAAAbIgVAAIAABqg");
	this.shape_5.setTransform(476.6,15.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D1CAA0").s().p("AgSBCQgIgEgGgHQgFgHgBgIIgBgdIAAgVIABgdQABgIAFgIQAFgGAJgEQAIgEAKAAQAKAAAJAEQAIAEAGAGQAFAIABAIIABAdIAAAVIgBAdQgBAIgFAHQgFAHgJAEQgIADgLAAQgKAAgIgDgAgCgsQgCADAAAKIAAA9QAAALABADQABACACAAQADAAABgDQABgDAAgMIAAg7IgBgNQgBgCgDAAQAAAAAAAAQAAAAgBAAQAAABgBAAQAAABAAAAg");
	this.shape_6.setTransform(468,16);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D1CAA0").s().p("AgQBDIAAhqIgVAAIAAgbIBLAAIAAAbIgVAAIAABqg");
	this.shape_7.setTransform(459.4,15.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D1CAA0").s().p("AAIBDIgRg9IAAA9IgdAAIAAiFIAdAAIASA9IAAg9IAeAAIAACFg");
	this.shape_8.setTransform(305.9,15.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D1CAA0").s().p("AgQBDIAAiFIAhAAIAACFg");
	this.shape_9.setTransform(298.8,15.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D1CAA0").s().p("AAKBDQgGgfgEgmIgJBFIgrAAIgQiFIAiAAIAEAvIAEAsQABgiAIg5IAiAAIAEAtIAEAxQADgvAHgvIAiAAIgQCFg");
	this.shape_10.setTransform(289.4,15.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D1CAA0").s().p("AgdBDIAAiFIA4AAIAAAbIgXAAIAAAaIAWAAIAAAXIgWAAIAAAeIAaAAIAAAbg");
	this.shape_11.setTransform(276.2,15.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D1CAA0").s().p("AgfBDIAAgUIAbhWIgYAAIAAgbIA8AAIAAAbIgaBPIAaAAIAAAbg");
	this.shape_12.setTransform(269,15.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D1CAA0").s().p("AgQBDIAAiFIAhAAIAACFg");
	this.shape_13.setTransform(263.3,15.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D1CAA0").s().p("AAGBDIAAgtQAAgLgBgCQgDgDgEAAIAAA9IgjAAIAAiFIAYAAQAXAAAIACQAKACAFAIQAGAIAAARQgBAQgEAFQgDAGgMABQALABADADQAEAFAAADQACAEAAAQIAAAkgAgCgNQAEAAACgBQACgCAAgJIAAgHQAAgHgCgCQgDgCgDAAg");
	this.shape_14.setTransform(256.3,15.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D1CAA0").s().p("AgkBDIAAiFIAjAAQAMAAAIADQAIACADAEQAEAEACAGQABAGAAANIAAAMQAAANgDADQgCAGgHADQgHAEgMAAIgHAAIAAA2gAgBgIIABAAQAEAAACgDQACgCAAgIIAAgLQAAgGgCgDQgDgCgEAAg");
	this.shape_15.setTransform(247.6,15.9);

	this.prize_txt = new cjs.Text("111", "17px 'Arial'", "#D1CA9F");
	this.prize_txt.name = "prize_txt";
	this.prize_txt.textAlign = "right";
	this.prize_txt.lineHeight = 19;
	this.prize_txt.lineWidth = 100;
	this.prize_txt.setTransform(403,4);

	this.win_txt = new cjs.Text("45", "17px 'Arial'", "#D1CA9F");
	this.win_txt.name = "win_txt";
	this.win_txt.textAlign = "right";
	this.win_txt.lineHeight = 19;
	this.win_txt.lineWidth = 100;
	this.win_txt.setTransform(621,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.win_txt},{t:this.prize_txt},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.step_mc = new lib.Symbol227();
	this.step_mc.setTransform(384,31.5);

	this.instance = new lib.Symbol77("synched",0);
	this.instance.setTransform(-174.7,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.step_mc}]}).wait(1));

	// Layer 2
	this.info_table = new lib.Symbol316d();
	this.info_table.setTransform(142.2,335.9,0.8,0.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D1CAA0").s().p("AgQBDIAAhqIgVAAIAAgbIBLAAIAAAbIgVAAIAABqg");
	this.shape_16.setTransform(92.6,15.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D1CAA0").s().p("AgdBDIAAiFIA4AAIAAAbIgXAAIAAAaIAWAAIAAAXIgWAAIAAAeIAaAAIAAAbg");
	this.shape_17.setTransform(85.6,15.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D1CAA0").s().p("AgnBDIAAiFIAjAAQAOAAAJADQAIADAFAHQAGAIAAASQAAALgEAFQgEAFgLACQAMADAFAEQAEAHAAANIAAAMQAAAOgDAGQgDAHgHACQgHADgUAAgAgEAsQAFAAACgDQACgCAAgIIAAgMQAAgJgCgCQgCgCgFAAgAgEgNIADAAQADAAACgCQABgDAAgMQAAgGgBgDQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBgBgEAAg");
	this.shape_18.setTransform(77.2,15.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D1CAA0").s().p("AgaBDIAAiFIAhAAIAABqIAUAAIAAAbg");
	this.shape_19.setTransform(66.5,15.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D1CAA0").s().p("AAIBDIgCgYIgKAAIgDAYIgkAAIASiFIAxAAIAUCFgAgFATIAKAAQgDgVgCgiQgEAlgBASg");
	this.shape_20.setTransform(58.7,15.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D1CAA0").s().p("AgQBDIAAhqIgVAAIAAgbIBLAAIAAAbIgVAAIAABqg");
	this.shape_21.setTransform(51.1,15.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D1CAA0").s().p("AgSBCQgJgEgFgHQgFgHgBgIIgBgdIAAgVIABgdQABgIAFgIQAFgGAJgEQAIgDAKAAQAKAAAJADQAJAEAEAGQAGAIABAIIABAdIAAAVIgBAcQgBAJgFAHQgFAHgJADQgIAEgLAAQgJAAgJgDgAgDgsQgBACAAAKIAAA9QAAAMABADQABACACABQADAAABgDQABgEAAgLIAAg9IgBgLQgBgDgDAAQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBABg");
	this.shape_22.setTransform(42.6,15.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D1CAA0").s().p("AgQBDIAAhqIgVAAIAAgbIBLAAIAAAbIgVAAIAABqg");
	this.shape_23.setTransform(34,15.4);

	this.bet_txt = new cjs.Text("111", "17px 'Arial'", "#D1CA9F");
	this.bet_txt.name = "bet_txt";
	this.bet_txt.textAlign = "right";
	this.bet_txt.lineHeight = 19;
	this.bet_txt.lineWidth = 100;
	this.bet_txt.setTransform(184.6,4.5);

	this.anim_main_1 = new lib.anim_main();
	this.anim_main_1.setTransform(143,402,1,1,0,0,0,43,19.5);

	this.instance_1 = new lib.Symbol243("synched",0);
	this.instance_1.setTransform(-43,-15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.anim_main_1},{t:this.bet_txt},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.info_table}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,876,480);


(lib.anim_bonus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.prize_txt = new cjs.Text("100", "28px 'Arial'", "#CCFF00");
	this.prize_txt.name = "prize_txt";
	this.prize_txt.textAlign = "center";
	this.prize_txt.lineHeight = 41;
	this.prize_txt.lineWidth = 96;
	this.prize_txt.setTransform(53,58);

	this.timeline.addTween(cjs.Tween.get(this.prize_txt).wait(1));

	// Stand
	this.Stand = new lib.Symbol217();
	this.Stand.setTransform(-30.1,320);

	this.timeline.addTween(cjs.Tween.get(this.Stand).wait(1));

	// shield1
	this.shield1 = new lib.Symbol207();
	this.shield1.setTransform(-30.1,34);

	this.timeline.addTween(cjs.Tween.get(this.shield1).wait(1));

	// lose1
	this.lose1 = new lib.Symbol204();
	this.lose1.setTransform(-30.1,34);

	this.timeline.addTween(cjs.Tween.get(this.lose1).wait(1));

	// waslose1
	this.waslose1 = new lib.Symbol171();
	this.waslose1.setTransform(-30.1,34);

	this.timeline.addTween(cjs.Tween.get(this.waslose1).wait(1));

	// shieldlose1
	this.shieldlose1 = new lib.Symbol168();
	this.shieldlose1.setTransform(-30.1,34);

	this.timeline.addTween(cjs.Tween.get(this.shieldlose1).wait(1));

	// open1
	this.open1 = new lib.Symbol135();
	this.open1.setTransform(-30.1,34);

	this.timeline.addTween(cjs.Tween.get(this.open1).wait(1));

	// win1
	this.win1 = new lib.Symbol98();
	this.win1.setTransform(-30.1,34);

	this.timeline.addTween(cjs.Tween.get(this.win1).wait(1));

	// waswin1
	this.waswin1 = new lib.Symbol7();
	this.waswin1.setTransform(-30.1,34);

	this.timeline.addTween(cjs.Tween.get(this.waswin1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.1,34,164,430);


// stage content:
(lib.gnome = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.sb1 = new lib.anim_sbonus();
	this.sb1.setTransform(2034,113.1,1,1,0,0,0,6,5);

	this.instance = new lib.anim_bonus();
	this.instance.setTransform(1903.3,313.1,1,1,0,0,0,51.9,249);

	this.instance_1 = new lib.icon9_an();
	this.instance_1.setTransform(543.7,742.7,1,1,0,0,0,50,50);

	this.instance_2 = new lib.icon1_an();
	this.instance_2.setTransform(280.1,742.7,1,1,0,0,0,50,50);

	this.instance_3 = new lib.help_scene();
	this.instance_3.setTransform(2214.6,-292.1,1,1,0,0,0,320,240);

	this.instance_4 = new lib.back_card();
	this.instance_4.setTransform(796.1,722.7,1,1,0,0,0,55,81.5);

	this.instance_5 = new lib.spades_card();
	this.instance_5.setTransform(1413.1,722.7,1,1,0,0,0,55,81.5);

	this.instance_6 = new lib.clubs_card();
	this.instance_6.setTransform(1261,722.7,1,1,0,0,0,55,81.5);

	this.instance_7 = new lib.hearts_card();
	this.instance_7.setTransform(1109.2,722.7,1,1,0,0,0,55,81.5);

	this.instance_8 = new lib.diamonds_card();
	this.instance_8.setTransform(966.7,722.7,1,1,0,0,0,55,81.5);

	this.instance_9 = new lib.superbonus_scene();
	this.instance_9.setTransform(1067,-163.1,1,1,0,0,0,12.8,12.8);

	this.instance_10 = new lib.bonus_scene();
	this.instance_10.setTransform(1425.7,-465.5,1,1,0,0,0,311.9,242.5);

	this.instance_11 = new lib.gamble_scene();
	this.instance_11.setTransform(66.5,-547.4,1,1,0,0,0,25.5,25.5);

	this.instance_12 = new lib.line_mc();
	this.instance_12.setTransform(315.4,147.8,1,1,0,0,0,315.4,147.8);

	this.instance_13 = new lib.main_scene();
	this.instance_13.setTransform(323.1,203.1,1,1,0,0,0,320,240);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.sb1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(278.1,-508,2531.5,1513.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
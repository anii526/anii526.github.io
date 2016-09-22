(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 960,
	height: 574,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"panel/images/panel_atlas_.png?1473595818506", id:"panel_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"panel_atlas_", frames: [[37,0,53,53],[37,90,39,17],[37,55,37,33],[76,55,37,33],[0,0,35,117],[92,0,14,52]]}
];


// symbols:



(lib.frygh54 = function() {
	this.spriteSheet = ss["panel_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.gfdgdfsg54 = function() {
	this.spriteSheet = ss["panel_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.gfdgdsg = function() {
	this.spriteSheet = ss["panel_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.gfdgg45 = function() {
	this.spriteSheet = ss["panel_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.gfdsghdh = function() {
	this.spriteSheet = ss["panel_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hgfhfdh = function() {
	this.spriteSheet = ss["panel_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.mute_icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFCFC").s().p("AgMAXQgDgFAEgDIAEgDQAHgCAAgHQACgFgEgGIgGgDQgGgDABgGQACgGAGABQAKADAGAMIACAFIABAFQABAIgGAIQgGAIgHACIgCAAQgEAAgCgDg");
	this.shape.setTransform(10.8,7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCFCFC").s().p("AAiBJIgFgDIgogqQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgUAAQgHAAgBgHIAAgoQABgGAHAAIATAAQADAAADgCIAqgrQADgDADABQAFABABAGIAACBIgBAHQgCAEgEAAIgDgBg");
	this.shape_1.setTransform(4.5,7.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCFCFC").s().p("AANAaIgNgOIgNAOQgCACgDAAQgEAAgDgCQgCgDAAgDQAAgEACgCIAPgOIgPgMQgBgDAAgDQAAgEABgCQAGgGAGAGIANAOIANgOQAGgFAHAFQAEAGgEAGIgPAMIAPAOQAEAGgEAGQgDACgEAAQgDAAgDgCg");
	this.shape_2.setTransform(12.8,7.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCFCFC").s().p("AAhBJIgsgtQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAIgVAAQgHAAAAgHIAAgnQABgGAFAAIAVAAIAEgCIAhgiIAJgJQAEgCADAAQAFABAAAGIAACBIgBAGQgBAFgEAAIgEgBg");
	this.shape_3.setTransform(4.4,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.3,14.9);


(lib.line_fon_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{up:0,down:1,over:2,disabled:3});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#5DC1E0","#02AED8","#1B8FC7","#3577BA","#3B6EB5","#3C68AD","#3E5EA1"],[0,0.055,0.212,0.373,0.475,0.592,0.843],0,-10.1,0,12).s().p("Ah+BPQg0ghAAguQAAgtA0ghQA2ghBIAAQBKAAA1AhQA0AhAAAtQAAAug0AhQg1AhhKAAQhJAAg1ghg");
	this.shape.setTransform(24.6,12.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#337DC3","#3E5EA1","#3D5FA3","#376AB0","#366EB4","#347AC0","#337DC3"],[0.173,0.541,0.808,0.973,0.984,0.996,1],0,-16.3,0,18).s().p("AiMB3Qg7gyAAhFQAAhFA7gxQA7gyBRAAQBTAAA6AyQA7AxAABFQAABFg7AyQg6AyhTAAQhRAAg7gyg");
	this.shape_1.setTransform(24.6,16.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#3E5EA1","#3E5EA1","#3E5EA1","#3E5EA1","#3A538D","#33416A"],[0,0,0.443,0.871,0.925,1],0,-16.7,0,18.6).s().p("AiTB6Qg+gyAAhIQAAhGA+gzQA9g0BWAAQBWAAA+A0QA+AzAABGQAABIg+AyQg+A0hWAAQhWAAg9g0g");
	this.shape_2.setTransform(24.6,17.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#3E5EA1","#364878","#33416A","#3C4F82","#33416A","#3E5EA1"],[0,0.176,0.235,0.494,0.776,1],-23.9,0,23.5,0).s().p("AiqCSQhGg9AAhVQAAhUBGg9QBIg8BigBQBkABBGA8QBHA9AABUQAABVhHA9QhGA8hkAAQhiAAhIg8g");
	this.shape_3.setTransform(24.6,21.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFFFFF","#BFBFBF","#2A2A2B","#020204"],[0,0.247,0.816,1],0,0,0,0,0,22.4).s().p("AisCXQhIg/AAhYQAAhXBIg+QBIhABkABQBlgBBIBAQBIA+AABXQAABYhIA/QhIA/hlgBQhkABhIg/g");
	this.shape_4.setTransform(24.6,21.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#7B7B7B","#FFFFFF","#D4D4D4","#6C6C6C","#464646","#434343","#A9A7A7","#7B7B7B"],[0,0.204,0.267,0.408,0.459,0.608,0.847,1],-24.5,0,24.6,0).s().p("AisCXQhIg/AAhYQAAhYBIg+QBIg/BkAAQBlAABIA/QBIA+AABYQAABYhIA/QhIA/hlAAQhkAAhIg/g");
	this.shape_5.setTransform(24.6,22.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#5DC1E0","#02AED8","#1B8FC7","#3577BA","#3B6EB5","#3C68AD","#3E5EA1"],[0,0.055,0.212,0.373,0.475,0.592,0.843],0,-9.5,0,11.3).s().p("Ah2BKQgxgfAAgrQAAgrAxgeQAygfBEAAQBGAAAxAfQAxAeAAArQAAArgxAfQgxAfhGAAQhEAAgygfg");
	this.shape_6.setTransform(24.6,15.2,1.098,1.098);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#337DC3","#3E5EA1","#3D5FA3","#376AB0","#366EB4","#347AC0","#337DC3"],[0.173,0.541,0.808,0.973,0.984,0.996,1],0,-15.3,0,17).s().p("AiEBwQg3gvAAhBQAAhBA3guQA3gvBNAAQBNAAA4AvQA3AuAABBQAABBg3AvQg4AvhNAAQhNAAg3gvg");
	this.shape_7.setTransform(24.5,20.2,1.098,1.098);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#3E5EA1","#3E5EA1","#3E5EA1","#3E5EA1","#3A538D","#33416A"],[0,0,0.443,0.871,0.925,1],0,-15.7,0,17.5).s().p("AiKBzQg6gwAAhDQAAhCA6gwQA5gwBRAAQBRAAA6AwQA6AwAABCQAABDg6AwQg6AwhRAAQhRAAg5gwg");
	this.shape_8.setTransform(24.5,20.7,1.098,1.098);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#3E5EA1","#364878","#33416A","#3C4F82","#33416A","#3E5EA1"],[0,0.176,0.235,0.494,0.776,1],-21.8,0,21.3,0).s().p("AiaB9QhBg0AAhJQAAhHBBg0QBBg0BZAAQBbAABAA0QBBA0gBBHQABBJhBA0QhAAzhbAAQhZAAhBgzg");
	this.shape_9.setTransform(24.6,23,1.098,1.098);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FFFFFF","#BFBFBF","#2A2A2B","#020204"],[0,0.247,0.816,1],0,0,0,0,0,20.4).s().p("AidCBQhBg2AAhLQAAhKBBg2QBCg1BbAAQBcAABCA1QBBA2AABKQAABLhBA2QhCA1hcAAQhbAAhCg1g");
	this.shape_10.setTransform(24.6,23,1.098,1.098);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#7B7B7B","#FFFFFF","#D4D4D4","#6C6C6C","#464646","#434343","#A9A7A7","#7B7B7B"],[0,0.204,0.267,0.408,0.459,0.608,0.847,1],-22.3,0,22.4,0).s().p("AidCBQhBg2AAhLQAAhKBBg2QBCg1BbAAQBcAABCA1QBBA2AABKQAABLhBA2QhCA1hcAAQhbAAhCg1g");
	this.shape_11.setTransform(24.6,23.6,1.098,1.098);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#5DC1E0","#02AED8","#029ED1","#2685C7","#2F7CC3"],[0,0.302,0.439,0.698,0.859],0,-11.1,0,13.3).s().p("Ah2BXQgxgkAAgzQAAgyAxgkQAyglBEAAQBFAAAyAlQAxAkAAAyQAAAzgxAkQgyAlhFAAQhEAAgyglg");
	this.shape_12.setTransform(24.6,14.5,1.098,1.098);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#5DC1E0","#02AED8","#029ED1","#2685C7","#2F7CC3"],[0,0.302,0.439,0.698,0.859],0,-15.3,0,17).s().p("AiEBwQg3guAAhCQAAhAA3gvQA3gvBNAAQBOAAA3AvQA3AvAABAQAABCg3AuQg3AvhOAAQhNAAg3gvg");
	this.shape_13.setTransform(24.5,17.5,1.098,1.098);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#5DC1E0","#02AED8","#029ED1","#2685C7","#2F7CC3"],[0,0.302,0.439,0.698,0.859],-0.5,20.4,0.5,-20.6).s().p("AiKBzQg6gvAAhEQAAhCA6gwQA6gwBQAAQBSAAA5AwQA6AwAABCQAABEg6AvQg5AwhSAAQhRAAg5gwg");
	this.shape_14.setTransform(24.5,18,1.098,1.098);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#5DC1E0","#02AED8","#02ACD8","#0B93D1","#1D8ACF","#2E78BA","#356DAE"],[0,0.055,0.075,0.322,0.475,0.675,0.843],-21.7,0,21.4,0).s().p("AiaCFQhAg3AAhOQAAhNBAg2QBAg4BaAAQBaAABBA4QBAA2AABNQAABOhAA3QhBA3haAAQhaAAhAg3g");
	this.shape_15.setTransform(24.6,21.6,1.098,1.098);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FFFFFF","#BFBFBF","#2A2A2B","#020204"],[0,0.247,0.816,1],0,0,0,0,0,20.4).s().p("AidCKQhBg6AAhQQAAhPBBg6QBCg4BbAAQBcAABCA4QBBA6AABPQAABQhBA6QhCA4hcAAQhbAAhCg4g");
	this.shape_16.setTransform(24.6,21.7,1.098,1.098);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#7B7B7B","#FFFFFF","#D4D4D4","#6C6C6C","#464646","#434343","#A9A7A7","#7B7B7B"],[0,0.204,0.267,0.408,0.459,0.608,0.847,1],-22.3,0,22.4,0).s().p("AidCJQhBg5AAhQQAAhQBBg4QBCg6BbAAQBcAABCA6QBBA4AABQQAABQhBA5QhCA6hcAAQhbAAhCg6g");
	this.shape_17.setTransform(24.6,22.3,1.098,1.098);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#AFAFAF","#878787","#7C7C7C","#737373"],[0,0.302,0.549,0.859],0.1,-12.1,0,12.5).s().p("Ah2BXQgxgkAAgzQAAgyAxgkQAyglBEAAQBGAAAxAlQAxAkAAAyQAAAzgxAkQgxAlhGAAQhEAAgyglg");
	this.shape_18.setTransform(24.6,14.5,1.098,1.098);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#AEAEAE","#919191","#7C7C7C","#737373"],[0,0.302,0.631,0.859],0,-15.3,0,17).s().p("AiEBwQg3gvAAhBQAAhAA3gvQA3gvBNAAQBOAAA3AvQA3AvAABAQAABBg3AvQg3AvhOAAQhNAAg3gvg");
	this.shape_19.setTransform(24.5,17.5,1.098,1.098);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#AEAEAE","#919191","#7C7C7C","#737373"],[0,0.302,0.631,0.859],-0.5,20.4,0.5,-20.6).s().p("AiKBzQg6gwAAhDQAAhCA6gwQA6gwBQAAQBRAAA6AwQA6AwAABCQAABDg6AwQg6AwhRAAQhQAAg6gwg");
	this.shape_20.setTransform(24.5,18,1.098,1.098);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#AEAEAE","#919191","#848484","#7C7C7C","#727272","#676767"],[0,0.055,0.255,0.475,0.612,0.843],-21.8,0,21.3,0).s().p("AiaCFQhBg3AAhOQAAhNBBg3QBBg3BZAAQBbAABAA3QBBA3gBBNQABBOhBA3QhAA3hbAAQhZAAhBg3g");
	this.shape_21.setTransform(24.6,21.6,1.098,1.098);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#FFFFFF","#BFBFBF","#2A2A2B","#020204"],[0,0.247,0.816,1],0,0,0,0,0,20.4).s().p("AidCKQhBg6AAhQQAAhQBBg5QBCg4BbAAQBcAABCA4QBBA5AABQQAABQhBA6QhCA4hcAAQhbAAhCg4g");
	this.shape_22.setTransform(24.6,21.7,1.098,1.098);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#7B7B7B","#FFFFFF","#D4D4D4","#6C6C6C","#464646","#434343","#A9A7A7","#7B7B7B"],[0,0.204,0.267,0.408,0.459,0.608,0.847,1],-22.3,0,22.4,0).s().p("AidCKQhBg5AAhRQAAhPBBg6QBCg4BbAAQBcAABCA4QBBA6AABPQAABRhBA5QhCA4hcAAQhbAAhCg4g");
	this.shape_23.setTransform(24.6,22.3,1.098,1.098);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.2,43.7);


(lib.hit_panel2btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,204,153,0.027)").ss(1,1,1).p("AiGiIIENAAIAAERIkNAAg");
	this.shape.setTransform(13.5,13.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiGCJIAAkRIENAAIAAERg");
	this.shape_1.setTransform(13.5,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,29,29.5);


(lib.tyy54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gfdgdsg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37,33);


(lib.tyey5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.hgfhfdh();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14,52);


(lib.tret54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gfdgdfsg54();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39,17);


(lib.tret4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBBDC0").s().p("Ag+AvQgbgUAAgbQAAgbAbgUQAagTAkAAQAlAAAaATQAbAUAAAbQAAAbgbAUQgaAUglAAQgkAAgagUg");
	this.shape.setTransform(9,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18,13.6);


(lib.tgre6534 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gfdgg45();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37,33);


(lib.grtet54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F14941").s().p("Ai3C5QhOhNAAhsQAAhrBOhNQBMhMBrAAQBsAABNBMQBMBNAABrQAABshMBNQhNBMhsAAQhrAAhMhMg");
	this.shape.setTransform(26.2,26.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52.4,52.4);


(lib.ghjgfjtyu6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag+AvQgagUAAgbQAAgbAagTQAagUAkAAQAlAAAaAUQAaATAAAbQAAAbgaAUQgaAUglAAQgkAAgagUg");
	this.shape.setTransform(9,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18,13.6);


(lib.dtgfsh5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gfdsghdh();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,117);


(lib.gfdgd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#697B7F").s().p("Eg6eAoBMABphQBMBxhAAAMABzBQBg");
	this.shape.setTransform(374.4,256.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,748.8,512.4);


(lib.fon_panel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#02ADE2","#024B74","#021A3A"],[0,0.627,1],-8,-38.1,0,-8,-38.1,529.2).s().p("EhK/As2MAAAhZrMCV/AAAMAAABZrg");
	this.shape.setTransform(480,287);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,574);


(lib.contgame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0)").s().p("AiuCuIAAlbIFdAAIAAFbg");
	this.shape.setTransform(17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,35);


(lib.btn_middle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"up":0,"down":1,"over":2,"disabled":3});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#5DC1E0","#02AED8","#1B8FC7","#3577BA","#3B6EB5","#3C68AD","#3E5EA1"],[0,0.055,0.212,0.373,0.475,0.592,0.843],0,-8.9,0,8.5).s().p("AhTBZQgbAAgTgVQgTgWABgdIABgkQABgdAUgUQATgUAaAAICgAAQAbAAATAUQAUAVAAAcIACAkQABAdgTAWQgTAVgbAAg");
	this.shape.setTransform(19.1,9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#337DC3","#3E5EA1","#3D5FA3","#376AB0","#366EB4","#347AC0","#337DC3"],[0.173,0.541,0.808,0.973,0.984,0.996,1],0,-13.3,0,12.7).s().p("AhoCFQgcAAgTgWQgTgWABgfIAEh5QABgdAUgUQAUgUAaAAIDFAAQAaAAAUAUQATAUABAdIAFB5QABAfgTAWQgTAWgcAAg");
	this.shape_1.setTransform(19,13.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#3E5EA1","#3E5EA1","#3E5EA1","#3E5EA1","#3A538D","#33416A"],[0,0,0.443,0.871,0.925,1],-16.7,-9.4,16.9,10).s().p("AhuCKQgcAAgTgWQgTgWABgfIAFiDQABgdAUgUQAUgUAaAAIDPAAQAaAAAUAVQATATACAdIAFCDQABAfgTAWQgTAWgcAAg");
	this.shape_2.setTransform(19,13.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#3E5EA1","#364878","#33416A","#3C4F82","#33416A","#3E5EA1"],[0,0.176,0.235,0.494,0.776,1],-18.3,0,18.3,0).s().p("AhyCVQgdAAgUgYQgUgYABghIAFiOQABgfAVgWQAUgVAcAAIDXAAQAcAAAUAWQAVAWABAfIAFCNQABAhgUAYQgUAYgdAAg");
	this.shape_3.setTransform(19,17.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFFFFF","#BFBFBF","#2A2A2B","#020204"],[0,0.247,0.816,1],0,0,0,0,0,14.8).s().p("Ah1CcQgdAAgVgYQgTgYAAghIAGibQABgfAUgWQAUgWAdAAIDdABQAdAAAUAVQATAWABAfIAHCbQABAhgUAYQgUAYgdAAg");
	this.shape_4.setTransform(19,16.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#7B7B7B","#FFFFFF","#D4D4D4","#6C6C6C","#464646","#434343","#A9A7A7","#7B7B7B"],[0,0.204,0.267,0.408,0.459,0.608,0.847,1],-15,15.5,15.1,-14.7).s().p("Ah5CdQgdAAgUgYQgTgYABgiIAGicQABggAUgVQAUgWAbAAIDlAAQAbABAUAVQAUAWABAfIAGCcQABAigTAYQgUAYgdAAg");
	this.shape_5.setTransform(19,17);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#5DC1E0","#02AED8","#1B8FC7","#3577BA","#3B6EB5","#3C68AD","#3E5EA1"],[0,0.055,0.212,0.373,0.475,0.592,0.843],0,-8.9,0,8.5).s().p("AhTBZQgbAAgTgVQgTgWABgdIABgkQABgdAUgUQATgUAbAAICfAAQAbABATATQAUAVABAcIABAkQABAegTAVQgTAVgbAAg");
	this.shape_6.setTransform(19.1,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#337DC3","#3E5EA1","#3D5FA3","#376AB0","#366EB4","#347AC0","#337DC3"],[0.173,0.541,0.808,0.973,0.984,0.996,1],0,-13.4,0,12.6).s().p("AhoCEQgcAAgTgVQgTgXABgeIAFh5QABgdATgUQAUgUAaAAIDFABQAagBAUAVQATATABAdIAFB5QABAfgTAWQgTAWgcAAg");
	this.shape_7.setTransform(19,15.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#3E5EA1","#3E5EA1","#3E5EA1","#3E5EA1","#3A538D","#33416A"],[0,0,0.443,0.871,0.925,1],-16.7,-9.4,16.9,10).s().p("AhuCJQgcAAgTgVQgTgXABgeIAFiEQABgcAUgUQAUgUAaAAIDPABQAagBAUAVQAUATABAdIAFCDQABAfgTAWQgTAWgcAAg");
	this.shape_8.setTransform(19,16.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#3E5EA1","#364878","#33416A","#3C4F82","#33416A","#3E5EA1"],[0,0.176,0.235,0.494,0.776,1],-18.3,0,18.3,0).s().p("AhyCKQgdAAgUgWQgUgWABgfIAFiDQABgdAVgUQAUgUAcAAIDXABQAcAAAUATQAVAUABAeIAFCCQABAfgUAWQgUAWgdAAg");
	this.shape_9.setTransform(19,18.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FFFFFF","#BFBFBF","#2A2A2B","#020204"],[0,0.247,0.816,1],0,0,0,0,0,14.8).s().p("Ah2CQQgdAAgTgWQgVgWABgfIAGiQQABgcAUgUQAVgUAcAAIDeAAQAcAAATAVQAVATABAdIAFCPQACAfgUAWQgUAWgdAAg");
	this.shape_10.setTransform(19,18.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#7B7B7B","#FFFFFF","#D4D4D4","#6C6C6C","#464646","#434343","#A9A7A7","#7B7B7B"],[0,0.204,0.267,0.408,0.459,0.608,0.847,1],-14.5,14.9,14.6,-14.2).s().p("Ah5CRQgdAAgUgWQgUgWACgfIAFiSQABgcAVgUQAUgUAcAAIDjAAQAcAAAUAVQAUATABAdIAGCRQACAfgUAWQgUAWgdAAg");
	this.shape_11.setTransform(19,18.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#5DC1E0","#02AED8","#029ED1","#2685C7","#2F7CC3"],[0,0.302,0.439,0.698,0.859],0,-10.9,0,10.4).s().p("AhZBsQgdAAgVgaQgUgZABglIACgsQABgjAUgYQAVgZAdAAICrABQAdgBAVAZQAUAZABAiIACAsQABAlgUAaQgUAageAAg");
	this.shape_12.setTransform(19,11.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#5DC1E0","#02AED8","#029ED1","#2685C7","#2F7CC3"],[0,0.302,0.439,0.698,0.859],0,-13.4,0,12.6).s().p("AhoCFQgcAAgTgWQgTgXABgfIAFh4QABgdATgUQAUgUAaAAIDFAAQAaAAAUAUQATAUABAdIAFB5QABAfgTAWQgTAWgcAAg");
	this.shape_13.setTransform(19,13.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#2F7CC3","#2685C7","#029ED1","#02AED8","#5DC1E0"],[0.141,0.302,0.561,0.698,1],-0.3,-13.2,0.2,13).s().p("AhuCKQgcAAgTgWQgTgXABgeIAFiEQABgcAUgUQAUgUAaAAIDPAAQAaAAAUAVQAUATABAdIAFCDQABAfgTAWQgTAWgcAAg");
	this.shape_14.setTransform(19,13.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#5DC1E0","#02AED8","#02ACD8","#0B93D1","#1D8ACF","#2E78BA","#356DAE"],[0,0.055,0.075,0.322,0.475,0.675,0.843],-18.3,0,18.3,0).s().p("AhyCVQgdAAgUgYQgUgYABghIAFiOQABgeAVgXQAUgVAcAAIDXAAQAcAAAUAWQAVAVABAfIAFCOQABAhgUAYQgUAYgdAAg");
	this.shape_15.setTransform(19,17.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FFFFFF","#BFBFBF","#2A2A2B","#020204"],[0,0.247,0.816,1],0,0,0,0,0,14.8).s().p("Ah1CcQgdAAgVgYQgTgYAAgiIAGiaQABgfAUgWQAUgWAdAAIDdABQAdAAAUAVQAUAWABAfIAGCbQABAhgUAYQgUAYgdAAg");
	this.shape_16.setTransform(19,16.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#7B7B7B","#FFFFFF","#D4D4D4","#6C6C6C","#464646","#434343","#A9A7A7","#7B7B7B"],[0,0.204,0.267,0.408,0.459,0.608,0.847,1],-15,15.5,15.1,-14.7).s().p("Ah5CdQgdAAgUgYQgUgYABgiIAGicQABggAVgVQAUgWAbAAIDkAAQAcABAUAVQAUAWABAfIAGCcQACAigUAYQgUAYgdAAg");
	this.shape_17.setTransform(19,17);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#AFAFAF","#878787","#7C7C7C","#737373"],[0,0.302,0.549,0.859],0,-9.7,0,9.2).s().p("AhZBgQgeAAgUgXQgUgWABghIABgnQABgfAVgWQAVgWAcABICsAAQAdAAAUAVQAWAXABAeIABAnQABAggUAYQgUAWgeAAg");
	this.shape_18.setTransform(19,10.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#AEAEAE","#919191","#7C7C7C","#737373"],[0,0.302,0.631,0.859],0,-13.4,0,12.6).s().p("AhoCFQgcAAgTgWQgTgXABgfIAEh4QABgdAUgUQATgUAbAAIDFAAQAaAAAUAUQATAVABAcIAFB5QABAfgTAWQgTAWgcAAg");
	this.shape_19.setTransform(19,13.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#AEAEAE","#919191","#7C7C7C","#737373"],[0,0.302,0.631,0.859],0,13.6,0,-13.4).s().p("AhuCKQgcAAgTgWQgTgXABgfIAGiCQABgcATgVQAUgUAaAAIDPABQAaAAAUATQATAUACAdIAFCCQABAfgTAXQgTAWgcAAg");
	this.shape_20.setTransform(19,13.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#AEAEAE","#919191","#848484","#7C7C7C","#727272","#676767"],[0,0.055,0.255,0.475,0.612,0.843],-18.3,0,18.3,0).s().p("AhyCVQgdAAgUgYQgUgYABghIAFiOQABgfAVgVQAUgWAbAAIDYAAQAcABAUAVQAUAWABAfIAGCNQABAhgUAYQgUAYgdAAg");
	this.shape_21.setTransform(19,17.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#FFFFFF","#BFBFBF","#2A2A2B","#020204"],[0,0.247,0.816,1],0,0,0,0,0,14.8).s().p("Ah2CcQgdAAgUgYQgTgYABgiIAFiaQABgfAVgWQATgWAcAAIDeABQAcAAAUAVQAUAWACAfIAFCbQACAhgVAYQgTAYgdAAg");
	this.shape_22.setTransform(19,16.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#7B7B7B","#FFFFFF","#D4D4D4","#6C6C6C","#464646","#434343","#A9A7A7","#7B7B7B"],[0,0.204,0.267,0.408,0.459,0.608,0.847,1],-15,15.5,15.1,-14.7).s().p("Ah5CdQgdAAgTgYQgVgYACghIAFidQABgfAVgXQATgVAdAAIDjABQAcAAAUAVQAVAWAAAfIAHCdQABAhgUAYQgUAYgdAAg");
	this.shape_23.setTransform(19,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38,32.8);


(lib.btn_fonc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#5DC1E0","#02AED8","#029ED1","#2685C7","#2F7CC3"],[0,0.302,0.439,0.698,0.859],0,-7.6,0,9.1).s().p("AhQA8QgigZAAgjQAAgiAigZQAigZAuAAQAvAAAiAZQAiAZAAAiQAAAigiAaQgiAYgvAAQguAAgigYg");
	this.shape.setTransform(15.3,9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#5DC1E0","#02AED8","#029ED1","#2685C7","#2F7CC3"],[0,0.302,0.439,0.698,0.859],0,-10.5,0,11.6).s().p("AhaBNQglggAAgtQAAgsAlgfQAmggA0gBQA1ABAlAgQAnAfAAAsQAAAtgnAgQglAfg1ABQg0gBgmgfg");
	this.shape_1.setTransform(15.3,10.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#5DC1E0","#02AED8","#029ED1","#2685C7","#2F7CC3"],[0,0.302,0.439,0.698,0.859],-0.3,13.9,0.4,-14.1).s().p("AheBPQgoghAAguQAAgtAoggQAoghA2gBQA4ABAnAhQAoAgAAAtQAAAugoAhQgnAhg4gBQg2ABgoghg");
	this.shape_2.setTransform(15.2,11.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#5DC1E0","#02AED8","#02ACD8","#0B93D1","#1D8ACF","#2E78BA","#356DAE"],[0,0.055,0.075,0.322,0.475,0.675,0.843],-14.9,0,14.6,0).s().p("AhpBbQgsgmAAg1QAAg0AsglQAtgnA8AAQA9AAAtAnQAsAlAAA0QAAA1gsAmQgsAlg+AAQg9AAgsglg");
	this.shape_3.setTransform(15.3,13.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFFFFF","#BFBFBF","#2A2A2B","#020202"],[0,0.247,0.816,1],0,0,0,0,0,14).s().p("AhqBeQgugoABg2QgBg2AugnQAsgnA+AAQA/AAAtAnQAsAnABA2QgBA2gsAoQgtAng/AAQg+AAgsgng");
	this.shape_4.setTransform(15.3,13.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#7B7B7B","#FFFFFF","#D4D4D4","#6C6C6C","#464646","#434343","#A9A7A7","#7B7B7B"],[0,0.204,0.267,0.408,0.459,0.608,0.847,1],-15.3,0,15.3,0).s().p("AhqBeQgugnABg3QgBg1AugoQAsgnA+AAQA/AAAtAnQAsAoABA1QgBA3gsAnQgtAng/AAQg+AAgsgng");
	this.shape_5.setTransform(15.3,13.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#5DC1E0","#02AED8","#1B8FC7","#3577BA","#3B6EB5","#3C68AD","#3E5EA1"],[0,0.055,0.212,0.373,0.475,0.592,0.843],0,-6.5,0,7.7).s().p("AhQAzQgigVAAgeQAAgdAigUQAigWAuAAQAvAAAiAWQAiAUAAAdQAAAegiAVQgiAVgvAAQguAAgigVg");
	this.shape_6.setTransform(15.3,9.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#337DC3","#3E5EA1","#3D5FA3","#376AB0","#366EB4","#347AC0","#337DC3"],[0.173,0.541,0.808,0.973,0.984,0.996,1],0,-10.4,0,11.7).s().p("AhaBMQgmgfAAgtQAAgrAmghQAmgfA0AAQA1AAAmAfQAmAhgBArQABAtgmAfQgmAhg1gBQg0ABgmghg");
	this.shape_7.setTransform(15.3,12.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#3E5EA1","#3E5EA1","#3E5EA1","#3E5EA1","#3A538D","#33416A"],[0,0,0.443,0.871,0.925,1],0,-10.7,0,12).s().p("AheBPQgoghAAguQAAgsAogiQAoggA2AAQA4AAAnAgQAoAiAAAsQAAAugoAhQgnAhg4AAQg2AAgoghg");
	this.shape_8.setTransform(15.2,12.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#3E5EA1","#364878","#33416A","#3C4F82","#33416A","#3E5EA1"],[0,0.176,0.235,0.494,0.776,1],-14.9,0,14.6,0).s().p("AhpBVQgsgjAAgyQAAgwAsgkQAsgjA9AAQA+AAAsAjQAsAkAAAwQAAAygsAjQgsAkg+AAQg9AAgsgkg");
	this.shape_9.setTransform(15.3,14.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FFFFFF","#BFBFBF","#2A2A2B","#020202"],[0,0.247,0.816,1],0,0,0,0,0,14).s().p("AhrBYQgtgkAAg0QAAgyAtglQAtglA+AAQA/AAAsAlQAuAlgBAyQABA0guAkQgsAlg/AAQg+AAgtglg");
	this.shape_10.setTransform(15.3,14.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#7B7B7B","#FFFFFF","#D4D4D4","#6C6C6C","#464646","#434343","#A9A7A7","#7B7B7B"],[0,0.204,0.267,0.408,0.459,0.608,0.847,1],-15.3,0,15.3,0).s().p("AhrBYQgtglAAgzQAAgyAtglQAtgkA+AAQA/AAAsAkQAuAlgBAyQABAzguAlQgsAlg/AAQg+AAgtglg");
	this.shape_11.setTransform(15.3,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.6,27.3);


(lib.btn_fon_big = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"up":0,"down":1,"over":2,"disabled":3});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#5DC1E0","#02AED8","#1B8FC7","#3577BA","#3B6EB5","#3C68AD","#3E5EA1"],[0,0.055,0.212,0.373,0.475,0.592,0.843],0,-12.6,0,12).s().p("Ah1B+QgnAAgbgeQgagfABgpIACg0QABgpAcgbQAbgdAlAAIDiABQAmgBAbAdQAbAcACApIACAzQABAqgaAeQgbAegnAAg");
	this.shape.setTransform(26.9,13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#337DC3","#3E5EA1","#3D5FA3","#376AB0","#366EB4","#347AC0","#337DC3"],[0.173,0.541,0.808,0.973,0.984,0.996,1],0,-18.8,0,17.8).s().p("AiTC8QgogBgbgfQgbgfACgsIAHirQABgoAcgdQAbgcAlAAIEXABQAlAAAcAcQAbAdACAoIAGCqQACAsgbAfQgbAggnAAg");
	this.shape_1.setTransform(26.8,18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#3E5EA1","#3E5EA1","#3E5EA1","#3E5EA1","#3A538D","#33416A"],[0,0,0.443,0.871,0.925,1],-23.5,-13.3,23.9,14.1).s().p("AibDDQgoAAgbggQgbgfACgsIAHi5QACgoAbgcQAcgdAlAAIElABQAlAAAcAcQAbAcACApIAHC4QACAsgbAfQgbAggnAAg");
	this.shape_2.setTransform(26.8,19.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#3E5EA1","#364878","#33416A","#3C4F82","#33416A","#3E5EA1"],[0,0.176,0.235,0.494,0.776,1],-25.8,0,25.9,0).s().p("AihDTQgpAAgcgjQgcghABgvIAHjIQACgsAdgfQAcgeAngBIExABQAnAAAdAeQAcAgACArIAHDIQACAvgcAhQgcAjgpAAg");
	this.shape_3.setTransform(26.8,24.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFFFFF","#BFBFBF","#2A2A2B","#020204"],[0,0.247,0.816,1],0,0,0,0,0,20.8).s().p("AinDcQgpAAgcgiQgcgiACgvIAIjbQABgsAdgfQAdgeAnAAIE6AAQAnAAAcAfQAdAfABArIAIDbQACAvgcAiQgcAigpAAg");
	this.shape_4.setTransform(26.8,23.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#7B7B7B","#FFFFFF","#D4D4D4","#6C6C6C","#464646","#434343","#A9A7A7","#7B7B7B"],[0,0.204,0.267,0.408,0.459,0.608,0.847,1],-21.2,21.7,21.3,-20.8).s().p("AirDdQgpAAgcgiQgcghACgwIAIjeQABgsAdgeQAcgfAnABIFCAAQAnAAAdAfQAcAeACAsIAIDeQACAvgcAhQgcAigpAAg");
	this.shape_5.setTransform(26.8,24);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#5DC1E0","#02AED8","#1B8FC7","#3577BA","#3B6EB5","#3C68AD","#3E5EA1"],[0,0.055,0.212,0.373,0.475,0.592,0.843],0,-12.6,0,12).s().p("Ah1B+QgnAAgbgeQgagfABgqIACgzQABgoAcgcQAbgdAlAAIDiAAQAmABAbAcQAcAcABApIACAzQABAqgaAeQgbAegnAAg");
	this.shape_6.setTransform(26.9,16.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#337DC3","#3E5EA1","#3D5FA3","#376AB0","#366EB4","#347AC0","#337DC3"],[0.173,0.541,0.808,0.973,0.984,0.996,1],0,-18.8,0,17.8).s().p("AiTC7QgoAAgbgeQgbggACgsIAGirQACgoAcgcQAbgdAmAAIEWABQAlAAAbAdQAcAcABAoIAHCqQACAsgbAgQgbAegnAAg");
	this.shape_7.setTransform(26.8,22.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#3E5EA1","#3E5EA1","#3E5EA1","#3E5EA1","#3A538D","#33416A"],[0,0,0.443,0.871,0.925,1],-23.5,-13.2,23.9,14.1).s().p("AibDDQgoAAgbggQgbgfACgsIAHi5QABgoAcgcQAcgdAlABIElAAQAlAAAcAcQAbAdABAoIAIC5QACArgbAgQgbAfgnAAg");
	this.shape_8.setTransform(26.8,23);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#3E5EA1","#364878","#33416A","#3C4F82","#33416A","#3E5EA1"],[0,0.176,0.235,0.494,0.776,1],-25.8,0,25.9,0).s().p("AihC8QgpAAgcgeQgdgeACgqIAHizQACgnAdgcQAcgbAnAAIExAAQAnAAAdAcQAcAbABAnIAICzQACAqgdAeQgcAegpAAg");
	this.shape_9.setTransform(26.8,26.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FFFFFF","#BFBFBF","#2A2A2B","#020204"],[0,0.247,0.816,1],0,0,0,0,0,20.8).s().p("AimDFQgqAAgcgfQgcgeACgqIAIjEQABgnAdgbQAcgcAnABIE6AAQAnAAAdAbQAcAbACAnIAIDEQACAqgcAeQgcAfgpAAg");
	this.shape_10.setTransform(26.8,26.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#7B7B7B","#FFFFFF","#D4D4D4","#6C6C6C","#464646","#434343","#A9A7A7","#7B7B7B"],[0,0.204,0.267,0.408,0.459,0.608,0.847,1],-20.2,20.7,20.3,-19.7).s().p("AirDGQgpAAgcgeQgcgeACgrIAIjGQABgnAdgbQAdgcAmAAIFDAAQAmABAdAbQAcAbACAnIAIDGQACArgcAeQgcAegpAAg");
	this.shape_11.setTransform(26.8,26.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#5DC1E0","#02AED8","#029ED1","#2685C7","#2F7CC3"],[0,0.302,0.439,0.698,0.859],0,-15.4,0,14.6).s().p("Ah+CaQgqAAgcglQgdglACgzIACg/QABgyAdgiQAegjAoAAIDzABQAoAAAdAiQAeAjABAxIACA/QACA0gcAkQgdAlgqAAg");
	this.shape_12.setTransform(26.7,16.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#5DC1E0","#02AED8","#029ED1","#2685C7","#2F7CC3"],[0,0.302,0.439,0.698,0.859],0,-18.8,0,17.8).s().p("AiTC7QgoAAgbgfQgbgfACgrIAGisQACgoAbgcQAcgcAlAAIEXAAQAlAAAbAdQAcAbACApIAGCrQACArgbAfQgbAfgnAAg");
	this.shape_13.setTransform(26.8,18.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#2F7CC3","#2685C7","#029ED1","#02AED8","#5DC1E0"],[0.141,0.302,0.561,0.698,1],-0.5,-18.7,0.2,18.3).s().p("AibDCQgoAAgbgfQgbgfACgsIAHi5QACgoAbgdQAcgcAlAAIElABQAlAAAcAcQAbAcACAoIAHC5QACAsgbAfQgbAggnAAg");
	this.shape_14.setTransform(26.8,19.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#5DC1E0","#02AED8","#02ACD8","#0B93D1","#1D8ACF","#2E78BA","#356DAE"],[0,0.055,0.075,0.322,0.475,0.675,0.843],-25.8,0,25.9,0).s().p("AihDSQgpABgcgiQgcghABgwIAHjIQACgsAcgfQAdgeAnAAIExAAQAnAAAdAfQAcAfACArIAHDIQACAvgcAiQgcAigpgBg");
	this.shape_15.setTransform(26.8,24.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FFFFFF","#BFBFBF","#2A2A2B","#020204"],[0,0.247,0.816,1],0,0,0,0,0,20.8).s().p("AinDcQgpAAgcgiQgcghACgwIAHjcQADgrAcgfQAcgeAnAAIE6ABQAngBAdAfQAdAfABArIAIDbQACAwgcAhQgcAigpAAg");
	this.shape_16.setTransform(26.8,23.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#7B7B7B","#FFFFFF","#D4D4D4","#6C6C6C","#464646","#434343","#A9A7A7","#7B7B7B"],[0,0.204,0.267,0.408,0.459,0.608,0.847,1],-21.2,21.8,21.3,-20.7).s().p("AirDdQgpAAgcghQgcgiACgvIAIjfQABgsAdgeQAcgeAngBIFCABQAnAAAdAfQAcAeACAsIAIDeQACAvgcAiQgcAhgpAAg");
	this.shape_17.setTransform(26.8,24);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#AFAFAF","#878787","#7C7C7C","#737373"],[0,0.302,0.549,0.859],0,-13.6,0,12.9).s().p("Ah9CHQgrABgcghQgdggACguIABg3QACgsAdgeQAegeAogBIDzABQAoAAAdAfQAeAeACAsIACA3QABAtgcAhQgdAfgqAAg");
	this.shape_18.setTransform(26.7,14.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#AEAEAE","#919191","#7C7C7C","#737373"],[0,0.302,0.631,0.859],0,-18.8,0,17.8).s().p("AiTC7QgoAAgbgfQgbgfACgrIAGisQACgpAbgcQAcgcAlABIEXAAQAlAAAbAcQAcAdABAoIAHCrQACArgbAfQgbAggnAAg");
	this.shape_19.setTransform(26.8,18.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#AEAEAE","#919191","#7C7C7C","#737373"],[0,0.302,0.631,0.859],0.1,18.6,-0.1,-19.4).s().p("AibDDQgoAAgbggQgbgfACgsIAHi5QACgoAbgcQAcgdAlAAIElABQAlAAAbAcQAcAcACApIAHC4QACAsgbAfQgbAggoAAg");
	this.shape_20.setTransform(26.8,19.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#AEAEAE","#919191","#848484","#7C7C7C","#727272","#676767"],[0,0.055,0.255,0.475,0.612,0.843],-25.8,0,25.9,0).s().p("AihDTQgpAAgdgjQgcghACgvIAHjIQACgtAcgeQAdgfAnABIExAAQAnAAAcAeQAdAfACAsIAHDIQACAvgcAhQgdAjgpAAg");
	this.shape_21.setTransform(26.8,24.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#FFFFFF","#BFBFBF","#2A2A2B","#020204"],[0,0.247,0.816,1],0,0,0,0,0,20.8).s().p("AimDcQgpAAgdgiQgcghACgwIAIjbQABgsAdgeQAcgfAnAAIE7AAQAnAAAcAfQAdAfABArIAIDcQACAvgcAhQgcAigpAAg");
	this.shape_22.setTransform(26.8,23.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#7B7B7B","#FFFFFF","#D4D4D4","#6C6C6C","#464646","#434343","#A9A7A7","#7B7B7B"],[0,0.204,0.267,0.408,0.459,0.608,0.847,1],-21.2,21.8,21.3,-20.7).s().p("AiqDdQgqABgcgjQgcghABgwIAIjdQADgtAcgeQAcgeAoAAIFCAAQAnAAAcAeQAcAgACArIAJDeQABAvgcAhQgcAjgpgBg");
	this.shape_23.setTransform(26.8,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.6,46.2);


(lib.bn7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AALAdIgWgkIAAAkIgLAAIAAg6IAMAAIAWAnIAAgnIALAAIAAA6g");
	this.shape.setTransform(37.4,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAdIAAg6IAJAAIAAA6g");
	this.shape_1.setTransform(33.3,13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAMAdIgMgrIgKArIgNAAIgPg6IANAAIAJAoIALgoIAMAAIALAoIAJgoIAMAAIgPA6g");
	this.shape_2.setTransform(28.2,13.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAdIAAg6IAqAAIAAALIgeAAIAAANIAcAAIAAAIIgcAAIAAAQIAfAAIAAAKg");
	this.shape_3.setTransform(19.2,13.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAKAdIgNgcIgLAKIAAASIgMAAIAAg6IAMAAIAAAbIAXgbIAQAAIgXAYIAYAig");
	this.shape_4.setTransform(13.7,13.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAQAdIgFgNIgWAAIgFANIgNAAIAYg6IAKAAIAZA6gAgHAFIAOAAIgHgUg");
	this.shape_5.setTransform(7.3,13.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgFAdIAAgvIgRAAIAAgLIAtAAIAAALIgSAAIAAAvg");
	this.shape_6.setTransform(2.4,13.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFAdIAAgvIgRAAIAAgKIAtAAIAAAKIgSAAIAAAvg");
	this.shape_7.setTransform(31.2,3.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMAdIgNgVIgEgDIgGgBIgCAAIAAAZIgMAAIAAg5IAZAAQAHAAAFABQAEACADAEQACAEAAAFQAAAIgEADQgDADgIABIAGAFIAOAVgAgNgDIAJAAIAIgBIAEgCQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBIgCgFQgCgCgCAAIgQAAg");
	this.shape_8.setTransform(25.9,3.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAQAdIgFgNIgWAAIgFANIgMAAIAWg5IAMAAIAYA5gAgHAGIAOAAIgHgUg");
	this.shape_9.setTransform(19.6,3.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFAdIAAgvIgRAAIAAgKIAtAAIAAAKIgSAAIAAAvg");
	this.shape_10.setTransform(14.7,3.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQAZQgGgFgBgKIAMgBQABAHADABQADADAEAAQAFAAAEgCQADgCAAgEQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAAAgBgBIgEgCIgIgDQgJgCgEgCQgGgEAAgIQAAgEADgEQADgEAEgCQAFgCAGAAQALAAAFAFQAGAEAAAJIgMAAQgBgFgCgBQgDgCgEAAQgFAAgCACQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAABQABAAAAAAQAAABABAAQADACAGACQAHACAGACQAEACACACQADAFAAAFQAAAFgDAFQgDAEgFACQgFACgIAAQgKAAgGgFg");
	this.shape_11.setTransform(9.3,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.8,16.1);


(lib.bn6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAhIAAg2IgUAAIAAgLIAzAAIAAALIgTAAIAAA2g");
	this.shape.setTransform(40.1,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAhIAAhBIAwAAIAAALIgiAAIAAAPIAfAAIAAAKIgfAAIAAASIAjAAIAAALg");
	this.shape_1.setTransform(34.3,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAhIAAhBIAaAAIAKABQAEAAADADQADABACAEQACAEAAAEQAAAEgCAFQgEAEgDABQAGABADAEQADAEAAAGQAAAFgCADQgCAFgEACQgCADgHABgAgNAWIAMAAIAIgBIAFgCQABgCAAgEIgBgFQAAgBgBAAQAAgBAAAAQgBAAgBgBQAAAAgBAAIgVgBgAgNgFIARAAIAFgDQACgCAAgDIgCgFQgCgCgDAAIgJgBIgIAAg");
	this.shape_2.setTransform(27.8,14.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAOAhIgOgXIgNAXIgRAAIAYghIgVggIAPAAIAMAWIANgWIAQAAIgVAgIAXAhg");
	this.shape_3.setTransform(18.7,14.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AASAhIgGgPIgZAAIgFAPIgOAAIAahBIAMAAIAbBBgAgIAHIAQAAIgIgXg");
	this.shape_4.setTransform(12.2,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AATAhIAAgzIgNAzIgLAAIgNgzIAAAzIgNAAIAAhBIAUAAIALAsIALgsIAVAAIAABBg");
	this.shape_5.setTransform(5,14.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAhIAAhBIAwAAIAAALIgiAAIAAAPIAfAAIAAAKIgfAAIAAASIAjAAIAAALg");
	this.shape_6.setTransform(39.2,3.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAhIAAhBIAOAAIAAA1IAfAAIAAAMg");
	this.shape_7.setTransform(33.4,3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaAhIAAhBIAaAAIAKABIAHADQADABACAEQACADAAAFQAAAEgDAFQgCAEgFABQAIABACAEQADAEABAGQgBAEgCAEQgCAFgEACQgDADgFABgAgNAWIANAAIAHgBQADgBABgBQACgCAAgEIgBgFIgEgDIgVgBgAgNgFIAJAAIAHgBQADAAADgCQACgCAAgDIgBgFIgGgDIgRAAg");
	this.shape_8.setTransform(27.1,3.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AATAhIAAgzIgNAzIgLAAIgNgzIAAAzIgMAAIAAhBIAUAAIAKAsIALgsIAVAAIAABBg");
	this.shape_9.setTransform(19.7,3.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AATAhIgHgPIgYAAIgGAPIgOAAIAahBIAMAAIAbBBgAgIAHIAQAAIgIgXg");
	this.shape_10.setTransform(12.5,3.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOAeQgIgFgEgIQgEgJAAgIQAAgJAFgIQAEgIAJgFQAHgDAHAAQAMAAAHAFQAHAFACAKIgNACQgCgEgEgEQgDgCgGAAQgIAAgEAFQgGAGAAAKQAAAKAGAHQAFAGAGAAQAFAAAEgCIAHgEIAAgJIgPAAIAAgJIAdAAIAAAZQgFAEgIADQgHADgJAAQgIAAgIgEg");
	this.shape_11.setTransform(5.4,3.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#020202").s().p("AjCAvQgLAAgHgIQgIgHAAgLIAAgpQAAgKAIgIQAHgIALAAIGFAAQALAAAHAIQAIAIAAAKIAAApQAAALgIAHQgHAIgLAAg");
	this.shape_12.setTransform(22.1,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.3,19.4);


(lib.bn5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8CDE3E").s().p("AgYAhIAAhBIAwAAIAAAMIgjAAIAAAOIAgAAIAAAJIggAAIAAATIAlAAIAAALg");
	this.shape.setTransform(40.2,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8CDE3E").s().p("AANAhIgagqIAAAqIgMAAIAAhBIANAAIAaArIAAgrIAMAAIAABBg");
	this.shape_1.setTransform(33.4,14.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8CDE3E").s().p("AgWAZQgKgJABgQQAAgIACgHIAHgJIAJgGQAHgDAGAAQAPAAAIAJQAKAJgBAPQABAQgKAJQgIAJgPAAQgOAAgIgJgAgMgQQgGAHAAAJQAAAKAGAHQAGAFAGAAQAIAAAFgFQAGgHAAgKQAAgJgGgHQgEgFgJAAQgGAAgGAFg");
	this.shape_2.setTransform(26.4,14.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8CDE3E").s().p("AgFAhIAAg1IgUAAIAAgMIA0AAIAAAMIgVAAIAAA1g");
	this.shape_3.setTransform(17.1,14.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8CDE3E").s().p("AgYAhIAAhBIAwAAIAAAMIgjAAIAAAOIAgAAIAAAJIggAAIAAATIAkAAIAAALg");
	this.shape_4.setTransform(11.2,14.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8CDE3E").s().p("AgbggIAlABIAHADIAGAFIACAIQAAAFgDAEQgDAEgEABQAGABAEADQADAFAAAFQAAAFgCAEQgCAEgEADQgEADgFAAIgmABgAgNAWIAUgBIAFgCQACgCAAgEIgCgFIgEgDIgVgBgAgNgFIARAAIAFgDQACgCAAgDIgBgFQgDgCgDAAIgJgBIgIAAg");
	this.shape_5.setTransform(4.6,14.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8CDE3E").s().p("AgYAgIAAg/IAwAAIAAAKIgjAAIAAAPIAgAAIAAAKIggAAIAAASIAkAAIAAAKg");
	this.shape_6.setTransform(39.6,3.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8CDE3E").s().p("AgWAgIAAg/IANAAIAAA0IAgAAIAAALg");
	this.shape_7.setTransform(33.7,3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8CDE3E").s().p("AgbgfIAbAAIAKAAIAHACIAFAGQACADAAAFQABAEgDAFQgEADgDACQAGABADAEQAEADAAAGQAAAFgDAEQgBAFgEACQgEADgFAAIgmAAgAgNAWIAMAAIAIgBIAFgCQABgDAAgDQAAgDgBgDIgEgCIgVgBgAgNgFIARAAQAEgBABgCQACgBAAgEQAAgDgBgCQgCgBgDgCIgSAAg");
	this.shape_8.setTransform(27.3,3.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8CDE3E").s().p("AATAgIAAgyIgNAyIgLAAIgNgyIAAAyIgOAAIAAg/IAVAAIALArIAMgrIAVAAIAAA/g");
	this.shape_9.setTransform(19.8,3.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8CDE3E").s().p("AASAgIgFgPIgaAAIgFAPIgPAAIAbg/IANAAIAbA/gAgIAGIARAAIgJgWg");
	this.shape_10.setTransform(12.4,3.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8CDE3E").s().p("AgOAeQgIgFgFgIQgDgJAAgIQAAgKAEgHQAEgIAJgFQAHgDAIAAQAMAAAHAFQAIAGACAJIgOACQgCgEgDgEQgFgCgFAAQgIAAgFAFQgFAGAAAKQAAALAFAFQAGAHAHgBQAEABAEgCQAFgCACgDIAAgIIgPAAIAAgJIAdAAIAAAYQgEAEgIAEQgHADgKAAQgIAAgIgEg");
	this.shape_11.setTransform(5.2,3.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D6302E").s().p("AjCAvQgLAAgHgIQgIgIAAgKIAAgpQAAgLAIgHQAHgIALAAIGFAAQAKAAAIAIQAIAHAAALIAAApQAAAKgIAIQgIAIgKAAg");
	this.shape_12.setTransform(22.1,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.3,19.7);


(lib.bn4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAkIAAg6IgWAAIAAgNIA4AAIAAANIgVAAIAAA6g");
	this.shape.setTransform(29.9,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPAkIgQgaIgFgEIgIgBIgDAAIAAAfIgPAAIAAhHIAgAAQALAAAEACQAGADADAEQACAFAAAHQABAIgGAFQgEADgJACIAHAGIAJAMIAJAOgAgRgEIAXgBQADgBABgCQABgCAAgDQAAgEgCgDQgCgCgDAAIgVAAg");
	this.shape_1.setTransform(23.4,16.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAUAkIgGgQIgcAAIgGAQIgPAAIAchHIAOAAIAdBHgAgJAHIASAAIgJgZg");
	this.shape_2.setTransform(15.6,16.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGAkIAAg6IgWAAIAAgNIA5AAIAAANIgWAAIAAA6g");
	this.shape_3.setTransform(9.6,16.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTAfQgIgGgBgNIAOgBQABAHAEADQAEAEAFAAQAHAAAEgDQADgDAAgEQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgFgDIgKgDQgNgDgEgCQgHgGAAgJQAAgGAEgFQADgFAGgCQAFgCAIAAQANAAAHAGQAHAGAAAKIgPAAQgBgFgDgDQgDgCgFAAQgFAAgEACQgBABAAAAQAAABgBAAQAAABAAABQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQAEADAHACQAKACAGAEQAFACADADQADAFAAAHQAAAGgDAFQgEAGgGADQgHACgJAAQgMAAgHgGg");
	this.shape_4.setTransform(3,16.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAcQgKgLAAgRQAAgKADgHIAHgKQAFgEAFgCQAHgEAHAAQAPABAKAJQAKALAAAQQAAARgKAKQgKALgPAAQgOgBgKgJgAgOgSQgFAHAAALQAAAMAFAGQAHAGAHAAQAIAAAGgFQAFgIAAgLQAAgLgFgHQgGgGgIAAQgHAAgHAGg");
	this.shape_5.setTransform(26.8,3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGAkIAAg7IgWAAIAAgMIA5AAIAAAMIgWAAIAAA7g");
	this.shape_6.setTransform(19.8,3.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNAiQgGgCgDgEQgCgDgCgFQgCgHAAgMIAAglIAPAAIABAyQABAEADADQAEADAEAAQAHAAADgDQACgCABgEIABgMIAAgnIAPAAIgBA3QgCAGgDADQgDAEgFACQgHADgIAAQgHAAgGgDg");
	this.shape_7.setTransform(12.9,3.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAUAkIgGgQIgcAAIgGAQIgPAAIAchHIAOAAIAdBHgAgJAHIASAAIgJgZg");
	this.shape_8.setTransform(5.6,3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.8,19.9);


(lib.bn3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaAkIAAhHIA0AAIAAAMIgmAAIAAAQIAjAAIAAALIgjAAIAAAUIAoAAIAAAMg");
	this.shape.setTransform(32.1,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAWAkIAAg4IgQA4IgLAAIgPg4IAAA4IgOAAIAAhHIAXAAIALAwIANgwIAWAAIAABHg");
	this.shape_1.setTransform(24.2,16.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAUAkIgGgRIgbAAIgHARIgQAAIAdhHIAOAAIAeBHgAgJAHIASAAIgJgZg");
	this.shape_2.setTransform(16.2,16.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQAhQgJgGgEgIQgEgKAAgJQAAgKAFgJQAFgJAJgFQAIgEAIAAQANAAAIAHQAIAFACAKIgPADQgBgGgFgDQgDgCgHAAQgIAAgGAFQgGAHAAALQAAAMAGAHQAGAGAIAAQAFAAAEgCQAFgCADgCIAAgJIgRAAIAAgLIAgAAIAAAbQgEAFgKADQgIAEgKAAQgJAAgJgFg");
	this.shape_3.setTransform(8.4,16.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGAkIAAg7IgWAAIAAgMIA5AAIAAAMIgWAAIAAA7g");
	this.shape_4.setTransform(37.1,3.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVAbQgKgJABgSQgBgRAKgJQAJgLAOAAQANAAAJAIQAEAGAEAIIgQADQAAgFgFgEQgDgDgHAAQgGAAgFAGQgFAGgBAMQABAMAFAHQAFAGAGAAQAGAAAEgEQAEgDACgJIAPAFQgEALgIAHQgHAGgMAAQgNAAgJgLg");
	this.shape_5.setTransform(30.2,3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbAkIAAhHIA1AAIAAAMIglAAIAAAQIAiAAIAAALIgiAAIAAAUIAmAAIAAAMg");
	this.shape_6.setTransform(23.2,3.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAkIAAhHIAOAAIAAA6IAkAAIAAANg");
	this.shape_7.setTransform(16.8,3.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAkIAAhHIA1AAIAAAMIglAAIAAAQIAjAAIAAALIgjAAIAAAUIAmAAIAAAMg");
	this.shape_8.setTransform(10.1,3.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTAfQgIgHgBgMIAOgBQABAHAFAEQAEADAEAAQAGAAAFgDQAEgDAAgEIgCgFIgFgDIgKgDQgNgDgEgCQgHgGAAgJQAAgFADgGQADgEAGgDQAHgDAHAAQANAAAHAGQAHAGAAALIgPAAQgBgFgCgDQgEgCgFAAQgGAAgDACQgDACAAADQAAABABAAQAAABAAAAQAAABABAAQAAABABAAQADADAIACQAOAEADACQAEACAEADQACAFAAAHQABAGgEAGQgEAGgGACQgGADgKAAQgMAAgHgHg");
	this.shape_9.setTransform(3,3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,20);


(lib.bn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAbQgJgKAAgRQAAgJACgIIAIgJQADgEAFgDQAIgDAHAAQAPAAAKAKQAKAKAAAQQAAAQgKALQgKAKgPAAQgPAAgJgKgAgNgRQgGAFABAMQgBALAGAHQAGAGAHABQAIgBAFgGQAHgGAAgMQgBgLgFgHQgFgFgJgBQgIAAgFAHg");
	this.shape.setTransform(19.5,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAjIAAhGIAvAAIAAAMIghAAIAAARIAcAAIAAALIgcAAIAAAeg");
	this.shape_1.setTransform(12.6,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AANAjIgbgsIAAAsIgNAAIAAhGIAOAAIAcAuIAAguIANAAIAABGg");
	this.shape_2.setTransform(5.7,3.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGAjIAAhGIANAAIAABGg");
	this.shape_3.setTransform(0.7,3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23,7.5);


(lib.bn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.info_txt = new cjs.Text("1", "bold 12px 'Arial'", "#FFFFFF");
	this.info_txt.name = "info_txt";
	this.info_txt.textAlign = "center";
	this.info_txt.lineHeight = 16;
	this.info_txt.lineWidth = 20;
	this.info_txt.parent = this;
	this.info_txt.setTransform(14.8,-1.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAhQgIgHgCgNIAQgBQABAIAEADQAEAEAFAAQAHAAAEgEQAEgDAAgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAgCgFgBIgLgEQgMgDgFgCQgGgHAAgJQAAgGACgFQAEgGAGgCQAGgDAIAAQAOAAAGAHQAIAGABALIgQABQgBgHgDgCQgEgDgFAAQgFAAgEADQgDACAAADQAAADADACQACADAJACIARAFQAFADAEADQACAGAAAHQABAFgEAHQgEAHgGACQgHADgKAAQgNAAgHgHg");
	this.shape.setTransform(26.9,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAmIAAhLIA2AAIAAANIgnAAIAAARIAkAAIAAALIgkAAIAAAVIAoAAIAAANg");
	this.shape_1.setTransform(20,17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOAmIgcgwIAAAwIgPAAIAAhLIAPAAIAeAyIAAgyIAOAAIAABLg");
	this.shape_2.setTransform(12.4,17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGAmIAAhLIANAAIAABLg");
	this.shape_3.setTransform(7.2,17);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZAmIAAhLIAPAAIAAA+IAkAAIAAANg");
	this.shape_4.setTransform(2.7,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.info_txt}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3.7,30,24.7);


(lib.big_circle_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"up":0,"down":1,"over":2,"disabled":3});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#5DC1E0","#02AED8","#1B8FC7","#3577BA","#3B6EB5","#3C68AD","#3E5EA1"],[0,0.055,0.212,0.373,0.475,0.592,0.843],0,-11.8,0,14).s().p("AiSBcQg8gmgBg2QABg1A8gmQA9gnBVAAQBWAAA9AnQA8AmABA1QgBA2g8AmQg9AnhWAAQhVAAg9gng");
	this.shape.setTransform(28.5,14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#337DC3","#3E5EA1","#3D5FA3","#376AB0","#366EB4","#347AC0","#337DC3"],[0.173,0.541,0.808,0.973,0.984,0.996,1],0,-18.9,0,21.1).s().p("AijCLQhEg6AAhRQAAhRBEg5QBEg6BfAAQBgAABEA6QBEA5AABRQAABRhEA6QhEA6hgAAQhfAAhEg6g");
	this.shape_1.setTransform(28.5,19.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#3E5EA1","#3E5EA1","#3E5EA1","#3E5EA1","#3A538D","#33416A"],[0,0,0.443,0.871,0.925,1],0,-19.5,0,21.7).s().p("AirCPQhHg7gBhUQABhTBHg7QBHg7BkgBQBkABBIA7QBHA7ABBTQgBBUhHA7QhIA8hkgBQhkABhHg8g");
	this.shape_2.setTransform(28.5,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#3E5EA1","#364878","#33416A","#3C4F82","#33416A","#3E5EA1"],[0,0.176,0.235,0.494,0.776,1],-27.7,0,27.2,0).s().p("AjECqQhThGAAhkQAAhiBThIQBShGByAAQBzAABTBGQBSBIAABiQAABkhSBGQhTBHhzAAQhyAAhShHg");
	this.shape_3.setTransform(28.5,25.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFFFFF","#BFBFBF","#2A2A2B","#020204"],[0,0.247,0.816,1],0,0,0,0,0,26).s().p("AjICwQhUhJABhnQgBhmBUhJQBUhJB0AAQB1AABUBJQBUBJgBBmQABBnhUBJQhUBJh1AAQh0AAhUhJg");
	this.shape_4.setTransform(28.5,25.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#7B7B7B","#FFFFFF","#D4D4D4","#6C6C6C","#464646","#434343","#A9A7A7","#7B7B7B"],[0,0.204,0.267,0.408,0.459,0.608,0.847,1],-28.5,0,28.5,0).s().p("AjICwQhUhJABhnQgBhmBUhJQBUhJB0AAQB1AABUBJQBUBJgBBmQABBnhUBJQhUBJh1AAQh0AAhUhJg");
	this.shape_5.setTransform(28.5,26);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#5DC1E0","#02AED8","#1B8FC7","#3577BA","#3B6EB5","#3C68AD","#3E5EA1"],[0,0.055,0.212,0.373,0.475,0.592,0.843],0,-13,0,15.5).s().p("AiXBmQg+gqgBg8QABg6A+grQBAgqBXAAQBYAAA/AqQBAArgBA6QABA8hAAqQg+AqhZAAQhXAAhAgqg");
	this.shape_6.setTransform(28.5,15.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#337DC3","#3E5EA1","#3D5FA3","#376AB0","#366EB4","#347AC0","#337DC3"],[0.173,0.541,0.808,0.973,0.984,0.996,1],0,-20.9,0,23.2).s().p("AioCZQhHg/AAhaQAAhZBHhAQBGg/BiAAQBjAABGA/QBHBAAABZQAABahHA/QhGBAhjAAQhiAAhGhAg");
	this.shape_7.setTransform(28.4,21.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#3E5EA1","#3E5EA1","#3E5EA1","#3E5EA1","#3A538D","#33416A"],[0,0,0.443,0.871,0.925,1],0,-21.5,0,23.8).s().p("AixCeQhJhCAAhcQAAhbBJhCQBKhBBnAAQBoAABKBBQBJBCAABbQAABchJBCQhKBBhoAAQhnAAhKhBg");
	this.shape_8.setTransform(28.4,22.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#3E5EA1","#364878","#33416A","#3C4F82","#33416A","#3E5EA1"],[0,0.176,0.235,0.494,0.776,1],-27.7,0,27.2,0).s().p("AjFCrQhShIAAhjQAAhjBShGQBShHBzAAQB0AABSBHQBSBGAABjQAABjhSBIQhSBGh0AAQhzAAhShGg");
	this.shape_9.setTransform(28.5,25.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FFFFFF","#BFBFBF","#2A2A2B","#020204"],[0,0.247,0.816,1],0,0,0,0,0,26).s().p("AjICwQhUhJAAhnQAAhmBUhJQBThJB1AAQB2AABTBJQBTBJABBmQgBBnhTBJQhTBJh2AAQh1AAhThJg");
	this.shape_10.setTransform(28.5,25.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#7B7B7B","#FFFFFF","#D4D4D4","#6C6C6C","#464646","#434343","#A9A7A7","#7B7B7B"],[0,0.204,0.267,0.408,0.459,0.608,0.847,1],-28.5,0,28.5,0).s().p("AjICwQhUhJAAhnQAAhmBUhJQBThJB1AAQB2AABTBJQBTBJABBmQgBBnhTBJQhTBJh2AAQh1AAhThJg");
	this.shape_11.setTransform(28.5,26);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#5DC1E0","#02AED8","#029ED1","#2685C7","#2F7CC3"],[0,0.302,0.439,0.698,0.859],0,-14.3,0,17).s().p("AiXBwQg+gvgBhBQABhAA+gvQBAgvBXAAQBZAAA+AvQBAAvgBBAQABBBhAAvQg+AvhZAAQhXAAhAgvg");
	this.shape_12.setTransform(28.5,16.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#5DC1E0","#02AED8","#029ED1","#2685C7","#2F7CC3"],[0,0.302,0.439,0.698,0.859],0,-19.6,0,21.7).s().p("AioCPQhGg7AAhUQAAhTBGg8QBGg8BiABQBkgBBFA8QBGA8ABBTQgBBUhGA7QhGA9hjgBQhiABhGg9g");
	this.shape_13.setTransform(28.4,20.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#5DC1E0","#02AED8","#029ED1","#2685C7","#2F7CC3"],[0,0.302,0.439,0.698,0.859],-0.6,26,0.7,-26.5).s().p("AixCUQhJg+AAhWQAAhVBJg+QBKg9BnAAQBoAABKA9QBJA+AABVQAABWhJA+QhKA9hoAAQhnAAhKg9g");
	this.shape_14.setTransform(28.4,21);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#5DC1E0","#02AED8","#02ACD8","#0B93D1","#1D8ACF","#2E78BA","#356DAE"],[0,0.055,0.075,0.322,0.475,0.675,0.843],-27.7,0,27.2,0).s().p("AjFCrQhShHAAhkQAAhiBShHQBThHByAAQB0AABRBHQBSBHAABiQAABkhSBHQhRBGh0AAQhyAAhThGg");
	this.shape_15.setTransform(28.5,25.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FFFFFF","#BFBFBF","#2A2A2B","#020204"],[0,0.247,0.816,1],0,0,0,0,0,26).s().p("AjICwQhThJAAhnQAAhmBThJQBUhJB0AAQB2AABTBJQBTBJABBmQgBBnhTBJQhTBJh2AAQh0AAhUhJg");
	this.shape_16.setTransform(28.5,25.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#7B7B7B","#FFFFFF","#D4D4D4","#6C6C6C","#464646","#434343","#A9A7A7","#7B7B7B"],[0,0.204,0.267,0.408,0.459,0.608,0.847,1],-28.5,0,28.5,0).s().p("AjICwQhThJAAhnQAAhmBThJQBUhKB0ABQB2gBBTBKQBTBJABBmQgBBnhTBJQhTBKh2gBQh0ABhUhKg");
	this.shape_17.setTransform(28.5,26);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#AFAFAF","#878787","#7C7C7C","#737373"],[0,0.302,0.549,0.859],0,-14.3,0,17).s().p("AiXBwQg/gvAAhBQAAhAA/gvQBAgvBXAAQBZAAA/AvQA/AvAABAQAABBg/AvQg/AvhZAAQhXAAhAgvg");
	this.shape_18.setTransform(28.5,17);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#AEAEAE","#919191","#7C7C7C","#737373"],[0,0.302,0.631,0.859],0,-19.5,0,21.8).s().p("AioCQQhGg8AAhUQAAhTBGg8QBGg7BiAAQBjAABGA7QBHA8AABTQAABUhHA8QhGA7hjABQhigBhGg7g");
	this.shape_19.setTransform(28.4,20.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#AEAEAE","#919191","#7C7C7C","#737373"],[0,0.302,0.631,0.859],-0.6,26.1,0.7,-26.4).s().p("AiwCUQhLg+AAhWQAAhVBLg+QBJg9BnAAQBoAABJA9QBLA+gBBVQABBWhLA+QhJA9hoAAQhmAAhKg9g");
	this.shape_20.setTransform(28.4,21);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#AEAEAE","#919191","#848484","#7C7C7C","#727272","#676767"],[0,0.055,0.255,0.475,0.612,0.843],-27.7,0,27.2,0).s().p("AjFCrQhShHAAhkQAAhiBShHQBThHByAAQB0AABSBHQBSBHAABiQAABkhSBHQhSBGh0AAQhzAAhShGg");
	this.shape_21.setTransform(28.5,25.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#FFFFFF","#BFBFBF","#2A2A2B","#020204"],[0,0.247,0.816,1],0,0,0,0,0,26).s().p("AjICwQhUhJABhnQgBhmBUhJQBUhJB0AAQB1AABUBJQBTBJAABmQAABnhTBJQhUBJh1AAQh0AAhUhJg");
	this.shape_22.setTransform(28.5,25.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#7B7B7B","#FFFFFF","#D4D4D4","#6C6C6C","#464646","#434343","#A9A7A7","#7B7B7B"],[0,0.204,0.267,0.408,0.459,0.608,0.847,1],-28.5,0,28.5,0).s().p("AjICwQhUhJABhnQgBhmBUhJQBUhJB0AAQB1AABUBJQBTBJAABmQAABnhTBJQhUBJh1AAQh0AAhUhJg");
	this.shape_23.setTransform(28.5,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,51);


(lib.bi1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKAaIgUggIAAAgIgKAAIAAgzIALAAIAUAiIAAgiIAKAAIAAAzg");
	this.shape.setTransform(28.1,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAaIAAgzIAmAAIAAAJIgbAAIAAAMIAZAAIAAAHIgZAAIAAAOIAcAAIAAAJg");
	this.shape_1.setTransform(23,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTAaIAAgzIAmAAIAAAJIgbAAIAAAMIAZAAIAAAHIgZAAIAAAOIAcAAIAAAJg");
	this.shape_2.setTransform(18.1,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AALAaIgMgTIgDgCIgGgBIgCAAIAAAWIgKAAIAAgzIAWAAQAHAAAEABQADACACAEQADACAAAGQAAAGgEAEQgEACgGABIAGAEIAMATgAgMgCIAIAAIAIgBIADgCIABgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAIgPAAg");
	this.shape_3.setTransform(13.1,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAUQgHgIAAgMQAAgLAHgIQAHgHAJAAQAKAAAGAFQAEAEACAGIgLADQgBgEgDgCQgDgDgEAAQgEAAgEAFQgEADAAAJQAAAJAEAEQAEAFAEAAQAEAAADgDQADgCABgHIALAEQgDAJgFAEQgGAEgIAAQgJAAgHgHg");
	this.shape_4.setTransform(7.4,11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOAWQgFgEgBgKIAKgBQABAGADACQAEADACAAQAFAAADgCQACgCAAgDIgBgEIgEgCIgGgCQgJgCgDgCQgFgEAAgHQAAgEACgDQACgDAFgCQAEgCAFAAQAJAAAFAEQAFAEABAIIgLAAQgBgDgCgCQgDgDgDAAQgCAAgEADQgBAAAAAAQAAABAAAAQgBABAAAAQAAAAAAABQAAABAAAAQAAABABAAQAAAAAAABQAAAAABAAQABACAHACIALADQAEACACACQACAFAAAEQAAAEgCAEQgDAFgFABQgEACgHAAQgIAAgGgFg");
	this.shape_5.setTransform(2.2,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRAaIAAgzIAKAAIAAAqIAZAAIAAAJg");
	this.shape_6.setTransform(22.8,2.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRAaIAAgzIAKAAIAAAqIAZAAIAAAJg");
	this.shape_7.setTransform(18.2,2.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJAZQgFgCgCgDQgCgCgBgEIgBgnIALAAIAAAjQABACADADQADACACABQAEgBADgCIADgEIAAgkIALAAIAAAaQAAAKgBADQgBAFgCACQgDACgEACQgDACgHAAQgFAAgEgCg");
	this.shape_8.setTransform(13,2.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRAaIAAgzIAjAAIAAAJIgYAAIAAAMIAUAAIAAAHIgUAAIAAAXg");
	this.shape_9.setTransform(8.2,2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.2,14.4);


(lib.vgfdgdgfdg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(211,210,219,0)","#D3D2DB","#C9C9D2","#B7B9C2","#A0A4AE"],[0,0.737,0.737,0.835,0.922,1],-14.3,-0.1,14.7,0.3).s().p("AhDMsQgdgCgTgRQgTgRABgWIABgDIAAAAICB4bICJAMIiCYaIAAABQgCAWgTAPQgTANgYAAIgHgBg");
	this.shape.setTransform(15.8,81.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#A0A4AE","#ACB0B9","#C3C6CE","#D1D3DA","#D6D7DE","#D4D5DD","#BDC0C8","#ADB1B9","#A3A7B1","#A0A4AE","#B9BBC4","#D6D5DE","#D3D2DB","rgba(211,210,219,0)","rgba(0,0,0,0)"],[0,0.031,0.098,0.165,0.224,0.224,0.259,0.294,0.333,0.384,0.506,0.627,0.737,0.737,1],-14.3,-0.1,14.7,0.3).s().p("AhDMsQgdgCgTgRQgTgRABgWIABgDIAAAAICB4bICJAMIiCYaIAAABQgCAWgTAPQgTANgYAAIgHgBg");
	this.shape_1.setTransform(15.8,81.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#656C74").s().p("Ag+AvQgagUgBgbQABgbAagTQAagUAkAAQAlAAAaAUQAbATgBAbQABAbgbAUQgaAUglAAQgkAAgagUg");
	this.shape_2.setTransform(9.5,157.7);

	this.instance = new lib.tret4();
	this.instance.parent = this;
	this.instance.setTransform(10,158.1,1,1,0,0,0,9,6.8);

	this.instance_1 = new lib.ghjgfjtyu6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9,157.7,1,1,0,0,0,9,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.3,164.9);


(lib.start_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.label = new lib.bn7();
	this.label.parent = this;
	this.label.setTransform(28.5,20.8,1,1,0,0,0,19.9,8.1);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

	// Слой 2
	this.fon = new lib.big_circle_btn();
	this.fon.parent = this;
	this.fon.setTransform(28.5,25.5,1,1,0,0,0,28.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,51);


(lib.select_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.label = new lib.bn3();
	this.label.parent = this;
	this.label.setTransform(26.9,20.8,1,1,0,0,0,20,10);

	this.fon = new lib.btn_fon_big();
	this.fon.parent = this;
	this.fon.setTransform(26.8,23.1,1,1,0,0,0,26.8,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fon},{t:this.label}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.6,46.2);


(lib.line_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.instance = new lib.hit_panel2btn();
	this.instance.parent = this;
	this.instance.setTransform(24.6,18.4,1.296,1.295,0,0,0,13.5,13.8);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.label = new lib.bn();
	this.label.parent = this;
	this.label.setTransform(24.7,15.7,1,1,0,0,0,15,10.5);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

	// Слой 2
	this.fon = new lib.line_fon_btn();
	this.fon.parent = this;
	this.fon.setTransform(24.6,21.9,1,1,0,0,0,24.6,21.9);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.1,49.2,43.9);


(lib.gfdgfgdfgf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dtgfsh5();
	this.instance.parent = this;
	this.instance.setTransform(17.5,59.1,1,1,0,0,0,17.5,58.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#365565","#426070","#607D8D","#86A1B3","#6A7C85","#84939A","#DDE1E3","#FFFFFF","#F9FAFA","#E8EBEE","#CBD3D8","#A3B1BB","#6E8694","#456577"],[0,0.051,0.137,0.231,0.439,0.478,0.616,0.678,0.718,0.769,0.827,0.89,0.957,1],0,58.7,0,-58.6).s().p("AkdJKIAAyTIF0AAQBLAAA9CsQA/CyAADrQAADohCC2Qg/CshGAAg");
	this.shape.setTransform(32,58.6);

	this.instance_1 = new lib.tyey5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.7,58.6,1,1,0,0,0,7,26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#365565","#426070","#607D8D","#86A1B3","#6A7C85","#84939A","#DDE1E3","#FFFFFF","#F9FAFA","#E8EBEE","#CBD3D8","#A3B1BB","#6E8694","#456577"],[0,0.051,0.137,0.231,0.439,0.478,0.616,0.678,0.718,0.769,0.827,0.89,0.957,1],0,31.7,0,-31.6).s().p("AjWE8IAAp3IDWAAQBGAAA6A3QBXBSAACuQAACThZBhQghAkgmAWQghASgWAAg");
	this.shape_1.setTransform(51.2,58.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72.8,117.6);


(lib.gdfgfd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tret54();
	this.instance.parent = this;
	this.instance.setTransform(24.3,42.6,1,1,0,0,0,19.5,8.5);

	this.instance_1 = new lib.tyy54();
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.9,19.1,1,1,0,0,0,18.5,16.5);

	this.instance_2 = new lib.tgre6534();
	this.instance_2.parent = this;
	this.instance_2.setTransform(31.9,19.1,1,1,0,0,0,18.5,16.5);

	this.instance_3 = new lib.grtet54();
	this.instance_3.parent = this;
	this.instance_3.setTransform(26.2,26.2,1,1,0,0,0,26.2,26.2);

	this.instance_4 = new lib.frygh54();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,53);


(lib.fvggfdg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.vgfdgdgfdg();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,14.6,82.4);
	this.instance.cache(-2,-2,33,169);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.6,-82.4,29.3,164.9);


(lib.btn_mute = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.iconmute_mc = new lib.mute_icon();
	this.iconmute_mc.parent = this;
	this.iconmute_mc.setTransform(15.3,11.3,1,1,0,0,0,6.1,7.5);

	this.timeline.addTween(cjs.Tween.get(this.iconmute_mc).wait(1));

	// Layer 2
	this.fonmute_mc = new lib.btn_fonc();
	this.fonmute_mc.parent = this;
	this.fonmute_mc.setTransform(15.3,13.6,1,1,0,0,0,15.3,13.6);

	this.timeline.addTween(cjs.Tween.get(this.fonmute_mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.6,27.3);


(lib.btn_info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.label = new lib.bn2();
	this.label.parent = this;
	this.label.setTransform(20.3,14.9,1,1,0,0,0,11.5,3.8);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

	// Слой 2
	this.fon = new lib.btn_middle();
	this.fon.parent = this;
	this.fon.setTransform(19,16.4,1,1,0,0,0,19,16.4);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38,32.8);


(lib.btn_fs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.label = new lib.bi1();
	this.label.parent = this;
	this.label.setTransform(19.1,13.7,1,1,0,0,0,15.1,7.2);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

	// Слой 1
	this.fon = new lib.btn_middle();
	this.fon.parent = this;
	this.fon.setTransform(19,16.4,1,1,0,0,0,19,16.4);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38,32.8);


(lib.betone_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.label = new lib.bn5();
	this.label.parent = this;
	this.label.setTransform(26.8,21.9,1,1,0,0,0,22.1,9.8);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

	// Слой 2
	this.fon = new lib.btn_fon_big();
	this.fon.parent = this;
	this.fon.setTransform(26.8,23.1,1,1,0,0,0,26.8,23.1);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.6,46.2);


(lib.betmax_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.label = new lib.bn6();
	this.label.parent = this;
	this.label.setTransform(27.6,21.2,1,1,0,0,0,22.1,9.7);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

	// Слой 2
	this.fon = new lib.btn_fon_big();
	this.fon.parent = this;
	this.fon.setTransform(26.8,23.1,1,1,0,0,0,26.8,23.1);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.6,46.2);


(lib.auto_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.label = new lib.bn4();
	this.label.parent = this;
	this.label.setTransform(27.9,19.5,1,1,0,0,0,16.4,9.9);

	this.timeline.addTween(cjs.Tween.get(this.label).wait(1));

	// Слой 2
	this.fon = new lib.btn_fon_big();
	this.fon.parent = this;
	this.fon.setTransform(26.8,23.1,1,1,0,0,0,26.8,23.1);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.6,46.2);


(lib.gfdgdfsgfd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.gdfgfd();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,26.5,26.5);
	this.instance.cache(-2,-2,57,57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-26.5,53,53);


(lib.gfsdgdghds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// Слой 1
	this.instance = new lib.gfdgdfsgfd("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(26.5,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:115.5},14).to({y:26.5},15).wait(1));

	// Слой 2
	this.instance_1 = new lib.fvggfdg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.2,207.8,1,1,0,0,0,-1,81);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.65,y:227.8},14).to({scaleY:1,y:207.8},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,209.3);


(lib.btn_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.anim_hand_btn = new lib.gfsdgdghds();
	this.anim_hand_btn.parent = this;
	this.anim_hand_btn.setTransform(51.6,104.6,1,1,0,0,0,26.5,104.6);

	this.instance = new lib.gfdgfgdfgf();
	this.instance.parent = this;
	this.instance.setTransform(36.4,242.9,1,1,0,0,0,36.4,58.8);
	this.instance.cache(-2,-2,77,122);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.anim_hand_btn}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78.1,301.7);


(lib.panel_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhK/As3MAAAhZtIRhAAIc1AAIAAC2IAAi2MBnpAAAMAAABZtgEgx+gQ1MAAAAxzMBj+AAAMAAAhK+MhOpAAAI1VAAgEg5egQ1IHgAAIngAAIAA8BIAAcBg");
	mask.setTransform(480,287.2);

	// Слой 5
	this.line5_btn = new lib.line_btn();
	this.line5_btn.parent = this;
	this.line5_btn.setTransform(618.7,540.3,1,1,0,0,0,24.6,21.9);

	this.line4_btn = new lib.line_btn();
	this.line4_btn.parent = this;
	this.line4_btn.setTransform(564,540.3,1,1,0,0,0,24.6,21.9);

	this.line3_btn = new lib.line_btn();
	this.line3_btn.parent = this;
	this.line3_btn.setTransform(509.4,540.3,1,1,0,0,0,24.6,21.9);

	this.line2_btn = new lib.line_btn();
	this.line2_btn.parent = this;
	this.line2_btn.setTransform(454.7,540.3,1,1,0,0,0,24.6,21.9);

	this.line1_btn = new lib.line_btn();
	this.line1_btn.parent = this;
	this.line1_btn.setTransform(400.1,540.3,1,1,0,0,0,24.6,21.9);

	this.line5_btn.mask = this.line4_btn.mask = this.line3_btn.mask = this.line2_btn.mask = this.line1_btn.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.line1_btn},{t:this.line2_btn},{t:this.line3_btn},{t:this.line4_btn},{t:this.line5_btn}]}).wait(1));

	// Слой 2
	this.mute_btn = new lib.btn_mute();
	this.mute_btn.parent = this;
	this.mute_btn.setTransform(134.3,541.3,1,1,0,0,0,15.3,13.6);

	this.start_btn = new lib.start_btn();
	this.start_btn.parent = this;
	this.start_btn.setTransform(812.1,539.8,1,1,0,0,0,28.5,25.5);

	this.maxbet_btn = new lib.betmax_btn();
	this.maxbet_btn.parent = this;
	this.maxbet_btn.setTransform(743.5,539.3,1,1,0,0,0,26.8,23.1);

	this.betone_btn = new lib.betone_btn();
	this.betone_btn.parent = this;
	this.betone_btn.setTransform(682.9,539.3,1,1,0,0,0,26.8,23.1);

	this.auto_btn = new lib.auto_btn();
	this.auto_btn.parent = this;
	this.auto_btn.setTransform(337.1,538.7,1,1,0,0,0,26.8,23.1);

	this.select_btn = new lib.select_btn();
	this.select_btn.parent = this;
	this.select_btn.setTransform(278.6,538.7,1,1,0,0,0,26.8,23.1);

	this.info_btn = new lib.btn_info();
	this.info_btn.parent = this;
	this.info_btn.setTransform(221.5,541.6,1,1,0,0,0,18.9,16.4);

	this.fullscr_btn = new lib.btn_fs();
	this.fullscr_btn.parent = this;
	this.fullscr_btn.setTransform(177.7,541.8,1,1,0,0,0,19,16.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C8C02").s().p("Ai6AvQgIAAgGgGQgGgFAAgJIAAg1QAAgIAGgGQAGgFAIgBIF1AAQAIABAGAFQAGAGAAAIIAAA1QAAAJgGAFQgGAGgIAAg");
	this.shape.setTransform(812.3,540.2);

	this.mute_btn.mask = this.start_btn.mask = this.maxbet_btn.mask = this.betone_btn.mask = this.auto_btn.mask = this.select_btn.mask = this.info_btn.mask = this.fullscr_btn.mask = this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.fullscr_btn},{t:this.info_btn},{t:this.select_btn},{t:this.auto_btn},{t:this.betone_btn},{t:this.maxbet_btn},{t:this.start_btn},{t:this.mute_btn}]}).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020202").s().p("Egx+AlfMAAAhK9MBj+AAAMAAABK9g");
	this.shape_1.setTransform(480,258.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#697B7F").s().p("Eg6eAAjIAAhFMB09AAAIAABFg");
	this.shape_2.setTransform(479.4,570.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#354D5C","#3F5766","#5A7384","#7F99AB","#63727C","#7C8991","#D9DDDF","#FFFFFF","#F8F9FA","#E5E9EB","#C6CED4","#9CAAB3","#677C8B","#425C6E"],[0,0.051,0.137,0.231,0.439,0.478,0.616,0.678,0.718,0.769,0.827,0.89,0.957,1],-374.3,0,374.4,0).s().p("Eg6eAERIAAohMB09AAAIAAIhg");
	this.shape_3.setTransform(479.4,540);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#61737C","#6C7D86","#8B959F","#A8ACB7","#818586","#DADBDB","#FFFFFF","#F8F9FA","#E5E9EB","#C6CED2","#9CAAB0","#677C87","#546B77"],[0,0.059,0.157,0.231,0.439,0.6,0.678,0.718,0.773,0.835,0.902,0.976,1],0,252.1,0,-252).s().p("Eg3LAnYMABihOvMBrIAAAMABtBOvg");
	this.shape_4.setTransform(480,253.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#354D5C","#3F5766","#5A7384","#7F99AB","#63727C","#7C8991","#D9DDDF","#FFFFFF","#F8F9FA","#E5E9EB","#C6CED4","#9CAAB3","#677C8B","#425C6E"],[0,0.051,0.137,0.231,0.439,0.478,0.616,0.678,0.718,0.769,0.827,0.89,0.957,1],0,257.3,0,-257.2).s().p("Eg5UAoMMABnhQXMBvRAAAMABxBQXg");
	this.shape_5.setTransform(480,257.2);

	this.instance = new lib.gfdgd();
	this.instance.parent = this;
	this.instance.setTransform(479.5,256.5,1,1,0,0,0,374.4,256.1);
	this.instance.alpha = 0.719;

	this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Слой 3
	this.btn_hand = new lib.btn_hand();
	this.btn_hand.parent = this;
	this.btn_hand.setTransform(879,161.8,1,1,0,0,0,39,150.8);

	this.btn_hand.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.btn_hand).wait(1));

	// Layer 3
	this.contgame = new lib.contgame();
	this.contgame.parent = this;
	this.contgame.setTransform(177.5,35.7,1,1,0,0,0,17.5,17.4);

	this.timeline.addTween(cjs.Tween.get(this.contgame).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(105.1,0.1,813,574.3);


// stage content:
(lib.panel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.panel_mc();
	this.instance.parent = this;
	this.instance.setTransform(439,276.9,1,1,0,0,0,480,287.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.fon_panel = new lib.fon_panel();
	this.fon_panel.parent = this;
	this.fon_panel.setTransform(480,287,1,1,0,0,0,480,287);

	this.timeline.addTween(cjs.Tween.get(this.fon_panel).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(439,276.7,1001,584.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MainSlot = (function () {
    function MainSlot() {
        this.testServer = false;
    }
    MainSlot.prototype.startSlot = function (gameId, partnerid, currency, userid, demo, token) {
        var _this = this;
        this.stats = new Stats();
        this.stats.setMode(0);
        this.stats.domElement.style.position = "fixed";
        //this.stats.domElement.style.right = "0px";
        this.stats.domElement.style.top = "0px";
        document.body.appendChild(this.stats.domElement);
        //PIXI.
        this.model = new ModelSlot();
        this.model.gameId = gameId;
        this.model.partnerid = partnerid;
        this.model.currency = currency;
        this.model.userid = userid;
        this.model.demo = demo;
        this.model.Token = token;
        soundManager = new SoundManager();
        //let size = [1280, 720];
        //let size = [1148, 632];
        var size = [1024, 720];
        this.ratio = size[0] / size[1];
        this.renderer = PIXI.autoDetectRenderer(size[0], size[1], null);
        this.renderer.view.style.position = 'absolute';
        this.renderer.view.style.left = '50%';
        this.renderer.view.style.top = '50%';
        this.renderer.view.style.transform = 'translate3d( -50%, -50%, 0 )';
        this.renderer.backgroundColor = 0x02274A;
        //this.renderer
        document.body.appendChild(this.renderer.view);
        this.renderer.resolution = window.devicePixelRatio || 2;
        this.mainStage = new PIXI.Container();
        /*let loader = PIXI.loader
            .add('panel_mc', '/panel/panel_mc.png')
            .add('panel_mob', '/panel/panel_mob.png')
            .add('gnome', '/panel/gnome.png')
            .add('/panel/web_panel.json');
        loader.on("complete", this.loading, this);
        loader.load();*/
        window.addEventListener('resize', function () { _this.resize(); }, false);
        this.animate();
        this.resize();
        var qc = new InitCommand();
        qc.addEventListener(EVENT_COMPLETE, function () { _this.completeInitCommad(); });
        qc.execute();
    };
    MainSlot.prototype.animate = function () {
        var _this = this;
        // start the timer for the next animation loop
        requestAnimationFrame(function () { return _this.animate(); });
        // this is the main render call that makes pixi draw your container and its children.
        this.renderer.render(this.mainStage);
        this.stats.update();
    };
    MainSlot.prototype.getTexturesForName = function (nameTextures, countTextures) {
        var texrures = [];
        var indexName = '';
        for (var i = 1; i <= countTextures; i++) {
            indexName = i.toString();
            if (indexName.length == 1) {
                indexName = "0" + indexName;
            }
            texrures.push(this.atlasPanel[nameTextures + indexName + ".png"]);
        }
        return texrures;
    };
    MainSlot.prototype.resize = function () {
        var w;
        var h;
        if (document.documentElement.clientWidth / document.documentElement.clientHeight >= this.ratio) {
            w = Math.ceil(document.documentElement.clientHeight * this.ratio);
            h = Math.ceil(document.documentElement.clientHeight);
        }
        else {
            w = Math.ceil(document.documentElement.clientWidth);
            h = Math.ceil(document.documentElement.clientWidth / this.ratio);
        }
        //console.log(w, h);
        this.renderer.view.style.width = w + 'px';
        this.renderer.view.style.height = h + 'px';
    };
    MainSlot.prototype.completeInitCommad = function () {
        //TO DO
        //this.panel.panel.getContainer().addChild(this.slot);
        //TO DO
        this.model.init();
    };
    MainSlot.prototype.setSlot = function (slot) {
        this.slot = slot;
    };
    /*public resize(): void {
        if (this.lastSize != this.getHashSize() && this.panel != null && this.panel.panel != null) {
            this.lastSize = this.getHashSize();
            this.mainCanvas.width = window.innerWidth;
            this.mainCanvas.height = window.innerHeight;
            this.panel.panel.resizePanel(window.innerWidth, window.innerHeight);
        }

        console.log("resize  " + window.innerWidth, window.innerHeight);
        console.log("canvas " + this.mainCanvas.width + "  " + this.mainCanvas.height);
    }*/
    MainSlot.prototype.getHashSize = function () {
        return "" + window.innerWidth + window.innerHeight;
    };
    MainSlot.prototype.tickHandler = function () {
        //console.log(createjs.Ticker.getMeasuredFPS());
    };
    MainSlot.prototype.bindSetter = function (host, property, callback) {
        if (!host[property + "_bindings"]) {
            host[property + "_bindings"] = [];
            host["_" + property] = host[property];
            Object.defineProperty(host, property, {
                get: function () {
                    return host["_" + property];
                },
                set: function (newValue) {
                    host["_" + property] = newValue;
                    host[property + "_bindings"].forEach(function (callback) {
                        callback(newValue);
                    });
                }
            });
        }
        host[property + "_bindings"].push(callback);
        callback(host[property]);
    };
    MainSlot.prototype.unbindSetter = function (host, property, callback) {
        var bindings = host[property + "_bindings"];
        if (bindings) {
            var index = bindings.indexOf(callback);
            if (index > -1) {
                bindings.splice(index, 1);
            }
        }
    };
    return MainSlot;
}());
//-------------------------------------------------------------------------------------------
var SoundManager = (function () {
    function SoundManager() {
        this.volume = 0.5;
        this._isMute = false;
        this.soundsList = new Array();
    }
    SoundManager.prototype.loadSounds = function (sounds) {
        createjs.Sound.addEventListener("fileload", this.handleFileLoad);
        createjs.Sound.alternateExtensions = ["mp3"];
        createjs.Sound.registerSounds(sounds);
    };
    SoundManager.prototype.handleFileLoad = function (event) {
        //console.log("Preloaded:", event.id, event.src);
    };
    SoundManager.prototype.playSound = function (name_sound, isRemove, loop, volume) {
        var _this = this;
        if (isRemove === void 0) { isRemove = true; }
        if (loop === void 0) { loop = 1; }
        if (volume === void 0) { volume = -1; }
        if (this._isMute)
            volume = 0;
        if (volume < 0)
            volume = this.volume;
        if (isRemove) {
            this.stopSound(name_sound);
        }
        var s = new SoundEnity(name_sound, loop, volume);
        s.addEventListener(SoundEnity.COMPLETE_SOUND, function (e) { _this.onCompleteSound(e); });
        this.soundsList.push(s);
        return s;
    };
    SoundManager.prototype.onCompleteSound = function (e) {
        var s = e.currentTarget;
        var ind = this.soundsList.indexOf(s);
        if (ind != -1) {
            this.soundsList.splice(ind, 1);
        }
    };
    SoundManager.prototype.stopSound = function (name_sound) {
        var ar = new Array();
        for (var i = 0; i < this.soundsList.length; i++) {
            if (this.soundsList[i].name_sound == name_sound)
                ar.push(this.soundsList[i]);
        }
        for (i = 0; i < ar.length; i++) {
            ar[i].completeSound();
        }
    };
    SoundManager.prototype.stopAllSound = function () {
        while (this.soundsList.length) {
            this.soundsList[0].completeSound();
        }
    };
    Object.defineProperty(SoundManager.prototype, "isMute", {
        get: function () {
            return this._isMute;
        },
        set: function (value) {
            this._isMute = value;
            if (this._isMute)
                this.stopAllSound();
        },
        enumerable: true,
        configurable: true
    });
    SoundManager.SOUND_BONUS = "bonus";
    SoundManager.SOUND_CARD_OPEN = "card_dealer_open";
    SoundManager.SOUND_CARDWIN = "cardwin";
    SoundManager.SOUND_KEY_PRESS = "key_press";
    SoundManager.SOUND_MONEY_MOVE = "money_move";
    SoundManager.SOUND_ROUTESTART = "route1time";
    SoundManager.SOUND_ROUTESTOP = "routestop";
    SoundManager.SOUND_ADDLINE = "addline";
    return SoundManager;
}());
//-------------------------------------------------------------------------------------------
var SoundEnity = (function (_super) {
    __extends(SoundEnity, _super);
    function SoundEnity(name_sound, loop, volume) {
        if (loop === void 0) { loop = 1; }
        if (volume === void 0) { volume = 1; }
        _super.call(this);
        this.name_sound = name_sound;
        this.volume = volume;
        this.loop = loop;
        this.startSound();
    }
    SoundEnity.prototype.startSound = function () {
        var _this = this;
        //console.log(this.name_sound + " startSound");
        //console.log(this.name_sound, 0, 0, this.loop, this.volume);
        this.isPlayed = true;
        this.sound = createjs.Sound.play(this.name_sound, "none", 0, 0, this.loop - 1, this.volume);
        this.sound.addEventListener(EVENT_COMPLETE, function () { _this.onCompleteSound(); });
    };
    SoundEnity.prototype.onCompleteSound = function () {
        var _this = this;
        //console.log(this.name_sound + " onCompleteSound");
        this.isPlayed = false;
        this.sound.removeEventListener(EVENT_COMPLETE, function () { _this.onCompleteSound(); });
        this.sound = null;
        this.dispatchEvent(SoundEnity.COMPLETE_SOUND);
    };
    SoundEnity.prototype.completeSound = function () {
        if (this.sound != null) {
            this.sound.stop();
            this.onCompleteSound();
        }
    };
    SoundEnity.COMPLETE_SOUND = "complete_sound";
    return SoundEnity;
}(createjs.EventDispatcher));
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
EVENT_COMPLETE = "complete";
EVENT_ONLOAD = "onload";
EVENT_CLICK = "click";
EVENT_MOUSEDOWN = "mousedown ";
EVENT_PRESSUP = "pressup";
EVENT_ROLLOVER = "rollover";
EVENT_ROLLOUT = "rollout ";
mainSlot = new MainSlot();
loadJS = function (path, callback) {
    console.log("loadjs -> " + path);
    var js_load = document.createElement("script");
    js_load.type = "text/javascript";
    js_load.src = path;
    js_load.onload = function (script) {
        console.log("loaded " + path);
        if (callback)
            callback.call(this);
    };
    document.getElementsByTagName('head')[0].appendChild(js_load);
};
loadJSManifest = function (path, callback) {
    loadJS(path, function () {
        loadManifest(function () {
            callback();
        });
    });
};
loadManifest = function (callback) {
    var _this = this;
    var loader = new createjs["LoadQueue"]();
    loader.addEventListener("fileload", function (evt) {
        if (evt.item.type == "image")
            images[evt.item.id] = evt.result;
    });
    loader.addEventListener("complete", function () {
        var ssMetadata = lib.ssMetadata;
        if (ssMetadata != null) {
            for (var i = 0; i < ssMetadata.length; i++) {
                var t = images[ssMetadata[i].name];
                var g = ssMetadata[i].frames;
                var sp = new createjs.SpriteSheet({ "images": [t], "frames": g });
                ss[ssMetadata[i].name] = sp;
            }
        }
        callback.call(_this);
    });
    loader.loadManifest(lib.properties.manifest);
};
//# sourceMappingURL=main_slot.js.map
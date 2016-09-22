class MainSlot {
    public testServer: boolean = false;

    public mainCanvas: HTMLCanvasElement;
    //public mainStage: createjs.Stage;

    public model: ModelSlot;
    public panel: PanelAdapter;
    public slot: ISlotEnity;
    private lastSize: string;

    private renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer;
    public mainStage: PIXI.Container;
    private bunny: any;
    private fon: PIXI.Sprite;
    private ratio: number;
    private stats: Stats;
    private mc: PIXI.extras.MovieClip;

    //словарь в котором соотносятся текстуры с именами.
    public atlasPanel: PIXI.loaders.TextureDictionary;

    constructor() {

    }

    public startSlot(gameId: number, partnerid: number, currency: string, userid: string, demo: number, token: string): void {

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
        let size = [1024, 720];
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

        window.addEventListener('resize', () => { this.resize(); }, false);

        this.animate();
        this.resize();

        var qc: InitCommand = new InitCommand();
        qc.addEventListener(EVENT_COMPLETE, () => { this.completeInitCommad(); });
        qc.execute();
    }

    private animate() {
        // start the timer for the next animation loop
        requestAnimationFrame(() => this.animate());

        // this is the main render call that makes pixi draw your container and its children.
        this.renderer.render(this.mainStage);

        this.stats.update();
    }

    public getTexturesForName(nameTextures: string, countTextures: number): PIXI.Texture[] {
        let texrures: PIXI.Texture[] = [];
        let indexName: string = '';

        for (var i: number = 1; i <= countTextures; i++) {
            indexName = i.toString();
            if (indexName.length == 1) {
                indexName = "0" + indexName;
            }
            texrures.push(this.atlasPanel[nameTextures + indexName + ".png"]);
        }

        return texrures;
    }

    public resize() {
        let w: number;
        let h: number;
        if (document.documentElement.clientWidth / document.documentElement.clientHeight >= this.ratio) {
            w = Math.ceil(document.documentElement.clientHeight * this.ratio);
            h = Math.ceil(document.documentElement.clientHeight);
        } else {
            w = Math.ceil(document.documentElement.clientWidth);
            h = Math.ceil(document.documentElement.clientWidth / this.ratio);
        }

        //console.log(w, h);

        this.renderer.view.style.width = w + 'px';
        this.renderer.view.style.height = h + 'px';
    }

    public completeInitCommad(): void {
        //TO DO
        //this.panel.panel.getContainer().addChild(this.slot);
        //TO DO
        this.model.init();
    }

    public setSlot(slot: ISlotEnity): void {
        this.slot = slot;
    }

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

    private getHashSize(): string {
        return "" + window.innerWidth + window.innerHeight;
    }


    private tickHandler(): void {
        //console.log(createjs.Ticker.getMeasuredFPS());
    }

    public bindSetter(host, property, callback) {
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
    }

    public unbindSetter(host, property, callback) {
        var bindings = host[property + "_bindings"];
        if (bindings) {
            var index = bindings.indexOf(callback);
            if (index > -1) {
                bindings.splice(index, 1);
            }
        }
    }
}

//-------------------------------------------------------------------------------------------

class SoundManager {
    public static SOUND_BONUS: string = "bonus";
    public static SOUND_CARD_OPEN: string = "card_dealer_open";
    public static SOUND_CARDWIN: string = "cardwin";
    public static SOUND_KEY_PRESS: string = "key_press";
    public static SOUND_MONEY_MOVE: string = "money_move";
    public static SOUND_ROUTESTART: string = "route1time";
    public static SOUND_ROUTESTOP: string = "routestop";
    public static SOUND_ADDLINE: string = "addline";

    public volume: number = 0.5;
    private _isMute: boolean = false;
    private soundsList: Array<SoundEnity> = new Array<SoundEnity>();

    public loadSounds(sounds: Array<Object>): void {
        createjs.Sound.addEventListener("fileload", this.handleFileLoad);
        createjs.Sound.alternateExtensions = ["mp3"];
        createjs.Sound.registerSounds(sounds);
    }

    private handleFileLoad(event) {
        //console.log("Preloaded:", event.id, event.src);
    }


    public playSound(name_sound: string, isRemove: boolean = true, loop: number = 1, volume: number = -1): SoundEnity {
        if (this._isMute)
            volume = 0;
        if (volume < 0)
            volume = this.volume;

        if (isRemove) {
            this.stopSound(name_sound);
        }
        var s: SoundEnity = new SoundEnity(name_sound, loop, volume);
        s.addEventListener(SoundEnity.COMPLETE_SOUND, (e: createjs.Event) => { this.onCompleteSound(e) });
        this.soundsList.push(s);
        return s;
    }

    public onCompleteSound(e: createjs.Event): void {
        var s: SoundEnity = e.currentTarget as SoundEnity;
        var ind: number = this.soundsList.indexOf(s);
        if (ind != -1) {
            this.soundsList.splice(ind, 1);
        }
    }

    public stopSound(name_sound: string): void {
        var ar: Array<SoundEnity> = new Array<SoundEnity>();
        for (var i: number = 0; i < this.soundsList.length; i++) {
            if (this.soundsList[i].name_sound == name_sound)
                ar.push(this.soundsList[i]);
        }

        for (i = 0; i < ar.length; i++) {
            ar[i].completeSound();
        }
    }

    public stopAllSound(): void {
        while (this.soundsList.length) {
            this.soundsList[0].completeSound();
        }
    }

    set isMute(value: boolean) {
        this._isMute = value;
        if (this._isMute)
            this.stopAllSound();
    }
    get isMute(): boolean {
        return this._isMute;
    }
}

//-------------------------------------------------------------------------------------------

class SoundEnity extends createjs.EventDispatcher {
    public static COMPLETE_SOUND: string = "complete_sound";
    public isPlayed: boolean;

    public name_sound: string;
    private volume: number;
    private loop: number;
    private sound: createjs.AbstractSoundInstance;

    constructor(name_sound: string, loop: number = 1, volume: number = 1) {
        super();
        this.name_sound = name_sound;
        this.volume = volume;
        this.loop = loop;

        this.startSound();
    }

    private startSound(): void {
        //console.log(this.name_sound + " startSound");
        //console.log(this.name_sound, 0, 0, this.loop, this.volume);
        this.isPlayed = true;

        this.sound = createjs.Sound.play(this.name_sound, "none", 0, 0, this.loop - 1, this.volume);
        this.sound.addEventListener(EVENT_COMPLETE, () => { this.onCompleteSound() });
    }
    private onCompleteSound(): void {
        //console.log(this.name_sound + " onCompleteSound");
        this.isPlayed = false;
        this.sound.removeEventListener(EVENT_COMPLETE, () => { this.onCompleteSound() });

        this.sound = null;
        this.dispatchEvent(SoundEnity.COMPLETE_SOUND);
    }


    public completeSound(): void {
        if (this.sound != null) {
            this.sound.stop();
            this.onCompleteSound();
        }
    }
}

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


loadJS = function (path: string, callback: () => void): void {
    console.log("loadjs -> " + path);
    var js_load = document.createElement("script");
    js_load.type = "text/javascript";
    js_load.src = path;
    js_load.onload = function (script) {
        console.log("loaded " + path);
        if (callback)
            callback.call(this);
    }
    document.getElementsByTagName('head')[0].appendChild(js_load);
}
loadJSManifest = function (path: string, callback: () => void): void {
    loadJS(path, () => {
        loadManifest(() => {
            callback();
        });
    });
}

loadManifest = function (callback: () => void): void {
    var loader = new createjs["LoadQueue"]();
    loader.addEventListener("fileload", (evt: any) => {
        if (evt.item.type == "image")
            images[evt.item.id] = evt.result;
    });
    loader.addEventListener("complete", () => {
        var ssMetadata = lib.ssMetadata;
        if (ssMetadata != null) {
            for (var i = 0; i < ssMetadata.length; i++) {
                var t = images[ssMetadata[i].name];
                var g = ssMetadata[i].frames;
                var sp = new createjs.SpriteSheet({ "images": [t], "frames": g });
                ss[ssMetadata[i].name] = sp;
            }
        }

        callback.call(this);
    });
    loader.loadManifest(lib.properties.manifest);
}


class PanelSlotWeb extends PIXI.Sprite implements IPanel {
    private nameBtns: Array<BtnInfo> = [
        new BtnInfo("fullscr_btn", "fon_middle_btn00", 68, 658, "FULL\nSCREEN", {font: '8px Arial'}),
        new BtnInfo("info_btn", "fon_middle_btn00", 123, 658, "INFO"),
        new BtnInfo("select_btn", "fon_big_btn00", 185, 647, "SELECT\nGAME"),
        new BtnInfo("auto_btn", "fon_big_btn00", 258, 647, "AUTO\nSTART"),
        new BtnInfo("betone_btn", "fon_big_btn00", 694, 647, "GAMBLE\nBET ONE", {fill: '#8CDE3E'}, 'red'),
        new BtnInfo("maxbet_btn", "fon_big_btn00", 770, 647, "GAMBLE\nMAX BET", {}, 'black'),
        new BtnInfo("start_btn", "fon_big_circle_btn00", 854, 645, "START\nTAKE WIN", {}, 'red')
    ];

    private linesBtn: Array<BtnInfo> = [
        new BtnInfo("line1_btn", "fon_line_btn00", 340, 650, "\nLINES", {},'',true),
        new BtnInfo("line2_btn", "fon_line_btn00", 409, 650, "\nLINES", {}, '', true),
        new BtnInfo("line3_btn", "fon_line_btn00", 478, 650, "\nLINES", {}, '', true),
        new BtnInfo("line4_btn", "fon_line_btn00", 547, 650, "\nLINES", {}, '', true),
        new BtnInfo("line5_btn", "fon_line_btn00", 616, 650, "\nLINES", {}, '', true)
    ];

    private indexlines: Array<number> = [1, 3, 5, 7, 9];
    private dictBtn: Object = new Object();
    private comboBtns: ComboBtns;
    private mute_btn: BtnMute;
    private anim_hand_btn: createjs.MovieClip;

    //словарь в котором соотносятся текстуры с именами.
    private atlas: PIXI.loaders.TextureDictionary;
    private mc: PIXI.extras.MovieClip;
    private loader: PIXI.loaders.Loader;

    private fon: PIXI.Sprite;
    private handler: PIXI.extras.MovieClip;

    private dictBtnType: Object = function (): Object {
        var map: Object = {
            "fullscr_btn": PanelEvent.FULL_SCREEN,
            "info_btn": PanelEvent.HELP,
            "select_btn": PanelEvent.SELECT_GAME,
            "auto_btn": PanelEvent.AUTO,
            "betone_btn": PanelEvent.BETONE,
            "maxbet_btn": PanelEvent.MAXBET,
            "start_btn": PanelEvent.START,
            "mute_btn": PanelEvent.MUTE
        }

        return map;
    } ();

    constructor() {
        super();

        this.init();
    }

    // метод создан для переопределения в случае с мобильной панелью
    public init(): void {
        this.loader = PIXI.loader.add('/panel/web_panel.json');
        this.loader.on("complete", this.completeLoad, this);
        this.loader.load();
    }

    private completeLoad() {

        mainSlot.atlasPanel = PIXI.loader.resources["/panel/web_panel.json"].textures;

        //Фон
        this.fon = new PIXI.Sprite(mainSlot.atlasPanel["panel.png"]);
        this.fon.position.x = 0
        this.fon.position.y = 0;
        // не знаю, необходимо ли сейчас и работает вообще, но пусть пока будет
        this.fon.cacheAsBitmap = true;
        this.addChild(this.fon);

        //Ручка
        this.handler = new PIXI.extras.MovieClip(mainSlot.getTexturesForName("handle00", 30));
        this.handler.loop = false;
        this.handler.interactive = true;
        //.animationSpeed = 2;
        this.handler.on("mousedown", (e: PIXI.interaction.InteractionEvent) => { this.onHand() });
        this.handler.on("touchstart", (e: PIXI.interaction.InteractionEvent) => { this.onHand() });
        this.handler.position.x = 957;
        this.handler.position.y = 14;
        this.addChild(this.handler);

        this.mute_btn = new BtnMute();
        this.mute_btn.position.x = 18;
        this.mute_btn.position.y = 662;
        this.mute_btn.on(BtnMute.EXCHANGE_MUTE, () => { this.onMute() });
        this.addChild(this.mute_btn);

        //Кнопки все кроме линий
        this.createBtnsOnName(this.nameBtns, true);

        //Кнопки линий
        this.setComboBtns(this.linesBtn);

        // если на экране нихера не видно, значит я закомментил тебя)
        this.emit(EVENT_ONLOAD);
    }

    private createBtnsOnName(ar: Array<BtnInfo>, isAddListener: boolean): Array<BtnPanel> {
        var btns: Array<BtnPanel> = new Array<BtnPanel>();
        for (var i: number = 0; i < ar.length; i++) {
            var btnAnimate: BtnPanel = new BtnPanel(ar[i].skin, ar[i].name, ar[i].text, ar[i].style, ar[i].substrate, ar[i].creatlabel);
            this.dictBtn[ar[i].name] = btnAnimate;
            btns.push(btnAnimate);
            if (isAddListener) {
                //"tap","click"
                //btnAnimate.on("mousedown", (e: PIXI.interaction.InteractionEvent) => { this.onBtn(e) });
                btnAnimate.on(BtnPanel.CLICK_BTN, (nameBtn: string) => { this.onBtn(nameBtn) });

            }
            btnAnimate.position.x = ar[i].x;
            btnAnimate.position.y = ar[i].y;
            this.addChild(btnAnimate);
        }
        return btns;
    }

    private setComboBtns(ar: Array<BtnInfo>): void {
        var arComboBtns: Array<BtnPanel> = this.createBtnsOnName(ar, false);
        for (var i: number = 0; i < ar.length; i++)
            arComboBtns[i].setLabel("" + this.indexlines[i]);

        this.comboBtns = new ComboBtns(arComboBtns);
        //this.comboBtns.addEventListener(ComboBtns.EXCHANGE_SELECT, (e: createjs.Event) => { this.onSelectLine(e) });
        this.comboBtns.on(ComboBtns.EXCHANGE_SELECT, (e: PIXI.interaction.InteractionEvent) => { this.onSelectLine(e) });
        this.comboBtns.selectBtnOnData(1, false);
    }

    private animHand(): void {
        this.anim_hand_btn.gotoAndPlay(2);
    }

    private getNameEventByBtn(nameBtn: string): string {
        return this.dictBtnType[nameBtn];
    }
    private getNameBtnByTypeEvent(nameEvent: string): string {
        for (var s in this.dictBtnType) {
            if (this.dictBtnType[s] == nameEvent)
                return s;
        }
        return null;
    }

    private onMute(): void {
        this.emit(PanelEvent.PANEL_EVENT, new PanelEvent(PanelEvent.MUTE, this.mute_btn.isMute ? 0 : 1));
    }

    private onBtn(nameBtn:string): void {
        this.onActionBtn(nameBtn);
    }

    private onSelectLine(e: PIXI.interaction.InteractionEvent): void {
        this.emit(PanelEvent.PANEL_EVENT, new PanelEvent(PanelEvent.SELECT_LINE, this.comboBtns.selectIndex));
    }

    private onActionBtn(nameBtn: string): void {
        this.emit(PanelEvent.PANEL_EVENT, new PanelEvent(this.getNameEventByBtn(nameBtn)));
    }

    private onHand(): void {
        this.handler.gotoAndPlay(2);
        this.onActionBtn("start_btn");
    }

    public getContainer(): PIXI.Sprite {
        //return this.mc["contgame"];
        //TO DO
        return this.mc;
    }

    public setModeComboBet(nom: number): void {
        this.comboBtns.selectBtnOnData(nom, false);
    }
    public blockBtnByType(nameBtn: string, isBlock: boolean): void {
        var nb: string = this.getNameBtnByTypeEvent(nameBtn);

        if (nb != null && this.dictBtn[nb] != null)
            this.dictBtn[nb].enabled = !isBlock;
    }
    public blockLineBtn(nom: number, isBlock: boolean): void {
        if (this.dictBtn && this.dictBtn[this.linesBtn[nom].name])
            this.dictBtn[this.linesBtn[nom].name].enabled = !isBlock;
    }
    public blockAll(): void {
        for (var s in this.dictBtn)
            this.dictBtn[s].enabled = false;
        this.blockComboBtns();
    }

    public unBlockAll(): void {
        for (var s in this.dictBtn)
            this.dictBtn[s].enabled = true;
        this.comboBtns.enabled = true;
    }

    public blockComboBtns(): void {
        this.comboBtns.enabled = false;
    }

    public setModeSelector(value: boolean): void {
        this.comboBtns.modeSelector = value;
    }
    public setLabelBtn(typeBtn: String, str: String): void {
    }
    public setTotalBet(value: Number): void {
    }
}

class BtnInfo {
    public name: string;
    public skin: string;
    public x: number;
    public y: number;

    public text: string;
    public style: PIXI.TextStyle = {
        align: 'center',
        font: '11px Arial',
        fill: '#ffffff',
        letterSpacing: 1,
        wordWrap: true
    };

    public substrate: string = '';
    public creatlabel: boolean = false;

    constructor(name: string, skin: string, x: number, y: number, text: string, style?: PIXI.TextStyle, substrate?: string, creatlabel?: boolean) {
        this.name = name;
        this.skin = skin;
        this.x = x;
        this.y = y;
        this.text = text;

        if (style) {
            for (var item in style) {
                this.style[item] = (this.style[item] != style[item]) ? style[item] : this.style[item];
            }
        }
        if (substrate) {
            this.substrate = substrate;
        }

        if (creatlabel) {
            this.creatlabel = creatlabel;
        }
    }
}

//-------------------------------------------------------------------------------------------

class BtnMute extends PIXI.Sprite {
    public static EXCHANGE_MUTE: string = "exchange_mute";
    private fon: PIXI.extras.MovieClip;
    private icon: PIXI.extras.MovieClip;
    public isMute: Boolean = false;

    constructor() {
        super();

        this.fon = new PIXI.extras.MovieClip(mainSlot.getTexturesForName("fon_mute_btn00", 2));
        this.fon.interactive = true;
        this.fon.on("mousedown", (e: PIXI.interaction.InteractionEvent) => { this.onBtn() });
        this.fon.on("touchstart", (e: PIXI.interaction.InteractionEvent) => { this.onBtn() });
        this.addChild(this.fon);

        this.icon = new PIXI.extras.MovieClip(mainSlot.getTexturesForName("icon_mute_btn00", 2));
        this.icon.interactive = false;
        this.icon.position.x = 11;
        this.icon.position.y = 5;
        this.addChild(this.icon);

        //дефолтная установка звука: "ЗВУК ВЫКЛЮЧЕН"
        this.setMute(false);
    }

    private onBtn(): void {
        this.setMute(!this.isMute);
        this.emit(BtnMute.EXCHANGE_MUTE);
    }

    private setMute(value: Boolean): void {
        this.isMute = value;
        this.icon.gotoAndStop(this.isMute ? 1 : 0);
        this.fon.gotoAndStop(this.isMute ? 1 : 0);
    }
}

//-------------------------------------------------------------------------------------------

class BtnPanel extends PIXI.Sprite {
    public static CLICK_BTN: string = "click_btn";

    public static STATE_UP: number = 0;
    public static STATE_DOWN: number = 1;
    public static STATE_OVER: number = 2;
    public static STATE_DISABLED: number = 3;

    private skinName: string;
    public name: string;
    private _dataIndex: number;
    private _isModeCB: boolean = false;
    private state: number;
    private labelY: number;

    private fon: PIXI.extras.MovieClip;
    private label: PIXI.Text;
    private style: PIXI.TextStyle;
    private text: string;
    private substrate: string;
    private substrate_mc: PIXI.Sprite;
    private labelIndex: PIXI.Text;
    private creatLabel: boolean = false;

    constructor(skinName: string, nameBtn: string, text: string, style: PIXI.TextStyle, substrate: string, creatLabel: boolean) {
        super();
        //this.interactive = true;
        //this.btn = btn;
        this.name = nameBtn;
        this.style = style;
        this.text = text;
        this.substrate = substrate;

        this.fon = new PIXI.extras.MovieClip(mainSlot.getTexturesForName(skinName, 4));
        this.fon.interactive = true;
        this.fon.on("mousedown", (e: PIXI.interaction.InteractionEvent) => { this.onUpBtn(e) });
        this.fon.on("touchstart", (e: PIXI.interaction.InteractionEvent) => { this.onUpBtn(e) });
        this.addChild(this.fon);

        if (this.substrate != '') {
            let nameSubstrate = (this.substrate == 'black') ? '_black' : '';

            this.substrate_mc = new PIXI.Sprite(mainSlot.atlasPanel["fon_label" + nameSubstrate + "_btn.png"]);
            this.addChild(this.substrate_mc);
        }

        this.label = new PIXI.Text();
        this.label.text = this.text;
        this.label.style = this.style;
        this.addChild(this.label);
        this.label.position.x = Math.round(this.fon.width / 2 - this.label.width / 2);
        this.label.position.y = Math.round(this.fon.height / 2.5 - this.label.height / 2);
        //this.label.resolution = 2;

        if (this.substrate_mc) {
            this.substrate_mc.width = this.label.width + 5;
            this.substrate_mc.position.x = this.label.position.x - 2.5;
            this.substrate_mc.position.y = this.label.position.y + this.label.height - this.substrate_mc.height;
        }

        if (creatLabel) {

            let styleLabelIndex: PIXI.TextStyle = {
                align: 'center',
                font: '16px Arial',
                fill: '#ffffff',
                letterSpacing: 1,
                wordWrap: true
            };

            this.labelIndex = new PIXI.Text();
            this.labelIndex.text = '0';
            this.labelIndex.style = styleLabelIndex;
            this.labelIndex.position.x = Math.round(this.fon.width / 2 - this.labelIndex.width / 2);
            this.labelIndex.position.y = Math.round(this.label.position.y - this.labelIndex.height/4);
            this.addChild(this.labelIndex);
        }

        //btn.addEventListener(EVENT_MOUSEDOWN, () => { this.onPressBtn() });
        //btn.addEventListener(EVENT_PRESSUP, () => { this.onUpBtn() });
        //btn.addEventListener(EVENT_ROLLOVER, () => { this.onOverBtn() });
        //btn.addEventListener(EVENT_ROLLOUT, () => { this.onOutBtn() });

        //this.labelY = btn["label"].y;
        //this.setMode(BtnPanel.STATE_UP);
    }

    private setMode(newState: number): void {
        // if (!this.btn.buttonMode && newState != BtnPanel.STATE_DISABLED)
        //     return;
        if (newState != BtnPanel.STATE_OVER)
            this.state = newState;
        this.fon.gotoAndStop(newState);

        /*if (this.state == BtnPanel.STATE_DOWN)
            this.btn["label"].y = this.labelY + 3;
        else
            this.btn["label"].y = this.labelY;*/
    }

    private onPressBtn(): void {
        if (this.state == BtnPanel.STATE_DISABLED)
            return;

        this.setMode(BtnPanel.STATE_DOWN);
    }

    private onUpBtn(e: PIXI.interaction.InteractionEvent): void {
        if (this.state == BtnPanel.STATE_DISABLED)
            return;
        if (!this._isModeCB)
            this.setMode(BtnPanel.STATE_UP);

        console.log(EVENT_CLICK);
        this.emit(BtnPanel.CLICK_BTN, this.name);
    }

    private onOverBtn(): void {
        if (this.state == BtnPanel.STATE_DISABLED)
            return;

        if (this.state == BtnPanel.STATE_UP)
            this.setMode(BtnPanel.STATE_OVER);
    }
    private onOutBtn(): void {
        if (this.state == BtnPanel.STATE_DISABLED)
            return;

        if (this.state == BtnPanel.STATE_UP)
            this.setMode(BtnPanel.STATE_UP);
        else if (this.state == BtnPanel.STATE_DOWN && !this._isModeCB)
            this.setMode(BtnPanel.STATE_UP);
    }

    public set dataIndex(value: number) {
        this._dataIndex = value;
    }

    public get dataIndex(): number {
        return this._dataIndex;
    }

    public get isModeCB(): boolean {
        return this._isModeCB;
    }

    public set isModeCB(value: boolean) {
        this._isModeCB = value;
    }

    public set enabled(value: Boolean) {
        this.setMode(value ? BtnPanel.STATE_UP : BtnPanel.STATE_DISABLED);
        this.alpha = value ? 1 : 0.5;
    }

    public setPosition(newState: number): void {
        this.setMode(newState);
    }

    public setLabel(str: string): void {
        if (this.labelIndex != null) {
            this.labelIndex.text = str;
        }
    }
}

//-------------------------------------------------------------------------------------------

class ComboBtns extends PIXI.utils.EventEmitter {
    public static EXCHANGE_SELECT: string = "exchange_select";

    private btns: Array<BtnPanel>;
    private dataIndex: Array<number>;

    public selectIndex: number;
    public modeSelector: boolean = false;

    constructor(btns: Array<BtnPanel>) {
        super();
        this.btns = btns;

        for (var i: number = 0; i < btns.length; i++) {
            var btn: BtnPanel = btns[i];

            btn.isModeCB = true;
            btn.dataIndex = i;
            btn.on(BtnPanel.CLICK_BTN, (nameBtn: string) => { this.onBtn(nameBtn) });
        }
    }

    private onBtn(nameBtn: string): void {
        for (var i: number = 0; i < this.btns.length; i++) {
            if (this.btns[i].name == nameBtn) {
                this.selectBtnOnData(this.btns[i].dataIndex);
                return;
            }
        }
    }

    public selectBtnOnData(dataIndex: number, isDispatch: boolean = true): void {
        if (this.modeSelector) {
            for (var i: number = 0; i < this.btns.length; i++) {
                var an: BtnPanel = this.btns[i];
                if (an.dataIndex == dataIndex)
                    an.setPosition(BtnPanel.STATE_DOWN);
                else
                    an.setPosition(BtnPanel.STATE_UP);
            }
        }
        else {
            this.btns[dataIndex].setPosition(BtnPanel.STATE_UP);
        }
        this.selectIndex = dataIndex;
        if (isDispatch) {
            console.log(ComboBtns.EXCHANGE_SELECT);
            this.emit(ComboBtns.EXCHANGE_SELECT);
        }
    }

    public set enabled(value: Boolean) {
        for (var i: number = 0; i < this.btns.length; i++) {
            this.btns[i].enabled = value;

        }
    }
}

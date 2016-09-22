var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PanelSlotWeb = (function (_super) {
    __extends(PanelSlotWeb, _super);
    function PanelSlotWeb() {
        _super.call(this);
        this.nameBtns = [
            new BtnInfo("fullscr_btn", "fon_middle_btn00", 68, 658, "FULL\nSCREEN", { font: '8px Arial' }),
            new BtnInfo("info_btn", "fon_middle_btn00", 123, 658, "INFO"),
            new BtnInfo("select_btn", "fon_big_btn00", 185, 647, "SELECT\nGAME"),
            new BtnInfo("auto_btn", "fon_big_btn00", 258, 647, "AUTO\nSTART"),
            new BtnInfo("betone_btn", "fon_big_btn00", 694, 647, "GAMBLE\nBET ONE", { fill: '#8CDE3E' }, 'red'),
            new BtnInfo("maxbet_btn", "fon_big_btn00", 770, 647, "GAMBLE\nMAX BET", {}, 'black'),
            new BtnInfo("start_btn", "fon_big_circle_btn00", 854, 645, "START\nTAKE WIN", {}, 'red')
        ];
        this.linesBtn = [
            new BtnInfo("line1_btn", "fon_line_btn00", 340, 650, "\nLINES", {}, '', true),
            new BtnInfo("line2_btn", "fon_line_btn00", 409, 650, "\nLINES", {}, '', true),
            new BtnInfo("line3_btn", "fon_line_btn00", 478, 650, "\nLINES", {}, '', true),
            new BtnInfo("line4_btn", "fon_line_btn00", 547, 650, "\nLINES", {}, '', true),
            new BtnInfo("line5_btn", "fon_line_btn00", 616, 650, "\nLINES", {}, '', true)
        ];
        this.indexlines = [1, 3, 5, 7, 9];
        this.dictBtn = new Object();
        this.dictBtnType = function () {
            var map = {
                "fullscr_btn": PanelEvent.FULL_SCREEN,
                "info_btn": PanelEvent.HELP,
                "select_btn": PanelEvent.SELECT_GAME,
                "auto_btn": PanelEvent.AUTO,
                "betone_btn": PanelEvent.BETONE,
                "maxbet_btn": PanelEvent.MAXBET,
                "start_btn": PanelEvent.START,
                "mute_btn": PanelEvent.MUTE
            };
            return map;
        }();
        this.init();
    }
    // метод создан для переопределения в случае с мобильной панелью
    PanelSlotWeb.prototype.init = function () {
        this.loader = PIXI.loader.add('/panel/web_panel.json');
        this.loader.on("complete", this.completeLoad, this);
        this.loader.load();
    };
    PanelSlotWeb.prototype.completeLoad = function () {
        var _this = this;
        mainSlot.atlasPanel = PIXI.loader.resources["/panel/web_panel.json"].textures;
        //Фон
        this.fon = new PIXI.Sprite(mainSlot.atlasPanel["panel.png"]);
        this.fon.position.x = 0;
        this.fon.position.y = 0;
        // не знаю, необходимо ли сейчас и работает вообще, но пусть пока будет
        this.fon.cacheAsBitmap = true;
        this.addChild(this.fon);
        //Ручка
        this.handler = new PIXI.extras.MovieClip(mainSlot.getTexturesForName("handle00", 30));
        this.handler.loop = false;
        this.handler.interactive = true;
        //.animationSpeed = 2;
        this.handler.on("mousedown", function (e) { _this.onHand(); });
        this.handler.on("touchstart", function (e) { _this.onHand(); });
        this.handler.position.x = 957;
        this.handler.position.y = 14;
        this.addChild(this.handler);
        this.mute_btn = new BtnMute();
        this.mute_btn.position.x = 18;
        this.mute_btn.position.y = 662;
        this.mute_btn.on(BtnMute.EXCHANGE_MUTE, function () { _this.onMute(); });
        this.addChild(this.mute_btn);
        //Кнопки все кроме линий
        this.createBtnsOnName(this.nameBtns, true);
        //Кнопки линий
        this.setComboBtns(this.linesBtn);
        // если на экране нихера не видно, значит я закомментил тебя)
        this.emit(EVENT_ONLOAD);
    };
    PanelSlotWeb.prototype.createBtnsOnName = function (ar, isAddListener) {
        var _this = this;
        var btns = new Array();
        for (var i = 0; i < ar.length; i++) {
            var btnAnimate = new BtnPanel(ar[i].skin, ar[i].name, ar[i].text, ar[i].style, ar[i].substrate, ar[i].creatlabel);
            this.dictBtn[ar[i].name] = btnAnimate;
            btns.push(btnAnimate);
            if (isAddListener) {
                //"tap","click"
                //btnAnimate.on("mousedown", (e: PIXI.interaction.InteractionEvent) => { this.onBtn(e) });
                btnAnimate.on(BtnPanel.CLICK_BTN, function (nameBtn) { _this.onBtn(nameBtn); });
            }
            btnAnimate.position.x = ar[i].x;
            btnAnimate.position.y = ar[i].y;
            this.addChild(btnAnimate);
        }
        return btns;
    };
    PanelSlotWeb.prototype.setComboBtns = function (ar) {
        var _this = this;
        var arComboBtns = this.createBtnsOnName(ar, false);
        for (var i = 0; i < ar.length; i++)
            arComboBtns[i].setLabel("" + this.indexlines[i]);
        this.comboBtns = new ComboBtns(arComboBtns);
        //this.comboBtns.addEventListener(ComboBtns.EXCHANGE_SELECT, (e: createjs.Event) => { this.onSelectLine(e) });
        this.comboBtns.on(ComboBtns.EXCHANGE_SELECT, function (e) { _this.onSelectLine(e); });
        this.comboBtns.selectBtnOnData(1, false);
    };
    PanelSlotWeb.prototype.animHand = function () {
        this.anim_hand_btn.gotoAndPlay(2);
    };
    PanelSlotWeb.prototype.getNameEventByBtn = function (nameBtn) {
        return this.dictBtnType[nameBtn];
    };
    PanelSlotWeb.prototype.getNameBtnByTypeEvent = function (nameEvent) {
        for (var s in this.dictBtnType) {
            if (this.dictBtnType[s] == nameEvent)
                return s;
        }
        return null;
    };
    PanelSlotWeb.prototype.onMute = function () {
        this.emit(PanelEvent.PANEL_EVENT, new PanelEvent(PanelEvent.MUTE, this.mute_btn.isMute ? 0 : 1));
    };
    PanelSlotWeb.prototype.onBtn = function (nameBtn) {
        this.onActionBtn(nameBtn);
    };
    PanelSlotWeb.prototype.onSelectLine = function (e) {
        this.emit(PanelEvent.PANEL_EVENT, new PanelEvent(PanelEvent.SELECT_LINE, this.comboBtns.selectIndex));
    };
    PanelSlotWeb.prototype.onActionBtn = function (nameBtn) {
        this.emit(PanelEvent.PANEL_EVENT, new PanelEvent(this.getNameEventByBtn(nameBtn)));
    };
    PanelSlotWeb.prototype.onHand = function () {
        this.handler.gotoAndPlay(2);
        this.onActionBtn("start_btn");
    };
    PanelSlotWeb.prototype.getContainer = function () {
        //return this.mc["contgame"];
        //TO DO
        return this.mc;
    };
    PanelSlotWeb.prototype.setModeComboBet = function (nom) {
        this.comboBtns.selectBtnOnData(nom, false);
    };
    PanelSlotWeb.prototype.blockBtnByType = function (nameBtn, isBlock) {
        var nb = this.getNameBtnByTypeEvent(nameBtn);
        if (nb != null && this.dictBtn[nb] != null)
            this.dictBtn[nb].enabled = !isBlock;
    };
    PanelSlotWeb.prototype.blockLineBtn = function (nom, isBlock) {
        if (this.dictBtn && this.dictBtn[this.linesBtn[nom].name])
            this.dictBtn[this.linesBtn[nom].name].enabled = !isBlock;
    };
    PanelSlotWeb.prototype.blockAll = function () {
        for (var s in this.dictBtn)
            this.dictBtn[s].enabled = false;
        this.blockComboBtns();
    };
    PanelSlotWeb.prototype.unBlockAll = function () {
        for (var s in this.dictBtn)
            this.dictBtn[s].enabled = true;
        this.comboBtns.enabled = true;
    };
    PanelSlotWeb.prototype.blockComboBtns = function () {
        this.comboBtns.enabled = false;
    };
    PanelSlotWeb.prototype.setModeSelector = function (value) {
        this.comboBtns.modeSelector = value;
    };
    PanelSlotWeb.prototype.setLabelBtn = function (typeBtn, str) {
    };
    PanelSlotWeb.prototype.setTotalBet = function (value) {
    };
    return PanelSlotWeb;
}(PIXI.Sprite));
var BtnInfo = (function () {
    function BtnInfo(name, skin, x, y, text, style, substrate, creatlabel) {
        this.style = {
            align: 'center',
            font: '11px Arial',
            fill: '#ffffff',
            letterSpacing: 1,
            wordWrap: true
        };
        this.substrate = '';
        this.creatlabel = false;
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
    return BtnInfo;
}());
//-------------------------------------------------------------------------------------------
var BtnMute = (function (_super) {
    __extends(BtnMute, _super);
    function BtnMute() {
        var _this = this;
        _super.call(this);
        this.isMute = false;
        this.fon = new PIXI.extras.MovieClip(mainSlot.getTexturesForName("fon_mute_btn00", 2));
        this.fon.interactive = true;
        this.fon.on("mousedown", function (e) { _this.onBtn(); });
        this.fon.on("touchstart", function (e) { _this.onBtn(); });
        this.addChild(this.fon);
        this.icon = new PIXI.extras.MovieClip(mainSlot.getTexturesForName("icon_mute_btn00", 2));
        this.icon.interactive = false;
        this.icon.position.x = 11;
        this.icon.position.y = 5;
        this.addChild(this.icon);
        //дефолтная установка звука: "ЗВУК ВЫКЛЮЧЕН"
        this.setMute(false);
    }
    BtnMute.prototype.onBtn = function () {
        this.setMute(!this.isMute);
        this.emit(BtnMute.EXCHANGE_MUTE);
    };
    BtnMute.prototype.setMute = function (value) {
        this.isMute = value;
        this.icon.gotoAndStop(this.isMute ? 1 : 0);
        this.fon.gotoAndStop(this.isMute ? 1 : 0);
    };
    BtnMute.EXCHANGE_MUTE = "exchange_mute";
    return BtnMute;
}(PIXI.Sprite));
//-------------------------------------------------------------------------------------------
var BtnPanel = (function (_super) {
    __extends(BtnPanel, _super);
    function BtnPanel(skinName, nameBtn, text, style, substrate, creatLabel) {
        var _this = this;
        _super.call(this);
        this._isModeCB = false;
        this.creatLabel = false;
        //this.interactive = true;
        //this.btn = btn;
        this.name = nameBtn;
        this.style = style;
        this.text = text;
        this.substrate = substrate;
        this.fon = new PIXI.extras.MovieClip(mainSlot.getTexturesForName(skinName, 4));
        this.fon.interactive = true;
        this.fon.on("mousedown", function (e) { _this.onUpBtn(e); });
        this.fon.on("touchstart", function (e) { _this.onUpBtn(e); });
        this.addChild(this.fon);
        if (this.substrate != '') {
            var nameSubstrate = (this.substrate == 'black') ? '_black' : '';
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
            var styleLabelIndex = {
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
            this.labelIndex.position.y = Math.round(this.label.position.y - this.labelIndex.height / 4);
            this.addChild(this.labelIndex);
        }
        //btn.addEventListener(EVENT_MOUSEDOWN, () => { this.onPressBtn() });
        //btn.addEventListener(EVENT_PRESSUP, () => { this.onUpBtn() });
        //btn.addEventListener(EVENT_ROLLOVER, () => { this.onOverBtn() });
        //btn.addEventListener(EVENT_ROLLOUT, () => { this.onOutBtn() });
        //this.labelY = btn["label"].y;
        //this.setMode(BtnPanel.STATE_UP);
    }
    BtnPanel.prototype.setMode = function (newState) {
        // if (!this.btn.buttonMode && newState != BtnPanel.STATE_DISABLED)
        //     return;
        if (newState != BtnPanel.STATE_OVER)
            this.state = newState;
        this.fon.gotoAndStop(newState);
        /*if (this.state == BtnPanel.STATE_DOWN)
            this.btn["label"].y = this.labelY + 3;
        else
            this.btn["label"].y = this.labelY;*/
    };
    BtnPanel.prototype.onPressBtn = function () {
        if (this.state == BtnPanel.STATE_DISABLED)
            return;
        this.setMode(BtnPanel.STATE_DOWN);
    };
    BtnPanel.prototype.onUpBtn = function (e) {
        if (this.state == BtnPanel.STATE_DISABLED)
            return;
        if (!this._isModeCB)
            this.setMode(BtnPanel.STATE_UP);
        console.log(EVENT_CLICK);
        this.emit(BtnPanel.CLICK_BTN, this.name);
    };
    BtnPanel.prototype.onOverBtn = function () {
        if (this.state == BtnPanel.STATE_DISABLED)
            return;
        if (this.state == BtnPanel.STATE_UP)
            this.setMode(BtnPanel.STATE_OVER);
    };
    BtnPanel.prototype.onOutBtn = function () {
        if (this.state == BtnPanel.STATE_DISABLED)
            return;
        if (this.state == BtnPanel.STATE_UP)
            this.setMode(BtnPanel.STATE_UP);
        else if (this.state == BtnPanel.STATE_DOWN && !this._isModeCB)
            this.setMode(BtnPanel.STATE_UP);
    };
    Object.defineProperty(BtnPanel.prototype, "dataIndex", {
        get: function () {
            return this._dataIndex;
        },
        set: function (value) {
            this._dataIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BtnPanel.prototype, "isModeCB", {
        get: function () {
            return this._isModeCB;
        },
        set: function (value) {
            this._isModeCB = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BtnPanel.prototype, "enabled", {
        set: function (value) {
            this.setMode(value ? BtnPanel.STATE_UP : BtnPanel.STATE_DISABLED);
            this.alpha = value ? 1 : 0.5;
        },
        enumerable: true,
        configurable: true
    });
    BtnPanel.prototype.setPosition = function (newState) {
        this.setMode(newState);
    };
    BtnPanel.prototype.setLabel = function (str) {
        if (this.labelIndex != null) {
            this.labelIndex.text = str;
        }
    };
    BtnPanel.CLICK_BTN = "click_btn";
    BtnPanel.STATE_UP = 0;
    BtnPanel.STATE_DOWN = 1;
    BtnPanel.STATE_OVER = 2;
    BtnPanel.STATE_DISABLED = 3;
    return BtnPanel;
}(PIXI.Sprite));
//-------------------------------------------------------------------------------------------
var ComboBtns = (function (_super) {
    __extends(ComboBtns, _super);
    function ComboBtns(btns) {
        var _this = this;
        _super.call(this);
        this.modeSelector = false;
        this.btns = btns;
        for (var i = 0; i < btns.length; i++) {
            var btn = btns[i];
            btn.isModeCB = true;
            btn.dataIndex = i;
            btn.on(BtnPanel.CLICK_BTN, function (nameBtn) { _this.onBtn(nameBtn); });
        }
    }
    ComboBtns.prototype.onBtn = function (nameBtn) {
        for (var i = 0; i < this.btns.length; i++) {
            if (this.btns[i].name == nameBtn) {
                this.selectBtnOnData(this.btns[i].dataIndex);
                return;
            }
        }
    };
    ComboBtns.prototype.selectBtnOnData = function (dataIndex, isDispatch) {
        if (isDispatch === void 0) { isDispatch = true; }
        if (this.modeSelector) {
            for (var i = 0; i < this.btns.length; i++) {
                var an = this.btns[i];
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
    };
    Object.defineProperty(ComboBtns.prototype, "enabled", {
        set: function (value) {
            for (var i = 0; i < this.btns.length; i++) {
                this.btns[i].enabled = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    ComboBtns.EXCHANGE_SELECT = "exchange_select";
    return ComboBtns;
}(PIXI.utils.EventEmitter));
//# sourceMappingURL=panel_slot_web.js.map
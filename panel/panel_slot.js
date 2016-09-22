var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PanelSlot = (function (_super) {
    __extends(PanelSlot, _super);
    function PanelSlot() {
        var _this = this;
        _super.call(this);
        this.nameBtns = ["fullscr_btn", "info_btn", "select_btn", "auto_btn", "betone_btn", "maxbet_btn", "start_btn"];
        this.linesBtn = ["line1_btn", "line2_btn", "line3_btn", "line4_btn", "line5_btn"];
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
        loadJSManifest("panel/panel1.js", function () { _this.completeLoad(); });
    }
    PanelSlot.prototype.resizePanel = function (w, h) {
        console.log("resizePanel " + w + " " + h);
        if (this.fon != null) {
            this.fon.scaleX = w / PanelSlot.WIDTH_PANEL;
            this.fon.scaleY = h / PanelSlot.HEIGHT_PANEL;
            if (h < w) {
                this.mc.scaleY = h / PanelSlot.HEIGHT_PANEL;
                this.mc.scaleX = this.mc.scaleY;
                this.mc.x = (w - PanelSlot.WIDTH_PANEL * this.mc.scaleX) / 2;
            }
            else {
                this.mc.scaleX = w / PanelSlot.WIDTH_PANEL;
                this.mc.scaleY = this.mc.scaleX;
            }
        }
    };
    PanelSlot.prototype.completeLoad = function () {
        var _this = this;
        this.mc = new lib.panel_mc();
        this.fon = new lib.fon_panel();
        this.fon.cache(0, 0, PanelSlot.WIDTH_PANEL, PanelSlot.HEIGHT_PANEL);
        this.addChild(this.fon);
        this.addChild(this.mc);
        this.dispatchEvent(EVENT_ONLOAD);
        createjs.Tween.get(this).wait(2).call(function () {
            _this.createBtnsOnName(_this.nameBtns, true);
            _this.setComboBtns(_this.linesBtn);
            _this.anim_hand_btn = _this.mc["btn_hand"].anim_hand_btn;
            _this.anim_hand_btn.addEventListener(EVENT_CLICK, function () { _this.onHand(); });
            _this.mute_btn = new BtnMute(_this.mc["mute_btn"]);
            _this.mute_btn.addEventListener(BtnMute.EXCHANGE_MUTE, function () { _this.onMute(); });
        });
    };
    PanelSlot.prototype.createBtnsOnName = function (ar, isAddListener) {
        var _this = this;
        var btns = new Array();
        for (var i = 0; i < ar.length; i++) {
            var btnAnimate = new BtnPanel(this.mc[ar[i]], ar[i]);
            this.dictBtn[ar[i]] = btnAnimate;
            btns.push(btnAnimate);
            if (isAddListener)
                btnAnimate.addEventListener(EVENT_CLICK, function (e) { _this.onBtn(e); });
        }
        return btns;
    };
    PanelSlot.prototype.setComboBtns = function (ar) {
        var _this = this;
        var arComboBtns = this.createBtnsOnName(ar, false);
        for (var i = 0; i < ar.length; i++)
            arComboBtns[i].setLabel("" + this.indexlines[i]);
        this.comboBtns = new ComboBtns(arComboBtns);
        this.comboBtns.addEventListener(ComboBtns.EXCHANGE_SELECT, function (e) { _this.onSelectLine(e); });
        this.comboBtns.selectBtnOnData(1, false);
    };
    PanelSlot.prototype.animHand = function () {
        this.anim_hand_btn.gotoAndPlay(2);
    };
    PanelSlot.prototype.getNameEventByBtn = function (nameBtn) {
        return this.dictBtnType[nameBtn];
    };
    PanelSlot.prototype.getNameBtnByTypeEvent = function (nameEvent) {
        for (var s in this.dictBtnType) {
            if (this.dictBtnType[s] == nameEvent)
                return s;
        }
        return null;
    };
    PanelSlot.prototype.onMute = function () {
        this.dispatchEvent(new PanelEvent(PanelEvent.MUTE, this.mute_btn.isMute ? 0 : 1));
    };
    PanelSlot.prototype.onBtn = function (e) {
        this.onActionBtn(e.currentTarget["name"]);
    };
    PanelSlot.prototype.onSelectLine = function (e) {
        console.log(PanelEvent.SELECT_LINE + " " + this.comboBtns.selectIndex);
        this.dispatchEvent(new PanelEvent(PanelEvent.SELECT_LINE, this.comboBtns.selectIndex));
    };
    PanelSlot.prototype.onActionBtn = function (nameBtn) {
        this.dispatchEvent(new PanelEvent(this.getNameEventByBtn(nameBtn)));
    };
    PanelSlot.prototype.onHand = function () {
        this.anim_hand_btn.gotoAndPlay(2);
        this.onActionBtn("start_btn");
    };
    PanelSlot.prototype.getContainer = function () {
        return this.mc["contgame"];
    };
    PanelSlot.prototype.setModeComboBet = function (nom) {
        this.comboBtns.selectBtnOnData(nom, false);
    };
    PanelSlot.prototype.blockBtnByType = function (nameBtn, isBlock) {
        var nb = this.getNameBtnByTypeEvent(nameBtn);
        if (nb != null && this.dictBtn[nb] != null)
            this.dictBtn[nb].enabled = !isBlock;
    };
    PanelSlot.prototype.blockLineBtn = function (nom, isBlock) {
        if (this.dictBtn && this.dictBtn[this.linesBtn[nom]])
            this.dictBtn[this.linesBtn[nom]].enabled = !isBlock;
    };
    PanelSlot.prototype.blockAll = function () {
        for (var s in this.dictBtn)
            this.dictBtn[s].enabled = false;
        this.blockComboBtns();
    };
    PanelSlot.prototype.unBlockAll = function () {
        for (var s in this.dictBtn)
            this.dictBtn[s].enabled = true;
        this.comboBtns.enabled = true;
    };
    PanelSlot.prototype.blockComboBtns = function () {
        this.comboBtns.enabled = false;
    };
    PanelSlot.prototype.setModeSelector = function (value) {
        this.comboBtns.modeSelector = value;
    };
    PanelSlot.prototype.setLabelBtn = function (typeBtn, str) {
    };
    PanelSlot.prototype.setTotalBet = function (value) {
    };
    PanelSlot.WIDTH_PANEL = 960;
    PanelSlot.HEIGHT_PANEL = 574;
    return PanelSlot;
}(createjs.MovieClip));
//-------------------------------------------------------------------------------------------
var BtnMute = (function (_super) {
    __extends(BtnMute, _super);
    function BtnMute(mc) {
        var _this = this;
        _super.call(this);
        this.isMute = false;
        this.mc = mc;
        mc.addEventListener(EVENT_MOUSEDOWN, function () { _this.onDownBtn(); });
        mc.addEventListener(EVENT_PRESSUP, function () { _this.onUpBtn(); });
        mc.addEventListener(EVENT_CLICK, function () { _this.onBtn(); });
        this.setMute(this.isMute);
        mc["fonmute_mc"].gotoAndStop(1);
    }
    BtnMute.prototype.onBtn = function () {
        this.mc["fonmute_mc"].gotoAndStop(1);
        this.setMute(!this.isMute);
        this.dispatchEvent(BtnMute.EXCHANGE_MUTE);
    };
    BtnMute.prototype.onDownBtn = function () {
        this.mc["fonmute_mc"].gotoAndStop(2);
    };
    BtnMute.prototype.onUpBtn = function () {
        this.mc["fonmute_mc"].gotoAndStop(1);
    };
    BtnMute.prototype.setMute = function (value) {
        this.isMute = value;
        this.mc["iconmute_mc"].gotoAndStop(this.isMute ? 1 : 0);
    };
    BtnMute.EXCHANGE_MUTE = "exchange_mute";
    return BtnMute;
}(createjs.EventDispatcher));
//-------------------------------------------------------------------------------------------
var BtnPanel = (function (_super) {
    __extends(BtnPanel, _super);
    function BtnPanel(btn, nameBtn) {
        var _this = this;
        _super.call(this);
        this._isModeCB = false;
        this.btn = btn;
        this.name = nameBtn;
        btn.addEventListener(EVENT_MOUSEDOWN, function () { _this.onPressBtn(); });
        btn.addEventListener(EVENT_PRESSUP, function () { _this.onUpBtn(); });
        btn.addEventListener(EVENT_ROLLOVER, function () { _this.onOverBtn(); });
        btn.addEventListener(EVENT_ROLLOUT, function () { _this.onOutBtn(); });
        this.labelY = btn["label"].y;
        this.setMode(BtnPanel.STATE_UP);
    }
    BtnPanel.prototype.setMode = function (newState) {
        // if (!this.btn.buttonMode && newState != BtnPanel.STATE_DISABLED)
        //     return;
        if (newState != "over")
            this.state = newState;
        this.btn["fon"].gotoAndStop(newState);
        if (this.state == BtnPanel.STATE_DOWN)
            this.btn["label"].y = this.labelY + 3;
        else
            this.btn["label"].y = this.labelY;
    };
    BtnPanel.prototype.onPressBtn = function () {
        if (this.state == BtnPanel.STATE_DISABLED)
            return;
        this.setMode(BtnPanel.STATE_DOWN);
    };
    BtnPanel.prototype.onUpBtn = function () {
        if (this.state == BtnPanel.STATE_DISABLED)
            return;
        if (!this._isModeCB)
            this.setMode(BtnPanel.STATE_UP);
        console.log(EVENT_CLICK);
        this.dispatchEvent(EVENT_CLICK);
    };
    BtnPanel.prototype.onOverBtn = function () {
        if (this.state == BtnPanel.STATE_DISABLED)
            return;
        if (this.state == BtnPanel.STATE_UP)
            this.setMode("over");
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
            //btn.buttonMode = value;
            this.setMode(value ? BtnPanel.STATE_UP : BtnPanel.STATE_DISABLED);
            this.btn.alpha = value ? 1 : 0.2;
        },
        enumerable: true,
        configurable: true
    });
    BtnPanel.prototype.setPosition = function (newState) {
        this.setMode(newState);
    };
    BtnPanel.prototype.setLabel = function (str) {
        if (this.btn["label"].info_txt != null) {
            this.btn["label"].info_txt.text = str;
        }
    };
    BtnPanel.STATE_UP = "up";
    BtnPanel.STATE_DOWN = "down";
    BtnPanel.STATE_DISABLED = "disabled";
    return BtnPanel;
}(createjs.EventDispatcher));
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
            btn.addEventListener(EVENT_CLICK, function (e) { _this.onBtn(e); });
        }
    }
    ComboBtns.prototype.onBtn = function (e) {
        this.selectBtnOnData(e.currentTarget.dataIndex);
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
            this.dispatchEvent(ComboBtns.EXCHANGE_SELECT);
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
}(createjs.EventDispatcher));
//# sourceMappingURL=panel_slot.js.map
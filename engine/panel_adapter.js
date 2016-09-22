var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PanelAdapter = (function (_super) {
    __extends(PanelAdapter, _super);
    function PanelAdapter() {
        _super.call(this);
        this.indexlines = [1, 3, 5, 7, 9];
        this.dictBlockBtns = new Object();
        this.ishelp = false;
        this.modelSlot = mainSlot.model;
    }
    PanelAdapter.prototype.setPanel = function (panel) {
        this.panel = panel;
        mainSlot.mainStage.addChild(this.panel);
        this.setBlocks();
    };
    Object.defineProperty(PanelAdapter.prototype, "panelMc", {
        get: function () {
            return this["panel"];
        },
        enumerable: true,
        configurable: true
    });
    PanelAdapter.prototype.setBlocks = function () {
        var linesBtn = [0, 1, 2, 3, 4];
        this.setBlockTypeBtn(ModelSlot.MODE_HELP, new ModePanelShow([PanelEvent.SELECT_GAME, PanelEvent.AUTO, PanelEvent.BETONE, PanelEvent.MAXBET, PanelEvent.START], [1, 2, 3]));
        this.setBlockTypeBtn(ModelSlot.MODE_ERROR, new ModePanelShow([PanelEvent.SELECT_GAME, PanelEvent.AUTO, PanelEvent.BETONE, PanelEvent.MAXBET, PanelEvent.START], linesBtn));
        this.setBlockTypeBtn(ModelSlot.MODE_READY, new ModePanelShow([], []));
        this.setBlockTypeBtn(ModelSlot.MODE_ROUTE, new ModePanelShow([PanelEvent.BETONE, PanelEvent.MAXBET, PanelEvent.START], linesBtn));
        this.setBlockTypeBtn(ModelSlot.MODE_ROUTE_WIN, new ModePanelShow([PanelEvent.SELECT_GAME, PanelEvent.AUTO], linesBtn));
        this.setBlockTypeBtn(ModelSlot.MODE_GAMBLE, new ModePanelShow([PanelEvent.SELECT_GAME, PanelEvent.AUTO, PanelEvent.BETONE, PanelEvent.MAXBET], [0]));
        this.setBlockTypeBtn(ModelSlot.MODE_GAMBLE_CHOICE, new ModePanelShow([PanelEvent.SELECT_GAME, PanelEvent.AUTO, PanelEvent.BETONE, PanelEvent.MAXBET, PanelEvent.START], linesBtn));
        this.setBlockTypeBtn(ModelSlot.MODE_BONUS, new ModePanelShow([PanelEvent.SELECT_GAME, PanelEvent.AUTO, PanelEvent.BETONE, PanelEvent.MAXBET, PanelEvent.START], linesBtn));
        this.setBlockTypeBtn(ModelSlot.MODE_BONUS_CHOICE, new ModePanelShow([PanelEvent.SELECT_GAME, PanelEvent.AUTO, PanelEvent.BETONE, PanelEvent.MAXBET, PanelEvent.START], []));
        this.setBlockTypeBtn(ModelSlot.MODE_SUPERBONUS, new ModePanelShow([PanelEvent.SELECT_GAME, PanelEvent.AUTO, PanelEvent.BETONE, PanelEvent.MAXBET, PanelEvent.START], [0, 2, 4]));
        this.setBlockTypeBtn(ModelSlot.MODE_BONUS_SPEC, new ModePanelShow([PanelEvent.AUTO, PanelEvent.BETONE, PanelEvent.MAXBET, PanelEvent.START], [1, 2, 3]));
        this.setBlockTypeBtn(ModelSlot.MODE_DEBIT, new ModePanelShow([PanelEvent.SELECT_GAME, PanelEvent.AUTO, PanelEvent.BETONE, PanelEvent.MAXBET, PanelEvent.START], linesBtn));
    };
    PanelAdapter.prototype.initPanel = function () {
        var _this = this;
        // не может      
        //this.panel.addEventListener(PanelEvent.PANEL_EVENT, (e: PanelEvent) => { this.onPanelEvent(e); });
        this.panel.on(PanelEvent.PANEL_EVENT, function (e) { _this.onPanelEvent(e); });
        /*mainSlot.bindSetter(this.modelSlot.stateSlotManager, "currentMode", (value: string) => { this.blockMode(value) });
        mainSlot.bindSetter(this.modelSlot, "modeLine", (value: number) => { this.updateBetLine(value) });
        mainSlot.bindSetter(this.modelSlot, "typeBet", (value: number) => { this.updateBetLine(value) });*/
    };
    PanelAdapter.prototype.setBlockTypeBtn = function (mode, m) {
        this.dictBlockBtns[mode] = m;
    };
    PanelAdapter.prototype.updateBetLine = function (type) {
        this.panel.setTotalBet(this.modelSlot.maxBet);
    };
    PanelAdapter.prototype.blockMode = function (mode) {
        this.blockOnMode(mode);
        this.panel.setModeSelector(mode == ModelSlot.MODE_READY);
        if (mode == ModelSlot.MODE_ROUTE_WIN || mode == ModelSlot.MODE_GAMBLE) {
            this.panel.setLabelBtn(PanelEvent.START, "TAKE\nWIN");
        }
        else {
            this.panel.setLabelBtn(PanelEvent.START, "START");
        }
    };
    PanelAdapter.prototype.outClickBtn = function (e) {
        this.onPanelEvent(e);
    };
    PanelAdapter.prototype.onPanelEvent = function (e) {
        soundManager.playSound(SoundManager.SOUND_KEY_PRESS);
        if (this.ishelp) {
            switch (e.eventBtn) {
                case PanelEvent.START:
                    mainSlot.slot.hideHelp();
                    this.ishelp = false;
                    this.reBlock(this.lastArBlockCombo);
                    break;
                case PanelEvent.SELECT_LINE:
                    mainSlot.slot.getHelpScene().selectBtn(e.line);
                    break;
            }
            return;
        }
        switch (e.eventBtn) {
            case PanelEvent.FULL_SCREEN:
                toggleFullScreen();
                /*var stage: Stage = (panelMc as DisplayObject).stage;
                if (stage) {
                    if (stage.displayState != StageDisplayState.NORMAL)
                        stage.displayState = StageDisplayState.NORMAL;
                    else
                        stage.displayState = StageDisplayState.FULL_SCREEN;
                }*/
                break;
            case PanelEvent.HELP:
                this.showhelp();
                break;
            case PanelEvent.SELECT_GAME:
                // if (AppSettings.backUrl)
                //     navigateToURL(new URLRequest(AppSettings.backUrl), "_self");
                break;
            case PanelEvent.AUTO:
                this.modelSlot.isAutoMode = !this.modelSlot.isAutoMode;
                break;
            case PanelEvent.BETONE:
                this.modelSlot.stateSlotManager.getCurrent().downGamble1();
                break;
            case PanelEvent.MAXBET:
                this.modelSlot.stateSlotManager.getCurrent().downGamble2();
                break;
            case PanelEvent.START:
                this.modelSlot.stateSlotManager.getCurrent().downStart();
                break;
            case PanelEvent.MUTE:
                soundManager.isMute = e.line == 0 ? true : false;
                break;
            case PanelEvent.SELECT_LINE:
                console.log(e.line);
                //this.modelSlot.stateSlotManager.getCurrent().downSelectBtn(e.line);
                break;
        }
    };
    PanelAdapter.prototype.showhelp = function () {
        if (this.ishelp)
            return;
        this.blockAll();
        this.blockLineBtn(0, false);
        this.blockLineBtn(4, false);
        this.blockBtnByType(PanelEvent.START, false);
        mainSlot.slot.showHelp();
        this.ishelp = true;
    };
    // выделить кнопку
    PanelAdapter.prototype.setModeComboBet = function (nom) {
        this.panel.setModeComboBet(nom);
    };
    // блокировать кнопку
    PanelAdapter.prototype.blockBtnByType = function (nameBtn, isBlock) {
        if (isBlock === void 0) { isBlock = true; }
        this.panel.blockBtnByType(nameBtn, isBlock);
    };
    // блокировать комбокнопку
    PanelAdapter.prototype.blockLineBtn = function (nom, isBlock) {
        if (isBlock === void 0) { isBlock = true; }
        this.panel.blockLineBtn(nom, isBlock);
    };
    PanelAdapter.prototype.blockAll = function () {
        this.panel.blockAll();
    };
    PanelAdapter.prototype.blockComboBtns = function () {
        this.panel.blockComboBtns();
    };
    PanelAdapter.prototype.reBlock = function (arBlockCombo) {
        if (arBlockCombo === void 0) { arBlockCombo = null; }
        this.lastArBlockCombo = arBlockCombo;
        if (this.ishelp)
            return;
        this.blockOnMode(this.modelSlot.stateSlotManager.currentMode);
        if (arBlockCombo != null) {
            for (var i = 0; i < arBlockCombo.length; i++)
                this.blockLineBtn(arBlockCombo[i]);
        }
    };
    // возвращает кнопку по количеству линий
    PanelAdapter.prototype.getNomBtnLine = function (countLine) {
        return this.indexlines.indexOf(countLine);
    };
    // возвращает количество линий на данной кнопке
    PanelAdapter.prototype.getIndexline = function (ind) {
        return this.indexlines[ind];
    };
    PanelAdapter.prototype.blockOnMode = function (mode) {
        var m = this.dictBlockBtns[mode];
        if (m != null) {
            this.panel.unBlockAll();
            if (m.buttons) {
                for (var i = 0; i < m.buttons.length; i++)
                    this.blockBtnByType(m.buttons[i]);
            }
            for (var i = 0; i < m.lines.length; i++)
                this.blockLineBtn(m.lines[i]);
        }
    };
    return PanelAdapter;
}(createjs.EventDispatcher));
//-------------------------------------------------------------------------------------------
var ModePanelShow = (function () {
    function ModePanelShow(buttons, lines) {
        this.buttons = buttons;
        this.lines = lines;
    }
    return ModePanelShow;
}());
//-------------------------------------------------------------------------------------------
var PanelEvent = (function (_super) {
    __extends(PanelEvent, _super);
    function PanelEvent(eventBtn, line) {
        if (line === void 0) { line = 0; }
        _super.call(this);
        this.eventBtn = eventBtn;
        this.line = line;
    }
    PanelEvent.FULL_SCREEN = "fullString";
    PanelEvent.HELP = "help";
    PanelEvent.SELECT_GAME = "selectGame";
    PanelEvent.AUTO = "auto";
    PanelEvent.BETONE = "betone";
    PanelEvent.MAXBET = "maxbet";
    PanelEvent.START = "start";
    PanelEvent.MUTE = "mute";
    PanelEvent.SELECT_LINE = "select_line";
    PanelEvent.PANEL_EVENT = "panel_event";
    return PanelEvent;
}(PIXI.interaction.InteractionData));
//# sourceMappingURL=panel_adapter.js.map
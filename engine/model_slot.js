var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ModelSlot = (function () {
    function ModelSlot() {
        //public path_server: string = "http://192.168.10.124:8078/IntermalService.svc/";
        this.path_server = "https://slotsrv.1xbet.org/test/";
        this.KeyHash = "sdf34g21v";
        this.bets = [1, 2, 3, 4];
        this.balance = 555;
        this.modeLine = 1; // количество линий
        this.typeBet = 0; // номер ставки из bets
        this.currentWin = 0;
        this.summInput = 0;
    }
    ModelSlot.prototype.init = function () {
        //TO DO
        /*this.stateSlotManager = mainSlot.slot.getStateSlotManager();
        this.settingRoll = mainSlot.slot.getSettingRoll();
        mainSlot.slot.showScene(mainSlot.slot.getMainScene());

        this.stateSlotManager.setCurrentModeSlot(ModelSlot.MODE_READY);

        if (this.lastAction && this.lastAction.Action)
            this.stateSlotManager.setModeOnActionID(this.lastAction);
        */
        mainSlot.panel.initPanel();
    };
    Object.defineProperty(ModelSlot.prototype, "amountBet", {
        // значение ставки
        get: function () {
            return this.bets[this.typeBet];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModelSlot.prototype, "totalBet", {
        // 
        get: function () {
            return Math.round(this.amountBet * this.modeLine * 100) / 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModelSlot.prototype, "maxBet", {
        get: function () {
            return Math.round(this.bets[this.bets.length - 1] * this.modeLine * 100) / 100;
        },
        enumerable: true,
        configurable: true
    });
    ModelSlot.prototype.setBet = function (type) {
        if (type == this.bets.length)
            type = 0;
        this.typeBet = type;
    };
    Object.defineProperty(ModelSlot.prototype, "compactBalance", {
        get: function () {
            return this.balance.toString();
        },
        enumerable: true,
        configurable: true
    });
    ModelSlot.prototype.getStepGamble = function (multipiler) {
        if (multipiler === void 0) { multipiler = 2; }
        var a = this.lastAction.Summ / this.summInput;
        var ind = Math.log(a) / Math.log(multipiler);
        return ind + 1;
    };
    ModelSlot.prototype.setError = function (code, msg) {
        this.error = code;
        if (code != 0 && code != 16 && code != 13) {
            console.log("Ошибка: " + code + " " + msg);
            /*if (stateManager)
                stateManager.add(new ErrorScene(msg));
            if (stateSlotManager)
                stateSlotManager.setCurrentModeSlot(MODE_ERROR);*/
            return true;
        }
        return false;
    };
    ModelSlot.MODE_ERROR = "error";
    ModelSlot.MODE_DEBIT = "debit";
    ModelSlot.MODE_READY = "ready"; // ждём вращения
    ModelSlot.MODE_ROUTE = "route"; // вращается
    ModelSlot.MODE_ROUTE_WIN = "route_win";
    ModelSlot.MODE_HELP = "help";
    ModelSlot.MODE_GAMBLE = "gamble";
    ModelSlot.MODE_GAMBLE_CHOICE = "gamble_choice";
    ModelSlot.MODE_GAMBLE_WIN = "gamble_win";
    ModelSlot.MODE_GAMBLE_LOSE = "gamble_loose";
    ModelSlot.MODE_BONUS = "bonus";
    ModelSlot.MODE_BONUS_CHOICE = "bonus_choice";
    ModelSlot.MODE_SUPERBONUS = "super_bonus";
    ModelSlot.MODE_BONUS_SPEC = "bonus_spec";
    ModelSlot.ID_WIN_ROUTE = 7;
    ModelSlot.ID_WIN_GAMBLE = 10;
    ModelSlot.ID_LOSE = 16;
    ModelSlot.ID_BONUS_WIN = 13;
    ModelSlot.ID_BONUS_WIN_SB_NO = 34;
    ModelSlot.ID_BONUS_WIN_SB = 31;
    ModelSlot.ID_GAMBLE_START = 39;
    ModelSlot.ID_BONUSSPEC_WIN = 42;
    return ModelSlot;
}());
//-------------------------------------------------------------------------------------------
var BaseVO = (function (_super) {
    __extends(BaseVO, _super);
    function BaseVO() {
        _super.call(this);
    }
    BaseVO.prototype.setData = function (obj) {
        for (var i in obj) {
            try {
                if (!this.setSpecialValue(i, obj[i]))
                    this[i] = obj[i];
            }
            catch (e) {
                console.log(this + " нет свойства с именем " + i + "   значение - " + obj[i]);
            }
        }
    };
    BaseVO.prototype.setSpecialValue = function (pole, value) {
        return false;
    };
    return BaseVO;
}(createjs.EventDispatcher));
//-------------------------------------------------------------------------------------------
var RollVO = (function () {
    function RollVO() {
        this.diffIconRoute = 4; // разница в прокрутах
    }
    RollVO.prototype.getRandomIndex = function () {
        if (this.filterIcon != null)
            return this.filterIcon[Math.round(Math.random() * (this.filterIcon.length - 1))];
        else
            return Math.round(Math.random() * (this.count_icon - 1)) + 1;
    };
    return RollVO;
}());
//-------------------------------------------------------------------------------------------
var ActionVO = (function (_super) {
    __extends(ActionVO, _super);
    function ActionVO(data) {
        _super.call(this);
        if (data)
            this.setData(data);
    }
    ActionVO.prototype.parseCombinationRoll = function () {
        var arT = this.CombinationSpin.split("&");
        var result = new Array();
        for (var i = 0; i < arT.length; i++) {
            var ar = arT[i].split(";");
            for (var j = 0; j < ar.length; j++) {
                if (result[j] == null)
                    result[j] = new Array();
                result[j].push(parseInt(ar[j]));
            }
        }
        return result;
    };
    ActionVO.prototype.getCountIndex = function (ind) {
        var count = 0;
        var arT = this.CombinationSpin.split("&");
        for (var i = 0; i < arT.length; i++) {
            var arV = arT[i].split(";");
            for (var j = 0; j < arV.length; j++) {
                if (parseInt(arV[j]) == ind)
                    count++;
            }
        }
        return count;
    };
    ActionVO.prototype.setSpecialValue = function (pole, value) {
        switch (pole) {
        }
        return false;
    };
    return ActionVO;
}(BaseVO));
//-------------------------------------------------------------------------------------------
var StateSlotManager = (function (_super) {
    __extends(StateSlotManager, _super);
    function StateSlotManager() {
        _super.call(this);
        this.current = new StateSlot();
        this.currentMode = "";
        this.dictionaryStateSlot = new Object();
        this.addStateSlot(ModelSlot.MODE_ERROR, new StateSlotError());
        this.generateDictionary();
    }
    StateSlotManager.prototype.generateDictionary = function () {
        throw new Error("Не заполнен словарь стейтов");
    };
    StateSlotManager.prototype.addStateSlot = function (mode, stateSlot) {
        stateSlot.main = this;
        stateSlot.nameMode = mode;
        this.dictionaryStateSlot[mode] = stateSlot;
    };
    StateSlotManager.prototype.setCurrentModeSlot = function (mode, data) {
        if (data === void 0) { data = null; }
        console.log("Mode state: " + mode);
        this.currentMode = mode;
        if (!this.dictionaryStateSlot[mode]) {
            throw new Error("Режим " + mode + " не добавлен в StateSlotManager");
        }
        var newStateSlot = this.dictionaryStateSlot[mode];
        var oldStateSlot = this.current;
        this.current = newStateSlot;
        if (oldStateSlot)
            oldStateSlot.exitStateSlot(this.current);
        newStateSlot.data = data;
        newStateSlot.runStateSlot(oldStateSlot);
    };
    StateSlotManager.prototype.setModeOnActionID = function (action) {
        if (action) {
            if (action.Action == ModelSlot.ID_WIN_ROUTE)
                this.setCurrentModeSlot(ModelSlot.MODE_ROUTE_WIN);
            else if (action.Action == ModelSlot.ID_WIN_GAMBLE)
                this.setCurrentModeSlot(ModelSlot.MODE_GAMBLE_WIN);
            else if (action.Action == ModelSlot.ID_GAMBLE_START)
                this.setCurrentModeSlot(ModelSlot.MODE_GAMBLE);
            else
                this.setCurrentModeSlot(ModelSlot.MODE_ROUTE_WIN);
        }
        else
            this.setCurrentModeSlot(ModelSlot.MODE_READY);
    };
    StateSlotManager.prototype.getCurrent = function () {
        return this.current;
    };
    return StateSlotManager;
}(createjs.EventDispatcher));
//-------------------------------------------------------------------------------------------
var StateSlotManagerDefault = (function (_super) {
    __extends(StateSlotManagerDefault, _super);
    function StateSlotManagerDefault() {
        _super.apply(this, arguments);
    }
    StateSlotManagerDefault.prototype.generateDictionary = function () {
        this.addStateSlot(ModelSlot.MODE_DEBIT, new StateSlotDebit());
        this.addStateSlot(ModelSlot.MODE_READY, new StateSlotReady());
        this.addStateSlot(ModelSlot.MODE_ROUTE, new StateSlotRoute());
        this.addStateSlot(ModelSlot.MODE_ROUTE_WIN, new StateSlotRouteWin());
        this.addStateSlot(ModelSlot.MODE_GAMBLE, new StateSlotGamble());
        this.addStateSlot(ModelSlot.MODE_GAMBLE_CHOICE, new StateSlotGambleChoice());
        this.addStateSlot(ModelSlot.MODE_GAMBLE_WIN, new StateSlotGambleWin);
        this.addStateSlot(ModelSlot.MODE_GAMBLE_LOSE, new StateSlotGambleLoose());
        this.addStateSlot(ModelSlot.MODE_BONUS, new StateSlotBonus());
        this.addStateSlot(ModelSlot.MODE_BONUS_CHOICE, new StateSlotBonusChoice());
        this.addStateSlot(ModelSlot.MODE_SUPERBONUS, new StateSlotSuperbonus());
    };
    return StateSlotManagerDefault;
}(StateSlotManager));
//-------------------------------------------------------------------------------------------
var StateSlot = (function (_super) {
    __extends(StateSlot, _super);
    function StateSlot() {
        _super.call(this);
        this.model = mainSlot.model;
        this.slotGame = mainSlot.slot;
        this.panel = mainSlot.panel;
    }
    StateSlot.prototype.exitStateSlot = function (newStateSlot) {
    };
    StateSlot.prototype.runStateSlot = function (oldStateSlot) {
    };
    // нажали take/start
    StateSlot.prototype.downStart = function () {
    };
    // нажали red/gamble
    StateSlot.prototype.downGamble1 = function () {
    };
    // нажали black/gamble
    StateSlot.prototype.downGamble2 = function () {
    };
    StateSlot.prototype.downSelectBtn = function (nom) {
    };
    return StateSlot;
}(createjs.EventDispatcher));
//-------------------------------------------------------------------------------------------
var StateSlotError = (function (_super) {
    __extends(StateSlotError, _super);
    function StateSlotError() {
        _super.apply(this, arguments);
    }
    return StateSlotError;
}(StateSlot));
//-------------------------------------------------------------------------------------------
var StateSlotReady = (function (_super) {
    __extends(StateSlotReady, _super);
    function StateSlotReady() {
        var _this = this;
        _super.call(this);
        this.isFirst = true;
        mainSlot.bindSetter(this.model, "isAutoMode", function (value) { _this.autoStart(value); });
    }
    StateSlotReady.prototype.autoStart = function (value) {
        if (value && this.main.getCurrent() == this)
            this.downStart();
    };
    StateSlotReady.prototype.runStateSlot = function (oldStateSlot) {
        this.panel.setModeComboBet(this.panel.getNomBtnLine(this.model.modeLine));
        if (this.isFirst) {
            if (!this.model.combination) {
                this.model.combination = this.getRandomCombination();
            }
            this.slotGame.getMainScene().showRollCombination(this.model.combination, null);
            this.isFirst = false;
        }
        // TODO
        if (this.model.isAutoMode /*&& this.model.view && this.model.view.stage*/)
            this.downStart();
    };
    StateSlotReady.prototype.downStart = function () {
        _super.prototype.downStart.call(this);
        this.slotGame.getMainScene().showWinLines(null);
        this.main.setCurrentModeSlot(ModelSlot.MODE_ROUTE);
    };
    StateSlotReady.prototype.downGamble1 = function () {
        this.model.setBet(this.model.typeBet + 1);
    };
    StateSlotReady.prototype.downGamble2 = function () {
        this.model.setBet(this.model.bets.length - 1);
    };
    StateSlotReady.prototype.getRandomCombination = function () {
        var ar = new Array();
        for (var i = 0; i < this.model.settingRoll.count_roll; i++) {
            ar[i] = new Array();
            for (var j = 0; j < this.model.settingRoll.count_row; j++)
                ar[i].push(1 + Math.round(Math.random() * (this.model.settingRoll.count_icon - 1)));
        }
        return ar;
    };
    StateSlotReady.prototype.downSelectBtn = function (nom) {
        nom = this.panel.getIndexline(nom);
        this.model.modeLine = nom;
        var ar = new Array();
        for (var i = 1; i <= nom; i++)
            ar.push(i);
        this.slotGame.getMainScene().showWinLines(ar, false);
    };
    return StateSlotReady;
}(StateSlot));
//-------------------------------------------------------------------------------------------
var StateSlotDebit = (function (_super) {
    __extends(StateSlotDebit, _super);
    function StateSlotDebit() {
        _super.apply(this, arguments);
    }
    StateSlotDebit.prototype.runStateSlot = function (oldStateSlot) {
        var _this = this;
        var cmd = new DebitGame();
        cmd.addEventListener(ServerResponseEvent.RESPONSE, function (e) { _this.onDebitGame(e); });
        cmd.execute();
    };
    StateSlotDebit.prototype.onDebitGame = function (e) {
        this.model.currentWin = 0;
        this.model.lastAction = e.data;
        this.main.setCurrentModeSlot(this.data);
    };
    return StateSlotDebit;
}(StateSlot));
//-------------------------------------------------------------------------------------------
var StateSlotRoute = (function (_super) {
    __extends(StateSlotRoute, _super);
    function StateSlotRoute() {
        _super.apply(this, arguments);
    }
    StateSlotRoute.prototype.runStateSlot = function (oldStateSlot) {
        var _this = this;
        _super.prototype.runStateSlot.call(this, oldStateSlot);
        var cmd = new CreditGame(this.model.modeLine, this.model.amountBet);
        cmd.addEventListener(ServerResponseEvent.RESPONSE, function (e) { _this.onSpinCommand(e); });
        cmd.execute();
    };
    StateSlotRoute.prototype.onSpinCommand = function (e) {
        var _this = this;
        this.action = e.data;
        this.model.lastAction = this.action;
        this.model.combination = this.action.parseCombinationRoll();
        this.slotGame.getMainScene().showRollCombination(this.model.combination, function () { _this.completeSpinAnimation(); });
    };
    StateSlotRoute.prototype.completeSpinAnimation = function () {
        if (this.action.Action == ModelSlot.ID_LOSE)
            this.main.setCurrentModeSlot(ModelSlot.MODE_READY);
        else
            this.main.setCurrentModeSlot(ModelSlot.MODE_ROUTE_WIN);
    };
    return StateSlotRoute;
}(StateSlot));
//-------------------------------------------------------------------------------------------
var StateSlotRouteWin = (function (_super) {
    __extends(StateSlotRouteWin, _super);
    function StateSlotRouteWin() {
        _super.apply(this, arguments);
    }
    StateSlotRouteWin.prototype.runStateSlot = function (oldStateSlot) {
        var _this = this;
        this.mainScene = this.slotGame.getMainScene();
        if (this.model.lastAction.Action == ModelSlot.ID_BONUS_WIN || this.model.lastAction.Action == ModelSlot.ID_BONUS_WIN_SB_NO || this.model.lastAction.Action == ModelSlot.ID_BONUS_WIN_SB) {
            //this.main.setCurrentModeSlot(ModelSlot.MODE_BONUS);
            this.main.setCurrentModeSlot(ModelSlot.MODE_SUPERBONUS);
            this.model.isAutoMode = false;
            this.panel.blockBtnByType(PanelEvent.AUTO);
        }
        else if (this.model.lastAction.Action == ModelSlot.ID_BONUSSPEC_WIN) {
            this.main.setCurrentModeSlot(ModelSlot.MODE_BONUS);
            this.model.isAutoMode = false;
            this.panel.blockBtnByType(PanelEvent.AUTO);
        }
        else {
            this.panel.blockAll();
            this.model.currentWin = this.model.lastAction.Summ;
            this.mainScene.showWinLines(this.model.lastAction.WinLines, true, function () { _this.completeShowLines(); });
            this.mainScene.showWin(this.model.lastAction.Summ);
        }
    };
    StateSlotRouteWin.prototype.completeShowLines = function () {
        var _this = this;
        this.panel.reBlock();
        if (this.model.isAutoMode)
            this.tween = createjs.Tween.get(this).wait(2000).call(function () { _this.downStart(); });
    };
    StateSlotRouteWin.prototype.exitStateSlot = function (newStateSlot) {
        this.clearTimeout();
        this.mainScene.showWinLines(null);
        _super.prototype.exitStateSlot.call(this, newStateSlot);
    };
    StateSlotRouteWin.prototype.downGamble1 = function () {
        this.goGamble();
    };
    StateSlotRouteWin.prototype.downGamble2 = function () {
        this.goGamble();
    };
    StateSlotRouteWin.prototype.goGamble = function () {
        this.clearTimeout();
        this.model.summInput = this.model.lastAction.Summ;
        this.main.setCurrentModeSlot(ModelSlot.MODE_GAMBLE);
    };
    StateSlotRouteWin.prototype.downStart = function () {
        this.clearTimeout();
        this.main.setCurrentModeSlot(ModelSlot.MODE_DEBIT, ModelSlot.MODE_READY);
    };
    StateSlotRouteWin.prototype.clearTimeout = function () {
        if (this.tween != null) {
            createjs.Tween.removeTweens(this);
            this.tween = null;
        }
    };
    return StateSlotRouteWin;
}(StateSlot));
//-------------------------------------------------------------------------------------------
var StateSlotGamble = (function (_super) {
    __extends(StateSlotGamble, _super);
    function StateSlotGamble() {
        _super.apply(this, arguments);
    }
    StateSlotGamble.prototype.downSelectBtn = function (nom) {
        var selectNom = nom;
        this.gamble.setSelectValue(selectNom);
        this.main.setCurrentModeSlot(ModelSlot.MODE_GAMBLE_CHOICE, this.gamble.getSelectValue());
    };
    StateSlotGamble.prototype.runStateSlot = function (oldStateSlot) {
        this.gamble = this.slotGame.getGambleScene();
        this.gamble.resetGamble();
        this.slotGame.showScene(this.gamble);
    };
    StateSlotGamble.prototype.exitStateSlot = function (newStateSlot) {
        if (!(newStateSlot instanceof StateSlotGambleChoice))
            this.slotGame.removeScene(this.gamble);
    };
    StateSlotGamble.prototype.downStart = function () {
        this.main.setCurrentModeSlot(ModelSlot.MODE_DEBIT, ModelSlot.MODE_READY);
    };
    return StateSlotGamble;
}(StateSlot));
//-------------------------------------------------------------------------------------------
var StateSlotGambleChoice = (function (_super) {
    __extends(StateSlotGambleChoice, _super);
    function StateSlotGambleChoice() {
        _super.apply(this, arguments);
    }
    StateSlotGambleChoice.prototype.runStateSlot = function (oldStateSlot) {
        var _this = this;
        this.panel.blockComboBtns();
        var cmd = new GambleEndGame(this.data);
        cmd.addEventListener(ServerResponseEvent.RESPONSE, function (e) { _this.onGamble(e); });
        cmd.execute();
    };
    StateSlotGambleChoice.prototype.onGamble = function (e) {
        this.action = e.data;
        this.model.lastAction = this.action;
        this.model.currentWin = this.action.Summ;
        if (this.action.Action == ModelSlot.ID_LOSE)
            this.main.setCurrentModeSlot(ModelSlot.MODE_GAMBLE_LOSE);
        else
            this.main.setCurrentModeSlot(ModelSlot.MODE_GAMBLE_WIN);
    };
    return StateSlotGambleChoice;
}(StateSlot));
//-------------------------------------------------------------------------------------------
var StateSlotGambleWin = (function (_super) {
    __extends(StateSlotGambleWin, _super);
    function StateSlotGambleWin() {
        _super.apply(this, arguments);
    }
    StateSlotGambleWin.prototype.runStateSlot = function (oldStateSlot) {
        var _this = this;
        this.gamble = this.slotGame.getGambleScene();
        if (this.model.error == 16) {
            var ar = this.model.lastAction.CombinationAux.split("&");
            ar.shift();
            this.gamble.setLastGamble(this.model.lastAction.CombinationAux);
        }
        else {
            soundManager.playSound(SoundManager.SOUND_CARDWIN);
            this.gamble.resultGamble(this.model.lastAction.CombinationAux);
        }
        this.slotGame.showScene(this.gamble);
        if (!this.gamble.useCompleteCallback(this.completeCallback))
            createjs.Tween.get(this).wait(2000).call(function () { _this.completeCallback(); });
    };
    StateSlotGambleWin.prototype.completeCallback = function () {
        this.timeoutModeGamble();
    };
    StateSlotGambleWin.prototype.timeoutModeGamble = function () {
        this.main.setCurrentModeSlot(ModelSlot.MODE_GAMBLE);
    };
    return StateSlotGambleWin;
}(StateSlotGamble));
//-------------------------------------------------------------------------------------------
var StateSlotGambleLoose = (function (_super) {
    __extends(StateSlotGambleLoose, _super);
    function StateSlotGambleLoose() {
        _super.apply(this, arguments);
    }
    StateSlotGambleLoose.prototype.runStateSlot = function (oldStateSlot) {
        var _this = this;
        this.gamble = this.slotGame.getGambleScene();
        this.gamble.resultGamble(this.model.lastAction.CombinationAux);
        if (!this.gamble.useCompleteCallback(this.completeCallback))
            createjs.Tween.get(this).wait(2000).call(function () { _this.timeoutModeReady(); });
    };
    StateSlotGambleLoose.prototype.completeCallback = function () {
        this.timeoutModeReady();
    };
    StateSlotGambleLoose.prototype.timeoutModeReady = function () {
        this.main.setCurrentModeSlot(ModelSlot.MODE_READY);
    };
    return StateSlotGambleLoose;
}(StateSlotGamble));
//-------------------------------------------------------------------------------------------
var StateSlotBonus = (function (_super) {
    __extends(StateSlotBonus, _super);
    function StateSlotBonus() {
        _super.apply(this, arguments);
    }
    StateSlotBonus.prototype.runStateSlot = function (oldStateSlot) {
        var _this = this;
        this.slotGame.getMainScene().showWinBonus();
        var se = soundManager.playSound(SoundManager.SOUND_BONUS);
        if (se.isPlayed) {
            se.addEventListener(SoundEnity.COMPLETE_SOUND, this.onCompleteSound);
        }
        else
            setTimeout(function () { _this.showTimerBonus(); }, 3000);
    };
    StateSlotBonus.prototype.onCompleteSound = function (e) {
        e.currentTarget.removeEventListener(SoundEnity.COMPLETE_SOUND, this.onCompleteSound);
        this.showTimerBonus();
    };
    StateSlotBonus.prototype.showTimerBonus = function () {
        var action = this.model.lastAction;
        if (action.Action == ModelSlot.ID_BONUS_WIN || action.Action == ModelSlot.ID_BONUS_WIN_SB_NO || action.Action == ModelSlot.ID_BONUS_WIN_SB)
            this.main.setCurrentModeSlot(ModelSlot.MODE_BONUS_CHOICE);
        else
            this.main.setCurrentModeSlot(ModelSlot.MODE_BONUS_SPEC);
    };
    return StateSlotBonus;
}(StateSlot));
//-------------------------------------------------------------------------------------------
var StateSlotBonusChoice = (function (_super) {
    __extends(StateSlotBonusChoice, _super);
    function StateSlotBonusChoice() {
        _super.apply(this, arguments);
    }
    StateSlotBonusChoice.prototype.runStateSlot = function (oldStateSlot) {
        var _this = this;
        this.bonus = this.slotGame.getBonusScene();
        this.model.currentWin = 0;
        this.panel.setModeComboBet(0);
        setTimeout(function () {
            _this.slotGame.showScene(_this.bonus);
            _this.bonus.resetBonus(_this.model.lastAction.Summ, _this.isSuperbonus, function () { _this.completeBonus(); });
        }, 10);
    };
    Object.defineProperty(StateSlotBonusChoice.prototype, "isSuperbonus", {
        get: function () {
            return this.model.lastAction.Action == ModelSlot.ID_BONUS_WIN_SB_NO || this.model.lastAction.Action == ModelSlot.ID_BONUS_WIN_SB;
        },
        enumerable: true,
        configurable: true
    });
    StateSlotBonusChoice.prototype.completeBonus = function () {
        if (this.isSuperbonus)
            this.main.setCurrentModeSlot(ModelSlot.MODE_SUPERBONUS);
        else {
            this.main.setCurrentModeSlot(ModelSlot.MODE_DEBIT, ModelSlot.MODE_READY);
        }
    };
    StateSlotBonusChoice.prototype.exitStateSlot = function (newStateSlot) {
        this.slotGame.removeScene(this.bonus);
    };
    StateSlotBonusChoice.prototype.downSelectBtn = function (nom) {
        this.bonus.selectBonus(nom);
    };
    return StateSlotBonusChoice;
}(StateSlot));
//-------------------------------------------------------------------------------------------
var StateSlotSuperbonus = (function (_super) {
    __extends(StateSlotSuperbonus, _super);
    function StateSlotSuperbonus() {
        _super.apply(this, arguments);
    }
    StateSlotSuperbonus.prototype.runStateSlot = function (oldStateSlot) {
        var _this = this;
        this.model.currentWin = this.model.lastAction.Summ;
        this.bonus = this.slotGame.getSuperbonusScene();
        this.bonus.resetBonus(this.model.lastAction.SummAux, this.isWin, function () { _this.completeBonus(); });
        this.slotGame.showScene(this.bonus);
        this.panel.setModeComboBet(0);
    };
    StateSlotSuperbonus.prototype.exitStateSlot = function (newStateSlot) {
        this.slotGame.removeScene(this.bonus);
    };
    StateSlotSuperbonus.prototype.completeBonus = function () {
        this.main.setCurrentModeSlot(ModelSlot.MODE_DEBIT, ModelSlot.MODE_READY);
    };
    Object.defineProperty(StateSlotSuperbonus.prototype, "isWin", {
        get: function () {
            return this.model.lastAction.Action == ModelSlot.ID_BONUS_WIN_SB;
        },
        enumerable: true,
        configurable: true
    });
    StateSlotSuperbonus.prototype.downSelectBtn = function (nom) {
        this.bonus.selectBonus(nom);
        this.panel.blockComboBtns();
    };
    return StateSlotSuperbonus;
}(StateSlot));
//# sourceMappingURL=model_slot.js.map
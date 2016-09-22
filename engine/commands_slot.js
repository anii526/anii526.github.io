var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Command = (function (_super) {
    __extends(Command, _super);
    function Command(type) {
        _super.call(this);
        this.type = type;
    }
    Object.defineProperty(Command.prototype, "complete", {
        get: function () { return this._complete; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Command.prototype, "executing", {
        get: function () { return this._executing; },
        enumerable: true,
        configurable: true
    });
    Command.prototype.execute = function () {
        console.log("Execute " + this.type);
        //try {
        if (this.executing || this.complete)
            return;
        this._executing = true;
        if (Command.cache.indexOf(this) == -1) {
            Command.cache.push(this);
        }
        this.execInternal();
        //  }
        //  catch (e) {
        //     console.log("Error " + e + "  in " + this);
        //  }
    };
    Command.prototype.reset = function () {
        this._complete = false;
    };
    Command.prototype.execInternal = function () {
    };
    Command.prototype.notifyComplete = function () {
        this._executing = false;
        if (!this.complete) {
            var index = Command.cache.indexOf(this);
            if (index > -1) {
                Command.cache.splice(index, 1);
            }
            this._complete = true;
            console.log("Complete command: " + this.type);
            this.dispatchEvent(EVENT_COMPLETE);
        }
    };
    Command.prototype.terminate = function () {
        this.notifyComplete();
    };
    Command.cache = [];
    return Command;
}(createjs.EventDispatcher));
//-------------------------------------------------------------------------------------------
var QueueCommand = (function (_super) {
    __extends(QueueCommand, _super);
    function QueueCommand() {
        _super.apply(this, arguments);
        this.queue = [];
        this._runningCommand = null;
        this.dispatchProgress = true;
    }
    Object.defineProperty(QueueCommand.prototype, "completedCommand", {
        get: function () { return this._completedCommand; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QueueCommand.prototype, "runningCommand", {
        get: function () { return this._runningCommand; },
        enumerable: true,
        configurable: true
    });
    QueueCommand.prototype.add = function (c) {
        this.queue[this.queue.length] = c;
        this._complete = false;
        return c;
    };
    QueueCommand.prototype.addList = function (arr) {
        this.queue = this.queue.concat(arr);
        this._complete = false;
    };
    QueueCommand.prototype.execInternal = function () {
        this.total = this.queue.length;
        this.run();
    };
    QueueCommand.prototype.run = function () {
        var _this = this;
        if (this.complete)
            return;
        if (this.queue.length > 0) {
            if (!this._runningCommand) {
                var c = this.queue.shift();
                this._runningCommand = c;
                c.addEventListener(EVENT_COMPLETE, function () { _this.onCommandComplete(); });
                c.execute();
            }
        }
        else {
            if (!this._runningCommand)
                this.notifyComplete();
        }
    };
    QueueCommand.prototype.onCommandComplete = function () {
        this._completedCommand = this._runningCommand;
        this._runningCommand.removeEventListener(EVENT_COMPLETE, this.onCommandComplete);
        this._runningCommand = null;
        this.dispatchEvent(QueueCommand.COMMAND_COMPLETE);
        // if (this.dispatchProgress)
        //     this.dispatchEvent(new ProgressEvent(ProgressEvent.PROGRESS, false, false, total - queue.length, total));
        this.run();
    };
    QueueCommand.prototype.reset = function () {
        this.queue = [];
        _super.prototype.reset.call(this);
    };
    QueueCommand.prototype.terminate = function () {
        this.reset();
        if (this.runningCommand != null) {
            this.runningCommand.removeEventListener(EVENT_COMPLETE, this.onCommandComplete);
            this.runningCommand.terminate();
        }
        _super.prototype.terminate.call(this);
    };
    QueueCommand.prototype.removeCommand = function (cmd) {
        this.queue.splice(this.queue.indexOf(cmd), 1);
        this.total--;
        cmd.terminate();
    };
    QueueCommand.COMMAND_COMPLETE = "commandComplete";
    return QueueCommand;
}(Command));
//-------------------------------------------------------------------------------------------
var GetTokenCommand = (function (_super) {
    __extends(GetTokenCommand, _super);
    function GetTokenCommand() {
        _super.call(this, "GetTokenCommand");
    }
    GetTokenCommand.prototype.execInternal = function () {
        if (mainSlot.model.Token == null && !mainSlot.testServer)
            //this.sendToPath("http://192.168.10.125:9055/ExternalService.svc/GetToken?UserId=" + mainSlot.model.userid);
            this.sendToPath("https://partners.1xbet.org/1xSlotsTest/GetToken?UserId=" + mainSlot.model.userid);
        else
            this.notifyComplete();
    };
    GetTokenCommand.prototype.sendToPath = function (url) {
        var _this = this;
        $.get(url, function (data, status) {
            mainSlot.model.Token = data;
            _this.notifyComplete();
        });
    };
    return GetTokenCommand;
}(Command));
//-------------------------------------------------------------------------------------------
var ConnectCommand = (function (_super) {
    __extends(ConnectCommand, _super);
    function ConnectCommand(type) {
        _super.call(this, type);
        this.param = new Object();
        //this.type = type;
    }
    ConnectCommand.prototype.execInternal = function () {
        this.param["IdPartner"] = mainSlot.model.partnerid;
        this.param["Hash"] = this.getHash();
        this.sendData();
    };
    ConnectCommand.prototype.getHash = function () {
        return "no hash";
    };
    ConnectCommand.prototype.sendData = function () {
        var path = mainSlot.model.path_server + "" + this.type;
        this.sendToPath(path);
    };
    ConnectCommand.prototype.sendToPath = function (urlPath) {
        var _this = this;
        var dataReq = JSON.stringify(this.param);
        /* $.ajaxSetup({
             contentType: "application/json; charset=utf-8"
         });
         $.post(urlPath, this.param);*/
        $.ajax({
            url: urlPath,
            type: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            headers: { 'Content-Type': 'application/json' },
            // processData: true,
            success: function (msg) { _this.processData(msg); },
            error: function (result) {
                //alert('Service call failed: ' + result.status + '' + result.statusText);
            },
            data: dataReq
        });
    };
    ConnectCommand.prototype.processData = function (response) {
        var _this = this;
        if (!(this instanceof GetAsyncResponse) && response["TokenAsync"] != null && response["Timeout"] != null) {
            var cmd = new GetAsyncResponse(response["TokenAsync"], response["Timeout"]);
            cmd.addEventListener(ServerResponseEvent.RESPONSE, function (e) { _this.onCompleteAsync(e); });
            setTimeout(function () { cmd.execute(); }, response["Timeout"]);
        }
        else {
            if (response["Token"] != null)
                mainSlot.model.Token = response["Token"];
            if (response["Balance"] != null)
                mainSlot.model.balance = response["Balance"];
            if (response["Error"] != null && mainSlot.model.setError(response["Error"], response["Msg"]))
                return;
            this.completeConnect(response);
        }
    };
    ConnectCommand.prototype.onCompleteAsync = function (e) {
        this.processData(e.data);
    };
    ConnectCommand.prototype.completeConnect = function (obj) {
        this.dispatchEvent(new ServerResponseEvent(obj));
        this.notifyComplete();
    };
    return ConnectCommand;
}(Command));
//-------------------------------------------------------------------------------------------
var ServerResponseEvent = (function (_super) {
    __extends(ServerResponseEvent, _super);
    function ServerResponseEvent(data, bubbles, cancelable) {
        if (data === void 0) { data = null; }
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        _super.call(this, ServerResponseEvent.RESPONSE, bubbles, cancelable);
        this.data = data;
    }
    ServerResponseEvent.RESPONSE = "response";
    return ServerResponseEvent;
}(createjs.Event));
//-------------------------------------------------------------------------------------------
var AuthorizationGame = (function (_super) {
    __extends(AuthorizationGame, _super);
    function AuthorizationGame() {
        _super.call(this, "AuthorizationGame");
    }
    AuthorizationGame.prototype.execInternal = function () {
        if (mainSlot.testServer) {
            var str = '{"Error":0,"Msg":"Не завершенная игра","Action":"7","Balance":100973.74,"CombinationSpin":"3;3;6;8;8&5;1;1;9;1&2;8;8;9;9","Currency":"USD","GameId":22,"Round":1825,"Summ":0,"SummAux":0,"Token":"bc52a2e3-77a8-44ef-823d-f46246b06bee"} ';
            //var str: string = '{"Error":16,"Msg":"Не завершенная игра","Action":"31","Balance":100973.74,"CombinationSpin":"3;3;6;8;8&5;1;1;9;1&2;8;8;9;9","Currency":"USD","GameId":22,"Round":1825,"Summ":0,"SummAux":0,"Token":"bc52a2e3-77a8-44ef-823d-f46246b06bee"} ';
            var obj = JSON.parse(str);
            this.processData(obj);
            return;
        }
        this.param["IdGame"] = mainSlot.model.gameId;
        this.param["UserId"] = mainSlot.model.userid;
        _super.prototype.execInternal.call(this);
    };
    AuthorizationGame.prototype.getHash = function () {
        this.param["Token"] = mainSlot.model.Token;
        return $["md5"]("AuthorizationGame/" + mainSlot.model.userid + mainSlot.model.Token + mainSlot.model.KeyHash);
    };
    AuthorizationGame.prototype.completeConnect = function (obj) {
        if (obj["Error"]) {
        }
        if (obj["Action"]) {
            var action = new ActionVO(obj);
            mainSlot.model.lastAction = action;
            if (action.CombinationSpin)
                mainSlot.model.combination = action.parseCombinationRoll();
            if (action.Summ)
                mainSlot.model.currentWin = action.Summ;
            if (action.SummInput)
                mainSlot.model.summInput = action.SummInput;
        }
        _super.prototype.completeConnect.call(this, obj);
    };
    return AuthorizationGame;
}(ConnectCommand));
//-------------------------------------------------------------------------------------------
var BalanceGame = (function (_super) {
    __extends(BalanceGame, _super);
    function BalanceGame() {
        _super.call(this, "BalanceGame");
    }
    BalanceGame.prototype.getHash = function () {
        this.param["Token"] = mainSlot.model.Token;
        var str = "BalanceGame/" + mainSlot.model.Token + mainSlot.model.KeyHash;
        return $["md5"](str);
    };
    return BalanceGame;
}(ConnectCommand));
//-------------------------------------------------------------------------------------------
var DebitGame = (function (_super) {
    __extends(DebitGame, _super);
    function DebitGame() {
        _super.call(this, "DebitGame");
    }
    DebitGame.prototype.getHash = function () {
        this.param["Token"] = mainSlot.model.Token;
        var str = "DebitGame/" + mainSlot.model.Token + mainSlot.model.KeyHash;
        return $["md5"](str);
    };
    DebitGame.prototype.completeConnect = function (obj) {
        this.action = new ActionVO(obj);
        _super.prototype.completeConnect.call(this, this.action);
    };
    return DebitGame;
}(ConnectCommand));
//-------------------------------------------------------------------------------------------
var CreditGame = (function (_super) {
    __extends(CreditGame, _super);
    function CreditGame(cntLine, summa) {
        _super.call(this, "CreditGame");
        this.param["CntLineBet"] = cntLine;
        this.param["Summa"] = summa;
    }
    CreditGame.prototype.getHash = function () {
        this.param["Token"] = mainSlot.model.Token;
        var str = "CreditGame/" + mainSlot.model.Token + mainSlot.model.KeyHash;
        return $["md5"](str);
    };
    CreditGame.prototype.completeConnect = function (obj) {
        this.action = new ActionVO(obj);
        _super.prototype.completeConnect.call(this, this.action);
    };
    return CreditGame;
}(ConnectCommand));
//-------------------------------------------------------------------------------------------
var GambleEndGame = (function (_super) {
    __extends(GambleEndGame, _super);
    function GambleEndGame(clickUser) {
        _super.call(this, "GambleEndGame");
        this.param["ClickUser"] = clickUser;
    }
    GambleEndGame.prototype.getHash = function () {
        this.param["Token"] = mainSlot.model.Token;
        var str = "GambleEndGame/" + mainSlot.model.Token + this.param["ClickUser"] + mainSlot.model.KeyHash;
        return $["md5"](str);
    };
    GambleEndGame.prototype.completeConnect = function (obj) {
        _super.prototype.completeConnect.call(this, new ActionVO(obj));
    };
    return GambleEndGame;
}(ConnectCommand));
//-------------------------------------------------------------------------------------------
var GambleGame = (function (_super) {
    __extends(GambleGame, _super);
    function GambleGame(comb) {
        _super.call(this, "GambleGame");
        this.param["CombinationBet"] = comb;
    }
    GambleGame.prototype.getHash = function () {
        this.param["Token"] = mainSlot.model.Token;
        var str = "GambleGame/" + mainSlot.model.Token + mainSlot.model.KeyHash;
        return $["md5"](str);
    };
    GambleGame.prototype.completeConnect = function (obj) {
        this.action = new ActionVO(obj);
        _super.prototype.completeConnect.call(this, this.action);
    };
    return GambleGame;
}(ConnectCommand));
//-------------------------------------------------------------------------------------------
var GambleStartGame = (function (_super) {
    __extends(GambleStartGame, _super);
    function GambleStartGame() {
        _super.call(this, "GambleStartGame");
    }
    GambleStartGame.prototype.getHash = function () {
        this.param["Token"] = mainSlot.model.Token;
        var str = "GambleStartGame/" + mainSlot.model.Token + mainSlot.model.KeyHash;
        return $["md5"](str);
    };
    GambleStartGame.prototype.completeConnect = function (obj) {
        _super.prototype.completeConnect.call(this, new ActionVO(obj));
    };
    return GambleStartGame;
}(ConnectCommand));
//-------------------------------------------------------------------------------------------
var GetAsyncResponse = (function (_super) {
    __extends(GetAsyncResponse, _super);
    function GetAsyncResponse(tokenAsync, timeout) {
        _super.call(this, "GetAsyncResponse");
        this.counter = 0;
        this.timeout = timeout;
        this.param["TokenAsync"] = tokenAsync;
    }
    GetAsyncResponse.prototype.getHash = function () {
        var str = "AsyncResponse/" + this.param["TokenAsync"] + mainSlot.model.KeyHash;
        return $["md5"](str);
    };
    GetAsyncResponse.prototype.completeConnect = function (obj) {
        var _this = this;
        if (obj["Error"] == 13) {
            this.counter++;
            if (this.counter < 26)
                createjs.Tween.get(this).wait(this.timeout).call(function () { _this.sendData(); });
            else
                mainSlot.model.setError(14, "Превышено количество запросов ожидания");
        }
        else
            _super.prototype.completeConnect.call(this, obj);
    };
    return GetAsyncResponse;
}(ConnectCommand));
//-------------------------------------------------------------------------------------------
var GetGameInfo = (function (_super) {
    __extends(GetGameInfo, _super);
    function GetGameInfo() {
        _super.call(this, "GetGameInfo");
    }
    GetGameInfo.prototype.execInternal = function () {
        if (mainSlot.testServer) {
            var str = '{ "Error": 0, "Bets": [0.02, 0.03, 0.05, 0.07, 0.1, 0.25, 0.3, 0.5, 0.75, 1, 1.25, 1.5], "Koeffs": [2, 3, 5, 10, 20, 30, 50, 100, 200, 500, 1000, 5000], "LineMax": 9 }';
            var obj = JSON.parse(str);
            this.processData(obj);
            return;
        }
        this.param["IdGame"] = mainSlot.model.gameId;
        this.param["IdPartner"] = mainSlot.model.partnerid;
        this.param["Currency"] = mainSlot.model.currency;
        _super.prototype.execInternal.call(this);
    };
    GetGameInfo.prototype.getHash = function () {
        var str = "GetGameInfo/" + mainSlot.model.partnerid + mainSlot.model.currency + mainSlot.model.KeyHash;
        return $["md5"](str);
    };
    GetGameInfo.prototype.completeConnect = function (obj) {
        mainSlot.model.bets = obj["Bets"];
        mainSlot.model.koeffs = obj["Koeffs"];
        _super.prototype.completeConnect.call(this, obj);
    };
    return GetGameInfo;
}(ConnectCommand));
var LoadPanel = (function (_super) {
    __extends(LoadPanel, _super);
    function LoadPanel() {
        _super.call(this, "LoadPanel");
    }
    LoadPanel.prototype.execInternal = function () {
        var _this = this;
        mainSlot.panel = new PanelAdapter();
        loadJS("panel/panel_slot_web.js", function () { _this.completeLoadPanelJS(); });
    };
    LoadPanel.prototype.completeLoadPanelJS = function () {
        var _this = this;
        this.panelView = new PanelSlotWeb();
        // не может в addEventListener
        this.panelView.on(EVENT_ONLOAD, function () { _this.completeLoad(); });
    };
    LoadPanel.prototype.completeLoad = function () {
        mainSlot.panel.setPanel(this.panelView);
        //боллее нет необходимости в ресайзе ручками, все будет ресайзится самостоятельно.
        //mainSlot.resize();
        this.notifyComplete();
    };
    return LoadPanel;
}(Command));
var LoadSlot = (function (_super) {
    __extends(LoadSlot, _super);
    function LoadSlot() {
        _super.call(this, "LoadSlot");
    }
    LoadSlot.prototype.execInternal = function () {
        var _this = this;
        loadJS("gnome/slot_gnome.js", function () { _this.completeLoadSlotJS(); });
    };
    LoadSlot.prototype.completeLoadSlotJS = function () {
        var _this = this;
        loadJSManifest(mainSlot.slot.getPathViewJS(), function () { _this.completeLoad(); });
    };
    LoadSlot.prototype.completeLoad = function () {
        this.notifyComplete();
    };
    return LoadSlot;
}(Command));
var InitCommand = (function (_super) {
    __extends(InitCommand, _super);
    function InitCommand() {
        _super.call(this, "InitCommand");
    }
    InitCommand.prototype.execInternal = function () {
        this.add(new LoadPanel());
        //this.add(new LoadSlot());
        //this.add(new GetTokenCommand());
        //this.add(new GetGameInfo());
        //this.add(new AuthorizationGame());
        _super.prototype.execInternal.call(this);
    };
    return InitCommand;
}(QueueCommand));
//# sourceMappingURL=commands_slot.js.map
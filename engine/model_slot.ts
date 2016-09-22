class ModelSlot {
    public static MODE_ERROR: string = "error";
    public static MODE_DEBIT: string = "debit";
    public static MODE_READY: string = "ready"; // ждём вращения
    public static MODE_ROUTE: string = "route"; // вращается
    public static MODE_ROUTE_WIN: string = "route_win";
    public static MODE_HELP: string = "help";

    public static MODE_GAMBLE: string = "gamble";
    public static MODE_GAMBLE_CHOICE: string = "gamble_choice";
    public static MODE_GAMBLE_WIN: string = "gamble_win";
    public static MODE_GAMBLE_LOSE: string = "gamble_loose";

    public static MODE_BONUS: string = "bonus";

    public static MODE_BONUS_CHOICE: string = "bonus_choice";
    public static MODE_SUPERBONUS: string = "super_bonus";
    public static MODE_BONUS_SPEC: string = "bonus_spec";


    public static ID_WIN_ROUTE: number = 7;
    public static ID_WIN_GAMBLE: number = 10;
    public static ID_LOSE: number = 16;
    public static ID_BONUS_WIN: number = 13;
    public static ID_BONUS_WIN_SB_NO: number = 34;
    public static ID_BONUS_WIN_SB: number = 31;
    public static ID_GAMBLE_START: number = 39;
    public static ID_BONUSSPEC_WIN: number = 42;

    //public path_server: string = "http://192.168.10.124:8078/IntermalService.svc/";
    public path_server: string = "https://slotsrv.1xbet.org/test/";
    public Token: string;
    public TokenAsync: string;
    public KeyHash: string = "sdf34g21v";

    public gameId: number;
    public partnerid: number;
    public currency: string;
    public userid: string;
    public demo: number;
    public settingRoll: RollVO;
    public lastAction: ActionVO;

    public bets: Array<number>=[1,2,3,4];
    public koeffs: Array<number>;
    public combination: Array<Array<number>>;
    public balance: number=555;
    public error: number;
    public modeLine: number = 1;// количество линий
    public typeBet: number = 0; // номер ставки из bets
    public currentWin: number = 0;
    public summInput: number = 0;
    public isAutoMode: boolean;

    public stateSlotManager: StateSlotManager;

    public init(): void {
        //TO DO
        /*this.stateSlotManager = mainSlot.slot.getStateSlotManager();
        this.settingRoll = mainSlot.slot.getSettingRoll();
        mainSlot.slot.showScene(mainSlot.slot.getMainScene());

        this.stateSlotManager.setCurrentModeSlot(ModelSlot.MODE_READY);

        if (this.lastAction && this.lastAction.Action)
            this.stateSlotManager.setModeOnActionID(this.lastAction);
        */

        mainSlot.panel.initPanel();
    }

    // значение ставки
    public get amountBet(): number {
        return this.bets[this.typeBet];
    }
    // 
    public get totalBet(): Number {
        return Math.round(this.amountBet * this.modeLine * 100) / 100;
    }
    public get maxBet(): Number {
        return Math.round(this.bets[this.bets.length - 1] * this.modeLine * 100) / 100;
    }

    public setBet(type: number): void {
        if (type == this.bets.length)
            type = 0;
        this.typeBet = type;
    }

    public get compactBalance(): string {
        return this.balance.toString();
    }

    public getStepGamble(multipiler: number = 2): number {
        var a: number = this.lastAction.Summ / this.summInput;
        var ind: number = Math.log(a) / Math.log(multipiler);
        return ind + 1;
    }

    public setError(code: number, msg: String): Boolean {
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
    }
}

//-------------------------------------------------------------------------------------------

class BaseVO extends createjs.EventDispatcher {
    public Balance: Number;
    public Msg: String;
    public Token: String;

    constructor()
    { super(); }

    public setData(obj: Object): void {
        for (var i in obj) {
            try {
                if (!this.setSpecialValue(i, obj[i])) this[i] = obj[i];
            } catch (e) {
                console.log(this + " нет свойства с именем " + i + "   значение - " + obj[i]);
            }
        }
    }

    protected setSpecialValue(pole: string, value: any): boolean {
        return false;
    }

    /*public function getElementOnPoleInVector(vect: Object, pole: String, value:*): Object {
        var ret_elem: Object;
        for (var i: int = 0; i < vect.length; i++) {
            if (vect[i][pole] == value) {
                ret_elem = vect[i];
                return ret_elem;
            }
        }
        return null;
    }
    
    public function removeFromVectorOnPole(vect: Object, pole: String, value:*): Object {
        var ret_elem: Object;
        for (var i: int = 0; i < vect.length; i++) {
            if (vect[i][pole] == value) {
                ret_elem = vect[i];
                vect.splice(i, 1);
                return ret_elem;
            }
        }
        return null;
    }*/
}

//-------------------------------------------------------------------------------------------

class RollVO {
    public count_icon: number;
    public count_row: number;
    public count_roll: number;
    public step_x: number;
    public step_y: number;
    public width: number;
    public height_mask: number;

    public filterIcon: Array<number>;
    public diffIconRoute: number = 4; // разница в прокрутах

    public getRandomIndex(): number {
        if (this.filterIcon != null)
            return this.filterIcon[Math.round(Math.random() * (this.filterIcon.length - 1))];
        else
            return Math.round(Math.random() * (this.count_icon - 1)) + 1;
    }
}

//-------------------------------------------------------------------------------------------

class ActionVO extends BaseVO {
    public Action: number;
    public Summ: number;
    public SummAux: number;
    public SummInput: number;
    public CombinationSpin: string;
    public CombinationAux: string;
    public WinLines: Array<number>;
    public Info: string;


    constructor(data: Object) {
        super();
        if (data)
            this.setData(data);
    }

    public parseCombinationRoll(): Array<Array<number>> {
        var arT: Array<string> = this.CombinationSpin.split("&");
        var result: Array<Array<number>> = new Array<Array<number>>();

        for (var i: number = 0; i < arT.length; i++) {
            var ar: Array<string> = arT[i].split(";");
            for (var j: number = 0; j < ar.length; j++) {
                if (result[j] == null)
                    result[j] = new Array<number>();
                result[j].push(parseInt(ar[j]));
            }
        }
        return result;
    }

    public getCountIndex(ind: number): number {
        var count: number = 0;
        var arT: Array<string> = this.CombinationSpin.split("&");
        for (var i: number = 0; i < arT.length; i++) {
            var arV: Array<string> = arT[i].split(";");
            for (var j: number = 0; j < arV.length; j++) {
                if (parseInt(arV[j]) == ind)
                    count++;
            }
        }

        return count;
    }

    protected setSpecialValue(pole: string, value: any): boolean {
        switch (pole) {

        }
        return false;
    }

}

//-------------------------------------------------------------------------------------------

class StateSlotManager extends createjs.EventDispatcher {
    private current: StateSlot = new StateSlot();
    public currentMode: string = "";
    public dictionaryStateSlot: Object = new Object();

    constructor() {
        super();
        this.addStateSlot(ModelSlot.MODE_ERROR, new StateSlotError());
        this.generateDictionary();
    }

    protected generateDictionary(): void {
        throw new Error("Не заполнен словарь стейтов");
    }

    public addStateSlot(mode: string, stateSlot: StateSlot): void {
        stateSlot.main = this;
        stateSlot.nameMode = mode;
        this.dictionaryStateSlot[mode] = stateSlot;
    }

    public setCurrentModeSlot(mode: string, data: Object = null): void {
        console.log("Mode state: " + mode);
        this.currentMode = mode;
        if (!this.dictionaryStateSlot[mode]) {
            throw new Error("Режим " + mode + " не добавлен в StateSlotManager");
        }
        var newStateSlot: StateSlot = this.dictionaryStateSlot[mode];

        var oldStateSlot: StateSlot = this.current;
        this.current = newStateSlot;

        if (oldStateSlot)
            oldStateSlot.exitStateSlot(this.current);

        newStateSlot.data = data;
        newStateSlot.runStateSlot(oldStateSlot);
    }

    public setModeOnActionID(action: ActionVO): void {
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
    }

    public getCurrent(): StateSlot {
        return this.current;
    }
}

//-------------------------------------------------------------------------------------------

class StateSlotManagerDefault extends StateSlotManager {

    protected generateDictionary(): void {
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
    }
}

//-------------------------------------------------------------------------------------------

class StateSlot extends createjs.EventDispatcher {
    public main: StateSlotManager;
    public nameMode: String;
    public data: Object;
    protected model: ModelSlot;
    protected slotGame: ISlotEnity;
    protected panel: PanelAdapter;


    constructor() {
        super();
        this.model = mainSlot.model;
        this.slotGame = mainSlot.slot;
        this.panel = mainSlot.panel;
    }

    public exitStateSlot(newStateSlot: StateSlot): void {

    }
    public runStateSlot(oldStateSlot: StateSlot): void {

    }

    // нажали take/start
    public downStart(): void {

    }

    // нажали red/gamble
    public downGamble1(): void {

    }

    // нажали black/gamble
    public downGamble2(): void {

    }
    public downSelectBtn(nom: number): void {

    }
}

//-------------------------------------------------------------------------------------------

class StateSlotError extends StateSlot {
}

//-------------------------------------------------------------------------------------------

class StateSlotReady extends StateSlot {
    private isFirst: boolean = true;

    constructor() {
        super();

        mainSlot.bindSetter(this.model, "isAutoMode", (value: boolean) => { this.autoStart(value) });
    }

    private autoStart(value: boolean): void {
        if (value && this.main.getCurrent() == this)
            this.downStart();
    }

    public runStateSlot(oldStateSlot: StateSlot): void {
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
    }

    public downStart(): void {
        super.downStart();
        this.slotGame.getMainScene().showWinLines(null);
        this.main.setCurrentModeSlot(ModelSlot.MODE_ROUTE);
    }

    public downGamble1(): void {
        this.model.setBet(this.model.typeBet + 1);
    }

    public downGamble2(): void {
        this.model.setBet(this.model.bets.length - 1);
    }


    private getRandomCombination(): Array<Array<number>> {
        var ar: Array<Array<number>> = new Array<Array<number>>();
        for (var i: number = 0; i < this.model.settingRoll.count_roll; i++) {
            ar[i] = new Array<number>();
            for (var j: number = 0; j < this.model.settingRoll.count_row; j++)
                ar[i].push(1 + Math.round(Math.random() * (this.model.settingRoll.count_icon - 1)));
        }
        return ar;
    }

    public downSelectBtn(nom: number): void {
        nom = this.panel.getIndexline(nom);
        this.model.modeLine = nom;

        var ar: Array<number> = new Array();
        for (var i: number = 1; i <= nom; i++)
            ar.push(i);
        this.slotGame.getMainScene().showWinLines(ar, false);
    }
}

//-------------------------------------------------------------------------------------------

class StateSlotDebit extends StateSlot {
    public runStateSlot(oldStateSlot: StateSlot): void {
        var cmd: DebitGame = new DebitGame();
        cmd.addEventListener(ServerResponseEvent.RESPONSE, (e: ServerResponseEvent) => { this.onDebitGame(e) });
        cmd.execute();
    }

    private onDebitGame(e: ServerResponseEvent): void {
        this.model.currentWin = 0;
        this.model.lastAction = e.data as ActionVO;
        this.main.setCurrentModeSlot(this.data as string);
    }
}

//-------------------------------------------------------------------------------------------

class StateSlotRoute extends StateSlot {
    private action: ActionVO;

    public runStateSlot(oldStateSlot: StateSlot): void {
        super.runStateSlot(oldStateSlot);

        var cmd: CreditGame = new CreditGame(this.model.modeLine, this.model.amountBet);
        cmd.addEventListener(ServerResponseEvent.RESPONSE, (e: ServerResponseEvent) => { this.onSpinCommand(e); });
        cmd.execute();
    }

    private onSpinCommand(e: ServerResponseEvent): void {
        this.action = e.data;
        this.model.lastAction = this.action;
        this.model.combination = this.action.parseCombinationRoll();

        this.slotGame.getMainScene().showRollCombination(this.model.combination, () => { this.completeSpinAnimation() });
    }
    private completeSpinAnimation(): void {
        if (this.action.Action == ModelSlot.ID_LOSE)
            this.main.setCurrentModeSlot(ModelSlot.MODE_READY);
        else
            this.main.setCurrentModeSlot(ModelSlot.MODE_ROUTE_WIN);
    }
}

//-------------------------------------------------------------------------------------------

class StateSlotRouteWin extends StateSlot {
    private mainScene: IMainScene;
    private tween: createjs.Tween;

    public runStateSlot(oldStateSlot: StateSlot): void {
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
            this.mainScene.showWinLines(this.model.lastAction.WinLines, true, () => { this.completeShowLines() });
            this.mainScene.showWin(this.model.lastAction.Summ);
        }
    }

    private completeShowLines(): void {
        this.panel.reBlock();

        if (this.model.isAutoMode)
            this.tween = createjs.Tween.get(this).wait(2000).call(() => { this.downStart(); });
    }

    public exitStateSlot(newStateSlot: StateSlot): void {
        this.clearTimeout();

        this.mainScene.showWinLines(null);
        super.exitStateSlot(newStateSlot);
    }

    public downGamble1(): void {
        this.goGamble();
    }

    public downGamble2(): void {
        this.goGamble();
    }

    protected goGamble(): void {
        this.clearTimeout();

        this.model.summInput = this.model.lastAction.Summ;
        this.main.setCurrentModeSlot(ModelSlot.MODE_GAMBLE);
    }

    public downStart(): void {
        this.clearTimeout();
        this.main.setCurrentModeSlot(ModelSlot.MODE_DEBIT, ModelSlot.MODE_READY);
    }

    private clearTimeout(): void {
        if (this.tween != null) {
            createjs.Tween.removeTweens(this);
            this.tween = null;
        }
    }
}

//-------------------------------------------------------------------------------------------

class StateSlotGamble extends StateSlot {
    protected gamble: IGambleScene;
    public downSelectBtn(nom: number): void {
        var selectNom: number = nom;
        this.gamble.setSelectValue(selectNom);
        this.main.setCurrentModeSlot(ModelSlot.MODE_GAMBLE_CHOICE, this.gamble.getSelectValue());
    }

    public runStateSlot(oldStateSlot: StateSlot): void {
        this.gamble = this.slotGame.getGambleScene();
        this.gamble.resetGamble();

        this.slotGame.showScene(this.gamble);
    }

    public exitStateSlot(newStateSlot: StateSlot): void {
        if (!(newStateSlot instanceof StateSlotGambleChoice))
            this.slotGame.removeScene(this.gamble);
    }

    public downStart(): void {
        this.main.setCurrentModeSlot(ModelSlot.MODE_DEBIT, ModelSlot.MODE_READY);
    }
}

//-------------------------------------------------------------------------------------------

class StateSlotGambleChoice extends StateSlot {
    private action: ActionVO;

    public runStateSlot(oldStateSlot: StateSlot): void {
        this.panel.blockComboBtns();
        var cmd: GambleEndGame = new GambleEndGame(this.data as string);
        cmd.addEventListener(ServerResponseEvent.RESPONSE, (e: ServerResponseEvent) => { this.onGamble(e) });
        cmd.execute();
    }

    private onGamble(e: ServerResponseEvent): void {

        this.action = e.data as ActionVO;
        this.model.lastAction = this.action;
        this.model.currentWin = this.action.Summ;

        if (this.action.Action == ModelSlot.ID_LOSE)
            this.main.setCurrentModeSlot(ModelSlot.MODE_GAMBLE_LOSE);
        else
            this.main.setCurrentModeSlot(ModelSlot.MODE_GAMBLE_WIN);
    }
}

//-------------------------------------------------------------------------------------------

class StateSlotGambleWin extends StateSlotGamble {
    public runStateSlot(oldStateSlot: StateSlot): void {
        this.gamble = this.slotGame.getGambleScene();
        if (this.model.error == 16) {
            var ar: Array<string> = this.model.lastAction.CombinationAux.split("&");
            ar.shift();
            this.gamble.setLastGamble(this.model.lastAction.CombinationAux);
        }
        else {
            soundManager.playSound(SoundManager.SOUND_CARDWIN);
            this.gamble.resultGamble(this.model.lastAction.CombinationAux);
        }
        this.slotGame.showScene(this.gamble);

        if (!this.gamble.useCompleteCallback(this.completeCallback))
            createjs.Tween.get(this).wait(2000).call(() => { this.completeCallback(); });
    }

    private completeCallback(): void {
        this.timeoutModeGamble();
    }

    private timeoutModeGamble(): void {
        this.main.setCurrentModeSlot(ModelSlot.MODE_GAMBLE);
    }
}

//-------------------------------------------------------------------------------------------

class StateSlotGambleLoose extends StateSlotGamble {
    public runStateSlot(oldStateSlot: StateSlot): void {
        this.gamble = this.slotGame.getGambleScene();
        this.gamble.resultGamble(this.model.lastAction.CombinationAux);

        if (!this.gamble.useCompleteCallback(this.completeCallback))
            createjs.Tween.get(this).wait(2000).call(() => { this.timeoutModeReady(); });
    }

    private completeCallback(): void {
        this.timeoutModeReady();
    }

    private timeoutModeReady(): void {
        this.main.setCurrentModeSlot(ModelSlot.MODE_READY);
    }
}

//-------------------------------------------------------------------------------------------

class StateSlotBonus extends StateSlot {
    public runStateSlot(oldStateSlot: StateSlot): void {
        this.slotGame.getMainScene().showWinBonus();

        var se: SoundEnity = soundManager.playSound(SoundManager.SOUND_BONUS);
        if (se.isPlayed) {
            se.addEventListener(SoundEnity.COMPLETE_SOUND, this.onCompleteSound);
        }
        else
            setTimeout(() => { this.showTimerBonus() }, 3000);
    }

    private onCompleteSound(e: Event): void {
        e.currentTarget.removeEventListener(SoundEnity.COMPLETE_SOUND, this.onCompleteSound);
        this.showTimerBonus();
    }

    private showTimerBonus(): void {
        var action: ActionVO = this.model.lastAction;
        if (action.Action == ModelSlot.ID_BONUS_WIN || action.Action == ModelSlot.ID_BONUS_WIN_SB_NO || action.Action == ModelSlot.ID_BONUS_WIN_SB)
            this.main.setCurrentModeSlot(ModelSlot.MODE_BONUS_CHOICE);
        else
            this.main.setCurrentModeSlot(ModelSlot.MODE_BONUS_SPEC);
    }
}

//-------------------------------------------------------------------------------------------

class StateSlotBonusChoice extends StateSlot {
    protected bonus: IBonusScene;

    public runStateSlot(oldStateSlot: StateSlot): void {
        this.bonus = this.slotGame.getBonusScene();
       
        this.model.currentWin = 0;

        this.panel.setModeComboBet(0);

        setTimeout(() => {
            this.slotGame.showScene(this.bonus);
            this.bonus.resetBonus(this.model.lastAction.Summ, this.isSuperbonus, () => { this.completeBonus() });
        }, 10);
    }

    private get isSuperbonus(): boolean {
        return this.model.lastAction.Action == ModelSlot.ID_BONUS_WIN_SB_NO || this.model.lastAction.Action == ModelSlot.ID_BONUS_WIN_SB;
    }

    private completeBonus(): void {
        if (this.isSuperbonus)
            this.main.setCurrentModeSlot(ModelSlot.MODE_SUPERBONUS);
        else {
            this.main.setCurrentModeSlot(ModelSlot.MODE_DEBIT, ModelSlot.MODE_READY);
        }
    }

    public exitStateSlot(newStateSlot: StateSlot): void {
        this.slotGame.removeScene(this.bonus);
    }

    public downSelectBtn(nom: number): void {
        this.bonus.selectBonus(nom);
    }
}

//-------------------------------------------------------------------------------------------

class StateSlotSuperbonus extends StateSlot {
    protected bonus: IBonusScene;

    public runStateSlot(oldStateSlot: StateSlot): void {
        this.model.currentWin = this.model.lastAction.Summ;

        this.bonus = this.slotGame.getSuperbonusScene();
        this.bonus.resetBonus(this.model.lastAction.SummAux, this.isWin, () => { this.completeBonus()});

        this.slotGame.showScene(this.bonus);
        this.panel.setModeComboBet(0);
    }

    public exitStateSlot(newStateSlot: StateSlot): void {
        this.slotGame.removeScene(this.bonus);
    }

    private completeBonus(): void {
        this.main.setCurrentModeSlot(ModelSlot.MODE_DEBIT, ModelSlot.MODE_READY);

    }

    private get isWin(): boolean {
        return this.model.lastAction.Action == ModelSlot.ID_BONUS_WIN_SB;
    }

    public downSelectBtn(nom: number): void {
        this.bonus.selectBonus(nom);
        this.panel.blockComboBtns();
    }
}





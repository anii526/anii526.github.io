class SlotEnity extends createjs.MovieClip {

    private currentScene: IScene;
    protected mainScene: IMainScene;
    protected gamble: IGambleScene;
    protected help: IHelpScene;
    protected bonus: IBonusScene;
    protected superbonus: IBonusScene;

    constructor() {
        super();
    }

    public showScene(scene: IScene): void {
        if (this.currentScene != null)
            this.removeChild(this.currentScene);
        this.addChild(scene);
        this.currentScene = scene;
    }

    public removeScene(scene: IScene): void {
        if (this.currentScene != null)
            this.removeChild(this.currentScene);
        this.showScene(this.mainScene);
    }

    public getIsShield(): boolean {
        return false;
    }

    public showHelp(): void {
        this.addChild(this.getHelpScene());
    }
    public hideHelp(): void {
        this.removeChild(this.getHelpScene());
    }

    public getHelpScene(): IHelpScene {
        return null;
    }
}

//-------------------------------------------------------------------------------------------

class SceneSlot extends createjs.MovieClip {
    protected mc: createjs.MovieClip;
    protected modelSlot: ModelSlot;

    constructor(mc: createjs.MovieClip) {
        super();
        this.mc = mc;
        this.addChild(mc);
        this.modelSlot = mainSlot.model;

        createjs.Tween.get(this).wait(1).call(() => { this.initDisplay(); });
    }

    protected initDisplay(): void {

    }
}

//-------------------------------------------------------------------------------------------

class BScene extends SceneSlot {
    private completeCallback: Function;
    protected isWin: boolean;
    protected summ: number;
    protected selectID: number;
    protected tmm: TextMoneyMove;
    private timeoutComplete: number;
    protected arSelected: Array<number>;

    protected isBlockSelectedBtn: Boolean = true;


    constructor(mc: createjs.MovieClip) {
        super(mc);

        this.tmm = new TextMoneyMove(mc["win_txt"]);
        this.tmm.addEventListener(EVENT_COMPLETE, () => { this.onCompleteMoveText() });
    }

    protected getWinTxt(): createjs.Text {
        return this.mc["win_txt"];
    }

    protected bindProperties(): void {

    }

    protected onCompleteMoveText(): void {
        createjs.Tween.get(this).wait(this.timeoutComplete).call(() => { this.completeCallback(); });
    }

    public resetBonus(summ: number, isSb: boolean, completeCallback: Function): void {
        this.summ = summ;
        this.isWin = isSb;
        this.completeCallback = completeCallback;
        this.arSelected = new Array();
    }
    public selectBonus(nom: number): void {
        this.arSelected.push(nom);
        mainSlot.panel.blockComboBtns();
    }

    protected nextAction(): void {
        this.reBlockBtn();
    }

    protected completeBonus(arText: Array<createjs.Text>, time: number = 1000): void {
        this.timeoutComplete = time;
        if (arText)
            createjs.Tween.get(this).wait(300).call(() => { this.tmm.startMove(arText); });
        else
            createjs.Tween.get(this).wait(this.timeoutComplete).call(() => { this.completeCallback(); });
    }

    protected reBlockBtn(): void {
        if (this.isBlockSelectedBtn)
            mainSlot.panel.reBlock(this.arSelected);
        else
            mainSlot.panel.reBlock();
    }
}

//-------------------------------------------------------------------------------------------

class MainScene extends SceneSlot {
    protected rolls: Rolls;
    protected lines: LinesWin;
    protected callbackCompleteRoll: Function;
    protected callbackCompleteLines: Function;

    constructor(mc: createjs.MovieClip) {
        super(mc);
    }

    protected addRoll(px: number, py: number): void {
        this.addChild(this.rolls = new Rolls(this.modelSlot.settingRoll));
        this.rolls.addEventListener(Rolls.COMPLETE_ROLLS, () => { this.onCompleteRolls(); });
        this.rolls.x = px;
        this.rolls.y = py;
    }
    protected onCompleteRolls(): void {
        if (this.callbackCompleteRoll != null)
            this.callbackCompleteRoll();
    }

    protected addWinLine(px: number, py: number, LineClass: new () => createjs.MovieClip): void {
        this.lines = new LinesWin(LineClass)
        this.addChild(this.lines);
        this.lines.addEventListener(LinesWin.END_BLINK, () => { this.onCompleteShowLine() });
        this.lines.x = px;
        this.lines.y = py;
    }

    protected onCompleteShowLine(): void {
        if (this.callbackCompleteLines != null)
            this.callbackCompleteLines();
    }

    public showRollCombination(comb: Array<Array<number>>, callbackCompleteRoll: Function): void {
        this.callbackCompleteRoll = callbackCompleteRoll;
        this.rolls.setCombs(comb);
    }

    public showWinLines(ar: Array<number>, isAnimate: boolean = true, callbackCompleteLines: Function = null): void {
        this.callbackCompleteLines = callbackCompleteLines;

        if (ar != null && ar.length)
            this.lines.showLines(ar, isAnimate);
        else
            this.lines.clear();
    }

    public showWinBonus(): void {
        this.rolls.showWinBonus(this.getNumBonus());
    }
    protected getNumBonus(): number {
        if (this.getContIndex(1) >= 3)
            return 1;
        else
            return 2;
    }

    protected getContIndex(ind: number): number {
        if (this.modelSlot.lastAction)
            return this.modelSlot.lastAction.getCountIndex(ind);
        else
            return 0;
    }

    public showWin(value: number): void {

    }

}

class HelpScene extends SceneSlot {
    constructor(mc: createjs.MovieClip) {
        super(mc);
        mc.stop();
        // this.hideHelp();
    }

    protected bindProperties(): void {

    }

    public selectBtn(nom: number): void {
        if (nom == 0) {
            if (this.mc.currentFrame == 0) {
                this.mc.gotoAndStop(this.mc.timeline.duration - 1);
            }
            else {
                this.mc.gotoAndStop(this.mc.currentFrame - 1);
            }
        }
        else {
            if (this.mc.currentFrame == this.mc.timeline.duration - 1)
                this.mc.gotoAndStop(0);
            else
                this.mc.gotoAndStop(this.mc.currentFrame + 1);
        }
    }

    public showhelp(): void {
        this.addChild(this.mc);
    }

    public hideHelp(): void {
        this.removeChild(this.mc);
    }
}
class GambleScene extends SceneSlot {
    protected completeCallback: Function;
    protected dealer: Card;
    protected cards: Array<Card> = new Array<Card>();
    protected selectNom: number;
    protected resultcards: string;
    protected pick_mc: createjs.MovieClip;

    protected createCards(cardClass: new () => Card): void {
        this.mc.addChild(this.dealer = new cardClass());
        this.dealer.x = this.mc["dealer_card"].x - 8;
        this.dealer.y = this.mc["dealer_card"].y - 6;

        for (var i: number = 1; i <= 4; i++) {
            var c: Card = new cardClass();
            this.mc.addChild(c);
            c.x = this.mc["card" + i].x - 8;
            c.y = this.mc["card" + i].y - 6;
            this.cards.push(c);
        }
    }

    protected clear(): void {
        for (var i: number = 0; i < 4; i++) {
            this.cards[i].setCard("B");
        }
        this.pick_mc.visible = false;
    }

    protected showAllCard(): void {
        var ar: Array<string> = this.resultcards.split("&");
        for (var i: number = 0; i < this.cards.length; i++) {
            var c: Array<string> = ar[i + 1].split("_");
            this.cards[i].setCard(c[1], c[0]);
        }
    }

    protected generateCardDealer(): void {
        this.dealer.setCard("B");

        var cmd: GambleStartGame = new GambleStartGame();
        cmd.addEventListener(ServerResponseEvent.RESPONSE, (e: ServerResponseEvent) => { this.onResponseStart(e) });
        cmd.execute();

    }
    private onResponseStart(e: ServerResponseEvent): void {
        soundManager.playSound(SoundManager.SOUND_CARD_OPEN);
        this.dealer.setCardOnStr((e.data as ActionVO).CombinationAux);
    }

    public setLastGamble(value: String): void {
        var ar: Array<string> = value.split("&");

        var c: Array<string> = ar[0].split("_");
        this.setSelectValue(parseInt(c[2]));
        this.dealer.setCard(c[1], c[0]);
        ar.shift();
        this.resultGamble(ar.join("&"));
    }

    public resetGamble(): void {
        this.clear();
        if (this.modelSlot.lastAction.Action == ModelSlot.ID_GAMBLE_START)
            this.dealer.setCardOnStr(this.modelSlot.lastAction.CombinationAux);
        else
            this.generateCardDealer();
        this.updatePrize();
    }

    public getSelectValue(): string {
        return "" + this.selectNom;
    }

    public resultGamble(result: string): void {
        this.resultcards = result;
        var ar: Array<string> = result.split("&");

        var c: Array<string> = ar[this.selectNom].split("_");
        this.cards[this.selectNom - 1].setCard(c[1], c[0]);
        soundManager.playSound(SoundManager.SOUND_CARD_OPEN);
        createjs.Tween.get(this).wait(1000).call(() => { this.showAllCard(); });
        this.updatePrize();
    }

    public setSelectValue(type: number): void {
        this.selectNom = type;
        this.mc["pick_mc"].x = this.mc["card" + this.selectNom].x - 19;
        this.mc["pick_mc"].visible = true;
    }


    protected updatePrize(): void {

    }


    public useCompleteCallback(completeCallback: Function): boolean {
        return false;
    }
}
class BonusScene extends BScene {
    protected arPrizes: Array<number>;
    protected arBonuses: Array<number>;
    protected isHasShield: boolean = false;
    protected isAddBombForShild: boolean;
    protected isLose: boolean = false;
    protected currentPrize: number = -1;

    public resetBonus(summ: number, isSb: boolean, completeCallback: Function): void {
        super.resetBonus(summ, isSb, completeCallback);

        this.isLose = false;
        this.arBonuses = new Array();
        this.isAddBombForShild = false;
        this.isHasShield = mainSlot.slot.getIsShield();
    }

    protected getPrizes(s: number, count: number): Array<number> {
        var mn: number = 1;

        if (s <= 5)
            mn = 100;
        else if (s < 10)
            mn = 10;

        var ar: Array<number> = new Array();

        var lost: number = s * mn;
        for (var i: number = 0; i < count - 1; i++) {
            var p: number = (0.2 + Math.random() * 0.7) * lost * 0.6;
            var r_p: number = Math.floor(p * this.getMn(p)) / (mn * this.getMn(p));

            ar.push(r_p);
            lost = lost - r_p * mn;
        }
        if (lost || ar.length < count) {
            if (s.toString().split(".").length == 2 && mn < 100) {
                lost *= 100 / mn;
                mn = 100;
            }
            ar.push(Math.round(lost) / (mn));
        }
        return ar;
    }

    private getMn(v: Number): number {
        if (v < 1)
            return 100;

        return 1;
    }
}
class SuperbonusScene extends BScene { }

//-------------------------------------------------------------------------------------------

class TextMoneyMove extends createjs.EventDispatcher {
    private targetTF: createjs.Text;
    private arTF: Array<createjs.Text>;
    private sourceTF: createjs.Text;

    private intervalID: number;
    private moneyOnStep: number;
    private resultSum: number;
    private tween: createjs.Tween;

    constructor(tf: createjs.Text) {
        super();
        this.targetTF = tf;
    }

    public startMove(ar: Array<createjs.Text>): void {
        this.arTF = ar;
        soundManager.playSound(SoundManager.SOUND_MONEY_MOVE, true, 100);
        this.nextMove();

    }
    private nextMove(): void {
        if (this.intervalID != null)
            clearInterval(this.intervalID);

        if (this.arTF.length > 0) {
            this.sourceTF = this.arTF.shift();
            this.moneyOnStep = this.sourceValue / 30;
            if (this.moneyOnStep < 3)
                this.moneyOnStep = this.sourceValue / 10;
            if (this.moneyOnStep < 1)
                this.moneyOnStep = 1;

            this.resultSum = parseFloat(this.targetTF.text) + this.sourceValue;
            this.intervalID = setInterval(() => { this.stepMove() }, 100);
        }
        else {
            soundManager.stopSound(SoundManager.SOUND_MONEY_MOVE);
            this.dispatchEvent(EVENT_COMPLETE);
        }
    }

    private stepMove(): void {
        var sourceMoney: number = this.sourceValue;
        var targetMoney: number = parseInt(this.targetTF.text);

        if (isNaN(sourceMoney))
            sourceMoney = 0;
        if (sourceMoney == 0) {
            this.targetTF.text = "" + Math.round(this.resultSum * 100) / 100;
            this.nextMove();
        } else {
            this.targetTF.text = "" + Math.round((targetMoney + this.moneyOnStep) * 100) / 100;
            sourceMoney -= this.moneyOnStep;
            if (sourceMoney < 0)
                sourceMoney = 0;
            this.sourceTF.text = "" + Math.round(sourceMoney * 100) / 100;
        }
    }

    private get sourceValue(): number {
        var sourceMoney: number = parseFloat(this.sourceTF.text);
        if (isNaN(sourceMoney))
            sourceMoney = 0;
        return sourceMoney;
    }
}

//-------------------------------------------------------------------------------------------

class Card extends createjs.MovieClip {
    private mc: createjs.MovieClip;
    private suits: Array<string>;
    public suit: string;
    public value: string;

    public Card(suit: string = null, value: string = null) {
        this.suits = this.getSiutsFormat();
        this.setCard(suit, value);
    }

    protected getSiutsFormat(): Array<string> {
        return ["S", "C", "D", "H"];
    }

    public setCard(suit: string, value: string = null): void {
        this.suit = suit;
        this.value = value;

        if (this.mc && this.mc.parent)
            this.removeChild(this.mc);
        this.mc = this.getCard(suit);
        if (value)
            //вот тут была ошибка и в принципе ошибки могут быть во многих местах, так как отчет в 
            //креат жс идет не с 1, а с нуля, но макс это не взял в расчет.
            this.mc.gotoAndStop(parseInt(value) - 2);
        this.addChild(this.mc);
    }

    public setCardOnStr(suitValue: String): void {
        var ar: Array<string> = suitValue.split("_");
        this.setCard(ar[1], ar[0]);
    }

    protected getCard(suit: string): createjs.MovieClip {
        return new createjs.MovieClip();
    }

    public getRandomCard(startValue: number = 0): string {
        var suit: string = this.suits[Math.round(Math.random() * 3)];

        var value: number = 1 + startValue + Math.round(Math.random() * (13 - startValue));
        return "" + value + "_" + suit;
    }
    public getSuitValue(): string {
        return "" + this.value + "_" + this.suit;
    }
}

//-------------------------------------------------------------------------------------------

class CardDefault extends Card {

    protected getCard(suit: string): createjs.MovieClip {
        switch (suit) {
            case "S":
                return new lib.spades_card();
            case "C":
                return new lib.clubs_card();
            case "D":
                return new lib.diamonds_card();
            case "H":
                return new lib.hearts_card();
            default:
                return new lib.back_card();
        }
    }

}

//-------------------------------------------------------------------------------------------

class Rolls extends createjs.MovieClip {
    public static COMPLETE_ROLLS: string = "complete_rolls";

    private arRoll: Array<Roll> = new Array<Roll>();
    private counter: number;
    private rollVO: RollVO;

    constructor(rollVO: RollVO) {
        super();
        this.rollVO = rollVO;

        for (var i: number = 0; i < rollVO.count_roll; i++) {
            var r: Roll = new Roll(i, rollVO);
            r.addEventListener(Roll.COMPLETE_ROLL, () => { this.onComplete(); });
            r.x = rollVO.step_x * i;
            this.arRoll.push(r);
            this.addChild(r);
        }
    }

    public setCombs(comb: Array<Array<number>>): void {
        if (this.arRoll[0].isHasCombination) {
            soundManager.playSound(SoundManager.SOUND_ROUTESTART, false, 3);
        }
        this.counter = 0;
        for (var i: number = 0; i < comb.length; i++) {
            this.arRoll[i].setComb(comb[i]);
        }
    }
    public showWinBonus(idItem: number): void {
        for (var i: number = 0; i < this.arRoll.length; i++) {
            this.arRoll[i].showWinBonus(idItem);
        }
    }

    private onComplete(): void {
        soundManager.stopSound(SoundManager.SOUND_ROUTESTART);
        this.counter++;
        if (this.counter == this.rollVO.count_roll) {
            this.dispatchEvent(Rolls.COMPLETE_ROLLS);
        }
    }
}

//-------------------------------------------------------------------------------------------

class Roll extends createjs.MovieClip {
    public static COMPLETE_ROLL: string = "complete_roll";
    private static ICON_ROUTE: number = 20;
    private static TIME_ON_ICON: number = 15;

    private rollVO: RollVO;
    private container: createjs.MovieClip = new createjs.MovieClip();
    private currentComb: Array<number>;
    private targetComb: Array<number>;
    private nomRoll: number;
    private cacheIcons: Object = new Object();

    constructor(nomRoll: number, rollVO: RollVO) {
        super();
        this.nomRoll = nomRoll;
        this.rollVO = rollVO;
        var shape = new createjs.Shape(new createjs.Graphics().beginFill("red").drawRect(0, 0, rollVO.step_x, rollVO.height_mask ? rollVO.height_mask : rollVO.step_y * rollVO.count_row));
        this.container.mask = shape;
        this.addChild(this.container);

    }

    public get isHasCombination(): boolean {
        return this.currentComb != null;
    }

    public setComb(comb: Array<number>): void {
        if (this.currentComb != null) {
            this.targetComb = comb;
            this.createLine(Roll.ICON_ROUTE + this.nomRoll * this.rollVO.diffIconRoute);
            this.currentComb = comb;

        }
        else {
            this.setContentIcons(comb);
            this.currentComb = comb;
            this.completeRoll();
        }
    }

    public showWinBonus(idItem: number): void {
        for (var i: number = 0; i < this.container.numChildren; i++) {
            var ic: IconRoll = this.container.getChildAt(i) as IconRoll;
            if (ic.nom == idItem)
                ic.showAnimationWin();
        }
    }

    private clear(): void {
        while (this.container.numChildren > 0) {
            var ic: IconRoll = this.container.getChildAt(0) as IconRoll;
            if (!this.cacheIcons[ic.nom])
                this.cacheIcons[ic.nom] = new Array<IconRoll>();
            this.cacheIcons[ic.nom].push(ic);

            this.container.removeChildAt(0);
        }

        this.container.y = 0;
    }

    private getIcon(ind: number): IconRoll {
        var ic: IconRoll;
        if (this.cacheIcons[ind] && this.cacheIcons[ind].length) {
            ic = this.cacheIcons[ind].pop();
        } else {
            ic = new IconRoll(ind);
        }
        ic.restart();
        return ic;
    }

    private createLine(count: number): void {
        var ar: Array<number> = this.targetComb.concat();
        for (var i: number = 0; i < count; i++) {
            ar.push(this.rollVO.getRandomIndex());
        }
        ar = ar.concat(this.currentComb);

        this.setContentIcons(ar);

        this.container.y = - this.rollVO.step_y * (ar.length - this.rollVO.count_row);

        var t: number = count / Roll.TIME_ON_ICON;

        createjs.Tween.get(this.container, { override: true }).to({ y: 0 }, t * 1000)
            .call(() => { this.completeRoll(); });
        // TweenMax.to(container, t, { y: 0, ease: Sine.easeOut, onComplete: completeRoll });
        createjs.Tween.get(this).wait((t - 0.15) * 1000).call(() => { this.playSound(); });
    }

    private playSound(): void {
        soundManager.playSound(SoundManager.SOUND_ROUTESTOP, false);
    }


    private completeRoll(): void {
        this.dispatchEvent(Roll.COMPLETE_ROLL);
    }

    private setContentIcons(ar: Array<number>): void {
        this.clear();

        for (var i: number = 0; i < ar.length; i++) {
            var ic: IconRoll = this.getIcon(ar[i]);
            this.container.addChild(ic);
            ic.y = i * this.rollVO.step_y;
        }
    }
}

//-------------------------------------------------------------------------------------------

class IconRoll extends createjs.MovieClip {
    private ic: createjs.DisplayObject;
    public nom: number;
    protected animMc: createjs.MovieClip;
    private isAnimate: boolean = false;

    constructor(nom: number) {
        super();
        this.nom = nom;
        this.ic = this.getIcon(nom);
        this.addChild(this.ic);
    }

    public restart(): void {
        if (this.animMc && this.isAnimate)
            this.removeChild(this.animMc);
        this.isAnimate = false;
    }

    protected getIcon(nom: number): createjs.DisplayObject {
        //throw new Error("Не задана иконка");
        var s: createjs.DisplayObject = new lib["icon" + nom]; //getDefinitionByName("icon" + nom) as Class;
        //var icBD: BitmapData = new s();
        return s;
    }

    public showAnimationWin(): void {
        if (!this.animMc)
            this.animMc = this.getAnimMc();
        this.isAnimate = true;
        this.addChild(this.animMc);
    }

    protected getAnimMc(): createjs.MovieClip {
        // throw new Error("Не задана иконка анимации");
        var s: createjs.MovieClip = new lib["icon" + this.nom + "_an"];
        return s;
    }
}

//-------------------------------------------------------------------------------------------

class LinesWin extends createjs.MovieClip {
    public static END_BLINK: string = "end_blinc";

    private classLine: new () => createjs.MovieClip;
    private viewLines: Array<LinesEnity>;
    private lines: Array<LinesEnity> = new Array<LinesEnity>(9);
    private isAnimate: boolean;
    private step: number = 0;
    private g: createjs.MovieClip;

    constructor(LineClass: new () => createjs.MovieClip) {
        super();
        this.classLine = LineClass;
    }

    public showLines(lines: Array<number>, isAnimate: boolean): void {
        this.isAnimate = isAnimate;
        this.clear();
        this.step = 0;
        for (var i: number = 0; i < lines.length; i++) {
            this.viewLines.push(this.getline(lines[i]));
        }

        this.showNextLine();
    }

    private showNextLine(): void {
        if (this.viewLines.length > this.step) {
            this.addChild(this.viewLines[this.step]);
            this.viewLines[this.step].showLine(this.isAnimate);
        }
        else {
            this.dispatchEvent(LinesWin.END_BLINK)
        }
    }

    private getline(ind: number): LinesEnity {
        if (!this.lines[ind - 1]) {
            this.lines[ind - 1] = new LinesEnity(this.classLine, ind);
            this.lines[ind - 1].addEventListener(LinesWin.END_BLINK, () => { this.onEndBlink(); });

        }
        return this.lines[ind - 1];
    }

    private onEndBlink(): void {
        this.step++;
        this.showNextLine();
    }

    public clear(): void {
        if (this.viewLines != null) {
            for (var i: number = 0; i < this.viewLines.length; i++) {
                this.viewLines[i].parent.removeChild(this.viewLines[i]);
            }
        }
        this.viewLines = new Array<LinesEnity>();
    }
}

//-------------------------------------------------------------------------------------------

class LinesEnity extends createjs.MovieClip {
    private static BLINK_INTERVAL: number = 0.25;
    private static BLINK_COUNT: number = 10;

    private countBlinc: number = 0;
    private index: number;
    private line: createjs.MovieClip;

    constructor(classLine: new () => createjs.MovieClip, index: number) {
        super();
        this.index = index;

        this.line = new classLine()
        this.addChild(this.line);
        this.line.gotoAndStop(this.getFrame(index) - 1);
        this.line.cache(0, 0, 600, 300);
    }

    public showLine(isAnimate: boolean): void {
        this.countBlinc = isAnimate ? LinesEnity.BLINK_COUNT : 1;
        this.showBlinkLines();

        if (isAnimate)
            soundManager.playSound(SoundManager.SOUND_ADDLINE, false);
    }

    private showBlinkLines(): void {
        this.countBlinc--;
        if (this.countBlinc > 0) {
            var t: number = (this.countBlinc / LinesEnity.BLINK_COUNT) * LinesEnity.BLINK_INTERVAL / 2;
            createjs.Tween.get(this, { override: true }).to({ alpha: 0 }, 1000 * t)
                .call(() => { this.hideBlinkLines(); });
        } else {
            this.dispatchEvent(LinesWin.END_BLINK)
        }
    }

    private hideBlinkLines(): void {
        var t: number = (this.countBlinc / LinesEnity.BLINK_COUNT) * LinesEnity.BLINK_INTERVAL / 2;
        createjs.Tween.get(this, { override: true }).to({ alpha: 1 }, 1000 * t)
            .call(() => { this.showBlinkLines(); });
    }

    private getFrame(fr: number): number {
        return fr;
    }

}

//-------------------------------------------------------------------------------------------

class AnimationItemVO {
    public an: string = null;
    public anRandom: Array<string> = null;
    public timeHide: number = null;  // скрывать после проигрывания на 
    public randomTime: number = null;  // Math.random() * randomTime * timeHide
    public completeAnim: Function = null; // метод вызываем при комплите
    public startAnim: Function = null; // метод вызываем при комплите
    public completeStop: boolean = null; // стоп при комплите
    public dispatchComplete: boolean = null; // диспатчить от всей анимации
    public completeFrame: number = null;  // завершить на данном фрейме

    constructor(data: Object) {
        for (var s in data) {
            if (this.hasOwnProperty(s))
                this[s] = data[s];
        }
    }

    public getAnimName(): string {
        if (this.an)
            return this.an;
        else if (this.anRandom)
            return this.anRandom[Math.round(Math.random() * (this.anRandom.length - 1))];

        return null;
    }
}

class AnimationItem extends createjs.MovieClip {
    public static NEXT_ANIMATION: string = "next_animation";
    private mc: createjs.MovieClip;
    public info: AnimationItemVO;
    private timeoutId: number;
    public nameAn: string;
    private objFrameCallback: Object = new Object();
    private rand: number;

    constructor(mc: createjs.MovieClip, nameAn: string) {
        super();
        this.mc = mc;
        this.nameAn = nameAn;
        //this.addChild(mc);

        this.addEventListener("added", () => { this.onAddToStage() });
        this.addEventListener("removed ", () => { this.onRemoveFromStage() });

        this.addChild(mc);
        this.mc.stop();

        this.rand = Math.random();
    }

    private onAddToStage(): void {
        this.addFrameScript(this.mc.timeline.duration - 1, () => { this.completeAnim() });

        this.mc.gotoAndPlay(1);
        if (this.info.startAnim != null) {
            this.info.startAnim(this.nameAn, this.mc);
        }
    }

    private onRemoveFromStage(): void {
        this.mc.stop();
        if (this.timeoutId)
            clearTimeout(this.timeoutId);
    }

    public setModeAnimation(info: AnimationItemVO): void {
        this.info = info;
        if (this.info.completeFrame != null)
            this.addFrameScript(this.info.completeFrame, () => { this.nextAnimation() });
    }

    private completeAnim(): void {
        if (this.info) {
            if (this.info.timeHide) {
                this.mc.stop();
                this.alpha = 0;
                var r: number = this.info.randomTime ? this.info.randomTime : 1;
                this.timeoutId = setTimeout(() => { this.mc.gotoAndPlay(1); this.alpha = 1; }, this.info.timeHide * Math.random() * r);
            }
            if (this.info.completeAnim != null) {
                this.info.completeAnim(this.name, this.mc);
            }
            if (this.info.completeStop)
                this.mc.stop();
        }

        this.dispatchEvent(EVENT_COMPLETE);
    }

    private nextAnimation(): void {
        this.dispatchEvent(AnimationItem.NEXT_ANIMATION);
    }
    private addFrameScript(fr: number, frameCallback: Function) {
        this.objFrameCallback[fr] = frameCallback;
        if (!this.mc.hasEventListener("tick"))
            this.mc.addEventListener("tick", () => { this.onTick() });

    }
    private onTick(): void {
        if (this.objFrameCallback[this.mc.currentFrame] != null) {
            this.objFrameCallback[this.mc.currentFrame]();
            this.mc.removeAllEventListeners("tick");
        }
    }

}
class AnimationVO {
    public static COMPLETE_TIME: string = "complete_time";
    public static COMPLETE_ANIMATION: string = "complete_animation";

    public anims: Array<AnimationItemVO>;
    public nextAnim: number = -1;
    public eventComplete: string; // COMPLETE_TIME, COMPLETE_ANIMATION
    public completeTime: number;
    public randomTime: number; // от random_time - completeTime
    public nameCompleteAnimation: string; // имя анимации по которой определяем завершение всей анимации
    public noReset: boolean = false; // стирать или нет предыдущее

    public setCompleteTime(completeTime: number, randomTime: number, nextAnim: number): void {
        this.completeTime = completeTime;
        this.randomTime = randomTime;
        this.nextAnim = nextAnim;

        this.eventComplete = AnimationVO.COMPLETE_TIME;
    }

    public setCompletAnimation(nameAnim: string, nextAnim: number): void {
        this.nameCompleteAnimation = nameAnim;
        this.nextAnim = nextAnim;
        this.eventComplete = AnimationVO.COMPLETE_ANIMATION;
    }
}

class AnimEnity extends createjs.MovieClip {
    private anims: Array<AnimationItem>;
    private animsCach: Object = new Object();
    protected container: createjs.MovieClip;
    private currentNom: number;
    private animInfo: Array<AnimationVO>;
    private curAnims: AnimationVO
    private timeoutID: number;
    public isPlayAnimation: boolean = false;
    private cashMc: Object = new Object();
    private rand: number;

    constructor() {
        super();
        this.addChild(this.container = new createjs.MovieClip());
        this.rand = Math.random();
    }

    protected createMc(nameMc: string): createjs.MovieClip {
        return null;
    }

    protected getMC(nameMc: string): createjs.MovieClip {
        if (this.cashMc[nameMc] == null) {
            this.cashMc[nameMc] = this.createMc(nameMc)
        }
        return this.cashMc[nameMc];
    }

    protected setAnimsOnNames(ar: Array<string>, mc: createjs.MovieClip): void {
        this.anims = new Array<AnimationItem>()
        for (var i: number = 0; i < ar.length; i++) {
            var str: string = ar[i];
            var an: AnimationItem = new AnimationItem(mc[str], str);
            an.name = str;
            this.anims.push(an);
        }
    }

    protected showAnim(animInfo: Array<AnimationVO>): void {
        if (!animInfo)
            return;
        this.reset();
        this.animInfo = animInfo;
        this.currentNom = 0;
        this.playCurrentAnim();
    }

    private playCurrentAnim(): void {
        this.curAnims = this.animInfo[this.currentNom];
        var anArs: Array<AnimationItem> = new Array<AnimationItem>();
        for (var i: number = 0; i < this.curAnims.anims.length; i++) {
            var an: AnimationItem = this.getAnimByName(this.curAnims.anims[i].getAnimName());

            an.setModeAnimation(this.curAnims.anims[i]);
            this.container.addChild(an);
            if (an.info.dispatchComplete)
                an.addEventListener(EVENT_COMPLETE, (e: createjs.Event) => { this.onCompleteAnimation(e) });
            if (an.info.completeFrame)
                an.addEventListener(AnimationItem.NEXT_ANIMATION, (e: createjs.Event) => { this.onCompleteAnimation(e) });
            anArs.push(an);
        }

        if (this.curAnims.eventComplete == AnimationVO.COMPLETE_TIME) {
            this.timeoutID = setTimeout(() => { this.onCompleteAnimation(null) }, this.curAnims.completeTime * (this.curAnims.randomTime + Math.random() * (1 - this.curAnims.randomTime)));
        }
        else if (this.curAnims.eventComplete == AnimationVO.COMPLETE_ANIMATION) {
            var nameCompleteAnimation: string;
            if (this.curAnims.nameCompleteAnimation.indexOf("@rand_") != -1) {
                var n: number = parseInt(this.curAnims.nameCompleteAnimation.split("_")[1]);
                nameCompleteAnimation = anArs[n].nameAn;
            }
            else
                nameCompleteAnimation = this.curAnims.nameCompleteAnimation;

            var anCompl: AnimationItem = this.getAnimByName(nameCompleteAnimation);
            anCompl.addEventListener(EVENT_COMPLETE, (e: createjs.Event) => { this.onCompleteAnimation(e) });
        }
    }

    protected onCompleteAnimation(e: createjs.Event): void {
        if (e != null) {
            (e.currentTarget as AnimationItem).removeAllEventListeners(e.type);
            if ((e.currentTarget as AnimationItem).info.dispatchComplete != null) {
                this.dispatchEvent(e);
                this.isPlayAnimation = false;
            }
        }
        if (this.curAnims != null && this.curAnims.nextAnim > -1) {
            this.currentNom = this.curAnims.nextAnim;
            if (!this.animInfo[this.currentNom].noReset)
                this.reset();
            this.playCurrentAnim();
        }
    }

    public reset(): void {
        //if (timeoutID)
        //    clearTimeout(timeoutID);
        while (this.container.numChildren) {
            this.container.removeChildAt(0);
        }
    }

    protected getAnimByName(nameAnim: string): AnimationItem {
        if (this.animsCach[nameAnim] == null) {
            this.animsCach[nameAnim] = new AnimationItem(this.getMC(nameAnim), nameAnim);
            //  an.name = nameAnim;
        }
        /*  for (var i: number = 0; i < this.anims.length; i++) {
              if (this.anims[i].name == nameAnim)
                  return this.anims[i];
          }*/
        return this.animsCach[nameAnim];
    }

    protected removeAnimByName(nameAnim: string): void {
        var an: AnimationItem = this.getAnimByName(nameAnim);
        if (an.parent)
            an.parent.removeChild(an);
    }

    protected generateAnim(count: number): Array<AnimationVO> {
        var ar: Array<AnimationVO> = new Array<AnimationVO>();
        for (var i: number = 0; i < count; i++) {
            var animationVO: AnimationVO = new AnimationVO();
            animationVO.anims = new Array<AnimationItemVO>();
            ar.push(animationVO);
        }
        return ar;
    }
}

class PanelInfo extends createjs.EventDispatcher {
    protected mc: createjs.MovieClip;
    protected currentMode: string;
    protected intervalID: number;
    protected dictMethod: Object = new Object();
    protected counter: number;
    protected curView: createjs.MovieClip;
    protected curValue: String;

    constructor(mc: createjs.MovieClip) {
        super();
        this.mc = mc;

        for (var i: number = 0; i < mc.numChildren; i++) {
            (mc.getChildAt(i) as createjs.DisplayObject).visible = false;
        }

        this.mc["msg_txt"].text = '';
    }
    public setMode(mode: string, value: string = ""): void {
        clearInterval(this.intervalID);

        this.currentMode = mode;
        this.curValue = value;
        if (this.curView)
            this.curView.visible = false;
        if (this.dictMethod[mode]) {
            this.dictMethod[mode](value);
            this.curView.visible = true;
        }
    }
}

class PanelInfoMain extends PanelInfo {
    public static MODE_ANIM: string = "anim";
    public static MODE_WIN: string = "win";
    public static MODE_TAKE: string = "take";
    public static MODE_RISK: string = "risk";

    constructor(mc: createjs.MovieClip) {
        super(mc);

        this.dictMethod[PanelInfoMain.MODE_ANIM] = (value: string) => { this.showAnimation(value); }
        this.dictMethod[PanelInfoMain.MODE_WIN] = (value: string) => { this.showWin(value); }
        this.dictMethod[PanelInfoMain.MODE_TAKE] = (value: string) => { this.showTake(value); };
    }
    private showAnimation(value: string): void {
        this.counter = 1;
        this.curView = this.mc["anim"];
        this.showNextAnimation();
        this.intervalID = setInterval(() => { this.showNextAnimation() }, 2000);
    }
    private showNextAnimation(): void {
        this.curView.gotoAndStop(this.counter);
        this.counter++;
        if (this.counter > this.curView.timeline.duration)
            this.counter = 1;
    }
    private showWin(value: string): void {
        this.counter = 1;
        this.intervalID = setInterval(() => { this.showNextMsgWin() }, 1500);
        this.showNextMsgWin();
    }
    private showNextMsgWin(): void {
        if (this.counter == 1)
            this.showMsg("WIN " + this.curValue, 25);
        else
            this.showMsg("TAKE OR RISK", 20);
        this.counter++;
        if (this.counter > 2)
            this.counter = 1;
    }
    private showTake(value: String = null): void {
        this.showMsg("TAKE...");
    }
    private showMsg(msg: String, size: number = 0): void {
        this.curView = this.mc["msg_txt"];
        this.mc["msg_txt"].text = msg;
    }
}

class PanelInfoGamble extends PanelInfo {
    public static MODE_DOUBLE: string = "double";
    public static MODE_MSG: string = "msg";

    private m: number;

    constructor(mc: createjs.MovieClip, m: number = 1) {
        super(mc);
        this.m = m;

        this.dictMethod[PanelInfoGamble.MODE_DOUBLE] = (value: string) => { this.showDouble(value) };
        this.dictMethod[PanelInfoGamble.MODE_MSG] = (value: string) => { this.showMsg(value) };
    }

    private showDouble(value: string): void {
        this.counter = 1;
        this.showNextDouble();
        this.intervalID = setInterval(() => { this.showNextDouble() }, 1000);
    }

    private showNextDouble(): void {
        if (this.curView)
            this.curView.visible = false;
        if (this.counter == 1) {
            this.curView = this.mc["double_to"];
            this.curView["windouble_txt"].text = this.curValue + "?";
        }
        else {
            this.showMsgText("TAKE OR RISK", 20);
        }
        this.curView.visible = true;
        this.counter++;
        if (this.counter > 2)
            this.counter = 1;
    }

    private showMsg(value: string = null): void {
        this.showMsgText(value, 25);
    }

    private showMsgText(msg: String, size: number = 0): void {
        this.curView = this.mc["msg_txt"];
        /*if (size) {
            size = Math.round(size * m);
            mc.msg_txt.htmlText = "<font size='" + size + "'>" + msg + "<font/>";
        }
        else*/
        this.mc["msg_txt"].text = msg;

        //this.mc["msg_txt"].y = mc.bounds.y + (mc.bounds.height - mc.msg_txt.textHeight) / 2;

    }

}

interface ISlotEnity extends PIXI.Sprite {
    //initGame(): void;
    getPathViewJS(): string;
    showScene(scene: IScene): void;
    removeScene(scene: IScene): void;
    getStateSlotManager(): StateSlotManager;
    getSettingRoll(): RollVO;
    getHelpScene(): IHelpScene;
    getGambleScene(): IGambleScene;
    getBonusScene(): IBonusScene;
    getSuperbonusScene(): IBonusScene;
    getMainScene(): IMainScene;
    getIsShield(): boolean;
    showHelp(): void;
    hideHelp(): void;
}
interface IScene extends createjs.MovieClip {
}
interface IMainScene extends IScene {
    showRollCombination(comb: Array<Array<number>>, callbackCompleteRoll: Function): void;
    showWinLines(ar: Array<number>, isAnimate?: boolean, completeShowLines?: Function): void;
    showWinBonus(): void;
    showWin(value: number): void;
}
interface IHelpScene extends IScene {
    selectBtn(nom: number): void;
    showhelp(): void;
    hideHelp(): void;
}
interface IGambleScene extends IScene {
    setSelectValue(type: number): void;
    resultGamble(result: string): void;
    resetGamble(): void;
    setLastGamble(value: string): void;
    getSelectValue(): string;
    useCompleteCallback(completeCallback: Function): boolean
}
interface IBonusScene extends IScene {
    resetBonus(summ: number, isSb: boolean, completeCallback: Function): void;
    selectBonus(nom: number): void;
}

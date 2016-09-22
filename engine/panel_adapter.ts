class PanelAdapter extends createjs.EventDispatcher {

    public panel: IPanel;
    private indexlines: Array<number> = [1, 3, 5, 7, 9];
    protected dictBlockBtns: Object = new Object();
    private lastArBlockCombo: Array<number>;
    private ishelp: boolean = false;
    private modelSlot: ModelSlot;


    constructor() {
        super();
        this.modelSlot = mainSlot.model;
    }

    public setPanel(panel: IPanel): void {
        this.panel = panel;
        mainSlot.mainStage.addChild(this.panel);
        this.setBlocks();
    }

    public get panelMc(): PIXI.Sprite {
        return this["panel"] as PIXI.Sprite;
    }

    private setBlocks(): void{
       

        var linesBtn: Array<number> = [0, 1, 2, 3, 4];

        this.setBlockTypeBtn(ModelSlot.MODE_HELP, new ModePanelShow([PanelEvent.SELECT_GAME, PanelEvent.AUTO, PanelEvent.BETONE, PanelEvent.MAXBET, PanelEvent.START], [1, 2, 3]));
        this.setBlockTypeBtn(ModelSlot.MODE_ERROR, new ModePanelShow([PanelEvent.SELECT_GAME, PanelEvent.AUTO, PanelEvent.BETONE, PanelEvent.MAXBET, PanelEvent.START], linesBtn));

        this.setBlockTypeBtn(ModelSlot.MODE_READY, new ModePanelShow([],[]));
        this.setBlockTypeBtn(ModelSlot.MODE_ROUTE, new ModePanelShow([PanelEvent.BETONE, PanelEvent.MAXBET, PanelEvent.START], linesBtn));
        this.setBlockTypeBtn(ModelSlot.MODE_ROUTE_WIN, new ModePanelShow([PanelEvent.SELECT_GAME, PanelEvent.AUTO], linesBtn));

        this.setBlockTypeBtn(ModelSlot.MODE_GAMBLE, new ModePanelShow([PanelEvent.SELECT_GAME, PanelEvent.AUTO, PanelEvent.BETONE, PanelEvent.MAXBET], [0]));
        this.setBlockTypeBtn(ModelSlot.MODE_GAMBLE_CHOICE, new ModePanelShow([PanelEvent.SELECT_GAME, PanelEvent.AUTO, PanelEvent.BETONE, PanelEvent.MAXBET, PanelEvent.START], linesBtn));
        this.setBlockTypeBtn(ModelSlot.MODE_BONUS, new ModePanelShow([PanelEvent.SELECT_GAME, PanelEvent.AUTO, PanelEvent.BETONE, PanelEvent.MAXBET, PanelEvent.START], linesBtn));
        this.setBlockTypeBtn(ModelSlot.MODE_BONUS_CHOICE, new ModePanelShow([PanelEvent.SELECT_GAME, PanelEvent.AUTO, PanelEvent.BETONE, PanelEvent.MAXBET, PanelEvent.START], []));

        this.setBlockTypeBtn(ModelSlot.MODE_SUPERBONUS, new ModePanelShow([PanelEvent.SELECT_GAME, PanelEvent.AUTO, PanelEvent.BETONE, PanelEvent.MAXBET, PanelEvent.START], [0, 2, 4]));
        this.setBlockTypeBtn(ModelSlot.MODE_BONUS_SPEC, new ModePanelShow([PanelEvent.AUTO, PanelEvent.BETONE, PanelEvent.MAXBET, PanelEvent.START], [1, 2, 3]));

        this.setBlockTypeBtn(ModelSlot.MODE_DEBIT, new ModePanelShow([PanelEvent.SELECT_GAME, PanelEvent.AUTO, PanelEvent.BETONE, PanelEvent.MAXBET, PanelEvent.START], linesBtn));
    }

    public initPanel() { 
        // не может      
        //this.panel.addEventListener(PanelEvent.PANEL_EVENT, (e: PanelEvent) => { this.onPanelEvent(e); });
        this.panel.on(PanelEvent.PANEL_EVENT, (e: PanelEvent) => { this.onPanelEvent(e); });

        /*mainSlot.bindSetter(this.modelSlot.stateSlotManager, "currentMode", (value: string) => { this.blockMode(value) });
        mainSlot.bindSetter(this.modelSlot, "modeLine", (value: number) => { this.updateBetLine(value) });
        mainSlot.bindSetter(this.modelSlot, "typeBet", (value: number) => { this.updateBetLine(value) });*/
    }

    public setBlockTypeBtn(mode: string, m: ModePanelShow): void {
        this.dictBlockBtns[mode] = m;
    }

    public updateBetLine(type: number): void {
        this.panel.setTotalBet(this.modelSlot.maxBet);
    }


    private blockMode(mode: string): void {
        this.blockOnMode(mode);
        this.panel.setModeSelector(mode == ModelSlot.MODE_READY);

        if (mode == ModelSlot.MODE_ROUTE_WIN || mode == ModelSlot.MODE_GAMBLE) {
            this.panel.setLabelBtn(PanelEvent.START, "TAKE\nWIN");
        }
        else {
            this.panel.setLabelBtn(PanelEvent.START, "START");
        }
    }

    public outClickBtn(e: PanelEvent): void {
        this.onPanelEvent(e);
    }

    private onPanelEvent(e?: PanelEvent): void {
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
    }
    public showhelp(): void {
        if (this.ishelp)
            return;
        this.blockAll();
        this.blockLineBtn(0, false);
        this.blockLineBtn(4, false);
        this.blockBtnByType(PanelEvent.START, false);
        mainSlot.slot.showHelp();
        this.ishelp = true;
    }

    // выделить кнопку
    public setModeComboBet(nom: number): void {
        this.panel.setModeComboBet(nom);
    }
    // блокировать кнопку
    public blockBtnByType(nameBtn: string, isBlock: boolean = true): void {
        this.panel.blockBtnByType(nameBtn, isBlock);
    }
    // блокировать комбокнопку
    public blockLineBtn(nom: number, isBlock: boolean = true): void {
        this.panel.blockLineBtn(nom, isBlock);
    }
    public blockAll(): void {
        this.panel.blockAll();
    }
    public blockComboBtns(): void {
        this.panel.blockComboBtns();
    }

    public reBlock(arBlockCombo: Array<number> = null): void {
        this.lastArBlockCombo = arBlockCombo;
        if (this.ishelp)
            return;

        this.blockOnMode(this.modelSlot.stateSlotManager.currentMode);

        if (arBlockCombo != null) {
            for (var i: number = 0; i < arBlockCombo.length; i++)
                this.blockLineBtn(arBlockCombo[i]);
        }
    }

    // возвращает кнопку по количеству линий
    public getNomBtnLine(countLine: number): number {
        return this.indexlines.indexOf(countLine);
    }
    // возвращает количество линий на данной кнопке
    public getIndexline(ind: number): number {
        return this.indexlines[ind];
    }

    private blockOnMode(mode: string): void {
        var m: ModePanelShow = this.dictBlockBtns[mode];
        if (m != null) {
            this.panel.unBlockAll();

            if (m.buttons) {
                for (var i: number = 0; i < m.buttons.length; i++)
                    this.blockBtnByType(m.buttons[i]);
            }

            for (var i: number = 0; i < m.lines.length; i++)
                this.blockLineBtn(m.lines[i]);
        }
    }
}

//-------------------------------------------------------------------------------------------

class ModePanelShow {
    public buttons: Array<string>;
    public lines: Array<number>;

    constructor(buttons: Array<string>, lines: Array<number>) {
        this.buttons = buttons;
        this.lines = lines;
    }
}

//-------------------------------------------------------------------------------------------

class PanelEvent extends PIXI.interaction.InteractionData {
    public static FULL_SCREEN: string = "fullString";
    public static HELP: string = "help";
    public static SELECT_GAME: string = "selectGame";
    public static AUTO: string = "auto";
    public static BETONE: string = "betone";
    public static MAXBET: string = "maxbet";
    public static START: string = "start";
    public static MUTE: string = "mute";
    public static SELECT_LINE: string = "select_line";

    public static PANEL_EVENT: string = "panel_event";

    public eventBtn: string;
    public line: number;

    constructor(eventBtn: string, line: number = 0) {
        super();
        this.eventBtn = eventBtn;
        this.line = line;
    }
}

//-------------------------------------------------------------------------------------------

interface IPanel extends PIXI.Sprite {
    getContainer(): PIXI.Sprite;
    setModeComboBet(nom: number): void;
    blockBtnByType(nameBtn: string, isBlock: boolean): void;
    blockLineBtn(nom: number, isBlock: boolean): void;
    blockAll(): void;
    unBlockAll(): void;
    blockComboBtns(): void;
    setModeSelector(value: Boolean): void;
    setLabelBtn(typeBtn: String, str: String): void;
    setTotalBet(value: Number): void;
}


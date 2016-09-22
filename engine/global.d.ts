declare var EVENT_COMPLETE: string;
declare var EVENT_ONLOAD: string;
declare var EVENT_CLICK: string;
declare var EVENT_MOUSEDOWN: string;
declare var EVENT_PRESSUP: string;
declare var EVENT_ROLLOVER: string;
declare var EVENT_ROLLOUT: string;

declare var mainSlot: MainSlot;
declare var soundManager: SoundManager; 

declare var loadJS: (str: string, callback: () => void) => void;
declare var loadJSManifest: (str: string, callback: () => void) => void;
declare var loadManifest: (callback: () => void) => void;
declare var lib: any;
declare var images: Object;
declare var ss: Object;
declare var toggleFullScreen: () => void;


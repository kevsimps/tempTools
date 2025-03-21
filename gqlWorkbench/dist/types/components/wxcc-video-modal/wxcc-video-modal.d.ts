export declare class wxccVideoModal {
    vidBig: boolean;
    btnLable: string;
    vidId: string;
    backDrop: boolean;
    hide: boolean;
    boxxie: HTMLElement;
    onToggleSize(): void;
    onToggleHide(): void;
    onVidPop(event: CustomEvent): void;
    moveIt(event: Event): void;
    render(): any[];
}

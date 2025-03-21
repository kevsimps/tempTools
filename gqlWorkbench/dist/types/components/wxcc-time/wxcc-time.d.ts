export declare class wxccTime {
    td: Date;
    fd: Date;
    toSelected: HTMLSelectElement;
    fromSelected: HTMLSelectElement;
    tTime: HTMLInputElement;
    tDate: HTMLInputElement;
    fTime: HTMLInputElement;
    fDate: HTMLInputElement;
    to: number;
    from: number;
    hide: boolean;
    tab: string;
    lupStamp: HTMLInputElement;
    tStamp: string;
    onToSelect(zzz: string): void;
    onManSet(zzz: string): void;
    onToggle(): void;
    epochToTime(): void;
    render(): any[];
}

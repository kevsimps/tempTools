export declare class wxccAuth {
    token: any;
    expStamp: any;
    hide: boolean;
    callbackUrl: string;
    burp(x: any): Promise<void>;
    onGetAuth(): void;
    render(): any[];
}

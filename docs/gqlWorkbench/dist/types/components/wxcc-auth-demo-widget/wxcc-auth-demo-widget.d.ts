export declare class wxccAuth {
    token: any;
    expStamp: any;
    hide: boolean;
    callbackUrl: string;
    deets: any;
    request: any;
    showResponse: boolean;
    burp(x: any): Promise<void>;
    onGetAuth(): void;
    render(): any[];
}

import type { Components, JSX } from "../types/components";

interface WxccTime extends Components.WxccTime, HTMLElement {}
export const WxccTime: {
    prototype: WxccTime;
    new (): WxccTime;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

import type { Components, JSX } from "../types/components";

interface WxccAuthWidget extends Components.WxccAuthWidget, HTMLElement {}
export const WxccAuthWidget: {
    prototype: WxccAuthWidget;
    new (): WxccAuthWidget;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

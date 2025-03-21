import type { Components, JSX } from "../types/components";

interface WxccAuthDemoWidget extends Components.WxccAuthDemoWidget, HTMLElement {}
export const WxccAuthDemoWidget: {
    prototype: WxccAuthDemoWidget;
    new (): WxccAuthDemoWidget;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

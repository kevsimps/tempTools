import type { Components, JSX } from "../types/components";

interface WxccPageControls extends Components.WxccPageControls, HTMLElement {}
export const WxccPageControls: {
    prototype: WxccPageControls;
    new (): WxccPageControls;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

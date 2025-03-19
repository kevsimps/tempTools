import type { Components, JSX } from "../types/components";

interface WxccAltair extends Components.WxccAltair, HTMLElement {}
export const WxccAltair: {
    prototype: WxccAltair;
    new (): WxccAltair;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

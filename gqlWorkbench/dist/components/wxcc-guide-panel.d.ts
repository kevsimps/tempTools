import type { Components, JSX } from "../types/components";

interface WxccGuidePanel extends Components.WxccGuidePanel, HTMLElement {}
export const WxccGuidePanel: {
    prototype: WxccGuidePanel;
    new (): WxccGuidePanel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

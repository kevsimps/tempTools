import type { Components, JSX } from "../types/components";

interface WxccVideoModal extends Components.WxccVideoModal, HTMLElement {}
export const WxccVideoModal: {
    prototype: WxccVideoModal;
    new (): WxccVideoModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

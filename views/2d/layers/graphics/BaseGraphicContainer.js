/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{FeatureContainer as e}from"../../engine/FeatureContainer.js";import s from"./GraphicBoundsRenderer.js";import{CompareFunction as r}from"../../../webgl/enums.js";class t extends e{constructor(e){super(e),this.hasHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer&&(this._boundsRenderer.destroy(),this._boundsRenderer=null)}enableRenderingBounds(e){this._boundsRenderer=new s(e),this.requestRender()}get hasLabels(){return!1}onTileData(e,s){e.patch(s),this.contains(e)||this.addChild(e),this.requestRender()}onTileError(e){e.clear(),this.contains(e)||this.addChild(e)}_renderChildren(e,s){for(const t of this.children)t.isReady&&t.hasData&&(t.commit(e),e.context.setStencilFunction(r.EQUAL,t.stencilRef,255),t._displayList.replay(e,t,s))}}export{t as default};

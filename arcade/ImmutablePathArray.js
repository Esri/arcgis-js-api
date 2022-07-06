/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import t from"./ImmutableArray.js";import s from"./ImmutablePointArray.js";class h extends t{constructor(t,s,h,i,e){super(t),this._lazyPath=[],this._hasZ=!1,this._hasM=!1,this._hasZ=h,this._hasM=i,this._spRef=s,this._cacheId=e}get(t){if(void 0===this._lazyPath[t]){const h=this._elements[t];if(void 0===h)return;this._lazyPath[t]=new s(h,this._spRef,this._hasZ,this._hasM,this._cacheId,t)}return this._lazyPath[t]}equalityTest(t){return t===this||null!==t&&(t instanceof h!=!1&&t.getUniqueHash()===this.getUniqueHash())}getUniqueHash(){return this._cacheId.toString()}}export{h as default};

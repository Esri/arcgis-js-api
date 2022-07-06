/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{clone as e}from"../../../core/lang.js";import{isPolyline as t}from"../../../geometry/support/jsonUtils.js";import{reverseMultipath as r}from"../CIMCursor.js";class s{static local(){return null===s.instance&&(s.instance=new s),s.instance}execute(e,t,r,s){return new n(e,t,r)}}s.instance=null;class n{constructor(e,t,r){this._inputGeometries=e,this._reverse=void 0===t.reverse||t.reverse}next(){let s=this._inputGeometries.next();for(;s;){if(!this._reverse)return s;if(t(s)){const t=e(s);return r(t.paths),t}s=this._inputGeometries.next()}return null}}export{s as EffectReverse};

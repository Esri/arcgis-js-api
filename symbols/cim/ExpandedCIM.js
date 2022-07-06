/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{WGLGeometryType as e,WGLSymbologyType as t}from"../../views/2d/engine/webgl/enums.js";import{createMaterialKey as a}from"../../views/2d/engine/webgl/materialKey/MaterialKey.js";const s={marker:e.MARKER,fill:e.FILL,line:e.LINE,text:e.TEXT};class l{constructor(e,l,n,r){const c={minScale:l?.minScale,maxScale:l?.maxScale},m=i(c);this.layers=e,this.data=l,this.hash=this._createHash()+m,this.rendererKey=n;const o={isOutline:!1,placement:null,symbologyType:t.DEFAULT,vvFlags:n};for(const t of e){const e=s[t.type];o.isOutline="line"===t.type&&t.isOutline,t.materialKey=a(e,o),t.maxVVSize=r,t.scaleInfo=c,t.templateHash+=m}}get type(){return"expanded-cim"}_createHash(){let e="";for(const t of this.layers)e+=t.templateHash;return e}}function i(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}export{l as ExpandedCIM};

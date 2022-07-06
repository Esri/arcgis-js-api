/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{create as e}from"../../../geometry/support/aaBoundingRect.js";import{BitmapTile as r}from"./BitmapTile.js";import{brushes as s}from"./brushes.js";import{WGLDrawPhase as t}from"./webgl/enums.js";import i from"./webgl/TileContainer.js";class n extends i{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(s){const t=this._tileInfoView.getTileBounds(e(),s),[i,n]=this._tileInfoView.tileInfo.size;return new r(s,t[0],t[3],i,n)}prepareRenderPasses(e){const r=e.registerRenderPass({name:"bitmap (tile)",brushes:[s.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:t.MAP});return[...super.prepareRenderPasses(e),r]}doRender(e){this.visible&&e.drawPhase===t.MAP&&super.doRender(e)}}export{n as BitmapTileContainer};

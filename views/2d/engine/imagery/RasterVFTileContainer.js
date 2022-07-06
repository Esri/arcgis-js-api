/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{create as e}from"../../../../geometry/support/aaBoundingRect.js";import s from"./BrushVectorField.js";import{RasterVFTile as r}from"./RasterVFTile.js";import{WGLDrawPhase as t}from"../webgl/enums.js";import i from"../webgl/TileContainer.js";class o extends i{constructor(){super(...arguments),this.isCustomTilingScheme=!1,this.symbolTypes=["triangle"]}createTile(s){const t=this._tileInfoView.getTileBounds(e(),s),[i,o]=this._tileInfoView.tileInfo.size;return new r(s,t[0],t[3],i,o)}prepareRenderPasses(e){const r=e.registerRenderPass({name:"imagery (vf tile)",brushes:[s],target:()=>this.children.map((e=>e.tileData)),drawPhase:t.MAP});return[...super.prepareRenderPasses(e),r]}doRender(e){this.visible&&e.drawPhase===t.MAP&&this.symbolTypes.forEach((s=>{e.renderPass=s,super.doRender(e)}))}}export{o as RasterVFTileContainer};

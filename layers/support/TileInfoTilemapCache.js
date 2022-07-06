/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{waitTick as i}from"../../core/promiseUtils.js";class l{constructor(i,l=0,a=i.lods.length-1){this.tileInfo=i,this.minLOD=l,this.maxLOD=a}getAvailability(i,l,a){const t=this.tileInfo.lodAt(i);return!t||i<this.minLOD||i>this.maxLOD?"unavailable":t.cols&&t.rows?a>=t.cols[0]&&a<=t.cols[1]&&l>=t.rows[0]&&l<=t.rows[1]?"available":"unavailable":"available"}async fetchAvailability(l,a,t,e){return await i(e),this.getAvailability(l,a,t)}async fetchAvailabilityUpsample(l,a,t,e,s){await i(s),e.level=l,e.row=a,e.col=t;const o=this.tileInfo;for(o.updateTileInfo(e);;){const i=this.getAvailability(e.level,e.row,e.col);if("unavailable"!==i)return i;if(!o.upsampleTile(e))return"unavailable"}}}export{l as default};

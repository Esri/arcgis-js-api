/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../../../../core/has.js";import t from"../../../../core/Logger.js";import{objectEqual as i}from"../snappingUtils.js";import{SnappingHint as e}from"./SnappingHint.js";t.getLogger("esri.views.interactive.snapping.hints.LineSnappingHint");class s extends e{constructor(t,i,e,s,n=!0,r=!0){super(s),this.type=t,this.lineStart=i,this.lineEnd=e,this.fadeLeft=n,this.fadeRight=r}equals(t){return t instanceof s&&(this.type===t.type&&i(this.lineStart,t.lineStart)&&i(this.lineEnd,t.lineEnd)&&this.fadeLeft===t.fadeLeft&&this.fadeRight===t.fadeRight)}}export{s as LineSnappingHint};

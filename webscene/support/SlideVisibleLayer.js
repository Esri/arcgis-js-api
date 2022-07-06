/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{clone as e}from"../../core/lang.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import{Integer as t}from"../../core/accessorSupport/ensureType.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";var i;let c=i=class extends s{constructor(r){super(r),this.id="",this.sublayerIds=null}clone(){return new i({id:this.id,sublayerIds:e(this.sublayerIds)})}};r([o({type:String,json:{write:!0}})],c.prototype,"id",void 0),r([o({type:[t],json:{read:{source:"subLayerIds"},write:{target:"subLayerIds"}}})],c.prototype,"sublayerIds",void 0),c=i=r([p("esri.webscene.support.SlideVisibleLayer")],c);export{c as SlideVisibleLayer};

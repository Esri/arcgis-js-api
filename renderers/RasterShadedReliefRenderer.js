// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators","../tasks/support/colorRamps"],(function(e,t,r,o,p,i,a){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.altitude=45,r.azimuth=315,r.colorRamp=null,r.hillshadeType="multi-directional",r.pixelSizePower=.664,r.pixelSizeFactor=.024,r.scalingType="none",r.type="raster-shaded-relief",r.zFactor=1,r}var o;return r.__extends(t,e),o=t,t.prototype.readColorRamp=function(e){return a.fromJSON(e)},t.prototype.clone=function(){return new o({hillshadeType:this.hillshadeType,altitude:this.altitude,azimuth:this.azimuth,zFactor:this.zFactor,scalingType:this.scalingType,pixelSizeFactor:this.pixelSizeFactor,pixelSizePower:this.pixelSizePower,colorRamp:p.clone(this.colorRamp)})},r.__decorate([i.property({type:Number,json:{write:!0}})],t.prototype,"altitude",void 0),r.__decorate([i.property({type:Number,json:{write:!0}})],t.prototype,"azimuth",void 0),r.__decorate([i.property({types:a.types,json:{write:!0}})],t.prototype,"colorRamp",void 0),r.__decorate([i.reader("colorRamp")],t.prototype,"readColorRamp",null),r.__decorate([i.property({type:["traditional","multi-directional"],json:{write:!0}})],t.prototype,"hillshadeType",void 0),r.__decorate([i.property({type:Number,json:{write:!0}})],t.prototype,"pixelSizePower",void 0),r.__decorate([i.property({type:Number,json:{write:!0}})],t.prototype,"pixelSizeFactor",void 0),r.__decorate([i.property({type:["none","adjusted"],json:{write:!0}})],t.prototype,"scalingType",void 0),r.__decorate([i.enumeration({rasterShadedRelief:"raster-shaded-relief"})],t.prototype,"type",void 0),r.__decorate([i.property({type:Number,json:{write:!0}})],t.prototype,"zFactor",void 0),t=o=r.__decorate([i.subclass("esri.renderers.RasterShadedReliefRenderer")],t)}(o.JSONSupport)}));
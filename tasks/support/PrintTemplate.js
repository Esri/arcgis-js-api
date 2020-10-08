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

define(["require","exports","tslib","../../core/Accessor","../../core/deprecate","../../core/Logger","../../core/accessorSupport/decorators"],(function(e,r,t,o,p,s,a){"use strict";var c=s.getLogger("esri.tasks.support.PrintTemplate");function i(){p.deprecatedProperty(c,"preserveScale",{replacement:"scalePreserved",version:"4.16"})}return function(e){function r(r){var t=e.call(this,r)||this;return t.attributionVisible=!0,t.exportOptions={width:800,height:1100,dpi:96},t.forceFeatureAttributes=!1,t.format="png32",t.label=null,t.layout="map-only",t.layoutOptions=null,t.outScale=0,t.scalePreserved=!0,t.showLabels=!0,t}return t.__extends(r,e),Object.defineProperty(r.prototype,"preserveScale",{get:function(){return i(),this.scalePreserved},set:function(e){i(),this.scalePreserved=e},enumerable:!1,configurable:!0}),t.__decorate([a.property()],r.prototype,"attributionVisible",void 0),t.__decorate([a.property()],r.prototype,"exportOptions",void 0),t.__decorate([a.property()],r.prototype,"forceFeatureAttributes",void 0),t.__decorate([a.property()],r.prototype,"format",void 0),t.__decorate([a.property()],r.prototype,"label",void 0),t.__decorate([a.property()],r.prototype,"layout",void 0),t.__decorate([a.property()],r.prototype,"layoutOptions",void 0),t.__decorate([a.property()],r.prototype,"outScale",void 0),t.__decorate([a.property({dependsOn:["scalePreserved"]})],r.prototype,"preserveScale",null),t.__decorate([a.property()],r.prototype,"scalePreserved",void 0),t.__decorate([a.property()],r.prototype,"showLabels",void 0),r=t.__decorate([a.subclass("esri.tasks.support.PrintTemplate")],r)}(o)}));
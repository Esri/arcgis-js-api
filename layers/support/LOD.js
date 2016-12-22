// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/JSONSupport"],function(e,r,o,t,l,s){var p=function(e){function r(r){e.call(this,r),this.level=0,this.levelValue=null,this.resolution=0,this.scale=0}return o(r,e),r.prototype.clone=function(){return new r({level:this.level,levelValue:this.levelValue,resolution:this.resolution,scale:this.scale})},t([l.property({json:{writable:!0}})],r.prototype,"level",void 0),t([l.property({json:{writable:!0}})],r.prototype,"levelValue",void 0),t([l.property({json:{writable:!0}})],r.prototype,"resolution",void 0),t([l.property({json:{writable:!0}})],r.prototype,"scale",void 0),r=t([l.subclass("esri.layers.support.LOD")],r)}(l.declared(s));return p});
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../core/JSONSupport","../core/accessorSupport/decorators"],(function(o,r,t,e,s){return function(o){function r(r){var t=o.call(this,r)||this;return t.returnTopmostRaster=null,t.showNoDataRecords=null,t}var e;return t.__extends(r,o),e=r,r.prototype.clone=function(){return new e({showNoDataRecords:this.showNoDataRecords,returnTopmostRaster:this.returnTopmostRaster})},t.__decorate([s.property({type:Boolean,json:{write:!0}})],r.prototype,"returnTopmostRaster",void 0),t.__decorate([s.property({type:Boolean,json:{write:!0}})],r.prototype,"showNoDataRecords",void 0),r=e=t.__decorate([s.subclass("esri.popup.LayerOptions")],r)}(e.JSONSupport)}));
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

define(["require","exports","tslib","../core/JSONSupport","../core/accessorSupport/decorators"],(function(o,t,r,e,s){"use strict";return function(o){function t(t){var r=o.call(this,t)||this;return r.returnTopmostRaster=null,r.showNoDataRecords=null,r}var e;return r.__extends(t,o),e=t,t.prototype.clone=function(){return new e({showNoDataRecords:this.showNoDataRecords,returnTopmostRaster:this.returnTopmostRaster})},r.__decorate([s.property({type:Boolean,json:{write:!0}})],t.prototype,"returnTopmostRaster",void 0),r.__decorate([s.property({type:Boolean,json:{write:!0}})],t.prototype,"showNoDataRecords",void 0),t=e=r.__decorate([s.subclass("esri.popup.LayerOptions")],t)}(e.JSONSupport)}));
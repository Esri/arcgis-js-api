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

define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators","../Lighting"],(function(e,t,n,r,o,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SlideEnvironment=void 0;var p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.lighting=new i,t}var r;return n.__extends(t,e),r=t,t.prototype.clone=function(){return new r({lighting:i.prototype.clone.call(this.lighting)})},n.__decorate([o.property({type:i,json:{write:!0}})],t.prototype,"lighting",void 0),t=r=n.__decorate([o.subclass("esri.webscene.Environment")],t)}(r.JSONSupport);t.SlideEnvironment=p}));
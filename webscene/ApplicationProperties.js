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

define(["require","exports","tslib","../core/JSONSupport","../core/accessorSupport/decorators","../webdoc/applicationProperties/Viewing"],(function(e,r,i,t,n,o){return function(e){function r(r){var i=e.call(this,r)||this;return i.viewing=null,i}var t;return i.__extends(r,e),t=r,r.prototype.clone=function(){return new t({viewing:this.viewing?this.viewing.clone():null})},i.__decorate([n.property({type:o,json:{write:!0}})],r.prototype,"viewing",void 0),r=t=i.__decorate([n.subclass("esri.webscene.ApplicationProperties")],r)}(t.JSONSupport)}));
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

define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators","../../layers/support/fieldType"],(function(e,t,r,o,p,a){return function(e){function t(t){var r=e.call(this,t)||this;return r.exactMatch=!1,r.name=null,r.type=null,r}var o;return r.__extends(t,e),o=t,t.prototype.clone=function(){return new o({exactMatch:this.exactMatch,type:this.type,name:this.name})},r.__decorate([p.property({type:Boolean,json:{write:!0}})],t.prototype,"exactMatch",void 0),r.__decorate([p.property({type:String,json:{write:!0}})],t.prototype,"name",void 0),r.__decorate([p.enumeration(a.kebabDict)],t.prototype,"type",void 0),t=o=r.__decorate([p.subclass("esri.webdoc.applicationProperties.SearchLayerField")],t)}(o.JSONSupport)}));
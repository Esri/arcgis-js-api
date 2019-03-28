// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/accessorSupport/decorators"],function(o,e,r,t,s,p){return function(o){function e(e){var r=o.call(this)||this;return r.showNoDataRecords=null,r}r(e,o),s=e,e.prototype.clone=function(){return new s({showNoDataRecords:this.showNoDataRecords})};var s;return t([p.property({type:Boolean,json:{write:!0}})],e.prototype,"showNoDataRecords",void 0),e=s=t([p.subclass("esri.popup.LayerOptions")],e)}(p.declared(s))});
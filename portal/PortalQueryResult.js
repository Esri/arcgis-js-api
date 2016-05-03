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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/extendsHelper","../core/tsSupport/decorateHelper","../core/accessoireSupport/typescript","../core/Accessoire"],function(r,e,t,o,p,s){var l=function(r){function e(){r.call(this),this.nextQueryParams=null,this.queryParams=null,this.results=null,this.total=null}return t(e,r),o([p.shared("esri.portal.PortalQueryResult")],e.prototype,"declaredClass",void 0),o([p.property()],e.prototype,"nextQueryParams",void 0),o([p.property()],e.prototype,"queryParams",void 0),o([p.property()],e.prototype,"results",void 0),o([p.property()],e.prototype,"total",void 0),e=o([p.subclass()],e)}(s);return l});
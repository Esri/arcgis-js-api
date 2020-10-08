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

define(["require","exports","tslib","../core/accessorSupport/decorators","../rest/imageServiceIdentify","./Task"],(function(e,t,r,i,s,n){"use strict";return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.execute=function(e,t){return s.imageServiceIdentify(this.url,e,t)},t=r.__decorate([i.subclass("esri.tasks.ImageServiceIdentifyTask")],t)}(n)}));
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

define(["require","exports","tslib","../../core/jsonMap","../../core/accessorSupport/decorators","./GPMessage"],(function(e,r,t,s,o,n){"use strict";var i=new s.default({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});return function(e){function r(r){var t=e.call(this,r)||this;return t.type=null,t}return t.__extends(r,e),t.__decorate([o.property({type:String,json:{read:i.read,write:i.write}})],r.prototype,"type",void 0),r=t.__decorate([o.subclass("esri.tasks.support.NAMessage")],r)}(n)}));
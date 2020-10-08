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

define(["require","exports","../CIMCursor","../CIMEffects","../CIMOperators"],(function(e,r,t,n,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.CIMEffectHelper=void 0;var f=function(){function e(){}return e.executeEffects=function(e,r){for(var f=t.cloneAndDecodeGeometry(r),c=new n.SimpleGeometryCursor(f),u=0,i=e;u<i.length;u++){var s=i[u],a=o.getEffectOperator(s);a&&(c=a.execute(c,s,96/72))}return c},e.next=function(e){var r=e.next();return t.deltaEncodeGeometry(r),r},e}();r.CIMEffectHelper=f}));
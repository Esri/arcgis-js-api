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

define(["require","exports","tslib","../../../../../core/Error","../../../../../core/Logger","@dojo/framework/shim/Promise"],(function(e,r,t,n,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.createWhereClause=void 0;var i=a.getLogger("esri.views.2d.layers.features.support.whereUtils"),s={getAttribute:function(e,r){return e.field(r)}};r.createWhereClause=function(r,a){return t.__awaiter(this,void 0,void 0,(function(){var o,u,c;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,new Promise((function(r,t){e(["../../../../../core/sql/WhereClause"],r,t)}))];case 1:o=t.sent();try{return(u=o.WhereClause.create(r,a)).isStandardized||(c=new n("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",u),i.error(c)),[2,function(e){var r=e.readArcadeFeature();return u.testFeature(r,s)}]}catch(e){return i.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",r),[2,function(e){return!0}]}return[2]}}))}))}}));
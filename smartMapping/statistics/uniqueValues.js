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

define(["require","exports","tslib","../../core/Error","../../core/maybe","./support/utils","../support/utils"],(function(e,r,i,s,a,n,t){function u(e){return i.__awaiter(this,void 0,void 0,(function(){var r,u,l,o,p,d,v,f,c,w;return i.__generator(this,(function(y){switch(y.label){case 0:if(!e||!e.layer||!e.field&&!e.valueExpression)throw new s("unique-values:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(r=e.valueExpression||e.sqlExpression,u=r&&!e.sqlExpression,r)if(u){if(!e.view)throw new s("unique-values:missing-parameters","View is required when 'valueExpression' is specified")}else if(!e.valueExpression)throw new s("unique-values:missing-parameters","'valueExpression' parameters are required");if(l=[0,2,1,3,4],o=e.layer,p=i.__rest(e,["layer"]),d=t.createLayerAdapter(o,l),v=i.__assign({layerAdapter:d},p),!d)throw new s("unique-values:invalid-parameters","'layer' must be one of these types: "+t.getLayerTypeLabels(l).join(", "));return f=a.isSome(v.signal)?{signal:v.signal}:null,[4,d.load(f)];case 1:return y.sent(),[4,t.getFieldsList({field:v.field,valueExpression:v.valueExpression})];case 2:if(c=y.sent(),w=n.verifyBasicFieldValidity(d,c,"unique-values:invalid-parameters"))throw w;return[2,v]}}))}))}return function(e){return i.__awaiter(this,void 0,void 0,(function(){var r,s,a;return i.__generator(this,(function(n){switch(n.label){case 0:return[4,u(e)];case 1:return r=n.sent(),s=r.layerAdapter,a=i.__rest(r,["layerAdapter"]),[2,s.uniqueValues(a)]}}))}))}}));
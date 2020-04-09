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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/tsSupport/restHelper","../../../core/Error","../../../core/maybe","./support/utils","../support/utils"],(function(e,r,s,i,a,t,n,u,l,o){function p(e){return a(this,void 0,void 0,(function(){var r,a,p,d,c,v,f,w,y,h;return i(this,(function(i){switch(i.label){case 0:if(!e||!e.layer||!e.field&&!e.valueExpression)throw new n("unique-values:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(r=e.valueExpression||e.sqlExpression,a=r&&!e.sqlExpression,r)if(a){if(!e.view)throw new n("unique-values:missing-parameters","View is required when 'valueExpression' is specified")}else if(!e.valueExpression)throw new n("unique-values:missing-parameters","'valueExpression' parameters are required");if(p=[0,2,1,3,4],d=e.layer,c=t(e,["layer"]),v=o.createLayerAdapter(d,p),f=s({layerAdapter:v},c),!v)throw new n("unique-values:invalid-parameters","'layer' must be one of these types: "+o.getLayerTypeLabels(p).join(", "));return w=u.isSome(f.signal)?{signal:f.signal}:null,[4,v.load(w)];case 1:return i.sent(),[4,o.getFieldsList({field:f.field,valueExpression:f.valueExpression})];case 2:if(y=i.sent(),h=l.verifyBasicFieldValidity(v,y,"unique-values:invalid-parameters"))throw h;return[2,f]}}))}))}return function(e){return a(this,void 0,void 0,(function(){var r,s,a;return i(this,(function(i){switch(i.label){case 0:return[4,p(e)];case 1:return r=i.sent(),s=r.layerAdapter,a=t(r,["layerAdapter"]),[2,s.uniqueValues(a)]}}))}))}}));
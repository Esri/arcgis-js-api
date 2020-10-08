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

define(["require","exports","tslib","../../core/Error","../../core/maybe","./support/utils","../support/utils","../support/adapters/support/layerUtils"],(function(e,r,s,i,a,t,n,u){"use strict";function l(e){return s.__awaiter(this,void 0,void 0,(function(){var r,l,o,p,d,v,f,c,w,y;return s.__generator(this,(function(_){switch(_.label){case 0:if(!e||!e.layer||!e.field&&!e.valueExpression)throw new i("unique-values:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(r=e.valueExpression||e.sqlExpression,l=r&&!e.sqlExpression,r)if(l){if(!e.view)throw new i("unique-values:missing-parameters","View is required when 'valueExpression' is specified")}else if(!e.valueExpression)throw new i("unique-values:missing-parameters","'valueExpression' parameters are required");if(o=[0,2,1,3,4],p=e.layer,d=s.__rest(e,["layer"]),v=u.createLayerAdapter(p,o),f=s.__assign({layerAdapter:v},d),!v)throw new i("unique-values:invalid-parameters","'layer' must be one of these types: "+u.getLayerTypeLabels(o).join(", "));return c=a.isSome(f.signal)?{signal:f.signal}:null,[4,v.load(c)];case 1:return _.sent(),[4,n.getFieldsList({field:f.field,valueExpression:f.valueExpression})];case 2:if(w=_.sent(),y=t.verifyBasicFieldValidity(v,w,"unique-values:invalid-parameters"))throw y;return[2,f]}}))}))}return function(e){return s.__awaiter(this,void 0,void 0,(function(){var r,i,a;return s.__generator(this,(function(t){switch(t.label){case 0:return[4,l(e)];case 1:return r=t.sent(),i=r.layerAdapter,a=s.__rest(r,["layerAdapter"]),[2,i.uniqueValues(a)]}}))}))}}));
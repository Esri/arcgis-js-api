// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/Error","./support/utils","../support/utils"],function(e,r,s,i,a,n,t,u){function l(e){return a(this,void 0,void 0,function(){var r,a,l,o,p,d,v;return i(this,function(i){switch(i.label){case 0:if(!e||!e.layer||!e.field&&!e.valueExpression)throw new n("unique-values:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(r=e.valueExpression||e.sqlExpression,a=r&&!e.sqlExpression,r)if(a){if(!e.view)throw new n("unique-values:missing-parameters","View is required when 'valueExpression' is specified")}else if(!e.valueExpression)throw new n("unique-values:missing-parameters","'valueExpression' parameters are required");if(l=s({},e),o=[0,2,1,3,4],p=u.createLayerAdapter(l.layer,o),l.layer=p,!p)throw new n("unique-values:invalid-parameters","'layer' must be one of these types: "+u.getLayerTypeLabels(o).join(", "));return[4,p.load()];case 1:return i.sent(),[4,u.getFieldsList({field:l.field,valueExpression:l.valueExpression})];case 2:if(d=i.sent(),v=t.verifyBasicFieldValidity(p,d,"unique-values:invalid-parameters"))throw v;return[2,l]}})})}function o(e){return a(this,void 0,void 0,function(){var r,s,a;return i(this,function(i){switch(i.label){case 0:return[4,l(e)];case 1:return r=i.sent(),s=r.layer,a={field:r.field,valueExpression:r.valueExpression,sqlExpression:r.sqlExpression,sqlWhere:r.sqlWhere,features:r.features,returnAllCodedValues:r.returnAllCodedValues,view:r.view},[2,s.uniqueValues(a)]}})})}return o});
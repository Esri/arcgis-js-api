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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/tsSupport/restHelper","../../../core/Error","../../../core/maybe","./support/utils","../support/utils"],(function(e,a,r,i,s,l,n,t,o,u){function p(e){return s(this,void 0,void 0,(function(){var a,s,p,m,d,c,f,w,h,y,v,b,z,g,x,k,V;return i(this,(function(i){switch(i.label){case 0:if(!e||!e.layer||!e.field&&!e.valueExpression)throw new n("class-breaks:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(e.valueExpression&&!e.view)throw new n("class-breaks:missing-parameters","View is required when 'valueExpression' is specified");if(a=[0,2,1,3],s=e.layer,p=l(e,["layer"]),m=u.createLayerAdapter(s,a),(d=r({layerAdapter:m},p)).normalizationType=u.getNormalizationType(d),d.numClasses=d.numClasses||5,!m)throw new n("class-breaks:invalid-parameters","'layer' must be one of these types: "+u.getLayerTypeLabels(a).join(", "));return c=t.isSome(d.signal)?{signal:d.signal}:null,[4,m.load(c)];case 1:return i.sent(),f=d.field,w=d.minValue,h=d.maxValue,y=null!=w||null!=h,v=d.classificationMethod,b="percent-of-total"===d.normalizationType,z=!1!==d.analyzeData,g=f?m.getField(f):null,[4,u.getFieldsList({field:d.field,normalizationField:d.normalizationField,valueExpression:d.valueExpression})];case 2:if(x=i.sent(),k=o.verifyBasicFieldValidity(m,x,"class-breaks:invalid-parameters"))throw k;if(g&&(V=o.verifyNumericField(m,g,"class-breaks:invalid-parameters")))throw V;if(d.valueExpression&&d.normalizationType)throw new n("class-breaks:invalid-parameters","Normalization is not allowed when 'valueExpression' is specified");if(y)if(z){if(b&&null==d.normalizationTotal)throw new n("class-breaks:missing-parameters","'normalizationTotal' is required when 'normalizationType' is 'precent-of-total' and 'minValue', 'maxValue' are specified")}else{if(null==w||null==h)throw new n("class-breaks:missing-parameters","Both 'minValue' and 'maxValue' are required when 'analyzeData' is false");if(w>=h)throw new n("class-breaks:invalid-parameters","'minValue' should be less than 'maxValue'");if(v&&"equal-interval"!==v)throw new n("class-breaks:invalid-parameters","'classificationMethod' other than 'equal-interval' is not allowed when 'analyzeData' is false");if(b&&null==d.normalizationTotal)throw new n("class-breaks:missing-parameters","'normalizationTotal' is required when 'normalizationType' is 'precent-of-total' and 'analyzeData' is false")}else if(!z)throw new n("class-breaks:missing-parameters","Both 'minValue' and 'maxValue' are required when 'analyzeData' is false");return[2,d]}}))}))}return function(e){return s(this,void 0,void 0,(function(){var a,r,s;return i(this,(function(i){switch(i.label){case 0:return[4,p(e)];case 1:return a=i.sent(),r=a.layerAdapter,s=l(a,["layerAdapter"]),[2,r.classBreaks(s)]}}))}))}}));
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

define(["require","exports","tslib","../../core/Error","../../core/maybe","./support/utils","../support/utils"],(function(e,a,i,r,s,n,l){function t(e){return i.__awaiter(this,void 0,void 0,(function(){var a,t,o,u,m,d,p,c,f,w,h,y,v,b,z,g,x;return i.__generator(this,(function(_){switch(_.label){case 0:if(!e||!e.layer||!e.field&&!e.valueExpression)throw new r("class-breaks:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(e.valueExpression&&!e.view)throw new r("class-breaks:missing-parameters","View is required when 'valueExpression' is specified");if(a=[0,2,1,3],t=e.layer,o=i.__rest(e,["layer"]),u=l.createLayerAdapter(t,a),(m=i.__assign({layerAdapter:u},o)).normalizationType=l.getNormalizationType(m),m.numClasses=m.numClasses||5,!u)throw new r("class-breaks:invalid-parameters","'layer' must be one of these types: "+l.getLayerTypeLabels(a).join(", "));return d=s.isSome(m.signal)?{signal:m.signal}:null,[4,u.load(d)];case 1:return _.sent(),p=m.field,c=m.minValue,f=m.maxValue,w=null!=c||null!=f,h=m.classificationMethod,y="percent-of-total"===m.normalizationType,v=!1!==m.analyzeData,b=p?u.getField(p):null,[4,l.getFieldsList({field:m.field,normalizationField:m.normalizationField,valueExpression:m.valueExpression})];case 2:if(z=_.sent(),g=n.verifyBasicFieldValidity(u,z,"class-breaks:invalid-parameters"))throw g;if(b&&(x=n.verifyNumericField(u,b,"class-breaks:invalid-parameters")))throw x;if(m.valueExpression&&m.normalizationType)throw new r("class-breaks:invalid-parameters","Normalization is not allowed when 'valueExpression' is specified");if(w)if(v){if(y&&null==m.normalizationTotal)throw new r("class-breaks:missing-parameters","'normalizationTotal' is required when 'normalizationType' is 'precent-of-total' and 'minValue', 'maxValue' are specified")}else{if(null==c||null==f)throw new r("class-breaks:missing-parameters","Both 'minValue' and 'maxValue' are required when 'analyzeData' is false");if(c>=f)throw new r("class-breaks:invalid-parameters","'minValue' should be less than 'maxValue'");if(h&&"equal-interval"!==h)throw new r("class-breaks:invalid-parameters","'classificationMethod' other than 'equal-interval' is not allowed when 'analyzeData' is false");if(y&&null==m.normalizationTotal)throw new r("class-breaks:missing-parameters","'normalizationTotal' is required when 'normalizationType' is 'precent-of-total' and 'analyzeData' is false")}else if(!v)throw new r("class-breaks:missing-parameters","Both 'minValue' and 'maxValue' are required when 'analyzeData' is false");return[2,m]}}))}))}return function(e){return i.__awaiter(this,void 0,void 0,(function(){var a,r,s;return i.__generator(this,(function(n){switch(n.label){case 0:return[4,t(e)];case 1:return a=n.sent(),r=a.layerAdapter,s=i.__rest(a,["layerAdapter"]),[2,r.classBreaks(s)]}}))}))}}));
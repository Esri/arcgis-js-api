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

define(["require","exports","tslib","../../core/Error","../../core/maybe","./support/utils","../support/utils","../support/adapters/support/layerUtils"],(function(e,a,i,r,s,n,l,t){"use strict";function o(e){return i.__awaiter(this,void 0,void 0,(function(){var a,o,u,p,d,m,c,f,w,h,y,v,b,z,g,x,_;return i.__generator(this,(function(k){switch(k.label){case 0:if(!e||!e.layer||!e.field&&!e.valueExpression)throw new r("class-breaks:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(e.valueExpression&&!e.view)throw new r("class-breaks:missing-parameters","View is required when 'valueExpression' is specified");if(a=[0,2,1,3],o=e.layer,u=i.__rest(e,["layer"]),p=t.createLayerAdapter(o,a),(d=i.__assign({layerAdapter:p},u)).normalizationType=l.getNormalizationType(d),d.numClasses=d.numClasses||5,!p)throw new r("class-breaks:invalid-parameters","'layer' must be one of these types: "+t.getLayerTypeLabels(a).join(", "));return m=s.isSome(d.signal)?{signal:d.signal}:null,[4,p.load(m)];case 1:return k.sent(),c=d.field,f=d.minValue,w=d.maxValue,h=null!=f||null!=w,y=d.classificationMethod,v="percent-of-total"===d.normalizationType,b=!1!==d.analyzeData,z=c?p.getField(c):null,[4,l.getFieldsList({field:d.field,normalizationField:d.normalizationField,valueExpression:d.valueExpression})];case 2:if(g=k.sent(),x=n.verifyBasicFieldValidity(p,g,"class-breaks:invalid-parameters"))throw x;if(z&&(_=n.verifyNumericField(p,z,"class-breaks:invalid-parameters")))throw _;if(d.valueExpression&&d.normalizationType)throw new r("class-breaks:invalid-parameters","Normalization is not allowed when 'valueExpression' is specified");if(h)if(b){if(v&&null==d.normalizationTotal)throw new r("class-breaks:missing-parameters","'normalizationTotal' is required when 'normalizationType' is 'precent-of-total' and 'minValue', 'maxValue' are specified")}else{if(null==f||null==w)throw new r("class-breaks:missing-parameters","Both 'minValue' and 'maxValue' are required when 'analyzeData' is false");if(f>=w)throw new r("class-breaks:invalid-parameters","'minValue' should be less than 'maxValue'");if(y&&"equal-interval"!==y)throw new r("class-breaks:invalid-parameters","'classificationMethod' other than 'equal-interval' is not allowed when 'analyzeData' is false");if(v&&null==d.normalizationTotal)throw new r("class-breaks:missing-parameters","'normalizationTotal' is required when 'normalizationType' is 'precent-of-total' and 'analyzeData' is false")}else if(!b)throw new r("class-breaks:missing-parameters","Both 'minValue' and 'maxValue' are required when 'analyzeData' is false");return[2,d]}}))}))}return function(e){return i.__awaiter(this,void 0,void 0,(function(){var a,r,s;return i.__generator(this,(function(n){switch(n.label){case 0:return[4,o(e)];case 1:return a=n.sent(),r=a.layerAdapter,s=i.__rest(a,["layerAdapter"]),[2,r.classBreaks(s)]}}))}))}}));
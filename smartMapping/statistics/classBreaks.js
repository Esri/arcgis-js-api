/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../core/Error","../../core/maybe","./support/utils","../support/utils","../support/adapters/support/layerUtils"],(function(e,a,i,s,r,l){"use strict";const n=5;function t(e){return o.apply(this,arguments)}function o(){return(o=e._asyncToGenerator((function*(e){if(!e||!e.layer||!e.field&&!e.valueExpression)throw new a("class-breaks:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");if(e.valueExpression&&!e.view)throw new a("class-breaks:missing-parameters","View is required when 'valueExpression' is specified");const{layer:t,...o}=e,u=l.createLayerAdapter(t,l.featureCapableLayerTypes),p={layerAdapter:u,...o};if(p.normalizationType=r.getNormalizationType(p),p.numClasses=p.numClasses||n,!u)throw new a("class-breaks:invalid-parameters","'layer' must be one of these types: "+l.getLayerTypeLabels(l.featureCapableLayerTypes).join(", "));const m=i.isSome(p.signal)?{signal:p.signal}:null;yield u.load(m);const d=p.field,c=p.minValue,f=p.maxValue,y=null!=c||null!=f,h=p.classificationMethod,w="percent-of-total"===p.normalizationType,b=!1!==p.analyzeData,v=d?u.getField(d):null,z=yield r.getFieldsList({field:p.field,normalizationField:p.normalizationField,valueExpression:p.valueExpression}),T=s.verifyBasicFieldValidity(u,z,"class-breaks:invalid-parameters");if(T)throw T;if(v){const e=s.verifyNumericField(u,v,"class-breaks:invalid-parameters");if(e)throw e}if(p.valueExpression&&p.normalizationType)throw new a("class-breaks:invalid-parameters","Normalization is not allowed when 'valueExpression' is specified");if(y)if(b){if(w&&null==p.normalizationTotal)throw new a("class-breaks:missing-parameters","'normalizationTotal' is required when 'normalizationType' is 'precent-of-total' and 'minValue', 'maxValue' are specified")}else{if(null==c||null==f)throw new a("class-breaks:missing-parameters","Both 'minValue' and 'maxValue' are required when 'analyzeData' is false");if(c>=f)throw new a("class-breaks:invalid-parameters","'minValue' should be less than 'maxValue'");if(h&&"equal-interval"!==h)throw new a("class-breaks:invalid-parameters","'classificationMethod' other than 'equal-interval' is not allowed when 'analyzeData' is false");if(w&&null==p.normalizationTotal)throw new a("class-breaks:missing-parameters","'normalizationTotal' is required when 'normalizationType' is 'precent-of-total' and 'analyzeData' is false")}else if(!b)throw new a("class-breaks:missing-parameters","Both 'minValue' and 'maxValue' are required when 'analyzeData' is false");return p}))).apply(this,arguments)}function u(e){return p.apply(this,arguments)}function p(){return(p=e._asyncToGenerator((function*(e){const{layerAdapter:a,...i}=yield t(e);return a.classBreaks(i)}))).apply(this,arguments)}return u}));

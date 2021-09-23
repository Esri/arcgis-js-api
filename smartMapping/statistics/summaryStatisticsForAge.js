/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../core/Error","../../core/maybe","./summaryStatistics","./support/ageUtils","../support/adapters/support/layerUtils"],(function(e,t,r,a,i,s){"use strict";function n(e){return u.apply(this,arguments)}function u(){return(u=e._asyncToGenerator((function*(e){if(!(e&&e.layer&&e.startTime&&e.endTime&&e.unit))throw new t("summary-statistics-for-age:missing-parameters","'layer', 'startTime', 'endTime' and 'unit' parameters are required");const{layer:a,...n}=e,u=s.createLayerAdapter(a,s.featureCapableLayerTypes),l={layerAdapter:u,...n};if(!u)throw new t("summary-statistics-for-age:invalid-parameters","'layer' must be one of these types: "+s.getLayerTypeLabels(s.featureCapableLayerTypes).join(", "));const o=l.view,p=r.isSome(l.signal)?{signal:l.signal}:null;yield Promise.all([o&&o.when(),u.load(p)]);const m=i.verifyDates(u,l.startTime,l.endTime,"summary-statistics-for-age:invalid-parameters");if(m)throw m;if(-1===i.supportedAgeUnits.indexOf(l.unit))throw new t("summary-statistics-for-age:invalid-parameters",`Supported units are: ${i.supportedAgeUnits.join(", ")}`);return l}))).apply(this,arguments)}function l(e){return o.apply(this,arguments)}function o(){return(o=e._asyncToGenerator((function*(e){const{layerAdapter:t,...r}=yield n(e),{view:s,startTime:u,endTime:l,unit:o,minValue:p,maxValue:m,signal:y}=r,{valueExpression:c,statisticsQuery:d}=i.getAgeExpressions({layer:t,startTime:u,endTime:l,unit:o}),f={layer:t,valueExpression:c,...d,minValue:p,maxValue:m,view:s,signal:y};return a(f)}))).apply(this,arguments)}return l}));

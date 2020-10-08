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

define(["require","exports","tslib","../../core/Error","../../core/maybe","../../core/promiseUtils","./support/utils","../support/utils","../support/adapters/support/layerUtils"],(function(e,r,s,t,i,n,a,u,l){"use strict";function o(e){return s.__awaiter(this,void 0,void 0,(function(){var r,o,p,c,f,d,m,v,h,y,g,b,w;return s.__generator(this,(function(x){switch(x.label){case 0:if(!(e&&e.layer&&e.attributes))throw new t("summary-statistics-for-attributes:missing-parameters","'layer' and 'attributes' parameters are required");if(e.attributes.some((function(e){return!!e.valueExpression}))&&!e.view)throw new t("summary-statistics-for-attributes:missing-parameters","View is required when 'valueExpression' is specified in attributes");if(r=[2,1],o=e.layer,p=s.__rest(e,["layer"]),c=l.createLayerAdapter(o,r),(f=s.__assign({layerAdapter:c},p)).includeZeros=null==f.includeZeros||f.includeZeros,f.includeNegatives=null==f.includeNegatives||f.includeNegatives,!c)throw new t("summary-statistics-for-attributes:invalid-parameters","'layer' must be one of these types: "+l.getLayerTypeLabels(r).join(", "));return d=f.view,m=i.isSome(f.signal)?{signal:f.signal}:null,[4,n.all([d&&d.when(),c.load(m)])];case 1:x.sent(),v=[],h=0,y=f.attributes,x.label=2;case 2:return h<y.length?(g=y[h],[4,u.getFieldsList({field:g.field,valueExpression:g.valueExpression})]):[3,5];case 3:b=x.sent(),Array.prototype.push.apply(v,b),x.label=4;case 4:return h++,[3,2];case 5:if(w=a.verifyBasicFieldValidity(c,v,"summary-statistics-for-attributes:invalid-parameters"))throw w;return[2,f]}}))}))}return function(e){return s.__awaiter(this,void 0,void 0,(function(){var r,t,i,n;return s.__generator(this,(function(a){switch(a.label){case 0:return[4,o(e)];case 1:return r=a.sent(),t=r.layerAdapter,i=s.__rest(r,["layerAdapter"]),n=function(e,r,s){var t=[],i=[],n=[],a=[],u=[];e.forEach((function(e,r){var l=e.field?"field":"expression",o=e.field||e.valueExpression;e.field?(u.push(o),i.push("var "+l+r+' = Number($feature["'+o+'"]);')):(t.push("function getValueForExpr"+r+"() {\n  "+o+" \n}"),i.push("var "+l+r+" = Number(getValueForExpr"+r+"());")),s||n.push(""+l+r+" = IIf("+l+r+" < 0, 0, "+l+r+");"),a.push(""+l+r)}));var l="return sum;",o=t.length?null:u.reduce((function(e,r){return e+" + "+r})),p=null;return r||s?r?s||(l="return IIf(sum >= 0, sum, null);",o&&(p="(( "+o+" ) >= 0)")):(l="return IIf(sum != 0, sum, null);",o&&(p="(( "+o+" ) <> 0)")):(l="return IIf(sum > 0, sum, null);",o&&(p="(( "+o+" ) > 0)")),{valueExpression:[t.length?t.join("\n"):"",i.join("\n"),n.join("\n"),"var sum = "+a.join(" + ")+";",l].filter(Boolean).join("\n\n"),sqlExpression:o,sqlWhere:p}}(i.attributes,i.includeZeros,i.includeNegatives),[2,t.summaryStatistics({valueExpression:n.valueExpression,sqlExpression:n.sqlExpression,sqlWhere:n.sqlWhere,view:i.view,signal:i.signal})]}}))}))}}));
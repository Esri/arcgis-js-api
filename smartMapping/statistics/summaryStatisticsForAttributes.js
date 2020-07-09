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

define(["require","exports","tslib","../../core/Error","../../core/maybe","../../core/promiseUtils","./support/utils","../support/utils"],(function(e,r,s,t,i,n,a,u){function l(e){return s.__awaiter(this,void 0,void 0,(function(){var r,l,o,c,p,f,d,m,v,h,y,g,b;return s.__generator(this,(function(w){switch(w.label){case 0:if(!(e&&e.layer&&e.attributes))throw new t("summary-statistics-for-attributes:missing-parameters","'layer' and 'attributes' parameters are required");if(e.attributes.some((function(e){return!!e.valueExpression}))&&!e.view)throw new t("summary-statistics-for-attributes:missing-parameters","View is required when 'valueExpression' is specified in attributes");if(r=[2,1],l=e.layer,o=s.__rest(e,["layer"]),c=u.createLayerAdapter(l,r),(p=s.__assign({layerAdapter:c},o)).includeZeros=null==p.includeZeros||p.includeZeros,p.includeNegatives=null==p.includeNegatives||p.includeNegatives,!c)throw new t("summary-statistics-for-attributes:invalid-parameters","'layer' must be one of these types: "+u.getLayerTypeLabels(r).join(", "));return f=p.view,d=i.isSome(p.signal)?{signal:p.signal}:null,[4,n.all([f&&f.when(),c.load(d)])];case 1:w.sent(),m=[],v=0,h=p.attributes,w.label=2;case 2:return v<h.length?(y=h[v],[4,u.getFieldsList({field:y.field,valueExpression:y.valueExpression})]):[3,5];case 3:g=w.sent(),Array.prototype.push.apply(m,g),w.label=4;case 4:return v++,[3,2];case 5:if(b=a.verifyBasicFieldValidity(c,m,"summary-statistics-for-attributes:invalid-parameters"))throw b;return[2,p]}}))}))}return function(e){return s.__awaiter(this,void 0,void 0,(function(){var r,t,i,n;return s.__generator(this,(function(a){switch(a.label){case 0:return[4,l(e)];case 1:return r=a.sent(),t=r.layerAdapter,i=s.__rest(r,["layerAdapter"]),n=function(e,r,s){var t=[],i=[],n=[],a=[],u=[];e.forEach((function(e,r){var l=e.field?"field":"expression",o=e.field||e.valueExpression;e.field?(u.push(o),i.push("var "+l+r+' = Number($feature["'+o+'"]);')):(t.push("function getValueForExpr"+r+"() {\n  "+o+" \n}"),i.push("var "+l+r+" = Number(getValueForExpr"+r+"());")),s||n.push(""+l+r+" = IIf("+l+r+" < 0, 0, "+l+r+");"),a.push(""+l+r)}));var l="return sum;",o=t.length?null:u.reduce((function(e,r){return e+" + "+r})),c=null;return r||s?r?s||(l="return IIf(sum >= 0, sum, null);",o&&(c="(( "+o+" ) >= 0)")):(l="return IIf(sum != 0, sum, null);",o&&(c="(( "+o+" ) <> 0)")):(l="return IIf(sum > 0, sum, null);",o&&(c="(( "+o+" ) > 0)")),{valueExpression:[t.length?t.join("\n"):"",i.join("\n"),n.join("\n"),"var sum = "+a.join(" + ")+";",l].filter(Boolean).join("\n\n"),sqlExpression:o,sqlWhere:c}}(i.attributes,i.includeZeros,i.includeNegatives),[2,t.summaryStatistics({valueExpression:n.valueExpression,sqlExpression:n.sqlExpression,sqlWhere:n.sqlWhere,view:i.view,signal:i.signal})]}}))}))}}));
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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/tsSupport/restHelper","../../../core/Error","../../../core/maybe","../../../core/promiseUtils","./support/utils","../support/utils"],(function(e,r,s,t,i,n,a,u,l,o,p){function c(e){return i(this,void 0,void 0,(function(){var r,i,c,f,d,m,v,h,y,g,b,w,x;return t(this,(function(t){switch(t.label){case 0:if(!(e&&e.layer&&e.attributes))throw new a("summary-statistics-for-attributes:missing-parameters","'layer' and 'attributes' parameters are required");if(e.attributes.some((function(e){return!!e.valueExpression}))&&!e.view)throw new a("summary-statistics-for-attributes:missing-parameters","View is required when 'valueExpression' is specified in attributes");if(r=[2,1],i=e.layer,c=n(e,["layer"]),f=p.createLayerAdapter(i,r),(d=s({layerAdapter:f},c)).includeZeros=null==d.includeZeros||d.includeZeros,d.includeNegatives=null==d.includeNegatives||d.includeNegatives,!f)throw new a("summary-statistics-for-attributes:invalid-parameters","'layer' must be one of these types: "+p.getLayerTypeLabels(r).join(", "));return m=d.view,v=u.isSome(d.signal)?{signal:d.signal}:null,[4,l.all([m&&m.when(),f.load(v)])];case 1:t.sent(),h=[],y=0,g=d.attributes,t.label=2;case 2:return y<g.length?(b=g[y],[4,p.getFieldsList({field:b.field,valueExpression:b.valueExpression})]):[3,5];case 3:w=t.sent(),Array.prototype.push.apply(h,w),t.label=4;case 4:return y++,[3,2];case 5:if(x=o.verifyBasicFieldValidity(f,h,"summary-statistics-for-attributes:invalid-parameters"))throw x;return[2,d]}}))}))}return function(e){return i(this,void 0,void 0,(function(){var r,s,i,a;return t(this,(function(t){switch(t.label){case 0:return[4,c(e)];case 1:return r=t.sent(),s=r.layerAdapter,i=n(r,["layerAdapter"]),a=function(e,r,s){var t=[],i=[],n=[],a=[],u=[];e.forEach((function(e,r){var l=e.field?"field":"expression",o=e.field||e.valueExpression;e.field?(u.push(o),i.push("var "+l+r+' = Number($feature["'+o+'"]);')):(t.push("function getValueForExpr"+r+"() {\n  "+o+" \n}"),i.push("var "+l+r+" = Number(getValueForExpr"+r+"());")),s||n.push(""+l+r+" = IIf("+l+r+" < 0, 0, "+l+r+");"),a.push(""+l+r)}));var l="return sum;",o=t.length?null:u.reduce((function(e,r){return e+" + "+r})),p=null;return r||s?r?s||(l="return IIf(sum >= 0, sum, null);",o&&(p="(( "+o+" ) >= 0)")):(l="return IIf(sum != 0, sum, null);",o&&(p="(( "+o+" ) <> 0)")):(l="return IIf(sum > 0, sum, null);",o&&(p="(( "+o+" ) > 0)")),{valueExpression:[t.length?t.join("\n"):"",i.join("\n"),n.join("\n"),"var sum = "+a.join(" + ")+";",l].filter(Boolean).join("\n\n"),sqlExpression:o,sqlWhere:p}}(i.attributes,i.includeZeros,i.includeNegatives),[2,s.summaryStatistics({valueExpression:a.valueExpression,sqlExpression:a.sqlExpression,sqlWhere:a.sqlWhere,view:i.view,signal:i.signal})]}}))}))}}));
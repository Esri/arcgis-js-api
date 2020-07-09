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

define(["require","exports","tslib","../../PopupTemplate","../../core/Error","../../core/promiseUtils","../../intl/messages","../../popup/ExpressionInfo","../../popup/FieldInfo","./support/utils","../statistics/support/predominanceUtils"],(function(e,n,t,r,i,s,o,a,d,f,l){function p(e){return t.__awaiter(this,void 0,void 0,(function(){var n,r,s;return t.__generator(this,(function(t){switch(t.label){case 0:return n=e.layer,r=e.renderer,[4,n.load()];case 1:if(t.sent(),"dot-density"!==(s=r||n.renderer).type)throw new i("dot-density-popup:invalid-parameters","renderer.type must be 'dot-density'");return[2,{layer:n,renderer:s}]}}))}))}function u(e,n){return t.__awaiter(this,void 0,void 0,(function(){var i,s,o,a,d;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,f.getFieldAndExpressionInfos({renderer:e,layer:n})];case 1:return i=t.sent(),s=i.fieldInfos,o=i.expressionInfos,a=r.bind,d={},[4,f.getContentFromFieldInfos(n,{fieldInfos:s,expressionInfos:o})];case 2:return[2,new(a.apply(r,[void 0,(d.content=t.sent(),d.expressionInfos=o,d.fieldInfos=s,d)]))]}}))}))}function c(e,n,i){return t.__awaiter(this,void 0,void 0,(function(){var s,o,p,u,c,y;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,f.getFieldAndExpressionInfos({renderer:e,layer:n})];case 1:return s=t.sent(),o=s.fieldInfos,p=s.expressionInfos,u=o.filter((function(e){return-1===e.fieldName.indexOf(f.expressionFieldPrefix)})),c={fieldInfo:new d({fieldName:"expression/dot-density-categories-list"}),expressionInfo:new a({name:"dot-density-categories-list",title:i.listOfCategories,expression:l.getArcadeForOrderedFields(u,p)})},y=new r({expressionInfos:[c.expressionInfo],fieldInfos:[c.fieldInfo],title:i.competingFields,content:"{"+c.fieldInfo.fieldName+"}"}),[2,{name:"dot-density-categories-list",title:i.orderedListOfValues,value:y}]}}))}))}function y(e,n,i){return t.__awaiter(this,void 0,void 0,(function(){var s,o,p,u,c,y;return t.__generator(this,(function(m){switch(m.label){case 0:return[4,f.getFieldAndExpressionInfos({renderer:e,layer:n})];case 1:return s=m.sent(),o=s.fieldInfos,p=s.expressionInfos,u=o.filter((function(e){return-1===e.fieldName.indexOf(f.expressionFieldPrefix)})),c={fieldInfo:new d({fieldName:"expression/dot-density-category"}),expressionInfo:new a({name:"dot-density-category",title:i.predominantCategory,expression:l.getArcadeForPredominantCategoryAlias(u,p)})},y=new r({expressionInfos:t.__spreadArrays([c.expressionInfo],p),fieldInfos:t.__spreadArrays([c.fieldInfo],o),content:[{type:"text",text:'<div><b><font size="3">{'+c.fieldInfo.fieldName+"}</font></b></div>"},{type:"media",mediaInfos:{type:"pie-chart",title:i.competingFields,value:{fields:o.map((function(e){return e.fieldName}))}}}]}),[2,{name:"dot-density-category-chart",title:i.predominantCategoryWithChart,value:y}]}}))}))}Object.defineProperty(n,"__esModule",{value:!0}),n.getTemplates=function(e){return t.__awaiter(this,void 0,void 0,(function(){var n,r,i,a,d,f,l,m,I;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,s.all([p(e),o.loadMessageBundle("esri/smartMapping/t9n/smartMapping")])];case 1:return n=t.sent(),r=n[0],i=r.renderer,a=r.layer,d=n[1],l={name:"dot-density",title:d.dotDensity},[4,u(i,a)];case 2:return l.value=t.sent(),f=l,[4,c(i,a,d)];case 3:return I=[t.sent()],[4,y(i,a,d)];case 4:return m=I.concat([t.sent()]),[2,{primaryTemplate:f,secondaryTemplates:m}]}}))}))}}));
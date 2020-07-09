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

define(["require","exports","tslib","../../../core/arrayUtils","../../../intl/messages","../../../intl/substitute","../../../layers/support/fieldUtils","../../../popup/content","../../../popup/ExpressionInfo","../../../popup/FieldInfo","../../../renderers/support/utils","../../../renderers/visualVariables/support/visualVariableUtils"],(function(e,i,n,r,t,a,s,l,o,u,p,f){Object.defineProperty(i,"__esModule",{value:!0});var d=0;function m(e){return"hasVisualVariables"in e&&e.hasVisualVariables()?e.visualVariables.filter((function(e){return!f.viewScaleRE.test(e.valueExpression)&&!("target"in e&&"outline"===e.target)})):[]}function c(e,i){var n=null;"popupTemplate"in e&&e.popupTemplate&&(n=e.popupTemplate.fieldInfos);var r=e.getField(i),t=null;if(n&&n.some((function(e){return!(!e||e.fieldName.toLowerCase()!==r.name.toLowerCase())&&(t=e.clone(),!0)})),!t){var a=s.numericTypes.indexOf(r.type)>-1,l="integer"===r.type||"small-integer"===r.type;t=new u({fieldName:r.name,isEditable:r.editable,visible:!0,format:a?{places:l?0:2,digitSeparator:!0}:null})}return t.label||(t.label=r.alias),t}function x(e){var i=e.expression,n=e.title,r=e.returnType;return new o({name:"expr"+d++,expression:i,title:n,returnType:r})}function g(e){var n="number"===e.returnType?{places:2,digitSeparator:!0}:null;return new u({fieldName:""+i.expressionFieldPrefix+e.name,visible:!0,format:n})}i.expressionFieldPrefix="expression/",i.getPrimaryVisualVariables=m,i.getFieldInfo=c,i.getExpressionInfo=x,i.getFieldInfoFromExpressionInfo=g,i.getFieldAndExpressionInfos=function(e){return n.__awaiter(this,void 0,void 0,(function(){var i,s,l,o,u,f,d,b,F,v,h,y,I,V,w;return n.__generator(this,(function(n){switch(n.label){case 0:return[4,t.loadMessageBundle("esri/smartMapping/t9n/smartMapping")];case 1:for(i=n.sent(),s=e.renderer,l=e.layer,o=e.normFieldExpressionTemplate,u=[],f=[],d=p.getAttributes(s,m),b=0,F=d;b<F.length;b++)"field"===(v=F[b]).type?u.push(c(l,v.field)):"normalized-field"===v.type?(h=l.getField(v.field),y=l.getField(v.normalizationField),I='\n      $feature["'+h.name+'"];\n      $feature["'+y.name+'"];\n      '+("percentage"===o?'($feature["'+h.name+'"] / $feature["'+y.name+'"]) * 100;':'$feature["'+h.name+'"] / $feature["'+y.name+'"];')+"\n      ",V="percentage"===o?a.substitute(i.normFieldLabelAsPercent,{expression1:h.alias,expression2:y.alias}):a.substitute(i.normFieldLabel,{expression1:h.alias,expression2:y.alias}),w=x({type:"expression",expression:I,title:V,returnType:"number"}),u.push(g(w),c(l,v.field),c(l,v.normalizationField)),f.push(w)):"expression"===v.type&&(w=x(v),u.push(g(w)),f.push(w));return[2,{fieldInfos:r.unique(u,(function(e,i){return e.fieldName===i.fieldName})),expressionInfos:r.unique(f,(function(e,i){return e.expression===i.expression}))}]}}))}))},i.getContentFromFieldInfos=function(e,s){return n.__awaiter(this,void 0,void 0,(function(){var o,u,p,f,d,m,c,x;return n.__generator(this,(function(n){switch(n.label){case 0:return o=s.fieldInfos,u=s.expressionInfos,[4,t.loadMessageBundle("esri/smartMapping/t9n/smartMapping")];case 1:if(p=n.sent(),o.length>2)return[2,[new l.FieldsContent({fieldInfos:o})]];for(f=[],d=function(n){var t=n.fieldName,s=n.label;if(!s){var o=e.getField(t);if(o)s=o.alias||t;else if(u){var d=t.split(i.expressionFieldPrefix)[1],m=u[r.findIndex(u,(function(e){return e.name===d}))];m&&(s=m.title||m.name)}}f.push(new l.TextContent({text:a.substitute(p.fieldInfo,{fieldLabel:s,fieldValue:"{"+t+"}"})}))},m=0,c=o;m<c.length;m++)x=c[m],d(x);return[2,f]}}))}))},i.hasNormalizedField=function(e){return!!("normalizationField"in e&&e.normalizationField)||"hasVisualVariables"in e&&e.hasVisualVariables()&&e.visualVariables.some((function(e){return!!("normalizationField"in e&&e.normalizationField)}))}}));
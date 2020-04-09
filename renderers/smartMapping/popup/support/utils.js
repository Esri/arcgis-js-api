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

define(["require","exports","dojo/i18n!../../../nls/smartMapping","../../../../core/arrayUtils","../../../../intl/substitute","../../../../layers/support/fieldUtils","../../../../popup/content","../../../../popup/ExpressionInfo","../../../../popup/FieldInfo","../../../support/utils","../../../visualVariables/support/visualVariableUtils"],(function(e,i,n,r,t,a,s,l,o,u,p){Object.defineProperty(i,"__esModule",{value:!0});var f=0;function d(e){return"hasVisualVariables"in e&&e.hasVisualVariables()?e.visualVariables.filter((function(e){return!p.viewScaleRE.test(e.valueExpression)&&!("target"in e&&"outline"===e.target)})):[]}function m(e,i){var n=null;"popupTemplate"in e&&e.popupTemplate&&(n=e.popupTemplate.fieldInfos);var r=e.getField(i.field),t=null;if(n&&n.some((function(e){return!(!e||e.fieldName.toLowerCase()!==r.name.toLowerCase())&&(t=e.clone(),!0)})),!t){var s=a.numericTypes.indexOf(r.type)>-1;t=new o({fieldName:r.name,isEditable:r.editable,visible:!0,format:s?{places:2,digitSeparator:!0}:null})}return t.label||(t.label=r.alias),t}function b(e){var i=e.expression,n=e.title,r=e.returnType;return new l({name:"expr"+f++,expression:i,title:n,returnType:r})}function x(e){var i="number"===e.returnType?{places:2,digitSeparator:!0}:null;return new o({fieldName:"expression/"+e.name,visible:!0,format:i})}i.getPrimaryVisualVariables=d,i.getFieldInfo=m,i.getExpressionInfo=b,i.getFieldInfoFromExpressionInfo=x,i.getFieldAndExpressionInfos=function(e){for(var i=e.renderer,a=e.layer,s=e.normFieldExpressionTemplate,l=[],o=[],p=0,f=u.getAttributes(i,d);p<f.length;p++){var c=f[p];if("field"===c.type)l.push(m(a,c));else if("normalized-field"===c.type){var v=a.getField(c.field),g=a.getField(c.normalizationField),F=b({type:"expression",expression:'\n      $feature["'+v.name+'"];\n      $feature["'+g.name+'"];\n      '+("percentage"===s?'($feature["'+v.name+'"] / $feature["'+g.name+'"]) * 100;':'$feature["'+v.name+'"] / $feature["'+g.name+'"];')+"\n      ",title:"percentage"===s?t.substitute(n.normFieldLabelAsPercent,{expression1:v.alias,expression2:g.alias}):t.substitute(n.normFieldLabel,{expression1:v.alias,expression2:g.alias}),returnType:"number"});l.push(x(F)),o.push(F)}else if("expression"===c.type){F=b(c);l.push(x(F)),o.push(F)}}return{fieldInfos:r.unique(l,(function(e,i){return e.fieldName===i.fieldName})),expressionInfos:r.unique(o,(function(e,i){return e.expression===i.expression}))}},i.getContentFromFieldInfos=function(e,i){var n=i.fieldInfos,t=i.expressionInfos;if(n.length>2)return[new s.FieldsContent({fieldInfos:n})];for(var a=[],l=function(i){var n=i.fieldName,l=i.label;if(!l){var o=e.getField(n);if(o)l=o.alias||n;else if(t){var u=n.split("expression/")[1],p=t[r.findIndex(t,(function(e){return e.name===u}))];p&&(l=p.title||p.name)}}a.push(new s.TextContent({text:"The value of <b>"+l+"</b> is <b>{"+n+"}</b>."}))},o=0,u=n;o<u.length;o++){l(u[o])}return a},i.hasNormalizedField=function(e){return!!("normalizationField"in e&&e.normalizationField)||"hasVisualVariables"in e&&e.hasVisualVariables()&&e.visualVariables.some((function(e){return!!("normalizationField"in e&&e.normalizationField)}))}}));
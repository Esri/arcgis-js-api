/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../core/arrayUtils","../../../layers/support/fieldUtils","../../../popup/content/Content","../../../popup/content/AttachmentsContent","../../../popup/content/CustomContent","../../../popup/FieldInfo","../../../popup/content/FieldsContent","../../../popup/content/MediaContent","../../../popup/content/TextContent","../../../popup/ExpressionInfo","../../../intl/substitute","../../../intl/messages","../../../renderers/visualVariables/support/visualVariableUtils","../../../renderers/support/utils"],(function(e,n,t,i,s,a,l,o,r,p,u,f,d,m,c){"use strict";let x=0;const b="expression/";function g(e){return"hasVisualVariables"in e&&e.hasVisualVariables()?e.visualVariables.filter((e=>!m.viewScaleRE.test(e.valueExpression)&&(!("target"in e)||"outline"!==e.target))):[]}function F(e,n){let i=null;"popupTemplate"in e&&e.popupTemplate&&(i=e.popupTemplate.fieldInfos);const s=e.getField(n);let a=null;if(i&&i.some((e=>!(!e||e.fieldName.toLowerCase()!==s.name.toLowerCase())&&(a=e.clone(),!0))),!a){const e=t.numericTypes.indexOf(s.type)>-1,n="integer"===s.type||"small-integer"===s.type;a=new l({fieldName:s.name,isEditable:s.editable,visible:!0,format:e?{places:n?0:2,digitSeparator:!0}:null})}return a.label||(a.label=s.alias),a}function y(e){const{expression:n,title:t,returnType:i}=e;return new u({name:"expr"+x++,expression:n,title:t,returnType:i})}function I(e){const n="number"===e.returnType?{places:2,digitSeparator:!0}:null;return new l({fieldName:`${b}${e.name}`,visible:!0,format:n})}async function $(e){const t=await d.fetchMessageBundle("esri/smartMapping/t9n/smartMapping"),{renderer:i,layer:s,normFieldExpressionTemplate:a}=e,l=[],o=[],r=c.getAttributes(i,g);for(const n of r)if("field"===n.type)l.push(F(s,n.field));else if("normalized-field"===n.type){const e=s.getField(n.field),i=s.getField(n.normalizationField),r=y({type:"expression",expression:`\n      $feature["${e.name}"];\n      $feature["${i.name}"];\n      ${"percentage"===a?`($feature["${e.name}"] / $feature["${i.name}"]) * 100;`:`$feature["${e.name}"] / $feature["${i.name}"];`}\n      `,title:"percentage"===a?f.substitute(t.normFieldLabelAsPercent,{expression1:e.alias,expression2:i.alias}):f.substitute(t.normFieldLabel,{expression1:e.alias,expression2:i.alias}),returnType:"number"});l.push(I(r),F(s,n.field),F(s,n.normalizationField)),o.push(r)}else if("expression"===n.type){const e=y(n);l.push(I(e)),o.push(e)}return{fieldInfos:n.unique(l,((e,n)=>e.fieldName===n.fieldName)),expressionInfos:n.unique(o,((e,n)=>e.expression===n.expression))}}async function h(e,n){const{fieldInfos:t,expressionInfos:i}=n,s=await d.fetchMessageBundle("esri/smartMapping/t9n/smartMapping");if(t.length>2)return[new o({fieldInfos:t})];const a=[];for(const l of t){const n=l.fieldName;let t=l.label;if(!t){const s=e.getField(n);if(s)t=s.alias||n;else if(i){const e=n.split(b)[1],s=i[i.findIndex((n=>n.name===e))];s&&(t=s.title||s.name)}}a.push(new p({text:f.substitute(s.fieldInfo,{fieldLabel:t,fieldValue:`{${n}}`})}))}return a}function V(e){return!(!("normalizationField"in e)||!e.normalizationField)||"hasVisualVariables"in e&&e.hasVisualVariables()&&e.visualVariables.some((e=>!(!("normalizationField"in e)||!e.normalizationField)))}e.expressionFieldPrefix=b,e.getContentFromFieldInfos=h,e.getExpressionInfo=y,e.getFieldAndExpressionInfos=$,e.getFieldInfo=F,e.getFieldInfoFromExpressionInfo=I,e.getPrimaryVisualVariables=g,e.hasNormalizedField=V,Object.defineProperty(e,"__esModule",{value:!0})}));

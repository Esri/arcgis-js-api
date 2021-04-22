/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../core/Error","../../PopupTemplate","../../intl/messages","./support/utils"],(function(e,r,n,s,t){"use strict";async function i(e){const{layer:n,renderer:s}=e;await n.load();const t=s||n.renderer;if("simple"!==t.type)throw new r("simple-popup:invalid-parameters","renderer.type must be 'simple'");return{layer:n,renderer:t}}async function a(e,r,s="divide"){const{fieldInfos:i,expressionInfos:a}=await t.getFieldAndExpressionInfos({renderer:e,layer:r,normFieldExpressionTemplate:s});return new n({content:await t.getContentFromFieldInfos(r,{fieldInfos:i,expressionInfos:a}),expressionInfos:a,fieldInfos:i})}async function l(e){const[{renderer:r,layer:n},l]=await Promise.all([i(e),s.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]),o=[];if(!t.getPrimaryVisualVariables(r).length)return null;const p={name:"simple",title:l.simple,value:await a(r,n)};return t.hasNormalizedField(r)&&o.push({name:"simple-percent",title:l.simpleNormFieldAsPercent,value:await a(r,n,"percentage")}),{primaryTemplate:p,secondaryTemplates:o}}e.getTemplates=l,Object.defineProperty(e,"__esModule",{value:!0})}));

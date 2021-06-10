/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../core/Error","../../PopupTemplate","../../intl/messages","./support/utils"],(function(e,r,t,n,a){"use strict";async function s(e){const{layer:t,renderer:n}=e;await t.load();const a=n||t.renderer;if("heatmap"!==a.type)throw new r("heatmap-popup:invalid-parameters","renderer.type must be 'heatmap'");return{layer:t,renderer:a}}async function i(e){const[{renderer:r,layer:i},o]=await Promise.all([s(e),n.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]);if(!r.field)return null;const{fieldInfos:l}=await a.getFieldAndExpressionInfos({renderer:r,layer:i}),p=new t({content:await a.getContentFromFieldInfos(i,{fieldInfos:l}),fieldInfos:l});return{primaryTemplate:{name:"heatmap",title:o.heatmap,value:p},secondaryTemplates:[]}}e.getTemplates=i,Object.defineProperty(e,"__esModule",{value:!0})}));

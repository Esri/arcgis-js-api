/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/Error","../../core/promiseUtils","../../PopupTemplate","../../intl/messages","./support/utils"],(function(e,r,t,n,a,s){"use strict";async function i(e){const{layer:t,renderer:n}=e;await t.load();const a=n||t.renderer;if("heatmap"!==a.type)throw new r("heatmap-popup:invalid-parameters","renderer.type must be 'heatmap'");return{layer:t,renderer:a}}e.getTemplates=async function(e){const[{renderer:r,layer:o},l]=await t.all([i(e),a.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]);if(!r.field)return null;const{fieldInfos:p}=await s.getFieldAndExpressionInfos({renderer:r,layer:o}),d=new n({content:await s.getContentFromFieldInfos(o,{fieldInfos:p}),fieldInfos:p});return{primaryTemplate:{name:"heatmap",title:l.heatmap,value:d},secondaryTemplates:[]}},Object.defineProperty(e,"__esModule",{value:!0})}));

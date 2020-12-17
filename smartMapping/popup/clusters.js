/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe","../../core/Error","../../core/promiseUtils","../../intl/messages","../../views/2d/layers/support/clusterUtils","./support/clusterUtils"],(function(e,r,t,s,a,l,n){"use strict";async function i(e){const{layer:r,renderer:s}=e;await r.load();const a=s||r.renderer;if(!l.isClusterCompatibleRenderer(a))throw new t("clusters-popup:invalid-parameters","'renderer' is not valid");return{layer:r,renderer:a}}e.getTemplates=async function(e){const[{renderer:t,layer:l},o]=await s.all([i(e),a.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]),p=await n.createPopupTemplate(l,t);let u=null;return r.isSome(p)?(u={name:"clusters",title:o.clusters.templateTitle,value:p},{primaryTemplate:u,secondaryTemplates:[]}):null},Object.defineProperty(e,"__esModule",{value:!0})}));

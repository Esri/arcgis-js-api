/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe","../../core/Error","../../intl/messages","../../views/2d/layers/support/clusterUtils","./support/clusterUtils"],(function(e,r,t,s,a,l){"use strict";async function n(e){const{layer:r,renderer:s}=e;await r.load();const l=s||r.renderer;if(!a.isClusterCompatibleRenderer(l))throw new t("clusters-popup:invalid-parameters","'renderer' is not valid");return{layer:r,renderer:l}}async function i(e){const[{renderer:t,layer:a},i]=await Promise.all([n(e),s.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]),o=await l.createPopupTemplate(a,t);let p=null;return r.isSome(o)?(p={name:"clusters",title:i.clusters.templateTitle,value:o},{primaryTemplate:p,secondaryTemplates:[]}):null}e.getTemplates=i,Object.defineProperty(e,"__esModule",{value:!0})}));

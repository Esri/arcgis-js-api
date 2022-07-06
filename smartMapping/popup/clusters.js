/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import r from"../../core/Error.js";import{isSome as e}from"../../core/maybe.js";import{fetchMessageBundle as t}from"../../intl/messages.js";import{createPopupTemplate as s}from"./support/clusterUtils.js";import{isClusterCompatibleRenderer as a}from"../../views/2d/layers/support/clusterUtils.js";async function l(e){const{layer:t,renderer:s}=e;await t.load();const l=s||t.renderer;if(!a(l))throw new r("clusters-popup:invalid-parameters","'renderer' is not valid");return{layer:t,renderer:l}}async function n(r){const[{renderer:a,layer:n},o]=await Promise.all([l(r),t("esri/smartMapping/t9n/smartMapping")]),i=await s(n,a);let p=null;return e(i)?(p={name:"clusters",title:o.clusters.templateTitle,value:i},{primaryTemplate:p,secondaryTemplates:[]}):null}export{n as getTemplates};

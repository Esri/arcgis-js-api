/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{extend as e,createDom as r,createProjection as o,initPropertiesAndChildren as t}from"./projection.js";const p={namespace:void 0,performanceLogger:()=>{},eventHandlerInterceptor:void 0,styleApplyer:(e,r,o)=>{"-"===r.charAt(0)?e.style.setProperty(r,o):e.style[r]=o}};let d=r=>e(p,r),n={create:(e,t)=>(t=d(t),r(e,document.createElement("div"),void 0,t),o(e,t)),append:(e,t,p)=>(p=d(p),r(t,e,void 0,p),o(t,p)),insertBefore:(e,t,p)=>(p=d(p),r(t,e.parentNode,e,p),o(t,p)),merge:(e,r,p)=>(p=d(p),r.domNode=e,t(e,r,p),o(r,p)),replace:(e,t,p)=>(p=d(p),r(t,e.parentNode,e,p),e.parentNode.removeChild(e),o(t,p))};export{d as applyDefaultProjectionOptions,n as dom};

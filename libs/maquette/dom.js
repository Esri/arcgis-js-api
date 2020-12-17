/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./projection"],(function(e,t){"use strict";const o={namespace:void 0,performanceLogger:()=>{},eventHandlerInterceptor:void 0,styleApplyer:(e,t,o)=>{e.style[t]=o}};let r=e=>t.extend(o,e),n={create:(e,o)=>(o=r(o),t.createDom(e,document.createElement("div"),void 0,o),t.createProjection(e,o)),append:(e,o,n)=>(n=r(n),t.createDom(o,e,void 0,n),t.createProjection(o,n)),insertBefore:(e,o,n)=>(n=r(n),t.createDom(o,e.parentNode,e,n),t.createProjection(o,n)),merge:(e,o,n)=>(n=r(n),o.domNode=e,t.initPropertiesAndChildren(e,o,n),t.createProjection(o,n)),replace:(e,o,n)=>(n=r(n),t.createDom(o,e.parentNode,e,n),e.parentNode.removeChild(e),t.createProjection(o,n))};e.applyDefaultProjectionOptions=r,e.dom=n,Object.defineProperty(e,"__esModule",{value:!0})}));

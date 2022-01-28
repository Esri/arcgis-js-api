/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","./projection"],(function(e,t){"use strict";const r={namespace:void 0,performanceLogger:()=>{},eventHandlerInterceptor:void 0,styleApplyer:(e,t,r)=>{"-"===t.charAt(0)?e.style.setProperty(t,r):e.style[t]=r}};let o=e=>t.extend(r,e),n={create:(e,r)=>(r=o(r),t.createDom(e,document.createElement("div"),void 0,r),t.createProjection(e,r)),append:(e,r,n)=>(n=o(n),t.createDom(r,e,void 0,n),t.createProjection(r,n)),insertBefore:(e,r,n)=>(n=o(n),t.createDom(r,e.parentNode,e,n),t.createProjection(r,n)),merge:(e,r,n)=>(n=o(n),r.domNode=e,t.initPropertiesAndChildren(e,r,n),t.createProjection(r,n)),replace:(e,r,n)=>(n=o(n),t.createDom(r,e.parentNode,e,n),e.parentNode.removeChild(e),t.createProjection(r,n))};e.applyDefaultProjectionOptions=o,e.dom=n,Object.defineProperty(e,"__esModule",{value:!0})}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{pt2px as e}from"../../../../core/screenUtils.js";import"../../../../libs/maquette/projection.js";import{createProjector as t}from"../../../../libs/maquette/projector.js";import{renderColorRampPreviewHTML as o}from"../../../../symbols/support/symbolUtils.js";import"../../../support/widgetUtils.js";import{tsx as i}from"../../../support/jsxFactory.js";const n=t(),l=10,r=20,s=10,a=20,c={univariateAboveAndBelowSymbol:"esri-univariate-above-and-below-ramp__symbol",colorRamp:"esri-legend__color-ramp"};function f(e="vertical"){const t="stroke:rgb(200, 200, 200);stroke-width:1";return"vertical"===e?i("svg",{height:"4",width:"10"},i("line",{x1:"0",y1:"2",x2:"10",y2:"2",style:t})):i("svg",{height:"10",width:"10"},i("line",{x1:"5",y1:"0",x2:"5",y2:"10",style:t}))}function p(e,t="vertical"){const o=document.createElement("div");return o.style.height=`${r}px`,o.className=c.univariateAboveAndBelowSymbol,null!=e&&(o.style.opacity=e.toString()),n.append(o,f.bind(null,t)),o}function m(t,o,i="vertical",n){t.infos.forEach(((t,l)=>{if(n&&2===l)t.preview=p(o,i);else{const o=e(t.size)+("horizontal"===i?a:s),n="div"===t.preview.tagName.toLowerCase(),l=n?t.preview:document.createElement("div");l.className=c.univariateAboveAndBelowSymbol,"horizontal"===i?l.style.width=`${o}px`:l.style.height=`${o}px`,n||l.appendChild(t.preview),t.preview=l}}))}function u(t,o="classic"){const i=t.infos;return"classic"===o?(e(i[0].size)+s)/2:(e(i[0].size)-e(i[i.length-1].size))/2}function v(e,t){if(!e)return null;const i=e.infos.map((e=>e.color)),n=o("full"===t.type?i:"above"===t.type?i.slice(0,3):i.slice(2,5),{width:t.width,height:t.height,align:t.rampAlignment,effectList:t.effectList});return n.className=c.colorRamp,null!=t.opacity&&(n.style.opacity=t.opacity.toString()),n}function h(t,o,i,n="vertical"){let c=0;const f=t.infos,p=Math.floor(f.length/2),m="full"===o||"above"===o?0:p,u="full"===o||"below"===o?f.length-1:p;for(let v=m;v<=u;v++)if(i&&v===p)c+="horizontal"===n?l:r;else{c+=e(f[v].size)+("horizontal"===n?a:s)}return Math.round(c)}function y(t,o,i,n="vertical"){const c=h(t,o,i,n),f=t.infos,p=Math.floor(f.length/2),m="full"===o||"above"===o?0:p,u="full"===o||"below"===o?f.length-1:p,v="full"===o?f[m].size+f[u].size:"above"===o?f[m].size:f[u].size,y=i?"vertical"===n?r:l:0,d="vertical"===n?s*("full"===o?2:1):a*("full"===o?2:1);return Math.round(c-(e(v)/2+y/2+d/2))}function d(e,t,o="vertical"){const i=e.infos;let n=i.find((({type:e})=>"size-ramp"===e)),l=i.find((({type:e})=>"color-ramp"===e));return n&&(n={...n},n.infos=[...n.infos],m(n,t,o,!0)),l&&(l={...l},l.infos=[...l.infos]),"horizontal"===o&&(n?.infos.reverse(),l?.infos.reverse()),{sizeRampElement:n,colorRampElement:l}}function b(e,t="vertical"){const o=e.infos;let i=o.find((({type:e})=>"size-ramp"===e)),n=o.find((({type:e})=>"color-ramp"===e));return i&&(i={...i},i.infos=[...i.infos],m(i,null,t,!1)),n&&(n={...n},n.infos=[...n.infos]),"horizontal"===t&&(i?.infos.reverse(),n?.infos.reverse()),{sizeRampElement:i,colorRampElement:n}}export{d as getUnivariateAboveAndBelowRampElements,u as getUnivariateColorRampMargin,v as getUnivariateColorRampPreview,y as getUnivariateColorRampSize,b as getUnivariateColorSizeRampElements,h as getUnivariateSizeRampSize};
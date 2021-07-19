/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","./LabelClass"],(function(e,n){"use strict";const r=/\[([^\[\]]+)\]/gi;function t(e,t,s){return e?e.map((e=>{const o=new n;if(o.read(e,s),o.labelExpression){const e=t.fields||t.layerDefinition&&t.layerDefinition.fields||this.fields;o.labelExpression=o.labelExpression.replace(r,((n,r)=>`[${i(r,e)}]`))}return o})):null}function i(e,n){if(!n)return e;const r=e.toLowerCase();for(let t=0;t<n.length;t++){const e=n[t].name;if(e.toLowerCase()===r)return e}return e}e.reader=t,Object.defineProperty(e,"__esModule",{value:!0})}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./LabelClass"],(function(e,n){"use strict";const r=/\[([^\[\]]+)\]/gi;e.reader=function(e,t,i){return e?e.map((e=>{const s=new n;if(s.read(e,i),s.labelExpression){const e=t.fields||t.layerDefinition&&t.layerDefinition.fields||this.fields;s.labelExpression=s.labelExpression.replace(r,((n,r)=>`[${function(e,n){if(!n)return e;const r=e.toLowerCase();for(let e=0;e<n.length;e++){const t=n[e].name;if(t.toLowerCase()===r)return t}return e}(r,e)}]`))}return s})):null},Object.defineProperty(e,"__esModule",{value:!0})}));

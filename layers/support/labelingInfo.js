/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./LabelClass"],(function(e,n){"use strict";const r=/\[([^\[\]]+)\]/gi;function t(e,t,o){return e?e.map((e=>{const s=new n;if(s.read(e,o),s.labelExpression){const e=t.fields||t.layerDefinition&&t.layerDefinition.fields||this.fields;s.labelExpression=s.labelExpression.replace(r,((n,r)=>`[${i(r,e)}]`))}return s})):null}function i(e,n){if(!n)return e;const r=e.toLowerCase();for(let t=0;t<n.length;t++){const e=n[t].name;if(e.toLowerCase()===r)return e}return e}e.reader=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

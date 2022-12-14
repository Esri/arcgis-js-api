/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{createExpression as e}from"../expression/expression.js";import{BooleanType as r}from"../expression/types.js";class t{constructor(e){this._expression=e}filter(e,r){if(!this._expression)return!0;try{return this._expression.evaluate(e,r)}catch(t){return console.log(t.message),!0}}static createFilter(n){if(!n)return null;this.isLegacyFilter(n)&&(n=this.convertLegacyFilter(n));try{const s=e(n,null,r);return new t(s)}catch(s){return console.log(s.message),null}}static isLegacyFilter(e){if(!Array.isArray(e))return!0;if(0===e.length)return!0;switch(e[0]){case"==":case"!=":case">":case"<":case">=":case"<=":return 3===e.length&&"string"==typeof e[1]&&!Array.isArray(e[2]);case"in":return e.length>=3&&"string"==typeof e[1]&&!Array.isArray(e[2]);case"!in":case"none":case"!has":return!0;case"any":case"all":for(let r=1;r<e.length;r++)if(this.isLegacyFilter(e[r]))return!0;return!1;case"has":return 2===e.length&&("$id"===e[1]||"$type"===e[1]);default:return!1}}static convertLegacyFilter(e){if(!Array.isArray(e)||0===e.length)return!0;const r=e[0];if(1===e.length)return"any"!==r;switch(r){case"==":return t.convertComparison("==",e[1],e[2]);case"!=":return t.negate(t.convertComparison("==",e[1],e[2]));case">":case"<":case">=":case"<=":return t.convertComparison(r,e[1],e[2]);case"in":return t.convertIn(e[1],e.slice(2));case"!in":return t.negate(t.convertIn(e[1],e.slice(2)));case"any":case"all":case"none":return t.convertCombining(r,e.slice(1));case"has":return t.convertHas(e[1]);case"!has":return t.negate(t.convertHas(e[1]));default:throw new Error("Unexpected legacy filter.")}}static convertComparison(e,r,t){switch(r){case"$type":return[e,["geometry-type"],t];case"$id":return[e,["id"],t];default:return[e,["get",r],t]}}static convertIn(e,r){switch(e){case"$type":return["in",["geometry-type"],["literal",r]];case"$id":return["in",["id"],["literal",r]];default:return["in",["get",e],["literal",r]]}}static convertHas(e){switch(e){case"$type":return!0;case"$id":return["has-id"];default:return["has",e]}}static convertCombining(e,r){return[e].concat(r.map(this.convertLegacyFilter))}static negate(e){return["!",e]}}export{t as default};
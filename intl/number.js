/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{assumeNonNull as t}from"../core/maybe.js";import{beforeLocaleChange as n,getLocale as r}from"./locale.js";const a={ar:"ar-u-nu-latn"};let e=new WeakMap,o={};function i(n){const i=n||o;if(!e.has(i)){const t=r(),o=a[r()]||t;e.set(i,new Intl.NumberFormat(o,n))}return t(e.get(i))}function u(t={}){const n={};return null!=t.digitSeparator&&(n.useGrouping=t.digitSeparator),null!=t.places&&(n.minimumFractionDigits=n.maximumFractionDigits=t.places),n}function m(t,n){return-0===t&&(t=0),i(n).format(t)}n((()=>{e=new WeakMap,o={}}));export{u as convertNumberFormatToIntlOptions,m as formatNumber,i as getFormatter};

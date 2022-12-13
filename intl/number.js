/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../core/maybe","./locale"],(function(e,t,n){"use strict";const o={ar:"ar-u-nu-latn"};let a=new WeakMap,r={};function i(e){const i=e||r;if(!a.has(i)){const t=n.getLocale(),r=o[n.getLocale()]||t;a.set(i,new Intl.NumberFormat(r,e))}return t.assumeNonNull(a.get(i))}function u(e={}){const t={};return null!=e.digitSeparator&&(t.useGrouping=e.digitSeparator),null!=e.places&&(t.minimumFractionDigits=t.maximumFractionDigits=e.places),t}function l(e,t){return-0===e&&(e=0),i(t).format(e)}n.beforeLocaleChange((()=>{a=new WeakMap,r={}})),e.convertNumberFormatToIntlOptions=u,e.formatNumber=l,e.getFormatter=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

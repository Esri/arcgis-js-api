/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../core/maybe","./locale"],(function(e,t,n){"use strict";const o={ar:"ar-u-nu-latn"};let r=new WeakMap,a={};function i(e){const i=e||a;if(!r.has(i)){const t=n.getLocale(),a=o[n.getLocale()]||t;r.set(i,new Intl.NumberFormat(a,e))}return t.assumeNonNull(r.get(i))}function u(e={}){const t={};return null!=e.digitSeparator&&(t.useGrouping=e.digitSeparator),null!=e.places&&(t.minimumFractionDigits=t.maximumFractionDigits=e.places),t}function c(e,t){return i(t).format(e)}n.beforeLocaleChange((()=>{r=new WeakMap,a={}})),e.convertNumberFormatToIntlOptions=u,e.formatNumber=c,e.getFormatter=i,Object.defineProperty(e,"__esModule",{value:!0})}));

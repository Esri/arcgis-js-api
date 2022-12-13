/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../Color","../config","../views/support/colorUtils"],(function(e,o,t,n){"use strict";function r(e,t){const r=e.a*t;return n.getColorLuminance(e)>225?new o([0,0,0,r]):new o([255,255,255,r])}function u(e,t){const n=new o(e);return n.a*=t,n}function c(e=1){return u(t.analysisTheme.accentColor,e)}function i(e=1){return r(c(),e)}function l(e=1){return u(t.analysisTheme.textColor,e)}function s(e=1){return r(l(),e)}e.getAccentColor=c,e.getContrastColor=i,e.getTextColor=l,e.getTextHaloColor=s,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

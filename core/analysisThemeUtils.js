/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../Color","../config","../views/support/colorUtils"],(function(t,n,o,e){"use strict";function r(t,o){const r=t.a*o;return e.getColorLuminance(t)>225?new n([0,0,0,r]):new n([255,255,255,r])}function c(t,o){const e=new n(t);return e.a*=o,e}function u(t=1){return c(o.analysisTheme.accentColor,t)}function i(t=1){return r(u(),t)}function l(t=1){return c(o.analysisTheme.textColor,t)}function s(t=1){return r(l(),t)}t.getAccentColor=u,t.getContrastColor=i,t.getTextColor=l,t.getTextHaloColor=s,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));

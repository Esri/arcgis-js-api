/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../core/screenUtils","../../views/2d/support/engineHelpers"],(function(e,t){"use strict";return async function(n,s){await s.when();const i=n.clone();i.text="9";const c=await t.getTextBounds(i,s);return 4*e.px2pt(c.width)}}));

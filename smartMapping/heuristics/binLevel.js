/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../core/Error"],(function(e,l){"use strict";const n=[{scale:565,level:9},{scale:9028,level:8},{scale:72224,level:7},{scale:288896,level:6},{scale:2311163,level:5},{scale:18489298,level:4},{scale:73957191,level:3},{scale:295828764,level:2}];function r(e){return t.apply(this,arguments)}function t(){return(t=e._asyncToGenerator((function*(e){if(!e.view)throw new l("bin-level:missing-parameters","'view' parameter is required");return yield e.view.when(),{...e}}))).apply(this,arguments)}function i(e){let l=2;for(const r of n)if(!(r.scale<e)){l=r.level;break}return l}function s(e){return c.apply(this,arguments)}function c(){return(c=e._asyncToGenerator((function*(e){const{view:l}=yield r(e);return i(l.scale)}))).apply(this,arguments)}return s}));

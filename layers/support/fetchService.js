/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../support/requestPresets"],(function(e,r,t){"use strict";function n(e,r){return s.apply(this,arguments)}function s(){return(s=r._asyncToGenerator((function*(e,r){const n=yield t.fetchArcGISServiceJSON(e,r);n.layers=n.layers.filter(c);const s={serviceJSON:n};if((n.currentVersion??0)<10.5)return s;const i=yield t.fetchArcGISServiceJSON(e+"/layers",r);return s.layersJSON={layers:i.layers.filter(c),tables:i.tables},s}))).apply(this,arguments)}function c(e){return!e.type||"Feature Layer"===e.type}e.fetchFeatureService=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));

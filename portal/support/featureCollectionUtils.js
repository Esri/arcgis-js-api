/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../PortalItem","./portalItemUtils"],(function(e,t,r,n){"use strict";function o(e,t){return i(e,t,"notes","Map Notes")}function u(e,t){return i(e,t,"route","Route Layer")}function i(e,t,r,n){return l.apply(this,arguments)}function l(){return(l=t._asyncToGenerator((function*(e,t,o,u){if(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)return!1;if(e.url)return!1;if(e.featureCollectionType&&e.featureCollectionType===o)return!0;if(e.itemId){const o=new r({id:e.itemId,portal:t});return yield o.load(),"Feature Collection"===o.type&&n.hasTypeKeyword(o,u)}return!1}))).apply(this,arguments)}e.isMapNotesLayer=o,e.isRouteLayer=u,Object.defineProperty(e,"__esModule",{value:!0})}));

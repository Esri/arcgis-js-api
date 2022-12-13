/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils","./support/AssociationGeometriesResult"],(function(e,t,o,s,n){"use strict";function i(e,t,o){return r.apply(this,arguments)}function r(){return(r=t._asyncToGenerator((function*(e,t,n){const i=s.parseUrl(e),r={...t.toJSON(),f:"json"},a=s.encode({...i.query,...r});n?n.method="post":n={method:"post"};const c=s.asValidOptions(a,n),l=`${i.path}/synthesizeAssociationGeometries`;return o(l,c).then((e=>u(e,t.outSpatialReference)))}))).apply(this,arguments)}function u(e,t){const{data:o}=e;if(!o)return null;const s=n.fromJSON(o);if(t)for(const n of s.associations)n.geometry.spatialReference=t.clone();return s}e.synthesizeAssociationGeometries=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

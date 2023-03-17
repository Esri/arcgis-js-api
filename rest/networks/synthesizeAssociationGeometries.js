/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils","./support/AssociationGeometriesResult"],(function(e,t,o,n,s){"use strict";function i(e,t,o){return r.apply(this,arguments)}function r(){return(r=t._asyncToGenerator((function*(e,t,s){const i=n.parseUrl(e),r={...t.toJSON(),f:"json"},a=n.encode({...i.query,...r});s?s.method="post":s={method:"post"};const c=n.asValidOptions(a,s),l=`${i.path}/synthesizeAssociationGeometries`;return o(l,c).then((e=>u(e,t.outSpatialReference)))}))).apply(this,arguments)}function u(e,t){const{data:o}=e;if(!o)return null;const n=s.fromJSON(o);if(t)for(const s of n.associations)s.geometry.spatialReference=t.clone();return n}e.synthesizeAssociationGeometries=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));

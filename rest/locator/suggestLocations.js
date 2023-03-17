/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../request","../utils","../support/SuggestionCandidate","../support/SuggestLocationsParameters"],(function(t,e,n,s,o,r){"use strict";function u(t,e,n){return i.apply(this,arguments)}function i(){return(i=e._asyncToGenerator((function*(t,e,o){const u=s.parseUrl(t),i={...(e=r.from(e)).toJSON(),f:"json"},p=s.encode({...u.query,...i}),c=s.asValidOptions(p,o),g=`${u.path}/suggest`;return n(g,c).then(a)}))).apply(this,arguments)}function a(t){const{data:e}=t;if(!e)return[];const{suggestions:n}=e;return n?n.map((t=>new o(t))):[]}t.suggestLocations=u,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../request","../utils","../../tasks/support/SuggestLocationsParameters"],(function(t,s,e,n){"use strict";function o(t){const{data:s}=t;if(!s)return[];const{suggestions:e}=s;return e||[]}t.suggestLocations=async function(t,r,u){const a=e.parseUrl(t),i={...(r=n.from(r)).toJSON(),f:"json"},c=e.encode({...a.query,...i}),f=e.asValidOptions(c,u),g=`${a.path}/suggest`;return s(g,f).then(o)},Object.defineProperty(t,"__esModule",{value:!0})}));

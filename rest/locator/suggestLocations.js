/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../request","../utils","../../tasks/support/SuggestionCandidate","../../tasks/support/SuggestLocationsParameters"],(function(t,s,e,n,o){"use strict";async function r(t,n,r){const a=e.parseUrl(t),i={...(n=o.from(n)).toJSON(),f:"json"},c=e.encode({...a.query,...i}),g=e.asValidOptions(c,r),p=`${a.path}/suggest`;return s(p,g).then(u)}function u(t){const{data:s}=t;if(!s)return[];const{suggestions:e}=s;return e?e.map((t=>new n(t))):[]}t.suggestLocations=r,Object.defineProperty(t,"__esModule",{value:!0})}));

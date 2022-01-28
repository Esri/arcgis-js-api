/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../core/has","./CodedValueDomain","./Domain","./InheritedDomain","./RangeDomain"],(function(e,n,r,a,o,t){"use strict";const i={key:"type",base:a,typeMap:{range:t,"coded-value":r,inherited:o}};function u(e){if(!e||!e.type)return null;switch(e.type){case"range":return t.fromJSON(e);case"codedValue":return r.fromJSON(e);case"inherited":return o.fromJSON(e)}return null}e.CodedValueDomain=r,e.DomainBase=a,e.InheritedDomain=o,e.RangeDomain=t,e.fromJSON=u,e.types=i,Object.defineProperty(e,"__esModule",{value:!0})}));

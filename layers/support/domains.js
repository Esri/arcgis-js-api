/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../core/has","./CodedValueDomain","./Domain","./InheritedDomain","./RangeDomain"],(function(e,n,a,o,r,t){"use strict";const i={key:"type",base:o,typeMap:{range:t,"coded-value":a,inherited:r}};function u(e){if(!e||!e.type)return null;switch(e.type){case"range":return t.fromJSON(e);case"codedValue":return a.fromJSON(e);case"inherited":return r.fromJSON(e)}return null}e.CodedValueDomain=a,e.DomainBase=o,e.InheritedDomain=r,e.RangeDomain=t,e.fromJSON=u,e.types=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

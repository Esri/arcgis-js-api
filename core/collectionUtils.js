/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","./Collection"],(function(e,r){"use strict";function t(e,t,n=r){return t||(t=new n),t===e||(t.removeAll(),i(e)?t.addMany(e):e&&t.add(e)),t}function n(e){return e}function i(e){return e&&(Array.isArray(e)||"items"in e&&Array.isArray(e.items))}e.castForReferenceSetter=n,e.referenceSetter=t,Object.defineProperty(e,"__esModule",{value:!0})}));

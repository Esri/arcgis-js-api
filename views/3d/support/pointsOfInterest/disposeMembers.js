/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../core/Accessor"],(function(e,o){"use strict";function t(e,...o){if(n(e)&&e.destroyed)try{throw new Error("instance is already destroyed")}catch(e){console.warn(e.stack)}else for(const t of o){if(!(t in e))throw new Error(`Property '${t}' does not exist and cannot be disposed`);const o=e[t];o&&("function"==typeof o.destroy?o.destroy():"function"==typeof o.dispose?o.dispose():"function"==typeof o.remove&&o.remove()),n(e)&&t in e.__accessor__.metadatas?e._set(t,null):e[t]=null}}function n(e){return e instanceof o}e.default=t,e.disposeMembers=t,Object.defineProperty(e,"__esModule",{value:!0})}));

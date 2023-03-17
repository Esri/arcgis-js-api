/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./layerUtils"],(function(e,i){"use strict";function t(e){return!(!e?.loaded||!i.getEffectiveLayerCapabilities(e)?.operations?.supportsEditing||"editingEnabled"in e&&!i.getEffectiveEditingEnabled(e))}e.isEditableLayer=t,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));

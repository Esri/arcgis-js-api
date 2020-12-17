/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/unitUtils"],(function(e,t){"use strict";const r={dependsOn:["view.map.portalItem?.portal.units","view.map.portalItem?.portal.user.units","view.spatialReference"],readOnly:!0,get(){const e="metric",{view:r}=this;if(!r)return e;const i=r.get("map.portalItem.portal");if(i){switch(i.get("user.units")||i.units){case e:return e;case"english":return"imperial"}}return t.getDefaultUnitSystem(r.spatialReference)||e}};e.defaultUnitPropertyMetadata=r,Object.defineProperty(e,"__esModule",{value:!0})}));

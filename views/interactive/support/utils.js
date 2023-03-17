/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe","../../../core/screenUtils"],(function(e,o,t){"use strict";function s(e){let s=0,a=0,n=0;return e?("cim"===e.type&&e.data.symbol&&"symbolLayers"in e.data.symbol&&e.data.symbol.symbolLayers&&e.data.symbol.symbolLayers.map((e=>{"CIMVectorMarker"===e.type&&e.anchorPoint&&(Math.abs(e.anchorPoint.x)>s&&(s=e.anchorPoint.x),Math.abs(e.anchorPoint.y)>a&&(a=e.anchorPoint.y),o.isSome(e.size)&&e.size>n&&(n=e.size))})),s=t.pt2px(s),a=t.pt2px(a),n=t.pt2px(n),{offsetX:s,offsetY:a,size:n}):{offsetX:s,offsetY:a,size:n}}e.getSymbolInfo=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));

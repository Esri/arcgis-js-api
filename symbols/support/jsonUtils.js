/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../core/Error","../Symbol3D","../WebStyleSymbol","../../symbols","./symbolConversion"],(function(e,s,o,n,r,t){"use strict";function l(e,s,o,n){const r=i(e,{},n);r&&(s[o]=r)}function i(e,r,l){if(!e)return null;if(l&&"web-scene"===l.origin&&!(e instanceof o)&&!(e instanceof n)){const o="cim"!==e.type?t.to3D(e):{symbol:null,error:new s("symbol-conversion:unsupported-cim-symbol","CIM symbol is unsupported in web scenes",{symbol:e})};return o.symbol?o.symbol.write(r,l):(l.messages&&l.messages.push(new s("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,{symbol:e,context:l,error:o.error})),null)}return l&&"web-map"===l.origin&&"web-style"===e.type?(l.messages&&l.messages.push(new s("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in webmaps. Use CIMSymbol instead when working with WebMap in MapView.`,{symbol:e,context:l})),null):e.write(r,l)}function b(e,s){return r.readSymbol(e,null,s)}e.fromJSON=b,e.write=l,Object.defineProperty(e,"__esModule",{value:!0})}));

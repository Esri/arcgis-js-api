/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../../../../core/has.js";function E(E){switch(E){case P.SUPPORTED:break;case P.GRAPHICS_LAYER_MISSING:return"not owned by a graphics layer";case P.GEOMETRY_MISSING:return"no geometry";case P.GEOMETRY_TYPE_UNSUPPORTED:return"the geometry type is not supported";case P.ELEVATION_MODE_UNSUPPORTED:return"the elevation mode is not supported";case P.SYMBOL_TYPE_UNSUPPORTED:return"the symbol type is not supported"}return""}var P;!function(E){E[E.SUPPORTED=0]="SUPPORTED",E[E.GRAPHICS_LAYER_MISSING=1]="GRAPHICS_LAYER_MISSING",E[E.GEOMETRY_MISSING=2]="GEOMETRY_MISSING",E[E.GEOMETRY_TYPE_UNSUPPORTED=3]="GEOMETRY_TYPE_UNSUPPORTED",E[E.ELEVATION_MODE_UNSUPPORTED=4]="ELEVATION_MODE_UNSUPPORTED",E[E.SYMBOL_TYPE_UNSUPPORTED=5]="SYMBOL_TYPE_UNSUPPORTED"}(P||(P={}));export{P as SupportedGraphicResult,E as isSupportedGraphicResultMessage};

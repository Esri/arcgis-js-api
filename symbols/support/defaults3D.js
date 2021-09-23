/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../core/has","../../core/maybe","../FillSymbol3DLayer","../LineSymbol3D","../MeshSymbol3D","../PointSymbol3D","../PolygonSymbol3D","./defaults","./defaultsJSON"],(function(e,l,o,t,n,r,i,y,m,s){"use strict";const u=i.fromSimpleMarkerSymbol(m.defaultPointSymbol2D),a=n.fromSimpleLineSymbol(m.defaultPolylineSymbol2D),c=y.fromSimpleFillSymbol(m.defaultPolygonSymbol2D),f=new r({symbolLayers:[new t({material:{color:s.defaultColor},edges:{type:"solid",size:"1px",color:s.defaultOutlineColor}})]});function S(e){if(o.isNone(e))return null;switch(e.type){case"mesh":return f;case"point":case"multipoint":return u;case"polyline":return a;case"polygon":case"extent":return c}return null}e.getDefaultSymbol3D=S,Object.defineProperty(e,"__esModule",{value:!0})}));

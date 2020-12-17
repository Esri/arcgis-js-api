/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/has","../../core/maybe","../FillSymbol3DLayer","../LineSymbol3D","../MeshSymbol3D","../PointSymbol3D","../PolygonSymbol3D","./defaultsJSON","./defaults"],(function(e,l,o,t,n,r,i,y,m,s){"use strict";const u=i.fromSimpleMarkerSymbol(s.defaultPointSymbol2D),a=n.fromSimpleLineSymbol(s.defaultPolylineSymbol2D),c=y.fromSimpleFillSymbol(s.defaultPolygonSymbol2D),f=new r({symbolLayers:[new t({material:{color:m.defaultColor},edges:{type:"solid",size:"1px",color:m.defaultOutlineColor}})]});e.getDefaultSymbol3D=function(e){if(o.isNone(e))return null;switch(e.type){case"mesh":return f;case"point":case"multipoint":return u;case"polyline":return a;case"polygon":case"extent":return c}return null},Object.defineProperty(e,"__esModule",{value:!0})}));

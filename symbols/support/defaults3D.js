/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../core/has","../../core/maybe","../FillSymbol3DLayer","../LineSymbol3D","../MeshSymbol3D","../PointSymbol3D","../PolygonSymbol3D","../edges/SolidEdges3D","./defaults","./defaultsJSON"],(function(e,l,o,t,n,r,i,s,m,u,y){"use strict";const a=i.fromSimpleMarkerSymbol(u.defaultPointSymbol2D),S=n.fromSimpleLineSymbol(u.defaultPolylineSymbol2D),c=s.fromSimpleFillSymbol(u.defaultPolygonSymbol2D),f=new r({symbolLayers:[new t({material:{color:y.defaultColor},edges:new m({size:"1px",color:y.defaultOutlineColor})})]});function b(e){if(o.isNone(e))return null;switch(e.type){case"mesh":return f;case"point":case"multipoint":return a;case"polyline":return S;case"polygon":case"extent":return c}return null}e.getDefaultSymbol3D=b,Object.defineProperty(e,"__esModule",{value:!0})}));

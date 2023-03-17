/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../core/has","../../core/maybe","../FillSymbol3DLayer","../LineSymbol3D","../MeshSymbol3D","../PointSymbol3D","../PolygonSymbol3D","../edges/SolidEdges3D","./defaults","./defaultsJSON"],(function(e,l,o,t,n,r,i,m,y,a,s){"use strict";const u=i.fromSimpleMarkerSymbol(a.defaultPointSymbol2D),S=n.fromSimpleLineSymbol(a.defaultPolylineSymbol2D),b=m.fromSimpleFillSymbol(a.defaultPolygonSymbol2D),c=new r({symbolLayers:[new t({material:{color:s.defaultColor},edges:new y({size:"1px",color:s.defaultOutlineColor})})]});function f(e){if(o.isNone(e))return null;switch(e.type){case"mesh":return c;case"point":case"multipoint":return u;case"polyline":return S;case"polygon":case"extent":return b}return null}e.getDefaultSymbol3D=f,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));

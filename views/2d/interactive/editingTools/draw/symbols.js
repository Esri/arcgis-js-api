/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../../../../../symbols.js";import e from"../../../../../symbols/CIMSymbol.js";import o from"../../../../../symbols/SimpleMarkerSymbol.js";const t=new e({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[3.75,3.75],lineDashEnding:"HalfPattern",controlPointEnding:"NoConstraint"}],enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:1.6,color:[255,255,255,255]},{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:2,color:[0,0,0,255]}]}}}),l=new o({style:"circle",size:6,color:[127,127,127,1],outline:{color:[50,50,50],width:1}}),i=new o({style:"circle",size:6,color:[255,127,0,1],outline:{color:[50,50,50],width:1}});export{i as activeVertex,t as outline,l as regularVertices};

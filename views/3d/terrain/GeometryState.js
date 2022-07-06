/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class s{}class e{constructor(){this.elevation=0,this.normal=[0,0,1],this.cornerTiles=[null,null,null,null]}}class l{constructor(){this.edgeNeighbours=[null,null,null,null],this.cornerNeighborData=[new e,new e,new e,new e],this.edgeResolutions=[1,1,1,1],this.modifiedEdgeResolutions=[!1,!1,!1,!1]}}class i{constructor(){this.numVerticesPerSide=0,this.samplerData=null,this.clippingArea=null,this.wireframe=!1,this.samplerDataVersion=0,this.neighborData=new l}}export{e as CornerNeighborData,s as EdgeNeighborData,i as GeometryState,l as NeighborhoodData};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";let n=function(){this.cornerTiles=[null,null,null,null],this.cornerTileSamplerVersions=[-1,-1,-1,-1]},i=function(){this.cornerNeighborData=[new n,new n,new n,new n],this.edgeResolutions=[-1,-1,-1,-1],this.edgePeerNeighbors=[null,null,null,null],this.edgePeerNeighborSamplerVersions=[-1,-1,-1,-1],this.cornerPeerNeighbors=[null,null,null,null]},l=function(){this.numVerticesPerSide=0,this.samplerData=null,this.clippingArea=null,this.wireframe=!1,this.shading=!1,this.samplerDataVersion=0,this.neighborData=new i};e.CornerNeighborData=n,e.GeometryState=l,e.NeighborhoodData=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","./renderers/Renderer","./renderers/ClassBreaksRenderer","./renderers/UniqueValueRenderer","./renderers/DictionaryRenderer","./renderers/DotDensityRenderer","./renderers/HeatmapRenderer","./renderers/SimpleRenderer","./renderers/support/types","./renderers/support/jsonUtils"],(function(e,r,n,d,s,t,i,a,R,o){"use strict";function p(e){return e instanceof r}e.BaseRenderer=r,e.ClassBreaksRenderer=n,e.UniqueValueRenderer=d,e.DictionaryRenderer=s,e.DotDensityRenderer=t,e.HeatmapRenderer=i,e.SimpleRenderer=a,e.rendererTypes=R.rendererTypes,e.webSceneRendererTypes=R.webSceneRendererTypes,e.fromJSON=o.fromJSON,e.read=o.read,e.write=o.write,e.isRenderer=p,Object.defineProperty(e,"__esModule",{value:!0})}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe"],(function(e,n){"use strict";var o,s;function u(e){return n.isSome(e)&&n.isSome(e.cubeMap)}function N(e){return n.isSome(e)&&!e.running}e.CloudsRenderingStages=void 0,(o=e.CloudsRenderingStages||(e.CloudsRenderingStages={}))[o.RENDERING=0]="RENDERING",o[o.FINISHED_RENDERING=1]="FINISHED_RENDERING",o[o.FADING_TEXTURE_CHANNELS=2]="FADING_TEXTURE_CHANNELS",o[o.SWITCH_CHANNELS=3]="SWITCH_CHANNELS",o[o.FINISHED=4]="FINISHED",e.CloudsTextureChannels=void 0,(s=e.CloudsTextureChannels||(e.CloudsTextureChannels={}))[s.RG=0]="RG",s[s.BA=1]="BA",e.ensureClouds=N,e.isReadyCloudsData=u,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));

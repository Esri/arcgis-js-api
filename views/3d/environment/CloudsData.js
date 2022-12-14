/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe"],(function(e,n){"use strict";var s,u;function o(e){return n.isSome(e)&&n.isSome(e.cubeMap)}function N(e){return n.isSome(e)&&!e.running}e.CloudsRenderingStages=void 0,(s=e.CloudsRenderingStages||(e.CloudsRenderingStages={}))[s.RENDERING=0]="RENDERING",s[s.FINISHED_RENDERING=1]="FINISHED_RENDERING",s[s.FADING_TEXTURE_CHANNELS=2]="FADING_TEXTURE_CHANNELS",s[s.SWITCH_CHANNELS=3]="SWITCH_CHANNELS",s[s.FINISHED=4]="FINISHED",e.CloudsTextureChannels=void 0,(u=e.CloudsTextureChannels||(e.CloudsTextureChannels={}))[u.RG=0]="RG",u[u.BA=1]="BA",e.ensureClouds=N,e.isReadyCloudsData=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));

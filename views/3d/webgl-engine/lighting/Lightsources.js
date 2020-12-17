/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/vec3f64"],(function(t,i){"use strict";t.AmbientLight=function(t=i.create()){this.intensity=t},t.FillLight=function(t=i.create(),e=i.fromValues(.57735,.57735,.57735)){this.intensity=i.create(),this.direction=i.create(),this.intensity=t,this.direction=e},t.MainLight=function(t=i.create(),e=i.fromValues(.57735,.57735,.57735),n=!0){this.intensity=t,this.direction=e,this.castShadows=n},t.SphericalHarmonicsLight=function(){this.sh={r:[0],g:[0],b:[0]}},Object.defineProperty(t,"__esModule",{value:!0})}));

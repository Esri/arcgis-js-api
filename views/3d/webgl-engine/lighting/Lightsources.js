/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{c as t,f as s}from"../../../../chunks/vec3f64.js";class i{constructor(s=t()){this.intensity=s}}class c{constructor(i=t(),c=s(.57735,.57735,.57735)){this.intensity=i,this.direction=c}}class n{constructor(i=t(),c=s(.57735,.57735,.57735),n=!0,r=1,h=1){this.intensity=i,this.direction=c,this.castShadows=n,this.specularStrength=r,this.environmentStrength=h}}class r{constructor(){this.r=[0],this.g=[0],this.b=[0]}}export{i as AmbientLight,c as FillLight,n as MainLight,r as SphericalHarmonicsAmbientLight};

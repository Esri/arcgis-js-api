/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{c as t}from"../../../../chunks/mat3f32.js";import{RasterBitmap as s}from"./RasterBitmap.js";import{TiledDisplayObject as e}from"../webgl/TiledDisplayObject.js";class i extends e{constructor(t,e,i,r,a,n=null){super(t,e,i,r,a),this.bitmap=new s(n,null,null),this.bitmap.coordScale=[r,a],this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy(),this.bitmap=null,this.stage=null}set stencilRef(t){this.bitmap.stencilRef=t}get stencilRef(){return this.bitmap.stencilRef}setTransform(t,s){super.setTransform(t,s),this.bitmap.transforms.dvs=this.transforms.dvs}_createTransforms(){return{dvs:t(),tileMat3:t()}}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap.stage=null}}export{i as RasterTile};

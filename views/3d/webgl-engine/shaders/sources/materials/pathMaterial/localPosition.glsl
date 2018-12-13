#ifdef VV_SIZE
vec4 localPosition() {
    vec3 sizeScale = vvGetScale(auxpos2);
    vec3 positionOffset = auxpos1.xyz*sizeScale;
    return vec4( position+positionOffset, 1.0 );
}
#else
vec4 localPosition() {
    vec3 sizeScale = vec3(size);
    vec3 positionOffset = auxpos1.xyz*sizeScale;
    return vec4(position+positionOffset, 1.0);
}
#endif

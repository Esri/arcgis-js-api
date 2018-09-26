vec3 decodeNormal(vec2 f) {
    float z = 1.0 - abs(f.x) - abs(f.y);
    return vec3(f + sign(f) * min(z, 0.0), z);
}

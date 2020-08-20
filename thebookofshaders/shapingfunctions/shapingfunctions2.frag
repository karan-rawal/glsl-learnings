#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float plot(vec2 st, float y) {
    return smoothstep(y - (0.02), y, st.y) - smoothstep(y, y + 0.02, st.y);
}

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;
    float y = pow(st.x, 5.);
    vec3 color = vec3(y);
    vec3 pct = plot(st, y) * vec3(0., 1., 0.);
    gl_FragColor = vec4((1.0 - pct) * color + pct, 1.);
}
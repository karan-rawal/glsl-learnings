#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float plot(vec2 st, float pct) {
    return smoothstep(pct - 0.02, pct, st.y) - smoothstep(pct, pct + 0.02, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    
    float y = step(0.5, st.x);

    float pct = plot(st, y);
    vec3 color = vec3(y);

    color = color * (1. - pct) + pct * vec3(0.0, 1.0, 0.1);
    
    gl_FragColor = vec4(color, 1.0);
}
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float plot(vec2 st, float pct) {
    return smoothstep(pct - 0.02, pct, st.y) - smoothstep(pct, pct + 0.02, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;

    float y = smoothstep(0.01, 0.99, st.x);

    float pct = plot(st, y);
    vec3 color = vec3(st.x);

    color = (1.0 - pct) * color + pct * vec3(0.0, 1.0, 0.0);

    gl_FragColor = vec4(color, 1.0);
}
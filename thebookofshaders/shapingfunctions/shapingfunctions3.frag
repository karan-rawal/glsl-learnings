#ifdef GL_ES
precision mediump float;
#endif

const float PI = 3.14159265359;

uniform vec2 u_resolution;
uniform float u_time;

float plot(vec2 st, float y) {
    return smoothstep(y - 0.02, y, st.y) - smoothstep(y, y + 0.02, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    float y = sqrt(sin(st.y * u_time));

    float pct = plot(st, y);

    vec3 color = vec3(y);

    color = color * (1.0 - pct) + pct * vec3(0.0, 1.0, 0.0);

    gl_FragColor = vec4(color, 1.0);
}
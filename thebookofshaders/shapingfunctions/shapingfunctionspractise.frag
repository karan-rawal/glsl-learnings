#ifdef GL_ES
precision mediump float;
#endif

const float PI = 3.14159265359;

uniform float u_time;
uniform vec2 u_resolution;

float plot(vec2 st, float pct) {
    return smoothstep(pct - 0.01, pct, st.y) - smoothstep(pct, pct + 0.01, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;

    float sinWave = ceil(sin(st.x * PI + u_time)) + floor(sin(st.x * PI + u_time))  * 0.5 + 0.5;
    
    float y = sinWave;

    vec3 color = vec3(y) ;
    float pct = plot(st, y);

    color = (1. - pct) * color + pct * vec3(0.0, 1.0, 0.0);

    gl_FragColor = vec4(color, 1.0);
}

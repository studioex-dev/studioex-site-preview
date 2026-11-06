import{t as e}from"./preload-helper.DygEbaNj.js";var t=Object.defineProperty,n=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},r=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],i=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],a=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],o=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],s=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],c=e=>Math.hypot(e[0],e[1],e[2]),l=e=>{let t=c(e)||1;return[e[0]/t,e[1]/t,e[2]/t]},u=(e,t,n)=>[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n],d=(e,t,n)=>{let i=Math.acos(Math.max(-1,Math.min(1,o(e,t))));if(i<1e-6)return e;let u=s(e,t),d=c(u);u=d<1e-6?l(s(e,[0,1,.3])):a(u,1/d);let f=i*n;return r(a(e,Math.cos(f)),a(s(u,e),Math.sin(f)))},f=(e,t,n)=>r(r(a(e,Math.cos(n)),a(s(t,e),Math.sin(n))),a(t,o(t,e)*(1-Math.cos(n)))),p=e=>Math.max(0,Math.min(1,e)),m=e=>(e=p(e),e*e*(3-2*e)),h=e=>(e=p(e),e*e*e*(e*(e*6-15)+10)),g=Math.PI/180,_=(e,t)=>[Math.cos(e*g)*Math.sin(t*g),Math.sin(e*g),Math.cos(e*g)*Math.cos(t*g)],v=(e,t)=>{let n=Math.cos(t),r=Math.sin(t);return[n*e[0]+r*e[2],e[1],n*e[2]-r*e[0]]},y=[[40.71,-74],[34.05,-118.24],[6.52,3.38],[25.2,55.27],[35.68,139.69],[1.35,103.82],[48.86,2.35],[22.32,114.17],[-1.29,36.82],[-33.87,151.21]],b=[51.51,-.13],x=[13.08,80.27],S=[-23.55,-46.63],C=y,w=[[b,x],[b,S],[b,C[0]],[b,C[2]],[b,C[3]],[b,C[4]],[x,C[5]],[S,C[0]],[C[0],C[1]],[C[6],C[3]],[C[7],C[4]],[C[2],C[8]]].map(([e,t])=>({from:e,to:t}));function T(){let e={"Europe/London":[51.5,-.13],"Europe/Dublin":[53.35,-6.26],"Europe/Paris":[48.86,2.35],"Europe/Berlin":[52.52,13.4],"Europe/Madrid":[40.42,-3.7],"America/New_York":[40.7,-74],"America/Chicago":[41.88,-87.63],"America/Los_Angeles":[34.05,-118.24],"America/Sao_Paulo":[-23.55,-46.63],"Asia/Kolkata":[19.08,72.88],"Asia/Calcutta":[19.08,72.88],"Asia/Dubai":[25.2,55.27],"Asia/Tokyo":[35.68,139.69],"Asia/Singapore":[1.35,103.82],"Australia/Sydney":[-33.87,151.2]},t=``;try{t=Intl.DateTimeFormat().resolvedOptions().timeZone||``}catch{}return e[t]??[30,-new Date().getTimezoneOffset()/4]}var ee=.025;function E(e,t){let n=ee,i=_(e,t),o=l(s([0,1,0],i)),c=s(i,o),u=e=>r(r(a(o,e[0]),a(i,e[1])),a(c,e[2])),d=(e,t,o)=>r(i,a(u([e,t,o]),n)),f=d(0,.045/n,-1);return{U:i,E:o,N:c,dirW:u,L2W:d,P0:f,B:l(f)}}var D=E(51.507,-.128),O=4.5,k=3.5,A=l(_(22,-18)),j=.2,M=.6,N=3,P=3.5,F=6.5,I=.4,L=e=>l(i([0,1,0],a(e,e[1]))),te=e=>v(A,e);function ne(e,t){let n=D,r=Math.max(0,Math.min(1,e)),p;if(r<=M){let e=r<=j?r/j*N:N+(r-j)/.39999999999999997*P,g=h(e/F),_=d(t,n.B,g),v=h((e-N)/P),y=c(n.P0)-1,b=Math.exp(Math.log(k)+(Math.log(y)-Math.log(k))*v),x=Math.acos(Math.max(-1,Math.min(1,o(t,n.B)))),S=s(t,n.B);S=c(S)<1e-6?l(s(t,[0,1,.3])):l(S);let C=L(t),w=f(C,S,x),T=l(i(n.N,a(n.B,o(n.B,n.N)))),ee=Math.atan2(o(s(w,T),n.B),o(w,T));p={pos:a(_,1+b),fw:l(u(a(_,-1),a(n.U,-1),v)),up:f(f(C,S,x*g),_,ee*g),kc:v,dive:m((e-2.5)/4),rise:0,fade:m((e-4.225)/(P*.65)),on:1-m((e-N+.3)/1.5)}}else{let e=(r-M)/.4,t=I*(1-(1-e)*(1-e)),i=.13+1.67*(1-h(t/.36))+1.67*h((t-.64)/.36),a=-1+1.9*m(t),o=.05*Math.sin(2*Math.PI*t),s=(-90+83*h(t/.4)-83*h((t-.6)/.4))*Math.PI/180,c=.07*Math.sin(2*Math.PI*t);p={pos:n.L2W(o,i,a),fw:n.dirW([Math.sin(c)*Math.cos(s),Math.sin(s),Math.cos(c)*Math.cos(s)]),up:n.dirW([-Math.sin(c)*Math.sin(s),Math.cos(s),-Math.cos(c)*Math.sin(s)]),kc:1,dive:1,rise:h(t/.36)*(1-h((t-.66)/.3)),fade:1,on:0}}return p.up=l(i(p.up,a(p.fw,o(p.up,p.fw)))),p}var R=`precision highp float;
const vec3 BLUE = vec3(0.0, 0.0, 0.96863);
const vec3 WHITE = vec3(1.0);
uniform vec3 uCam;
uniform vec3 uRt;
uniform vec3 uUp;
uniform vec3 uFw;
uniform vec2 uC;
uniform vec2 uRes;
uniform float uFocal;
uniform float uT;
uniform float uDpr;
varying vec4 vC;
vec4 clipAt(vec2 sp) { return vec4(sp.x / uRes.x * 2.0 - 1.0, 1.0 - sp.y / uRes.y * 2.0, 0.0, 1.0); }
vec2 screen(vec3 v, float ez) { return uC + vec2(dot(v, uRt), -dot(v, uUp)) * uFocal / ez; }
#define CULL { gl_Position = vec4(0.0, 0.0, 2.0, 1.0); gl_PointSize = 1.0; vC = vec4(0.0); return; }
`,re=`${R}
attribute vec3 aP;
attribute vec4 aS;
uniform vec3 uLight;
uniform vec3 uCityP;
uniform float uRef, uSize, uAlpha, uCityFade, uK0, uK1;
void main() {
  vec3 n = normalize(aP);
  float disp = 0.006 * sin(uT * 0.6) + 0.004 * sin(uT * 0.8 + aS.x * 6.2831853);
  vec3 w = aP * (1.0 + disp);
  vec3 v = w - uCam;
  float ez = dot(v, uFw);
  if (ez < 0.002) CULL
  gl_Position = clipAt(screen(v, ez));
  float facing = dot(n, normalize(uCam - w));
  float vis = mix(0.08, 1.0, smoothstep(-0.2, 0.25, facing));
  float lam = clamp(dot(n, uLight), 0.0, 1.0);
  vec3 col = mix(BLUE, WHITE, mix(uK0, uK1, lam * 0.9));
  float tw = 0.85 + 0.15 * sin(uT * (0.5 + aS.x * 1.2) + aS.y * 40.0);
  float keep = smoothstep(0.999, 0.99985, dot(n, uCityP));
  float a = uAlpha * vis * tw * mix(1.0, keep * 0.5, uCityFade);
  gl_PointSize = max(1.0, uSize * uDpr * clamp(uRef / ez, 0.5, 2.4) * (0.75 + 0.5 * aS.y));
  vC = vec4(col * a, a);
}`,ie=`${R}
attribute vec3 aG;
attribute vec4 aS;
attribute vec4 aK;
uniform vec3 uLight;
uniform vec3 uCityP;
uniform vec3 uE;
uniform vec3 uN;
uniform float uRef, uRefC, uFar, uSize, uSizeC, uAlpha, uAlphaC, uScale, uDive, uRise, uK0, uK1, uC0, uC1;
vec3 rotTo(vec3 a, vec3 b, float t) {
  float ang = acos(clamp(dot(a, b), -1.0, 1.0));
  vec3 k = cross(a, b);
  float kl = length(k);
  if (kl < 0.00001) { k = normalize(cross(a, vec3(0.0, 1.0, 0.3))); } else { k = k / kl; }
  float th = ang * t;
  return a * cos(th) + cross(k, a) * sin(th) + k * dot(k, a) * (1.0 - cos(th));
}
void main() {
  vec3 g = aG * (1.0 + 0.006 * sin(uT * 0.6));
  vec3 tW = uCityP + uScale * (uE * aK.x + uN * aK.z);
  float ed = smoothstep(aS.w * 0.45, aS.w * 0.45 + 0.55, uDive);
  float hb = fract(sin(dot(floor(aK.xz * 14.0), vec2(12.9898, 78.233))) * 43758.5453);
  float er = smoothstep(hb * 0.35, hb * 0.35 + 0.65, uRise);
  vec3 dir = rotTo(normalize(g), normalize(tW), ed);
  vec3 w = dir * mix(length(g), length(tW), ed) + uCityP * (uScale * aK.y * er);
  vec3 v = w - uCam;
  float ez = dot(v, uFw);
  if (ez < 0.0003) CULL
  gl_Position = clipAt(screen(v, ez));
  vec3 nn = normalize(aG);
  float facing = dot(nn, normalize(uCam - w));
  float vis = mix(0.08, 1.0, smoothstep(-0.2, 0.25, facing));
  float lam = clamp(dot(nn, uLight), 0.0, 1.0);
  float kG = mix(uK0, uK1, lam * 0.9);
  float aGl = uAlpha * vis;
  float sG = uSize * clamp(uRef / ez, 0.5, 2.4) * (0.75 + 0.5 * aS.y);
  float fNear = smoothstep(0.0005, 0.0025, ez);
  float fFar = 1.0 - smoothstep(uFar * 0.42, uFar, ez);
  float aCi = uAlphaC * (0.3 + 0.7 * aK.w) * fNear * fFar;
  float sC = uSizeC * clamp(uRefC / ez, 0.6, 2.2) * (0.8 + 0.4 * aS.y);
  float k = ed * ed * (3.0 - 2.0 * ed);
  vec3 col = mix(BLUE, WHITE, mix(kG, mix(uC0, uC1, aK.w), k));
  float a = mix(aGl, aCi, k);
  gl_PointSize = max(1.0, mix(sG, sC, k) * uDpr);
  vC = vec4(col * a, a);
}`,ae=`${R}
attribute vec3 aA;
attribute vec3 aB;
attribute vec4 aQ;
attribute vec2 aJ;
uniform float uOn, uRef;
void main() {
  float t = fract(aQ.x + uT * aQ.y) - aQ.z * 0.12;
  float on = step(0.0, t);
  t = clamp(t, 0.0, 1.0);
  float w = acos(clamp(dot(aA, aB), -1.0, 1.0));
  float sw = max(sin(w), 0.0001);
  vec3 pos = (sin((1.0 - t) * w) * aA + sin(t * w) * aB) / sw;
  vec3 side = normalize(cross(pos, aB - aA + vec3(0.0001)));
  pos = normalize(pos) * (1.0 + aQ.w * sin(3.1415927 * t)) + side * aJ.x * 0.004 * (1.0 + aQ.z * 2.0);
  vec3 v = pos - uCam;
  float ez = dot(v, uFw);
  if (ez < 0.01) CULL
  gl_Position = clipAt(screen(v, ez));
  vec3 dc = normalize(uCam - pos);
  float bq = dot(pos, dc);
  float cq = dot(pos, pos) - 1.0;
  float hid = (bq < 0.0 && bq * bq - cq > 0.0) ? 0.15 : 1.0;
  float ends = smoothstep(0.0, 0.03, t) * (1.0 - smoothstep(0.94, 1.0, t));
  float kk = 1.0 - aQ.z;
  float a = uOn * on * ends * hid * aJ.y * kk * kk * 0.8;
  gl_PointSize = max(1.0, uDpr * clamp(uRef / ez, 0.5, 2.0) * (0.8 + 1.6 * kk * kk));
  vC = vec4(mix(BLUE, WHITE, mix(0.5, 1.0, kk * kk)) * a, a);
}`,oe=`precision mediump float;
varying vec4 vC;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = dot(c, c);
  if (d > 0.25) discard;
  gl_FragColor = vC * (1.0 - d * 3.2);
}`,se=`precision highp float;
attribute vec2 aXY;
attribute vec2 aUV;
attribute vec4 aM;
uniform vec2 uRes;
varying vec2 vUV;
varying vec4 vM;
void main() {
  vUV = aUV;
  vM = aM;
  gl_Position = vec4(aXY.x / uRes.x * 2.0 - 1.0, 1.0 - aXY.y / uRes.y * 2.0, 0.0, 1.0);
}`,ce=`precision mediump float;
const vec3 BLUE = vec3(0.0, 0.0, 0.96863);
const vec3 WHITE = vec3(1.0);
varying vec2 vUV;
varying vec4 vM;
float disc(float r, float rad) { return 1.0 - smoothstep(rad - 0.6, rad + 0.6, r); }
void main() {
  float r = length(vUV) * vM.z;
  vec4 o;
  if (vM.x < 0.5) {
    // Hub: a white light that fades out through EX Blue, with a white core.
    float g = clamp(1.0 - r / vM.w, 0.0, 1.0);
    vec4 glow = vec4(mix(BLUE, WHITE, 0.5 + 0.5 * g), 1.0) * (0.85 * g);
    float core = disc(r, 2.2);
    o = vec4(WHITE, 1.0) * core + glow * (1.0 - core);
  } else {
    // You are here: a white ring with a dot in the centre.
    float ring = 1.0 - smoothstep(0.65, 1.45, abs(r - 7.0));
    float core = disc(r, 2.4);
    float a = max(ring, core);
    o = vec4(WHITE, 1.0) * a;
  }
  gl_FragColor = o * vM.y;
}`,z=n({createGlobe:()=>V}),le={high:8e4,mid:4e4,low:12e3},ue=.45;function de(){let e=navigator,t=e.hardwareConcurrency||4,n=e.deviceMemory;return t<=2||n!==void 0&&n<=2||t<=4&&n!==void 0&&n<=4?`low`:t>=8&&(n===void 0||n>=8)?`high`:`mid`}function fe(e){try{let t=String(e.getParameter(e.RENDERER)??``);if(/^webkit webgl$/i.test(t)){let n=e.getExtension(`WEBGL_debug_renderer_info`);n&&(t=String(e.getParameter(n.UNMASKED_RENDERER_WEBGL)??``))}return/swiftshader|llvmpipe|softpipe|software|basic render/i.test(t)}catch{return!1}}var pe=.03,me=.08,he=22,ge=262144,_e=50,ve=37297,B=[.23,.925,.5],ye=[0,.26,.2],be=[.855,1,.45],xe=[.425,1,.62],Se=[`pos`,`seed`,`gpos`,`gseed`,`city`,`fl`];function V(t,n){let r=!!n.still,a=n.hubs.map(e=>({id:e.id,v:_(e.lat,e.lng)})),u=n.hubs.map(e=>({lat:e.lat,lng:e.lng})),d=n.routes??w,f=n.showVisitor===!1?null:_(...T()),p=n.worker!==!1&&typeof Worker<`u`,h=`mid`,g=0,v=1.5,y=0,b=0,x=!r,S=0,C=0,E=1,k=1/60,A=0,j=0,M=0,N=0,P=0,F=!0,I=!0,L=!1,R=!1,z=!1,V=!1,H=null,U=null,Ce=0,we=0,W=null,G={setProgress(e){if(r||!Number.isFinite(e))return;let t=Math.max(0,Math.min(1,e));t!==b&&(b=t,F=!0,$())},play(){r||x||(x=!0,N=0,$())},pause(){x=!1},hubAt(e,t){let n=he,r=null;for(let i of G.hubScreenPositions()){if(!i.visible)continue;let a=Math.hypot(i.x-e,i.y-t);a<n&&(n=a,r=i.id)}return r},hubScreenPositions(){let e=t.clientWidth,n=t.clientHeight,r=He(e||1,n||1);return a.map(t=>{let i=Ue(r,t.v);if(!i)return{id:t.id,x:NaN,y:NaN,visible:!1};let a=i[2]>.05&&r.cam.on>.5&&i[0]>=0&&i[0]<=e&&i[1]>=0&&i[1]<=n;return{id:t.id,x:i[0],y:i[1],visible:a}})},destroy(){if(R)return;R=!0,Te();let e=q;if(e&&!e.isContextLost()){for(let t of[H?.b,U?.b,Y])if(t)for(let n of Object.values(t))e.deleteBuffer(n);for(let t of J)e.deleteProgram(t.p),t.s.forEach(t=>e.deleteShader(t))}H=U=null}};function Te(){cancelAnimationFrame(M),M=0,De?.disconnect(),Oe?.disconnect(),W?.terminate(),W=null,document.removeEventListener(`visibilitychange`,Ae),t.removeEventListener(`webglcontextlost`,ke)}let K=e=>{L||R||(L=!0,Te(),queueMicrotask(()=>n.onFail?.(e)))},Ee={alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:!1},q=null;try{q=t.getContext(`webgl2`,Ee)??t.getContext(`webgl`,Ee)}catch{q=null}let J=[],Y=null,De=null,Oe=null,ke=()=>K(`context-lost`),Ae=()=>{N=0,$()};if(!q||q.isContextLost())return K(`webgl-unavailable`),G;let X=q,je=fe(X);h=je?`low`:de(),g=Math.max(2e3,Math.round(n.particles??le[h])),v=n.maxPixelRatio??(h===`low`?1:1.5),y=je?_e:0;let Me=!!X.getExtension(`KHR_parallel_shader_compile`),Ne=(e,t,n)=>{let r=X.createProgram();if(!r)throw Error(`createProgram`);let i=[X.VERTEX_SHADER,X.FRAGMENT_SHADER].map((n,i)=>{let a=X.createShader(n);if(!a)throw Error(`createShader`);return X.shaderSource(a,i?t:e),X.compileShader(a),X.attachShader(r,a),a});n.forEach((e,t)=>X.bindAttribLocation(r,t,e)),X.linkProgram(r);let a={p:r,s:i,u:{},done:!1};return J.push(a),a},Z=[[re,oe,[`aP`,`aS`]],[ie,oe,[`aG`,`aS`,`aK`]],[ae,oe,[`aA`,`aB`,`aQ`,`aJ`]],[se,ce,[`aXY`,`aUV`,`aM`]]];try{Me?Z.forEach(e=>Ne(...e)):Ne(...Z[0]),Y={mark:Pe()}}catch(e){return K(`webgl-setup: `+(e instanceof Error?e.message:String(e))),G}let Q={get globe(){return J[0]},get city(){return J[1]},get routes(){return J[2]},get mark(){return J[3]}};function Pe(){let e=X.createBuffer();if(!e)throw Error(`createBuffer`);return e}function Fe(){if(V)return!0;for(let e of J){if(e.done)continue;if(Me&&!X.getProgramParameter(e.p,ve))return!1;if(!X.getProgramParameter(e.p,X.LINK_STATUS)){let t=e.s.map(e=>X.getShaderInfoLog(e)||``).join(` `)+(X.getProgramInfoLog(e.p)||``);throw Error(t.trim()||`link`)}let t=X.getProgramParameter(e.p,X.ACTIVE_UNIFORMS);for(let n=0;n<t;n++){let t=X.getActiveUniform(e.p,n);t&&(e.u[t.name.replace(/\[0\]$/,``)]=X.getUniformLocation(e.p,t.name))}if(e.done=!0,!Me)return J.length<Z.length&&Ne(...Z[J.length]),!1}return V=J.length===Z.length&&J.every(e=>e.done),V}t.addEventListener(`webglcontextlost`,ke);function Ie(t){Ce=t;let n=++we,r={id:n,N:t,hubs:u,routes:d};if(p)try{W||(W=new Worker(new URL(`/_astro/worker-BuOesAns.js`,``+import.meta.url),{type:`module`,name:`globe-build`}),W.onmessage=e=>Le(e.data),W.onerror=e=>{e.preventDefault(),W?.terminate(),W=null,p=!1,Ie(Ce)}),W.postMessage(r);return}catch{p=!1}e(()=>import(`./build.vZ4bufhR.js`).then(e=>e.buildSliced(t,u,d)),[]).then(e=>Le({id:n,points:e}),e=>Le({id:n,error:e instanceof Error?e.message:String(e)}))}function Le(e){if(R||L||e.id!==we)return;if(`error`in e){K(`build: `+e.error);return}if(U)for(let e of Object.values(U.b))X.deleteBuffer(e);let t=e.points,n={},r=[];try{for(let e of Se){n[e]=Pe();let i=t[e];X.bindBuffer(X.ARRAY_BUFFER,n[e]),X.bufferData(X.ARRAY_BUFFER,i.byteLength,X.STATIC_DRAW),r.push({b:n[e],data:new Uint8Array(i.buffer,i.byteOffset,i.byteLength),off:0})}}catch(e){K(`webgl-setup: `+(e instanceof Error?e.message:String(e)));return}U={G:t,b:n,queue:r},$()}function Re(){if(!U)return;let e=ge;for(;U.queue.length&&e>0;){let t=U.queue[0],n=Math.min(e,t.data.byteLength-t.off);X.bindBuffer(X.ARRAY_BUFFER,t.b),X.bufferSubData(X.ARRAY_BUFFER,t.off,t.data.subarray(t.off,t.off+n)),t.off+=n,e-=n,t.off>=t.data.byteLength&&U.queue.shift()}if(!U.queue.length){if(H)for(let e of Object.values(H.b))X.deleteBuffer(e);H={G:U.G,b:U.b},U=null,F=!0}}let ze=e=>Math.round(g*(e<700?ue:1)),Be=()=>!V||!!U;function $(){M||R||L||!I||document.hidden||(Be()||F||x)&&(M=requestAnimationFrame(Ve))}function Ve(e){if(M=0,R||L)return;if(!I||document.hidden){N=0;return}let r=t.clientWidth,i=t.clientHeight;r&&i&&ze(r)!==Ce&&Ie(ze(r));try{if(!V&&!Fe()){$();return}U&&Re()}catch(e){K(`webgl-setup: `+(e instanceof Error?e.message:String(e)));return}if(!H||!r||!i){Be()&&$();return}if(!F&&z&&y&&e-P<y){$();return}let a=N?Math.min(.05,Math.max(0,(e-N)/1e3)):0;N=e,x&&z&&a>0&&(S+=a,C+=a*pe*(1-m(b/me)),k+=(a-k)*.05,A+=a,A-j>3&&A>4&&k>.034&&E>.36&&(E=E>.7?.6:.35,j=A,k=.02)),F=!1;try{Ge(r,i,H.G,H.b)}catch(e){K(`render: `+(e instanceof Error?e.message:String(e)));return}P=e,z||(z=!0,n.onReady?.()),x||Be()?$():N=0}typeof IntersectionObserver<`u`&&(De=new IntersectionObserver(e=>{I=e[e.length-1].isIntersecting,I?$():N=0}),De.observe(t)),typeof ResizeObserver<`u`&&(Oe=new ResizeObserver(()=>{F=!0,$()}),Oe.observe(t)),document.addEventListener(`visibilitychange`,Ae),t.clientWidth&&Ie(ze(t.clientWidth)),$();function He(e,t){let n=ne(r?0:b,te(C)),i=s(n.fw,n.up),a=e>900,o=a?e*.385:e*.5,c=t*.5,l=Math.min(a?e*.235:e*.35,t*.32,320),u=l*Math.sqrt(O*O-1);return{cam:n,rt:i,f:u+(Math.max(e,t*1.25)*.6-u)*n.kc,cx:o+(e*.5-o)*n.kc,cy:c+(t*.5-c)*n.kc,Rpx:l,W:e,H:t}}function Ue(e,t){let{cam:n}=e,r=i(t,n.pos),a=o(r,n.fw);return a<1e-4?null:[e.cx+o(r,e.rt)*e.f/a,e.cy-o(r,n.up)*e.f/a,o(t,l(i(n.pos,t)))]}let We=new Float32Array((a.length+1)*6*8);function Ge(e,n,r,i){let o=Math.min(window.devicePixelRatio||1,v),s=Math.max(1,Math.round(e*o)),u=Math.max(1,Math.round(n*o));t.width!==s&&(t.width=s),t.height!==u&&(t.height=u);let d=He(e,n),{cam:p,rt:m}=d,h=s/e,g=Math.max(.6,Math.min(1.6,Math.sqrt(8e4/62500/(r.N/(d.Rpx*d.Rpx))))),_=l([-.45*m[0]+.55*p.up[0]-.7*p.fw[0],-.45*m[1]+.55*p.up[1]-.7*p.fw[1],-.45*m[2]+.55*p.up[2]-.7*p.fw[2]]);X.viewport(0,0,s,u),X.clearColor(0,0,0,0),X.clear(X.COLOR_BUFFER_BIT),X.disable(X.DEPTH_TEST),X.enable(X.BLEND),X.blendFunc(X.ONE,X.ONE);let y=t=>{let r=t.u;X.uniform3f(r.uCam,p.pos[0],p.pos[1],p.pos[2]),X.uniform3f(r.uRt,m[0],m[1],m[2]),X.uniform3f(r.uUp,p.up[0],p.up[1],p.up[2]),X.uniform3f(r.uFw,p.fw[0],p.fw[1],p.fw[2]),X.uniform2f(r.uC,d.cx,d.cy),X.uniform2f(r.uRes,e,n),X.uniform1f(r.uFocal,d.f),X.uniform1f(r.uT,S),X.uniform1f(r.uDpr,h)},b=(e,t,n,r,i,a=0,o=0)=>{X.bindBuffer(X.ARRAY_BUFFER,t),X.enableVertexAttribArray(e),X.vertexAttribPointer(e,n,r,i,a,o)},x=(...e)=>e.forEach(e=>X.disableVertexAttribArray(e)),C=Q.globe,w=C.u;X.useProgram(C.p),y(C),X.uniform3f(w.uLight,_[0],_[1],_[2]),X.uniform3f(w.uCityP,D.U[0],D.U[1],D.U[2]),X.uniform1f(w.uRef,3.5),X.uniform1f(w.uCityFade,p.fade),b(0,i.pos,3,X.FLOAT,!1),b(1,i.seed,4,X.UNSIGNED_BYTE,!0),x(2,3);let T=(e,t,n,r,i)=>{X.uniform1f(w.uK0,n[0]),X.uniform1f(w.uK1,n[1]),X.uniform1f(w.uAlpha,n[2]*i),X.uniform1f(w.uSize,r),t>0&&X.drawArrays(X.POINTS,e,t)};T(r.NL+r.Nc,Math.round(r.No*E),ye,1.3,g),T(0,Math.round(r.NL*E),B,1.7,g),T(r.NL,r.Nc,be,2,1);let O=Q.city,k=O.u,A=c(p.pos)-1;if(X.useProgram(O.p),y(O),X.uniform3f(k.uLight,_[0],_[1],_[2]),X.uniform3f(k.uCityP,D.U[0],D.U[1],D.U[2]),X.uniform3f(k.uE,D.E[0],D.E[1],D.E[2]),X.uniform3f(k.uN,D.N[0],D.N[1],D.N[2]),X.uniform1f(k.uRef,3.5),X.uniform1f(k.uRefC,.015),X.uniform1f(k.uFar,Math.max(.095,A*2.2)),X.uniform1f(k.uSize,1.7),X.uniform1f(k.uSizeC,1.6),X.uniform1f(k.uAlpha,B[2]*g),X.uniform1f(k.uAlphaC,xe[2]),X.uniform1f(k.uScale,ee),X.uniform1f(k.uDive,p.dive),X.uniform1f(k.uRise,p.rise),X.uniform1f(k.uK0,B[0]),X.uniform1f(k.uK1,B[1]),X.uniform1f(k.uC0,xe[0]),X.uniform1f(k.uC1,xe[1]),b(0,i.gpos,3,X.FLOAT,!1),b(1,i.gseed,4,X.UNSIGNED_BYTE,!0),b(2,i.city,4,X.FLOAT,!1),X.drawArrays(X.POINTS,0,Math.round(r.K*E)),x(2),p.on>.01){let t=Q.routes;X.useProgram(t.p),y(t),X.uniform1f(t.u.uOn,p.on),X.uniform1f(t.u.uRef,3.5),b(0,i.fl,3,X.FLOAT,!1,48,0),b(1,i.fl,3,X.FLOAT,!1,48,12),b(2,i.fl,4,X.FLOAT,!1,48,24),b(3,i.fl,2,X.FLOAT,!1,48,40),X.drawArrays(X.POINTS,0,r.nf),x(2,3);let o=0,s=(e,t,n,r,i,a)=>{for(let[s,c]of[[-1,-1],[1,-1],[1,1],[-1,-1],[1,1],[-1,1]])We.set([e+s*i,t+c*i,s,c,n,r,i,a],o*8),o++};for(let e of a){let t=Ue(d,e.v);t&&t[2]>.05&&s(t[0],t[1],0,Math.min(1,t[2]*p.on),10,10)}if(f){let e=Ue(d,f);e&&e[2]>.05&&s(e[0],e[1],1,Math.min(1,e[2]*p.on),10,0)}if(o&&Y){let t=Q.mark;X.useProgram(t.p),X.uniform2f(t.u.uRes,e,n),X.blendFunc(X.ONE,X.ONE_MINUS_SRC_ALPHA),X.bindBuffer(X.ARRAY_BUFFER,Y.mark),X.bufferData(X.ARRAY_BUFFER,We.subarray(0,o*8),X.DYNAMIC_DRAW),X.enableVertexAttribArray(0),X.vertexAttribPointer(0,2,X.FLOAT,!1,32,0),X.enableVertexAttribArray(1),X.vertexAttribPointer(1,2,X.FLOAT,!1,32,8),X.enableVertexAttribArray(2),X.vertexAttribPointer(2,4,X.FLOAT,!1,32,16),X.drawArrays(X.TRIANGLES,0,o),x(2)}}}return G}export{_ as a,o as i,z as n,y as r,V as t};
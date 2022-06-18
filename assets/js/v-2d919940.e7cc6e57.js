"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[66871],{23695:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-2d919940",path:"/devices/TS130F_dual.html",title:"Lonsonho TS130F_dual control via MQTT",lang:"en-US",frontmatter:{title:"Lonsonho TS130F_dual control via MQTT",description:"Integrate your Lonsonho TS130F_dual via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2024-01-01T12:47:02.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Calibration",slug:"calibration",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Moving (enum)",slug:"moving-enum",children:[]},{level:3,title:"Calibration_time (numeric)",slug:"calibration-time-numeric",children:[]},{level:3,title:"Cover (left endpoint)",slug:"cover-left-endpoint",children:[]},{level:3,title:"Calibration (binary, left endpoint)",slug:"calibration-binary-left-endpoint",children:[]},{level:3,title:"Motor_reversal (binary, left endpoint)",slug:"motor-reversal-binary-left-endpoint",children:[]},{level:3,title:"Cover (right endpoint)",slug:"cover-right-endpoint",children:[]},{level:3,title:"Calibration (binary, right endpoint)",slug:"calibration-binary-right-endpoint",children:[]},{level:3,title:"Motor_reversal (binary, right endpoint)",slug:"motor-reversal-binary-right-endpoint",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/TS130F_dual.md",git:{updatedTime:1655574056e3}}},53420:(e,t,o)=>{o.r(t),o.d(t,{default:()=>l});var i=o(66252);const a=(0,i.uE)('<h1 id="lonsonho-ts130f-dual" tabindex="-1"><a class="header-anchor" href="#lonsonho-ts130f-dual" aria-hidden="true">#</a> Lonsonho TS130F_dual</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>TS130F_dual</td></tr><tr><td>Vendor</td><td>Lonsonho</td></tr><tr><td>Description</td><td>Dual curtain/blind module</td></tr><tr><td>Exposes</td><td>moving, calibration_time, cover (state, position), calibration, motor_reversal, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/TS130F_dual.jpg" alt="Lonsonho TS130F_dual"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press on pair button for 10 seconds to enter pairing mode</p><h3 id="calibration" tabindex="-1"><a class="header-anchor" href="#calibration" aria-hidden="true">#</a> Calibration</h3><ul><li>Press the open button on the switch, wait until the curtains are completely open.</li><li>Press the same button on the switch again to &#39;stop&#39;.</li><li>Put the device into calibration mode, see <a href="#calibration-binary">below</a>.</li><li>Press the close button on the switch, wait until curtains are fully closed.</li><li>Press the same button on the switch.</li><li>Disable the calibration mode, see <a href="#calibration-binary">below</a>.</li></ul><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',8),d=(0,i.Uk)("How to use device type specific configuration"),r=(0,i.uE)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="moving-enum" tabindex="-1"><a class="header-anchor" href="#moving-enum" aria-hidden="true">#</a> Moving (enum)</h3><p>Value can be found in the published state on the <code>moving</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>UP</code>, <code>STOP</code>, <code>DOWN</code>.</p><h3 id="calibration-time-numeric" tabindex="-1"><a class="header-anchor" href="#calibration-time-numeric" aria-hidden="true">#</a> Calibration_time (numeric)</h3><p>Calibration time. Value can be found in the published state on the <code>calibration_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>S</code>.</p><h3 id="cover-left-endpoint" tabindex="-1"><a class="header-anchor" href="#cover-left-endpoint" aria-hidden="true">#</a> Cover (left endpoint)</h3><p>The current state of this cover is in the published state under the <code>state_left</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_left&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state_left&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state_left&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position_left&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="calibration-binary-left-endpoint" tabindex="-1"><a class="header-anchor" href="#calibration-binary-left-endpoint" aria-hidden="true">#</a> Calibration (binary, left endpoint)</h3><p>Value can be found in the published state on the <code>calibration_left</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;calibration_left&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_left&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> calibration is ON, if <code>OFF</code> OFF.</p><h3 id="motor-reversal-binary-left-endpoint" tabindex="-1"><a class="header-anchor" href="#motor-reversal-binary-left-endpoint" aria-hidden="true">#</a> Motor_reversal (binary, left endpoint)</h3><p>Value can be found in the published state on the <code>motor_reversal_left</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motor_reversal_left&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_reversal_left&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> motor_reversal is ON, if <code>OFF</code> OFF.</p><h3 id="cover-right-endpoint" tabindex="-1"><a class="header-anchor" href="#cover-right-endpoint" aria-hidden="true">#</a> Cover (right endpoint)</h3><p>The current state of this cover is in the published state under the <code>state_right</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_right&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state_right&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state_right&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position_right&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="calibration-binary-right-endpoint" tabindex="-1"><a class="header-anchor" href="#calibration-binary-right-endpoint" aria-hidden="true">#</a> Calibration (binary, right endpoint)</h3><p>Value can be found in the published state on the <code>calibration_right</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;calibration_right&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_right&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> calibration is ON, if <code>OFF</code> OFF.</p><h3 id="motor-reversal-binary-right-endpoint" tabindex="-1"><a class="header-anchor" href="#motor-reversal-binary-right-endpoint" aria-hidden="true">#</a> Motor_reversal (binary, right endpoint)</h3><p>Value can be found in the published state on the <code>motor_reversal_right</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motor_reversal_right&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_reversal_right&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> motor_reversal is ON, if <code>OFF</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',20),n={},l=(0,o(83744).Z)(n,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[a,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[d])),_:1})])]),r],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);
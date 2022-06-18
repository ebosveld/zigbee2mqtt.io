"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[7938],{3711:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i={key:"v-5bdbe48e",path:"/devices/8850100.html",title:"Waxman 8850100 control via MQTT",lang:"en-US",frontmatter:{title:"Waxman 8850100 control via MQTT",description:"Integrate your Waxman 8850100 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-03-01T08:48:44.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Other Models",slug:"other-models",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/8850100.md",git:{updatedTime:1655574056e3}}},36079:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});const i=(0,a(66252).uE)('<h1 id="waxman-8850100" tabindex="-1"><a class="header-anchor" href="#waxman-8850100" aria-hidden="true">#</a> Waxman 8850100</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>8850100</td></tr><tr><td>Vendor</td><td>Waxman</td></tr><tr><td>Description</td><td>leakSMART automatic water shut-off valve 2.0</td></tr><tr><td>Exposes</td><td>battery, switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/8850100.jpg" alt="Waxman 8850100"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press the center button five times, quickly, to reset the device. The blue light should blink every two seconds as a confirmation, then attempt to join a network</p><h3 id="other-models" tabindex="-1"><a class="header-anchor" href="#other-models" aria-hidden="true">#</a> Other Models</h3><p>This integration should work with all manufacturer model numbers for the &quot;leakSMART Automatic Water Shut-off Valve 2.0&quot; but has only been tested with the 8850100:</p><ul><li>8850000 - 3/4&quot; Valve</li><li>8850100 - 1&quot; Valve</li><li>8850200 - 1-1/4&quot; Valve</li><li>8850300 - 1-1/2&quot; Valve</li><li>8850310 - 2&quot; Valve</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',15),o={},d=(0,a(83744).Z)(o,[["render",function(e,t){return i}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,i]of t)e[a]=i;return e}}}]);
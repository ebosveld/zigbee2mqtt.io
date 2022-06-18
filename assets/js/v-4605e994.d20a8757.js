"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[4121],{52373:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-4605e994",path:"/devices/ZBHT-1.html",title:"Smartenit ZBHT-1 control via MQTT",lang:"en-US",frontmatter:{title:"Smartenit ZBHT-1 control via MQTT",description:"Integrate your Smartenit ZBHT-1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-05-11T17:09:57.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Similar Devices",slug:"similar-devices",children:[]},{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Status of Functions",slug:"status-of-functions",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Humidity (numeric)",slug:"humidity-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/ZBHT-1.md",git:{updatedTime:1655574056e3}}},14645:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var a=i(66252);const r=(0,a.uE)('<h1 id="smartenit-zbht-1" tabindex="-1"><a class="header-anchor" href="#smartenit-zbht-1" aria-hidden="true">#</a> Smartenit ZBHT-1</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>ZBHT-1</td></tr><tr><td>Vendor</td><td>Smartenit</td></tr><tr><td>Description</td><td>Temperature &amp; humidity sensor</td></tr><tr><td>Exposes</td><td>battery, temperature, humidity, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/ZBHT-1.jpg" alt="Smartenit ZBHT-1"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="similar-devices" tabindex="-1"><a class="header-anchor" href="#similar-devices" aria-hidden="true">#</a> Similar Devices</h3><p>This device is older and seems to be similar to the netvox Z711 (and others).</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><h4 id="resetting-the-device-restore-to-factory-defaults" tabindex="-1"><a class="header-anchor" href="#resetting-the-device-restore-to-factory-defaults" aria-hidden="true">#</a> Resetting the Device/Restore to Factory Defaults</h4><ol><li>Remove the battery to power off the device.</li><li>Press and hold the only button.</li><li>Re-install the batteries to power on the device</li><li>Release the button.</li></ol><ul><li>The LED will blink quickly, and the reset/restore is complete</li></ul><h4 id="joining-the-network" tabindex="-1"><a class="header-anchor" href="#joining-the-network" aria-hidden="true">#</a> Joining the Network</h4><ol><li>Remove battery from device</li><li>Enable permit-join on Zigbee2MQTT</li><li>Re-install battery in the device</li></ol><ul><li>The LED will flash 5 times to indicate success (no flashing means not successful)</li></ul><ol start="4"><li>After successfully joining, press and hold the only button for 3 seconds to broadcast the binding request.</li><li>The LED will flash once.</li><li>The LED flashes 5 times after the binding is completed; otherwise, it flashes 10 times.</li></ol><h4 id="waking-the-device" tabindex="-1"><a class="header-anchor" href="#waking-the-device" aria-hidden="true">#</a> Waking the Device</h4><p>If the device is asleep (which is most of the time) and you need it to be awake for some reason, tap the only button on the device. The LED will flash 5 times and the device will be awake for a brief period.</p><h3 id="status-of-functions" tabindex="-1"><a class="header-anchor" href="#status-of-functions" aria-hidden="true">#</a> Status of Functions</h3><ol><li>Temperature monitoring - Works</li><li>Humidity monitoring - Works</li><li>Battery monitoring - untested.</li></ol><ul><li>In theory the device LED will flash ONCE if the voltage falls below 2.4V</li><li>In theory the device will send a low-power report to the ZigBee network if the voltage falls below 2.4V - no other battery reporting.</li></ul><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',19),o=(0,a.Uk)("How to use device type specific configuration"),n=(0,a.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),l={},d=(0,i(83744).Z)(l,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[o])),_:1})])]),n],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);
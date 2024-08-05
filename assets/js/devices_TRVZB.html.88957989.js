"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[97850],{67535:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>m,data:()=>v});var i=o(57305);const a=(0,i.Lk)("h1",{id:"sonoff-trvzb",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#sonoff-trvzb"},[(0,i.Lk)("span",null,"SONOFF TRVZB")])],-1),l=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1),d=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"TRVZB")],-1),n=(0,i.Lk)("td",null,"Vendor",-1),c=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Zigbee thermostatic radiator valve")],-1),s=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"climate (occupied_heating_setpoint, local_temperature, local_temperature_calibration, system_mode, running_state), battery, child_lock, open_window, frost_protection_temperature, idle_steps, closing_steps, valve_opening_limit_voltage, valve_closing_limit_voltage, valve_motor_running_voltage, valve_opening_degree, valve_closing_degree, schedule, linkquality")],-1),u=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TRVZB.png",alt:"SONOFF TRVZB"})])],-1),r=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>To pair the device you first need to have it powered, attached to the valve and displaying the temperature.</p><p>If the device is showing <code>FS</code> or <code>RD</code> press the button on the top of the unit and it should now show <code>,,7</code></p><p>Once this stops flashing hold the top button for about 5 seconds at which point the unit should now show the temperature.</p><p>Keep turning the dial counter-clockwise unil the display shows <code>OF</code> and finally hold down the top button for 3 seconds.</p><p>You should now see a flashing signal icon and it will try and pair.</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',8),p=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1),h=(0,i.Fv)('<ul><li><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>local_temperature_calibration</code>, <code>system_mode</code>, <code>running_state</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>4</code> and <code>35</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of the thermostat. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.The minimal value is <code>-7</code> and the maximum value is <code>7</code> with a step size of <code>0.2</code>.</li></ul><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary"><span>Child lock (binary)</span></a></h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>child_lock</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;child_lock&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>LOCK</code> child lock is ON, if <code>UNLOCK</code> OFF.</p><h3 id="open-window-binary" tabindex="-1"><a class="header-anchor" href="#open-window-binary"><span>Open window (binary)</span></a></h3><p>Automatically turns off the radiator when local temperature drops by more than 1.5°C in 4.5 minutes.. Value can be found in the published state on the <code>open_window</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;open_window&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;open_window&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> open window is ON, if <code>OFF</code> OFF.</p><h3 id="frost-protection-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#frost-protection-temperature-numeric"><span>Frost protection temperature (numeric)</span></a></h3><p>Minimum temperature at which to automatically turn on the radiator, if system mode is off, to prevent pipes freezing.. Value can be found in the published state on the <code>frost_protection_temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;frost_protection_temperature&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;frost_protection_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>4</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="idle-steps-numeric" tabindex="-1"><a class="header-anchor" href="#idle-steps-numeric"><span>Idle steps (numeric)</span></a></h3><p>Number of steps used for calibration (no-load steps). Value can be found in the published state on the <code>idle_steps</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;idle_steps&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value.</p><h3 id="closing-steps-numeric" tabindex="-1"><a class="header-anchor" href="#closing-steps-numeric"><span>Closing steps (numeric)</span></a></h3><p>Number of steps it takes to close the valve. Value can be found in the published state on the <code>closing_steps</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;closing_steps&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value.</p><h3 id="valve-opening-limit-voltage-numeric" tabindex="-1"><a class="header-anchor" href="#valve-opening-limit-voltage-numeric"><span>Valve opening limit voltage (numeric)</span></a></h3><p>Valve opening limit voltage. Value can be found in the published state on the <code>valve_opening_limit_voltage</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;valve_opening_limit_voltage&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="valve-closing-limit-voltage-numeric" tabindex="-1"><a class="header-anchor" href="#valve-closing-limit-voltage-numeric"><span>Valve closing limit voltage (numeric)</span></a></h3><p>Valve closing limit voltage. Value can be found in the published state on the <code>valve_closing_limit_voltage</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;valve_closing_limit_voltage&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="valve-motor-running-voltage-numeric" tabindex="-1"><a class="header-anchor" href="#valve-motor-running-voltage-numeric"><span>Valve motor running voltage (numeric)</span></a></h3><p>Valve motor running voltage. Value can be found in the published state on the <code>valve_motor_running_voltage</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;valve_motor_running_voltage&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="valve-opening-degree-numeric" tabindex="-1"><a class="header-anchor" href="#valve-opening-degree-numeric"><span>Valve opening degree (numeric)</span></a></h3><p>Valve open position (percentage) control. If the opening degree is set to 100%, the valve is fully open when it is opened. If the opening degree is set to 0%, the valve is fully closed when it is opened, and the default value is 100%. Note: only version v1.1.4 or higher is supported.. Value can be found in the published state on the <code>valve_opening_degree</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;valve_opening_degree&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;valve_opening_degree&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="valve-closing-degree-numeric" tabindex="-1"><a class="header-anchor" href="#valve-closing-degree-numeric"><span>Valve closing degree (numeric)</span></a></h3><p>Valve closed position (percentage) control. If the closing degree is set to 100%, the valve is fully closed when it is closed. If the closing degree is set to 0%, the valve is fully opened when it is closed, and the default value is 100%. Note: Only version v1.1.4 or higher is supported.. Value can be found in the published state on the <code>valve_closing_degree</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;valve_closing_degree&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;valve_closing_degree&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="schedule-composite" tabindex="-1"><a class="header-anchor" href="#schedule-composite"><span>Schedule (composite)</span></a></h3><p>The preset heating schedule to use when the system mode is set to &quot;auto&quot; (indicated with ⏲ on the TRV). Up to 6 transitions can be defined per day, where a transition is expressed in the format &#39;HH:mm/temperature&#39;, each separated by a space. The first transition for each day must start at 00:00 and the valid temperature range is 4-35°C (in 0.5°C steps). The temperature will be set at the time of the first transition until the time of the next transition, e.g. &#39;04:00/20 10:00/25&#39; will result in the temperature being set to 20°C at 04:00 until 10:00, when it will change to 25°C.. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;weekly_schedule&quot;: {&quot;sunday&quot;: VALUE, &quot;monday&quot;: VALUE, &quot;tuesday&quot;: VALUE, &quot;wednesday&quot;: VALUE, &quot;thursday&quot;: VALUE, &quot;friday&quot;: VALUE, &quot;saturday&quot;: VALUE}}</code></p><ul><li><code>sunday</code> (text)</li><li><code>monday</code> (text)</li><li><code>tuesday</code> (text)</li><li><code>wednesday</code> (text)</li><li><code>thursday</code> (text)</li><li><code>friday</code> (text)</li><li><code>saturday</code> (text)</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',32),g={},m=(0,o(36920).A)(g,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[a,(0,i.Lk)("table",null,[l,(0,i.Lk)("tbody",null,[d,(0,i.Lk)("tr",null,[n,(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=SONOFF"},{default:(0,i.k6)((()=>[(0,i.eW)("SONOFF")])),_:1})])]),c,s,u])]),r,(0,i.Lk)("p",null,[(0,i.eW)("This device supports OTA updates, for more information see "),(0,i.bF)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,i.k6)((()=>[(0,i.eW)("OTA updates")])),_:1}),(0,i.eW)(".")]),p,(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>[(0,i.eW)("How to use device type specific configuration")])),_:1})])]),h])}]]),v=JSON.parse('{"path":"/devices/TRVZB.html","title":"SONOFF TRVZB control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"SONOFF TRVZB control via MQTT","description":"Integrate your SONOFF TRVZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-09-28T10:54:36.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Child lock (binary)","slug":"child-lock-binary","link":"#child-lock-binary","children":[]},{"level":3,"title":"Open window (binary)","slug":"open-window-binary","link":"#open-window-binary","children":[]},{"level":3,"title":"Frost protection temperature (numeric)","slug":"frost-protection-temperature-numeric","link":"#frost-protection-temperature-numeric","children":[]},{"level":3,"title":"Idle steps (numeric)","slug":"idle-steps-numeric","link":"#idle-steps-numeric","children":[]},{"level":3,"title":"Closing steps (numeric)","slug":"closing-steps-numeric","link":"#closing-steps-numeric","children":[]},{"level":3,"title":"Valve opening limit voltage (numeric)","slug":"valve-opening-limit-voltage-numeric","link":"#valve-opening-limit-voltage-numeric","children":[]},{"level":3,"title":"Valve closing limit voltage (numeric)","slug":"valve-closing-limit-voltage-numeric","link":"#valve-closing-limit-voltage-numeric","children":[]},{"level":3,"title":"Valve motor running voltage (numeric)","slug":"valve-motor-running-voltage-numeric","link":"#valve-motor-running-voltage-numeric","children":[]},{"level":3,"title":"Valve opening degree (numeric)","slug":"valve-opening-degree-numeric","link":"#valve-opening-degree-numeric","children":[]},{"level":3,"title":"Valve closing degree (numeric)","slug":"valve-closing-degree-numeric","link":"#valve-closing-degree-numeric","children":[]},{"level":3,"title":"Schedule (composite)","slug":"schedule-composite","link":"#schedule-composite","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1722889759000},"filePathRelative":"devices/TRVZB.md"}')}}]);
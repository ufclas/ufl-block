(()=>{"use strict";var e,t={3849:()=>{const e=window.wp.blocks,t=window.React,l=window.wp.i18n,n=window.wp.blockEditor,o=window.wp.components,r=JSON.parse('{"UU":"create-block/event-shell-buttons"}');(0,e.registerBlockType)(r.UU,{edit:e=>{const{attributes:{buttonLabel:r,buttonLink:a,hasLinkNofollow:s,openNewTab:i},setAttributes:u}=e,c=(0,n.useBlockProps)();return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(n.InspectorControls,null,(0,t.createElement)(o.PanelBody,{title:(0,l.__)("Event Shell Button","event-shell-slide-block"),initialOpen:!0},(0,t.createElement)(o.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(o.TextControl,{label:(0,l.__)("Button Text","event-shell-slide"),value:r,onChange:e=>{u({buttonLabel:e})},help:(0,l.__)("","event-shell-slide")}))),(0,t.createElement)(o.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(o.TextControl,{label:(0,l.__)("Destination","event-shell-slide"),value:a,onChange:e=>{u({buttonLink:e})},help:(0,l.__)("","event-shell-slide")}))),(0,t.createElement)(o.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(o.ToggleControl,{label:"Open in New Tab?",help:i?"Has rel nofollow.":"No rel nofollow.",checked:i,onChange:()=>{u({openNewTab:!i})}}))))),(0,t.createElement)("div",{...c},(0,t.createElement)("span",null,(0,t.createElement)("a",{href:a,className:"button animated-border-button button-border-orange button-text-dark",rel:s?"nofollow":"noopener noreferrer",target:i?"_blank":"_self",onClick:e=>{e.preventDefault()}},r))))},save:e=>{const{attributes:{buttonLabel:l,buttonLink:o,hasLinkNofollow:r,openNewTab:a}}=e,s=n.useBlockProps.save();return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{...s},(0,t.createElement)("span",null,o&&(0,t.createElement)("a",{href:o,className:"button animated-border-button button-border-orange button-text-dark",rel:r?"nofollow":"noopener noreferrer",target:a?"_blank":"_self"},l))))}})}},l={};function n(e){var o=l[e];if(void 0!==o)return o.exports;var r=l[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,l,o,r)=>{if(!l){var a=1/0;for(c=0;c<e.length;c++){for(var[l,o,r]=e[c],s=!0,i=0;i<l.length;i++)(!1&r||a>=r)&&Object.keys(n.O).every((e=>n.O[e](l[i])))?l.splice(i--,1):(s=!1,r<a&&(a=r));if(s){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[l,o,r]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={1237:0,6249:0};n.O.j=t=>0===e[t];var t=(t,l)=>{var o,r,[a,s,i]=l,u=0;if(a.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(i)var c=i(n)}for(t&&t(l);u<a.length;u++)r=a[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},l=globalThis.webpackChunkufl_block=globalThis.webpackChunkufl_block||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var o=n.O(void 0,[6249],(()=>n(3849)));o=n.O(o)})();
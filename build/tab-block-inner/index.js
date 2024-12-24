(()=>{"use strict";var e,t={9409:()=>{const e=window.wp.blocks,t=window.React,l=window.wp.i18n,a=window.wp.blockEditor,n=window.wp.components,o=window.wp.element,r=JSON.parse('{"UU":"create-block/tab-block-inner"}');(0,e.registerBlockType)(r.UU,{edit:e=>{const{attributes:{title:r,text:c,buttonLabel:i,buttonLink:s,hasLinkNofollow:b,openNewTab:d,blockID:m},clientId:p,setAttributes:u}=e,E=(0,a.useBlockProps)(),[h,k]=((0,a.useInnerBlocksProps)(),(0,o.useState)(""));(0,o.useEffect)((()=>{k(p),u({blockID:p})}),[p,u]);const w=e=>{u({title:e})};return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(a.InspectorControls,null,(0,t.createElement)(n.PanelBody,{title:(0,l.__)("Tab Item","tab-block-inner"),initialOpen:!0},(0,t.createElement)(n.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(n.TextControl,{label:(0,l.__)("Title","tab-block-inner"),value:r,onChange:w,help:(0,l.__)("","tab-block-inner")}))),(0,t.createElement)(n.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(n.TextControl,{label:(0,l.__)("Button Text","tab-block-inner"),value:i,onChange:e=>{u({buttonLabel:e})},help:(0,l.__)("Optional","tab-block-inner")}))),(0,t.createElement)(n.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(n.TextControl,{label:(0,l.__)("Destination","tab-block-inner"),value:s,onChange:e=>{u({buttonLink:e})},help:(0,l.__)("Optional","tab-block-inner")}))),(0,t.createElement)(n.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(n.ToggleControl,{label:"Open in New Tab?",help:d?"Has rel nofollow.":"No rel nofollow.",checked:d,onChange:()=>{u({openNewTab:!d})}}))))),(0,t.createElement)("div",{...E},(0,t.createElement)("div",{className:"accordion-item"},(0,t.createElement)("button",{className:"tab-link collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapse"+m,"aria-expanded":"true","aria-controls":"collapse"+m,tabIndex:"0",id:"heading"+m},(0,t.createElement)(a.RichText,{placeholder:(0,l.__)("Write title…","gutenberg-examples"),value:r,onChange:w})),(0,t.createElement)("div",{id:"collapse"+m,className:"accordion-collapse collapse","aria-labelledby":"heading"+m},(0,t.createElement)("div",{className:"accordion-body"},(0,t.createElement)(a.RichText,{placeholder:(0,l.__)("Write title…","gutenberg-examples"),value:r,onChange:w,tagName:"h3"}),(0,t.createElement)("div",{className:"tab-body-wrap"},(0,t.createElement)(a.InnerBlocks,{allowedBlocks:["core/paragraph","core/list","core/freeform"],template:[["core/freeform",{placeholder:"Enter Intro content..."}]]})),(0,t.createElement)("div",{className:"tab-btn-wrap"},(0,t.createElement)("a",{href:s,className:"animated-underline-button",rel:b?"nofollow":"noopener noreferrer",target:d?"_blank":"_self",onClick:e=>{e.preventDefault()}},i)))))))},save:e=>{const{attributes:{title:l,text:n,blockID:o,buttonLabel:r,buttonLink:c,hasLinkNofollow:i,openNewTab:s}}=e,b=a.useBlockProps.save();return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{...b},(0,t.createElement)("div",{className:"accordion-item"},(0,t.createElement)("button",{className:"tab-link collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapse"+o,"aria-expanded":"true","aria-controls":"collapse"+o,tabIndex:"0",id:"heading"+o},l),(0,t.createElement)("div",{id:"collapse"+o,className:"accordion-collapse collapse","aria-labelledby":"heading"+o},(0,t.createElement)("div",{className:"accordion-body"},(0,t.createElement)(a.RichText.Content,{tagName:"h3",value:l}),(0,t.createElement)("div",{className:"tab-body-wrap"},(0,t.createElement)(a.InnerBlocks.Content,null)),(0,t.createElement)("div",{className:"tab-btn-wrap"},c&&(0,t.createElement)("a",{href:c,className:"animated-underline-button",rel:i?"nofollow":"noopener noreferrer",target:s?"_blank":"_self"},r)))))))}})}},l={};function a(e){var n=l[e];if(void 0!==n)return n.exports;var o=l[e]={exports:{}};return t[e](o,o.exports,a),o.exports}a.m=t,e=[],a.O=(t,l,n,o)=>{if(!l){var r=1/0;for(b=0;b<e.length;b++){for(var[l,n,o]=e[b],c=!0,i=0;i<l.length;i++)(!1&o||r>=o)&&Object.keys(a.O).every((e=>a.O[e](l[i])))?l.splice(i--,1):(c=!1,o<r&&(r=o));if(c){e.splice(b--,1);var s=n();void 0!==s&&(t=s)}}return t}o=o||0;for(var b=e.length;b>0&&e[b-1][2]>o;b--)e[b]=e[b-1];e[b]=[l,n,o]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={8830:0,7538:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var n,o,[r,c,i]=l,s=0;if(r.some((t=>0!==e[t]))){for(n in c)a.o(c,n)&&(a.m[n]=c[n]);if(i)var b=i(a)}for(t&&t(l);s<r.length;s++)o=r[s],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(b)},l=globalThis.webpackChunkufl_block=globalThis.webpackChunkufl_block||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var n=a.O(void 0,[7538],(()=>a(9409)));n=a.O(n)})();
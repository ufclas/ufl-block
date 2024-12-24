(()=>{"use strict";var e,t={950:()=>{const e=window.wp.blocks,t=JSON.parse('{"name":"create-block/showcase-text-only"}'),n=window.React,l=window.wp.i18n,a=window.wp.blockEditor,o=window.wp.components,{name:r}=t;(0,e.registerBlockType)(r,{edit:e=>{const{attributes:{title:t,content:r,linkLabel:c,link:s,hasLinkNofollow:i,openNewTab:m},setAttributes:p}=e,u=(0,a.useBlockProps)(),w=e=>{p({title:e})},h=e=>{p({content:e})};return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(a.InspectorControls,null,(0,n.createElement)(o.PanelBody,{title:(0,l.__)("Showcase—Text Only","showcase-text-only-block"),initialOpen:!0},(0,n.createElement)(o.PanelRow,null,(0,n.createElement)("fieldset",null,(0,n.createElement)(o.TextControl,{label:(0,l.__)("Title","showcase-text-only"),value:t,onChange:w,help:(0,l.__)("","showcase-text-only")}))),(0,n.createElement)(o.PanelRow,null,(0,n.createElement)("fieldset",null,(0,n.createElement)(o.TextareaControl,{label:(0,l.__)("Description","showcase-text-only"),value:r,onChange:h,help:(0,l.__)("Optional","showcase-text-only")}))))),(0,n.createElement)("section",{...u},(0,n.createElement)("div",{className:"container"},(0,n.createElement)("div",{className:"row justify-content-center"},(0,n.createElement)("div",{className:"col-12 text-center"},(0,n.createElement)(a.RichText,{tagName:"h2",placeholder:(0,l.__)("Write title…"),value:t,onChange:w}),(0,n.createElement)(a.RichText,{tagName:"p",placeholder:(0,l.__)("Write title…"),value:r,onChange:h}),(0,n.createElement)("div",{className:"d-flex flex-wrap justify-content-center button-wrapper"},(0,n.createElement)(a.InnerBlocks,{renderAppender:a.InnerBlocks.ButtonBlockAppender,template:[["create-block/showcase-text-only-button"]],allowedBlocks:["create-block/showcase-text-only-button"]})))))))},save:e=>{const{attributes:{title:t,content:l,link:o,linkLabel:r,hasLinkNofollow:c,openNewTab:s}}=e,i=a.useBlockProps.save();return(0,n.createElement)("section",{...i},(0,n.createElement)("div",{className:"container"},(0,n.createElement)("div",{className:"row justify-content-center"},(0,n.createElement)("div",{className:"col-12 text-center"},(0,n.createElement)(a.RichText.Content,{tagName:"h2",value:t}),(0,n.createElement)(a.RichText.Content,{tagName:"p",value:l}),(0,n.createElement)("div",{className:"d-flex flex-wrap justify-content-center button-wrapper"},(0,n.createElement)(a.InnerBlocks.Content,null))))))}})}},n={};function l(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,l),o.exports}l.m=t,e=[],l.O=(t,n,a,o)=>{if(!n){var r=1/0;for(m=0;m<e.length;m++){for(var[n,a,o]=e[m],c=!0,s=0;s<n.length;s++)(!1&o||r>=o)&&Object.keys(l.O).every((e=>l.O[e](n[s])))?n.splice(s--,1):(c=!1,o<r&&(r=o));if(c){e.splice(m--,1);var i=a();void 0!==i&&(t=i)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[n,a,o]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={5090:0,4326:0};l.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[r,c,s]=n,i=0;if(r.some((t=>0!==e[t]))){for(a in c)l.o(c,a)&&(l.m[a]=c[a]);if(s)var m=s(l)}for(t&&t(n);i<r.length;i++)o=r[i],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(m)},n=globalThis.webpackChunkufl_block=globalThis.webpackChunkufl_block||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=l.O(void 0,[4326],(()=>l(950)));a=l.O(a)})();
(()=>{"use strict";var e,l={6248:()=>{const e=window.wp.blocks,l=window.React,t=window.wp.i18n,n=window.wp.blockEditor,a=window.wp.components,o=JSON.parse('{"UU":"create-block/title-tool-column"}');(0,e.registerBlockType)(o.UU,{edit:e=>{const{attributes:{title:o,subTitle:r,mediaID:i,mediaURL:c,link:m,linkLabel:u,hasLinkNofollow:s,openNewTab:p},setAttributes:d}=e,f=((0,n.useBlockProps)(),e=>{d({title:e})}),g=e=>{d({subTitle:e})};return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(n.InspectorControls,null,(0,l.createElement)(a.PanelBody,{title:(0,t.__)("Title Tool Item","title-tool-column"),initialOpen:!0},(0,l.createElement)(a.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(n.MediaUploadCheck,null,(0,l.createElement)(n.MediaUpload,{onSelect:e=>{d({mediaURL:e.url,mediaID:e.id})},allowedTypes:"image",value:i,render:({open:e})=>(0,l.createElement)(a.Button,{className:i?"image-button":"button button-large",onClick:e},i?(0,t.__)("Change Image","ufl-block"):(0,t.__)("Upload Image","ufl-block"))})),0!=i&&(0,l.createElement)(n.MediaUploadCheck,null,(0,l.createElement)(a.Button,{onClick:()=>{e.setAttributes({mediaID:0,mediaURL:""})},isLink:!0,isDestructive:!0},(0,t.__)("Remove image","ufl-block"))))),(0,l.createElement)(a.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(a.TextControl,{label:(0,t.__)("Card - Title ","title-tool-column"),value:o,onChange:f,help:(0,t.__)("","title-tool-column")}))),(0,l.createElement)(a.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(a.TextareaControl,{label:(0,t.__)("Card - Description","title-tool-column"),value:r,onChange:g,help:(0,t.__)("Optional - must be consistent on all cards","title-tool-column")}))),(0,l.createElement)(a.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(a.TextControl,{label:(0,t.__)("Card - Destination","title-tool-column"),value:m,onChange:e=>{d({link:e})},help:(0,t.__)("","title-tool-column")}))),(0,l.createElement)(a.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(a.ToggleControl,{label:"Open in New Tab?",help:p?"Has rel nofollow.":"No rel nofollow.",checked:p,onChange:()=>{d({openNewTab:!p})}}))))),(0,l.createElement)("a",{className:"tool-link",href:m,rel:s?"nofollow":"noopener noreferrer",target:p?"_blank":"_self",onClick:e=>{e.preventDefault()}},(0,l.createElement)("figure",{className:"figure"},(0,l.createElement)("img",{src:c,className:"figure-img img-fluid",alt:o})),(0,l.createElement)("span",null,(0,l.createElement)(n.RichText,{tagName:"h2",placeholder:(0,t.__)("Write title…"),value:o,onChange:f}),(0,l.createElement)(n.RichText,{tagName:"p",placeholder:(0,t.__)("Write title…"),value:r,onChange:g}))))},save:e=>{const{attributes:{title:t,subTitle:a,mediaID:o,mediaURL:r,link:i,linkLabel:c,hasLinkNofollow:m,openNewTab:u}}=e;return n.useBlockProps.save(),(0,l.createElement)(l.Fragment,null,(0,l.createElement)("a",{className:"tool-link",href:i,rel:m?"nofollow":"noopener noreferrer",target:u?"_blank":"_self"},r&&(0,l.createElement)("figure",{className:"figure"},(0,l.createElement)("img",{src:r,className:"figure-img img-fluid",alt:t})),(0,l.createElement)("span",null,(0,l.createElement)(n.RichText.Content,{tagName:"h2",value:t}),(0,l.createElement)(n.RichText.Content,{tagName:"p",value:a}))))}})}},t={};function n(e){var a=t[e];if(void 0!==a)return a.exports;var o=t[e]={exports:{}};return l[e](o,o.exports,n),o.exports}n.m=l,e=[],n.O=(l,t,a,o)=>{if(!t){var r=1/0;for(u=0;u<e.length;u++){for(var[t,a,o]=e[u],i=!0,c=0;c<t.length;c++)(!1&o||r>=o)&&Object.keys(n.O).every((e=>n.O[e](t[c])))?t.splice(c--,1):(i=!1,o<r&&(r=o));if(i){e.splice(u--,1);var m=a();void 0!==m&&(l=m)}}return l}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[t,a,o]},n.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),(()=>{var e={3432:0,8883:0};n.O.j=l=>0===e[l];var l=(l,t)=>{var a,o,[r,i,c]=t,m=0;if(r.some((l=>0!==e[l]))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(c)var u=c(n)}for(l&&l(t);m<r.length;m++)o=r[m],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},t=globalThis.webpackChunkufl_block=globalThis.webpackChunkufl_block||[];t.forEach(l.bind(null,0)),t.push=l.bind(null,t.push.bind(t))})();var a=n.O(void 0,[8883],(()=>n(6248)));a=n.O(a)})();
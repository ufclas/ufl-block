(()=>{"use strict";var e,l={4759:()=>{const e=window.wp.blocks,l=window.React,a=window.wp.i18n,t=window.wp.blockEditor,n=window.wp.components,i=JSON.parse('{"UU":"create-block/visual-navigation-item"}');(0,e.registerBlockType)(i.UU,{edit:e=>{const{attributes:{text:i,title:o,btnLabel:r,btnLink:c,hasLinkNofollow:s,openNewTab:m,mediaID:u,mediaURL:v},setAttributes:g}=e,d=((0,t.useBlockProps)(),e=>{g({title:e})});return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(t.InspectorControls,null,(0,l.createElement)(n.PanelBody,{title:(0,a.__)("Visual Navigation Item","visual-navigation-item"),initialOpen:!0},(0,l.createElement)(n.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(t.MediaUploadCheck,null,(0,l.createElement)(t.MediaUpload,{onSelect:e=>{g({mediaURL:e.url,mediaID:e.id})},allowedTypes:"image",value:u,render:({open:e})=>(0,l.createElement)(n.Button,{className:u?"image-button":"button button-large",onClick:e},u?(0,a.__)("Change Image","ufl-block"):(0,a.__)("Upload Image","ufl-block"))})),0!=u&&(0,l.createElement)(t.MediaUploadCheck,null,(0,l.createElement)(n.Button,{onClick:()=>{e.setAttributes({mediaID:0,mediaURL:""})},isLink:!0,isDestructive:!0},(0,a.__)("Remove image","ufl-block"))))),(0,l.createElement)(n.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(n.TextControl,{label:(0,a.__)("Card - Title","visual-navigation-item"),value:o,onChange:d,help:(0,a.__)("","visual-navigation-item")}))),(0,l.createElement)(n.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(n.TextControl,{label:(0,a.__)("Card - Destination","visual-navigation-item"),value:c,onChange:e=>{g({btnLink:e})},help:(0,a.__)("","visual-navigation-item")}))),(0,l.createElement)(n.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(n.ToggleControl,{label:"Open in New Tab?",help:m?"Has rel nofollow.":"No rel nofollow.",checked:m,onChange:()=>{g({openNewTab:!m})}}))))),(0,l.createElement)("a",{href:c,className:"col-12 col-lg-3 col-md-6 visual-navigation-link dh-container",rel:s?"nofollow":"noopener noreferrer",target:m?"_blank":"_self",onClick:e=>{e.preventDefault()}},(0,l.createElement)("span",{className:"visual-navigation-image-wrapper"},(0,l.createElement)("img",{className:"img-fluid visual-navigation-image",src:v,alt:o}),(0,l.createElement)("div",{className:"dh-overlay"})),(0,l.createElement)(t.RichText,{tagName:"p",placeholder:(0,a.__)("Write title…","gutenberg-examples"),value:o,onChange:d})))},save:e=>{const{attributes:{text:a,title:n,btnLabel:i,btnLink:o,hasLinkNofollow:r,openNewTab:c,mediaID:s,mediaURL:m}}=e;return t.useBlockProps.save(),(0,l.createElement)(l.Fragment,null,(0,l.createElement)("a",{href:o,className:"col-12 col-lg-3 col-md-6 visual-navigation-link dh-container",rel:r?"nofollow":"noopener noreferrer",target:c?"_blank":"_self"},(0,l.createElement)("span",{className:"visual-navigation-image-wrapper"},(0,l.createElement)("img",{className:"img-fluid visual-navigation-image",src:m,alt:n}),(0,l.createElement)("div",{className:"dh-overlay"})),(0,l.createElement)(t.RichText.Content,{tagName:"p",value:n})))}})}},a={};function t(e){var n=a[e];if(void 0!==n)return n.exports;var i=a[e]={exports:{}};return l[e](i,i.exports,t),i.exports}t.m=l,e=[],t.O=(l,a,n,i)=>{if(!a){var o=1/0;for(m=0;m<e.length;m++){for(var[a,n,i]=e[m],r=!0,c=0;c<a.length;c++)(!1&i||o>=i)&&Object.keys(t.O).every((e=>t.O[e](a[c])))?a.splice(c--,1):(r=!1,i<o&&(o=i));if(r){e.splice(m--,1);var s=n();void 0!==s&&(l=s)}}return l}i=i||0;for(var m=e.length;m>0&&e[m-1][2]>i;m--)e[m]=e[m-1];e[m]=[a,n,i]},t.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),(()=>{var e={6311:0,303:0};t.O.j=l=>0===e[l];var l=(l,a)=>{var n,i,[o,r,c]=a,s=0;if(o.some((l=>0!==e[l]))){for(n in r)t.o(r,n)&&(t.m[n]=r[n]);if(c)var m=c(t)}for(l&&l(a);s<o.length;s++)i=o[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(m)},a=globalThis.webpackChunkufl_block=globalThis.webpackChunkufl_block||[];a.forEach(l.bind(null,0)),a.push=l.bind(null,a.push.bind(a))})();var n=t.O(void 0,[303],(()=>t(4759)));n=t.O(n)})();
(()=>{"use strict";var e,t={372:()=>{const e=window.wp.blocks,t=window.React,l=window.wp.i18n,a=window.wp.blockEditor,n=window.wp.components,r=JSON.parse('{"UU":"create-block/post-header"}');(0,e.registerBlockType)(r.UU,{edit:e=>{const{attributes:{text:r,title:o,btnLabel:i,btnLink:c,hasLinkNofollow:s,openNewTab:m,mediaID:u,mediaURL:d},setAttributes:p}=e,b=(0,a.useBlockProps)(),h=e=>{p({title:e})};return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(a.InspectorControls,null,(0,t.createElement)(n.PanelBody,{title:(0,l.__)("Block Settings","post-header"),initialOpen:!0},(0,t.createElement)(n.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(a.MediaUploadCheck,null,(0,t.createElement)(a.MediaUpload,{onSelect:e=>{p({mediaURL:e.url,mediaID:e.id})},allowedTypes:"image",value:u,render:({open:e})=>(0,t.createElement)(n.Button,{className:u?"image-button":"button button-large",onClick:e},u?(0,l.__)("Change Image","ufl-block"):(0,l.__)("Upload Image","ufl-block"))})),0!=u&&(0,t.createElement)(a.MediaUploadCheck,null,(0,t.createElement)(n.Button,{onClick:()=>{e.setAttributes({mediaID:0,mediaURL:""})},isLink:!0,isDestructive:!0},(0,l.__)("Remove image","ufl-block"))))),(0,t.createElement)(n.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(n.TextControl,{label:(0,l.__)("Post Title","post-header"),value:o,onChange:h,help:(0,l.__)("","post-header")}))))),(0,t.createElement)("div",{...b},d?(0,t.createElement)("section",{className:"single-news-hero w-100",style:{backgroundImage:"url("+d+")"}},(0,t.createElement)(a.RichText,{tagName:"h1",placeholder:(0,l.__)("Write title…","gutenberg-examples"),value:o,onChange:h})):(0,t.createElement)("section",{className:"title-block w-100"},(0,t.createElement)("div",{className:"container-fluid news-title-container"},(0,t.createElement)("div",{className:"title-wrapper"},(0,t.createElement)(a.RichText,{tagName:"h1",placeholder:(0,l.__)("Write title…","gutenberg-examples"),value:o,onChange:h}))))))},save:e=>{const{attributes:{text:l,title:n,btnLabel:r,btnLink:o,hasLinkNofollow:i,openNewTab:c,mediaID:s,mediaURL:m}}=e,u=a.useBlockProps.save();return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{...u},m?(0,t.createElement)("section",{className:"single-news-hero w-100",style:{backgroundImage:"url("+m+")"}},(0,t.createElement)(a.RichText.Content,{tagName:"h1",value:n})):(0,t.createElement)("section",{className:"title-block w-100"},(0,t.createElement)("div",{className:"container-fluid news-title-container"},(0,t.createElement)("div",{className:"title-wrapper"},(0,t.createElement)(a.RichText.Content,{tagName:"h1",value:n}))))))}})}},l={};function a(e){var n=l[e];if(void 0!==n)return n.exports;var r=l[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,l,n,r)=>{if(!l){var o=1/0;for(m=0;m<e.length;m++){for(var[l,n,r]=e[m],i=!0,c=0;c<l.length;c++)(!1&r||o>=r)&&Object.keys(a.O).every((e=>a.O[e](l[c])))?l.splice(c--,1):(i=!1,r<o&&(o=r));if(i){e.splice(m--,1);var s=n();void 0!==s&&(t=s)}}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[l,n,r]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={9380:0,1404:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var n,r,[o,i,c]=l,s=0;if(o.some((t=>0!==e[t]))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(c)var m=c(a)}for(t&&t(l);s<o.length;s++)r=o[s],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(m)},l=globalThis.webpackChunkufl_block=globalThis.webpackChunkufl_block||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var n=a.O(void 0,[1404],(()=>a(372)));n=a.O(n)})();
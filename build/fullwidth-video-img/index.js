(()=>{"use strict";var e,t={6209:()=>{const e=window.wp.blocks,t=window.React,l=window.wp.i18n,a=window.wp.blockEditor,i=window.wp.components,n=JSON.parse('{"UU":"create-block/fullwidth-video-img"}');(0,e.registerBlockType)(n.UU,{edit:e=>{const{attributes:{subTitle:n,mediaID:r,mediaURL:o,hasLinkNofollow:c,openNewTab:m,youtubeEmbed:s},setAttributes:d}=e,u=((0,a.useBlockProps)(),e=>{d({subTitle:e})});return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(a.InspectorControls,null,(0,t.createElement)(i.PanelBody,{title:(0,l.__)("Fullwidth Video/IMG Settings","featured-video"),initialOpen:!0},(0,t.createElement)(i.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(a.MediaUploadCheck,null,(0,t.createElement)(a.MediaUpload,{onSelect:e=>{d({mediaURL:e.url,mediaID:e.id})},allowedTypes:"image",value:r,render:({open:e})=>(0,t.createElement)(i.Button,{className:r?"image-button":"button button-large",onClick:e},r?(0,l.__)("Change Image","ufl-block"):(0,l.__)("Upload Image","ufl-block"))})),0!=r&&(0,t.createElement)(a.MediaUploadCheck,null,(0,t.createElement)(i.Button,{onClick:()=>{e.setAttributes({mediaID:0,mediaURL:""})},isLink:!0,isDestructive:!0},(0,l.__)("Remove image","ufl-block"))))),(0,t.createElement)(i.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(i.TextControl,{label:(0,l.__)("Video - Youtube Video ID","featured-video"),value:s,onChange:e=>{d({youtubeEmbed:e})},help:(0,l.__)("example: if URL of video is: https://www.youtube.com/watch?v=aqz-KE-bpKQ. The ID is aqz-KE-bpKQ ","featured-video")}))),(0,t.createElement)(i.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(i.TextControl,{label:(0,l.__)("Section Text","featured-video"),value:n,onChange:u,help:(0,l.__)("","featured-video")}))))),s?(0,t.createElement)("section",{className:"fullwidth-media"},(0,t.createElement)("div",{className:"container-fluid single-video-container"},(0,t.createElement)("div",{className:"row align-items-start position-relative"},(0,t.createElement)("a",{href:"https://www.youtube.com/embed/"+s+"?autoplay=1&rel=0",className:"p-0 video-wrapper","data-toggle":"lightbox",onClick:e=>{e.preventDefault()}},(0,t.createElement)("div",{className:"video-play"},(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 110 109"},(0,t.createElement)("g",{fill:"rgba(0,33,165,0.55)",stroke:"#fff",strokeWidth:"2","data-name":"Ellipse 145"},(0,t.createElement)("ellipse",{cx:"55",cy:"54.5",stroke:"none",rx:"55",ry:"54.5"}),(0,t.createElement)("ellipse",{cx:"55",cy:"54.5",fill:"none",rx:"54",ry:"53.5"})),(0,t.createElement)("path",{fill:"#fff",d:"M75.445 55.49 47 37.99V73Z","data-name":"Path 5"}))),o?(0,t.createElement)("img",{className:"img-fluid video-thumb",src:o,alt:(0,l.__)("Play Video","ufl-block")}):(0,t.createElement)("img",{className:"img-fluid video-thumb",src:"https://i1.ytimg.com/vi/"+s+"/0.jpg",alt:(0,l.__)("Play Video","ufl-block")})),(0,t.createElement)("div",{id:"fullwidthBg",className:"fullwidthBg"})),(0,t.createElement)("div",{className:"featured-video-content-wrapper"},(0,t.createElement)(a.RichText,{tagName:"p",placeholder:(0,l.__)("Write title…"),value:n,onChange:u})))):(0,t.createElement)("section",{className:"fullwidth-media"},(0,t.createElement)("div",{className:"container-fluid single-video-container"},(0,t.createElement)("div",{className:"row align-items-start position-relative"},(0,t.createElement)("div",{className:"p-0 video-wrapper img-bg","data-toggle":"lightbox"},(0,t.createElement)("img",{className:"img-fluid video-thumb",src:o,alt:(0,l.__)("Play Video","ufl-block")})),(0,t.createElement)("div",{id:"fullwidthBg",className:"fullwidthBg"})),(0,t.createElement)("div",{className:"featured-video-content-wrapper"},(0,t.createElement)(a.RichText,{tagName:"p",placeholder:(0,l.__)("Write title…"),value:n,onChange:u})))))},save:e=>{const{attributes:{subTitle:i,mediaID:n,mediaURL:r,hasLinkNofollow:o,openNewTab:c,youtubeEmbed:m}}=e,s=a.useBlockProps.save();return(0,t.createElement)(t.Fragment,null,m?(0,t.createElement)("div",{...s},(0,t.createElement)("section",{className:"fullwidth-media"},(0,t.createElement)("div",{className:"container-fluid single-video-container"},(0,t.createElement)("div",{className:"row align-items-start position-relative"},(0,t.createElement)("a",{href:"https://www.youtube.com/embed/"+m+"?autoplay=1&rel=0",className:"p-0 video-wrapper","data-toggle":"lightbox"},(0,t.createElement)("div",{className:"video-play"},(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 110 109"},(0,t.createElement)("g",{fill:"rgba(0,33,165,0.55)",stroke:"#fff",strokeWidth:"2","data-name":"Ellipse 145"},(0,t.createElement)("ellipse",{cx:"55",cy:"54.5",stroke:"none",rx:"55",ry:"54.5"}),(0,t.createElement)("ellipse",{cx:"55",cy:"54.5",fill:"none",rx:"54",ry:"53.5"})),(0,t.createElement)("path",{fill:"#fff",d:"M75.445 55.49 47 37.99V73Z","data-name":"Path 5"}))),r?(0,t.createElement)("img",{className:"img-fluid video-thumb",src:r,alt:(0,l.__)("Play Video","ufl-block")}):(0,t.createElement)("img",{className:"img-fluid video-thumb",src:"https://i1.ytimg.com/vi/"+m+"/0.jpg",alt:(0,l.__)("Play Video","ufl-block")})),(0,t.createElement)("div",{id:"fullwidthBg",className:"fullwidthBg"})),(0,t.createElement)("div",{className:"featured-video-content-wrapper"},(0,t.createElement)(a.RichText.Content,{tagName:"p",value:i}))))):(0,t.createElement)("div",{...s},(0,t.createElement)("section",{className:"fullwidth-media"},(0,t.createElement)("div",{className:"container-fluid single-video-container"},(0,t.createElement)("div",{className:"row align-items-start position-relative"},(0,t.createElement)("div",{className:"p-0 video-wrapper img-bg","data-toggle":"lightbox"},(0,t.createElement)("img",{className:"img-fluid video-thumb",src:r,alt:(0,l.__)("Play Video","ufl-block")})),(0,t.createElement)("div",{id:"fullwidthBg",className:"fullwidthBg"})),(0,t.createElement)("div",{className:"featured-video-content-wrapper"},(0,t.createElement)(a.RichText.Content,{tagName:"p",value:i}))))))}})}},l={};function a(e){var i=l[e];if(void 0!==i)return i.exports;var n=l[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.m=t,e=[],a.O=(t,l,i,n)=>{if(!l){var r=1/0;for(s=0;s<e.length;s++){for(var[l,i,n]=e[s],o=!0,c=0;c<l.length;c++)(!1&n||r>=n)&&Object.keys(a.O).every((e=>a.O[e](l[c])))?l.splice(c--,1):(o=!1,n<r&&(r=n));if(o){e.splice(s--,1);var m=i();void 0!==m&&(t=m)}}return t}n=n||0;for(var s=e.length;s>0&&e[s-1][2]>n;s--)e[s]=e[s-1];e[s]=[l,i,n]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={1837:0,1009:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var i,n,[r,o,c]=l,m=0;if(r.some((t=>0!==e[t]))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(c)var s=c(a)}for(t&&t(l);m<r.length;m++)n=r[m],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(s)},l=globalThis.webpackChunkufl_block=globalThis.webpackChunkufl_block||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var i=a.O(void 0,[1009],(()=>a(6209)));i=a.O(i)})();
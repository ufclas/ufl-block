(()=>{"use strict";var e,t={1973:()=>{const e=window.wp.blocks,t=JSON.parse('{"name":"create-block/featured-video-item"}'),l=window.React,a=window.wp.i18n,o=window.wp.blockEditor,i=window.wp.components,n=(window.wp.data,window.wp.element,e=>{const{attributes:{title:t,subTitle:n,mediaID:r,mediaURL:c,link:m,linkLabel:s,hasLinkNofollow:d,openNewTab:u,youtubeEmbed:p},setAttributes:b}=e,f=(0,o.useBlockProps)(),v=e=>{b({title:e})},w=e=>{b({subTitle:e})};return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(o.InspectorControls,null,(0,l.createElement)(i.PanelBody,{title:(0,a.__)("Multiple Featured Video - Item","featured-video"),initialOpen:!0},(0,l.createElement)(i.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(o.MediaUploadCheck,null,(0,l.createElement)(o.MediaUpload,{onSelect:e=>{b({mediaURL:e.url,mediaID:e.id})},allowedTypes:"image",value:r,help:(0,a.__)("Optional","featured-video-item"),render:({open:e})=>(0,l.createElement)(i.Button,{className:r?"image-button":"button button-large",onClick:e},r?(0,a.__)("Change Image","ufl-block"):(0,a.__)("Upload Image","ufl-block"))})),0!=r&&(0,l.createElement)(o.MediaUploadCheck,null,(0,l.createElement)(i.Button,{onClick:()=>{e.setAttributes({mediaID:0,mediaURL:""})},isLink:!0,isDestructive:!0},(0,a.__)("Remove image","ufl-block"))))),(0,l.createElement)(i.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(i.TextControl,{label:(0,a.__)("Video - Youtube Video ID","featured-video"),value:p,onChange:e=>{b({youtubeEmbed:e})},help:(0,a.__)("example: if URL of video is: https://www.youtube.com/watch?v=aqz-KE-bpKQ. The ID is aqz-KE-bpKQ ","featured-video")}))),(0,l.createElement)(i.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(i.TextControl,{label:(0,a.__)("Video Title","content-carousel-inner-block"),value:t,onChange:v,help:(0,a.__)("","content-carousel-inner-block")}))),(0,l.createElement)(i.PanelRow,null,(0,l.createElement)("fieldset",null,(0,l.createElement)(i.TextControl,{label:(0,a.__)("Video Text","featured-video"),value:n,onChange:w,help:(0,a.__)("Optional","featured-video-item")}))))),(0,l.createElement)("div",{className:"video-col col-12 col-lg-4"},(0,l.createElement)("div",{...f},(0,l.createElement)("a",{href:"https://www.youtube.com/embed/"+p+"?autoplay=1&rel=0",className:"video-wrapper","aria-label":"Play Video","data-toggle":"lightbox",onClick:e=>{e.preventDefault()}},(0,l.createElement)("div",{className:"video-play"},(0,l.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 110 109"},(0,l.createElement)("g",{fill:"rgba(0,33,165,0.55)",stroke:"#fff",strokeWidth:"2","data-name":"Ellipse 145"},(0,l.createElement)("ellipse",{cx:"55",cy:"54.5",stroke:"none",rx:"55",ry:"54.5"}),(0,l.createElement)("ellipse",{cx:"55",cy:"54.5",fill:"none",rx:"54",ry:"53.5"})),(0,l.createElement)("path",{fill:"#fff",d:"M75.445 55.49 47 37.99V73Z","data-name":"Path 5"}))),c?(0,l.createElement)("img",{className:"img-fluid video-thumb",src:c,alt:(0,a.__)("Play Video about [insert subject]","ufl-block")}):(0,l.createElement)("img",{className:"img-fluid video-thumb",src:"https://i1.ytimg.com/vi/"+p+"/0.jpg",alt:(0,a.__)("Play Video ","ufl-block")})),(0,l.createElement)(o.RichText,{tagName:"p",placeholder:(0,a.__)("Write title…"),value:t,onChange:v,className:"card-title"}),(0,l.createElement)(o.RichText,{tagName:"p",placeholder:(0,a.__)("Write title…"),value:n,onChange:w,className:"card-description"}))))}),{name:r}=t;(0,e.registerBlockType)(r,{edit:n,save:e=>{const{attributes:{title:t,subTitle:i,mediaID:n,mediaURL:r,link:c,linkLabel:m,hasLinkNofollow:s,openNewTab:d,youtubeEmbed:u}}=e,p=o.useBlockProps.save();return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:"video-col col-12 col-lg-4"},(0,l.createElement)("div",{...p},r?(0,l.createElement)("a",{href:"https://www.youtube.com/embed/"+u+"?autoplay=1&rel=0",className:"video-wrapper","aria-label":"Play Video","data-toggle":"lightbox"},(0,l.createElement)("div",{className:"video-play"},(0,l.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 110 109"},(0,l.createElement)("g",{fill:"rgba(0,33,165,0.55)",stroke:"#fff","stroke-width":"2","data-name":"Ellipse 145"},(0,l.createElement)("ellipse",{cx:"55",cy:"54.5",stroke:"none",rx:"55",ry:"54.5"}),(0,l.createElement)("ellipse",{cx:"55",cy:"54.5",fill:"none",rx:"54",ry:"53.5"})),(0,l.createElement)("path",{fill:"#fff",d:"M75.445 55.49 47 37.99V73Z","data-name":"Path 5"}))),(0,l.createElement)("img",{className:"img-fluid video-thumb",src:r,alt:(0,a.__)("Play Video about [insert subject]","ufl-block")})):(0,l.createElement)("a",{href:"https://www.youtube.com/embed/"+u+"?autoplay=1&rel=0",className:"video-wrapper","aria-label":"Play Video","data-toggle":"lightbox"},(0,l.createElement)("div",{className:"video-play"},(0,l.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 110 109"},(0,l.createElement)("g",{fill:"rgba(0,33,165,0.55)",stroke:"#fff","stroke-width":"2","data-name":"Ellipse 145"},(0,l.createElement)("ellipse",{cx:"55",cy:"54.5",stroke:"none",rx:"55",ry:"54.5"}),(0,l.createElement)("ellipse",{cx:"55",cy:"54.5",fill:"none",rx:"54",ry:"53.5"})),(0,l.createElement)("path",{fill:"#fff",d:"M75.445 55.49 47 37.99V73Z","data-name":"Path 5"}))),(0,l.createElement)("img",{className:"img-fluid video-thumb",src:"https://i1.ytimg.com/vi/"+u+"/0.jpg",alt:(0,a.__)("Play Video about [insert subject]","ufl-block")})),(0,l.createElement)(o.RichText.Content,{tagName:"p",className:"card-title",value:t}),(0,l.createElement)(o.RichText.Content,{tagName:"p",className:"card-description",value:i}))))}})}},l={};function a(e){var o=l[e];if(void 0!==o)return o.exports;var i=l[e]={exports:{}};return t[e](i,i.exports,a),i.exports}a.m=t,e=[],a.O=(t,l,o,i)=>{if(!l){var n=1/0;for(s=0;s<e.length;s++){for(var[l,o,i]=e[s],r=!0,c=0;c<l.length;c++)(!1&i||n>=i)&&Object.keys(a.O).every((e=>a.O[e](l[c])))?l.splice(c--,1):(r=!1,i<n&&(n=i));if(r){e.splice(s--,1);var m=o();void 0!==m&&(t=m)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[l,o,i]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={4544:0,6984:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var o,i,[n,r,c]=l,m=0;if(n.some((t=>0!==e[t]))){for(o in r)a.o(r,o)&&(a.m[o]=r[o]);if(c)var s=c(a)}for(t&&t(l);m<n.length;m++)i=n[m],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(s)},l=globalThis.webpackChunkufl_block=globalThis.webpackChunkufl_block||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var o=a.O(void 0,[6984],(()=>a(1973)));o=a.O(o)})();
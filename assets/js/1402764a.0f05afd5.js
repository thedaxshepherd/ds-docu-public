"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[8978],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>p});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(o),p=a,g=d["".concat(u,".").concat(p)]||d[p]||h[p]||r;return o?n.createElement(g,i(i({ref:t},c),{},{components:o})):n.createElement(g,i({ref:t},c))}));function p(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6318:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=o(7462),a=(o(7294),o(3905));const r={title:"Using Hugo and GitHub Pages for my blog",featured:!0,draft:!1,comments:!1,categories:["Website"],tags:["Hugo","Git"],slug:"website-hugo-blog-git",aliases:"migrate-from-wordpress",summary:"My Experience with using Hugo and deploying to Github Pages."},i=void 0,s={permalink:"/ds-docu-public/website-hugo-blog-git",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/aAlreadyPosted/2021-11-10-website-hugo-for-blog/index.md",source:"@site/blog/aAlreadyPosted/2021-11-10-website-hugo-for-blog/index.md",title:"Using Hugo and GitHub Pages for my blog",description:"Sheep",date:"2021-11-10T00:00:00.000Z",formattedDate:"November 10, 2021",tags:[{label:"Hugo",permalink:"/ds-docu-public/tags/hugo"},{label:"Git",permalink:"/ds-docu-public/tags/git"}],readingTime:3.025,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Using Hugo and GitHub Pages for my blog",featured:!0,draft:!1,comments:!1,categories:["Website"],tags:["Hugo","Git"],slug:"website-hugo-blog-git",aliases:"migrate-from-wordpress",summary:"My Experience with using Hugo and deploying to Github Pages."},prevItem:{title:"Long Blog Post",permalink:"/ds-docu-public/long-blog-post"}},u={authorsImageUrls:[]},l=[],c={toc:l};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sheep",src:o(3129).Z,width:"94",height:"116"})),(0,a.kt)("p",null,"I would like to say that this blog has been relaunched on GitHub using Hugo. If something never launched in the first place I am not sure it can be relaunched. I initially had a WordPress blog on SiteGround. It never made it out of test. I learned a lot about deploying WordPress and the different plugins. It did come in handy when my work started using WordPress for the company site. One of the things I immediately noticed is our site did not have a Favicon."),(0,a.kt)("p",null,"Moving the blog to GitHub pages was motivated by a couple of factors. The first, it is hard to justify paying for hosting when nothing is being posted to the public. When the renewal came due, it was time to try a different option."),(0,a.kt)("p",null,"The second reason is that by hosting it on GitHub it would encourage me to learn git. "),(0,a.kt)("p",null,"I chose Hugo as the static site generator for a couple reasons. It uses one executable for the program without a bunch of dependencies. It uses Go as the template language and I was hoping for one that used a C like language. "),(0,a.kt)("p",null,"Currently I am using the DPSG theme for Hugo. I had minimo while developing the site and then Mainroad. DPSG is a fork of Mainroad. I tend to fixate more on the theme instead of the content. I am trying to stick with a theme until I create enough content. I am using Hugo modules for the theme. This makes it easy to update when a new version of the theme comes out. "),(0,a.kt)("p",null,"I am using ",(0,a.kt)("a",{parentName:"p",href:"https://prismjs.com/"},"PrismJS")," for the syntax highlighting. Chroma which Hugo uses does not support languages such as DAX or M (Power Query). With PrismJS you can select what languages and options you want to support and then add the references to the config file for the JS and CSS files."),(0,a.kt)("p",null,"I chose to setup my deployment using 3 repositories. I use one for the source code that has the visibility set to private. I deploy using a Bash script.  The repository for the Public folder is using a git submodule and is set to public visibility. Lastly, I have public repository for the comments. "),(0,a.kt)("p",null,"I am using ",(0,a.kt)("a",{href:"https://utteranc.es/"},"utterances")," for the blog comments. It uses GitHub issues to store the blog comments. I still have the option to turn off blog comments on a per post basis using the variable in the front matter."),(0,a.kt)("p",null,"To edit the markdown I use  ",(0,a.kt)("a",{href:"https://code.visualstudio.com/"},"Visual Studio Code"),". It allows me to preview the code as I write. I use ",(0,a.kt)("a",{href:"https://docs.microsoft.com/en-us/windows/terminal/"},"Windows Terminal")," which allows me to have multiple tabs open with Git Bash, PowerShell, and Command Prompt. Windows Terminal is amazing and keeps getting better."),(0,a.kt)("p",null,"Profile picture and various art on the site is by ",(0,a.kt)("a",{href:"https://www.how-to-draw-funny-cartoons.com/"},"Martin B\xe9rub\xe9"),". I have zero artistic ability and really like his animated drawings. When I first setup the blog on WordPress I used the drawing of the sheep as a placeholder for my profile picture - watermark and all. When it came time to pick the actual profile picture I had become attached to the picture. I went ahead and purchased it from Martin."),(0,a.kt)("p",null,"This is a place where I can discuss my journey with learning new topics on things that interest me. The main focus will be around the Microsoft BI Stack. Topics such as the DAX language, DAX Studio, Tabular Editor, Analysis Services and Power BI. I also plan to discuss tools that help facilitate that journey such as Windows Terminal and Visual Studio Code."))}h.isMDXComponent=!0},3129:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Sheep_Sitting1-5b48a3f6cefc1e445d9abf4dea7ba599.svg"}}]);
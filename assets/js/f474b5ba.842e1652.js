"use strict";(self.webpackChunkRameshBabu=self.webpackChunkRameshBabu||[]).push([[738],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=l,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),l=n(4334),r="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(7462),l=n(7294),r=n(4334),o=n(6775),i=n(1980),s=n(7392),u=n(12);function d(e){return function(e){var t,n;return null!=(t=null==(n=l.Children.map(e,(function(e){if(!e||(0,l.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function c(e){var t=e.values,n=e.children;return(0,l.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,r=(0,o.k6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,i._X)(s),(0,l.useCallback)((function(e){if(s){var t=new URLSearchParams(r.location.search);t.set(s,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[s,r])]}function h(e){var t,n,a,r,o=e.defaultValue,i=e.queryString,s=void 0!==i&&i,d=e.groupId,h=c(e),k=(0,l.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var l=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:o,tabValues:h})})),g=k[0],b=k[1],f=m({queryString:s,groupId:d}),v=f[0],y=f[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),a=n[0],r=n[1],[a,(0,l.useCallback)((function(e){t&&r.set(e)}),[t,r])]),w=N[0],T=N[1],x=function(){var e=null!=v?v:w;return p({value:e,tabValues:h})?e:null}();return(0,l.useLayoutEffect)((function(){x&&b(x)}),[x]),{selectedValue:g,selectValue:(0,l.useCallback)((function(e){if(!p({value:e,tabValues:h}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),T(e)}),[y,T,h]),tabValues:h}}var k=n(2466),g=n(2389),b="tabList__CuJ",f="tabItem_LNqP";function v(e){var t=e.className,n=e.block,o=e.selectedValue,i=e.selectValue,s=e.tabValues,u=[],d=(0,k.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==o&&(d(t),i(a))},p=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var a,l=u.indexOf(e.currentTarget)+1;n=null!=(a=u[l])?a:u[0];break;case"ArrowLeft":var r,o=u.indexOf(e.currentTarget)-1;n=null!=(r=u[o])?r:u[u.length-1]}null==(t=n)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,i=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return u.push(e)},onKeyDown:p,onClick:c},i,{className:(0,r.Z)("tabs__item",f,null==i?void 0:i.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,a=e.selectedValue,r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=r.find((function(e){return e.props.value===a}));return o?(0,l.cloneElement)(o,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function N(e){var t=h(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",b)},l.createElement(v,(0,a.Z)({},e,t)),l.createElement(y,(0,a.Z)({},e,t)))}function w(e){var t=(0,g.Z)();return l.createElement(N,(0,a.Z)({key:String(t)},e))}},6984:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),o=n(4866),i=n(5162),s=["components"],u={id:"style-guide",title:"Style Guide",sidebar_label:"Style Guide",description:"The Selcukes Documentation Style Guide",keywords:["contributing","style","markdown"]},d=void 0,c={unversionedId:"contributing/style-guide",id:"contributing/style-guide",title:"Style Guide",description:"The Selcukes Documentation Style Guide",source:"@site/docs/contributing/style-guide.md",sourceDirName:"contributing",slug:"/contributing/style-guide",permalink:"/docs/contributing/style-guide",draft:!1,editUrl:"https://github.com/RameshBabuPrudhvi/rameshbabuprudhvi.github.io/tree/main/docs/contributing/style-guide.md",tags:[],version:"current",frontMatter:{id:"style-guide",title:"Style Guide",sidebar_label:"Style Guide",description:"The Selcukes Documentation Style Guide",keywords:["contributing","style","markdown"]},sidebar:"defaultSidebar",previous:{title:"Code of Conduct",permalink:"/docs/contributing/code-of-conduct"}},p={},m=[{value:"Markdown",id:"markdown",level:2},{value:"Frontmatter",id:"frontmatter",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Headers",id:"headers",level:2},{value:"Content",id:"content",level:2},{value:"Images",id:"images",level:2},{value:"Videos",id:"videos",level:2},{value:"Tabs",id:"tabs",level:2},{value:"Inline Code",id:"inline-code",level:2},{value:"Code Blocks",id:"code-blocks",level:2},{value:"Code References",id:"code-references",level:2},{value:"Expanding Code Blocks",id:"expanding-code-blocks",level:2},{value:"Admonitions",id:"admonitions",level:2},{value:"Context Limited",id:"context-limited",level:2},{value:"Badges",id:"badges",level:3},{value:"Highlighted Text",id:"highlighted-text",level:3},{value:"Cards",id:"cards",level:2}],h={toc:m};function k(e){var t=e.components,n=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Selcukes welcomes your contributions to our documentation!\nThis document describes the options available for creating content for the site,\nalong with some guidelines and conventions."),(0,r.kt)("h2",{id:"markdown"},"Markdown"),(0,r.kt)("p",null,"This site uses Docusaurus version 2 Beta. Docusaurus uses the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jonschlinkert/remarkable"},"remarkable Markdown processor")," to convert\n",(0,r.kt)("a",{parentName:"p",href:"https://guides.github.com/features/mastering-markdown/"},"GitHub Flavored Markdown")," into HTML.\n",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features"},"Docusaurus Markdown")," supports\n",(0,r.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax"},"Basic Markdown Syntax")," and most\n",(0,r.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/extended-syntax/"},"Extended Syntax"),". You can see which features are supported\n",(0,r.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/tools/docusaurus/"},"here"),"."),(0,r.kt)("h2",{id:"frontmatter"},"Frontmatter"),(0,r.kt)("p",null,"At the top of each docs page, you need to include these things:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"A brief string that uniquely identifies the page within its parent folder. The id and the name of the file should be the same.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:null},"The main title of the page. This value will automatically be rendered using the H1 style at the top of the page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sidebar_label")),(0,r.kt)("td",{parentName:"tr",align:null},"This is what will appear in the left hand navigation tree for the page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"description")," (optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"This is what appears when the page is referenced in a Google search result.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"keywords")," (optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"A list of terms that help categorize the page for SEO purposes.")))),(0,r.kt)("p",null,"It looks like this in the document:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"---\nid: style-guide\ntitle: Style Guide Introduction\nsidebar_label: Style Guide\ndescription: The Selcukes Documentation Style Guide\nkeywords:\n    - contributing\n    - style\n    - markdown\n---\n")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The first paragraph of the documentation should set the user's expectations for what they will find on the page.\nDescribe the key benefits to the user, but do not include links."),(0,r.kt)("h2",{id:"headers"},"Headers"),(0,r.kt)("p",null,"For accessibility and SEO reasons, never have an H4 header that isn't under an H3 header,\nor an H3 header that isn't under an H2 header."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"H1 headers should never be used in a document since the title is automatically generated as an H1."),(0,r.kt)("li",{parentName:"ul"},"H2 headers are used for SEO, so make sure they succinctly represent what a user will find on the page in that section."),(0,r.kt)("li",{parentName:"ul"},"H3 headers are included in the page's table of contents on the right, so make sure the title describes something\na user might want to directly navigate to."),(0,r.kt)("li",{parentName:"ul"},"H4 headers are to emphasize things within a subsection of the page; these can be longer than the other headers\nif needed because they aren't included in the Table of Contents.")),(0,r.kt)("p",null,"Markdown Code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"## H2 Header\n### H3 Header\n#### H4 Header\n")),(0,r.kt)("h2",{id:"content"},"Content"),(0,r.kt)("p",null,"All words are rendered in the same paragraph even with line breaks, so long as there isn't an empty line.\nAs such, it is good practice for each line to be less than 120 characters long for readability, when possible."),(0,r.kt)("table",{class:"code"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Markdown"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"This\nwill\nall\nbe\non\none\nline.\n\nThe empty line above creates a new paragraph.\n\nThis forces a soft return<br />\nrather than creating a new paragraph\n")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Display"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"This\nwill\nall\nbe\non\none\nline."),(0,r.kt)("p",null,"The empty line above creates a new paragraph."),(0,r.kt)("p",null,"This forces a soft return",(0,r.kt)("br",null),"\nrather than creating a new paragraph"))))),(0,r.kt)("h2",{id:"images"},"Images"),(0,r.kt)("p",null,"All image files should be included in the ",(0,r.kt)("inlineCode",{parentName:"p"},"rameshbabuprudhvi.github.io/static/img")," directory, in a sub-directory that\ncorresponds to the referencing directory. (e.g., images for a document in the ",(0,r.kt)("inlineCode",{parentName:"p"},"rameshbabuprudhvi.github.io/docs/contributing")," directory\nwould be located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"rameshbabuprudhvi.github.io/static/img/contributing")," directory."),(0,r.kt)("p",null,"To add an image from that directory, you need to import a special method by placing this line\nbelow the ",(0,r.kt)("a",{parentName:"p",href:"#frontmatter"},"Frontmatter"),", but above the ",(0,r.kt)("a",{parentName:"p",href:"#introduction"},"Introduction")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"import useBaseUrl from '@docusaurus/useBaseUrl';\n")),(0,r.kt)("p",null,"and then reference the image as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<img src={useBaseUrl(\'img/contributing/my-image.png\')} alt="All images should have alt text" width="250"/>\n')),(0,r.kt)("h2",{id:"videos"},"Videos"),(0,r.kt)("p",null,"Any referenced videos need to be from a Sauce Labs YouTube account.\nThe suggested iframe code structure is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<iframe width="560" height="315" src="https://www.youtube.com/embed/-RDh1ukLN8w" frameborder="0" allow="accelerometer;\nautoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n')),(0,r.kt)("h2",{id:"tabs"},"Tabs"),(0,r.kt)("p",null,"Tabs are a great option when an example is different in different contexts.\nThe primary usage of tabs on this site is to illustrate the same example in multiple languages.\nIdeally, these examples will exist in Java, Node.js, Python, Ruby, and C#, and the tabs should be placed in that order."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When a page includes multiple sets of tabs, use a ",(0,r.kt)("inlineCode",{parentName:"p"},"groupId")," so when the user selects a particular tab,\nall tabs with that ID will switch to the selected tab.")),(0,r.kt)("p",null,"To use tabs, you need to import two special methods by placing these lines below the ",(0,r.kt)("a",{parentName:"p",href:"#frontmatter"},"Frontmatter"),",\nbut above the ",(0,r.kt)("a",{parentName:"p",href:"#introduction"},"Introduction"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';\n")),(0,r.kt)("p",null,"and then use the tabs as follows:"),(0,r.kt)("table",{class:"code"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Markdown"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"<Tabs\n  groupId=\"lang-ex\"\n  defaultValue=\"java\"\n  values={[\n    {label: 'Java', value: 'java'},\n    {label: 'Node.js', value: 'js'},\n  ]}>\n\n<TabItem value=\"java\">\n\nThis would include information or examples for Java\n\n</TabItem>\n<TabItem value=\"js\">\n\nThis would include information or examples for JavaScript\n\n</TabItem>\n</Tabs>\n")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Display"))),(0,r.kt)("td",null,(0,r.kt)(o.Z,{groupId:"lang-ex",defaultValue:"java",values:[{label:"Java",value:"java"},{label:"Node.js",value:"js"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("p",null,"This would include information or examples for Java")),(0,r.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("p",null,"This would include information or examples for JavaScript"))))))),(0,r.kt)("h2",{id:"inline-code"},"Inline Code"),(0,r.kt)("p",null,"To refer to a single class or method name within a sentence, place single backticks around the name."),(0,r.kt)("table",{class:"code"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Markdown"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"This comment refers to the `RemoteWebDriver` class\n")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Display"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"This comment refers to the ",(0,r.kt)("inlineCode",{parentName:"p"},"RemoteWebDriver")," class"))))),(0,r.kt)("h2",{id:"code-blocks"},"Code Blocks"),(0,r.kt)("p",null,"The best way to display code is with code blocks. Markdown will highlight each language differently, so it is helpful\nto specify which language you are using, and it's a good idea to include a title with the code block as well."),(0,r.kt)("table",{class:"code"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Markdown"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```java title="Custom Title"\nRemoteWebDriver driver = new RemoteWebDriver(url, capabilities);\n```\n')))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Display"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Custom Title"',title:'"Custom','Title"':!0},"RemoteWebDriver driver = new RemoteWebDriver(url, capabilities);\n")))))),(0,r.kt)("h2",{id:"code-references"},"Code References"),(0,r.kt)("p",null,"The Sauce Labs Open Source Team created a plugin for use with Docusaurus to allow us to reference code on GitHub\nrather than duplicating code in this repo. Ideally all code displayed in the Sauce Labs documentation points to code in\none of the ",(0,r.kt)("inlineCode",{parentName:"p"},"demo-<language>")," repos on\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/saucelabs-training/?q=demo#org-repositories"},"Sauce Labs Training GitHub Org"),'.\nWhen referencing code, include the language, "reference" and a title indicating what the sample shows.\nThe URL for the link can be for the entire file, or include specific line numbers at the end.'),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"To ensure that code examples do not go stale and can be easily updated,\nall code references should reference a tag instead of\na branch name or a commit hash. For our ",(0,r.kt)("inlineCode",{parentName:"p"},"demo-<language>")," repos, we are doing semantic versioning with ",(0,r.kt)("inlineCode",{parentName:"p"},"docs-<version>"),".\nSo, we will create and use ",(0,r.kt)("inlineCode",{parentName:"p"},"docs-1.0")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"docs-1.1"),", etc., as needed."),(0,r.kt)("p",{parentName:"admonition"},"To create a new tag in one of the Sauce Labs owned repos:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git tag -a -m 'reference for Sauce Labs documentation' docs-<version>\ngit push origin --tags\n"))),(0,r.kt)("table",{class:"code"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Markdown"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```java reference title="Example Test"\nhttps://github.com/saucelabs-training/demo-java/blob/docs-1.0/selenium-examples/src/test/java/com/saucedemo/selenium/demo/SauceBindingsTest.java#L39-L43\n```\n')))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Display"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'reference title="Example Test"',reference:!0,title:'"Example','Test"':!0},"https://github.com/saucelabs-training/demo-java/blob/docs-1.0/selenium-examples/src/test/java/com/saucedemo/selenium/demo/SauceBindingsTest.java#L39-L43\n")))))),(0,r.kt)("h2",{id:"expanding-code-blocks"},"Expanding Code Blocks"),(0,r.kt)("p",null,"If you have an especially large code block that you'd like to reference on the page, but do not want\nit to take up too much space on the page by default, we encourage the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"details")," elements."),(0,r.kt)("table",{class:"code"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HTML"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<details>\n  <summary>\n    <strong>Click here</strong> to see an example of something hidden by default.\n  </summary>\n    This is hidden by default!\n</details>\n")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Display"))),(0,r.kt)("td",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("strong",null,"Click here")," to see an example of something hidden by default."),"This is hidden by default!"))))),(0,r.kt)("h2",{id:"admonitions"},"Admonitions"),(0,r.kt)("p",null,"There are four types of ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/admonitions"},"Docusaurus admonitions"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Note - Relevant information."),(0,r.kt)("li",{parentName:"ul"},"Tip - A user should do this."),(0,r.kt)("li",{parentName:"ul"},"Caution - A user should pay attention to this."),(0,r.kt)("li",{parentName:"ul"},"Warning - A user might do something dangerous!")),(0,r.kt)("table",{class:"code"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Markdown"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},":::note\nRelevant information for you.\n:::\n\n:::tip\nYou should do this.\n:::\n\n:::caution\nYou should probably pay attention to this.\n:::\n\n:::warning\nYou are about to do something dangerous!\n:::\n")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Display"))),(0,r.kt)("td",null,(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Relevant information for you.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You should do this.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You should probably pay attention to this.")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"You are about to do something dangerous!")))))),(0,r.kt)("h2",{id:"context-limited"},"Context Limited"),(0,r.kt)("p",null,"There are two ways to provide context for users for when special conditions or limitations apply to\ndesignated information."),(0,r.kt)("h3",{id:"badges"},"Badges"),(0,r.kt)("p",null,"Badges are color-coded images that apply to entire pages or large sections of documentation:"),(0,r.kt)("p",null,"Blue badges are used for everything except for deprecated information, which is indicated with a Gold badge."),(0,r.kt)("table",{class:"code"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HTML"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<p><span className="sauceDBlue">Beta</span></p>\n<p><span className="sauceDBlue">Enterprise Only</span></p>\n<p><span className="sauceDBlue">iOS Only</span></p>\n<p><span className="sauceDBlue">Live Testing Only</span></p>\n<p><span className="sauceDBlue">Early Access</span></p>\n\n<p><span className="sauceGold">Deprecated</span></p>\n')))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Display"))),(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("span",{className:"sauceDBlue"},"Beta")),(0,r.kt)("p",null,(0,r.kt)("span",{className:"sauceDBlue"},"Enterprise Only")),(0,r.kt)("p",null,(0,r.kt)("span",{className:"sauceDBlue"},"iOS Only")),(0,r.kt)("p",null,(0,r.kt)("span",{className:"sauceDBlue"},"Live Testing Only")),(0,r.kt)("p",null,(0,r.kt)("span",{className:"sauceDBlue"},"Early Access")),(0,r.kt)("p",null,(0,r.kt)("span",{className:"sauceGold"},"Deprecated")))))),(0,r.kt)("h3",{id:"highlighted-text"},"Highlighted Text"),(0,r.kt)("p",null,"For information in a subsection or in a table that needs additional context, use a ",(0,r.kt)("inlineCode",{parentName:"p"},"span")," element with\none of the highlight classes. These can also be used to indicate that the content only applies to specific versions of a\ntechnology."),(0,r.kt)("table",{class:"code"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HTML"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<p><span class="highlight sauce-cloud">Sauce Cloud only</span></p>\n<p><span class="highlight docker">Docker only</span></p>\n<p><span class="highlight cypress">Cypress</span></p>\n<p><span class="highlight playwright">Playwright version >= 1.12</span></p>\n<p><span class="highlight testcafe">Testcafe</span></p>\n<p><span class="highlight puppeteer">Puppeteer only</span></p>\n')))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Display"))),(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("span",{class:"highlight sauce-cloud"},"Sauce Cloud only")),(0,r.kt)("p",null,(0,r.kt)("span",{class:"highlight docker"},"Docker only")),(0,r.kt)("p",null,(0,r.kt)("span",{class:"highlight cypress"},"Cypress")),(0,r.kt)("p",null,(0,r.kt)("span",{class:"highlight playwright"},"Playwright version >= 1.12")),(0,r.kt)("p",null,(0,r.kt)("span",{class:"highlight testcafe"},"Testcafe")),(0,r.kt)("p",null,(0,r.kt)("span",{class:"highlight puppeteer"},"Puppeteer only")))))),(0,r.kt)("h2",{id:"cards"},"Cards"),(0,r.kt)("p",null,"For overview pages that have four categories, we often use these Boxes. Note that you can't use Markdown inside this HTML."),(0,r.kt)("table",{class:"code"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HTML"))),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div className="box-wrapper" markdown="1">\n    <div className="box box1 card">\n        <div className="container">\n            <h2>Box 1</h2>\n            <p>Box 1 things.</p>\n            <ul>\n                <li><a href="">Link 1</a></li>\n                <li><a href="">Link 2</a></li>\n            </ul>\n        </div>\n    </div>\n    <div className="box box2 card">\n        <div className="container">\n            <h2>Box 2</h2>\n            <p>Box 2 things.</p>\n            <ul>\n                <li><a href="">Link 1</a></li>\n            </ul>\n        </div>\n    </div>\n    <div className="box box3 card">\n        <div className="container">\n            <h2>Box 3</h2>\n            <p>Box 3 things, <a href="">Link 1</a>.</p>\n            <ul>\n                <li><a href="">Link 2</a></li>\n            </ul>\n        </div>\n    </div>\n    <div className="box box4 card">\n        <div className="container">\n            <h2>Box 4</h2>\n            <p>Box 4 things.</p>\n            <ul>\n                <li><a href="">Link 1</a></li>\n                <li><a href="">Link 2</a></li>\n            </ul>\n        </div>\n    </div>\n</div>\n')))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Display"))),(0,r.kt)("td",null,(0,r.kt)("div",{className:"box-wrapper",markdown:"1"},(0,r.kt)("div",{className:"box box1 card"},(0,r.kt)("div",{className:"container"},(0,r.kt)("h2",null,"Box 1"),(0,r.kt)("p",null,"Box 1 things."),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:""},"Link 1")),(0,r.kt)("li",null,(0,r.kt)("a",{href:""},"Link 2"))))),(0,r.kt)("div",{className:"box box2 card"},(0,r.kt)("div",{className:"container"},(0,r.kt)("h2",null,"Box 2"),(0,r.kt)("p",null,"Box 2 things."),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:""},"Link 1"))))),(0,r.kt)("div",{className:"box box3 card"},(0,r.kt)("div",{className:"container"},(0,r.kt)("h2",null,"Box 3"),(0,r.kt)("p",null,"Box 3 things, ",(0,r.kt)("a",{href:""},"Link 1"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:""},"Link 2"))))),(0,r.kt)("div",{className:"box box4 card"},(0,r.kt)("div",{className:"container"},(0,r.kt)("h2",null,"Box 4"),(0,r.kt)("p",null,"Box 4 things."),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:""},"Link 1")),(0,r.kt)("li",null,(0,r.kt)("a",{href:""},"Link 2")))))))))))}k.isMDXComponent=!0}}]);
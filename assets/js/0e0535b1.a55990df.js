"use strict";(self.webpackChunkRameshBabu=self.webpackChunkRameshBabu||[]).push([[51],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,h=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(h,u(u({ref:t},c),{},{components:r})):n.createElement(h,u({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var s=2;s<o;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(7294),a=r(4334),o="tabItem_Ymn6";function u(e){var t=e.children,r=e.hidden,u=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,u),hidden:r},t)}},4866:function(e,t,r){r.d(t,{Z:function(){return E}});var n=r(7462),a=r(7294),o=r(4334),u=r(6775),l=r(1980),i=r(7392),s=r(12);function c(e){return function(e){var t,r;return null!=(t=null==(r=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:c(r);return function(e){var t=(0,i.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,o=(0,u.k6)(),i=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,l._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function h(e){var t,r,n,o,u=e.defaultValue,l=e.queryString,i=void 0!==l&&l,c=e.groupId,h=d(e),m=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:h})})),v=m[0],b=m[1],g=f({queryString:i,groupId:c}),k=g[0],y=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),r=(0,s.Nk)(t),n=r[0],o=r[1],[n,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),E=w[0],j=w[1],N=function(){var e=null!=k?k:E;return p({value:e,tabValues:h})?e:null}();return(0,a.useLayoutEffect)((function(){N&&b(N)}),[N]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:h}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),j(e)}),[y,j,h]),tabValues:h}}var m=r(2466),v=r(2389),b="tabList__CuJ",g="tabItem_LNqP";function k(e){var t=e.className,r=e.block,u=e.selectedValue,l=e.selectValue,i=e.tabValues,s=[],c=(0,m.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,r=s.indexOf(t),n=i[r].value;n!==u&&(c(t),l(n))},p=function(e){var t,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,a=s.indexOf(e.currentTarget)+1;r=null!=(n=s[a])?n:s[0];break;case"ArrowLeft":var o,u=s.indexOf(e.currentTarget)-1;r=null!=(o=s[u])?o:s[s.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},i.map((function(e){var t=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return s.push(e)},onKeyDown:p,onClick:d},l,{className:(0,o.Z)("tabs__item",g,null==l?void 0:l.className,{"tabs__item--active":u===t})}),null!=r?r:t)})))}function y(e){var t=e.lazy,r=e.children,n=e.selectedValue,o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var u=o.find((function(e){return e.props.value===n}));return u?(0,a.cloneElement)(u,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function w(e){var t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(k,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function E(e){var t=(0,v.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},7049:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),u=(r(4866),r(5162),["components"]),l={slug:"/"},i="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"Selcukes is an open source library that aims to build high-quality and highly scalable automated tests",source:"@site/docs/01_intro.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/RameshBabuPrudhvi/rameshbabuprudhvi.github.io/tree/main/docs/01_intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/"},sidebar:"defaultSidebar",next:{title:"Web Test",permalink:"/docs/test/web-test"}},c={},d=[{value:"Features",id:"features",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"What you need to start",id:"what-you-need-to-start",level:3},{value:"Java 11",id:"java-11",level:4},{value:"IDE",id:"ide",level:4},{value:"A Build Tool",id:"a-build-tool",level:4},{value:"Quick Start",id:"quick-start",level:3},{value:"So far so good?",id:"so-far-so-good",level:4}],p={toc:d};function f(e){var t=e.components,l=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Selcukes is an open source library that aims to build high-quality and highly scalable automated tests"),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Easy add new logic to your tests without causing regression issues. Control the whole execution workflow - change browsers or reuse them. Retry your failing tests to make sure that there is a real problem."),(0,o.kt)("li",{parentName:"ul"},"Automate UI actions or user scenarios on real devices or emulators with Selcukes features from test creation to execution."),(0,o.kt)("li",{parentName:"ul"},"Cross-platform screenshot and video recording on test failure")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Technologies",src:r(5490).Z,width:"1818",height:"1122"})),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("h3",{id:"what-you-need-to-start"},"What you need to start"),(0,o.kt)("h4",{id:"java-11"},"Java 11"),(0,o.kt)("p",null,"Test Automation is a development activity, so you will need some familiarity with Java.\nSelcukes uses Java 11, so make sure you have a ",(0,o.kt)("a",{parentName:"p",href:"http://www.oracle.com/technetwork/java/javase/downloads/index.html"},"JDK 11 or later")," installed."),(0,o.kt)("h4",{id:"ide"},"IDE"),(0,o.kt)("p",null,"You will need a modern IDE to work with Java.\nWe recommend IntelliJ (you can download the Community Edition, which is free, ",(0,o.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/idea/download"},"from here"),".\nBut Eclipse will work fine as well."),(0,o.kt)("h4",{id:"a-build-tool"},"A Build Tool"),(0,o.kt)("p",null,"You will also need a build tool, either Gradle or Maven, to run your tests and generate your reports.\nMake sure you have either ",(0,o.kt)("a",{parentName:"p",href:"http://www.gradle.org/downloads"},"Gradle 3.x or higher")," or ",(0,o.kt)("a",{parentName:"p",href:"https://maven.apache.org/download.cgi"},"Maven 3.3.x or higher")," installed."),(0,o.kt)("h3",{id:"quick-start"},"Quick Start"),(0,o.kt)("p",null,"The quickest way to create a new project is to take one of the starter projects on Github.\nYou can find the starter project for TestNG at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/selcukes/selcukes-java-skeleton%5Bselcukes-java-skeleton%5D"},"https://github.com/selcukes/selcukes-java-skeleton[selcukes-java-skeleton]"),"."),(0,o.kt)("p",null,"You can clone this repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/selcukes/selcukes-java-skeleton.git\ncd selcukes-java-skeleton\n")),(0,o.kt)("p",null,"Or simply ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/selcukes/selcukes-java-skeleton/archive/master.zip"},"download a zip file from here"),"."),(0,o.kt)("p",null,"If you are using Maven, you can also create a new project using one of the Selcukes ",(0,o.kt)("a",{parentName:"p",href:"https://maven.apache.org/guides/introduction/introduction-to-archetypes.html"},"Maven Archetypes"),"."),(0,o.kt)("h4",{id:"so-far-so-good"},"So far so good?"),(0,o.kt)("p",null,"The starter project comes with a demo test that you can run.\nFrom the command line, run either"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ mvn clean verify\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ gradle clean test\n")))}f.isMDXComponent=!0},5490:function(e,t,r){t.Z=r.p+"assets/images/techs-used-eafbf8d333e38a8ecc097a22cbf1dce0.png"}}]);
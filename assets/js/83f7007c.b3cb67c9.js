"use strict";(self.webpackChunkRameshBabu=self.webpackChunkRameshBabu||[]).push([[201],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,v=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(v,u(u({ref:n},c),{},{components:t})):r.createElement(v,u({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,u=new Array(o);u[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var s=2;s<o;s++)u[s]=t[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(7294),a=t(4334),o="tabItem_Ymn6";function u(e){var n=e.children,t=e.hidden,u=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,u),hidden:t},n)}},4866:function(e,n,t){t.d(n,{Z:function(){return k}});var r=t(7462),a=t(7294),o=t(4334),u=t(6775),i=t(1980),l=t(7392),s=t(12);function c(e){return function(e){var n,t;return null!=(n=null==(t=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(n=e.props)&&"object"==typeof n&&"value"in n)return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function p(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:c(t);return function(e){var n=(0,l.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function d(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,o=(0,u.k6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,i._X)(l),(0,a.useCallback)((function(e){if(l){var n=new URLSearchParams(o.location.search);n.set(l,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[l,o])]}function v(e){var n,t,r,o,u=e.defaultValue,i=e.queryString,l=void 0!==i&&i,c=e.groupId,v=p(e),m=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:v})})),b=m[0],g=m[1],h=f({queryString:l,groupId:c}),y=h[0],w=h[1],T=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,s.Nk)(n),r=t[0],o=t[1],[r,(0,a.useCallback)((function(e){n&&o.set(e)}),[n,o])]),k=T[0],j=T[1],I=function(){var e=null!=y?y:k;return d({value:e,tabValues:v})?e:null}();return(0,a.useLayoutEffect)((function(){I&&g(I)}),[I]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:v}))throw new Error("Can't select invalid tab value="+e);g(e),w(e),j(e)}),[w,j,v]),tabValues:v}}var m=t(2466),b=t(2389),g="tabList__CuJ",h="tabItem_LNqP";function y(e){var n=e.className,t=e.block,u=e.selectedValue,i=e.selectValue,l=e.tabValues,s=[],c=(0,m.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var n=e.currentTarget,t=s.indexOf(n),r=l[t].value;r!==u&&(c(n),i(r))},d=function(e){var n,t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;t=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var o,u=s.indexOf(e.currentTarget)-1;t=null!=(o=s[u])?o:s[s.length-1]}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},l.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===n?0:-1,"aria-selected":u===n,key:n,ref:function(e){return s.push(e)},onKeyDown:d,onClick:p},i,{className:(0,o.Z)("tabs__item",h,null==i?void 0:i.className,{"tabs__item--active":u===n})}),null!=t?t:n)})))}function w(e){var n=e.lazy,t=e.children,r=e.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var u=o.find((function(e){return e.props.value===r}));return u?(0,a.cloneElement)(u,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})})))}function T(e){var n=v(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement(y,(0,r.Z)({},e,n)),a.createElement(w,(0,r.Z)({},e,n)))}function k(e){var n=(0,b.Z)();return a.createElement(T,(0,r.Z)({key:String(n)},e))}},3677:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return f}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),u=t(4866),i=t(5162),l=["components"],s={id:"web-test",title:"Web Test",sidebar_position:1},c=void 0,p={unversionedId:"test/web-test",id:"test/web-test",title:"Web Test",description:'<Tabs defaultValue="java"',source:"@site/docs/02_test/web-test.md",sourceDirName:"02_test",slug:"/test/web-test",permalink:"/docs/test/web-test",draft:!1,editUrl:"https://github.com/RameshBabuPrudhvi/rameshbabuprudhvi.github.io/tree/main/docs/02_test/web-test.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"web-test",title:"Web Test",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Mobile Test",permalink:"/docs/test/mobile-test"}},d={},f=[],v={toc:f};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(u.Z,{defaultValue:"java",values:[{label:"WebTest.java",value:"java"},{label:"pom.xml",value:"pom"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package org.example;\n\nimport io.github.selcukes.core.driver.DriverManager;\nimport io.github.selcukes.core.enums.DeviceType;\nimport io.github.selcukes.core.page.WebPage;\nimport org.openqa.selenium.WebDriver;\nimport org.testng.annotations.AfterTest;\nimport org.testng.annotations.Test;\nimport org.testng.annotations.BeforeTest;\n\npublic class WebTest {\n\n    @BeforeTest\n    public void beforeSuite() {\n        GridRunner.startSelenium(DriverType.CHROME);\n    }\n\n    @Test\n    public void remoteTest() {\n        WebDriver driver = DriverManager.createDriver(DeviceType.BROWSER);\n        WebPage page = new WebPage(driver);\n        page.open("https://www.google.com/")\n            .assertThat().title("Google");\n    }\n\n    @AfterTest\n    public void afterTest() {\n        DriverManager.removeDriver();\n    }\n}\n'))),(0,o.kt)(i.Z,{value:"pom",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>org.example</groupId>\n    <artifactId>examples</artifactId>\n    <version>0.1-SNAPSHOT</version>\n    <name>Selcukes Java Examples</name>\n    <properties>\n        <selcukes.version>2.1.0</selcukes.version>\n        <lombok.version>1.18.24</lombok.version>\n        <slfj4.version>2.17.2</slfj4.version>\n\n        <maven.compiler.source>11</maven.compiler.source>\n        <maven.compiler.target>11</maven.compiler.target>\n    </properties>\n    <dependencies>\n        <dependency>\n            <groupId>io.github.selcukes</groupId>\n            <artifactId>selcukes-java</artifactId>\n            <version>${selcukes.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.projectlombok</groupId>\n            <artifactId>lombok</artifactId>\n            <version>${lombok.version}</version>\n            <scope>provided</scope>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.logging.log4j</groupId>\n            <artifactId>log4j-slf4j-impl</artifactId>\n            <version>${slfj4.version}</version>\n        </dependency>\n    </dependencies>\n</project>\n')))))}m.isMDXComponent=!0}}]);
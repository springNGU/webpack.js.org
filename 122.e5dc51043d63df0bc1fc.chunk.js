(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{414:function(n,s,a){"use strict";a.r(s),s.default='<p><a href="https://npmjs.com/package/val-loader"><img src="https://img.shields.io/npm/v/val-loader.svg" alt="npm"></a>\n<a href="https://nodejs.org/"><img src="https://img.shields.io/node/v/val-loader.svg" alt="node"></a>\n<a href="https://david-dm.org/webpack-contrib/val-loader"><img src="https://david-dm.org/webpack-contrib/val-loader.svg" alt="deps"></a>\n<a href="https://github.com/webpack-contrib/val-loader/actions"><img src="https://github.com/webpack-contrib/val-loader/workflows/val-loader/badge.svg" alt="tests"></a>\n<a href="https://codecov.io/gh/webpack-contrib/val-loader"><img src="https://codecov.io/gh/webpack-contrib/val-loader/branch/master/graph/badge.svg" alt="coverage"></a>\n<a href="https://gitter.im/webpack/webpack"><img src="https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg" alt="chat"></a>\n<a href="https://packagephobia.now.sh/result?p=val-loader"><img src="https://packagephobia.now.sh/badge?p=val-loader" alt="size"></a></p>\n<p>A webpack loader which executes a given module, and returns the result of the\nexecution at build-time, when the module is required in the bundle. In this way,\nthe loader changes a module from code to a result.</p>\n<p>Another way to view <code>val-loader</code>, is that it allows a user a way to make their\nown custom loader logic, without having to write a custom loader.</p>\n<p>The target module is called with two arguments: <code>(options, loaderContext)</code></p>\n<ul>\n<li><code>options</code>: The loader options (for instance provided in the webpack config. See the <a href="#examples">example</a> below).</li>\n<li><code>loaderContext</code>: <a href="/api/loaders/#the-loader-context">The loader context</a>.</li>\n</ul>\n<h2 id="getting-started">Getting Started<a href="#getting-started" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>To begin, you\'ll need to install <code>val-loader</code>:</p>\n<pre><code class="hljs language-console">$ npm install val-loader --save-dev\n</code></pre>\n<p>Then add the loader to your <code>webpack</code> config. For example:</p>\n<p><strong>target-file.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span>options<span class="token punctuation">,</span> loaderContext<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token punctuation">:</span> <span class="token string">\'module.exports = 42;\'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/target-file.js$/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`val-loader`</span></span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p><strong>src/entry.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> answer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'target-file\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>And run <code>webpack</code> via your preferred method.</p>\n<h2 id="return-object-properties">Return Object Properties<a href="#return-object-properties" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Targeted modules of this loader must export a <code>Function</code> that returns an object,\nor a <code>Promise</code> resolving an object (e.g. async function), containing a <code>code</code> property at a minimum, but can\ncontain any number of additional properties.</p>\n<h3 id="code"><code>code</code><a href="#code" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>String|Buffer</code>\nDefault: <code>undefined</code>\n<em>Required</em></p>\n<p>Code passed along to webpack or the next loader that will replace the module.</p>\n<h3 id="sourcemap"><code>sourceMap</code><a href="#sourcemap" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>Object</code>\nDefault: <code>undefined</code></p>\n<p>A source map passed along to webpack or the next loader.</p>\n<h3 id="ast"><code>ast</code><a href="#ast" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>Array[Object]</code>\nDefault: <code>undefined</code></p>\n<p>An <a href="https://en.wikipedia.org/wiki/Abstract_syntax_tree">Abstract Syntax Tree</a>\nthat will be passed to the next loader. Useful to speed up the build time if the\nnext loader uses the same AST.</p>\n<h3 id="dependencies"><code>dependencies</code><a href="#dependencies" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>Array[String]</code>\nDefault: <code>[]</code></p>\n<p>An array of absolute, native paths to file dependencies that should be watched\nby webpack for changes.</p>\n<p>Dependencies can also be added using <a href="/api/loaders/#thisadddependency"><code>loaderContext.addDependency(file: string)</code></a>.</p>\n<h3 id="contextdependencies"><code>contextDependencies</code><a href="#contextdependencies" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>Array[String]</code>\nDefault: <code>[]</code></p>\n<p>An array of absolute, native paths to directory dependencies that should be\nwatched by webpack for changes.</p>\n<p>Context dependencies can also be added using <a href="/api/loaders/#thisaddcontextdependency"><code>loaderContext.addContextDependency(directory: string)</code></a>.</p>\n<h3 id="cacheable"><code>cacheable</code><a href="#cacheable" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>Boolean</code>\nDefault: <code>false</code></p>\n<p>If <code>true</code>, specifies that the code can be re-used in watch mode if none of the\n<code>dependencies</code> have changed.</p>\n<h2 id="examples">Examples<a href="#examples" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h3 id="simple">Simple<a href="#simple" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>In this example the loader is configured to operator on a file name of\n<code>years-in-ms.js</code>, execute the code, and store the result in the bundle as the\nresult of the execution. This example passes <code>years</code> as an <code>option</code>, which\ncorresponds to the <code>years</code> parameter in the target module exported function:</p>\n<p><strong>years-in-ms.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">yearsInMs</span><span class="token punctuation">(</span><span class="token punctuation">{</span> years <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> value <span class="token operator">=</span> years <span class="token operator">*</span> <span class="token number">365</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// NOTE: this return value will replace the module in the bundle</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    cacheable<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    code<span class="token punctuation">:</span> <span class="token string">\'module.exports = \'</span> <span class="token operator">+</span> value<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'src/years-in-ms.js\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token string">\'val-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n              years<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>In the bundle, requiring the module then returns:</p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> tenYearsMs <span class="token keyword">from</span> <span class="token string">\'years-in-ms\'</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tenYearsMs<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 315360000000</span></code></pre>\n<h3 id="modernizr">Modernizr<a href="#modernizr" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Example shows how to build <a href="https://www.npmjs.com/package/modernizr"><code>modernizr</code></a>.</p>\n<p><strong>entry.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> modenizr <span class="token keyword">from</span> <span class="token string">\'./modernizr.js\'</span><span class="token punctuation">;</span></code></pre>\n<p><strong>modernizr.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> modernizr <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'modernizr\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// It is impossible to throw an error because modernizr causes the process.exit(1)</span>\n    modernizr<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>output<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        cacheable<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        code<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`var modernizr; var hadGlobal = \'Modernizr\' in window; var oldGlobal = window.Modernizr; </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>output<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> modernizr = window.Modernizr; if (hadGlobal) { window.Modernizr = oldGlobal; } else { delete window.Modernizr; } export default modernizr;`</span></span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'src\'</span><span class="token punctuation">,</span> <span class="token string">\'modernizr.js\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token string">\'val-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n              minify<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n              options<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'setClasses\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n              <span class="token string">\'feature-detects\'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n                <span class="token string">\'test/css/flexbox\'</span><span class="token punctuation">,</span>\n                <span class="token string">\'test/es6/promises\'</span><span class="token punctuation">,</span>\n                <span class="token string">\'test/serviceworker\'</span><span class="token punctuation">,</span>\n              <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="figlet">Figlet<a href="#figlet" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Example shows how to build <a href="https://www.npmjs.com/package/figlet"><code>figlet</code></a>.</p>\n<p><strong>entry.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> figlet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./figlet.js\'</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>figlet<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p><strong>figlet.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> figlet <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'figlet\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">wrapOutput</span><span class="token punctuation">(</span>output<span class="token punctuation">,</span> config<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> figletOutput <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>textBefore<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    figletOutput <span class="token operator">+=</span> <span class="token function">encodeURI</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>config<span class="token punctuation">.</span>textBefore<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  output<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'\\n\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    figletOutput <span class="token operator">+=</span> <span class="token function">encodeURI</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>line<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>textAfter<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    figletOutput <span class="token operator">+=</span> <span class="token function">encodeURI</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>config<span class="token punctuation">.</span>textAfter<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`module.exports = decodeURI("</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>figletOutput<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">");`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nmodule<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> defaultConfig <span class="token operator">=</span> <span class="token punctuation">{</span>\n    fontOptions<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      font<span class="token punctuation">:</span> <span class="token string">\'ANSI Shadow\'</span><span class="token punctuation">,</span>\n      horizontalLayout<span class="token punctuation">:</span> <span class="token string">\'default\'</span><span class="token punctuation">,</span>\n      kerning<span class="token punctuation">:</span> <span class="token string">\'default\'</span><span class="token punctuation">,</span>\n      verticalLayout<span class="token punctuation">:</span> <span class="token string">\'default\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    text<span class="token punctuation">:</span> <span class="token string">\'FIGLET-LOADER\'</span><span class="token punctuation">,</span>\n    textAfter<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n    textBefore<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> config <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> defaultConfig<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    figlet<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>text<span class="token punctuation">,</span> config<span class="token punctuation">.</span>fontOptions<span class="token punctuation">,</span> <span class="token punctuation">(</span>error<span class="token punctuation">,</span> output<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n\n      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        cacheable<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        code<span class="token punctuation">:</span> <span class="token string">\'module.exports = \'</span> <span class="token operator">+</span> <span class="token function">wrapOutput</span><span class="token punctuation">(</span>output<span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'src\'</span><span class="token punctuation">,</span> <span class="token string">\'figlet.js\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token string">\'val-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n              text<span class="token punctuation">:</span> <span class="token string">\'FIGLET\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2 id="contributing">Contributing<a href="#contributing" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Please take a moment to read our contributing guidelines if you haven\'t yet done so.</p>\n<p><a href="https://github.com/webpack-contrib/val-loader/blob/master/.github/CONTRIBUTING.md">CONTRIBUTING</a></p>\n<h2 id="license">License<a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><a href="https://github.com/webpack-contrib/val-loader/blob/master/LICENSE">MIT</a></p>\n'}}]);
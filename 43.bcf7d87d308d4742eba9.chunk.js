(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{333:function(n,s,a){"use strict";a.r(s),s.default='<p>入口对象是用于 webpack 查找开始构建 bundle 的地方。上下文是入口文件所处的目录的绝对路径的字符串。</p>\n<h2 id="context"><code>context</code><a href="#context" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>string</code></p>\n<p>基础目录，<strong>绝对路径</strong>，用于从配置中解析入口点(entry point)和 加载器(loader)。</p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  context<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'app\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>默认使用当前目录，但是推荐在配置中传入一个值。这使得你的配置独立于 CWD(current working directory, 当前工作目录)。</p>\n<hr>\n<h2 id="entry"><code>entry</code><a href="#entry" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><code>string</code> <code>[string]</code> <code>object = { &#x3C;key> string | [string] | object = { import string | [string], dependOn string | [string], filename string }}</code> <code>(function() => string | [string] | object = { &#x3C;key> string | [string] } | object = { import string | [string], dependOn string | [string], filename string })</code></p>\n<p>开始应用程序打包过程的一个或多个起点。如果传入数组，则会处理所有条目。</p>\n<p>动态加载的模块 <strong>不是</strong> 入口起点。</p>\n<p>简单规则：每个 HTML 页面都有一个入口起点。单页应用(SPA)：一个入口起点，多页应用(MPA)：多个入口起点。</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  entry<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    home<span class="token punctuation">:</span> <span class="token string">\'./home.js\'</span><span class="token punctuation">,</span>\n    about<span class="token punctuation">:</span> <span class="token string">\'./about.js\'</span><span class="token punctuation">,</span>\n    contact<span class="token punctuation">:</span> <span class="token string">\'./contact.js\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="naming">Naming<a href="#naming" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>如果传入一个字符串或字符串数组，chunk 会被命名为 <code>main</code>。如果传入一个对象，则每个属性的键(key)会是 chunk 的名称，该属性的值描述了 chunk 的入口点。</p>\n<h3 id="entry-descriptor">Entry descriptor<a href="#entry-descriptor" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>如果传入一个对象，对象的属性的值可以是一个字符串、字符串数组或者一个描述符(descriptor):</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  entry<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    home<span class="token punctuation">:</span> <span class="token string">\'./home.js\'</span><span class="token punctuation">,</span>\n    shared<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'react\'</span><span class="token punctuation">,</span> <span class="token string">\'react-dom\'</span><span class="token punctuation">,</span> <span class="token string">\'redux\'</span><span class="token punctuation">,</span> <span class="token string">\'react-redux\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    catalog<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token keyword">import</span><span class="token punctuation">:</span> <span class="token string">\'./catalog.js\'</span><span class="token punctuation">,</span>\n      filename<span class="token punctuation">:</span> <span class="token string">\'pages/catalog.js\'</span><span class="token punctuation">,</span>\n      dependOn<span class="token punctuation">:</span><span class="token string">\'shared\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    personal<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      <span class="token keyword">import</span><span class="token punctuation">:</span> <span class="token string">\'./personal.js\'</span><span class="token punctuation">,</span>\n      filename<span class="token punctuation">:</span> <span class="token string">\'pages/personal.js\'</span><span class="token punctuation">,</span>\n      dependOn<span class="token punctuation">:</span><span class="token string">\'shared\'</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>描述符语法可以用来传入额外的选项给入口。</p>\n<h3 id="output-filename">Output filename<a href="#output-filename" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>默认情况下，入口 chunk 的输出文件名是从 <a href="/configuration/output/#outputfilename"><code>output.filename</code></a> 中提取出来的，但你可以为特定的入口指定一个自定义的输出文件名。</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  entry<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    app<span class="token punctuation">:</span> <span class="token string">\'./app.js\'</span><span class="token punctuation">,</span>\n    home<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token keyword">import</span><span class="token punctuation">:</span> <span class="token string">\'./contact.js\'</span><span class="token punctuation">,</span> filename<span class="token punctuation">:</span> <span class="token string">\'pages/[name][ext]\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    about<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token keyword">import</span><span class="token punctuation">:</span> <span class="token string">\'./about.js\'</span><span class="token punctuation">,</span> filename<span class="token punctuation">:</span> <span class="token string">\'pages/[name][ext]\'</span> <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>描述符语法在这里被用来将 <code>filename</code>—选项传递给指定的入口点。</p>\n<h3 id="dependencies">Dependencies<a href="#dependencies" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>默认情况下，每个入口 chunk 保存了全部其用的模块(modules)。使用 <code>dependOn</code>—选项你可以与另一个入口 chunk 共享模块:</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  entry<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    app<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token keyword">import</span><span class="token punctuation">:</span> <span class="token string">\'./app.js\'</span><span class="token punctuation">,</span> dependOn<span class="token punctuation">:</span> <span class="token string">\'react-vendors\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token string">\'react-vendors\'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'react\'</span><span class="token punctuation">,</span> <span class="token string">\'react-dom\'</span><span class="token punctuation">,</span> <span class="token string">\'prop-types\'</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p><code>app</code> 这个 chunk 就不会包含 <code>react-vendors</code> 拥有的模块了.</p>\n<p>你也可以使用数组为一个入口指定多个文件：</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  entry<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    app<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token keyword">import</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'./app.js\'</span><span class="token punctuation">,</span> <span class="token string">\'./app2.js\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dependOn<span class="token punctuation">:</span> <span class="token string">\'react-vendors\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token string">\'react-vendors\'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'react\'</span><span class="token punctuation">,</span> <span class="token string">\'react-dom\'</span><span class="token punctuation">,</span> <span class="token string">\'prop-types\'</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="dynamic-entry">Dynamic entry<a href="#dynamic-entry" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>如果传入一个函数，那么它将会在每次 <a href="/api/compiler-hooks/#make">make</a> 事件中被调用。</p>\n<blockquote>\n<p>要注意的是，make 事件在 webpack 启动和每当 <a href="/configuration/watch/">监听文件变化</a> 时都会触发。</p>\n</blockquote>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  entry<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">\'./demo\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>或者</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  entry<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'./demo\'</span><span class="token punctuation">,</span> <span class="token string">\'./demo2\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>例如，你可以使用动态入口来从外部来源（远程服务器，文件系统内容或者数据库）获取真正的入口：</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function">entry</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">fetchPathsFromSomeExternalSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回一个会被用像 [\'src/main-layout.js\', \'src/admin-layout.js\'] 的东西 resolve 的 promise</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>当和 <a href="/configuration/output/#outputlibrary"><code>output.library</code></a> 选项结合：如果传入的是一个数组，只有数组的最后一个条目会被导出。</p>\n'}}]);
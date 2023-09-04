import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c,a as n,b as e,d as s,e as p}from"./app-bede4f5a.js";const l={},d=p(`<h1 id="page-visibility-api" tabindex="-1"><a class="header-anchor" href="#page-visibility-api" aria-hidden="true">#</a> Page Visibility API</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>有时候，开发者需要知道，用户正在离开页面。常用的方法是监听下面三个事件。</p><blockquote><ul><li><code>pagehide</code></li><li><code>beforeunload</code></li><li><code>unload</code></li></ul></blockquote><p>但是，这些事件在手机上可能不会触发，页面就直接关闭了。因为手机系统可以将一个进程直接转入后台，然后杀死。</p><blockquote><ul><li>用户点击了一条系统通知，切换到另一个 App。</li><li>用户进入任务切换窗口，切换到另一个 App。</li><li>用户点击了 Home 按钮，切换回主屏幕。</li><li>操作系统自动切换到另一个 App（比如，收到一个电话）。</li></ul></blockquote><p>上面这些情况，都会导致手机将浏览器进程切换到后台，然后为了节省资源，可能就会杀死浏览器进程。</p><p>以前，页面被系统切换，以及系统清除浏览器进程，是无法监听到的。开发者想要指定，任何一种页面卸载情况下都会执行的代码，也是无法做到的。为了解决这个问题，就诞生了 Page Visibility API。不管手机或桌面电脑，所有情况下，这个 API 都会监听到页面的可见性发生变化。</p><p>这个新的 API 的意义在于，通过监听网页的可见性，可以预判网页的卸载，还可以用来节省资源，减缓电能的消耗。比如，一旦用户不看网页，下面这些网页行为都是可以暂停的。</p><blockquote><ul><li>对服务器的轮询</li><li>网页动画</li><li>正在播放的音频或视频</li></ul></blockquote><h2 id="document-visibilitystate" tabindex="-1"><a class="header-anchor" href="#document-visibilitystate" aria-hidden="true">#</a> document.visibilityState</h2><p>这个 API 主要在<code>document</code>对象上，新增了一个<code>document.visibilityState</code>属性。该属性返回一个字符串，表示页面当前的可见性状态，共有三个可能的值。</p><blockquote><ul><li><code>hidden</code>：页面彻底不可见。</li><li><code>visible</code>：页面至少一部分可见。</li><li><code>prerender</code>：页面即将或正在渲染，处于不可见状态。</li></ul></blockquote><p>其中，<code>hidden</code>状态和<code>visible</code>状态是所有浏览器都必须支持的。<code>prerender</code>状态只在支持“预渲染”的浏览器上才会出现，比如 Chrome 浏览器就有预渲染功能，可以在用户不可见的状态下，预先把页面渲染出来，等到用户要浏览的时候，直接展示渲染好的网页。</p><p>只要页面可见，哪怕只露出一个角，<code>document.visibilityState</code>属性就返回<code>visible</code>。只有以下四种情况，才会返回<code>hidden</code>。</p><blockquote><ul><li>浏览器最小化。</li><li>浏览器没有最小化，但是当前页面切换成了背景页。</li><li>浏览器将要卸载（unload）页面。</li><li>操作系统触发锁屏屏幕。</li></ul></blockquote><p>可以看到，上面四种场景涵盖了页面可能被卸载的所有情况。也就是说，页面卸载之前，<code>document.visibilityState</code>属性一定会变成<code>hidden</code>。事实上，这也是设计这个 API 的主要目的。</p><p>另外，早期版本的 API，这个属性还有第四个值<code>unloaded</code>，表示页面即将卸载，现在已经被废弃了。</p><p>注意，<code>document.visibilityState</code>属性只针对顶层窗口，内嵌的<code>&lt;iframe&gt;</code>页面的<code>document.visibilityState</code>属性由顶层窗口决定。使用 CSS 属性隐藏<code>&lt;iframe&gt;</code>页面（比如<code>display: none;</code>），并不会影响内嵌页面的可见性。</p><h2 id="document-hidden" tabindex="-1"><a class="header-anchor" href="#document-hidden" aria-hidden="true">#</a> document.hidden</h2><p>由于历史原因，这个 API 还定义了<code>document.hidden</code>属性。该属性只读，返回一个布尔值，表示当前页面是否可见。</p><p>当<code>document.visibilityState</code>属性返回<code>visible</code>时，<code>document.hidden</code>属性返回<code>false</code>；其他情况下，都返回<code>true</code>。</p><p>该属性只是出于历史原因而保留的，只要有可能，都应该使用<code>document.visibilityState</code>属性，而不是使用这个属性。</p><h2 id="visibilitychange-事件" tabindex="-1"><a class="header-anchor" href="#visibilitychange-事件" aria-hidden="true">#</a> visibilitychange 事件</h2><p>只要<code>document.visibilityState</code>属性发生变化，就会触发<code>visibilitychange</code>事件。因此，可以通过监听这个事件（通过<code>document.addEventListener()</code>方法或<code>document.onvisibilitychange</code>属性），跟踪页面可见性的变化。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;visibilitychange&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 用户离开了当前页面</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>visibilityState <span class="token operator">===</span> <span class="token string">&#39;hidden&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&#39;页面不可见&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 用户打开或回到页面</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>visibilityState <span class="token operator">===</span> <span class="token string">&#39;visible&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&#39;页面可见&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码是 Page Visibility API 的最基本用法，可以监听可见性变化。</p><p>下面是另一个例子，一旦页面不可见，就暂停视频播放。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> vidElem <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;video-demo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;visibilitychange&#39;</span><span class="token punctuation">,</span> startStopVideo<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">startStopVideo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>visibilityState <span class="token operator">===</span> <span class="token string">&#39;hidden&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vidElem<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>visibilityState <span class="token operator">===</span> <span class="token string">&#39;visible&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vidElem<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面卸载" tabindex="-1"><a class="header-anchor" href="#页面卸载" aria-hidden="true">#</a> 页面卸载</h2><p>下面专门讨论一下，如何正确监听页面卸载。</p><p>页面卸载可以分成三种情况。</p><blockquote><ul><li>页面可见时，用户关闭 Tab 页或浏览器窗口。</li><li>页面可见时，用户在当前窗口前往另一个页面。</li><li>页面不可见时，用户或系统关闭浏览器窗口。</li></ul></blockquote><p>这三种情况，都会触发<code>visibilitychange</code>事件。前两种情况，该事件在用户离开页面时触发；最后一种情况，该事件在页面从可见状态变为不可见状态时触发。</p><p>由此可见，<code>visibilitychange</code>事件比<code>pagehide</code>、<code>beforeunload</code>、<code>unload</code>事件更可靠，所有情况下都会触发（从<code>visible</code>变为<code>hidden</code>）。因此，可以只监听这个事件，运行页面卸载时需要运行的代码，不用监听后面那三个事件。</p><p>甚至可以这样说，<code>unload</code>事件在任何情况下都不必监听，<code>beforeunload</code>事件只有一种适用场景，就是用户修改了表单，没有提交就离开当前页面。另一方面，指定了这两个事件的监听函数，浏览器就不会缓存当前页面。</p><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,37),u={href:"https://w3c.github.io/page-visibility/",target:"_blank",rel:"noopener noreferrer"},r={href:"http://davidwalsh.name/page-visibility",target:"_blank",rel:"noopener noreferrer"},k={href:"http://www.html5rocks.com/en/tutorials/pagevisibility/intro/",target:"_blank",rel:"noopener noreferrer"},v={href:"http://blogs.msdn.com/b/ie/archive/2011/07/08/using-pc-hardware-more-efficiently-in-html5-new-web-performance-apis-part-2.aspx",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/",target:"_blank",rel:"noopener noreferrer"};function h(m,g){const a=t("ExternalLinkIcon");return o(),c("div",null,[d,n("ul",null,[n("li",null,[n("a",u,[e("Page Visibility Level 2"),s(a)]),e(", W3C")]),n("li",null,[n("a",r,[e("Page Visibility API"),s(a)]),e(", David Walsh")]),n("li",null,[n("a",k,[e("Using the pageVisbility API"),s(a)]),e(", Joe Marini")]),n("li",null,[n("a",v,[e("Using PC Hardware more efficiently in HTML5: New Web Performance APIs, Part 2"),s(a)]),e(", Jatinder Mann")]),n("li",null,[n("a",b,[e("Don't lose user and app state, use Page Visibility"),s(a)]),e(", Ilya Grigorik")])])])}const _=i(l,[["render",h],["__file","page-visibility.html.vue"]]);export{_ as default};

import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-bede4f5a.js";const p={},t=e(`<h1 id="响应式布局-media-query" tabindex="-1"><a class="header-anchor" href="#响应式布局-media-query" aria-hidden="true">#</a> 响应式布局：media query</h1><p>响应式布局（responsive）的含义是，网页会根据不同的媒介，自动采用不同的 CSS 规则。它主要通过 media 命令实现。</p><p><code>media</code>命令用来规定 CSS 规则生效的媒介。<code>@media</code>命令后面使用关键词，指定生效的条件。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> print</span> <span class="token punctuation">{</span>
   …
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> screen</span> <span class="token punctuation">{</span>
   …
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，打印和显示屏分别使用不同的 CSS 规则。</p><p>媒介名称之前，还可以使用<code>not</code>和<code>only</code>关键字。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">not</span> screen</span> <span class="token punctuation">{</span>
   …
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen</span> <span class="token punctuation">{</span>
   …
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@media</code>还允许使用表达式，指定 CSS 生效的条件。表达式可以放在圆括号之中。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>media</code>命令规定，只有在屏幕宽度大于等于<code>800px</code>时，<code>p</code>元素的大小才等于<code>18px</code>。</p><p>如果同时需要满足多个条件，可以使用<code>and</code>关键字。下面的例子是为不同的设备指定不同的背景图片。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* default is desktop image */</span>
<span class="token selector">.someElement</span> <span class="token punctuation">{</span> <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>sunset.jpg<span class="token punctuation">)</span></span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span> <span class="token punctuation">:</span> 1024px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.someElement</span> <span class="token punctuation">{</span> <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>sunset-small.jpg<span class="token punctuation">)</span></span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是另一个例子。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.component__header</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
  <span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 3rem
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span> <span class="token punctuation">:</span> 603px<span class="token punctuation">)</span>
  <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-height</span> <span class="token punctuation">:</span> 966px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token comment">/* Styles here */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),c=[t];function i(l,o){return s(),a("div",null,c)}const r=n(p,[["render",i],["__file","media-query.html.vue"]]);export{r as default};

import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-bede4f5a.js";const p={},c=e(`<h1 id="盒状模型" tabindex="-1"><a class="header-anchor" href="#盒状模型" aria-hidden="true">#</a> 盒状模型</h1><h2 id="width" tabindex="-1"><a class="header-anchor" href="#width" aria-hidden="true">#</a> width</h2><p><code>width: auto</code>表示父元素提供的所有宽度（100%）。</p><h2 id="max-width" tabindex="-1"><a class="header-anchor" href="#max-width" aria-hidden="true">#</a> max-width</h2><p><code>max-width</code>设为<code>none</code>，可以让元素占满父元素的整个宽度。</p><h2 id="overflow" tabindex="-1"><a class="header-anchor" href="#overflow" aria-hidden="true">#</a> overflow</h2><p><code>overflow</code>属性指定如果元素的大小超出容器时的行为。</p><ul><li><code>visible</code>：默认值，表示溢出的部分可见</li><li><code>hidden</code>：表示溢出的部分不可见</li><li><code>scroll</code>：表示发生溢出时，会显示滚动条，用户可以拖动滚动条，看到溢出的部分</li></ul><h2 id="clip" tabindex="-1"><a class="header-anchor" href="#clip" aria-hidden="true">#</a> clip</h2><p><code>clip</code>规则指定元素超出容器大小时，具体显示哪个部分。它只对绝对定位（absolute）和固定定位（fixed）的元素有效。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">clip</span><span class="token punctuation">:</span> <span class="token function">rect</span><span class="token punctuation">(</span>0px<span class="token punctuation">,</span> 100px<span class="token punctuation">,</span> 100px<span class="token punctuation">,</span> 0px<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>react</code>函数四个参数的含义如下。</p><ul><li>第一个参数：剪切后的顶边距离容器的顶边的距离</li><li>第二个参数：剪切后的右边界距离容器的左边界的距离</li><li>第三个参数：剪切后的底边距离容器的顶边的距离</li><li>第四个参数：剪切后的左边界距离容器的左边界的距离</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">clip</span><span class="token punctuation">:</span> <span class="token function">rect</span><span class="token punctuation">(</span>auto 100px auto auto<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该规则已经被废除，但是浏览器还是普遍支持。</p><h2 id="clip-path" tabindex="-1"><a class="header-anchor" href="#clip-path" aria-hidden="true">#</a> clip-path</h2><p><code>clip-path</code>是<code>clip</code>规则的继承者，用来剪切元素的大小。它对所有定位方式都适用。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">clip</span><span class="token punctuation">:</span> <span class="token function">rect</span><span class="token punctuation">(</span>110px<span class="token punctuation">,</span> 160px<span class="token punctuation">,</span> 170px<span class="token punctuation">,</span> 60px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* 等同于 */</span>
<span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>10px 20px 30px 40px<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>clip-path</code>支持多种路径定义方式。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.clip-me</span> <span class="token punctuation">{</span>

  <span class="token comment">/* referencing path from an inline SVG &lt;clipPath&gt; */</span>
  <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>#c1<span class="token punctuation">)</span></span><span class="token punctuation">;</span>

  <span class="token comment">/* referencing path from external SVG */</span>
  <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>path.svg#c1<span class="token punctuation">)</span></span><span class="token punctuation">;</span>

  <span class="token comment">/* polygon */</span>
  <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">polygon</span><span class="token punctuation">(</span>5% 5%<span class="token punctuation">,</span> 100% 0%<span class="token punctuation">,</span> 100% 75%<span class="token punctuation">,</span> 75% 75%<span class="token punctuation">,</span> 75% 100%<span class="token punctuation">,</span> 50% 75%<span class="token punctuation">,</span> 0% 75%<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/* circle */</span>
  <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">circle</span><span class="token punctuation">(</span>30px at 35px 35px<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/* ellipse */</span>
  <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">ellipse</span><span class="token punctuation">(</span>65px 30px at 125px 40px<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/* inset-rectangle() may replace inset() ? */</span>
  <span class="token comment">/* rectangle() coming in SVG 2 */</span>

  <span class="token comment">/* rounded corners... not sure if a thing anymore */</span>
  <span class="token property">clip-path</span><span class="token punctuation">:</span> <span class="token function">inset</span><span class="token punctuation">(</span>10% 10% 10% 10% round 20%<span class="token punctuation">,</span> 20%<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="box-sizing" tabindex="-1"><a class="header-anchor" href="#box-sizing" aria-hidden="true">#</a> box-sizing</h2><p><code>box-sizing</code>指定盒状模型的宽度范围。</p><ul><li><code>border-box</code>：宽度包括padding和border</li><li><code>content-box</code>：默认值，只包括内容区的宽度，不包括padding和border</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*, *:after, *:before</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">-moz-box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object-fit" tabindex="-1"><a class="header-anchor" href="#object-fit" aria-hidden="true">#</a> object-fit</h2><p><code>object-fit</code>命令指定一个元素的大小应该如何适应它的容器，主要用于图像。它可以取以下的值。</p><ul><li>fill：容器的宽度和高度就是元素的宽度和高度，会截去溢出的部分。</li><li>contain：元素会填满容器，不会改变长宽比，可能会有溢出。</li><li>cover：元素会填满容器，可能会改变长宽比，但不会有溢出。</li><li>none：元素不会改变的大小，具体的展示效果由默认算法决定</li><li>scale-down：展示效果会选择<code>none</code>或<code>contain</code>之中，对象尺寸较小的一个</li><li>inherit：使用父元素的值</li><li>initial：使用浏览器的默认值</li><li>unset：这个属性是<code>inherit</code>和<code>initial</code>的结合，如果该元素继承父元素，就采用<code>inherit</code>，否则采用<code>initial</code></li></ul>`,27),i=[c];function t(o,l){return s(),a("div",null,i)}const r=n(p,[["render",t],["__file","block.html.vue"]]);export{r as default};

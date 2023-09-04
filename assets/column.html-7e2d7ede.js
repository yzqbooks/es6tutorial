import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o,c as l,a as e,b as n,d as i,e as d}from"./app-bede4f5a.js";const t={},u=d(`<h1 id="多栏式布局" tabindex="-1"><a class="header-anchor" href="#多栏式布局" aria-hidden="true">#</a> 多栏式布局</h1><p>多栏式布局是 CSS 原生提供的一种内容分栏显示的解决方案。</p><h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h2><p><code>column-count</code>属性指定<code>div</code>的子元素分成四栏。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">column-count</span><span class="token punctuation">:</span>4<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>column-width</code>属性指定每一栏的宽度。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">column-width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>column-width</code>属性指定每一栏的宽度是100像素。如果<code>div</code>元素的宽度是800像素，那么内容就将分成8栏。</p><p>注意，<code>column-count</code>与<code>column-width</code>不应同时使用，它们之中同时只能有一个属性生效。另外，设定<code>position: fixed</code>和<code>position: absolute</code>子元素，将不纳入多栏式布局的栏计算。</p><h2 id="间隔" tabindex="-1"><a class="header-anchor" href="#间隔" aria-hidden="true">#</a> 间隔</h2><p>多栏式布局对栏与栏之间的间隔，提供了如下属性。</p><ul><li>column-gap：间隔宽度</li><li>column-rule-color：间隔线的颜色</li><li>column-rule-style：间隔线的样式，比如<code>dashed</code>、<code>dotted</code>等，默认是<code>solid</code></li><li>column-rule-width：间隔线本身的宽度</li><li>column-rule：<code>column-rule-color</code>、<code>column-rule-style</code>、<code>column-rule-width</code>这三个属性的快捷形式。</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
	<span class="token property">column-gap</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
	<span class="token property">column-rule</span><span class="token punctuation">:</span> 2px solid #33c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码指定栏与栏之间的间隔是<code>20px</code>，间隔线的样式是<code>2px solid #33c</code>。</p><h2 id="column-span" tabindex="-1"><a class="header-anchor" href="#column-span" aria-hidden="true">#</a> column-span</h2><p><code>column-span</code>属性指定某个子元素可以占据多栏的宽度，比如标题。它只能设两个值<code>all</code>和<code>none</code>。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">h2</span> <span class="token punctuation">{</span>
  <span class="token property">column-span</span><span class="token punctuation">:</span> all<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="column-fill" tabindex="-1"><a class="header-anchor" href="#column-fill" aria-hidden="true">#</a> column-fill</h2><p><code>column-fill</code>属性指定内容如何在多栏之间分配。</p><p>默认值<code>balance</code>表示栏与栏是等高的，<code>auto</code>表示只占据内容所需的空间。</p><h2 id="内容的断点" tabindex="-1"><a class="header-anchor" href="#内容的断点" aria-hidden="true">#</a> 内容的断点</h2><p>浏览器会自己决定，内容在栏与栏之间如何断点。下面的三个属性可以调整这个行为。</p><p><code>break-inside</code>属性决定子元素内部如何断点。它可以取以下值。</p><ul><li>auto：默认值，表示子元素内部可以插入断点</li><li>avoid：避免在子元素内部插入所有类型（page、column、region）的断点</li><li>avoid-column：避免子元素内部插入栏与栏的断点</li></ul><p><code>break-before</code>属性决定子元素前方如何断点。它可以取以下值。</p><ul><li>auto：默认值，子元素前方可以插入断点</li><li>avoid：避免在子元素前方插入所有类型（page、column、region）的断点</li><li>avoid-column：避免在子元素前方插入栏与栏的断点</li><li>column：子元素前方强制插入一个栏断点</li></ul><p><code>break-after</code>属性决定子元素后方如何断点。它可以取以下值。</p><ul><li>auto：默认值，子元素后方可以插入断点</li><li>avoid：避免在子元素后方插入所有类型（page、column、region）的断点</li><li>avoid-column：避免在子元素后方插入栏与栏的断点</li><li>column：子元素后方强制插入一个栏断点</li></ul><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,29),p={href:"https://dev.opera.com/articles/css3-multi-column-layout/",target:"_blank",rel:"noopener noreferrer"};function r(m,h){const a=c("ExternalLinkIcon");return o(),l("div",null,[u,e("ul",null,[e("li",null,[n("Molly E. Holzschlag, "),e("a",p,[n("CSS3 Multi-Column Layout"),i(a)])])])])}const k=s(t,[["render",r],["__file","column.html.vue"]]);export{k as default};

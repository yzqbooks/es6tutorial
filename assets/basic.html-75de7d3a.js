import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as c,c as o,a as n,b as s,d as i,e as a}from"./app-bede4f5a.js";const l={},u=a(`<h1 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h1><p>选择器决定了样式规则对哪些元素有效。</p><h2 id="基本选择器" tabindex="-1"><a class="header-anchor" href="#基本选择器" aria-hidden="true">#</a> 基本选择器</h2><p>元素名称选择器，选中所有该标签的元素。</p><p><code>#elementId</code>选中指定<code>id</code>属性的元素。</p><p><code>.elementClass</code>选中指定<code>class</code>属性的元素。</p><p>应该尽量使用 class 选择器，而不是 ID 选择器。</p><p>ID 选择器的样式不能在其他元素上复用（记住，在一个页面中，一个id只能出现在一个元素上）。这会导致在其他元素上重复样式，而不是通过class共享样式。</p><p>ID 选择器的特殊性比class选择器要强得多。这意味着如果要覆盖使用id选择器定义的样式，就要编写特殊性更强的CSS规则。如果数量不多，可能还不难管理。如果处理规模较大的网站，其CSS就会变得比实际所需的更长、更复杂。</p><h2 id="通配符选择器" tabindex="-1"><a class="header-anchor" href="#通配符选择器" aria-hidden="true">#</a> 通配符选择器</h2><p>通配符<code>*</code>（星号）匹配任何元素。</p><p>因为匹配范围太广，会让浏览器加载页面变慢，因此应该谨慎使用通配符。实际适合使用通配符的情况比较少。</p><h2 id="matches" tabindex="-1"><a class="header-anchor" href="#matches" aria-hidden="true">#</a> :matches()</h2><p><code>:matches(A, B)</code>选择器表示匹配A或B。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">:matches(.foo, .bar)</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 等同于 */</span>

<span class="token selector">.foo, .bar</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它可以简化一些选择器的写法。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.syntax-highlighted .css-keyword,
.syntax-highlighted .css-tag</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>170<span class="token punctuation">,</span> 13<span class="token punctuation">,</span> 145<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 等同于 */</span>

<span class="token selector">.syntax-highlighted :matches(.css-keyword, .css-tag)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>170<span class="token punctuation">,</span> 13<span class="token punctuation">,</span> 145<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="not" tabindex="-1"><a class="header-anchor" href="#not" aria-hidden="true">#</a> :not()</h2><p><code>:not()</code>表示选中不匹配指定条件的元素。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">a:not(.internal)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>:not()</code>可以采用链式写法。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token punctuation">:</span><span class="token function">not</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token function">not</span><span class="token punctuation">(</span>em<span class="token punctuation">)</span>

<span class="token comment">/* 等同于 */</span>

<span class="token punctuation">:</span><span class="token function">not</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> em<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bem命名法" tabindex="-1"><a class="header-anchor" href="#bem命名法" aria-hidden="true">#</a> BEM命名法</h2><p>BEM是Block（区块）、Element（元素）、Modifier（修饰符）三者的简称。区块是顶级组件的抽象，元素是组件的组成部分，修饰符是组件或元素的状态。区块与元素之间用两个下划线连接，元素与修饰符之间用两个连词线连接。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Block component */</span>
<span class="token selector">.btn</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">/* Element that depends upon the block */</span>
<span class="token selector">.btn__price</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">/* Modifier that changes the style of the block */</span>
<span class="token selector">.btn--orange</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token selector">.btn--big</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对应的HTML代码结构如下。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn btn--big btn--orange<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://css-tricks.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn__price<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>$9.99<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn__text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Subscribe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>BEM的重要特点就是CSS是扁平式的，不存在元素嵌套。</p><h2 id="target" tabindex="-1"><a class="header-anchor" href="#target" aria-hidden="true">#</a> target</h2><p>target选择器用来匹配当前hash。</p><p>产生动画效果。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#further-resources:target</span> <span class="token punctuation">{</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> highlight .8s ease-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> highlight</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span> <span class="token property">background-color</span><span class="token punctuation">:</span> #FFFF66<span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span> <span class="token property">background-color</span><span class="token punctuation">:</span> #FFFFFF<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>弹出效果。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#search-overlay</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
  <span class="token comment">/* … */</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> opacity .3s ease-in-out<span class="token punctuation">;</span>
  <span class="token property">pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#search-overlay:target</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">pointer-events</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> opacity .3s ease-in-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导航栏效果</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.main-nav</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #3B3B3B<span class="token punctuation">;</span>
  <span class="token property">overflow-y</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> width 0.3s ease<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#main-nav:target</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 20%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#main-nav:target + .page-wrap</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 80%<span class="token punctuation">;</span>
  <span class="token selector">.open-menu</span> <span class="token punctuation">{</span>
     <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.close-menu</span> <span class="token punctuation">{</span>
     <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.main-header</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 80%<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 20%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="伪元素-pseudo-element" tabindex="-1"><a class="header-anchor" href="#伪元素-pseudo-element" aria-hidden="true">#</a> 伪元素（Pseudo-element）</h2><p>伪元素（::before或者::after）是每个元素额外多出来的DOM节点。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.pebble::before</span> <span class="token punctuation">{</span>
  ...
<span class="token punctuation">}</span>
<span class="token selector">.pebble::after</span> <span class="token punctuation">{</span>
  ...
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>伪元素使用两个双引号标识，如果希望IE8支持，也可以使用单引号。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>
<span class="token selector">button::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> -50%<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> -50%<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> -50%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> -50%<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to bottom<span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>229<span class="token punctuation">,</span> 172<span class="token punctuation">,</span> 142<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span>255<span class="token punctuation">,</span>255<span class="token punctuation">,</span>0.5<span class="token punctuation">)</span> 50%<span class="token punctuation">,</span> <span class="token function">rgba</span><span class="token punctuation">(</span>229<span class="token punctuation">,</span> 172<span class="token punctuation">,</span> 142<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateZ</span><span class="token punctuation">(</span>60deg<span class="token punctuation">)</span> <span class="token function">translate</span><span class="token punctuation">(</span>-5em<span class="token punctuation">,</span> 7.5em<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">button:hover::after</span> <span class="token punctuation">{</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> sheen 1s forwards<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> sheen</span> <span class="token punctuation">{</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateZ</span><span class="token punctuation">(</span>60deg<span class="token punctuation">)</span> <span class="token function">translate</span><span class="token punctuation">(</span>1em<span class="token punctuation">,</span> -9em<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考链接</p>`,42),d={href:"http://cssanimation.rocks/post/pseudo-elements/",target:"_blank",rel:"noopener noreferrer"},r=a('<h2 id="伪类" tabindex="-1"><a class="header-anchor" href="#伪类" aria-hidden="true">#</a> 伪类</h2><ul><li>:empty：没有任何子元素</li><li>:in-range：针对有range属性的input</li><li>:out-of-range：针对有range属性的input</li><li>:optional：没有required属性的input元素</li><li>:required</li><li>:disabled</li><li>:fullscreen</li><li>:not()</li></ul><h2 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级" aria-hidden="true">#</a> 优先级</h2><p>一个网页元素，可以被多个选择器匹配。如果这些选择器都设置了同样的规则，就有一个”优先级“的问题：到底哪个选择器的优先级更高？</p><p>规则是针对性越强的选择器，优先级越高。浏览器会计算每条规则的优先级值，然后采用值最高的规则，计算方法如下。</p><ul><li><code>!important</code>后缀为 10000</li><li>行内样式为 1000</li><li>ID 为 100</li><li>class、伪类、属性选择器为 10</li><li>标签名、伪元素为 1</li></ul><p>然后，累加得到的分数，哪条规则得分最高，就采用哪条规则。如果得分相同，就采用位置靠后的位置。</p><p>下面是一些例子。</p><ul><li><code>&lt;li style=&quot;color: red;&quot;&gt;</code>：行内样式，得分为1000。</li><li><code>ul#nav li.active a</code>：一个 ID、一个 Class、三个标签名，得分为113。</li><li><code>body.ie7 .col_3 h2 ~ h3</code>：两个 Class，三个标签名，得分为23。</li><li><code>#footer *:not(nav) li</code>：一个 ID、两个标签名，得分为102。注意，<code>*</code>没有分数，而且<code>:not</code>不算伪类，只计算它括号里面的标签名。</li><li><code>ul &gt; li ul li ol li:first-letter</code>：七个标签名，得分为7。注意，<code>:first-letter</code>算作伪元素。</li></ul>',9);function k(v,m){const t=p("ExternalLinkIcon");return c(),o("div",null,[u,n("ul",null,[n("li",null,[s("Donovan Hutchinson, "),n("a",d,[s("Animating pseudo-elements"),i(t)])])]),r])}const g=e(l,[["render",k],["__file","basic.html.vue"]]);export{g as default};

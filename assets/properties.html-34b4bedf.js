import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o,c as i,a as n,b as s,d as e,e as t}from"./app-bede4f5a.js";const l={},u=t(`<h1 id="css-属性" tabindex="-1"><a class="header-anchor" href="#css-属性" aria-hidden="true">#</a> CSS 属性</h1><h2 id="inherit属性值" tabindex="-1"><a class="header-anchor" href="#inherit属性值" aria-hidden="true">#</a> <code>inherit</code>属性值</h2><p>CSS 的许多属性可以继承，即子元素默认继承父元素的属性。比如，<code>body</code>元素的字体样式，可以被页面的所有元素继承。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">,</span> Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>body</code>设置了<code>font-family</code>了，它的后代元素就不用设置这个属性了，除非需要改变字体。</p><p>根据标准，以下 CSS 属性可以继承。</p><ol><li><code>azimuth</code></li><li><code>border-collapse</code></li><li><code>border-spacing</code></li><li><code>caption-side</code></li><li><code>color</code></li><li><code>cursor</code></li><li><code>direction</code></li><li><code>elevation</code></li><li><code>empty-cells</code></li><li><code>font-family</code></li><li><code>font-size</code></li><li><code>font-style</code></li><li><code>font-variant</code></li><li><code>font-weight</code></li><li><code>font</code></li><li><code>letter-spacing</code></li><li><code>line-height</code></li><li><code>list-style-image</code></li><li><code>list-style-position</code></li><li><code>list-style-type</code></li><li><code>list-style</code></li><li><code>orphans</code></li><li><code>pitch-range</code></li><li><code>pitch</code></li><li><code>quotes</code></li><li><code>richness</code></li><li><code>speak-header</code></li><li><code>speak-numeral</code></li><li><code>speak-punctuation</code></li><li><code>speak</code></li><li><code>speech-rate</code></li><li><code>stress</code></li><li><code>text-align</code></li><li><code>text-indent</code></li><li><code>text-transform</code></li><li><code>visibility</code></li><li><code>voice-family</code></li><li><code>volume</code></li><li><code>white-space</code></li><li><code>widows</code></li><li><code>word-spacing</code></li></ol><p>其他属性默认不能继承，比如<code>border</code>属性。父元素设置了<code>border</code>以后，子元素如果要有边框，必须重新设一遍。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.main-list</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1rem solid #000<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> Verdana
<span class="token punctuation">}</span>

<span class="token selector">.sub-list</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1rem solid #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>.sum-list</code>是<code>.main-list</code>的子元素，两者的边框必须各自设置。</p><p>CSS 提供了<code>inherit</code>属性值，如果要让子元素继承父元素的属性，可以使用这个属性值。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.main-list</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1rem solid #000<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> Verdana<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.sub-list</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>.sub-list</code>的<code>border</code>属性，就继承了<code>.main-list</code>，从而两者的边框都一样。它的好处是，如果要修改边框，只要修改一处即可。</p><h2 id="initial-属性值" tabindex="-1"><a class="header-anchor" href="#initial-属性值" aria-hidden="true">#</a> initial 属性值</h2><p><code>initial</code>属性值可以将 CSS 属性设回初始值。它的主要用处是，让那些默认继承父元素的 CSS 属性不再继承，回到初始值。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.berries</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1rem solid #000<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> Verdana<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.berries h1</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> initial<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>.berries</code>是<code>h1</code>的父元素，而<code>color</code>属性是可以继承的，如果不设置<code>h1</code>的颜色，<code>h1</code>就会是红色的。现在<code>h1</code>的<code>color</code>设为<code>initial</code>，就不再继承父元素的颜色，而是回到浏览器给予<code>h1</code>的默认颜色，即黑色。</p><h2 id="unset-属性值" tabindex="-1"><a class="header-anchor" href="#unset-属性值" aria-hidden="true">#</a> unset 属性值</h2><p><code>unset</code>属性值的作用是，如果存在继承，则继承父元素的值（等同于<code>inherit</code>），如果不存在继承，则重置为初始值（等同于<code>initial</code>）。<code>unset</code>的意思，就是去除当前样式表对该元素的样式设置。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1rem solid #000<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> Verdana<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.berries h1</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> unset<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>div</code>是<code>h1</code>的父元素，如果不设置<code>.berries h1</code>的<code>color</code>属性，<code>h1</code>会显示为蓝色，设成<code>color: unset</code>以后，<code>h1</code>继承了父元素的<code>color</code>，显示为红色。</p><p><code>unset</code>与<code>inherit</code>的区别在于，如果不设置<code>div</code>的<code>color</code>，那么<code>.berries h1</code>将显示为浏览器赋予的默认颜色（黑色），而不是红色。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1rem solid #000<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> Verdana<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.berries h1</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> unset<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，父元素<code>div</code>没有设置颜色，这时子元素<code>.berries h1</code>将显示为浏览器默认颜色（黑色），而不是蓝色。</p><h2 id="revert-属性值" tabindex="-1"><a class="header-anchor" href="#revert-属性值" aria-hidden="true">#</a> revert 属性值</h2><p><code>revert</code>属性值用于消除当前样式表对该元素设置的样式，这也是它名字的含义（<code>还原</code>），基本等同于<code>unset</code>。具体来说，如果存在继承，该元素会显示继承的属性值，如果不存在继承，则分成以下两种情况。</p><ul><li><code>revert</code>用在网站提供的样式表：则显示用户演示表设置的值。如果不存在用户样式表，则浏览器赋予的默认值。</li><li><code>revert</code>用在用户提供的样式表：显示浏览器赋予的默认值。</li></ul><p>我们知道，样式表可以分成三层：用户提供的样式表，可以覆盖网站提供的样式表；网站提供的样式表，又可以覆盖浏览器的默认样式表。<code>revert</code>主要针对的就是多层样式表同时存在的情况，然后用于去除本层样式表对元素的影响。</p><p>大多数情况下，<code>revert</code>与<code>unset</code>是一样的，主要差异是 CSS 属性的初始值与浏览器的默认值可能有差异。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">font-weight</span><span class="token punctuation">:</span> unset<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">font-weight</span><span class="token punctuation">:</span> revert<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>font-weight: unset</code>会回到<code>font-weight</code>的初始值，即<code>normal</code>。而<code>&lt;font-weight: revert&gt;</code>会回到浏览器对<code>h3</code>的<code>font-weight</code>默认值，一般是粗体。</p><p>如果想要清除当前样式表对该元素的所有设置，可以使用<code>all: revert</code>。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">all</span><span class="token punctuation">:</span> revert<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="background-blend-mode" tabindex="-1"><a class="header-anchor" href="#background-blend-mode" aria-hidden="true">#</a> background-blend-mode</h2><p>background-blend-mode属性指定背景的颜色混合模式，共有16个值可取：normal（默认值，即不混合）, multiply, screen, overlay, darken, lighten, color-dodge, color-burn, hard-light, soft-light, difference, exclusion, hue, saturation, color and luminosity（显示单色效果）。</p><p>可以显示多张背景图片的混合，或者背景图片与背景色的混合。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  background<span class="token operator">-</span>image<span class="token operator">:</span> <span class="token function">url</span><span class="token punctuation">(</span><span class="token operator">...</span>g<span class="token punctuation">)</span><span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #51B7D3<span class="token punctuation">;</span>
  background<span class="token operator">-</span>blend<span class="token operator">-</span>mode<span class="token operator">:</span> luminosity<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="background-image" tabindex="-1"><a class="header-anchor" href="#background-image" aria-hidden="true">#</a> background-image</h2><p><code>background</code>属性可以同时指定背景图和背景颜色。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>sweettexture.jpg<span class="token punctuation">)</span></span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="background-position" tabindex="-1"><a class="header-anchor" href="#background-position" aria-hidden="true">#</a> background-position</h2><p><code>background-position</code>指定背景图的位置。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">background-position</span><span class="token punctuation">:</span> 100px 5px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>位置属性可以指定关键字。</p><ul><li>top</li><li>right</li><li>bottom</li><li>left</li><li>center</li></ul><h2 id="background-blend-mode-1" tabindex="-1"><a class="header-anchor" href="#background-blend-mode-1" aria-hidden="true">#</a> background-blend-mode</h2><p><code>background-blend-mode</code>用于指定两种颜色混合的方式。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>img/pattern.png<span class="token punctuation">)</span></span><span class="token punctuation">,</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>img/jellyfish.jpg<span class="token punctuation">)</span></span><span class="token punctuation">,</span> #f07e32<span class="token punctuation">;</span>
  <span class="token property">background-blend-mode</span><span class="token punctuation">:</span> screen<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Demo：http://codepen.io/tutsplus/live/wMvoyj</p><p>教程：http://webdesign.tutsplus.com/tutorials/blending-modes-in-css-color-theory-and-practical-application--cms-25201</p><h2 id="border-image" tabindex="-1"><a class="header-anchor" href="#border-image" aria-hidden="true">#</a> border-image</h2><p>在边框上显示图像。</p><h2 id="content" tabindex="-1"><a class="header-anchor" href="#content" aria-hidden="true">#</a> content</h2><p>指定伪元素的内容。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.myDiv:after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;I am hardcoded text from the *content* property&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div[data-line]:after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">attr</span><span class="token punctuation">(</span>data-line<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 属性名没有引号 */</span>
<span class="token punctuation">}</span>

<span class="token selector">div[data-line]:after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;[line &quot;</span> <span class="token function">attr</span><span class="token punctuation">(</span>data-line<span class="token punctuation">)</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="counter" tabindex="-1"><a class="header-anchor" href="#counter" aria-hidden="true">#</a> counter</h2><p>counter用来实现计数器。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>b<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>li</code>元素前面添加计数器的代码如下。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.list</span> <span class="token punctuation">{</span>
    <span class="token property">counter-reset</span><span class="token punctuation">:</span> i<span class="token punctuation">;</span> //reset conunter
<span class="token punctuation">}</span>
<span class="token selector">.list &gt; li</span> <span class="token punctuation">{</span>
    <span class="token property">counter-increment</span><span class="token punctuation">:</span> i<span class="token punctuation">;</span> //counter ID
<span class="token punctuation">}</span>
<span class="token selector">.list li:after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;[&quot;</span> <span class="token function">counter</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">;</span> //print the result
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个高级用法的例子。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>numbers<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>one<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>one<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>two<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>two<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>three<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>three<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>four<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>four<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>five<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>five<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>one-hundred<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>one-hundred<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>100<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sum<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>  
  Sum 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，利用计数器做出一个累加计算器。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.numbers</span> <span class="token punctuation">{</span>
  <span class="token property">counter-reset</span><span class="token punctuation">:</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#one:checked</span> <span class="token punctuation">{</span> <span class="token property">counter-increment</span><span class="token punctuation">:</span> sum 1<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">#two:checked</span> <span class="token punctuation">{</span> <span class="token property">counter-increment</span><span class="token punctuation">:</span> sum 2<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">#three:checked</span> <span class="token punctuation">{</span> <span class="token property">counter-increment</span><span class="token punctuation">:</span> sum 3<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">#four:checked</span> <span class="token punctuation">{</span> <span class="token property">counter-increment</span><span class="token punctuation">:</span> sum 4<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">#five:checked</span> <span class="token punctuation">{</span> <span class="token property">counter-increment</span><span class="token punctuation">:</span> sum 5<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">#one-hundred:checked</span> <span class="token punctuation">{</span> <span class="token property">counter-increment</span><span class="token punctuation">:</span> sum 100<span class="token punctuation">;</span> <span class="token punctuation">}</span>

<span class="token selector">.sum::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;= &#39;</span> <span class="token function">counter</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cursor" tabindex="-1"><a class="header-anchor" href="#cursor" aria-hidden="true">#</a> cursor</h2><p><code>cousor</code>属性用来指定鼠标形状。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.cursor_auto</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.cursor_default</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> default<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.cursor_none</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.cursor_pointer</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.cursor_progress</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> progress<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.cursor_help</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> help<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.cursor_text</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.cursor_cell</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> cell<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.cursor_crosshair</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> crosshair<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.cursor_alias</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> alias<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.cursor_context-menu</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> context-menu<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.cursor_vertical-text</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> vertical-text<span class="token punctuation">;</span>
<span class="token punctuation">}</span>  <span class="token comment">/*not compatible with opera*/</span>

<span class="token selector">.cursor_copy</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> copy<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.cursor_move</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> move<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.cursor_no-drop</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> no-drop<span class="token punctuation">;</span>
<span class="token punctuation">}</span>  <span class="token comment">/*not compatible with opera*/</span>

<span class="token selector">.cursor_not-allowed</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> not-allowed<span class="token punctuation">;</span>
<span class="token punctuation">}</span>  <span class="token comment">/*not compatible with opera*/</span>

<span class="token selector">.cursor_all-scroll</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> all-scroll<span class="token punctuation">;</span>
<span class="token punctuation">}</span>  <span class="token comment">/*not compatible with opera*/</span>

<span class="token selector">.cursor_col-resize</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> col-resize<span class="token punctuation">;</span>
<span class="token punctuation">}</span>  <span class="token comment">/*not compatible with opera*/</span>

<span class="token selector">.cursor_row-resize</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> row-resize<span class="token punctuation">;</span>
<span class="token punctuation">}</span>  <span class="token comment">/*not compatible with opera*/</span>

<span class="token selector">.cursor_nesw-resize</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> nesw-resize<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.cursor_nwse-resize</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> nwse-resize<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.cursor_n-resize</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> n-resize<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.cursor_e-resize</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> e-resize<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.cursor_s-resize</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> s-resize<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.cursor_w-resize</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> w-resize<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.cursor_ns-resize</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> ns-resize<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.cursor_ew-resize</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> ew-resize<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.cursor_ne-resize</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> ne-resize<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.cursor_nw-resize</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> nw-resize<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.cursor_sw-resize</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> sw-resize<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.cursor_se-resize</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> se-resize<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.cursor_wait</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> wait<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.cursor_grab</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> grab<span class="token punctuation">;</span>
<span class="token punctuation">}</span>  <span class="token comment">/*only compatible with firefox and opera*/</span>

<span class="token selector">.cursor_grabbing</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> grabbing<span class="token punctuation">;</span>
<span class="token punctuation">}</span>  <span class="token comment">/*only compatible with firefox and opera*/</span>

<span class="token selector">.cursor_zoom-in</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> zoom-in<span class="token punctuation">;</span>
<span class="token punctuation">}</span>  <span class="token comment">/*not compatible with explorer*/</span>

<span class="token selector">.cursor_zoom-out</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> zoom-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>  <span class="token comment">/*not compatible with explorer*/</span>

<span class="token selector">.cursor_custom</span> <span class="token punctuation">{</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>image.gif<span class="token punctuation">)</span></span><span class="token punctuation">,</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>image.cur<span class="token punctuation">)</span></span><span class="token punctuation">,</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="display" tabindex="-1"><a class="header-anchor" href="#display" aria-hidden="true">#</a> display</h2><p>display属性表示如何展示元素。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter</h3><p>filter属性表示图片滤镜，支持grayscale, blur, sepia, saturate, opacity, brightness, contrast, hue-rotate, invert效果。</p><p>灰度效果。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>
<span class="token selector">img.bw</span> <span class="token punctuation">{</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>动画效果。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>
<span class="token selector">img.bw</span> <span class="token punctuation">{</span>
	<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">img.bw.grey</span> <span class="token punctuation">{</span>
	<span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">transition-property</span><span class="token punctuation">:</span> filter<span class="token punctuation">;</span>
	<span class="token property">transition-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>	
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他例子。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>
<span class="token comment">/* 模糊 */</span>
<span class="token selector">.myElement</span> <span class="token punctuation">{</span>
	<span class="token property">-webkit-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>2px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 组合效果 */</span>
<span class="token selector">.myElement</span> <span class="token punctuation">{</span>
	<span class="token property">-webkit-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>2px<span class="token punctuation">)</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>.5<span class="token punctuation">)</span> <span class="token function">opacity</span><span class="token punctuation">(</span>0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模糊与鼠标悬停效果相结合。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.spoiler</span> <span class="token punctuation">{</span>
	<span class="token property">-webkit-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>20px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">-webkit-transition-property</span><span class="token punctuation">:</span> -webkit-filter<span class="token punctuation">;</span>
	<span class="token property">-webkit-transition-duration</span><span class="token punctuation">:</span> .4s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.spoiler:hover, .spoiler:focus</span> <span class="token punctuation">{</span>
	<span class="token property">-webkit-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span>0px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="flex" tabindex="-1"><a class="header-anchor" href="#flex" aria-hidden="true">#</a> flex</h2><p>flex功能可以指定容器采用弹性布局。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="filter-1" tabindex="-1"><a class="header-anchor" href="#filter-1" aria-hidden="true">#</a> filter</h2><p>filter属性在指定元素上应用滤镜。</p><ul><li>blur()：模糊，参数为模糊半径</li><li>brightness()：亮度，0%为全黑，100%为原始亮度</li><li>contrast()：对比度，0%为全黑，100%为原始对比度</li><li>grayscale()：灰度，0%为原始色彩，100%为完全灰度。</li><li>hue-rotate()：色调，0为原始色调，360为色彩轮旋转一周后回到原色调。</li><li>invert()：负片效果，0%为原始效果，100%为完全负片效果。</li><li>opacity()：透明度，0%为完全透明，100%为完全不透明。</li><li>saturate()：饱和度，0%为完全不饱和，100%为完全饱和。</li><li>sepia()：作旧效果，0%为原始效果，100%为完全作旧</li><li>drop-shadow()：阴影效果，设置同box-shadow接近</li><li>url()：引用定义在SVG文件中的滤镜</li></ul><p>多个滤镜可以联合使用。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">sepia</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span> <span class="token function">brightness</span><span class="token punctuation">(</span>150%<span class="token punctuation">)</span> <span class="token function">contrast</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="mix-blend-mode" tabindex="-1"><a class="header-anchor" href="#mix-blend-mode" aria-hidden="true">#</a> mix-blend-mode</h2><p>mix-blend-mode属性指定前景与背景的颜色混合模式，即前景色与背景色的混合。它的取值同background-blend-mode属性一样，也是16个值。</p><h2 id="object-fit" tabindex="-1"><a class="header-anchor" href="#object-fit" aria-hidden="true">#</a> object-fit</h2><p>定义内容如何适应容器的高和宽，比如不同大小的图片，如何放在同一个位置。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">img</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">object-fit</span><span class="token punctuation">:</span> contain<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>object-fit可能的值共有五个。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">object-fit</span><span class="token punctuation">:</span> fill
<span class="token property">object-fit</span><span class="token punctuation">:</span> contain
<span class="token property">object-fit</span><span class="token punctuation">:</span> cover
<span class="token property">object-fit</span><span class="token punctuation">:</span> none
<span class="token property">object-fit</span><span class="token punctuation">:</span> scale-down
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>contain：图片自动升缩，以固有的长宽比，完整显示在容器中。</li><li>fill：图片自动填满容器，即使破坏原有的长宽比。</li><li>cover：保留图像的长宽比，但会自动升缩以填满容器，长度或宽度中较小的一个会完全在容器中展示，较大的一个会溢出。</li><li>none：完全忽视容器的大小，使用图片固有的长宽比。</li><li>scale-down: none或者contain中导致图片尺寸较小的那个值。</li></ul><p>cover表示自动将图像的中心点，放置到容器的中心点，同时根据容器的大小，截取自身的大小。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>
<span class="token selector">img</span> <span class="token punctuation">{</span>
  <span class="token property">object-fit</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考链接</p>`,99),r={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit",target:"_blank",rel:"noopener noreferrer"},d={href:"https://medium.com/@chrisnager/center-and-crop-images-with-a-single-line-of-css-ad140d5b4a87",target:"_blank",rel:"noopener noreferrer"},k={href:"https://hacks.mozilla.org/2015/02/exploring-object-fit/",target:"_blank",rel:"noopener noreferrer"},v=t(`<h2 id="object-position" tabindex="-1"><a class="header-anchor" href="#object-position" aria-hidden="true">#</a> object-position</h2><p>object-position设置容器中的对象（通常是图片）的垂直和水平位置，与background-position设置背景图片的写法相同。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>
<span class="token selector">img</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">object-fit</span><span class="token punctuation">:</span> contain<span class="token punctuation">;</span>
  <span class="token property">object-position</span><span class="token punctuation">:</span> top 70px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pointer-events" tabindex="-1"><a class="header-anchor" href="#pointer-events" aria-hidden="true">#</a> pointer-events</h2><p>该属性定义当前图形对象会不会成为鼠标动作的目标。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 图片将对鼠标行为无反应 */</span>
<span class="token selector">img</span> <span class="token punctuation">{</span>
  <span class="token property">pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">a[href=&quot;http://example.com&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">pointer-events</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一旦pointer-events设为none，就不会触发JavaScript事件。在该元素上点击，任何addEventListener添加的回调函数，都不会触发。</p><h2 id="text-overflow" tabindex="-1"><a class="header-anchor" href="#text-overflow" aria-hidden="true">#</a> text-overflow</h2><p>该属性定义了文本超出容器宽度后，如何处理。如果将多余文字显示成三点的省略号，可以像下面这样设置。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.ellipsis</span> <span class="token punctuation">{</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span> 
    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span> 
    <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码第一行是隐藏溢出，第二行是防止断行，第三行是在行尾加上省略号。</p><h2 id="position" tabindex="-1"><a class="header-anchor" href="#position" aria-hidden="true">#</a> position</h2><p>position属性用来确定元素的定位。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token property">position</span><span class="token punctuation">:</span> sticky<span class="token punctuation">;</span>
<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
<span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> transition</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Format */</span>
<span class="token property">transition</span><span class="token punctuation">:</span> property || duration || timing-function || delay

<span class="token comment">/* Various Examples */</span>
<span class="token property">transition</span><span class="token punctuation">:</span> all 300ms ease 0<span class="token punctuation">;</span>
<span class="token property">transition</span><span class="token punctuation">:</span> all 0.5s ease-in-out 0<span class="token punctuation">;</span>
<span class="token property">transition</span><span class="token punctuation">:</span> background 300ms <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>.61<span class="token punctuation">,</span>-0.67<span class="token punctuation">,</span>0<span class="token punctuation">,</span>1.45<span class="token punctuation">)</span> 0<span class="token punctuation">;</span>
<span class="token property">transition</span><span class="token punctuation">:</span> opacity 100ms ease 0<span class="token punctuation">,</span> background 200ms ease-in-out 0<span class="token punctuation">,</span> transform 200ms ease-out 0<span class="token punctuation">;</span>

<span class="token comment">/* Cross Browser Prefixes */</span>
<span class="token property">-webkit-transition</span><span class="token punctuation">:</span> all 300ms ease 0<span class="token punctuation">;</span>
<span class="token property">-moz-transition</span><span class="token punctuation">:</span> all 300ms ease 0<span class="token punctuation">;</span>
<span class="token property">-o-transition</span><span class="token punctuation">:</span> all 300ms ease 0<span class="token punctuation">;</span>
<span class="token property">transition</span><span class="token punctuation">:</span> all 300ms ease 0<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function m(b,g){const a=c("ExternalLinkIcon");return o(),i("div",null,[u,n("ul",null,[n("li",null,[s("MDN, "),n("a",r,[s("object-fit"),e(a)])]),n("li",null,[s("Chris Nager, "),n("a",d,[s("Center and crop images with a single line of CSS"),e(a)])]),n("li",null,[s("Chris Mills, "),n("a",k,[s("Exploring object-fit"),e(a)])])]),v])}const f=p(l,[["render",m],["__file","properties.html.vue"]]);export{f as default};

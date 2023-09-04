import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o,c as l,a as s,b as n,d as e,e as p}from"./app-bede4f5a.js";const i={},u=p(`<h1 id="typescript-的-class-类型" tabindex="-1"><a class="header-anchor" href="#typescript-的-class-类型" aria-hidden="true">#</a> TypeScript 的 class 类型</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>类（class）是面向对象编程的基本构件，封装了属性和方法，TypeScript 给予了全面支持。</p><h3 id="属性的类型" tabindex="-1"><a class="header-anchor" href="#属性的类型" aria-hidden="true">#</a> 属性的类型</h3><p>类的属性可以在顶层声明，也可以在构造方法内部声明。</p><p>对于顶层声明的属性，可以在声明时同时给出类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面声明中，属性<code>x</code>和<code>y</code>的类型都是<code>number</code>。</p><p>如果不给出类型，TypeScript 会认为<code>x</code>和<code>y</code>的类型都是<code>any</code>。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  x<span class="token punctuation">;</span>
  y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>x</code>和<code>y</code>的类型都是<code>any</code>。</p><p>如果声明时给出初值，可以不写类型，TypeScript 会自行推断属性的类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，属性<code>x</code>和<code>y</code>的类型都会被推断为 number。</p><p>TypeScript 有一个配置项<code>strictPropertyInitialization</code>，只要打开（默认是打开的），就会检查属性是否设置了初值，如果没有就报错。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 打开 strictPropertyInitialization</span>
<span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，如果类的顶层属性不赋值，就会报错。如果不希望出现报错，可以使用非空断言。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  x<span class="token operator">!</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">!</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，属性<code>x</code>和<code>y</code>没有初值，但是属性名后面添加了感叹号，表示这两个属性肯定不会为空，所以 TypeScript 就不报错了，详见《类型断言》一章。</p><h3 id="readonly-修饰符" tabindex="-1"><a class="header-anchor" href="#readonly-修饰符" aria-hidden="true">#</a> readonly 修饰符</h3><p>属性名前面加上 readonly 修饰符，就表示该属性是只读的。实例对象不能修改这个属性。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> id <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>id</code>属性前面有 readonly 修饰符，实例对象修改这个属性就会报错。</p><p>readonly 属性的初始值，可以写在顶层属性，也可以写在构造方法里面。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> id<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 正确</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，构造方法内部设置只读属性的初值，这是可以的。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> id<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 正确</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，构造方法修改只读属性的值也是可以的。或者说，如果两个地方都设置了只读属性的值，以构造方法为准。在其他方法修改只读属性都会报错。</p><h3 id="方法的类型" tabindex="-1"><a class="header-anchor" href="#方法的类型" aria-hidden="true">#</a> 方法的类型</h3><p>类的方法就是普通函数，类型声明方式与函数一致。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">add</span><span class="token punctuation">(</span>point<span class="token operator">:</span>Point<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">+</span> point<span class="token punctuation">.</span>x<span class="token punctuation">,</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">+</span> point<span class="token punctuation">.</span>y
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，构造方法<code>constructor()</code>和普通方法<code>add()</code>都注明了参数类型，但是省略了返回值类型，因为 TypeScript 可以自己推断出来。</p><p>类的方法跟普通函数一样，可以使用参数默认值，以及函数重载。</p><p>下面是参数默认值的例子。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，如果新建实例时，不提供属性<code>x</code>和<code>y</code>的值，它们都等于默认值<code>0</code>。</p><p>下面是函数重载的例子。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>s<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>xs<span class="token operator">:</span><span class="token builtin">number</span><span class="token operator">|</span><span class="token builtin">string</span><span class="token punctuation">,</span> y<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，构造方法可以接受一个参数，也可以接受两个参数，采用函数重载进行类型声明。</p><p>另外，构造方法不能声明返回值类型，否则报错，因为它总是返回实例对象。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>object <span class="token punctuation">{</span> <span class="token comment">// 报错</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，构造方法声明了返回值类型<code>object</code>，导致报错。</p><h3 id="存取器方法" tabindex="-1"><a class="header-anchor" href="#存取器方法" aria-hidden="true">#</a> 存取器方法</h3><p>存取器（accessor）是特殊的类方法，包括取值器（getter）和存值器（setter）两种方法。</p><p>它们用于读写某个属性，取值器用来读取属性，存值器用来写入属性。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token punctuation">{</span>
  _name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">get</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">set</span> <span class="token function">name</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>get name()</code>是取值器，其中<code>get</code>是关键词，<code>name</code>是属性名。外部读取<code>name</code>属性时，实例对象会自动调用这个方法，该方法的返回值就是<code>name</code>属性的值。</p><p><code>set name()</code>是存值器，其中<code>set</code>是关键词，<code>name</code>是属性名。外部写入<code>name</code>属性时，实例对象会自动调用这个方法，并将所赋的值作为函数参数传入。</p><p>TypeScript 对存取器有以下规则。</p><p>（1）如果某个属性只有<code>get</code>方法，没有<code>set</code>方法，那么该属性自动成为只读属性。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token punctuation">{</span>
  _name <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">get</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">C</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
c<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>name</code>属性没有<code>set</code>方法，对该属性赋值就会报错。</p><p>（2）TypeScript 5.1 版之前，<code>set</code>方法的参数类型，必须兼容<code>get</code>方法的返回值类型，否则报错。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// TypeScript 5.1 版之前</span>
<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token punctuation">{</span>
  _name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">get</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span> <span class="token punctuation">{</span>  <span class="token comment">// 报错</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">set</span> <span class="token function">name</span><span class="token punctuation">(</span>value<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>get</code>方法的返回值类型是字符串，与<code>set</code>方法的参数类型<code>number</code>不兼容，导致报错。改成下面这样，就不会报错。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token punctuation">{</span>
  _name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">get</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">set</span> <span class="token function">name</span><span class="token punctuation">(</span>value<span class="token operator">:</span><span class="token builtin">number</span><span class="token operator">|</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>set</code>方法的参数类型（<code>number|string</code>）兼容<code>get</code>方法的返回值类型（<code>string</code>），这是允许的。</p>`,57),d={href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-1.html#unrelated-types-for-getters-and-setters",target:"_blank",rel:"noopener noreferrer"},r=p(`<p>（3）<code>get</code>方法与<code>set</code>方法的可访问性必须一致，要么都为公开方法，要么都为私有方法。</p><h3 id="属性索引" tabindex="-1"><a class="header-anchor" href="#属性索引" aria-hidden="true">#</a> 属性索引</h3><p>类允许定义属性索引。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>s<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span>
    <span class="token punctuation">(</span><span class="token punctuation">(</span>s<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">get</span><span class="token punctuation">(</span>s<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">[</span>s<span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>[s:string]</code>表示所有属性名类型为字符串的属性，它们的属性值要么是布尔值，要么是返回布尔值的函数。</p><p>注意，由于类的方法是一种特殊属性（属性值为函数的属性），所以属性索引的类型定义也涵盖了方法。如果一个对象同时定义了属性索引和方法，那么前者必须包含后者的类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>s<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 报错</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，属性索引的类型里面不包括方法，导致后面的方法<code>f()</code>定义直接报错。正确的写法是下面这样。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>s<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>属性存取器视同属性。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>s<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  <span class="token keyword">get</span> <span class="token function">isInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，属性<code>inInstance</code>的读取器虽然是一个函数方法，但是视同属性，所以属性索引虽然没有涉及方法类型，但是不会报错。</p><h2 id="类的-interface-接口" tabindex="-1"><a class="header-anchor" href="#类的-interface-接口" aria-hidden="true">#</a> 类的 interface 接口</h2><h3 id="implements-关键字" tabindex="-1"><a class="header-anchor" href="#implements-关键字" aria-hidden="true">#</a> implements 关键字</h3><p>interface 接口或 type 别名，可以用对象的形式，为 class 指定一组检查条件。然后，类使用 implements 关键字，表示当前类满足这些外部类型条件的限制。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Country</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
  capital<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 或者</span>
<span class="token keyword">type</span> <span class="token class-name">Country</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
  capital<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MyCountry</span> <span class="token keyword">implements</span> <span class="token class-name">Country</span> <span class="token punctuation">{</span>
  name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  capital <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>interface</code>或<code>type</code>都可以定义一个对象类型。类<code>MyCountry</code>使用<code>implements</code>关键字，表示该类的实例对象满足这个外部类型。</p><p>interface 只是指定检查条件，如果不满足这些条件就会报错。它并不能代替 class 自身的类型声明。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">implements</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// s 的类型是 any</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，类<code>B</code>实现了接口<code>A</code>，但是后者并不能代替<code>B</code>的类型声明。因此，<code>B</code>的<code>get()</code>方法的参数<code>s</code>的类型是<code>any</code>，而不是<code>string</code>。<code>B</code>类依然需要声明参数<code>s</code>的类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">implements</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span>s<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是另一个例子。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">implements</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">B</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，接口<code>A</code>有一个可选属性<code>y</code>，类<code>B</code>没有声明这个属性，所以可以通过类型检查。但是，如果给<code>B</code>的实例对象的属性<code>y</code>赋值，就会报错。所以，<code>B</code>类还是需要声明可选属性<code>y</code>。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">implements</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  y<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同理，类可以定义接口没有声明的方法和属性。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MyPoint</span> <span class="token keyword">implements</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  y <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  z<span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>MyPoint</code>类实现了<code>Point</code>接口，但是内部还定义了一个额外的属性<code>z</code>，这是允许的，表示除了满足接口给出的条件，类还有额外的条件。</p><p><code>implements</code>关键字后面，不仅可以是接口，也可以是另一个类。这时，后面的类将被当作接口。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MyCar</span> <span class="token keyword">implements</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
  id <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 不可省略</span>
  <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>   <span class="token comment">// 不可省略</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>implements</code>后面是类<code>Car</code>，这时 TypeScript 就把<code>Car</code>视为一个接口，要求<code>MyCar</code>实现<code>Car</code>里面的每一个属性和方法，否则就会报错。所以，这时不能因为<code>Car</code>类已经实现过一次，而在<code>MyCar</code>类省略属性或方法。</p><p>注意，interface 描述的是类的对外接口，也就是实例的公开属性和公开方法，不能定义私有的属性和方法。这是因为 TypeScript 设计者认为，私有属性是类的内部实现，接口作为模板，不应该涉及类的内部代码写法。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> member<span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，接口<code>Foo</code>有一个私有属性，结果就报错了。</p><h3 id="实现多个接口" tabindex="-1"><a class="header-anchor" href="#实现多个接口" aria-hidden="true">#</a> 实现多个接口</h3><p>类可以实现多个接口（其实是接受多重限制），每个接口之间使用逗号分隔。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token keyword">implements</span> <span class="token class-name">MotorVehicle</span><span class="token punctuation">,</span> Flyable<span class="token punctuation">,</span> Swimmable <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>Car</code>类同时实现了<code>MotorVehicle</code>、<code>Flyable</code>、<code>Swimmable</code>三个接口。这意味着，它必须部署这三个接口声明的所有属性和方法，满足它们的所有条件。</p><p>但是，同时实现多个接口并不是一个好的写法，容易使得代码难以管理，可以使用两种方法替代。</p><p>第一种方法是类的继承。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token keyword">implements</span> <span class="token class-name">MotorVehicle</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SecretCar</span> <span class="token keyword">extends</span> <span class="token class-name">Car</span> <span class="token keyword">implements</span> <span class="token class-name">Flyable</span><span class="token punctuation">,</span> Swimmable <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>Car</code>类实现了<code>MotorVehicle</code>，而<code>SecretCar</code>类继承了<code>Car</code>类，然后再实现<code>Flyable</code>和<code>Swimmable</code>两个接口，相当于<code>SecretCar</code>类同时实现了三个接口。</p><p>第二种方法是接口的继承。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  b<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，接口<code>B</code>继承了接口<code>A</code>，类只要实现接口<code>B</code>，就相当于实现<code>A</code>和<code>B</code>两个接口。</p><p>前一个例子可以用接口继承改写。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">MotorVehicle</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Flyable</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Swimmable</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SuperCar</span> <span class="token keyword">extends</span> <span class="token class-name">MotoVehicle</span><span class="token punctuation">,</span>Flyable<span class="token punctuation">,</span> Swimmable <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SecretCar</span> <span class="token keyword">implements</span> <span class="token class-name">SuperCar</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，类<code>SecretCar</code>通过<code>SuperCar</code>接口，就间接实现了多个接口。</p><p>注意，发生多重实现时（即一个接口同时实现多个接口），不同接口不能有互相冲突的属性。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Flyable</span> <span class="token punctuation">{</span>
  foo<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Swimmable</span> <span class="token punctuation">{</span>
  foo<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，属性<code>foo</code>在两个接口里面的类型不同，如果同时实现这两个接口，就会报错。</p><h3 id="类与接口的合并" tabindex="-1"><a class="header-anchor" href="#类与接口的合并" aria-hidden="true">#</a> 类与接口的合并</h3><p>TypeScript 不允许两个同名的类，但是如果一个类和一个接口同名，那么接口会被合并进类。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

a<span class="token punctuation">.</span>x <span class="token comment">// 1</span>
a<span class="token punctuation">.</span>y <span class="token comment">// 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，类<code>A</code>与接口<code>A</code>同名，后者会被合并进前者的类型定义。</p><p>注意，合并进类的非空属性（上例的<code>y</code>），如果在赋值之前读取，会返回<code>undefined</code>。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span>y <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，根据类型定义，<code>y</code>应该是一个非空属性。但是合并后，<code>y</code>有可能是<code>undefined</code>。</p><h2 id="class-类型" tabindex="-1"><a class="header-anchor" href="#class-类型" aria-hidden="true">#</a> Class 类型</h2><h3 id="实例类型" tabindex="-1"><a class="header-anchor" href="#实例类型" aria-hidden="true">#</a> 实例类型</h3><p>TypeScript 的类本身就是一种类型，但是它代表该类的实例类型，而不是 class 的自身类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Color</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> green<span class="token operator">:</span>Color <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token string">&#39;green&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，定义了一个类<code>Color</code>。它的类名就代表一种类型，实例对象<code>green</code>就属于该类型。</p><p>对于引用实例对象的变量来说，既可以声明类型为 Class，也可以声明类型为 Interface，因为两者都代表实例对象的类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">MotorVehicle</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token keyword">implements</span> <span class="token class-name">MotorVehicle</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// 写法一</span>
<span class="token keyword">const</span> c1<span class="token operator">:</span>Car <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 写法二</span>
<span class="token keyword">const</span> c2<span class="token operator">:</span>MotorVehicle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，变量的类型可以写成类<code>Car</code>，也可以写成接口<code>MotorVehicle</code>。它们的区别是，如果类<code>Car</code>有接口<code>MotoVehicle</code>没有的属性和方法，那么只有变量<code>c1</code>可以调用这些属性和方法。</p><p>作为类型使用时，类名只能表示实例的类型，不能表示类的自身类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 错误</span>
<span class="token keyword">function</span> <span class="token function">createPoint</span><span class="token punctuation">(</span>
  PointClass<span class="token operator">:</span>Point<span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">PointClass</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，函数<code>createPoint()</code>的第一个参数<code>PointClass</code>，需要传入 Point 这个类，但是如果把参数的类型写成<code>Point</code>就会报错，因为<code>Point</code>描述的是实例类型，而不是 Class 的自身类型。</p><p>由于类名作为类型使用，实际上代表一个对象，因此可以把类看作为对象类型起名。事实上，TypeScript 有三种方法可以为对象类型起名：type、interface 和 class。</p><h3 id="类的自身类型" tabindex="-1"><a class="header-anchor" href="#类的自身类型" aria-hidden="true">#</a> 类的自身类型</h3><p>要获得一个类的自身类型，一个简便的方法就是使用 typeof 运算符。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">createPoint</span><span class="token punctuation">(</span>
  PointClass<span class="token operator">:</span><span class="token keyword">typeof</span> Point<span class="token punctuation">,</span>
  x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">)</span><span class="token operator">:</span>Point <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">PointClass</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>createPoint()</code>的第一个参数<code>PointClass</code>是<code>Point</code>类自身，要声明这个参数的类型，简便的方法就是使用<code>typeof Point</code>。因为<code>Point</code>类是一个值，<code>typeof Point</code>返回这个值的类型。注意，<code>createPoint()</code>的返回值类型是<code>Point</code>，代表实例类型。</p><p>JavaScript 语言中，类只是构造函数的一种语法糖，本质上是构造函数的另一种写法。所以，类的自身类型可以写成构造函数的形式。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">createPoint</span><span class="token punctuation">(</span>
  PointClass<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Point<span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">)</span><span class="token operator">:</span>Point <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">PointClass</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，参数<code>PointClass</code>的类型写成了一个构造函数，这时就可以把<code>Point</code>类传入。</p><p>构造函数也可以写成对象形式，所以参数<code>PointClass</code>的类型还有另一种写法。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">createPoint</span><span class="token punctuation">(</span>
  PointClass<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">new</span> <span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> Point
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">)</span><span class="token operator">:</span>Point <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">PointClass</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据上面的写法，可以把构造函数提取出来，单独定义一个接口（interface），这样可以大大提高代码的通用性。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">PointConstructor</span> <span class="token punctuation">{</span>
  <span class="token keyword">new</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span>Point<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createPoint</span><span class="token punctuation">(</span>
  PointClass<span class="token operator">:</span> PointConstructor<span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">)</span><span class="token operator">:</span>Point <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">PointClass</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结一下，类的自身类型就是一个构造函数，可以单独定义一个接口来表示。</p><h3 id="结构类型原则" tabindex="-1"><a class="header-anchor" href="#结构类型原则" aria-hidden="true">#</a> 结构类型原则</h3><p>Class 也遵循“结构类型原则”。一个对象只要满足 Class 的实例结构，就跟该 Class 属于同一个类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  id<span class="token operator">!</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>arg<span class="token operator">:</span>Foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  amount<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">fn</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 正确</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，对象<code>bar</code>满足类<code>Foo</code>的实例结构，只是多了一个属性<code>amount</code>。所以，它可以当作参数，传入函数<code>fn()</code>。</p><p>如果两个类的实例结构相同，那么这两个类就是兼容的，可以用在对方的使用场合。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Customer</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 正确</span>
<span class="token keyword">const</span> cust<span class="token operator">:</span>Customer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>Person</code>和<code>Customer</code>是两个结构相同的类，TypeScript 将它们视为相同类型，因此<code>Person</code>可以用在类型为<code>Customer</code>的场合。</p><p>现在修改一下代码，<code>Person</code>类添加一个属性。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Customer</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 正确</span>
<span class="token keyword">const</span> cust<span class="token operator">:</span>Customer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>Person</code>类添加了一个属性<code>age</code>，跟<code>Customer</code>类的结构不再相同。但是这种情况下，TypeScript 依然认为，<code>Person</code>属于<code>Customer</code>类型。</p><p>这是因为根据“结构类型原则”，只要<code>Person</code>类具有<code>name</code>属性，就满足<code>Customer</code>类型的实例结构，所以可以代替它。反过来就不行，如果<code>Customer</code>类多出一个属性，就会报错。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Customer</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 报错</span>
<span class="token keyword">const</span> cust<span class="token operator">:</span>Customer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>Person</code>类比<code>Customer</code>类少一个属性<code>age</code>，它就不满足<code>Customer</code>类型的实例结构，就报错了。因为在使用<code>Customer</code>类型的情况下，可能会用到它的<code>age</code>属性，而<code>Person</code>类就没有这个属性。</p><p>总之，只要 A 类具有 B 类的结构，哪怕还有额外的属性和方法，TypeScript 也认为 A 兼容 B 的类型。</p><p>不仅是类，如果某个对象跟某个 class 的实例结构相同，TypeScript 也认为两者的类型相同。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;John&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> p<span class="token operator">:</span>Person <span class="token operator">=</span> obj<span class="token punctuation">;</span> <span class="token comment">// 正确</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，对象<code>obj</code>并不是<code>Person</code>的实例，但是赋值给变量<code>p</code>不会报错，TypeScript 认为<code>obj</code>也属于<code>Person</code>类型，因为它们的属性相同。</p><p>由于这种情况，运算符<code>instanceof</code>不适用于判断某个对象是否跟某个 class 属于同一类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>obj <span class="token keyword">instanceof</span> <span class="token class-name">Person</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面示例中，运算符<code>instanceof</code>确认变量<code>obj</code>不是 Person 的实例，但是两者的类型是相同的。</p><p>空类不包含任何成员，任何其他类都可以看作与空类结构相同。因此，凡是类型为空类的地方，所有类（包括对象）都可以使用。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Empty</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>x<span class="token operator">:</span>Empty<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">fn</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">fn</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，函数<code>fn()</code>的参数是一个空类，这意味着任何对象都可以用作<code>fn()</code>的参数。</p><p>注意，确定两个类的兼容关系时，只检查实例成员，不考虑静态成员和构造方法。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> t<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Position</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  z<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> point<span class="token operator">:</span>Point <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Position</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>Point</code>与<code>Position</code>的静态属性和构造方法都不一样，但因为<code>Point</code>的实例成员与<code>Position</code>相同，所以<code>Position</code>兼容<code>Point</code>。</p><p>如果类中存在私有成员（private）或保护成员（protected），那么确定兼容关系时，TypeScript 要求私有成员和保护成员来自同一个类，这意味着两个类需要存在继承关系。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 情况一</span>
<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> name <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> a<span class="token operator">:</span><span class="token constant">A</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">B</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 情况二</span>
<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">protected</span> name <span class="token operator">=</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">protected</span> name <span class="token operator">=</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> a<span class="token operator">:</span><span class="token constant">A</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">B</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>A</code>和<code>B</code>都有私有成员（或保护成员）<code>name</code>，这时只有在<code>B</code>继承<code>A</code>的情况下（<code>class B extends A</code>），<code>B</code>才兼容<code>A</code>。</p><h2 id="类的继承" tabindex="-1"><a class="header-anchor" href="#类的继承" aria-hidden="true">#</a> 类的继承</h2><p>类（这里又称“子类”）可以使用 extends 关键字继承另一个类（这里又称“基类”）的所有属性和方法。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, world!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">B</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b<span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;Hello, world!&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，子类<code>B</code>继承了基类<code>A</code>，因此就拥有了<code>greet()</code>方法，不需要再次在类的内部定义这个方法了。</p><p>根据结构类型原则，子类也可以用于类型为基类的场合。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> a<span class="token operator">:</span><span class="token constant">A</span> <span class="token operator">=</span> b<span class="token punctuation">;</span>
a<span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，变量<code>a</code>的类型是基类，但是可以赋值为子类的实例。</p><p>子类可以覆盖基类的同名方法。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token function">greet</span><span class="token punctuation">(</span>name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，子类<code>B</code>定义了一个方法<code>greet()</code>，覆盖了基类<code>A</code>的同名方法。其中，参数<code>name</code>省略时，就调用基类<code>A</code>的<code>greet()</code>方法，这里可以写成<code>super.greet()</code>，使用<code>super</code>关键字指代基类是常见做法。</p><p>但是，子类的同名方法不能与基类的类型定义相冲突。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, world!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token comment">// 报错</span>
  <span class="token function">greet</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，子类<code>B</code>的<code>greet()</code>有一个<code>name</code>参数，跟基类<code>A</code>的<code>greet()</code>定义不兼容，因此就报错了。</p><p>如果基类包括保护成员（<code>protected</code>修饰符），子类可以将该成员的可访问性设置为公开（<code>public</code>修饰符），也可以保持保护成员不变，但是不能改用私有成员（<code>private</code>修饰符），详见后文。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">protected</span> x<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">protected</span> y<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">protected</span> z<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token comment">// 正确</span>
  <span class="token keyword">public</span> x<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>

  <span class="token comment">// 正确</span>
  <span class="token keyword">protected</span> y<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>

  <span class="token comment">// 报错</span>
  <span class="token keyword">private</span> z<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，子类<code>B</code>将基类<code>A</code>的受保护成员改成私有成员，就会报错。</p><p>注意，<code>extends</code>关键字后面不一定是类名，可以是一个表达式，只要它的类型是构造函数就可以了。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 例一</span>
<span class="token keyword">class</span> <span class="token class-name">MyArray</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 例二</span>
<span class="token keyword">class</span> <span class="token class-name">MyError</span> <span class="token keyword">extends</span> <span class="token class-name">Error</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 例三</span>
<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token function">greeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;Hello from A&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span>
  <span class="token function">greeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;Hello from B&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Greeter</span> <span class="token punctuation">{</span>
  <span class="token function">greeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">GreeterConstructor</span> <span class="token punctuation">{</span>
  <span class="token keyword">new</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Greeter<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getGreeterBase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>GreeterConstructor <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">0.5</span> <span class="token operator">?</span> <span class="token constant">A</span> <span class="token operator">:</span> <span class="token constant">B</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">getGreeterBase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">greeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，例一和例二的<code>extends</code>关键字后面都是构造函数，例三的<code>extends</code>关键字后面是一个表达式，执行后得到的也是一个构造函数。</p><p>对于那些只设置了类型、没有初值的顶层属性，有一个细节需要注意。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  animalStuff<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  dogStuff<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">AnimalHouse</span> <span class="token punctuation">{</span>
  resident<span class="token operator">:</span> Animal<span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>animal<span class="token operator">:</span>Animal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>resident <span class="token operator">=</span> animal<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">DogHouse</span> <span class="token keyword">extends</span> <span class="token class-name">AnimalHouse</span> <span class="token punctuation">{</span>
  resident<span class="token operator">:</span> Dog<span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>dog<span class="token operator">:</span>Dog<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>dog<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，类<code>DogHouse</code>的顶层成员<code>resident</code>只设置了类型（<code>Dog</code>），没有设置初值。这段代码在不同的编译设置下，编译结果不一样。</p><p>如果编译设置的<code>target</code>设成大于等于<code>ES2022</code>，或者<code>useDefineForClassFields</code>设成<code>true</code>，那么下面代码的执行结果是不一样的。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> dog <span class="token operator">=</span> <span class="token punctuation">{</span>
  animalStuff<span class="token operator">:</span> <span class="token string">&#39;animal&#39;</span><span class="token punctuation">,</span>
  dogStuff<span class="token operator">:</span> <span class="token string">&#39;dog&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> dogHouse <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DogHouse</span><span class="token punctuation">(</span>dog<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dogHouse<span class="token punctuation">.</span>resident<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,135),k=s("code",null,"DogHouse",-1),v=s("code",null,"resident",-1),m=s("code",null,"undefined",-1),b=s("code",null,"dog",-1),y=s("code",null,"undefined",-1),g={href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#the-usedefineforclassfields-flag-and-the-declare-property-modifier",target:"_blank",rel:"noopener noreferrer"},w=p(`<p>解决方法就是使用<code>declare</code>命令，去声明顶层成员的类型，告诉 TypeScript 这些成员的赋值由基类实现。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">DogHouse</span> <span class="token keyword">extends</span> <span class="token class-name">AnimalHouse</span> <span class="token punctuation">{</span>
  <span class="token keyword">declare</span> resident<span class="token operator">:</span> Dog<span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>dog<span class="token operator">:</span>Dog<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>dog<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>resident</code>属性的类型声明前面用了<code>declare</code>命令，这样就能确保在编译目标大于等于<code>ES2022</code>时（或者打开<code>useDefineForClassFields</code>时），代码行为正确。</p><h2 id="可访问性修饰符" tabindex="-1"><a class="header-anchor" href="#可访问性修饰符" aria-hidden="true">#</a> 可访问性修饰符</h2><p>类的内部成员的外部可访问性，由三个可访问性修饰符（access modifiers）控制：<code>public</code>、<code>private</code>和<code>protected</code>。</p><p>这三个修饰符的位置，都写在属性或方法的最前面。</p><h3 id="public" tabindex="-1"><a class="header-anchor" href="#public" aria-hidden="true">#</a> public</h3><p><code>public</code>修饰符表示这是公开成员，外部可以自由访问。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Greeter</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hi!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> g <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Greeter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
g<span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>greet()</code>方法前面的<code>public</code>修饰符，表示该方法可以在类的外部调用，即外部实例可以调用。</p><p><code>public</code>修饰符是默认修饰符，如果省略不写，实际上就带有该修饰符。因此，类的属性和方法默认都是外部可访问的。</p><p>正常情况下，除非为了醒目和代码可读性，<code>public</code>都是省略不写的。</p><h3 id="private" tabindex="-1"><a class="header-anchor" href="#private" aria-hidden="true">#</a> private</h3><p><code>private</code>修饰符表示私有成员，只能用在当前类的内部，类的实例和子类都不能使用该成员。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> x<span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span>x <span class="token comment">// 报错</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token function">showX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，属性<code>x</code>前面有<code>private</code>修饰符，表示这是私有成员。因此，实例对象和子类使用该成员，都会报错。</p><p>注意，子类不能定义父类私有成员的同名成员。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>A</code>类有一个私有属性<code>x</code>，子类<code>B</code>就不能定义自己的属性<code>x</code>了。</p><p>如果在类的内部，当前类的实例可以获取私有成员。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

  <span class="token function">f</span><span class="token punctuation">(</span>obj<span class="token operator">:</span><span class="token constant">A</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span><span class="token function">f</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，在类<code>A</code>内部，<code>A</code>的实例对象可以获取私有成员<code>x</code>。</p><p>严格地说，<code>private</code>定义的私有成员，并不是真正意义的私有成员。一方面，编译成 JavaScript 后，<code>private</code>关键字就被剥离了，这时外部访问该成员就不会报错。另一方面，由于前一个原因，TypeScript 对于访问<code>private</code>成员没有严格禁止，使用方括号写法（<code>[]</code>）或者<code>in</code>运算符，实例对象就能访问该成员。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">[</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">]</span> <span class="token comment">// 1</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;x&#39;</span> <span class="token keyword">in</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 正确</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>A</code>类的属性<code>x</code>是私有属性，但是实例使用方括号，就可以读取这个属性，或者使用<code>in</code>运算符检查这个属性是否存在，都可以正确执行。</p><p>由于<code>private</code>存在这些问题，加上它是 ES2022 标准发布前出台的，而 ES2022 引入了自己的私有成员写法<code>#propName</code>。因此建议不使用<code>private</code>，改用 ES2022 的写法，获得真正意义的私有成员。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  #x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">[</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">]</span> <span class="token comment">// 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，采用了 ES2022 的私有成员写法（属性名前加<code>#</code>），TypeScript 就正确识别了实例对象没有属性<code>x</code>，从而报错。</p><p>构造方法也可以是私有的，这就直接防止了使用<code>new</code>命令生成实例对象，只能在类的内部创建实例对象。</p><p>这时一般会有一个静态方法，充当工厂函数，强制所有实例都通过该方法生成。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> instance<span class="token operator">?</span><span class="token operator">:</span> Singleton<span class="token punctuation">;</span>

  <span class="token keyword">private</span> <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Singleton<span class="token punctuation">.</span>instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Singleton<span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> Singleton<span class="token punctuation">.</span>instance<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> s <span class="token operator">=</span> Singleton<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例使用私有构造方法，实现了单例模式。想要获得 Singleton 的实例，不能使用<code>new</code>命令，只能使用<code>getInstance()</code>方法。</p><h3 id="protected" tabindex="-1"><a class="header-anchor" href="#protected" aria-hidden="true">#</a> protected</h3><p><code>protected</code>修饰符表示该成员是保护成员，只能在类的内部使用该成员，实例无法使用该成员，但是子类内部可以使用。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">protected</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token function">getX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">B</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

a<span class="token punctuation">.</span>x <span class="token comment">// 报错</span>
b<span class="token punctuation">.</span><span class="token function">getX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，类<code>A</code>的属性<code>x</code>是保护成员，直接从实例读取该属性（<code>a.x</code>）会报错，但是子类<code>B</code>内部可以读取该属性。</p><p>子类不仅可以拿到父类的保护成员，还可以定义同名成员。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">protected</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，子类<code>B</code>定义了父类<code>A</code>的同名成员<code>x</code>，并且父类的<code>x</code>是保护成员，子类将其改成了公开成员。<code>B</code>类的<code>x</code>属性前面没有修饰符，等同于修饰符是<code>public</code>，外界可以读取这个属性。</p><p>在类的外部，实例对象不能读取保护成员，但是在类的内部可以。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">protected</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token function">f</span><span class="token punctuation">(</span>obj<span class="token operator">:</span><span class="token constant">A</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

a<span class="token punctuation">.</span>x <span class="token comment">// 报错</span>
a<span class="token punctuation">.</span><span class="token function">f</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，属性<code>x</code>是类<code>A</code>的保护成员，在类的外部，实例对象<code>a</code>拿不到这个属性。但是，实例对象<code>a</code>传入类<code>A</code>的内部，就可以从<code>a</code>拿到<code>x</code>。</p><h3 id="实例属性的简写形式" tabindex="-1"><a class="header-anchor" href="#实例属性的简写形式" aria-hidden="true">#</a> 实例属性的简写形式</h3><p>实际开发中，很多实例属性的值，是通过构造方法传入的。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面实例中，属性<code>x</code>和<code>y</code>的值是通过构造方法的参数传入的。</p><p>这样的写法等于对同一个属性要声明两次类型，一次在类的头部，另一次在构造方法的参数里面。这有些累赘，TypeScript 就提供了一种简写形式。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token keyword">public</span> x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>
    <span class="token keyword">public</span> y<span class="token operator">:</span><span class="token builtin">number</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
p<span class="token punctuation">.</span>x <span class="token comment">// 10</span>
p<span class="token punctuation">.</span>y <span class="token comment">// 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，构造方法的参数<code>x</code>前面有<code>public</code>修饰符，这时 TypeScript 就会自动声明一个公开属性<code>x</code>，不必在构造方法里面写任何代码，同时还会设置<code>x</code>的值为构造方法的参数值。注意，这里的<code>public</code>不能省略。</p><p>除了<code>public</code>修饰符，构造方法的参数名只要有<code>private</code>、<code>protected</code>、<code>readonly</code>修饰符，都会自动声明对应修饰符的实例属性。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token keyword">public</span> a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    <span class="token keyword">protected</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    <span class="token keyword">private</span> c<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
    <span class="token keyword">readonly</span> d<span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译结果</span>
<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
    a<span class="token punctuation">;</span>
    b<span class="token punctuation">;</span>
    c<span class="token punctuation">;</span>
    d<span class="token punctuation">;</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> a<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>b <span class="token operator">=</span> b<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>c <span class="token operator">=</span> c<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>d <span class="token operator">=</span> d<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，从编译结果可以看到，构造方法的<code>a</code>、<code>b</code>、<code>c</code>、<code>d</code>会生成对应的实例属性。</p><p><code>readonly</code>还可以与其他三个可访问性修饰符，一起使用。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token keyword">public</span> <span class="token keyword">readonly</span> x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>
    <span class="token keyword">protected</span> <span class="token keyword">readonly</span> y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> z<span class="token operator">:</span><span class="token builtin">number</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="静态成员" tabindex="-1"><a class="header-anchor" href="#静态成员" aria-hidden="true">#</a> 静态成员</h2><p>类的内部可以使用<code>static</code>关键字，定义静态成员。</p><p>静态成员是只能通过类本身使用的成员，不能通过实例对象使用。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token function">printX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>MyClass<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

MyClass<span class="token punctuation">.</span>x <span class="token comment">// 0</span>
MyClass<span class="token punctuation">.</span><span class="token function">printX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>x</code>是静态属性，<code>printX()</code>是静态方法。它们都必须通过<code>MyClass</code>获取，而不能通过实例对象调用。</p><p><code>static</code>关键字前面可以使用 public、private、protected 修饰符。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

MyClass<span class="token punctuation">.</span>x <span class="token comment">// 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，静态属性<code>x</code>前面有<code>private</code>修饰符，表示只能在<code>MyClass</code>内部使用，如果在外部调用这个属性就会报错。</p><p>静态私有属性也可以用 ES6 语法的<code>#</code>前缀表示，上面示例可以改写如下。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> #x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>public</code>和<code>protected</code>的静态成员可以被继承。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">protected</span> <span class="token keyword">static</span> y <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">getY</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token constant">B</span><span class="token punctuation">.</span>y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token constant">B</span><span class="token punctuation">.</span>x <span class="token comment">// 1</span>
<span class="token constant">B</span><span class="token punctuation">.</span><span class="token function">getY</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，类<code>A</code>的静态属性<code>x</code>和<code>y</code>都被<code>B</code>继承，公开成员<code>x</code>可以在<code>B</code>的外部获取，保护成员<code>y</code>只能在<code>B</code>的内部获取。</p><h2 id="泛型类" tabindex="-1"><a class="header-anchor" href="#泛型类" aria-hidden="true">#</a> 泛型类</h2><p>类也可以写成泛型，使用类型参数。关于泛型的详细介绍，请看《泛型》一章。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Box<span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  contents<span class="token operator">:</span> Type<span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>value<span class="token operator">:</span>Type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>contents <span class="token operator">=</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> b<span class="token operator">:</span>Box<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Box</span><span class="token punctuation">(</span><span class="token string">&#39;hello!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，类<code>Box</code>有类型参数<code>Type</code>，因此属于泛型类。新建实例时，变量的类型声明需要带有类型参数的值，不过本例等号左边的<code>Box&lt;string&gt;</code>可以省略不写，因为可以从等号右边推断得到。</p><p>注意，静态成员不能使用泛型的类型参数。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Box<span class="token operator">&lt;</span>Type<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> defaultContents<span class="token operator">:</span> Type<span class="token punctuation">;</span> <span class="token comment">// 报错</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，静态属性<code>defaultContents</code>的类型写成类型参数<code>Type</code>会报错。因为这意味着调用时必须给出类型参数（即写成<code>Box&lt;string&gt;.defaultContents</code>），并且类型参数发生变化，这个属性也会跟着变，这并不是好的做法。</p><h2 id="抽象类-抽象成员" tabindex="-1"><a class="header-anchor" href="#抽象类-抽象成员" aria-hidden="true">#</a> 抽象类，抽象成员</h2><p>TypeScript 允许在类的定义前面，加上关键字<code>abstract</code>，表示该类不能被实例化，只能当作其他类的模板。这种类就叫做“抽象类”（abstract class）。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，直接新建抽象类的实例，会报错。</p><p>抽象类只能当作基类使用，用来在它的基础上定义子类。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  amount <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">B</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

b<span class="token punctuation">.</span>id <span class="token comment">// 1</span>
b<span class="token punctuation">.</span>amount <span class="token comment">// 100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>A</code>是一个抽象类，<code>B</code>是<code>A</code>的子类，继承了<code>A</code>的所有成员，并且可以定义自己的成员和实例化。</p><p>抽象类的子类也可以是抽象类，也就是说，抽象类可以继承其他抽象类。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  foo<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  bar<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>抽象类的内部可以有已经实现好的属性和方法，也可以有还未实现的属性和方法。后者就叫做“抽象成员”（abstract member），即属性名和方法名有<code>abstract</code>关键字，表示该方法需要子类实现。如果子类没有实现抽象成员，就会报错。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">abstract</span> foo<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
  bar<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  foo <span class="token operator">=</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，抽象类<code>A</code>定义了抽象属性<code>foo</code>，子类<code>B</code>必须实现这个属性，否则会报错。</p><p>下面是抽象方法的例子。如果抽象类的方法前面加上<code>abstract</code>，就表明子类必须给出该方法的实现。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">abstract</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">B executed</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里有几个注意点。</p><p>（1）抽象成员只能存在于抽象类，不能存在于普通类。</p><p>（2）抽象成员不能有具体实现的代码。也就是说，已经实现好的成员前面不能加<code>abstract</code>关键字。</p><p>（3）抽象成员前也不能有<code>private</code>修饰符，否则无法在子类中实现该成员。</p><p>（4）一个子类最多只能继承一个抽象类。</p><p>总之，抽象类的作用是，确保各种相关的子类都拥有跟基类相同的接口，可以看作是模板。其中的抽象成员都是必须由子类实现的成员，非抽象成员则表示基类已经实现的、由所有子类共享的成员。</p><h2 id="this-问题" tabindex="-1"><a class="header-anchor" href="#this-问题" aria-hidden="true">#</a> this 问题</h2><p>类的方法经常用到<code>this</code>关键字，它表示该方法当前所在的对象。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  name <span class="token operator">=</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">;</span>

  <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;A&#39;</span>

<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>
  getName<span class="token operator">:</span> a<span class="token punctuation">.</span>getName
<span class="token punctuation">}</span><span class="token punctuation">;</span>
b<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;b&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，变量<code>a</code>和<code>b</code>的<code>getName()</code>是同一个方法，但是执行结果不一样，原因就是它们内部的<code>this</code>指向不一样的对象。如果<code>getName()</code>在变量<code>a</code>上运行，<code>this</code>指向<code>a</code>；如果在<code>b</code>上运行，<code>this</code>指向<code>b</code>。</p><p>有些场合需要给出<code>this</code>类型，但是 JavaScript 函数通常不带有<code>this</code>参数，这时 TypeScript 允许函数增加一个名为<code>this</code>的参数，放在参数列表的第一位，用来描述函数内部的<code>this</code>关键字的类型。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 编译前</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>
  <span class="token keyword">this</span><span class="token operator">:</span> SomeType<span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>

<span class="token comment">// 编译后</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，函数<code>fn()</code>的第一个参数是<code>this</code>，用来声明函数内部的<code>this</code>的类型。编译时，TypeScript 一旦发现函数的第一个参数名为<code>this</code>，则会去除这个参数，即编译结果不会带有该参数。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  name <span class="token operator">=</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">;</span>

  <span class="token function">getName</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> <span class="token constant">A</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> a<span class="token punctuation">.</span>getName<span class="token punctuation">;</span>

<span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，类<code>A</code>的<code>getName()</code>添加了<code>this</code>参数，如果直接调用这个方法，<code>this</code>的类型就会跟声明的类型不一致，从而报错。</p><p><code>this</code>参数的类型可以声明为各种对象。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>
  <span class="token keyword">this</span><span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Jack&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，参数<code>this</code>的类型是一个带有<code>name</code>属性的对象，不符合这个条件的<code>this</code>都会报错。</p><p>TypeScript 提供了一个<code>noImplicitThis</code>编译选项。如果打开了这个设置项，如果<code>this</code>的值推断为<code>any</code>类型，就会报错。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// noImplicitThis 打开</span>

<span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token keyword">public</span> width<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>
    <span class="token keyword">public</span> height<span class="token operator">:</span><span class="token builtin">number</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">getAreaFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token punctuation">;</span> <span class="token comment">// 报错</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>getAreaFunction()</code>方法返回一个函数，这个函数里面用到了<code>this</code>，但是这个<code>this</code>跟<code>Rectangle</code>这个类没关系，它的类型推断为<code>any</code>，所以就报错了。</p><p>在类的内部，<code>this</code>本身也可以当作类型使用，表示当前类的实例对象。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Box</span> <span class="token punctuation">{</span>
  contents<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>

  <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">this</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>contents <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>set()</code>方法的返回值类型就是<code>this</code>，表示当前的实例对象。</p><p>注意，<code>this</code>类型不允许应用于静态成员。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> a<span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，静态属性<code>a</code>的返回值类型是<code>this</code>，就报错了。原因是<code>this</code>类型表示实例对象，但是静态成员拿不到实例对象。</p><p>有些方法返回一个布尔值，表示当前的<code>this</code>是否属于某种类型。这时，这些方法的返回值类型可以写成<code>this is Type</code>的形式，其中用到了<code>is</code>运算符。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">FileSystemObject</span> <span class="token punctuation">{</span>
  <span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span> <span class="token keyword">is</span> FileRep <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">FileRep</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">isDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span> <span class="token keyword">is</span> Directory <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">Directory</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，两个方法的返回值类型都是布尔值，写成<code>this is Type</code>的形式，可以精确表示返回值。<code>is</code>运算符的介绍详见《类型断言》一章。</p><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,119),h={href:"http://fritzthecat-blog.blogspot.com/2018/06/typescript-constructor-in-interface.html",target:"_blank",rel:"noopener noreferrer"};function x(f,A){const a=c("ExternalLinkIcon");return o(),l("div",null,[u,s("p",null,[n("TypeScript 5.1 版做出了"),s("a",d,[n("改变"),e(a)]),n("，现在两者可以不兼容。")]),r,s("p",null,[n("上面示例中，"),k,n("实例的属性"),v,n("输出的是"),m,n("，而不是预料的"),b,n("。原因在于 ES2022 标准的 Class Fields 部分，与早期的 TypeScript 实现不一致，导致子类的那些只设置类型、没有设置初值的顶层成员在基类中被赋值后，会在子类被重置为"),y,n("，详细的解释参见《tsconfig.json》一章，以及官方 3.7 版本的"),s("a",g,[n("发布说明"),e(a)]),n("。")]),w,s("ul",null,[s("li",null,[s("a",h,[n("TypeScript Constructor in Interface"),e(a)])])])])}const B=t(i,[["render",x],["__file","class.html.vue"]]);export{B as default};

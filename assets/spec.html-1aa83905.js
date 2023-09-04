import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as l,a as e,b as n,d as s,e as o}from"./app-bede4f5a.js";const d={},i=e("h1",{id:"读懂-ecmascript-规格",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#读懂-ecmascript-规格","aria-hidden":"true"},"#"),n(" 读懂 ECMAScript 规格")],-1),r=e("h2",{id:"概述",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#概述","aria-hidden":"true"},"#"),n(" 概述")],-1),u=e("p",null,"规格文件是计算机语言的官方标准，详细描述语法规则和实现方法。",-1),k=e("p",null,"一般来说，没有必要阅读规格，除非你要写编译器。因为规格写得非常抽象和精炼，又缺乏实例，不容易理解，而且对于解决实际的应用问题，帮助不大。但是，如果你遇到疑难的语法问题，实在找不到答案，这时可以去查看规格文件，了解语言标准是怎么说的。规格是解决问题的“最后一招”。",-1),m=e("p",null,"这对 JavaScript 语言很有必要。因为它的使用场景复杂，语法规则不统一，例外很多，各种运行环境的行为不一致，导致奇怪的语法问题层出不穷，任何语法书都不可能囊括所有情况。查看规格，不失为一种解决语法问题的最可靠、最权威的终极方法。",-1),b=e("p",null,"本章介绍如何读懂 ECMAScript 6 的规格文件。",-1),h={href:"http://www.ecma-international.org/ecma-262/6.0/",target:"_blank",rel:"noopener noreferrer"},v=o(`<p>这个规格文件相当庞大，一共有 26 章，A4 打印的话，足足有 545 页。它的特点就是规定得非常细致，每一个语法行为、每一个函数的实现都做了详尽的清晰的描述。基本上，编译器作者只要把每一步翻译成代码就可以了。这很大程度上，保证了所有 ES6 实现都有一致的行为。</p><p>ECMAScript 6 规格的 26 章之中，第 1 章到第 3 章是对文件本身的介绍，与语言关系不大。第 4 章是对这门语言总体设计的描述，有兴趣的读者可以读一下。第 5 章到第 8 章是语言宏观层面的描述。第 5 章是规格的名词解释和写法的介绍，第 6 章介绍数据类型，第 7 章介绍语言内部用到的抽象操作，第 8 章介绍代码如何运行。第 9 章到第 26 章介绍具体的语法。</p><p>对于一般用户来说，除了第 4 章，其他章节都涉及某一方面的细节，不用通读，只要在用到的时候，查阅相关章节即可。</p><h2 id="术语" tabindex="-1"><a class="header-anchor" href="#术语" aria-hidden="true">#</a> 术语</h2><p>ES6 规格使用了一些专门的术语，了解这些术语，可以帮助你读懂规格。本节介绍其中的几个。</p><h3 id="抽象操作" tabindex="-1"><a class="header-anchor" href="#抽象操作" aria-hidden="true">#</a> 抽象操作</h3><p>所谓“抽象操作”（abstract operations）就是引擎的一些内部方法，外部不能调用。规格定义了一系列的抽象操作，规定了它们的行为，留给各种引擎自己去实现。</p><p>举例来说，<code>Boolean(value)</code>的算法，第一步是这样的。</p><blockquote><ol><li>Let <code>b</code> be <code>ToBoolean(value)</code>.</li></ol></blockquote><p>这里的<code>ToBoolean</code>就是一个抽象操作，是引擎内部求出布尔值的算法。</p><p>许多函数的算法都会多次用到同样的步骤，所以 ES6 规格将它们抽出来，定义成“抽象操作”，方便描述。</p><h3 id="record-和-field" tabindex="-1"><a class="header-anchor" href="#record-和-field" aria-hidden="true">#</a> Record 和 field</h3><p>ES6 规格将键值对（key-value map）的数据结构称为 Record，其中的每一组键值对称为 field。这就是说，一个 Record 由多个 field 组成，而每个 field 都包含一个键名（key）和一个键值（value）。</p><h3 id="notation" tabindex="-1"><a class="header-anchor" href="#notation" aria-hidden="true">#</a> [[Notation]]</h3><p>ES6 规格大量使用<code>[[Notation]]</code>这种书写法，比如<code>[[Value]]</code>、<code>[[Writable]]</code>、<code>[[Get]]</code>、<code>[[Set]]</code>等等。它用来指代 field 的键名。</p><p>举例来说，<code>obj</code>是一个 Record，它有一个<code>Prototype</code>属性。ES6 规格不会写<code>obj.Prototype</code>，而是写<code>obj.[[Prototype]]</code>。一般来说，使用<code>[[Notation]]</code>这种书写法的属性，都是对象的内部属性。</p><p>所有的 JavaScript 函数都有一个内部属性<code>[[Call]]</code>，用来运行该函数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">F</span><span class="token punctuation">.</span><span class="token punctuation">[</span><span class="token punctuation">[</span>Call<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token constant">V</span><span class="token punctuation">,</span> argumentsList<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，<code>F</code>是一个函数对象，<code>[[Call]]</code>是它的内部方法，<code>F.[[call]]()</code>表示运行该函数，<code>V</code>表示<code>[[Call]]</code>运行时<code>this</code>的值，<code>argumentsList</code>则是调用时传入函数的参数。</p><h3 id="completion-record" tabindex="-1"><a class="header-anchor" href="#completion-record" aria-hidden="true">#</a> Completion Record</h3><p>每一个语句都会返回一个 Completion Record，表示运行结果。每个 Completion Record 有一个<code>[[Type]]</code>属性，表示运行结果的类型。</p><p><code>[[Type]]</code>属性有五种可能的值。</p><ul><li>normal</li><li>return</li><li>throw</li><li>break</li><li>continue</li></ul><p>如果<code>[[Type]]</code>的值是<code>normal</code>，就称为 normal completion，表示运行正常。其他的值，都称为 abrupt completion。其中，开发者只需要关注<code>[[Type]]</code>为<code>throw</code>的情况，即运行出错；<code>break</code>、<code>continue</code>、<code>return</code>这三个值都只出现在特定场景，可以不用考虑。</p><h2 id="抽象操作的标准流程" tabindex="-1"><a class="header-anchor" href="#抽象操作的标准流程" aria-hidden="true">#</a> 抽象操作的标准流程</h2><p>抽象操作的运行流程，一般是下面这样。</p><blockquote><ol><li>Let <code>result</code> be <code>AbstractOp()</code>.</li><li>If <code>result</code> is an abrupt completion, return <code>result</code>.</li><li>Set <code>result</code> to <code>result.[[Value]]</code>.</li><li>return <code>result</code>.</li></ol></blockquote><p>上面的第一步调用了抽象操作<code>AbstractOp()</code>，得到<code>result</code>，这是一个 Completion Record。第二步，如果<code>result</code>属于 abrupt completion，就直接返回。如果此处没有返回，表示<code>result</code>属于 normal completion。第三步，将<code>result</code>的值设置为<code>resultCompletionRecord.[[Value]]</code>。第四步，返回<code>result</code>。</p><p>ES6 规格将这个标准流程，使用简写的方式表达。</p><blockquote><ol><li>Let <code>result</code> be <code>AbstractOp()</code>.</li><li><code>ReturnIfAbrupt(result)</code>.</li><li>return <code>result</code>.</li></ol></blockquote><p>这个简写方式里面的<code>ReturnIfAbrupt(result)</code>，就代表了上面的第二步和第三步，即如果有报错，就返回错误，否则取出值。</p><p>甚至还有进一步的简写格式。</p><blockquote><ol><li>Let <code>result</code> be <code>? AbstractOp()</code>.</li><li>return <code>result</code>.</li></ol></blockquote><p>上面流程的<code>?</code>，就代表<code>AbstractOp()</code>可能会报错。一旦报错，就返回错误，否则取出值。</p><p>除了<code>?</code>，ES 6 规格还使用另一个简写符号<code>!</code>。</p><blockquote><ol><li>Let <code>result</code> be <code>! AbstractOp()</code>.</li><li>return <code>result</code>.</li></ol></blockquote><p>上面流程的<code>!</code>，代表<code>AbstractOp()</code>不会报错，返回的一定是 normal completion，总是可以取出值。</p><h2 id="相等运算符" tabindex="-1"><a class="header-anchor" href="#相等运算符" aria-hidden="true">#</a> 相等运算符</h2><p>下面通过一些例子，介绍如何使用这份规格。</p><p>相等运算符（<code>==</code>）是一个很让人头痛的运算符，它的语法行为多变，不符合直觉。这个小节就看看规格怎么规定它的行为。</p><p>请看下面这个表达式，请问它的值是多少。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">0</span> <span class="token operator">==</span> <span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,42),y={href:"http://www.ecma-international.org/ecma-262/6.0/#sec-abstract-equality-comparison",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"==",-1),g=o("<p>规格对每一种语法行为的描述，都分成两部分：先是总体的行为描述，然后是实现的算法细节。相等运算符的总体描述，只有一句话。</p><blockquote><p>“The comparison <code>x == y</code>, where <code>x</code> and <code>y</code> are values, produces <code>true</code> or <code>false</code>.”</p></blockquote><p>上面这句话的意思是，相等运算符用于比较两个值，返回<code>true</code>或<code>false</code>。</p><p>下面是算法细节。</p><blockquote><ol><li>ReturnIfAbrupt(x).</li><li>ReturnIfAbrupt(y).</li><li>If <code>Type(x)</code> is the same as <code>Type(y)</code>, then <ol><li>Return the result of performing Strict Equality Comparison <code>x === y</code>.</li></ol></li><li>If <code>x</code> is <code>null</code> and <code>y</code> is <code>undefined</code>, return <code>true</code>.</li><li>If <code>x</code> is <code>undefined</code> and <code>y</code> is <code>null</code>, return <code>true</code>.</li><li>If <code>Type(x)</code> is Number and <code>Type(y)</code> is String, return the result of the comparison <code>x == ToNumber(y)</code>.</li><li>If <code>Type(x)</code> is String and <code>Type(y)</code> is Number, return the result of the comparison <code>ToNumber(x) == y</code>.</li><li>If <code>Type(x)</code> is Boolean, return the result of the comparison <code>ToNumber(x) == y</code>.</li><li>If <code>Type(y)</code> is Boolean, return the result of the comparison <code>x == ToNumber(y)</code>.</li><li>If <code>Type(x)</code> is either String, Number, or Symbol and <code>Type(y)</code> is Object, then return the result of the comparison <code>x == ToPrimitive(y)</code>.</li><li>If <code>Type(x)</code> is Object and <code>Type(y)</code> is either String, Number, or Symbol, then return the result of the comparison <code>ToPrimitive(x) == y</code>.</li><li>Return <code>false</code>.</li></ol></blockquote><p>上面这段算法，一共有 12 步，翻译如下。</p><blockquote><ol><li>如果<code>x</code>不是正常值（比如抛出一个错误），中断执行。</li><li>如果<code>y</code>不是正常值，中断执行。</li><li>如果<code>Type(x)</code>与<code>Type(y)</code>相同，执行严格相等运算<code>x === y</code>。</li><li>如果<code>x</code>是<code>null</code>，<code>y</code>是<code>undefined</code>，返回<code>true</code>。</li><li>如果<code>x</code>是<code>undefined</code>，<code>y</code>是<code>null</code>，返回<code>true</code>。</li><li>如果<code>Type(x)</code>是数值，<code>Type(y)</code>是字符串，返回<code>x == ToNumber(y)</code>的结果。</li><li>如果<code>Type(x)</code>是字符串，<code>Type(y)</code>是数值，返回<code>ToNumber(x) == y</code>的结果。</li><li>如果<code>Type(x)</code>是布尔值，返回<code>ToNumber(x) == y</code>的结果。</li><li>如果<code>Type(y)</code>是布尔值，返回<code>x == ToNumber(y)</code>的结果。</li><li>如果<code>Type(x)</code>是字符串或数值或<code>Symbol</code>值，<code>Type(y)</code>是对象，返回<code>x == ToPrimitive(y)</code>的结果。</li><li>如果<code>Type(x)</code>是对象，<code>Type(y)</code>是字符串或数值或<code>Symbol</code>值，返回<code>ToPrimitive(x) == y</code>的结果。</li><li>返回<code>false</code>。</li></ol></blockquote>",7),_=e("code",null,"0",-1),w=e("code",null,"null",-1),T={href:"http://www.ecma-international.org/ecma-262/6.0/#sec-terms-and-definitions-null-type",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"typeof",-1),A=e("code",null,"false",-1),I=o(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">0</span> <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="数组的空位" tabindex="-1"><a class="header-anchor" href="#数组的空位" aria-hidden="true">#</a> 数组的空位</h2><p>下面再看另一个例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> a2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

a1<span class="token punctuation">.</span>length <span class="token comment">// 3</span>
a2<span class="token punctuation">.</span>length <span class="token comment">// 3</span>

a1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// undefined</span>
a2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// undefined</span>

a1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> a2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，数组<code>a1</code>的成员是三个<code>undefined</code>，数组<code>a2</code>的成员是三个空位。这两个数组很相似，长度都是 3，每个位置的成员读取出来都是<code>undefined</code>。</p><p>但是，它们实际上存在重大差异。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">0</span> <span class="token keyword">in</span> a1 <span class="token comment">// true</span>
<span class="token number">0</span> <span class="token keyword">in</span> a2 <span class="token comment">// false</span>

a1<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
a2<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// false</span>

Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>a1<span class="token punctuation">)</span> <span class="token comment">// [&quot;0&quot;, &quot;1&quot;, &quot;2&quot;]</span>
Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>a2<span class="token punctuation">)</span> <span class="token comment">// []</span>

a1<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">n</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// [1, 1, 1]</span>
a2<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">n</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// [, , ,]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码一共列出了四种运算，数组<code>a1</code>和<code>a2</code>的结果都不一样。前三种运算（<code>in</code>运算符、数组的<code>hasOwnProperty</code>方法、<code>Object.keys</code>方法）都说明，数组<code>a2</code>取不到属性名。最后一种运算（数组的<code>map</code>方法）说明，数组<code>a2</code>没有发生遍历。</p><p>为什么<code>a1</code>与<code>a2</code>成员的行为不一致？数组的成员是<code>undefined</code>或空位，到底有什么不同？</p>`,9),q={href:"http://www.ecma-international.org/ecma-262/6.0/#sec-array-initializer",target:"_blank",rel:"noopener noreferrer"},S=o('<blockquote><p>“Array elements may be elided at the beginning, middle or end of the element list. Whenever a comma in the element list is not preceded by an AssignmentExpression (i.e., a comma at the beginning or after another comma), the missing array element contributes to the length of the Array and increases the index of subsequent elements. Elided array elements are not defined. If an element is elided at the end of an array, that element does not contribute to the length of the Array.”</p></blockquote><p>翻译如下。</p><blockquote><p>&quot;数组成员可以省略。只要逗号前面没有任何表达式，数组的<code>length</code>属性就会加 1，并且相应增加其后成员的位置索引。被省略的成员不会被定义。如果被省略的成员是数组最后一个成员，则不会导致数组<code>length</code>属性增加。”</p></blockquote><p>上面的规格说得很清楚，数组的空位会反映在<code>length</code>属性，也就是说空位有自己的位置，但是这个位置的值是未定义，即这个值是不存在的。如果一定要读取，结果就是<code>undefined</code>（因为<code>undefined</code>在 JavaScript 语言中表示不存在）。</p><p>这就解释了为什么<code>in</code>运算符、数组的<code>hasOwnProperty</code>方法、<code>Object.keys</code>方法，都取不到空位的属性名。因为这个属性名根本就不存在，规格里面没说要为空位分配属性名(位置索引），只说要为下一个元素的位置索引加 1。</p><p>至于为什么数组的<code>map</code>方法会跳过空位，请看下一节。</p><h2 id="数组的-map-方法" tabindex="-1"><a class="header-anchor" href="#数组的-map-方法" aria-hidden="true">#</a> 数组的 map 方法</h2>',7),O={href:"http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.map",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,"map",-1),j=e("code",null,"map",-1),C=o(`<p>后面的算法描述是这样的。</p><blockquote><ol><li>Let <code>O</code> be <code>ToObject(this value)</code>.</li><li><code>ReturnIfAbrupt(O)</code>.</li><li>Let <code>len</code> be <code>ToLength(Get(O, &quot;length&quot;))</code>.</li><li><code>ReturnIfAbrupt(len)</code>.</li><li>If <code>IsCallable(callbackfn)</code> is <code>false</code>, throw a TypeError exception.</li><li>If <code>thisArg</code> was supplied, let <code>T</code> be <code>thisArg</code>; else let <code>T</code> be <code>undefined</code>.</li><li>Let <code>A</code> be <code>ArraySpeciesCreate(O, len)</code>.</li><li><code>ReturnIfAbrupt(A)</code>.</li><li>Let <code>k</code> be 0.</li><li>Repeat, while <code>k</code> &lt; <code>len</code><ol><li>Let <code>Pk</code> be <code>ToString(k)</code>.</li><li>Let <code>kPresent</code> be <code>HasProperty(O, Pk)</code>.</li><li><code>ReturnIfAbrupt(kPresent)</code>.</li><li>If <code>kPresent</code> is <code>true</code>, then <ol><li>Let <code>kValue</code> be <code>Get(O, Pk)</code>.</li><li><code>ReturnIfAbrupt(kValue)</code>.</li><li>Let <code>mappedValue</code> be <code>Call(callbackfn, T, «kValue, k, O»)</code>.</li><li><code>ReturnIfAbrupt(mappedValue)</code>.</li><li>Let <code>status</code> be <code>CreateDataPropertyOrThrow (A, Pk, mappedValue)</code>.</li><li><code>ReturnIfAbrupt(status)</code>.</li></ol></li><li>Increase <code>k</code> by 1.</li></ol></li><li>Return <code>A</code>.</li></ol></blockquote><p>翻译如下。</p><blockquote><ol><li>得到当前数组的<code>this</code>对象</li><li>如果报错就返回</li><li>求出当前数组的<code>length</code>属性</li><li>如果报错就返回</li><li>如果 map 方法的参数<code>callbackfn</code>不可执行，就报错</li><li>如果 map 方法的参数之中，指定了<code>this</code>，就让<code>T</code>等于该参数，否则<code>T</code>为<code>undefined</code></li><li>生成一个新的数组<code>A</code>，跟当前数组的<code>length</code>属性保持一致</li><li>如果报错就返回</li><li>设定<code>k</code>等于 0</li><li>只要<code>k</code>小于当前数组的<code>length</code>属性，就重复下面步骤 <ol><li>设定<code>Pk</code>等于<code>ToString(k)</code>，即将<code>K</code>转为字符串</li><li>设定<code>kPresent</code>等于<code>HasProperty(O, Pk)</code>，即求当前数组有没有指定属性</li><li>如果报错就返回</li><li>如果<code>kPresent</code>等于<code>true</code>，则进行下面步骤 <ol><li>设定<code>kValue</code>等于<code>Get(O, Pk)</code>，取出当前数组的指定属性</li><li>如果报错就返回</li><li>设定<code>mappedValue</code>等于<code>Call(callbackfn, T, «kValue, k, O»)</code>，即执行回调函数</li><li>如果报错就返回</li><li>设定<code>status</code>等于<code>CreateDataPropertyOrThrow (A, Pk, mappedValue)</code>，即将回调函数的值放入<code>A</code>数组的指定位置</li><li>如果报错就返回</li></ol></li><li><code>k</code>增加 1</li></ol></li><li>返回<code>A</code></li></ol></blockquote><p>仔细查看上面的算法，可以发现，当处理一个全是空位的数组时，前面步骤都没有问题。进入第 10 步中第 2 步时，<code>kPresent</code>会报错，因为空位对应的属性名，对于数组来说是不存在的，因此就会返回，不会进行后面的步骤。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">n</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// [, , ,]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>arr</code>是一个全是空位的数组，<code>map</code>方法遍历成员时，发现是空位，就直接跳过，不会进入回调函数。因此，回调函数里面的<code>console.log</code>语句根本不会执行，整个<code>map</code>方法返回一个全是空位的新数组。</p>`,7),E=e("code",null,"map",-1),R={href:"https://github.com/v8/v8/blob/44c44521ae11859478b42004f57ea93df52526ee/src/js/array.js#L1347",target:"_blank",rel:"noopener noreferrer"},L=o(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ArrayMap</span><span class="token punctuation">(</span><span class="token parameter">f<span class="token punctuation">,</span> receiver</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token constant">CHECK_OBJECT_COERCIBLE</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&quot;Array.prototype.map&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Pull out the length so that modifications to the length in the</span>
  <span class="token comment">// loop will not affect the looping and side effects are visible.</span>
  <span class="token keyword">var</span> array <span class="token operator">=</span> <span class="token constant">TO_OBJECT</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> length <span class="token operator">=</span> <span class="token constant">TO_LENGTH_OR_UINT32</span><span class="token punctuation">(</span>array<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">InnerArrayMap</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> receiver<span class="token punctuation">,</span> array<span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">InnerArrayMap</span><span class="token punctuation">(</span><span class="token parameter">f<span class="token punctuation">,</span> receiver<span class="token punctuation">,</span> array<span class="token punctuation">,</span> length</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token constant">IS_CALLABLE</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token function">MakeTypeError</span><span class="token punctuation">(</span>kCalledNonCallable<span class="token punctuation">,</span> f<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> accumulator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InternalArray</span><span class="token punctuation">(</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> is_array <span class="token operator">=</span> <span class="token constant">IS_ARRAY</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> stepping <span class="token operator">=</span> <span class="token constant">DEBUG_IS_STEPPING</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">HAS_INDEX</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> i<span class="token punctuation">,</span> is_array<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> element <span class="token operator">=</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token comment">// Prepare break slots for debugger step in.</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>stepping<span class="token punctuation">)</span> <span class="token operator">%</span><span class="token function">DebugPrepareStepInIfStepping</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
      accumulator<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">%</span><span class="token function">_Call</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> receiver<span class="token punctuation">,</span> element<span class="token punctuation">,</span> i<span class="token punctuation">,</span> array<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GlobalArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">%</span><span class="token function">MoveArrayContents</span><span class="token punctuation">(</span>accumulator<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function N(V,B){const a=t("ExternalLinkIcon");return p(),l("div",null,[i,r,u,k,m,b,e("p",null,[n("ECMAScript 6 的规格，可以在 ECMA 国际标准组织的官方网站（"),e("a",h,[n("www.ecma-international.org/ecma-262/6.0/"),s(a)]),n("）免费下载和在线阅读。")]),v,e("p",null,[n("如果你不确定答案，或者想知道语言内部怎么处理，就可以去查看规格，"),e("a",y,[n("7.2.12 小节"),s(a)]),n("是对相等运算符（"),f,n("）的描述。")]),g,e("p",null,[n("由于"),_,n("的类型是数值，"),w,n("的类型是 Null（这是规格"),e("a",T,[n("4.3.13 小节"),s(a)]),n("的规定，是内部 Type 运算的结果，跟"),x,n("运算符无关）。因此上面的前 11 步都得不到结果，要到第 12 步才能得到"),A,n("。")]),I,e("p",null,[n("规格的"),e("a",q,[n("12.2.5 小节《数组的初始化》"),s(a)]),n("给出了答案。")]),S,e("p",null,[n("规格的"),e("a",O,[n("22.1.3.15 小节"),s(a)]),n("定义了数组的"),P,n("方法。该小节先是总体描述"),j,n("方法的行为，里面没有提到数组空位。")]),C,e("p",null,[n("V8 引擎对"),E,n("方法的"),e("a",R,[n("实现"),s(a)]),n("如下，可以看到跟规格的算法描述完全一致。")]),L])}const D=c(d,[["render",N],["__file","spec.html.vue"]]);export{D as default};

/* eslint-disable */
let content = '<div class="hljs-center">\n' +
  '<h1><a id="JavaScript___2"></a>JavaScript数据结构 - 栈</h1>\n' +
  '</div>\n' +
  '<blockquote>\n' +
  '<p>栈的使用遍布程序语言实现的方方面面，从表达式求值到处理函数调用。</p>\n' +
  '</blockquote>\n' +
  '<p>栈(stack) 是限定在表尾进行插入或操作的线性表。因此，对栈来说，表尾端有其特殊含义，称为 栈顶(top) ，相应地，表头端称为 栈底(bottom) 。不含元素的空表称为空栈。</p>\n' +
  '<h3><a id="_9"></a>栈的定义</h3>\n' +
  '<ol>\n' +
  '<li>后进者先出，先进者后出，简称 后进先出(LIFO) ，这就是典型的 栈 结构。</li>\n' +
  '<li>新添加的或待删除的元素都保存在栈的末尾，称为 栈顶 ，另一端就叫 栈底 。</li>\n' +
  '<li>在栈里，新元素都靠近栈顶，旧元素都靠近栈底。</li>\n' +
  '<li>从栈的操作特性来看，是一种 操作受限 的线性表，只允许在一段插入和删除数据。</li>\n' +
  '<li>不包含任何元素的栈称为 空栈 。</li>\n' +
  '</ol>\n' +
  '<h3><a id="_15"></a>栈的实现</h3>\n' +
  '<blockquote>\n' +
  '<p>从数据存储的角度看，实现栈有两种方式，一种是以数组做基础，一种是以链表做基础。</p>\n' +
  '</blockquote>\n' +
  '<h6><a id="_18"></a>栈的方法：</h6>\n' +
  '<table>\n' +
  '<thead>\n' +
  '<tr>\n' +
  '<th>操作</th>\n' +
  '<th>方法</th>\n' +
  '</tr>\n' +
  '</thead>\n' +
  '<tbody>\n' +
  '<tr>\n' +
  '<td>入栈</td>\n' +
  '<td>push(el)</td>\n' +
  '</tr>\n' +
  '<tr>\n' +
  '<td>出栈</td>\n' +
  '<td>pop()</td>\n' +
  '</tr>\n' +
  '<tr>\n' +
  '<td>取栈顶元素</td>\n' +
  '<td>peek()</td>\n' +
  '</tr>\n' +
  '<tr>\n' +
  '<td>判断是否为空栈</td>\n' +
  '<td>isEmpty()</td>\n' +
  '</tr>\n' +
  '<tr>\n' +
  '<td>返回栈大小</td>\n' +
  '<td>size()</td>\n' +
  '</tr>\n' +
  '<tr>\n' +
  '<td>清空栈</td>\n' +
  '<td>clear()</td>\n' +
  '</tr>\n' +
  '</tbody>\n' +
  '</table>\n' +
  '<h6><a id="_28"></a>顺序栈</h6>\n' +
  '<blockquote>\n' +
  '<p>这里采用的是数组作为其存储数据的底层数据结构。</p>\n' +
  '</blockquote>\n' +
  '<p>用数组 data 保存栈内元素，构造函数将其初始化为一个空数组。</p>\n' +
  '<pre><div class="hljs"><code class="lang-js"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Stack</span> </span>{\n' +
  '    <span class="hljs-keyword">constructor</span>() {\n' +
  '        <span class="hljs-keyword">this</span>._data = [];\n' +
  '    }\n' +
  '    push(el) {  <span class="hljs-comment">// 添加新元素到栈顶</span>\n' +
  '        <span class="hljs-keyword">this</span>._data.push(el);\n' +
  '    }\n' +
  '    pop() {     <span class="hljs-comment">// 移除栈顶元素，同时返回被移除的元素</span>\n' +
  '        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>._data.pop();\n' +
  '    }\n' +
  '    peek() {    <span class="hljs-comment">// 查看栈顶元素</span>\n' +
  '        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>._data[<span class="hljs-keyword">this</span>._data.length - <span class="hljs-number">1</span>];\n' +
  '    }\n' +
  '    isEmpty() { <span class="hljs-comment">// 判断是否为空栈</span>\n' +
  '        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>._data.length === <span class="hljs-number">0</span>;\n' +
  '    }\n' +
  '    clear() {   <span class="hljs-comment">// 清空栈</span>\n' +
  '        <span class="hljs-keyword">this</span>._data = [];\n' +
  '    }\n' +
  '    size() {    <span class="hljs-comment">// 查询栈的大小</span>\n' +
  '        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>._data.length;\n' +
  '    }\n' +
  '    <span class="hljs-comment">// 非必重写方法，仅供测试使用</span>\n' +
  '    <span class="hljs-comment">// 重写 JavaScript 对象默认的 toString() 方法</span>\n' +
  '    <span class="hljs-comment">// toString() {</span>\n' +
  '    <span class="hljs-comment">//      return this._data.toString();</span>\n' +
  '    <span class="hljs-comment">// }</span>\n' +
  '}\n' +
  '</code></div></pre>\n' +
  '<h6><a id="_62"></a>链栈</h6>\n' +
  '<blockquote>\n' +
  '<p>这里采用的是链表作为其存储数据的底层数据结构。</p>\n' +
  '</blockquote>\n' +
  '<p>链式栈是一种数据存储结构，可以通过单链表的方式来实现，使用链式栈的优点在于它能够克服用数组实现的顺序栈空间利用率不高的特点，但是需要为每个栈元素分配额外的指针空间用来存放指针域</p>\n' +
  '<pre><div class="hljs"><code class="lang-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Stack</span>(<span class="hljs-params"></span>) </span>{\n' +
  '    <span class="hljs-keyword">this</span>._top = <span class="hljs-literal">null</span>;\n' +
  '    <span class="hljs-keyword">this</span>._len = <span class="hljs-number">0</span>;\n' +
  '}\n' +
  'Stack.prototype = {\n' +
  '    <span class="hljs-attr">constructor</span>: Stack,\n' +
  '    <span class="hljs-attr">__Node__</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">el</span>) </span>{\n' +
  '        <span class="hljs-keyword">this</span>.data = el;\n' +
  '        <span class="hljs-keyword">this</span>.next = <span class="hljs-literal">null</span>;\n' +
  '    },\n' +
  '    <span class="hljs-attr">push</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">el</span>) </span>{\n' +
  '        <span class="hljs-keyword">const</span> __node__ = <span class="hljs-keyword">new</span> <span class="hljs-keyword">this</span>.__Node__(el);\n' +
  '        __node__.next = <span class="hljs-keyword">this</span>._top;\n' +
  '        <span class="hljs-keyword">this</span>._top = __node__;\n' +
  '        <span class="hljs-keyword">this</span>._len++;\n' +
  '    },\n' +
  '    <span class="hljs-attr">pop</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{\n' +
  '        <span class="hljs-keyword">if</span>(<span class="hljs-keyword">this</span>._top == <span class="hljs-literal">null</span>) <span class="hljs-keyword">return</span>;\n' +
  '        <span class="hljs-keyword">const</span> node = <span class="hljs-keyword">this</span>._top;\n' +
  '        <span class="hljs-keyword">this</span>._top = node.next;\n' +
  '        <span class="hljs-keyword">this</span>._len--;\n' +
  '        <span class="hljs-keyword">return</span> node.data;\n' +
  '    },\n' +
  '    <span class="hljs-attr">peek</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{\n' +
  '        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>._top &amp;&amp; <span class="hljs-keyword">this</span>._top.data;\n' +
  '    },\n' +
  '    <span class="hljs-attr">isEmpty</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{\n' +
  '        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>._top === <span class="hljs-literal">null</span>;\n' +
  '    },\n' +
  '    <span class="hljs-attr">clear</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{\n' +
  '        <span class="hljs-keyword">this</span>._top = <span class="hljs-literal">null</span>;\n' +
  '        <span class="hljs-keyword">this</span>._len = <span class="hljs-number">0</span>;\n' +
  '    },\n' +
  '    <span class="hljs-attr">size</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{\n' +
  '        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>._len;\n' +
  '    },\n' +
  '    <span class="hljs-comment">// 非必重写方法，仅供测试使用</span>\n' +
  '    <span class="hljs-comment">// 重写 JavaScript 对象默认的 toString() 方法</span>\n' +
  '    <span class="hljs-comment">// toString: function() {</span>\n' +
  '    <span class="hljs-comment">//      let curr = this._top,</span>\n' +
  '    <span class="hljs-comment">//          list = [];</span>\n' +
  '    <span class="hljs-comment">//      while(curr) {</span>\n' +
  '    <span class="hljs-comment">//          list.push(curr.data);</span>\n' +
  '    <span class="hljs-comment">//          curr = curr.next;</span>\n' +
  '    <span class="hljs-comment">//      }</span>\n' +
  '    <span class="hljs-comment">//      return list.join(\' -&gt; \');</span>\n' +
  '    <span class="hljs-comment">// }</span>\n' +
  '}\n' +
  '</code></div></pre>\n' +
  '<h6><a id="_116"></a>结语</h6>\n' +
  '<p>栈就是一种数据结构，他可用来解决计算机世界里的很多问题。栈是一种高效的数据结构，因为数据只能在栈顶添加或删除，所以这样的处理操作很快，而且容易实现。栈的使用遍布程序语言实现的方方面面，从表达式求值到处理函数调用。</p>'

export {content};

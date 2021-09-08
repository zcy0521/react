import React from 'react'

/**
 * 1.定义组件App
 * const App1 = ... // const 修饰的变量 App1
 * () => {...}     // ES6箭头函数
 * {...}           // 大括号中代码会被计算
 *
 * 2.使用JSX编写，JSX 是一种“类XML”语言，这意味着每个标签都需要关闭。（html <br> => JSX <br />）
 *
 * 3.React 组件名称应该大写字母开头
 *
 * 4.React 组件的内容(通常)需要包含 一个根元素。
 * 如下返回：
 * <div>
 *     <p>...</p>
 *     <p>...</p>
 *     <p>...</p>
 * </div>
 * 而不是：
 * <p>...</p>
 * <p>...</p>
 * <p>...</p>
 */
const App = () => {
    const now = new Date()

    return (
        /* React 组件的内容(通常)需要包含 一个根元素。可以通过使用fragments来避免生产额外的div */
        <>
            {/* 引入组件Hello，字符串作为参数时可以省略大括号 */}
            <Hello name="World"/>
            <Hello name="React"/>

            {/* 引入组件Plus */}
            <Plus a={3} b={5} />
            <Plus a={7} b={10} />

            <p>Now time is {now.toString()}</p>
        </>
    )
}

/**
 * 定义props对象向组件Hello中传递参数
 */
const Hello = (props) => {
    return (
        <>
            <p>Hello {props.name}</p>
        </>
    )
}

const Plus = (props) => {
    return (
        <>
            <p>{props.a} plus {props.b} is {props.a + props.b}</p>
        </>
    )
}

export default App;

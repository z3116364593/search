import React,{Component} from 'react';
import './search.css'

class Search extends Component {
    constructor() {
        super()
        this.state = {
            show: false,
            data: [
                {
                    title: "收藏",
                    show: false,
                    hide: false,
                    list: [
                        {
                            name: "常俊超"
                        },
                        {
                            name: "2019年"
                        },
                        {
                            name: "web-常俊超"
                        },
                        {
                            name: "常俊超"
                        },
                        {
                            name: "测试数据1"
                        },
                        {
                            name: "什么"
                        },
                    ]
                },
                {
                    title: "收到的Paper",
                    show: false,
                    hide: false,
                    list: [
                        {
                            name: "玩转Xpaper"
                        },
                        {
                            name: "创意征集"
                        },
                        {
                            name: "应用场景"
                        },
                        {
                            name: "Xpaper"
                        },
                        {
                            name: "XTV安卓页面"
                        },
                        {
                            name: "费用发票管理"
                        },
                        {
                            name: "测试数据"
                        },
                        {
                            name: "测试数据"
                        },
                        {
                            name: "测试数据"
                        },
                        {
                            name: "测试数据"
                        },
                        {
                            name: "测试数据"
                        },
                        {
                            name: "什么"
                        },
                    ]
                },
                {
                    title: "strive",
                    show: false,
                    hide: false,
                    list: [
                        {
                            name: "Array"
                        },
                        {
                            name: "什么叫脑子里灵光一闪"
                        },
                        {
                            name: "search"
                        },
                        {
                            name: "Malcolm X"
                        },
                        {
                            name: "What do you think is the happiest thing"
                        },
                        {
                            name: "I like programme"
                        },
                        {
                            name: "测试数据3"
                        },
                        {
                            name: "测试数据33"
                        },
                        {
                            name: "测试数据333"
                        },
                    ]
                },
                {
                    title: "The Fray",
                    show: false,
                    hide: false,
                    list: [
                        {
                            name: "Who wants to strive to be the next myth"
                        },
                        {
                            name: "Elise"
                        },
                        {
                            name: "这下快乐了啊"
                        },
                        {
                            name: "我欲乘风归去"
                        },
                        {
                            name: "又恐琼楼玉宇"
                        },
                        {
                            name: "无论花开几世 花落几时"
                        },
                        {
                            name: "无论风从何起 风停何处"
                        },
                        {
                            name: "测试数据4"
                        },
                        {
                            name: "测试数据44"
                        },
                        {
                            name: "测试数据444"
                        },
                    ]
                }
            ],
            data2: [
                {
                    title: "收藏",
                    show: false,
                    hide: false,
                    list: [
                        {
                            name: "常俊超"
                        },
                        {
                            name: "2019年"
                        },
                        {
                            name: "web-常俊超"
                        },
                        {
                            name: "常俊超"
                        },
                        {
                            name: "测试数据1"
                        },
                        {
                            name: "什么"
                        },
                    ]
                },
                {
                    title: "收到的Paper",
                    show: false,
                    hide: false,
                    list: [
                        {
                            name: "玩转Xpaper"
                        },
                        {
                            name: "创意征集"
                        },
                        {
                            name: "应用场景"
                        },
                        {
                            name: "Xpaper"
                        },
                        {
                            name: "XTV安卓页面"
                        },
                        {
                            name: "费用发票管理"
                        },
                        {
                            name: "测试数据"
                        },
                        {
                            name: "测试数据"
                        },
                        {
                            name: "测试数据"
                        },
                        {
                            name: "测试数据"
                        },
                        {
                            name: "测试数据"
                        },
                        {
                            name: "什么"
                        },
                    ]
                },
                {
                    title: "strive",
                    show: false,
                    hide: false,
                    list: [
                        {
                            name: "Array"
                        },
                        {
                            name: "什么叫脑子里灵光一闪"
                        },
                        {
                            name: "search"
                        },
                        {
                            name: "Malcolm X"
                        },
                        {
                            name: "What do you think is the happiest thing"
                        },
                        {
                            name: "I like programme"
                        },
                        {
                            name: "测试数据3"
                        },
                        {
                            name: "测试数据33"
                        },
                        {
                            name: "测试数据333"
                        },
                    ]
                },
                {
                    title: "The Fray",
                    show: false,
                    hide: false,
                    list: [
                        {
                            name: "Who wants to strive to be the next myth"
                        },
                        {
                            name: "Elise"
                        },
                        {
                            name: "这下快乐了啊"
                        },
                        {
                            name: "我欲乘风归去"
                        },
                        {
                            name: "又恐琼楼玉宇"
                        },
                        {
                            name: "无论花开几世 花落几时"
                        },
                        {
                            name: "无论风从何起 风停何处"
                        },
                        {
                            name: "测试数据4"
                        },
                        {
                            name: "测试数据44"
                        },
                        {
                            name: "测试数据444"
                        },
                    ]
                }
            ]
        }
    }
    //搜索
    search = (e)=>{
        let data = this.state.data //用来存放原始数据

        let value = e.target.value
        let newWord = [] //用来存放新得到的数据
        let suoyin = [] //用来存放索引值
        this.state.data2.forEach( (item, index) =>{
            item.list.forEach( (v, i) =>{
                if(v.name.includes(value)){
                    let str = `<span class="highlight">${value}</span>`
                    let name = v.name
                    let arrstr = name.split("") //把展示的数据转成数组
                    let wordArr = [] //匹配到的index数组
                    let firstWord = value.substr(0,1) //输入的第一个字
                    arrstr.forEach((item,index)=>{ //把展示数据里的每一个字和输入的第一个字做匹配
                        if(item === firstWord){
                            wordArr.push(index)
                        }
                    })
                    let start = wordArr[0] //拿到输入的字在展示的数据中的位置，作为替换标签的下标
                    arrstr.splice(start,value.length,str) //把输入的字加个颜色，替换一下
                    let newstr = arrstr.join("")

                    //把拿到的心数据放到一个新的数组
                    let obj = {
                        name: newstr,
                        index: index
                    }
                    newWord.push(obj)
                    suoyin.push(index)
                }
                
            })
        })
        //数组去重
        let index = this.deWeight(suoyin) //第一重index数组
        //初始化让所有的数据都隐藏掉
        this.state.data.forEach(item=>{
            item.hide = true
        })
        index.forEach( (item, index) =>{
            let arr2 = newWord.filter(v=>{
                return v.index === item
            })
            //把需要展示的数组展示出来
            data[item].list = arr2
            data[item].hide = false
        })
        this.setState({
            data: data
        })
    }
    //数组去重
    deWeight(arr){
        let res = [];
        arr.forEach((val)=>{
            if( ! res.includes(val) ){
                res.push(val);
            }
        });
        return res
    }
    //展开更多&&收起
    Click(item){
        item.show = !item.show
        this.setState({})
    }
    render() {
        return (
            <div>
                <input onKeyUp={(e)=>{this.search(e)}} type="text" className="int"/>
                <ul>
                    {
                        this.state.data.map((item,index)=>{
                            return (
                                <li key={index}>
                                    {
                                        item.hide?(
                                            <div></div>
                                        ):(
                                            <div>
                                                {item.title}
                                                <div className={!item.show?"show":""}>
                                                    {
                                                        item.list.map((v,i)=>{
                                                            return(
                                                                <p style={{marginLeft: "40px"}} dangerouslySetInnerHTML = {{ __html: v.name }} key={i}></p>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <p onClick={()=>{this.Click(item)}} className={item.list.length > 6?'':'hide'} style={{marginLeft: "40px",color: "red",cursor: "pointer"}}>{item.show?'收起':'展开更多'}</p>
                                            </div>
                                        )
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Search;
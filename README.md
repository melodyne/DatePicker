# DatePicker 价格日历控件

数据格式
```
[
    {
        "day": "2016-07-07",
        "price": "158"
    },
    {
        "day": "2017-07-11",
        "price": "158"
    },
    {
        "day": "2017-07-12",
        "price": "158"
    },
    {
        "day": "2017-07-13",
        "price": "158"
    },
    {
        "day": "2017-07-14",
        "price": "158"
    },
    {
        "day": "2017-07-15",
        "price": "158"
    }
]
```
第一步：引入这三个文件
```
<link href="css/datepicker.css" rel="stylesheet"/>
<script src="js/jquery-3.2.1.min.js"></script>
<script src="js/zlDate.js"></script>
```
第二步：初始化组键
```
pickerEvent.setPriceArr(data);
pickerEvent.Init(e);
```
第三步：全局实现修改价格方法
```
/**
 * 修改价格
 * @param date           // 日期
 * @param newPrice       // 新价格
 * @param calendarPrice  // 日历控件对象
 */
function changePrice(date, newPrice, calendarPrice) {
    
    alert('修改价格' + date + "天的价格为" + newPrice);
    
    /*
       在这里实现修改，也就是在这里用调用你的修改接口
       修改成功 则执行 calendarPrice.show();
     */
     
}
```

![Foo](http://i.weather.com.cn/images/cn/life/2017/04/11/11141533DF572FBBA092E37E6E843C656C318272.jpg)
[链接文字](链接地址)
例子： [Markdown](http://zh.wikipedia.com/wiki/Markdown)

# DatePicker 价格日历控件

![效果图](https://github.com/295124540/DatePicker/blob/master/show.gif)

###### 数据格式
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
**第一步：引入这三个文件**
```
<link href="css/datepicker.css" rel="stylesheet"/>
<script src="js/jquery-3.2.1.min.js"></script>
<script src="js/zlDate.js"></script>
```
**第二步：初始化组件**
```
pickerEvent.setPriceArr(data);
pickerEvent.Init(e);
```
**第三步：全局实现修改价格方法**
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
**控件位置**
> location="right" 其中值有`top`,`right`,`bottom`,`left` 分别居于按钮的上，右，下，左
```
<input style="width: 124px" location="right" class="calendar_btn" name="calendar" readonly="readonly"
           onclick="showCalendar(this,'232');" placeholder="酒店价格日历"/>
```

> 有部分同学反映无法运行，因为数据是通过接口获取的，所以请不要用浏览器直接打开index.html，请在服务器环境下访问该程序！  
> 该代码是从大型项目中抽取出来的，如果您觉得我的此项目对您有些帮助,您的star就是对我最大的鼓励！


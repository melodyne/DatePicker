/*本代码由素材家园原创，转载请保留网址：www.sucaijiayuan.com*/
var obj = { date: new Date(), year: -1, month: -1, priceArr: [] };
var htmlObj = { header: "", left: "", right: "" };
var houseId = null;
var roomId = null;
var elemId = null;
var mType = 0;

function getAbsoluteLeft(objectId) {
    var o = document.getElementById(objectId)
    var oLeft = o.offsetLeft;
    while (o.offsetParent != null) {
        oParent = o.offsetParent
        oLeft += oParent.offsetLeft
        o = oParent
    }
    return oLeft
}
//获取控件上绝对位置
function getAbsoluteTop(objectId) {
    var o = document.getElementById(objectId);
    var oTop = o.offsetTop;
    while (o.offsetParent != null) {
        oParent = o.offsetParent
        oTop += oParent.offsetTop
        o = oParent
    }
    return oTop
}
//获取控件宽度
function getElementWidth(objectId) {
    x = document.getElementById(objectId);
    return x.clientWidth;
}
//获取控件高度
function getElementHeight(objectId) {
    x = document.getElementById(objectId);
    return x.clientHeight;
}

function location_x(objectId) {
    if($("#"+objectId).attr("location")=='right'){
        return getAbsoluteLeft(objectId)+getElementWidth(objectId)+10;
    }else {
        return getAbsoluteLeft(objectId);
    }
}

function location_y(objectId) {
    if($("#"+objectId).attr("location")=='right'){
        return getAbsoluteTop(objectId);
    }else {
        return getAbsoluteTop(objectId)+getElementHeight(objectId)+10;
    }
}

var pickerEvent = {
    Init: function (houseid,roomid,elemid,mtype) {
        if (obj.year == -1) {
            dateUtil.getCurrent();
        }
        for (var item in pickerHtml) {
            pickerHtml[item]();
        }
        var p = document.getElementById("calendar_choose");
        if (p != null) {
            document.body.removeChild(p);
        }
        var html = '<div id="calendar_choose" class="calendar" style="display: block; position: absolute;">'
        html += htmlObj.header;
        html += '<div class="basefix" id="bigCalendar" style="display: block;">';
        html += htmlObj.left;
        html += htmlObj.right;
        html += '<div style="clear: both;"></div>';
        html += "</div></div>";
        houseId = houseid;
        roomId = roomid;
        elemId = elemid;
        mType = mtype;
        var elemObj = document.getElementById(elemid);
        $(document.body).append(html);
        document.getElementById("picker_last").onclick = pickerEvent.getLast;
        document.getElementById("picker_next").onclick = pickerEvent.getNext;
        document.getElementById("picker_today").onclick = pickerEvent.getToday;
        document.getElementById("calendar_choose").style.left = location_x(elemid)+"px";
        document.getElementById("calendar_choose").style.top  = location_y(elemid)+"px";
        document.getElementById("calendar_choose").style.zIndex = 1000;
        var tds = document.getElementById("calendar_tab").getElementsByTagName("td");
        for (var i = 0; i < tds.length; i++) {
            if (tds[i].getAttribute("date") != null && tds[i].getAttribute("date") != "") {
                tds[i].onclick = function () {
                    commonUtil.chooseClick(this)
                };
            }
        }
        // return html;
        //return elemObj;
    },
    getLast: function () {
        dateUtil.getLastDate();
        pickerEvent.Init(houseId,roomId,elemId,mType);
    },
    getNext: function () {
        dateUtil.getNexDate();
        pickerEvent.Init(houseId,roomId,elemId,mType);
    },
    getToday:function(){
        dateUtil.getCurrent();
        pickerEvent.Init(houseId,roomId,elemId,mType);
    },
    setPriceArr: function (arr) {
        obj.priceArr = arr;
    },
    remove: function () {
        var p = document.getElementById("calendar_choose");
        if (p != null) {
            document.body.removeChild(p);
        }
    },
    isShow: function () {
        var p = document.getElementById("calendar_choose");
        if (p != null) {
            return true;
        }
        else {
            return false;
        }
    }
}
var pickerHtml = {
    getHead: function () {
        var head = '<ul class="calendar_num basefix"><li class="bold">六</li><li>五</li><li>四</li><li>三</li><li>二</li><li>一</li><li class="bold">日</li><li class="picker_today bold" id="picker_today">回到今天</li></ul>';
        htmlObj.header = head;
    },
    getLeft: function () {
        var left = '<div class="calendar_left pkg_double_month"><p class="date_text">' + obj.year + '年<br>' + obj.month + '月</p><a href="javascript:void()" title="上一月" id="picker_last" class="pkg_circle_top">上一月</a><a href="javascript:void()" title="下一月" id="picker_next" class="pkg_circle_bottom ">下一月</a></div>';
        htmlObj.left = left;
    },
    getRight: function () {
        var days = dateUtil.getLastDay();
        var week = dateUtil.getWeek();
        var html = '<table id="calendar_tab" class="calendar_right"><tbody>';
        var index = 0;
        for (var i = 1; i <= 42; i++) {
            if (index == 0) {
                html += "<tr>";
            }
            var c = week > 0 ? week : 0;
            if ((i - 1) >= week && (i - c) <= days) {
                var price = commonUtil.getPrice((i - c));
                var priceStr = "";
                var classStyle = "";
                if (price != -1) {
                    priceStr = "<dfn>¥</dfn>" + price;
                    classStyle = "class='on'";
                }

                if (price != -1&&obj.year==new Date().getFullYear()&&obj.month==new Date().getMonth()+1&&i-c==new Date().getDate()) {
                    classStyle = "class='on today'";
                }
                //判断今天
                if(obj.year==new Date().getFullYear()&&obj.month==new Date().getMonth()+1&&i-c==new Date().getDate()){
                    html += '<td  ' + classStyle + ' date="' + obj.year + "-" + obj.month + "-" + (i - c) + '" price="' + price + '"><a><span class="date basefix">今天</span><span class="team basefix" style="display: none;">&nbsp;</span><span class="calendar_price01">' + priceStr + '</span></a></td>';
                }
                else{
                    html += '<td  ' + classStyle + ' date="' + obj.year + "-" + obj.month + "-" + (i - c) + '" price="' + price + '"><a><span class="date basefix">' + (i - c) + '</span><span class="team basefix" style="display: none;">&nbsp;</span><span class="calendar_price01">' + priceStr + '</span></a></td>';
                }
                if (index == 6) {

                    html += '</tr>';
                    index = -1;
                }
            }
            else {
                html += "<td></td>";
                if (index == 6) {
                    html += "</tr>";
                    index = -1;
                }
            }
            index++;
        }
        html += "</tbody></table>";
        htmlObj.right = html;
    }
}
var dateUtil = {
    //根据日期得到星期
    getWeek: function () {
        var d = new Date(obj.year, obj.month - 1, 1);
        return d.getDay();
    },
    //得到一个月的天数
    getLastDay: function () {
        var new_year = obj.year;//取当前的年份        
        var new_month = obj.month;//取下一个月的第一天，方便计算（最后一不固定）        
        var new_date = new Date(new_year, new_month, 1);                //取当年当月中的第一天        
        return (new Date(new_date.getTime() - 1000 * 60 * 60 * 24)).getDate();//获取当月最后一天日期        
    },
    getCurrent: function () {
        var dt = obj.date;
        obj.year = dt.getFullYear();
        obj.month = dt.getMonth() + 1;
        obj.day = dt.getDate();
    },
    getLastDate: function () {
        if (obj.year == -1) {
            var dt = new Date(obj.date);
            obj.year = dt.getFullYear();
            obj.month = dt.getMonth() + 1;
        }
        else {
            var newMonth = obj.month - 1;
            if (newMonth <= 0) {
                obj.year -= 1;
                obj.month = 12;
            }
            else {
                obj.month -= 1;
            }
        }
    },
    getNexDate: function () {
        if (obj.year == -1) {
            var dt = new Date(obj.date);
            obj.year = dt.getFullYear();
            obj.month = dt.getMonth() + 1;
        }
        else {
            var newMonth = obj.month + 1;
            if (newMonth > 12) {
                obj.year += 1;
                obj.month = 1;
            }
            else {
                obj.month += 1;
            }
        }
    }
}
var commonUtil = {
    getPrice: function (day) {
        var dt = obj.year + "-";
        dt+=obj.month;
        dt += "-" + day;

        for (var i = 0; i < obj.priceArr.length; i++) {
            if (obj.priceArr[i].day == dt) {
                return parseInt(obj.priceArr[i].price);
            }
        }
        return -1;
    },
    chooseClick: function (sender) {

        var date = sender.getAttribute("date");
        var price = sender.getAttribute("price");
        var el = document.getElementById(elemId);
        if (el == null) {
            return;
        }

        var input = $(sender).find('span.input');
        var calendarPrice = $(sender).find('span.calendar_price01');
        $(sender).removeClass();//移除on
        calendarPrice.hide();

        if(input.html()){
            input.show();
        }else {
            $(sender).children().append("<span class='input'>¥<input style='width: 30px;margin-left: 3px' maxlength='4'></span>");
            input = $(sender).find('span.input');
        }

        //给输入框写入初始值
        if(price!=-1){
            $(sender).find('input').val(price);
        }

        //先关闭防止重复绑定
        $(sender).find('input').off('blur');
        $(sender).find('input').blur(function () {

            //获取输入框价格
            var newPrice = $(sender).find('input').val();
            if(newPrice==price){
                $(sender).addClass("on");
                calendarPrice.show();
                input.hide();
                return ;
            }
            if(newPrice){
                var re = /^[0-9]+$/ ;
                if(!re.test(newPrice)){
                    alert("请输入位正整数！");return;
                }
            }else {
                $(sender).addClass("on");
                calendarPrice.show();
                input.hide();
                return;
            }
            var params;
            if(mType==1){//如果为整套
                params = {
                    day:date,
                    house_id:houseId,
                    type:mType,
                    price:newPrice,
                };
            }else {
                params = {
                    day:date,
                    house_id:houseId,
                    room_id:roomId,
                    price:newPrice,
                };
            }

            $.post("/api/room_price_calendar",params,function(data,status){

                if(data.code==100){
                    input.hide();
                    $(sender).attr("price",newPrice);
                    $(sender).toggleClass('on');

                    if(calendarPrice.html()){
                        calendarPrice.show();
                    }else {
                        calendarPrice.append("<dfn>¥</dfn>" +$(sender).attr("price")).show();
                    }
                }
                alert(data.msg);
            });
        })


    }
}

$(document).bind("click", function (event) {
    var e = event || window.event;
    var elem = e.srcElement || e.target;
    while (elem) {
        if (elem.id == "calendar_choose") {
            return;
        }
        elem = elem.parentNode;
    }
    pickerEvent.remove();
});

/* 移除页面最顶部的工具栏 */
var toolbar = document.getElementsByClassName("csdn-toolbar csdn-toolbar tb_disnone ");
if (toolbar && toolbar.length == 1)
{
    toolbar[0].parentNode.removeChild(toolbar[0]);
}


/* 移除工具栏与文章内容之间的 header */
var header = document.getElementsByTagName("header");
if (header && header.length == 1)
{
    document.body.removeChild(header[0]);
}


/* 移除侧边栏 div，包括热门文章、最新评论等以及一些广告 */
/* 仅保留博主基本账号信息 */
var aside = document.getElementsByTagName("aside");
if (aside && aside.length == 1)
{
    var asideDivs = aside[0].getElementsByTagName("div");
    if (asideDivs)
    {
        for (var i = 0; i < asideDivs.length;)
        {
            if (asideDivs[i].id == "asideProfile")
            {
                i += asideDivs[i].getElementsByTagName("div").length;
            }else{
                asideDivs[i].parentNode.removeChild(asideDivs[i]);
            }
        }
    }
}


/* 移除文章与评论之间的 EDU 广告 */
var eduPromotion = document.getElementsByClassName("edu-promotion");
if (eduPromotion && eduPromotion.length == 1)
{
    eduPromotion[0].parentNode.removeChild(eduPromotion[0]);
}


/* 直接移除评论下方的推荐文章列表时会有JS脚本检测 */
/* 移除之后在移动鼠标时会重新加载列表中的广告 */
/* 所以选择隐藏而非移除 */
var recommendArticlesList = document.getElementsByClassName("recommend-box");
if (recommendArticlesList && recommendArticlesList.length == 1)
{
    recommendArticlesList[0].style.display = "none";
}


/* 移除页面底部的登录/注册提示框 */
var pulllogBox = document.getElementsByClassName("pulllog-box");
if (pulllogBox && pulllogBox.length == 1)
{
    pulllogBox[0].parentNode.removeChild(pulllogBox[0]);
}


/* 自动【阅读全文】 */
var readMore = document.getElementById("btn-readmore");
if (readMore)
{
    readMore.click();
}


/* 移除页面右下角的大广告 */
var bottomRightAdLarge = document.getElementsByClassName("box-box-large");
if (bottomRightAdLarge && bottomRightAdLarge.length == 1)
{
    bottomRightAdLarge[0].parentNode.removeChild(bottomRightAdLarge[0]);
}


/* 移除页面右下角的默认广告 */
/* 这组广告默认不显示，在页面缩放比例为 110% 时才会显示 */
var bottomRightAdDefault = document.getElementsByClassName("box-box-default");
if (bottomRightAdDefault && bottomRightAdDefault.length == 1)
{
    bottomRightAdDefault[0].parentNode.removeChild(bottomRightAdDefault[0]);
}


/* 移除微信、微博、QQ分享按钮 */
var shareButtons = document.getElementsByClassName("bdsharebuttonbox");
if (shareButtons)
{
    for (var i = 0; i < shareButtons.length;)
    {
        shareButtons[i].parentNode.removeChild(shareButtons[i]);
    }
}


/* 移除举报按钮 */
var reportBtn = document.getElementById("reportContent");
if (reportBtn)
{
    reportBtn.parentNode.removeChild(reportBtn);
}
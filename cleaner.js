
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


/* 移除页面右侧的推荐文章列表 */
var pageRightRecommendArticlesList = document.getElementsByClassName("recommend-right");
if (pageRightRecommendArticlesList && pageRightRecommendArticlesList.length == 1)
{
    pageRightRecommendArticlesList[0].parentNode.removeChild(pageRightRecommendArticlesList[0]);
}


/* 移除包含了点赞、评论、收藏、上一篇及下一篇按钮的工具盒子 */
var toolBox = document.getElementsByClassName("tool-box");
if (toolBox && toolBox.length == 1)
{
    toolBox[0].parentNode.removeChild(toolBox[0]);
}


/* 修复页面布局 */
var mainBox = document.getElementById("mainBox");
var main = document.getElementsByTagName("main");
var aside = document.getElementsByTagName("aside");
if (mainBox && main && main.length == 1 && aside && aside.length == 1)
{
    mainBox.insertBefore(aside[0], main[0]);
    main[0].style.float = "left";
    main[0].style.marginLeft = "10px";
    mainBox.style.width = "1516px";
}


/* 移除文章和评论之间的广告，这些广告可能存在多个 className，暂时只收集到两个 */
var adBetweenCommentAndArticle1 = document.getElementsByClassName("t0 clearfix");
if (adBetweenCommentAndArticle1 && adBetweenCommentAndArticle1.length == 1)
{
    adBetweenCommentAndArticle1[0].parentNode.removeChild(adBetweenCommentAndArticle1[0]);
}

var adBetweenCommentAndArticle2 = document.getElementsByClassName("p4course_target");
if (adBetweenCommentAndArticle2 && adBetweenCommentAndArticle2.length == 1)
{
    adBetweenCommentAndArticle2[0].parentNode.removeChild(adBetweenCommentAndArticle2[0]);
}

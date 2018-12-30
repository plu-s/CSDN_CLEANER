/* 移除页面最顶部的导航栏 */
var toolbar = document.getElementsByClassName("csdn-toolbar tb_disnone ");
if (toolbar && toolbar.length == 1)
{
    toolbar[0].parentNode.removeChild(toolbar[0]);
}


/* 移除文章左边包括热门文章、最新评论等内容集合以及一些广告 */
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


/* 自动【阅读全文】 */
var readMore = document.getElementById("btn-readmore");
if (readMore)
{
    readMore.click();
}


/* 移除文章底部下方的推荐文章列表 */
var recommendArticlesList = document.getElementsByClassName("recommend-box");
if (recommendArticlesList && recommendArticlesList.length == 1)
{
    recommendArticlesList[0].parentNode.removeChild(recommendArticlesList[0]);
}


/* 移除文章底部的广告，这些广告可能存在多个 className，目前收集到三个 */
var adAtPageBottom1 = document.getElementsByClassName("t0 clearfix");
if (adAtPageBottom1 && adAtPageBottom1.length == 1)
{
    adAtPageBottom1[0].parentNode.removeChild(adAtPageBottom1[0]);
}

var adAtPageBottom2 = document.getElementsByClassName("p4course_target");
if (adAtPageBottom2 && adAtPageBottom2.length == 1)
{
    adAtPageBottom2[0].parentNode.removeChild(adAtPageBottom2[0]);
}

var adAtPageBottom3 = document.getElementsByClassName("mediav_ad");
if (adAtPageBottom3 && adAtPageBottom3.length == 1)
{
    adAtPageBottom3[0].parentNode.removeChild(adAtPageBottom3[0]);
}


/* 移除当缩小页面时出现在页面左边的广告 */
var fourthColumn = document.getElementsByClassName("fourth_column");
if (fourthColumn && fourthColumn.length == 1)
{
    fourthColumn[0].parentNode.removeChild(fourthColumn[0]);
}


/* 移除 "VIP去广告" */
var meauGotopBox = document.getElementsByClassName("meau-gotop-box");
if (meauGotopBox && meauGotopBox.length == 1)
{
    meauGotopBox[0].parentNode.removeChild(meauGotopBox[0]);
}


/* 移除2018博客之星链接 */
var indexSuperise = document.getElementsByClassName("indexSuperise");
if (indexSuperise && indexSuperise.length == 1)
{
    indexSuperise[0].parentNode.removeChild(indexSuperise[0]);
}


/* 移除举报按钮 */
var reportBtn = document.getElementById("reportContent");
if (reportBtn)
{
    reportBtn.parentNode.removeChild(reportBtn);
}


/* 移除回到顶部按钮 */
var backtopBtn = document.getElementById("backtop");
if (backtopBtn)
{
    backtopBtn.parentNode.removeChild(backtopBtn);
}


/* 移除点赞、分享等按钮所在的工具栏 */
var toolBox = document.getElementsByClassName("tool-box");
if (toolBox && toolBox.length == 1)
{
    toolBox[0].parentNode.removeChild(toolBox[0]);
}


/* CSDN 页面改版后文章评论从底部移到了页面右部 */
/* 移除评论下的推荐文章列表 */
var rightRecommendArticlesList = document.getElementsByClassName("recommend-fixed-box");
if (rightRecommendArticlesList && rightRecommendArticlesList.length == 1)
{
    var article_li = rightRecommendArticlesList[0].getElementsByTagName("li");
    if (article_li)
    {
        for (var i = article_li.length - 1; i >= 0; i--)
        {
            article_li[i].parentNode.removeChild(article_li[i]);
        }
    }
}


/* 设置右边评论不随滚动条移动 */
var recommendRight = document.getElementsByClassName("recommend-right");
if (recommendRight && recommendRight.length == 1)
{
    recommendRight[0].style.paddingTop = "1px";
    
    var rightRecommendComment = document.getElementsByClassName("right_recommend_comment");
    if (rightRecommendComment && rightRecommendComment.length == 1)
    {
        recommendRight[0].appendChild(rightRecommendComment[0]);
    }
}
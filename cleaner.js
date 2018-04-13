
/* 皮肤为编程工作室 */
if (document.getElementById("panel_Profile"))
{
    /* 移除侧边除博主信息外的其它 panel */
    /* 如文章分类、文章存档、文章搜索、广告等 */
    var panels = document.getElementsByClassName("panel");
    if (panels)
    {
        for (i = 0; i < panels.length;)
        {
            if (panels[i].id != "panel_Profile")    // 博主信息
            {
                panels[i].parentNode.removeChild(panels[i]);
            }else{
                i++;
            }
        }
    }

    /* 移除【文章底部广告】 */
    var articleAd = document.getElementById("article_ad");
    if (articleAd)
    {
        articleAd.parentNode.removeChild(articleAd);
    }
    
    /* 移除【右下角弹窗广告】 */
    var rightBottomAd = document.getElementById("layerd");
    if (rightBottomAd)
    {
        rightBottomAd.parentNode.removeChild(rightBottomAd);
    }
    
    /* 自动【阅读全文】 */
    var readMore = document.getElementsByClassName("btn btn-large btn-gray-fred read_more_btn");
    if (readMore && readMore.length == 1)
    {
        readMore[0].click();
    }
    
    /* 移除【联系我们】 */
    var contactUs = document.getElementById("nav_show_top_stop");
    if (contactUs)
    {
        contactUs.parentNode.removeChild(contactUs);
    }

    /* 移除文章底部评论之前的【文章广告】 */
    var eduPromotion = document.getElementsByClassName("edu_promotion");
    if (eduPromotion && eduPromotion.length == 1)
    {
        eduPromotion[0].parentNode.removeChild(eduPromotion[0]);
    }

    /* 移除【推荐文章列表】 */
    var recommendList = document.getElementsByClassName("recommend_list");
    if (recommendList && recommendList.length == 1)
    {
        recommendList[0].parentNode.removeChild(recommendList[0]);
    }
    
    
/* 皮肤为大白 */
}else{
    
    /* 移除【侧边广告1】 */
    var ad1 = document.getElementsByClassName("extension_other csdn-tracking-statistics tracking-click");
    if (ad1 && ad1.length == 1)
    {
        ad1[0].parentNode.removeChild(ad1[0]);
    }
    
    /* 移除【侧边广告2】 */
    var ad2 = document.getElementsByClassName("fixRight_box");
    if (ad2 && ad2.length == 1)
    {
        ad2[0].parentNode.removeChild(ad2[0]);
    }
    
    /* 移除页面底部【登录/注册提示框】 */
    var pulllogBox = document.getElementsByClassName("pulllog-box");
    if (pulllogBox && pulllogBox.length == 1)
    {
        pulllogBox[0].parentNode.removeChild(pulllogBox[0]);
    }

    /* 自动【阅读全文】 */
    var readMore = document.getElementsByClassName("btn btn-large btn-gray-fred read_more_btn");
    if (readMore && readMore.length == 1)
    {
        readMore[0].click();
    }

    /* 移除【联系我们】 */
    var contactUs = document.getElementsByClassName("right_box footer_box csdn-tracking-statistics");
    if (contactUs && contactUs.length == 1)
    {
        contactUs[0].parentNode.removeChild(contactUs[0]);
    }

    /* 移除【文章存档】 */
    var articleTimeSort = document.getElementsByClassName("user-hotArticle sort timeSort");
    if (articleTimeSort && articleTimeSort.length == 1)
    {
        articleTimeSort[0].parentNode.removeChild(articleTimeSort[0]);
    }

    /* 移除【博主专栏】 */
    var hostColumn = document.getElementsByClassName("host-column");
    if (hostColumn && hostColumn.length == 1)
    {
        hostColumn[0].parentNode.removeChild(hostColumn[0]);
    }

    /* 移除【文章分类】 */
    var articleClassSort = document.getElementsByClassName("user-hotArticle sort ClassSort");
    if (articleClassSort && articleClassSort.length == 1)
    {
        articleClassSort[0].parentNode.removeChild(articleClassSort[0]);
    }

    /* 移除【博主最新文章】 */
    var newestArticle = document.getElementsByClassName("writings");
    if (newestArticle && newestArticle.length == 1)
    {
        newestArticle[0].parentNode.removeChild(newestArticle[0]);
    }

    /* 移除【博主热门文章】 */
    var hotArticle = document.getElementsByClassName("user-hotArticle");
    if (hotArticle && hotArticle.length == 1)
    {
        hotArticle[0].parentNode.removeChild(hotArticle[0]);
    }

    /* 移除【广告字样】 */
    var markImg = document.getElementsByClassName("append_mark_img");
    if (markImg && markImg.length == 1)
    {
        markImg[0].parentNode.removeChild(markImg[0]);
    }

    /* 移除【推荐文章列表】 */
    var recommedAriclesList = document.getElementsByClassName("recommend_list clearfix");
    if (recommedAriclesList && recommedAriclesList.length == 1)
    {
        recommedAriclesList[0].parentNode.removeChild(recommedAriclesList[0]);
    }

    /* 移除文章底部评论之前的【文章广告】 */
    var eduPromotion = document.getElementsByClassName("edu_promotion");
    if (eduPromotion && eduPromotion.length == 1)
    {
        eduPromotion[0].parentNode.removeChild(eduPromotion[0]);
    }
}

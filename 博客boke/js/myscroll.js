/**
 * Created by Xnew on 2016/8/4.
 */
function myScroll(){
    //        未声明 DTD 怪异
    if(window.pageYOffset != null){
        return {
            top : window.pageYOffset,
            left : window.pageXOffset
        };
    } else if(document.compatMode == "CSS1Compat"){
        return {
            top : document.documentElement.scrollTop,
            left : document.documentElement.scrollLeft
        }
    } else {
        return {
            top : document.body.scrollTop,
            left : document.body.scrollLeft
        }
    }

}
import constant from './action-types';

function newsReceived(news){
    return {
        type: constant.NEWS_RECEIVED,
        news: news
    }
}

export default newsReceived;

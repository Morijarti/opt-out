/**
 * Retrieves the tweets
 *
 * @param
 * @returns
 */
function getTweet(docuemnt){
  tweets = [];
  document.querySelectorAll('article [lang]').forEach(function(tweet){ tweets.push(tweet.innerText)});
  return tweets;
}

/**
 * Makes an REST call to and returns the result from the call
 *
 * @param
 * @returns
 */
function getSentimentScore(tweet) {
  
  return 
}

/**
 * Modifies the DOM when the tweet is deemed hateful or not
 *
 * @param
 * @returns
 */
function modifyHatefulTweet() {

}


  module.exports = {
    getTweet,
    getSentimentScore,
    modifyHatefulTweet
 }
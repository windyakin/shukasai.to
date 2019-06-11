(function(window, document) {
  window.onload = function() {
    var shukashu = ['しゅ', 'か', 'しゅー'];
    var getRandom = function(max) {
      return Math.floor(Math.random() * Math.floor(max));
    };
  
    var result = shukashu[getRandom(shukashu.length)] + shukashu[getRandom(shukashu.length)] + shukashu[getRandom(shukashu.length)];
    var tweetUrl = 'https://twitter.com/intent/tweet?url=https://shukasai.to/&text=' + encodeURIComponent(result);
  
    document.getElementById('result').textContent = result;
    document.getElementById('tweet').setAttribute('href', tweetUrl);
  };
})(window, document);

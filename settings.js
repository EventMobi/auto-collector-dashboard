window.settings = function() {
  // You an replace this timeframe with other relative timeframes
  // Examples: 'this_6_months', 'previous_6_weeks', or 'this_7_days'
  // See the Keen API docs for more relative timeframes: https://keen.io/docs/api/#relative-timeframes
  var timeframe = "this_4_weeks";

  // This is the projectId and readKey for an example project
  // Replace both with your own projectId and readKey to visualize data from your own Auto-Collector project  
  window.renderCharts(new Keen({
    projectId: '53bd52c7c9e16314e0000001',
    readKey: 'ee61dc72de2d80458dab0f1b1c743b566e9dfc09a20880c4fb2319f11701f776b30bf84ef56ed1f6afa35c6928a9ae3b7aab8ba40f2601125d184ce3a8cb390606eb982f9e53bcfed997c49be9e2b43a65ecd6cf2104dfa5842d6aaee0a0c2a66276a968dca48019691cd231930f9209'
  }), timeframe);
}
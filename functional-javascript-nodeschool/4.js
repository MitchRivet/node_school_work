// function getShortMessages(messages) {
//     result = [];
//     messages.map(function(m) {
//         if (m.message.length <50) {result.push(m.message);}
//     });
//     return result;
//     }
//
// module.exports = getShortMessages

module.exports = function getShortMessages(messages) {
    return messages.filter(function(m) { return m.message.length < 50 }).map(function(m){ return m.message });
}

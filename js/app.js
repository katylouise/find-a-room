var friendsObj = {
  "deluxe": {
    "friends": [
      "Bob Smith",
      "Jane Doe",
      "Bubba Hyde",
      "Betsy Toheavens"
    ]
  },
  "shared": {
    "friends": [
      "Bob Smith"
    ]
  },
  "animal-friendly": {
    "friends": [
      "Bob Smith",
      "Jane Doe",
      "Bubba Hyde"
    ]
  },
  "super-deluxe": {
    "friends": [
      "Bob Smith",
      "Jane Doe"
    ]
  },
  "another": {
    "friends": []
  }
}

$(document).foundation();
$(document).ready(function() {
  $('.room-link').click(function() {
    var room = $(this).attr('class').split(' ')[0];
    $('.room-description').show();
    $('.room-description').load("rooms/animal-friendly.html", function() {
      displayFriends(room);
    });
  });

  function displayFriends(room) {
    var friendsToDisplay = friendsObj[room]["friends"];
    //need to sort names alphabetically

    if (friendsToDisplay.length == 1) {
      $('.room-description .friend-info').text(friendsToDisplay[0] + ' has stayed here');
    }
    if (friendsToDisplay.length == 2) {
      $('.room-description .friend-info').text(friendsToDisplay[0] + ' and ' + friendsToDisplay[1] + ' have stayed here');
    }
    if (friendsToDisplay.length == 3) {
      $('.room-description .friend-info').text(friendsToDisplay[0] + ', ' + friendsToDisplay[1] + ', and 1 other friend have stayed here');
    }
    if (friendsToDisplay.length > 3) {
      var numFriendsLeft = friendsToDisplay.length - 2;
      $('.room-description .friend-info').text(friendsToDisplay[0] + ', ' + friendsToDisplay[1] + ', and ' + numFriendsLeft + ' other friends have stayed here');
    }
  }
});
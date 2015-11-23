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

$(document).ready(function() {
  $(document).foundation();

  $('.room-link').click(function() {
    $('.room-link').removeClass('room-selected');
    var room = $(this).attr('class').split(' ')[0];
    $('.room-description').show();
    $('.room-description').load("rooms/" + room + ".html", function() {
      displayFriends(room);
    });
    $(this).addClass('room-selected');
  });

  function displayFriends(room) {
    var friendsToDisplay = sortNames(friendsObj[room]["friends"]);
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

  function sortNames(arr) {
    return arr.sort(function(a, b) {
      var namesA = a.split(" ");
      var namesB = b.split(" ");
      if (namesA[1] == namesB[1]) {
        if (namesA[0] < namesB[0]) return -1;
        if (namesA[0] > namesB[0]) return 1;
      }

      if (namesA[1] < namesB[1]) return -1;
      if (namesA[1] > namesB[1]) return 1;
    });
  }
});
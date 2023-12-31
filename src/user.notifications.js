const notifications = [
  {
    id: 1,
    username: "Mark Webber",
    userPicture:"/assets/images/avatar-mark-webber.webp",
    actionText: " reacted to your recent post",
    focus: "My first tournament today!",
    ago: "1m ago",
    read: false,
  },
  {
    id: 2,
    username: "Angela Gray",
    userPicture:"/assets/images/avatar-angela-gray.webp",
    actionText: "followed you",
    ago: "5m ago",
    read: false,
  },
  {
    id: 3,
    username: "Jacob Thompsan",
    userPicture:"/assets/images/avatar-jacob-thompson.webp",
    actionText: "has joined your group",
    focus: "Chess Club",
    ago: "1 day ago",
    read: false,
  },
  {
    id: 4,
    username: "Rizky Hasanuddin",
    userPicture:"/assets/images/avatar-rizky-hasanuddin.webp",
    actionText: "sent you a private message",
    ago: "5 day ago",
    read: true,
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
  },
  {
    id: 5,
    username: "Kimbarly Smith",
    userPicture:"/assets/images/avatar-kimberly-smith.webp",
    actionText: "commented on your picture",
    commentedPicture:"src/assets/images/image-chess.webp",
    picture: "",
    ago: "1 week ago",
    read: true,
  },
  {
    id: 6,
    username: "Nathan Peterson",
    userPicture:"/assets/images/avatar-nathan-peterson.webp",
    actionText: "reacted to your recent post",
    focus: " end-game strategies to increase your win rate",
    ago: "2 week ago",
    read: true,
  },
  {
    id: 7,
    username: "Anna Kim",
    userPicture:"/assets/images/avatar-anna-kim.webp",
    actionText: "left the group",
    focus: "Chess Club",
    ago: "2 week ago",
    read: true,
  },
];

export default notifications
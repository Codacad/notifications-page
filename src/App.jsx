import { useEffect, useState } from "react";
import "./App.css";
import notificationsData from "./user.notifications";
function App() {
  const [notifications, setNotifications] = useState(notificationsData);
  let [unreadCount, setUnreadCount] = useState(0);
  useEffect(() => {
    let undreadNotifications = notifications.filter((notif) => {
      return notif.read === false;
    });
    setUnreadCount(undreadNotifications.length);
  }, []);

  
  const markRead = () => {
    let resetRead = [];
    notifications.forEach((notification, index) => {
      resetRead.push({ ...notification, read: true });
    });
    setNotifications(resetRead);
    setUnreadCount(0)
  };

  return (
    <>
      <div className="container bg-lightGrayishBlue1 p-2 sm:p-8 font-plusJakartaSans w-full min-h-[100vh] flex justify-center items-center">
        <div className="notifications bg-white p-6 rounded-xl w-full sm:w-[750px]">
          <header className="flex justify-between">
            <h2 className="flex justify-center items-center">
              <span className="text-2xl font-bold text-veryDarkBlue">
                Notifications
              </span>{" "}
              <span className="text-white bg-blue w-8 h-6 flex justify-center font-[800] rounded-sm ml-2 items-center">
                {unreadCount}
              </span>
            </h2>
            <span
              onClick={markRead}
              className="text-md hover:text-blue text-grayishBlue cursor-pointer"
            >
              Mark all as read
            </span>
          </header>
          {notifications.map((notif, index) => {
            return (
              <div
                className={`notification my-4 p-4 rounded-md gap-4 flex justify-content items-start ${
                  notif.read ? "" : "bg-lightGrayishBlue1"
                }`}
                key={notif.id}
              >
                <div className="picture w-[40px] h-[40px]">
                  <img className="" src={`src${notif.userPicture}`} alt="" />
                </div>
                <div className="text-content flex flex-col">
                  <div className="content flex flex-col">
                    <div className="flex items-center gap-2">
                      <div>
                        <strong className="font-bold text-veryDarkBlue hover:text-blue cursor-pointer">
                          {notif.username}
                        </strong>
                        <span className="text-darkGrayishBlue">
                          {" "}
                          {notif.actionText}
                        </span>
                        <strong
                          className={`text-darkGrayishBlue cursor-pointer hover:text-blue ${
                            notif.focus == "Chess Club" ? "text-blue" : ""
                          }`}
                        >
                          {" "}
                          <span>{notif.focus}</span>
                        </strong>
                      </div>
                      {notif.read ? (
                        ""
                      ) : (
                        <span className="w-2 block h-2 rounded-full bg-red"></span>
                      )}
                    </div>
                    <div className="ago text-sm text-grayishBlue">
                      {notif.ago}
                    </div>
                  </div>
                  <div>
                    {notif.message && (
                      <div className="message text-darkGrayishBlue hover:bg-lightGrayishBlue1 w-full border border-lightGrayishBlue2 p-4 mb-4 rounded-md mt-2">
                        {notif.message}
                      </div>
                    )}
                  </div>
                </div>
                {notif.commentedPicture && (
                  <div className="w-[40px] h-[40px] ml-auto">
                    <img src={notif.commentedPicture} alt="" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

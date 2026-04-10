import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userList } from "./global_state/store";
import "./App.css";

const App = () => {
  const [myUserList, setMyUserList] = useRecoilState(userList);

  useEffect(() => {
    const fetchUser = async () => {
      setMyUserList((prev) => ({ ...prev, loading: true }));
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const userData = await response.json();

        setMyUserList((prev) => ({ ...prev, data: userData }));
      } catch (error) {
        const errorMessage = error.message;
        setMyUserList((prev) => ({
          ...prev,
          error: errorMessage,
          loading: false,
        }));
      } finally {
        setMyUserList((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      {myUserList.loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
          <p>Đang tải dữ liệu</p>
        </div>
      ) : (
        <ul>
          {myUserList.data.map((item) => (
            <li key={item.id}>
              {item.name} - {item.username}
            </li>
          ))}
        </ul>
      )}
      ;
    </div>
  );
};

export default App;

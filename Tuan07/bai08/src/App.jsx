import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userList } from "./global_state/store";
import _ from "lodash";

const App = () => {
  const [myUserList, setMyUserList] = useRecoilState(userList);
  const [, setSearchTerm] = useState("");

  const fetchUser = async (query = "") => {
    setMyUserList((prev) => ({ ...prev, loading: true }));
    try {
      const url = query
        ? `https://jsonplaceholder.typicode.com/users?name_like=${query}`
        : "https://jsonplaceholder.typicode.com/users";
      const response = await fetch(url);
      const fetchData = await response.json();

      setMyUserList((prev) => ({ ...prev, data: fetchData }));
    } catch (myError) {
      setMyUserList((prev) => ({ ...prev, error: myError.message }));
    } finally {
      setMyUserList((prev) => ({ ...prev, loading: false }));
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const debounceSearch = useCallback(
    _.debounce((nextValue) => {
      console.log("Đang fetch API với từ khóa:", nextValue);
      fetchUser(nextValue);
    }, 1000),
    [],
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    debounceSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập tên của user muốn tìm kiếm vào đây..."
        onChange={handleInputChange}
      />
      <h2>List user đã tìm thấy (gọi API 1 giây sau khi dừng gõ)</h2>
      <ul>
        {myUserList.data.map((item) => (
          <li key={item.id}>
            {item.name} - {item.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

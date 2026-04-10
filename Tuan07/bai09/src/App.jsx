import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { authState } from "./global_state/store";

const App = () => {
  const [auth, setAuth] = useRecoilState(authState);
  const [form, setForm] = useState({ username: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuth((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      if (form.username === "admin" && form.password === "123") {
        const fakeToken = "JWT_TOKEN_ABC_123_QUAN_IUH";

        localStorage.setItem("accessToken", fakeToken);
        localStorage.setItem("username", form.username);

        setAuth({
          token: fakeToken,
          username: form.username,
          isLoading: false,
          error: null,
        });
      } else {
        throw new Error("Sai tài khoản hoặc mật khẩu (Thử: admin/123)");
      }
    } catch (err) {
      setAuth((prev) => ({ ...prev, isLoading: false, error: err.message }));
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    setAuth({ token: null, username: null, isLoading: false, error: null });
  };

  return (
    <div>
      {auth.token ? (
        <div>
          <h2>Chào mừng, {auth.username}!</h2>
          <p>
            Token hiện tại: <code>{auth.token}</code>
          </p>
          <button onClick={handleLogout}>Đăng xuất (Logout)</button>

          <div>
            <h3>Dữ liệu bảo mật</h3>
          </div>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Đăng nhập</h2>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <br />
          <button type="submit" disabled={auth.isLoading}>
            {auth.isLoading ? "Đang kiểm tra..." : "Login"}
          </button>
          {auth.error && <p>{auth.error}</p>}
        </form>
      )}
    </div>
  );
};

export default App;

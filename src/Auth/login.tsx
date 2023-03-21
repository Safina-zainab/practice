import "../Auth/login.css";
import axios from "axios";
const Login = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const Data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", Data)
      .then((res) => {
        console.log(res);
        e.target.reset();
      });
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="container col-4 mt-5">
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;

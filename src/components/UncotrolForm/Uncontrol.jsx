const Uncontrol = () => {
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.name);
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const all = { name, email, password };
    console.log(all);
    e.target.reset();
  };
  return (
    <div>
      <h2>Salam to me</h2>
      <form onSubmit={formSubmit}>
        <label>
          <span>Name</span>
          <input type="text" placeholder="put your name" name="name" />
        </label>
        <label>
          <span>Email</span>
          <input type="email" placeholder="put your email" name="email" />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            placeholder="put your password"
            name="password"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Uncontrol;

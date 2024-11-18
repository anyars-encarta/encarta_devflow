const AuthForm = ({ type }: { type: string }) => {
  return (
    <div>
      <h1>{type === "sign-in" ? "Sign In" : "Create your account"}</h1>

      {type === "sign-up" && (
        <>
          <label htmlFor="username"></label>
          <input type="text" id="username" placeholder="Username" />
        </>
      )}

      <label htmlFor="email"></label>
      <input type="email" id="email" placeholder="john@doe.com" />

      <label htmlFor="password"></label>
      <input type="password" id="password" placeholder="Password" />
    </div>
  );
};

export default AuthForm;

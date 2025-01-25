export function User({ user }) {
  const { id, name, email, phone } = user;
  return <>
    {id}|{name}|{email}|{phone}
  </>
}
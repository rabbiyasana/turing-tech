export function AuthHeader() {
  const aToken = localStorage.getItem("access_token");
  if (aToken) {
    return {
      Authorization: `Bearer ${aToken}`,
    };
  } else {
    {
    }
  }
}

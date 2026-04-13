import apiBaseUrl from "../apiBaseUrl";

export default async function fetchMyProfile(token, setProfileData) {
    const url = `${apiBaseUrl}/auth/me`
    try {
      const res = await fetch(url, {
        method: 'GET', 
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + token
        },
      });
      const responseData = await res.json();
      const data = [res, responseData]
      setProfileData(data);
      return data
    } catch (err) {
      console.log(err)
      return err
    }
  }

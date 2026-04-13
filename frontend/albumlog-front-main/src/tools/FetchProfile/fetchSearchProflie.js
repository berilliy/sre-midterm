import apiBaseUrl from "../apiBaseUrl";

export default async function fetchSearchProfile(nickname, setProfileData) {
    const url = `${apiBaseUrl}/user/search/${nickname}`
    try {
      const res = await fetch(url, {
        method: 'GET'
      });
      const responseData = await res.json();
      const data = [res, responseData]
      setProfileData(responseData)
    } catch (err) {
      console.log(err)
      return err
    }
  }

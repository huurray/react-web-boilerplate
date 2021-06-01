// redux
import useAuthRedux from "stores/auth/useAuthRedux";
// types
import { User } from "../types";

export default function useAuthAPI() {
  const { authDispatch } = useAuthRedux();

  async function getUserAPI(): Promise<User> {
    try {
      const res: User = await new Promise((resolve) =>
        setTimeout(() => resolve({ name: "huurray" }), 1000)
      );
      authDispatch.setUser(res);
      return res;
    } catch (error) {
      throw error;
    }
  }

  return {
    getUserAPI,
  };
}

import { supabase } from "./supabaseClient";
import { getProfilePicURL } from "./getProfilePicUrl";

export async function fetchUserProfile() {
  try {
    const user = await supabase.auth.getUser();
    const userId = user.data.user.id;

    const { data, error } = await supabase.from("profile").select("*").eq("id", userId).single();

    return data;

  } catch (error) {
    alert(error.message);
  }
}

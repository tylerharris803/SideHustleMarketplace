import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

// export const currentUser = await supabase.auth.getUser().data.user
//
// supabase.auth.onAuthStateChange(async () => {
//     currentUser.set((await supabase.auth.getUser()).data.user)
//   }
// )

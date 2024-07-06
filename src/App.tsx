import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { IOrganizations } from "./interfaces/organizations";
import Routers from "./routes/index.routes";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || "";
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [countries, setCountries] = useState<IOrganizations[]>([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data }: any = await supabase.from("organizations").select();
    setCountries(data);
  }

  console.log(countries);

  return (
    <>
      <Routers />
    </>
  );
}

export default App;

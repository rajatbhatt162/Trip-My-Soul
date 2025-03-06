import { getTrekCategories } from "@/services";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/layout/header"));

const fetchAllTrekCategories = async () => {
  try {
    const res = await getTrekCategories();
    return res.data.data.items;
  } catch (error) {
    console.log("error in fetching trek categories", error);
  }
};

export async function MegaHeaderSSr() {
  const allTrekCategories = await fetchAllTrekCategories();
  return (
    <div>
      <Header allTrekCategories={allTrekCategories} />
    </div>
  );
}

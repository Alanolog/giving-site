import React from "react";
import HeroGiveItems from "../organisms/HeroGiveItems";
import GiveItemsForm from "../organisms/GiveItemsForm";
import FormBox from "../organisms/FormBox";
function GiveItems({ user, setUser }) {
  return (
    <>
      <HeroGiveItems user={user} setUser={setUser} />
      <GiveItemsForm user={user} />
      <FormBox />
    </>
  );
}
export default GiveItems;

import React from "react";
import HeroGiveItems from "../organisms/HeroGiveItems";
import GiveItemsWarning from "../molecules/GiveItemsWarning";
import FormBox from "../organisms/FormBox";
function GiveItems({ user }) {
  return (
    <>
      <HeroGiveItems user={user} />
      <GiveItemsWarning />
      <FormBox />
    </>
  );
}
export default GiveItems;

import React from "react";
import HeroGiveItems from "../organisms/HeroGiveItems";
import FormBox from "../organisms/FormBox";
function GiveItems({ user }) {
  return (
    <>
      <HeroGiveItems user={user} />
      <FormBox />
    </>
  );
}
export default GiveItems;

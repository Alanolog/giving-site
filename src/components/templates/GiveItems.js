import React from "react";
import HeroGiveItems from "../organisms/HeroGiveItems";
import GiveItemsForm from "../organisms/GiveItemsForm";
import FormBox from "../organisms/FormBox";
import { Redirect } from "react-router";
function GiveItems({ user, setUser }) {
  if (!user) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <HeroGiveItems user={user} setUser={setUser} />
      <GiveItemsForm user={user} />
      <FormBox />
    </>
  );
}
export default GiveItems;

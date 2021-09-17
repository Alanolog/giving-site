import React, { useState } from "react";
import HelpInfoRecord from "../atoms/HelpInfoRecord";
import HelpInfoContentButton from "../atoms/HelpInfoContentButton";
function HelpInfoFoundations() {
  const [option, setOption] = useState(1);
  return (
    <main className="help-info-content">
      <h4 className="help-info-content-heading">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </h4>
      <div className="help-info-content-records">
        {option === 1 ? (
          <>
            <HelpInfoRecord
              title={"Fundacja “Dbam o Zdrowie”"}
              description={
                "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej."
              }
              type={"ubrania, jedzenie, sprzęt AGD, meble, zabawki"}
            />
            <HelpInfoRecord
              title={"Fundacja “Dla dzieci”"}
              description={"Cel i misja: Pomoc dzieciom z ubogich rodzin."}
              type={"ubrania, meble, zabawki"}
            />
            <HelpInfoRecord
              title={"Fundacja “Bez domu”"}
              description={
                "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania."
              }
              type={"ubrania, jedzenie, ciepłe koce"}
            />
          </>
        ) : option === 2 ? (
          <>
            <HelpInfoRecord
              title={"Fundacja “Dbam o Zdrowie”"}
              description={"Cel i misja: Pomoc dzieciom z ubogich rodzin."}
              type={"ubrania, jedzenie, sprzęt AGD, meble, zabawki"}
            />
            <HelpInfoRecord
              title={"Fundacja “Dla Maluchów”"}
              description={
                "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania."
              }
              type={"ubrania, meble, zabawki"}
            />
            <HelpInfoRecord
              title={"Fundacja “Bez domu”"}
              description={
                "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania."
              }
              type={"ubrania, jedzenie, ciepłe koce"}
            />
          </>
        ) : option === 3 ? (
          <>
            <HelpInfoRecord
              title={"Fundacja “Dbam o Zdrowie”"}
              description={"Cel i misja: Pomoc dzieciom z ubogich rodzin."}
              type={"ubrania, jedzenie, sprzęt AGD, meble, zabawki"}
            />
            <HelpInfoRecord
              title={"Fundacja “Bez domu”"}
              description={
                "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania."
              }
              type={"ubrania, jedzenie, ciepłe koce"}
            />
          </>
        ) : null}
      </div>
      <div>
        <HelpInfoContentButton pageNumber={1} setOption={setOption} />
        <HelpInfoContentButton pageNumber={2} setOption={setOption} />
        <HelpInfoContentButton pageNumber={3} setOption={setOption} />
      </div>
    </main>
  );
}
export default HelpInfoFoundations;

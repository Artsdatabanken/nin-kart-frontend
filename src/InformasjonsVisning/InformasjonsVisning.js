import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Lokalitet from "InformasjonsVisning/Lokalitet/Lokalitet";
import Hjelp from "InformasjonsVisning/Hjelp/Hjelp";
import parseQueryString from "./Katalog/KatalogFunksjoner/parseQueryString";
import finnKurvevariabler from "./Katalog/KatalogFunksjoner/finnKurvevariabler";
import KatalogFane from "./Katalog/Katalog";
import backend from "Funksjoner/backend";

// Denne boksen inneholder alle informasjonsvisningssidene
function InformasjonsVisning(props) {
  const {
    opplyst,
    onMouseEnter,
    onMouseLeave,
    onUpdateLayerProp,
    onUpdateMetaProp,
    meta,
    location,
    aktivTab,
    path,
    handleNavigate,
    handleLokalitetUpdate
  } = props;

  const [environment, setEnvironment] = useState({});
  const [latlng, setLatLng] = useState({});
  useEffect(() => {
    if (location.search && location.search.includes("lng")) {
      let latlng = {};
      let locations = props
        .getPathNotTab(location)
        .replace("?", "")
        .split("&");
      locations[0] = locations[0].split("=");
      locations[1] = locations[1].split("=");
      latlng[locations[0][0]] = locations[0][1];
      latlng[locations[1][0]] = locations[1][1];
      setLatLng(latlng);
    }

    if (latlng.lat && latlng.lng) {
      backend.hentPunkt(latlng.lng, latlng.lat).then(data => {
        console.log("henter punkt ...", data);
        if (!data) {
          console.log(latlng.lat, latlng.lng, "no data");
          return null;
        }
        console.log("data:", data);
        setEnvironment(data.environment);
      });
    }

    if (meta && meta.barn && environment) {
      let barn = meta.barn;
      for (let i in barn) {
        console.log(barn[i].kode);
        if (environment[nåvrendekode]) {
          console.log(environment[nåvrendekode]);
        }
      }
    }
  }, [location, meta]);

  const kurve = finnKurvevariabler(props.aktiveLag);
  let nåvrendekode = null;
  if (meta) {
    nåvrendekode = meta.kode;
  }
  if (path === "/Natur_i_Norge/hjelp") {
    return <Hjelp aktivTab={aktivTab} />;
  }
  console.log("update");

  if (
    location.search &&
    location.search.includes("?lng") &&
    path.includes("lokalitet")
  ) {
    const { lng, lat, vis } = parseQueryString(location.search);
    return (
      <Lokalitet
        lng={lng}
        lat={lat}
        vis={vis}
        aktivTab={aktivTab}
        history={props.history}
        onNavigate={handleNavigate}
        handleLokalitetUpdate={handleLokalitetUpdate}
      />
    );
  }

  return (
    <div
      className={
        (aktivTab === "informasjon" ? "mobile_on" : "mobile_off") + " main_body"
      }
    >
      {meta && (
        <KatalogFane
          meta={meta}
          onFitBounds={props.onFitBounds}
          onUpdateLayerProp={onUpdateLayerProp}
          onNavigate={handleNavigate}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          opplyst={opplyst}
          data={{}}
          onUpdateMetaProp={onUpdateMetaProp}
          erAktivert={props.erAktivert}
          onToggleLayer={props.onToggleLayer}
          kurve={kurve}
        />
      )}

      {latlng.lat && (
        <>
          <h3>Nåværende valgte lokasjon</h3>
          lat {latlng.lat}, lng {latlng.lng}
          {meta && (
            <>
              <p>Vi har meta for {nåvrendekode}</p>
              {environment && (
                <p>
                  {environment[nåvrendekode] ? (
                    <>Koden er en miljøvariabel for denne lokaliteten</>
                  ) : (
                    <>Koden er IKKE en miljøvariabel for denne lokaliteten</>
                  )}
                </p>
              )}
            </>
          )}
        </>
      )}

      <div className="big_page_sidebar" />
    </div>
  );
}

export default withRouter(InformasjonsVisning);

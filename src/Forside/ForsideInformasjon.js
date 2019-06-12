﻿import React, { useState } from "react";
import { withRouter } from "react-router";
import "style/Forside.css";
import { Layers } from "@material-ui/icons";

import Utforsk from "HamburgerMeny/Utforsk/Utforsk";

const ForsideInformasjon = props => {
  const [showInfo, setShowInfo] = useState(true);
  if (props.location.pathname !== "/") return null;
  if (props.location.pathname !== "/") return null;

  return (
    <React.Fragment>
      {showInfo !== "turn off" && (
        <div
          className="frontpage"
          onClick={e => {
            e.stopPropagation();
            //props.history.push("/Natur_i_Norge/");
            setShowInfo(false);
          }}
        >
          <div className="frontpage_body">
            <div className="frontpage_header">
              <div className="frontpage_icon">
                <Layers />{" "}
              </div>
              <div>
                <h1>NiN-Kart</h1>
                <h2>Natur i Norge</h2>
              </div>
            </div>

            <div className="frontpage_feature_block">
              <h2>Hva er Natur i Norge?</h2>
              <p>
                {" "}
                Natur i Norge (NiN) er et type- og beskrivelsessystem for all
                variasjon i naturen. NiN håndterer variasjonen i alle naturmiljø
                i Norge, fra de store havdyp til de høyeste fjell, og fra
                Skagerrak i sør til Svalbard og Polhavet i nord. Les mer om
                prosjektet{" "}
                <a href="https://www.artsdatabanken.no/NiN">
                  på Artsdatabankens nettsider om NiN.
                </a>
              </p>
            </div>

            <div className="frontpage_link_items">
              <h2>Utforsk NiN-kart</h2>
              <Utforsk parent={props} />
            </div>
          </div>
          <div className="frontpage_footer">
            <img
              src="https://data.artsdatabanken.no/Datakilde/Artsdatabanken/logo_med_navn_408.png"
              alt="Artsdatabanken logo"
            />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default withRouter(ForsideInformasjon);

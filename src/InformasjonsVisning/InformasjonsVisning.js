import React from "react";
import { withRouter } from "react-router-dom";
import Lokalitet from "InformasjonsVisning/Lokalitet/Lokalitet";
import Hjelp from "InformasjonsVisning/Hjelp/Hjelp";
import parseQueryString from "./Katalog/KatalogFunksjoner/parseQueryString";
import finnKurvevariabler from "./Katalog/KatalogFunksjoner/finnKurvevariabler";
import KatalogFane from "./Katalog/Katalog";
import backend from "Funksjoner/backend";

// Denne boksen inneholder alle informasjonsvisningssidene
class InformasjonsVisning extends React.Component {
  dataQueryNumber = 0;
  state = {
    error: "",
    data: {},
    environment: {}
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.meta !== this.props.meta) this.setState({ query: null });
  }

  render() {
    const data = this.state.data;
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
    } = this.props;

    const kurve = finnKurvevariabler(this.props.aktiveLag);
    let nåvrendekode = null;
    if (meta) {
      nåvrendekode = meta.kode;
    }
    if (path === "/Natur_i_Norge/hjelp") {
      return <Hjelp aktivTab={aktivTab} />;
    }
    let latlng = {};
    if (location.search && location.search.includes("lng")) {
      let locations = this.props
        .getPathNotTab(location)
        .replace("?", "")
        .split("&");
      locations[0] = locations[0].split("=");
      locations[1] = locations[1].split("=");
      latlng[locations[0][0]] = locations[0][1];
      latlng[locations[1][0]] = locations[1][1];
    }

    if (latlng.lat && latlng.lng) {
      backend.hentPunkt(latlng.lng, latlng.lat).then(data => {
        if (!data) {
          return null;
        }
        //console.log(data);
        this.setState({ environment: data.environment });
        // console.log(this.state.environment[nåvrendekode])
      });
    }
    if (meta && meta.barn && this.state.environment) {
      let barn = meta.barn;
      for (let i in barn) {
        console.log(barn[i].kode);
        if (this.state.environment[nåvrendekode]) {
          console.log(this.state.environment[nåvrendekode].barn[kode]);
        }
      }
    }

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
          history={this.props.history}
          onNavigate={handleNavigate}
          handleLokalitetUpdate={handleLokalitetUpdate}
        />
      );
    }

    return (
      <div
        className={
          (aktivTab === "informasjon" ? "mobile_on" : "mobile_off") +
          " main_body"
        }
      >
        {meta && (
          <KatalogFane
            meta={meta}
            onFitBounds={this.props.onFitBounds}
            onUpdateLayerProp={onUpdateLayerProp}
            onNavigate={handleNavigate}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            opplyst={opplyst}
            data={data}
            onUpdateMetaProp={onUpdateMetaProp}
            has_error={this.state.error}
            handleCloseSnackbar={this.handleCloseSnackbar}
            erAktivert={this.props.erAktivert}
            onToggleLayer={this.props.onToggleLayer}
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
                {this.state.environment && (
                  <p>
                    {this.state.environment[nåvrendekode] && (
                      <>Koden er en miljøvariabel for denne lokaliteten</>
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
  handleCloseSnackbar = () => this.setState({ error: null });
}

export default withRouter(InformasjonsVisning);

import React from "react";
import språk from "Funksjoner/språk";

class OverlappBoks extends React.Component {
  render() {
    const { latlng, meta, nåvrendekode, environment, landskap } = this.props;
    if (!meta) return null;

    if (!latlng.lat) return null;
    let landskaplist = [];
    if (landskap.url) {
      let landskapitems = ("/" + landskap.url).replace(meta.url, "").split("/");
      let currentstring = meta.url;
      for (let i in landskapitems) {
        if (landskapitems[i] !== "") {
          let item = landskapitems[i];
          currentstring += "/" + item;
          landskaplist.push([currentstring, item.replace(/_/g, " ")]);
        }
      }
      console.log(landskaplist);
    }

    return (
      <div className="art_data_displayer">
        <div className="badge_container">
          <h3>Nåværende valgte lokasjon</h3>
          lat {latlng.lat}, lng {latlng.lng}
          {meta && (
            <>
              <p>Vi har meta for {nåvrendekode}</p>
              {environment && (
                <>
                  {environment[nåvrendekode] ? (
                    <>Koden er en miljøvariabel for denne lokaliteten</>
                  ) : (
                    <>Koden er IKKE en miljøvariabel for denne lokaliteten</>
                  )}
                  <br />

                  {landskap.kode && landskap.kode.includes(meta.kode) ? (
                    <>
                      <h2>Landskapstype</h2>
                      Den valgte lokasjonen inneholder denne landskapstypen
                      <br />
                      {landskaplist.map(e => {
                        return (
                          <button className="katalog_link_displayer">
                            <div
                              className="subelement_decorative_image"
                              style={{
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundImage:
                                  "url('https://data.artsdatabanken.no" +
                                  e[0] +
                                  "/foto_408.jpg')",
                                zIndex: "10"
                              }}
                            />

                            <div className="subelement_text nav_text">
                              <span className="nav_title">{e[1]}</span>
                            </div>
                          </button>
                        );
                      })}
                    </>
                  ) : (
                    "Den valgte lokasjonen inneholder ikke denne landskapstypen"
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default OverlappBoks;

import React from "react";
import KatalogHeader from "./KatalogHeader/KatalogHeader";
import Taksonomi from "./Klassifiseringer/Taksonomi";
import Risikovurdering from "./Klassifiseringer/Risikovurdering";
import Egenskaper from "./Klassifiseringer/Egenskaper";
import KatalogBarneliste from "./KatalogBarneliste/KatalogBarneliste";
import KatalogGradienter from "./KatalogGradienter/KatalogGradienter";
import KatalogKilder from "./KatalogKilder/KatalogKilder";
import Truetvurdering from "./Klassifiseringer/Truetvurdering";

const KatalogFane = ({
  meta,
  onUpdateLayerProp,
  onFitBounds,
  onNavigate,
  onMouseEnter,
  onMouseLeave,
  opplyst,
  data,
  onUpdateMetaProp,
  erAktivert,
  onToggleLayer,
  kurve
}) => {
  if (!meta) return null;
  return (
    <>
      <div className="main_body_wrapper">
        <KatalogHeader
          meta={meta}
          onFitBounds={onFitBounds}
          onUpdateLayerProp={onUpdateLayerProp}
        />
        <div className="art_data_displayer">
          <Taksonomi meta={meta} onNavigate={onNavigate} />
          <Egenskaper meta={meta} onNavigate={onNavigate} />
          <Risikovurdering meta={meta} onNavigate={onNavigate} />
          <Truetvurdering meta={meta} onNavigate={onNavigate} />
        </div>

        <KatalogGradienter
          meta={meta}
          onNavigate={onNavigate}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          opplyst={opplyst}
        />

        <KatalogBarneliste
          meta={meta}
          onNavigate={onNavigate}
          data={data}
          onUpdateMetaProp={onUpdateMetaProp}
          opplyst={opplyst}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          isDatakilde={meta.tittel.nb}
        />

        <KatalogKilder
          data={data}
          meta={meta}
          onNavigate={onNavigate}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onFitBounds={onFitBounds}
          erAktivert={erAktivert}
          opplyst={opplyst}
          onToggleLayer={onToggleLayer}
          onUpdateLayerProp={onUpdateLayerProp}
          onUpdateMetaProp={onUpdateMetaProp}
          kurve={kurve}
        />
      </div>
    </>
  );
};
export default KatalogFane;

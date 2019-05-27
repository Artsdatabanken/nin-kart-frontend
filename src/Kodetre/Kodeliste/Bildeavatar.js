import { Avatar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import config from "Funksjoner/config";

const styles = {
  img: {
    objectFit: "contain",
    filter: "drop-shadow(1px 1px 1px #666)"
  },
  small: { width: 24, height: 24, fontSize: 13 },
  small_noborder: {
    borderRadius: 0,
    width: 24,
    height: 24,
    fontSize: 13,
    overflow: "visible"
  }
};

class BildeAvatar extends Component {
  // Primarily used to display avatars of searchable content, such as logos in the search menu
  // And also in the sidebar display box header thing
  render() {
    const { farge, farge0, classes, kode, url } = this.props;
    const size = "small";
    const prefiks = kode.substring(0, 2);
    const tekst = prefiks;
    if ("AO,OR,VV".indexOf(prefiks) >= 0)
      return (
        <Avatar
          alt="logo"
          classes={{
            root: classes[size + "_noborder"],
            img: classes.img
          }}
          src={config.logo(url)}
        />
      );
    return (
      <Avatar
        classes={{
          root: classes[size]
        }}
        style={{
          backgroundColor: !farge0 && farge,
          backgroundImage: farge0 && `linear-gradient(${farge}, ${farge0})`,
          filter: "drop-shadow(1px 1px 1px #666)"
        }}
      >
        {false && tekst}
      </Avatar>
    );
  }
}

export default withStyles(styles)(BildeAvatar);

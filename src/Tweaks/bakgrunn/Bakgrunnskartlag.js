import {
  Avatar,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Switch,
} from '@material-ui/core'
import { default as React } from 'react'
import { withRouter } from 'react-router'
import Checkboard from '../../Kodetre/Kodeliste/Checkboard'

const Bakgrunnskartlag = ({
  onUpdateLayerProp,
  lagNavn,
  tittel,
  erSynlig,
  farge,
  history,
}) => (
  <ListItem
    onClick={() => history.push('/lag/bakgrunnskart/' + lagNavn)}
    button={true}
  >
    <Switch
      onClick={e => e.stopPropagation()}
      onChange={() => onUpdateLayerProp('bakgrunnskart', lagNavn, !erSynlig)}
      checked={erSynlig}
    />
    <ListItemText primary={tittel} />
    <ListItemSecondaryAction
      onClick={() => history.push('/lag/bakgrunnskart/' + lagNavn)}
      style={{ cursor: 'pointer' }}
    >
      <Avatar>
        <Checkboard color={farge} />
      </Avatar>
    </ListItemSecondaryAction>
  </ListItem>
)

export default withRouter(Bakgrunnskartlag)

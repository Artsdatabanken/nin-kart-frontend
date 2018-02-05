import React from 'react'
import { ListItem } from 'material-ui'
import InfoOutline from 'material-ui/svg-icons/action/info-outline'

function PointInfo(props) {
  if (props.pointInfo && Object.keys(props.pointInfo).length > 0)
    return (
      <React.Fragment>
        {Object.keys(props.pointInfo).map(key => {
          const item = props.pointInfo[key]
          return (
            <ListItem
              primaryText={item.value}
              secondaryText={(item.name || item.kode) + ' (' + key + ')'}
              key={key}
              rightAvatar={
                item.article && (
                  <a target="_blank" href={item.article /*'/kode/LKM_'+key*/}>
                    <InfoOutline style={{ color: '#aaa' }} />
                  </a>
                )
              }
            />
          )
        })}
      </React.Fragment>
    )
  return null
}

export default PointInfo

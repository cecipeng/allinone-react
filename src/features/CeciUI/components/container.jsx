import React from 'react'

// ====== Components ====== //
import Menu, { MenuItem, MenuSub, MenuItemGroup, MenuDivider} from '../../../common/components/menu/index'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    
    return (
      <div>
        <Menu menuWidth='300px' defaultActiveKeys='c1-6-2'>
          <MenuItem itemIcon='icon-user' itemKey='a1' itemTitle='a1' />
          <MenuItem itemIcon='icon-user' itemKey='b1' itemTitle='b1'>
            <MenuSub>
              <MenuItem itemKey='b1-1' itemTitle='b1-1'/>
              <MenuItem itemKey='b1-2' itemTitle='b1-2' />
            </MenuSub>
          </MenuItem>
          <MenuItem itemIcon='icon-user' itemKey='c1' itemTitle='c1'>
            <MenuSub>
              <MenuItemGroup>
                <MenuItem itemKey='c1-1' itemTitle='c1-1' />
                <MenuItem itemKey='c1-2' itemTitle='c1-2' />
                <MenuItem itemKey='c1-3' itemTitle='c1-3' />
              </MenuItemGroup>
              <MenuItemGroup>
                <MenuItem itemKey='c1-4' itemTitle='c1-4' />
                <MenuItem itemKey='c1-5' itemTitle='c1-5' />
                <MenuItem itemKey='c1-6' itemTitle='c1-6'>
                  <MenuSub>
                    <MenuItem itemKey='c1-6-1' itemTitle='c1-6-1' />
                    <MenuItem itemKey='c1-6-2' itemTitle='c1-6-2' />
                    <MenuItem itemKey='c1-6-3' itemTitle='c1-6-3' />
                  </MenuSub>
                </MenuItem>
                <MenuDivider />
                <MenuItem itemKey='c1-7' itemTitle='c1-7' />
              </MenuItemGroup>
            </MenuSub>
          </MenuItem>
        </Menu>
      </div>
    )
  }
}
